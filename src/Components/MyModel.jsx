// import React from "react";
// import { useLoader } from "@react-three/fiber";
// import { BufferGeometry, BufferAttribute, TextureLoader } from "three";

// const MyModel = ({ imageval }) => {
//   // Check if imageval is defined before loading the texture
//   if (!imageval) {
//     return null; // You can return null or an error message here
//   }

//   const texture = useLoader(TextureLoader, imageval);
//   const geometry = new BufferGeometry();
//   const vertices = [
//     // Your vertices here
//   ];
//   const positions = new Float32Array(vertices.length * 3);

//   for (let i = 0; i < vertices.length; i++) {
//     positions[i * 3] = vertices[i].x;
//     positions[i * 3 + 1] = vertices[i].y;
//     positions[i * 3 + 2] = vertices[i].z;
//   }

//   geometry.setAttribute("position", new BufferAttribute(positions, 3));

//   return (
//     <mesh geometry={geometry}>
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// export default MyModel;
