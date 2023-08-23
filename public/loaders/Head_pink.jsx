/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 head_pink.glb --transform 
Files: head_pink.glb [761.96KB] > head_pink-transformed.glb [79.52KB] (90%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/head_pink-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.FaceBuilderHead002.geometry} material={materials.material_4} position={[-2.016, 1.352, 0.613]} rotation={[1.544, 0.019, 0.022]} scale={1.5} />
    </group>
  )
}

useGLTF.preload('/head_pink-transformed.glb')
