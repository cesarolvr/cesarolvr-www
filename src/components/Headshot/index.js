import * as React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { State } from "../Layout";

// Images
import headshot from "../../images/headshot.jpg";

// Styles
import "./index.scss";

const Headshot = () => {
  const { theme } = React.useContext(State);
  const initWaves = () => {
    // var capturer = new CCapture({ format: "webm" });

    const params = {
      exposure: 0.4,
      bloomStrength: 0.4,
      // bloomThreshold: 0.01,
      bloomRadius: 1.5,

      // exposure: 0.9,
      // bloomStrength: 0.9,
      // // bloomThreshold: 0.01,
      // bloomRadius: 1.5,
    };

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Object
    const geometry = new THREE.PlaneGeometry(2.2, 2.2, 100, 100);
    const geometry2 = new THREE.PlaneGeometry(2.2, 2.2, 100, 100);
    geometry2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

    // Material
    const texture = new THREE.TextureLoader().load(headshot);

    texture.minFilter = THREE.LinearFilter;
    texture.rotation = 0;
    texture.colorSpace = THREE.LinearSRGBColorSpace;

    const uniforms = {
      uAmplitude: {
        value: 1.0,
      },
      uTime: {
        value: 0,
      },
      uColor: {
        value: new THREE.Color(0xff2200),
      },
      uTexture: {
        value: texture,
      },
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
            uniform float uTime;

            varying vec2 vUv;
            varying vec3 vNormal;
            varying float vNoise;

            vec3 mod289(vec3 x)
            {
              return x - floor(x * (1.0 / 289.0)) * 289.0;
            }

            vec4 mod289(vec4 x)
            {
              return x - floor(x * (1.0 / 289.0)) * 289.0;
            }

            vec4 permute(vec4 x)
            {
              return mod289(((x*34.0)+10.0)*x);
            }

            vec4 taylorInvSqrt(vec4 r)
            {
              return 1.79284291400159 - 0.85373472095314 * r;
            }

            vec3 fade(vec3 t) {
              return t*t*t*(t*(t*6.0-15.0)+10.0);
            }

            float pnoise(vec3 P, vec3 rep)
            {
              vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
              vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
              Pi0 = mod289(Pi0);
              Pi1 = mod289(Pi1);
              vec3 Pf0 = fract(P); // Fractional part for interpolation
              vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
              vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
              vec4 iy = vec4(Pi0.yy, Pi1.yy);
              vec4 iz0 = Pi0.zzzz;
              vec4 iz1 = Pi1.zzzz;

              vec4 ixy = permute(permute(ix) + iy);
              vec4 ixy0 = permute(ixy + iz0);
              vec4 ixy1 = permute(ixy + iz1);

              vec4 gx0 = ixy0 * (1.0 / 7.0);
              vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
              gx0 = fract(gx0);
              vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
              vec4 sz0 = step(gz0, vec4(0.0));
              gx0 -= sz0 * (step(0.0, gx0) - 0.5);
              gy0 -= sz0 * (step(0.0, gy0) - 0.5);

              vec4 gx1 = ixy1 * (1.0 / 7.0);
              vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
              gx1 = fract(gx1);
              vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
              vec4 sz1 = step(gz1, vec4(0.0));
              gx1 -= sz1 * (step(0.0, gx1) - 0.5);
              gy1 -= sz1 * (step(0.0, gy1) - 0.5);

              vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
              vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
              vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
              vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
              vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
              vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
              vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
              vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

              vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
              g000 *= norm0.x;
              g010 *= norm0.y;
              g100 *= norm0.z;
              g110 *= norm0.w;
              vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
              g001 *= norm1.x;
              g011 *= norm1.y;
              g101 *= norm1.z;
              g111 *= norm1.w;

              float n000 = dot(g000, Pf0);
              float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
              float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
              float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
              float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
              float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
              float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
              float n111 = dot(g111, Pf1);

              vec3 fade_xyz = fade(Pf0);
              vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
              vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
              float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
              return 2.2 * n_xyz;
            }

            float turbulence( vec3 p ) {
              float w = 100.0;
              float t = -.5;

              for (float f = 1.0 ; f <= 10.0 ; f++ ){
                float power = pow( 2.0, f );
                t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
              }

              return t;
            }

            float random(in vec2 st){
              // return dot(st.x, st.y);
              // return sin(st.x);
              // return fract(st.x);
              // return ((dot(st.xy, vec2(12.9898, 78.233))));
              // return (sin(dot(st.xy, vec2(12.9898, 78.233))));
              // return fract(sin(dot(st.xy, vec2(12.9898, 78.233))));

              return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
            }

            vec2 random2(vec2 st){
              st = vec2( dot(st,vec2(127.1,311.7)),dot(st,vec2(269.5,183.3)) );
              return -1.0 + 2.0*fract(sin(st)*43758.5453123);
            }

            float noise2(vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);

                vec2 u = f*f*(3.0-2.0*f);

                return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                                dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                            mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                                dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
            }

            mat2 rotate2d(float angle){
              return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
            }

            float rand(float n){return fract(sin(n) * 43758.5453123);}

            float rand(vec2 n) { 
              return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }

            float noise(float p){
              float fl = floor(p);
              float fc = fract(p);
              return mix(rand(fl), rand(fl + 1.0), fc);
            }
              
            float r2D(vec2 p)
            {
                return fract(sin(dot(p, vec2(961.761, 83.153)))*43091.241);
            }

            float noise(vec2 p)
            {
                vec2 i = floor(p);
                vec2 f = fract(p);
                vec2 e = vec2(1., 0.);
                
                float v1 = r2D(i+e.yy);
                float v2 = r2D(i+e.xy);
                float v3 = r2D(i+e.yx);
                float v4 = r2D(i+e.xx);
                
                vec2 u = smoothstep(0., 1., f);
                
                float a = mix(v1, v2, u.x);
                float b = mix(v3, v4, u.x);
                
                return mix(a, b, u.y);
            }


            void main() {
              vUv = uv;
              vNormal = normal;

              float displacement = 0.0;
              
              vec4 modalPosition = modelMatrix * vec4( position, 1.0 );  
              
              // displacement = dot(modalPosition.x, modalPosition.y);
              // displacement = dot(modalPosition.x + 0.5, modalPosition.y);

              // displacement = random(modalPosition.xy) * 0.2;
              vec2 rotateXY = rotate2d(1.5) * modalPosition.xy * 1.5;
              // Add stronger flagging effect with multiple wave frequencies
              float flagEffect = sin(modalPosition.x * 3.0 + uTime * 3.0) * 0.2; // Primary wave
              float secondaryWave = sin(modalPosition.x * 1.5 + uTime * 2.0) * 0.15; // Secondary wave
              float tertiaryWave = cos(modalPosition.x * 4.0 + uTime * 4.0) * 0.1; // Tertiary wave for detail
              displacement = noise(rotateXY + (vec2(uTime * 1.))) * 0.5 + flagEffect + secondaryWave + tertiaryWave;

              modalPosition.z += displacement;
              // Add 20 pixel offset to the right (converted to WebGL coordinates)
              modalPosition.x += 0.4; // 20 pixels converted to WebGL space

              gl_Position = projectionMatrix * viewMatrix * modalPosition;
            }
              `,
      fragmentShader: `
            uniform float uTime;
            uniform vec3 uColor;
            uniform sampler2D uTexture;

            varying float vNoise;
            varying vec3 vNormal;
            varying vec2 vUv;
            
            float random( vec3 scale, float seed ){
              return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
            }

            void main() {
              // texture
              vec4 color = texture2D(uTexture, vUv);


              // float r = 0.001 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );
              // vec2 tPos = vec2( 0, 1.3 * vNoise + r );
              // vec4 color = vec4(vUv.x,0.5,1.-vUv.x,.0);

              gl_FragColor = vec4( color.rgb, 1.0 );
            }
              `,
    });

    shaderMaterial.transparent = true;

    const sphere = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(sphere);
    const sphere2 = new THREE.Mesh(geometry2, shaderMaterial);
    scene.add(sphere2);

    // Set initial rotation - focus on Y axis
    sphere.rotation.x = 0;
    sphere.rotation.y = Math.PI / 6; // Changed from PI/4 to PI/6 for smaller angle
    sphere.rotation.z = 0;
    sphere2.rotation.x = 0;
    sphere2.rotation.y = Math.PI / 6; // Changed from PI/4 to PI/6 for smaller angle
    sphere2.rotation.z = 0;

    // Sizes
    const sizes = {
      width: window.innerWidth / 2.1,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height);
    camera.position.z = 10;
    scene.add(camera);

    scene.background = new THREE.Color(theme === "dark" ? 0x222222 : 0xffffff);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false; // Disable zoom/scroll
    controls.enablePan = false; // Also disable panning for better UX

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    // Post processing
    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Events
    // window.addEventListener("resize", () => {
    //   sizes.width = window.innerWidth;
    //   sizes.height = window.innerHeight;

    //   camera.aspect = sizes.width / sizes.height;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(sizes.width, sizes.height);
    //   composer.setSize(sizes.width, sizes.height);
    // });

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    let canRecord = false;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // const elapsedTime = Date.now() * 0.01;

      // update material
      shaderMaterial.uniforms.uTime.value = elapsedTime;

      // Rotate with smaller amplitude and slower speed
      sphere.rotation.y = Math.PI / 6 + Math.sin(elapsedTime * 0.2) * 0.05; // Reduced amplitude from 0.1 to 0.05 and speed from 0.3 to 0.2
      sphere2.rotation.y = Math.PI / 6 + Math.sin(elapsedTime * 0.2) * 0.05;

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);
      // composer.render();

      // Record
      // if (canRecord) {
      //   capturer.capture(canvas);
      // }

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    // window.addEventListener("keydown", ({ code }) => {
    //   console.log(code);

    //   if (code === "Space") {
    //     capturer.start();
    //     canRecord = true;

    //     setTimeout(() => {
    //       capturer.stop();
    //       capturer.save();

    //       canRecord = false;
    //     }, 20000);
    //   }
    // });
  };

  React.useEffect(() => {
    initWaves();
  }, []);

  return <canvas class="webgl cursor-grab"></canvas>;
};

export default Headshot;
