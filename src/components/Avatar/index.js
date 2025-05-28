import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.scss";

const Avatar = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  const mouseLightRef = useRef(null);
  const [error, setError] = useState(false);
  const baseScaleRef = useRef(2); // Store the base scale for reference
  const headBoneRef = useRef(null); // Add this at the top with other refs

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const getModelScale = () => {
    if (window.innerWidth <= 768) {
      return baseScaleRef.current * 0.4; // 60% of original size on mobile
    }
    if (window.innerWidth <= 1368) {
      return baseScaleRef.current * 0.5; // 80% of original size for mid screens
    }
    return baseScaleRef.current; // 100% for large screens
  };

  const updateModelScale = (model) => {
    if (!model) return;

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = getModelScale() / maxDim;

    model.scale.set(scale, scale, scale);
  };

  const updateCameraSettings = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;

    controlsRef.current.minDistance = 0.5;
    controlsRef.current.maxDistance = 5;

    camera.updateProjectionMatrix();
  };

  const focusOnHead = (model) => {
    // Create a bounding box for the model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Calculate head position (upper part of the model)
    const headCenter = new THREE.Vector3(
      center.x * 3,
      center.y + size.y * 3.85, // Move up to the head area
      center.z * 2
    );

    // Adjust headCenter.y based on viewport width
    let yOffset = 0;
    if (window.innerWidth <= 768) {
      yOffset = 0.4;
    } else if (window.innerWidth <= 1368) {
      yOffset = 0.5;
    } else {
      yOffset = -0.1;
    }
    headCenter.y += yOffset;

    // Set camera position for a headshot
    const camera = controlsRef.current.object;
    camera.fov = 25; // Narrower FOV for headshot
    camera.position.set(
      headCenter.x,
      headCenter.y + size.y * 0.2, // Raise the camera higher on Y axis
      15 // Move back enough to see the head
    );

    // Look at the head
    camera.lookAt(headCenter);

    // Update controls target to head position
    controlsRef.current.target.copy(headCenter);
    controlsRef.current.update();

    // Force camera update
    camera.updateProjectionMatrix();
  };

  const handleMouseMove = (event) => {
    if (!mountRef.current || !mouseLightRef.current) return;

    // Calculate mouse position in normalized device coordinates (-1 to +1)
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Update light position
    mouseLightRef.current.position.x = x * 5;
    mouseLightRef.current.position.y = -y * 5;

    // Rotate head bone if found
    if (headBoneRef.current) {
      // Different max angles for up and down
      let maxUp = Math.PI / 9;    // ~40 degrees (upstairs)
      let maxDown = Math.PI / 4;    // ~20 degrees (downstairs)
      let rotationX;
      if (y < 0) {
        // Looking up (mouse above center)
        rotationX = -y * maxUp;
      } else {
        // Looking down (mouse below center)
        rotationX = -y * maxDown;
      }
      const rotationY = x * Math.PI / 6; // keep left/right as before
      headBoneRef.current.rotation.y = rotationY;
      headBoneRef.current.rotation.x = rotationX;
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      // 15, // Adjust FOV based on device
      // mountRef.current.clientWidth / mountRef.current.clientHeight,
      // 0.1,
      // 1000
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Reduced ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.3); // Reduced directional light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Mouse-following light
    const mouseLight = new THREE.PointLight(0xffffff, 4, 5); // Increased intensity, reduced range
    mouseLight.position.set(5, 0, 2);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;

    // Add mouse move event listener
    mountRef.current.addEventListener("mousemove", handleMouseMove);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.minDistance = 0.5;
    controls.maxDistance = 5;
    controls.zoomSpeed = 0.5;
    controls.maxPolarAngle = Math.PI * 0.7;
    controls.minPolarAngle = Math.PI * 0.1;
    controls.enableRotate = false; // Disable dragging/orbiting
    controlsRef.current = controls;

    // Create a placeholder cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    modelRef.current = cube;

    // Try to load the model
    const loader = new GLTFLoader();
    const path = "/files/avatar-6.glb";
    loader.load(
      path,
      (gltf) => {
        scene.remove(cube);

        const model = gltf.scene;
        baseScaleRef.current = 2; // Set base scale

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        updateModelScale(model);
        // Center the model at the origin, then offset so the head is at the center
        model.position.sub(center); // Center the model at the origin
        // Move model down based on viewport width

        scene.add(model);
        modelRef.current = model;

        // Find head bone for mouse rotation
        model.traverse((node) => {
          if (node.isBone && node.name.toLowerCase().includes("head")) {
            headBoneRef.current = node;
          }
        });

        // Find blink morph target for Avaturn models or custom Blender export
        let blinkMesh = null;
        let blinkIndex = null;
        model.traverse((node) => {
          if (node.isMesh && node.morphTargetDictionary) {
            for (const [name, idx] of Object.entries(node.morphTargetDictionary)) {
              if (name.toLowerCase().includes('blink')) {
                blinkMesh = node;
                blinkIndex = idx;
                break;
              }
            }
          }
        });

        // Blinking function
        function blink() {
          if (blinkMesh && blinkIndex !== null) {
            blinkMesh.morphTargetInfluences[blinkIndex] = 1; // Close eyes
            setTimeout(() => {
              blinkMesh.morphTargetInfluences[blinkIndex] = 0; // Open eyes
            }, 180); // Blink duration in ms
          }
        }
        // Start automatic blinking every 3 seconds
        setInterval(blink, 3000);

        // Focus on head after model is loaded
        focusOnHead(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setError(true);
      }
    );

    // Animation loop
    const idleStartTime = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Idle animation: gentle breathing and swaying
      if (modelRef.current) {
        const t = (Date.now() - idleStartTime) / 1000; // seconds
        // Even more subtle breathing and swaying on multiple axes
        // modelRef.current.position.y += Math.sin(t * 0.2) * 0.0002;
        modelRef.current.position.x += Math.sin(t * 0.2) * 0.00003;
        modelRef.current.position.z += Math.cos(t * 0.9) * 0.0004;
        // Even more subtle rotations
        modelRef.current.rotation.y = Math.sin(t * 0.5) * 0.005;
        modelRef.current.rotation.x = Math.sin(t * 0.1) * 0.00010;
        modelRef.current.rotation.z = Math.cos(t * 0.4) * 0.00015;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      // Update camera
      camera.aspect = width / height;
      updateCameraSettings();

      // Update renderer
      renderer.setSize(width, height);

      // Update model scale if it exists
      if (modelRef.current) {
        updateModelScale(modelRef.current);
      }
    };

    // Initial resize
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="avatar-container" ref={mountRef}>
      {error ? (
        <div className="error">
          <p>3D model not available</p>
          <p className="subtitle">
            Please add your avatar.glb file to /static/files/
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
