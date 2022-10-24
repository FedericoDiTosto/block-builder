/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import React from "react";

const MODELS = [
  "1x1_Arch",
  "1x1_Cylinder",
  "1x1_HalfArch",
  "1x1_Slope"
]

const COLOR = [
  "red",
  "yellow",
  "blue",
  "white"
]

export function Model(props) {
  const { nodes, materials } = useGLTF("./models/model_0.gltf");

  const [modelName, setModelName] = React.useState(MODELS[Math.floor(Math.random() * MODELS.length)]);
  const [rotation, setRotation] = React.useState([0, Math.PI * 0.5 * Math.floor(Math.random() * 4), 0]);
  const [color, setColor] = React.useState(COLOR[Math.floor(Math.random() * COLOR.length)]);

  return (
    <group {...props} dispose={null} scale={[1, 0.8, 1]}>
      <group name="1x1" position={[-0.5, 0.62, -0.5]}>
        <mesh
          castShadow
          receiveShadow
          name={modelName}
          geometry={nodes[modelName].geometry}
          position={[0.5, -1.25, 0.5]}
          rotation={rotation}
        >
          <meshStandardMaterial color={color} />
        </mesh>
        <lineSegments name="wire" position={[0.5, -1.25, 0.5]} rotation={rotation}>
          <edgesGeometry attach="geometry" args={[nodes[modelName].geometry]} />
          <lineBasicMaterial attach="material" color="black" />
        </lineSegments>
      </group>
    </group>
  );
}

useGLTF.preload("/model_0.gltf");
