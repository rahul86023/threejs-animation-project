/* eslint-disable react/no-unknown-property */
import React from "react";
import styled from "styled-components";
import TextSection from "./TextSection";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./Box";

export default function CanvasContainer() {
  return (
    <Wrapper className="App">
      {/* <Background /> */}
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
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
