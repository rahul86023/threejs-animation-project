/* eslint-disable react/no-unknown-property */

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


export default function Box({texture}) {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} /> 
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
