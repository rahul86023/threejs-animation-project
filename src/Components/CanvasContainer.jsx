/* eslint-disable react/no-unknown-property */

import styled from "styled-components";


import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./Box";

export default function CanvasContainer({texture}) {
  return (
    <Wrapper className="App">
 
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box texture={texture} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  canvas {
    height: 500px;
  }
`;
