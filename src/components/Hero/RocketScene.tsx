'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Rocket() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Rocket body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 2, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.8}
          roughness={0.2}
          emissive="#6366f1"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Rocket nose cone */}
      <mesh position={[0, 2.1, 0]}>
        <coneGeometry args={[0.25, 0.7, 32]} />
        <meshStandardMaterial
          color="#818cf8"
          metalness={0.9}
          roughness={0.1}
          emissive="#818cf8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Rocket base / engine */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.35, 0.3, 0.4, 32]} />
        <meshStandardMaterial
          color="#3730a3"
          metalness={0.7}
          roughness={0.3}
          emissive="#4f46e5"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Fins */}
      {[0, 120, 240].map((angle) => (
        <mesh
          key={angle}
          position={[
            Math.sin((angle * Math.PI) / 180) * 0.35,
            -0.3,
            Math.cos((angle * Math.PI) / 180) * 0.35,
          ]}
          rotation={[0, (-angle * Math.PI) / 180, 0]}
        >
          <boxGeometry args={[0.02, 0.5, 0.3]} />
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.8}
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}

      {/* Engine glow */}
      <mesh position={[0, -0.7, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Engine trail particles */}
      <EngineTrail />
    </group>
  );
}

function EngineTrail() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 1] = -0.8 - Math.random() * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] -= 0.02;
        if (posArray[i * 3 + 1] < -3) {
          posArray[i * 3] = (Math.random() - 0.5) * 0.3;
          posArray[i * 3 + 1] = -0.8;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#f59e0b"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitingModule({
  color,
  emissive,
  geometry,
  radius,
  speed,
  yOffset,
  size,
}: {
  color: string;
  emissive: string;
  geometry: 'icosahedron' | 'torus' | 'octahedron';
  radius: number;
  speed: number;
  yOffset: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * speed;
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = yOffset + Math.sin(t * 2) * 0.15;
      meshRef.current.rotation.x = t * 0.5;
      meshRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        {geometry === 'icosahedron' && <icosahedronGeometry args={[size, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[size, size * 0.4, 16, 32]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[size, 0]} />}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={emissive}
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#6366f1" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, -3, 3]} intensity={0.4} color="#f59e0b" />

      <Rocket />

      {/* Web Module */}
      <OrbitingModule
        color="#22d3ee"
        emissive="#22d3ee"
        geometry="icosahedron"
        radius={2.5}
        speed={0.4}
        yOffset={0.5}
        size={0.2}
      />

      {/* AI Module */}
      <OrbitingModule
        color="#a78bfa"
        emissive="#a78bfa"
        geometry="torus"
        radius={3}
        speed={0.3}
        yOffset={-0.2}
        size={0.18}
      />

      {/* SaaS Module */}
      <OrbitingModule
        color="#34d399"
        emissive="#34d399"
        geometry="octahedron"
        radius={2}
        speed={0.5}
        yOffset={1}
        size={0.15}
      />

      <FloatingParticles />
      <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
    </>
  );
}

export default function RocketScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
