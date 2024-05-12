import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { getGlb } from "../utils/models";
import { Character } from "../utils/characters";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = ({
  character,
  position,
  spinX,
  spinY,
  spinZ,
}: {
  character: Character;
  position: [number, number, number];
  spinX: boolean;
  spinY: boolean;
  spinZ: boolean;
}) => {
  const obj = useLoader(GLTFLoader, getGlb(character));

  const meshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => {
    if (spinX && meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
    }
    if (spinY && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (spinZ && meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <mesh
      key={character}
      ref={meshRef}
      scale={active ? 2 : 1}
      onClick={() => setActive(!active)}
      position={position}
    >
      <primitive object={obj.scene} />
    </mesh>
  );
};

export default Model;
