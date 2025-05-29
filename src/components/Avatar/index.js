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
  const baseScaleRef = useRef(2);
  const headBoneRef = useRef(null);

  const getModelScale = () => {
    if (window.innerWidth <= 768) {
      return baseScaleRef.current * 0.4;
    }
    if (window.innerWidth <= 1368) {
      return baseScaleRef.current * 0.5;
    }
    if (window.innerWidth >= 1920) {
      return baseScaleRef.current * 0.9;
    }
    if (window.innerWidth >= 2560) {
      return baseScaleRef.current * 0.7;
    }
    return baseScaleRef.current;
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
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const headCenter = new THREE.Vector3(
      center.x * 3,
      center.y + size.y * 3.85,
      center.z * 2
    );
    let yOffset = 0;
    if (window.innerWidth <= 768) {
      yOffset = 0.4;
    } else if (window.innerWidth <= 1368) {
      yOffset = 0.5;
    } else {
      yOffset = -0.1;
    }
    headCenter.y += yOffset;
    const camera = controlsRef.current.object;
    camera.fov = 25;
    camera.position.set(headCenter.x, headCenter.y + size.y * 0.2, 15);
    camera.lookAt(headCenter);
    controlsRef.current.target.copy(headCenter);
    controlsRef.current.update();
    camera.updateProjectionMatrix();
  };

  const handleMouseMove = (event) => {
    if (!mountRef.current || !mouseLightRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    mouseLightRef.current.position.x = x * 5;
    mouseLightRef.current.position.y = -y * 5;
    if (headBoneRef.current) {
      let maxUp = Math.PI / 9;
      let maxDown = Math.PI / 4;
      let rotationX;
      if (y < 0) {
        rotationX = -y * maxUp;
      } else {
        rotationX = -y * maxDown;
      }
      const rotationY = (x * Math.PI) / 6;
      headBoneRef.current.rotation.y = rotationY;
      headBoneRef.current.rotation.x = rotationX;
    }
  };

  const handleTouchMove = (event) => {
    if (!mountRef.current || !mouseLightRef.current) return;
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    mouseLightRef.current.position.x = x * 5;
    mouseLightRef.current.position.y = -y * 5;
    if (headBoneRef.current) {
      let maxUp = Math.PI / 9;
      let maxDown = Math.PI / 4;
      let rotationX;
      if (y < 0) {
        rotationX = -y * maxUp;
      } else {
        rotationX = -y * maxDown;
      }
      const rotationY = (x * Math.PI) / 6;
      headBoneRef.current.rotation.y = rotationY;
      headBoneRef.current.rotation.x = rotationX;
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const mouseLight = new THREE.PointLight(0xffffff, 4, 5);
    mouseLight.position.set(5, 0, 2);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;
    mountRef.current.addEventListener("mousemove", handleMouseMove);
    mountRef.current.addEventListener("touchmove", handleTouchMove);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.minDistance = 0.5;
    controls.maxDistance = 5;
    controls.zoomSpeed = 0.5;
    controls.maxPolarAngle = Math.PI * 0.7;
    controls.minPolarAngle = Math.PI * 0.1;
    controls.enableRotate = false;
    controlsRef.current = controls;
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    modelRef.current = cube;
    const loader = new GLTFLoader();
    const path = "/files/avatar-6.glb";
    loader.load(
      path,
      (gltf) => {
        scene.remove(cube);
        const model = gltf.scene;
        baseScaleRef.current = 2;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        updateModelScale(model);
        model.position.sub(center);
        scene.add(model);
        modelRef.current = model;
        model.traverse((node) => {
          if (node.isBone && node.name.toLowerCase().includes("head")) {
            headBoneRef.current = node;
          }
        });
        let blinkMesh = null;
        let blinkIndex = null;
        model.traverse((node) => {
          if (node.isMesh && node.morphTargetDictionary) {
            for (const [name, idx] of Object.entries(
              node.morphTargetDictionary
            )) {
              if (name.toLowerCase().includes("blink")) {
                blinkMesh = node;
                blinkIndex = idx;
                break;
              }
            }
          }
        });
        function blink() {
          if (blinkMesh && blinkIndex !== null) {
            blinkMesh.morphTargetInfluences[blinkIndex] = 1;
            setTimeout(() => {
              blinkMesh.morphTargetInfluences[blinkIndex] = 0;
            }, 180);
          }
        }
        setInterval(blink, 3000);
        focusOnHead(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setError(true);
      }
    );
    const idleStartTime = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (modelRef.current) {
        const t = (Date.now() - idleStartTime) / 1000;
        modelRef.current.position.x += Math.sin(t * 0.2) * 0.00003;
        modelRef.current.position.z += Math.cos(t * 0.9) * 0.0004;
        modelRef.current.rotation.y = Math.sin(t * 0.5) * 0.005;
        modelRef.current.rotation.x = Math.sin(t * 0.1) * 0.0001;
        modelRef.current.rotation.z = Math.cos(t * 0.4) * 0.00015;
      }
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      updateCameraSettings();
      renderer.setSize(width, height);
      if (modelRef.current) {
        updateModelScale(modelRef.current);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
        mountRef.current.removeEventListener("touchmove", handleTouchMove);
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
