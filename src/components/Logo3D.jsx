import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Center, Stars } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

function ExtrudedLogo() {
  const data = useLoader(SVGLoader, "/src/assets/webcraft-logo.svg");

  const shapes = useMemo(() => {
    const arr = [];
    data.paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
      arr.push(...shapes);
    });
    return arr;
  }, [data]);

  return (
    <Center>
      <group scale={[0.12, -0.12, 0.12]}>
        {shapes.map((shape, i) => (
          <mesh key={i} castShadow receiveShadow>
            <extrudeGeometry
              args={[
                shape,
                {
                  depth: 8,
                  bevelEnabled: true,
                  bevelThickness: 0.8,
                  bevelSize: 0.5,
                  bevelSegments: 8,
                },
              ]}
            />
            <meshPhysicalMaterial
              color="#e6f7ff"
              transmission={1}
              thickness={3}
              roughness={0}
              clearcoat={1}
              clearcoatRoughness={0}
              emissive="#0077ff"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Center>
  );
}

export default function Logo3D() {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 70], fov: 45 }} shadows>
        <color attach="background" args={["#000000"]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={3} />
        <pointLight position={[-10, -10, -10]} intensity={2} />
        <Stars
  radius={250}
  depth={50}
  count={900}
  factor={1.5}
  saturation={0}
  fade
/>

        <Suspense fallback={null}>
          <ExtrudedLogo />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}