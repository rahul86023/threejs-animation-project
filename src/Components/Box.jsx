/* eslint-disable react/no-unknown-property */

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../../public/map.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} /> {/* Use boxGeometry */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
