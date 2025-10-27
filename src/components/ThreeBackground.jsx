// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, Stars, Html, Text, ContactShadows } from "@react-three/drei";
// import { useRef } from "react";

// /** A floating 3D label chip */
// function Chip({ text = "UI/UX", position = [0,0,0], color = "#60a5fa" }) {
//   return (
//     <Float floatIntensity={2} speed={1.5} rotationIntensity={0.3}>
//       <group position={position}>
//         <mesh>
//           <boxGeometry args={[2.8, 0.6, 0.2]} />
//           <meshStandardMaterial color={color} metalness={0.2} roughness={0.4} />
//         </mesh>
//         <Text
//           fontSize={0.28}
//           position={[0, 0, 0.12]}
//           color="white"
//           anchorX="center"
//           anchorY="middle"
//           fontWeight={700}
//         >
//           {text}
//         </Text>
//       </group>
//     </Float>
//   );
// }

// function WobblyShape({ position=[0,0,0], color="#8b5cf6" }) {
//   const ref = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     ref.current.rotation.x = t * 0.2;
//     ref.current.rotation.y = t * 0.35;
//   });
//   return (
//     <Float floatIntensity={1.8} speed={1.2} rotationIntensity={0.6}>
//       <mesh ref={ref} position={position}>
//         <icosahedronGeometry args={[0.9, 0]} />
//         <meshStandardMaterial color={color} metalness={0.3} roughness={0.25} />
//       </mesh>
//     </Float>
//   );
// }

// export default function ThreeBackground() {
//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <directionalLight position={[-5, 3, -5]} intensity={0.6} />

//         {/* Starfield */}
//         <Stars radius={60} depth={50} count={8000} factor={4} saturation={0} fade />

//         {/* Floating chips as 3D icon-like labels */}
//         <Chip text="Figma" position={[-5, 2.2, -2]} color="#a78bfa" />
//         <Chip text="React" position={[2.2, 3, -3]} color="#60a5fa" />
//         <Chip text="Angular" position={[-1.4, -2.4, -2]} color="#f87171" />
//         <Chip text="Accessibility" position={[4.2, -1.2, -4]} color="#34d399" />
//         <Chip text="Design System" position={[-4, 0.5, -3]} color="#f59e0b" />

//         {/* Wobbly geometric shapes (as 3D icons) */}
//         <WobblyShape position={[1.2, -0.8, -2.5]} color="#22d3ee" />
//         <WobblyShape position={[-2.6, 1.5, -3.5]} color="#fb7185" />
//         <WobblyShape position={[3.6, 2.1, -4]} color="#a3e635" />

//         {/* Soft shadow at bottom for depth */}
//         <ContactShadows position={[0, -4, 0]} opacity={0.3} scale={20} blur={2.5} far={8} />
//       </Canvas>
//     </div>
//   );
// }
// src/components/ThreeBackground.jsx
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, Stars, Text, ContactShadows } from "@react-three/drei";
// import { useRef, useEffect, useMemo, useState } from "react";

// /** Floating 3D label chip */
// function Chip({ text = "UI/UX", position = [0, 0, 0], color = "#60a5fa" }) {
//   return (
//     <Float floatIntensity={2} speed={1.5} rotationIntensity={0.3}>
//       <group position={position}>
//         <mesh>
//           <boxGeometry args={[2.8, 0.6, 0.2]} />
//           <meshStandardMaterial color={color} metalness={0.2} roughness={0.4} />
//         </mesh>
//         <Text
//           fontSize={0.28}
//           position={[0, 0, 0.12]}
//           color="white"
//           anchorX="center"
//           anchorY="middle"
//           fontWeight={700}
//         >
//           {text}
//         </Text>
//       </group>
//     </Float>
//   );
// }

// function WobblyShape({ position = [0, 0, 0], color = "#8b5cf6" }) {
//   const ref = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;
//     ref.current.rotation.x = t * 0.2;
//     ref.current.rotation.y = t * 0.35;
//   });
//   return (
//     <Float floatIntensity={1.8} speed={1.2} rotationIntensity={0.6}>
//       <mesh ref={ref} position={position}>
//         <icosahedronGeometry args={[0.9, 0]} />
//         <meshStandardMaterial color={color} metalness={0.3} roughness={0.25} />
//       </mesh>
//     </Float>
//   );
// }

// export default function ThreeBackground() {
//   // Responsive layout: push chips further out on desktop
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 768);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const layout = useMemo(() => {
//     if (isMobile) {
//       return {
//         chips: [
//           { text: "Figma",          position: [-3.2,  2.4, -2.2], color: "#a78bfa" },
//           { text: "React",          position: [ 3.0,  2.0, -2.8], color: "#60a5fa" },
//           { text: "Angular",        position: [-2.8, -2.2, -2.2], color: "#f87171" },
//           { text: "Accessibility",  position: [ 2.8, -1.6, -3.2], color: "#34d399" },
//           { text: "Design System",  position: [-3.0,  0.2, -3.0], color: "#f59e0b" },
//         ],
//         shapes: [
//           { position: [ 1.0, -1.2, -2.5], color: "#22d3ee" },
//           { position: [-2.0,  1.2, -3.5], color: "#fb7185" },
//           { position: [ 2.4,  1.6, -4.0], color: "#a3e635" },
//         ],
//         starsCount: 4500,
//       };
//     }
//     return {
//       chips: [
//         { text: "Figma",          position: [-7.5,  2.6, -3.0], color: "#a78bfa" },
//         { text: "React",          position: [ 7.2,  3.2, -4.0], color: "#60a5fa" },
//         { text: "Angular",        position: [-6.2, -3.0, -3.0], color: "#f87171" },
//         { text: "Accessibility",  position: [ 6.4, -1.6, -4.5], color: "#34d399" },
//         { text: "Design System",  position: [-7.0,  0.8, -3.5], color: "#f59e0b" },
//       ],
//       shapes: [
//         { position: [ 2.2, -1.4, -2.8], color: "#22d3ee" },
//         { position: [-3.2,  2.0, -3.6], color: "#fb7185" },
//         { position: [ 4.0,  1.4, -4.2], color: "#a3e635" },
//       ],
//       starsCount: 8000,
//     };
//   }, [isMobile]);

//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 2]}>
//         {/* Lights */}
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <directionalLight position={[-5, 3, -5]} intensity={0.6} />

//         {/* Starfield */}
//         <Stars
//           radius={60}
//           depth={50}
//           count={layout.starsCount}
//           factor={4}
//           saturation={0}
//           fade
//         />

//         {/* Floating chips */}
//         {layout.chips.map((c, i) => (
//           <Chip key={i} {...c} />
//         ))}

//         {/* Floating shapes */}
//         {layout.shapes.map((s, i) => (
//           <WobblyShape key={`w${i}`} {...s} />
//         ))}

//         {/* Soft bottom shadow for depth */}
//         <ContactShadows
//           position={[0, -4, 0]}
//           opacity={0.28}
//           scale={20}
//           blur={2.5}
//           far={8}
//         />
//       </Canvas>
//     </div>
//   );
// }
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, Stars, Text, ContactShadows } from "@react-three/drei";
// import { useRef, useEffect, useMemo, useState } from "react";

// function Chip({ text = "UI/UX", position = [0, 0, 0], color = "#60a5fa" }) {
//   return (
//     <Float floatIntensity={2} speed={1.5} rotationIntensity={0.3}>
//       <group position={position}>
//         <mesh>
//           <boxGeometry args={[2.8, 0.6, 0.2]} />
//           <meshStandardMaterial color={color} metalness={0.2} roughness={0.4} />
//         </mesh>
//         <Text fontSize={0.28} position={[0, 0, 0.12]} color="white" anchorX="center" anchorY="middle" fontWeight={700}>
//           {text}
//         </Text>
//       </group>
//     </Float>
//   );
// }

// function WobblyShape({ position = [0, 0, 0], color = "#8b5cf6" }) {
//   const ref = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!ref.current) return;
//     ref.current.rotation.x = t * 0.2;
//     ref.current.rotation.y = t * 0.35;
//   });
//   return (
//     <Float floatIntensity={1.8} speed={1.2} rotationIntensity={0.6}>
//       <mesh ref={ref} position={position}>
//         <icosahedronGeometry args={[0.9, 0]} />
//         <meshStandardMaterial color={color} metalness={0.3} roughness={0.25} />
//       </mesh>
//     </Float>
//   );
// }

// // gentle mouse parallax
// function SceneRig({ children }) {
//   const ref = useRef();
//   useFrame(({ mouse }) => {
//     if (!ref.current) return;
//     const targetY = mouse.x * 0.35;
//     const targetX = -mouse.y * 0.25;
//     ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
//     ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
//   });
//   return <group ref={ref}>{children}</group>;
// }

// export default function ThreeBackground() {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 768);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const layout = useMemo(() => {
//     if (isMobile) {
//       return {
//         chips: [
//           { text: "Figma",         position: [-3.2,  2.4, -2.2], color: "#a78bfa" },
//           { text: "React",         position: [ 3.0,  2.0, -2.8], color: "#60a5fa" },
//           { text: "Angular",       position: [-2.8, -2.2, -2.2], color: "#f87171" },
//           { text: "Accessibility", position: [ 3.1, -1.8, -3.2], color: "#34d399" },
//           { text: "Design System", position: [-3.2,  0.0, -3.0], color: "#f59e0b" },
//         ],
//         shapes: [
//           { position: [ 1.0, -1.0, -2.5], color: "#22d3ee" },
//           { position: [-2.0,  1.2, -3.5], color: "#fb7185" },
//           { position: [ 2.2,  1.4, -4.0], color: "#a3e635" },
//         ],
//         starsCount: 4500,
//       };
//     }
//     return {
//       chips: [
//         { text: "Figma",         position: [-7.5,  2.6, -3.0], color: "#a78bfa" },
//         { text: "React",         position: [ 7.2,  3.2, -4.0], color: "#60a5fa" },
//         { text: "Angular",       position: [-6.2, -3.0, -3.0], color: "#f87171" },
//         { text: "Accessibility", position: [ 6.8, -1.6, -4.5], color: "#34d399" },
//         { text: "Design System", position: [-7.0,  0.8, -3.5], color: "#f59e0b" },
//       ],
//       shapes: [
//         { position: [ 2.2, -1.4, -2.8], color: "#22d3ee" },
//         { position: [-3.2,  2.0, -3.6], color: "#fb7185" },
//         { position: [ 4.0,  1.4, -4.2], color: "#a3e635" },
//       ],
//       starsCount: 8000,
//     };
//   }, [isMobile]);

//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 2]}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <directionalLight position={[-5, 3, -5]} intensity={0.6} />

//         <SceneRig>
//           <Stars radius={60} depth={50} count={layout.starsCount} factor={4} saturation={0} fade />
//           {layout.chips.map((c, i) => <Chip key={i} {...c} />)}
//           {layout.shapes.map((s, i) => <WobblyShape key={`w${i}`} {...s} />)}
//           <ContactShadows position={[0, -4, 0]} opacity={0.28} scale={20} blur={2.5} far={8} />
//         </SceneRig>
//       </Canvas>
//     </div>
//   );
// }
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, ScrollControls, useScroll } from "@react-three/drei";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";

// // Atmosphere glow
// function Atmosphere() {
//   return (
//     <mesh>
//       <sphereGeometry args={[2.7, 64, 64]} />
//       <meshBasicMaterial
//         color="#4cc9f0"
//         transparent
//         opacity={0.15}
//         side={THREE.BackSide}
//       />
//     </mesh>
//   );
// }

// // Random city lights
// function CityLights() {
//   const positions = useMemo(() => {
//     const arr = [];
//     for (let i = 0; i < 300; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       const radius = 2.5;
//       arr.push(
//         radius * Math.sin(phi) * Math.cos(theta),
//         radius * Math.sin(phi) * Math.sin(theta),
//         radius * Math.cos(phi)
//       );
//     }
//     return new Float32Array(arr);
//   }, []);

//   return (
//     <points>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions}
//           count={positions.length / 3}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial color="#ffd166" size={0.05} sizeAttenuation />
//     </points>
//   );
// }

// function Earth() {
//   const globeRef = useRef();
//   const scroll = useScroll();

//   useFrame((_, delta) => {
//     if (globeRef.current) {
//       // Auto rotation (Earth spinning on its axis)
//       globeRef.current.rotation.y += delta * 0.05;

//       // Add scroll-based tilt/rotation
//       const s = scroll.offset;
//       globeRef.current.rotation.y += s * 0.4;
//       globeRef.current.rotation.x = s * 0.25;
//     }
//   });

//   return (
//     <group ref={globeRef}>
//       {/* Base Earth */}
//       <mesh>
//         <sphereGeometry args={[2.5, 128, 128]} />
//         <meshStandardMaterial
//           color="#2c7fb8" // ocean blue
//           roughness={0.7}
//           metalness={0.2}
//         />
//       </mesh>

//       {/* Continents wireframe */}
//       <mesh>
//         <sphereGeometry args={[2.52, 64, 64]} />
//         <meshBasicMaterial color="#a3d977" wireframe transparent opacity={0.25} />
//       </mesh>

//       {/* Polar caps */}
//       <mesh position={[0, 2.5, 0]}>
//         <sphereGeometry args={[0.8, 32, 32]} />
//         <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
//       </mesh>
//       <mesh position={[0, -2.5, 0]}>
//         <sphereGeometry args={[0.8, 32, 32]} />
//         <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
//       </mesh>

//       {/* City lights */}
//       <CityLights />

//       {/* Atmosphere */}
//       <Atmosphere />
//     </group>
//   );
// }

// export default function ThreeGlobeBackground() {
//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
//         {/* Ambient light (soft fill) */}
//         <ambientLight intensity={0.2} />

//         {/* Sunlight (directionalLight = Sun) */}
//         <directionalLight
//           position={[8, 0, 6]}   // fixed "Sun" position
//           intensity={1.5}
//           color="#fffbe6"
//         />
//         {/* Weak fill from opposite side */}
//         <directionalLight position={[-6, -3, -6]} intensity={0.2} />

//         {/* Earth with scroll controls */}
//         <ScrollControls pages={2} damping={4}>
//           <Earth />
//           <Stars radius={120} depth={70} count={6000} factor={4} fade />
//         </ScrollControls>

//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// }


// src/components/ThreeBackground.jsx
// import { useEffect, useMemo, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, Sparkles, Line } from "@react-three/drei";

// // ---------- helpers ----------
// function latLonToVec3(r, latDeg, lonDeg) {
//   const lat = THREE.MathUtils.degToRad(latDeg);
//   const lon = THREE.MathUtils.degToRad(lonDeg);
//   const x = r * Math.cos(lat) * Math.cos(lon);
//   const y = r * Math.sin(lat);
//   const z = r * Math.cos(lat) * Math.sin(lon);
//   return new THREE.Vector3(x, y, z);
// }
// function arcPoints(r, aLat, aLon, bLat, bLon, lift = 0.9, segments = 80) {
//   const a = latLonToVec3(r, aLat, aLon);
//   const b = latLonToVec3(r, bLat, bLon);
//   // mid control point raised above sphere for nice arc
//   const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(r * (1 + lift * 0.15));
//   const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
//   return curve.getPoints(segments);
// }

// // ---------- main background ----------
// export default function ThreeBackground() {
//   // scroll progress 0..1 (light tilt based on page scroll, no ScrollControls required)
//   const scrollRef = useRef(0);
//   useEffect(() => {
//     const onScroll = () => {
//       const h = document.documentElement;
//       const max = Math.max(1, h.scrollHeight - h.clientHeight);
//       scrollRef.current = window.scrollY / max;
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // precompute a few “flight path” arcs (city pairs)
//   const arcs = useMemo(() => {
//     const r = 2.7;
//     const pairs = [
//       // lat,lon  -> lat,lon
//       [37.7749, -122.4194, 51.5074, -0.1278],    // SF -> London
//       [28.6139, 77.2090,   40.7128, -74.0060],   // Delhi -> NYC
//       [35.6895, 139.6917,  -33.8688, 151.2093],  // Tokyo -> Sydney
//       [52.5200, 13.4050,   12.9716,  77.5946],   // Berlin -> Bengaluru
//     ];
//     return pairs.map(([aLat, aLon, bLat, bLon]) => arcPoints(r, aLat, aLon, bLat, bLon, 1.0, 100));
//   }, []);

//   // city lights (procedural, subtle)
//   const cityPositions = useMemo(() => {
//     const arr = [];
//     const count = 420;
//     const r = 2.55;
//     for (let i = 0; i < count; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       arr.push(
//         r * Math.sin(phi) * Math.cos(theta),
//         r * Math.sin(phi) * Math.sin(theta),
//         r * Math.cos(phi)
//       );
//     }
//     return new Float32Array(arr);
//   }, []);

//   function Globe() {
//     const g = useRef();

//     useFrame((_, dt) => {
//       if (!g.current) return;
//       // axial tilt
//       g.current.rotation.z = THREE.MathUtils.degToRad(23.5);
//       // auto spin
//       g.current.rotation.y += dt * 0.06;
//       // scroll tilt
//       const s = scrollRef.current;
//       g.current.rotation.x = s * 0.18;
//       g.current.rotation.y += s * 0.22;
//     });

//     return (
//       <group ref={g} position={[2.8, 0, 0]}> {/* push globe to the right for dramatic composition */}
//         {/* base earth */}
//         <mesh>
//           <sphereGeometry args={[2.5, 96, 96]} />
//           <meshPhysicalMaterial
//             color="#1f8bd8"       // ocean
//             roughness={0.6}
//             metalness={0.05}
//             clearcoat={0.5}
//             clearcoatRoughness={0.35}
//           />
//         </mesh>

//         {/* fine grid (meridians/parallels) */}
//         <mesh>
//           <sphereGeometry args={[2.505, 96, 96]} />
//           <meshBasicMaterial color="#a0e4ff" wireframe transparent opacity={0.06} />
//         </mesh>

//         {/* polar caps */}
//         <mesh position={[0, 2.5, 0]}>
//           <sphereGeometry args={[0.86, 32, 32]} />
//           <meshStandardMaterial color="#ffffff" transparent opacity={0.45} />
//         </mesh>
//         <mesh position={[0, -2.5, 0]}>
//           <sphereGeometry args={[0.86, 32, 32]} />
//           <meshStandardMaterial color="#ffffff" transparent opacity={0.45} />
//         </mesh>

//         {/* city lights (additive points) */}
//         <points>
//           <bufferGeometry>
//             <bufferAttribute
//               attach="attributes-position"
//               array={cityPositions}
//               count={cityPositions.length / 3}
//               itemSize={3}
//             />
//           </bufferGeometry>
//           <pointsMaterial
//             color="#ffd166"
//             size={0.055}
//             sizeAttenuation
//             transparent
//             opacity={0.9}
//             blending={THREE.AdditiveBlending}
//             depthWrite={false}
//           />
//         </points>

//         {/* aurora ring (subtle additive halo around globe) */}
//         <mesh rotation={[THREE.MathUtils.degToRad(65), 0, 0]}>
//           <ringGeometry args={[2.7, 3.4, 96]} />
//           <meshBasicMaterial
//             color="#22d3ee"
//             transparent
//             opacity={0.18}
//             side={THREE.DoubleSide}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>

//         {/* flight path arcs */}
//         {arcs.map((pts, i) => (
//           <Line
//             key={i}
//             points={pts}
//             color={i % 2 ? "#22d3ee" : "#a78bfa"}
//             linewidth={1.5}
//             transparent
//             opacity={0.6}
//           />
//         ))}

//         {/* atmosphere shell */}
//         <mesh scale={[1.08, 1.08, 1.08]}>
//           <sphereGeometry args={[2.5, 64, 64]} />
//           <meshBasicMaterial
//             color="#60a5fa"
//             transparent
//             opacity={0.10}
//             side={THREE.BackSide}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>

//         {/* inner sparkles for life */}
//         <Sparkles
//           count={40}
//           scale={4}
//           size={1.5}
//           speed={0.2}
//           opacity={0.5}
//           color="#b3e7ff"
//         />
//       </group>
//     );
//   }

//   return (
//     <>
//       {/* Soft gradient glows behind canvas to match palette */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute right-[-10%] top-[20%] w-[38vw] h-[38vw] rounded-full blur-3xl"
//              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 60%)" }} />
//         <div className="absolute left-[-8%] bottom-[15%] w-[30vw] h-[30vw] rounded-full blur-3xl"
//              style={{ background: "radial-gradient(circle, rgba(168,85,247,0.28), transparent 60%)" }} />
//       </div>

//       {/* Canvas (start with z-0; once confirmed, you can switch to -z-10 to push behind content) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <Canvas
//           camera={{ position: [0, 0, 8], fov: 60 }}
//           dpr={[1, 2]}
//           gl={{ antialias: true, powerPreference: "high-performance" }}
//         >
//           {/* space lighting */}
//           <ambientLight intensity={0.2} />
//           <directionalLight position={[8, 2.5, 6]} intensity={1.5} color="#fff7e6" />
//           <directionalLight position={[-6, -3, -6]} intensity={0.15} />

//           {/* stars */}
//           <Stars radius={140} depth={80} count={5200} factor={4} saturation={0} fade />

//           {/* globe */}
//           <Globe />

//           {/* drag disabled by pointer-events-none, enable by removing it on wrapper */}
//           <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//       </div>
//     </>
//   );
// }
// src/components/ThreeBackground.jsx
// import { useEffect, useMemo, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, Sparkles, Line } from "@react-three/drei";

// /* ---------------------- helpers ---------------------- */
// function latLonToVec3(r, latDeg, lonDeg) {
//   const lat = THREE.MathUtils.degToRad(latDeg);
//   const lon = THREE.MathUtils.degToRad(lonDeg);
//   const x = r * Math.cos(lat) * Math.cos(lon);
//   const y = r * Math.sin(lat);
//   const z = r * Math.cos(lat) * Math.sin(lon);
//   return new THREE.Vector3(x, y, z);
// }
// function arcPoints(r, aLat, aLon, bLat, bLon, lift = 0.9, segments = 80) {
//   const a = latLonToVec3(r, aLat, aLon);
//   const b = latLonToVec3(r, bLat, bLon);
//   const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(r * (1 + lift * 0.15));
//   const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
//   return curve.getPoints(segments);
// }

// /* Sun direction used by shaders (world space) */
// const SUN_DIR = new THREE.Vector3(8, 2.5, 6).normalize();

// /* ---------------------- Sun (self-lit) ---------------------- */
// // --- Colorful Sun (always bright, with glow + pulse) ---
// function Sun({
//   position = [8, 2.5, 6],
//   coreColor = "#ffd166",   // warm core
//   glowColor = "#f472b6",   // pinkish glow (pick any)
//   pulse = 0.25,            // 0..1 subtle size pulsing
// }) {
//   const innerGlow = useRef();
//   const outerGlow = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     const s = 1 + Math.sin(t * 2.0) * (pulse * 0.06); // gentle breathe
//     if (innerGlow.current) innerGlow.current.scale.setScalar(1.25 * s);
//     if (outerGlow.current) outerGlow.current.scale.setScalar(1.9 * s);
//   });

//   return (
//     <group position={position}>
//       {/* core */}
//       <mesh>
//         <sphereGeometry args={[0.9, 48, 48]} />
//         <meshBasicMaterial color={coreColor} />
//       </mesh>

//       {/* inner glow */}
//       <mesh ref={innerGlow}>
//         <sphereGeometry args={[0.9, 48, 48]} />
//         <meshBasicMaterial
//           color={glowColor}
//           transparent
//           opacity={0.35}
//           blending={THREE.AdditiveBlending}
//           depthWrite={false}
//         />
//       </mesh>

//       {/* outer glow */}
//       <mesh ref={outerGlow}>
//         <sphereGeometry args={[0.9, 48, 48]} />
//         <meshBasicMaterial
//           color={glowColor}
//           transparent
//           opacity={0.18}
//           blending={THREE.AdditiveBlending}
//           depthWrite={false}
//         />
//       </mesh>

//       {/* corona ring */}
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[1.2, 2.2, 128]} />
//         <meshBasicMaterial
//           color={glowColor}
//           transparent
//           opacity={0.25}
//           side={THREE.DoubleSide}
//           blending={THREE.AdditiveBlending}
//           depthWrite={false}
//         />
//       </mesh>
//     </group>
//   );
// }


// /* ---------------------- Moon (orbits Earth) ---------------------- */
// // --- Moon (always fully colored, no phases) ---
// function Moon({
//   distance = 5.2,
//   size = 0.46,
//   speed = 0.12,
//   color = "#93c5fd", // pick any color you like
// }) {
//   const pivot = useRef();
//   useFrame((_, dt) => {
//     if (pivot.current) pivot.current.rotation.y += dt * speed;
//   });

//   return (
//     <group
//       ref={pivot}
//       rotation={[
//         THREE.MathUtils.degToRad(5),
//         THREE.MathUtils.degToRad(20),
//         0,
//       ]}
//     >
//       {/* core: unlit => always full color */}
//       <mesh position={[distance, 0, 0]}>
//         <sphereGeometry args={[size, 48, 48]} />
//         <meshBasicMaterial color={color} />
//       </mesh>

//       {/* subtle glow halo */}
//       <mesh position={[distance, 0, 0]} scale={[1.18, 1.18, 1.18]}>
//         <sphereGeometry args={[size, 48, 48]} />
//         <meshBasicMaterial
//           color={color}
//           transparent
//           opacity={0.12}
//           side={THREE.BackSide}
//           blending={THREE.AdditiveBlending}
//         />
//       </mesh>
//     </group>
//   );
// }


// /* ---------------------- main component ---------------------- */
// export default function ThreeBackground() {
//   // simple scroll progress (0..1) used for a gentle tilt
//   const scrollRef = useRef(0);
//   useEffect(() => {
//     const onScroll = () => {
//       const h = document.documentElement;
//       const max = Math.max(1, h.scrollHeight - h.clientHeight);
//       scrollRef.current = window.scrollY / max;
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // precompute a few flight-path arcs
//   const arcs = useMemo(() => {
//     const r = 2.7;
//     const pairs = [
//       [37.7749, -122.4194, 51.5074, -0.1278],   // SF -> London
//       [28.6139, 77.2090,   40.7128, -74.0060],  // Delhi -> NYC
//       [35.6895, 139.6917,  -33.8688, 151.2093], // Tokyo -> Sydney
//       [52.5200, 13.4050,   12.9716, 77.5946],   // Berlin -> Bengaluru
//     ];
//     return pairs.map(([aLat, aLon, bLat, bLon]) =>
//       arcPoints(r, aLat, aLon, bLat, bLon, 1.0, 100)
//     );
//   }, []);

//   // city lights positions
//   const cityPositions = useMemo(() => {
//     const arr = [];
//     const count = 420, r = 2.55;
//     for (let i = 0; i < count; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       arr.push(
//         r * Math.sin(phi) * Math.cos(theta),
//         r * Math.sin(phi) * Math.sin(theta),
//         r * Math.cos(phi)
//       );
//     }
//     return new Float32Array(arr);
//   }, []);

//   /* ------------ Globe group (Earth + extras) ------------ */
//   function Globe() {
//     const g = useRef();

//     useFrame((_, dt) => {
//       if (!g.current) return;
//       g.current.rotation.z = THREE.MathUtils.degToRad(23.5); // axial tilt
//       g.current.rotation.y += dt * 0.06;                     // auto-spin
//       const s = scrollRef.current;                            // scroll tilt
//       g.current.rotation.x = s * 0.18;
//       g.current.rotation.y += s * 0.22;
//     });

//     return (
//       <group ref={g} position={[3.2, 0, 0]}>
//         {/* --- Earth: procedural land/ocean colors with day/night lighting --- */}
//         <mesh>
//           <sphereGeometry args={[2.5, 128, 128]} />
//           <meshStandardMaterial
//             roughness={0.6}
//             metalness={0.05}
//             onBeforeCompile={(shader) => {
//               shader.uniforms.sunDirection = { value: SUN_DIR };

//               // pass world pos/normal
//               shader.vertexShader = shader.vertexShader
//                 .replace(
//                   "#include <common>",
//                   `
//                   #include <common>
//                   varying vec3 vWorldPos;
//                   varying vec3 vWorldNormal;
//                   `
//                 )
//                 .replace(
//                   "#include <beginnormal_vertex>",
//                   `
//                   #include <beginnormal_vertex>
//                   vWorldNormal = normalize( ( modelMatrix * vec4( objectNormal, 0.0 ) ).xyz );
//                   `
//                 )
//                 .replace(
//                   "#include <begin_vertex>",
//                   `
//                   #include <begin_vertex>
//                   vWorldPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
//                   `
//                 );

//               // noise + color mix
//               shader.fragmentShader = shader.fragmentShader
//                 .replace(
//                   "#include <common>",
//                   `
//                   #include <common>
//                   varying vec3 vWorldPos;
//                   varying vec3 vWorldNormal;
//                   uniform vec3 sunDirection;

//                   float hash(vec3 p){ p=fract(p*0.3183099+vec3(0.1,0.2,0.3)); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
//                   float noise(vec3 x){
//                     vec3 i=floor(x); vec3 f=fract(x);
//                     float n = mix(mix(mix(hash(i+vec3(0,0,0)), hash(i+vec3(1,0,0)), f.x),
//                                       mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
//                                   mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
//                                       mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
//                     return n;
//                   }
//                   float fbm(vec3 p){
//                     float v=0.0, a=0.5;
//                     for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
//                     return v;
//                   }
//                   `
//                 )
//                 .replace(
//                   "#include <color_fragment>",
//                   `
//                   // base albedo from procedural continents/oceans
//                   vec3 n = normalize(vWorldNormal);
//                   float sunDot = dot(n, normalize(sunDirection));
//                   float day    = smoothstep(-0.1, 0.2, sunDot); // day/night

//                   float continents = smoothstep(0.48, 0.58, fbm(n*3.0 + 0.35));
//                   float elev = fbm(n*8.0);

//                   vec3 landLow   = vec3(0.20, 0.55, 0.18);
//                   vec3 landHigh  = vec3(0.65, 0.58, 0.40);
//                   vec3 oceanDeep = vec3(0.02, 0.15, 0.30);
//                   vec3 oceanShal = vec3(0.06, 0.45, 0.65);

//                   float lat = abs(n.y);
//                   vec3 ocean = mix(oceanShal, oceanDeep, lat);
//                   vec3 land  = mix(landLow, landHigh, elev);
//                   vec3 base  = mix(ocean, land, continents);

//                   vec3 dayLit   = base * (0.85 + 0.45 * max(sunDot, 0.0));
//                   vec3 nightLit = base * 0.12;

//                   vec3 finalAlbedo = mix(nightLit, dayLit, day);

//                   vec4 diffuseColor = vec4(finalAlbedo, opacity);
//                   `
//                 );
//             }}
//           />
//         </mesh>

//         {/* subtle latitude/longitude grid */}
//         <mesh>
//           <sphereGeometry args={[2.505, 96, 96]} />
//           <meshBasicMaterial color="#a0e4ff" wireframe transparent opacity={0.06} />
//         </mesh>

//         {/* city lights */}
//         <points>
//           <bufferGeometry>
//             <bufferAttribute
//               attach="attributes-position"
//               array={cityPositions}
//               count={cityPositions.length / 3}
//               itemSize={3}
//             />
//           </bufferGeometry>
//           <pointsMaterial
//             color="#ffd166"
//             size={0.055}
//             sizeAttenuation
//             transparent
//             opacity={0.9}
//             blending={THREE.AdditiveBlending}
//             depthWrite={false}
//           />
//         </points>

//         {/* aurora ring */}
//         <mesh rotation={[THREE.MathUtils.degToRad(65), 0, 0]}>
//           <ringGeometry args={[2.7, 3.4, 96]} />
//           <meshBasicMaterial
//             color="#22d3ee"
//             transparent
//             opacity={0.18}
//             side={THREE.DoubleSide}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>

//         {/* flight path arcs */}
//         {arcs.map((pts, i) => (
//           <Line
//             key={i}
//             points={pts}
//             color={i % 2 ? "#22d3ee" : "#a78bfa"}
//             lineWidth={1.5}
//             transparent
//             opacity={0.6}
//           />
//         ))}

//         {/* atmosphere shell */}
//         <mesh scale={[1.08, 1.08, 1.08]}>
//           <sphereGeometry args={[2.5, 64, 64]} />
//           <meshBasicMaterial
//             color="#60a5fa"
//             transparent
//             opacity={0.10}
//             side={THREE.BackSide}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>

//         {/* sparkles */}
//         <Sparkles count={40} scale={4} size={1.5} speed={0.2} opacity={0.5} color="#b3e7ff" />

//         {/* Moon orbiting Earth */}
//         <Moon />
//       </group>
//     );
//   }

//   return (
//     <>
//       {/* page glows */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div
//           className="absolute right-[-10%] top-[20%] w-[38vw] h-[38vw] rounded-full blur-3xl"
//           style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 60%)" }}
//         />
//         <div
//           className="absolute left-[-8%] bottom-[15%] w-[30vw] h-[30vw] rounded-full blur-3xl"
//           style={{ background: "radial-gradient(circle, rgba(168,85,247,0.28), transparent 60%)" }}
//         />
//       </div>

//       {/* canvas */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
//           {/* lights (sun-directional at same place as visible Sun) */}
//           <ambientLight intensity={0.2} />
//           <directionalLight position={[8, 2.5, 6]} intensity={1.6} color="#fff7e6" />
//           <directionalLight position={[-6, -3, -6]} intensity={0.15} />

//           {/* background stars */}
//           <Stars radius={140} depth={80} count={5200} factor={4} saturation={0} fade />

//           {/* earth system */}
//           <Globe />

//           {/* visible sun */}
//           <Sun position={[8, 2.5, 6]} />

//           {/* controls (disabled by pointer-events-none on wrapper) */}
//           <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//       </div>
//     </>
//   );
// }
// src/components/ThreeBackground.jsx
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles, Line } from "@react-three/drei";

/* ---------------- helpers ---------------- */
function latLonToVec3(r, latDeg, lonDeg) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  const x = r * Math.cos(lat) * Math.cos(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.sin(lon);
  return new THREE.Vector3(x, y, z);
}
function arcPoints(r, aLat, aLon, bLat, bLon, lift = 0.9, segments = 80) {
  const a = latLonToVec3(r, aLat, aLon);
  const b = latLonToVec3(r, bLat, bLon);
  const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(r * (1 + lift * 0.15));
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return curve.getPoints(segments);
}

/* -------- Sun: direction + positions (small & far) --------
   Keep direction constant; place the actual light & visible sun far away
   along that direction so the sun looks small and never covers the hero. */
const SUN_DIR = new THREE.Vector3(4.0, 2.0, 6.0).normalize();
const SUN_LIGHT_POS = SUN_DIR.clone().multiplyScalar(12);   // where the directional light lives
const SUN_VISIBLE_POS = SUN_DIR.clone().multiplyScalar(14); // where the little visible sun sits
const SUN_LIGHT_POS_ARR = [SUN_LIGHT_POS.x, SUN_LIGHT_POS.y, SUN_LIGHT_POS.z];
const SUN_VISIBLE_POS_ARR = [SUN_VISIBLE_POS.x, SUN_VISIBLE_POS.y, SUN_VISIBLE_POS.z];

/* ---------------- Colorful, SMALL Sun ---------------- */
function Sun({
  position = SUN_VISIBLE_POS_ARR,
  coreColor = "#ffd166",
  glowColor = "#f472b6",
  pulse = 0.2,
}) {
  const innerGlow = useRef();
  const outerGlow = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 2.0) * (pulse * 0.05);
    if (innerGlow.current) innerGlow.current.scale.setScalar(1.25 * s);
    if (outerGlow.current) outerGlow.current.scale.setScalar(1.75 * s);
  });
  return (
    <group position={position}>
      {/* tiny core */}
      <mesh>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial color={coreColor} />
      </mesh>
      {/* subtle glows */}
      <mesh ref={innerGlow}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={outerGlow}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ---------------- Moon (full-color) ---------------- */
function Moon({
  distance = 5.2,
  size = 0.46,
  speed = 0.12,
  color = "#93c5fd",
}) {
  const pivot = useRef();
  useFrame((_, dt) => {
    if (pivot.current) pivot.current.rotation.y += dt * speed;
  });
  return (
    <group
      ref={pivot}
      rotation={[
        THREE.MathUtils.degToRad(5),
        THREE.MathUtils.degToRad(20),
        0,
      ]}
    >
      <mesh position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[distance, 0, 0]} scale={[1.18, 1.18, 1.18]}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.10}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ---------------- Main component ---------------- */
export default function ThreeBackground() {
  const scrollRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - h.clientHeight);
      scrollRef.current = window.scrollY / max;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const arcs = useMemo(() => {
    const r = 2.7;
    const pairs = [
      [37.7749, -122.4194, 51.5074, -0.1278],
      [28.6139, 77.2090,   40.7128, -74.0060],
      [35.6895, 139.6917,  -33.8688, 151.2093],
      [52.5200, 13.4050,   12.9716, 77.5946],
    ];
    return pairs.map(([aLat, aLon, bLat, bLon]) =>
      arcPoints(r, aLat, aLon, bLat, bLon, 1.0, 100)
    );
  }, []);

  const cityPositions = useMemo(() => {
    const arr = [];
    const count = 420, r = 2.55;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  }, []);

  function Globe() {
    const g = useRef();
    useFrame((_, dt) => {
      if (!g.current) return;
      g.current.rotation.z = THREE.MathUtils.degToRad(23.5);
      g.current.rotation.y += dt * 0.06;
      const s = scrollRef.current;
      g.current.rotation.x = s * 0.18;
      g.current.rotation.y += s * 0.22;
    });

    return (
      <group ref={g} position={[3.15, 0, 0]}>
        {/* Earth with procedural land/ocean colors + day/night */}
        <mesh>
          <sphereGeometry args={[2.5, 128, 128]} />
          <meshStandardMaterial
            roughness={0.6}
            metalness={0.05}
            onBeforeCompile={(shader) => {
              shader.uniforms.sunDirection = { value: SUN_DIR };
              shader.vertexShader = shader.vertexShader
                .replace(
                  "#include <common>",
                  `
                  #include <common>
                  varying vec3 vWorldPos;
                  varying vec3 vWorldNormal;
                  `
                )
                .replace(
                  "#include <beginnormal_vertex>",
                  `
                  #include <beginnormal_vertex>
                  vWorldNormal = normalize( ( modelMatrix * vec4( objectNormal, 0.0 ) ).xyz );
                  `
                )
                .replace(
                  "#include <begin_vertex>",
                  `
                  #include <begin_vertex>
                  vWorldPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
                  `
                );

              shader.fragmentShader = shader.fragmentShader
                .replace(
                  "#include <common>",
                  `
                  #include <common>
                  varying vec3 vWorldPos;
                  varying vec3 vWorldNormal;
                  uniform vec3 sunDirection;

                  float hash(vec3 p){ p=fract(p*0.3183099+vec3(0.1,0.2,0.3)); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
                  float noise(vec3 x){
                    vec3 i=floor(x); vec3 f=fract(x);
                    float n = mix(mix(mix(hash(i+vec3(0,0,0)), hash(i+vec3(1,0,0)), f.x),
                                      mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
                                  mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
                                      mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
                    return n;
                  }
                  float fbm(vec3 p){
                    float v=0.0, a=0.5;
                    for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
                    return v;
                  }
                  `
                )
                .replace(
                  "#include <color_fragment>",
                  `
                  vec3 n = normalize(vWorldNormal);
                  float sunDot = dot(n, normalize(sunDirection));
                  float day    = smoothstep(-0.1, 0.2, sunDot);

                  float continents = smoothstep(0.48, 0.58, fbm(n*3.0 + 0.35));
                  float elev = fbm(n*8.0);

                  vec3 landLow   = vec3(0.20, 0.55, 0.18);
                  vec3 landHigh  = vec3(0.65, 0.58, 0.40);
                  vec3 oceanDeep = vec3(0.02, 0.15, 0.30);
                  vec3 oceanShal = vec3(0.06, 0.45, 0.65);

                  float lat = abs(n.y);
                  vec3 ocean = mix(oceanShal, oceanDeep, lat);
                  vec3 land  = mix(landLow, landHigh, elev);
                  vec3 base  = mix(ocean, land, continents);

                  vec3 dayLit   = base * (0.85 + 0.45 * max(sunDot, 0.0));
                  vec3 nightLit = base * 0.12;

                  vec3 finalAlbedo = mix(nightLit, dayLit, day);
                  vec4 diffuseColor = vec4(finalAlbedo, opacity);
                  `
                );
            }}
          />
        </mesh>

        {/* subtle grid */}
        <mesh>
          <sphereGeometry args={[2.505, 96, 96]} />
          <meshBasicMaterial color="#a0e4ff" wireframe transparent opacity={0.06} />
        </mesh>

        {/* city lights */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={cityPositions}
              count={cityPositions.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#ffd166"
            size={0.05}
            sizeAttenuation
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>

        {/* aurora ring (subtle) */}
        <mesh rotation={[THREE.MathUtils.degToRad(65), 0, 0]}>
          <ringGeometry args={[2.7, 3.25, 96]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.13}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* flight-path arcs */}
        {arcs.map((pts, i) => (
          <Line
            key={i}
            points={pts}
            color={i % 2 ? "#22d3ee" : "#a78bfa"}
            lineWidth={1.5}
            transparent
            opacity={0.55}
          />
        ))}

        {/* atmosphere */}
        <mesh scale={[1.08, 1.08, 1.08]}>
          <sphereGeometry args={[2.5, 64, 64]} />
          <meshBasicMaterial
            color="#60a5fa"
            transparent
            opacity={0.09}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* sparkles + moon */}
        <Sparkles count={36} scale={4} size={1.4} speed={0.18} opacity={0.45} color="#b3e7ff" />
        <Moon />
      </group>
    );
  }

  return (
    <>
      {/* soft page glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute right-[-10%] top-[20%] w-[38vw] h-[38vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.32), transparent 60%)" }}
        />
        <div
          className="absolute left-[-8%] bottom-[15%] w-[30vw] h-[30vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.24), transparent 60%)" }}
        />
      </div>

      {/* canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
          {/* lighting matches sun direction */}
          <ambientLight intensity={0.22} />
          <directionalLight position={SUN_LIGHT_POS_ARR} intensity={1.5} color="#fff7e6" />
          <directionalLight position={[-6, -3, -6]} intensity={0.12} />

          {/* background stars */}
          <Stars radius={140} depth={80} count={5200} factor={4} saturation={0} fade />

          {/* globe */}
          <Globe />

          {/* small, tasteful visible sun */}
          <Sun position={SUN_VISIBLE_POS_ARR} coreColor="#ffd166" glowColor="#f472b6" />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </>
  );
}
