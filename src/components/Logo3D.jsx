import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Center, Stars } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";



function ExtrudedLogo() {

  const data = useLoader(SVGLoader, "/webcraft-logo.svg");
  

  console.log("SVG Loaded:", data); // DEBUG

  const shapes = useMemo(() => {
    if (!data) return [];

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
          <mesh key={i}>
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
            <meshStandardMaterial color="#0105ff" />
          </mesh>
        ))}
      </group>
    </Center>
  );
}

export default function Logo3D() {
  return (
    <div className="logo3d-container">
      <Canvas camera={{ position: [0, 0, 70], fov: 45 }} shadows>

        <color attach="background" args={["#000000"]} />

        {/* LIGHTS */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={3} />
        <pointLight position={[-10, -10, -10]} intensity={2} />

        {/* STARS */}
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