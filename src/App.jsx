/* eslint-disable react/no-unknown-property */

 import "./styles.css";
import styled from "styled-components";

import { Suspense } from "react";

// import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";

export default function App() {
  return (
    <Wrapper className="App">
      {/* <Background /> */}
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
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
// import { useState } from 'react';
// import './App.css';
// import Home from './Components/Home';


// function App() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;
