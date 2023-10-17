import styled from "styled-components";
import { Suspense } from "react";
import { useFrame,Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

export default function CanvasContainer({ texture }) {
  return (
    <Wrapper className="App">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box texture={texture} />
        </Suspense>
        <CustomAnimation /> {/* Add a custom animation component */}
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: rgb(31, 17, 68);
  canvas {
    height: 500px;
  }
`;

// Custom animation component for automatically moving objects
function CustomAnimation() {
  // Use the useFrame hook for animation
  useFrame(({ scene }) => {
    // Access and update the rotation of the object
    const box = scene.children.find((child) => child.type === "Mesh");
    if (box) {
      box.rotation.x += 0.005;
      box.rotation.y += 0.005;
    }
  });

  return null;
}
