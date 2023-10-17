import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Box({ texture }) {
  const colorMap = useLoader(TextureLoader, texture);

  useFrame((state) => {
    // Rotate the box automatically
    state.scene.children[0].rotation.x += 0.005;
    state.scene.children[0].rotation.y += 0.005;
  });

  return (
    <mesh>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
