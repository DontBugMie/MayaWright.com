/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 head.glb --transform 
Files: head.glb [761.92KB] > head-transformed.glb [79.49KB] (90%)
*/
import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from "@react-three/rapier";

type headType = {
  position: { x: number; z: number };
  box: number;
}

type props = {
  boundary: number;
  count: number;
}

interface CustomGLTF extends GLTF {
  nodes: any[];
}

const HeadOrange: React.FC<props> = ({ boundary, count }) => {
  const { nodes, materials } = useGLTF<CustomGLTF>('./loaders/head_orange-transformed.glb');
  const [heads, setHeads] = useState<headType[]>([]);

  const updatePosition = (headsArr: headType[], boundary: number) => {
    headsArr.forEach((head, index) => {
      head.position.x = Math.random() * 15;
      head.position.z = Math.random() * 5;
    })
    setHeads(headsArr)
  }

  useEffect(() => {
    const tempHeads: headType[] = [];
    for (let i = 0; i < count; i++) {
      tempHeads.push({ position: { x: 0, z: 0 }, box: 1 })
    }
    console.log(tempHeads)
    updatePosition(tempHeads, boundary)

  }, [boundary, count])

  return (
    <group dispose={null}>
      {heads.map((head, index) => {
        return (
          <object3D key={index} position={[head.position.x,5,head.position.z]}>
            <RigidBody gravityScale={1}>
            <mesh geometry={nodes.FaceBuilderHead002.geometry} material={materials.material_5}  rotation={[1.544, 0.019, 0.022]} scale={0.5} />
            </RigidBody>
          </object3D>
        )
      })}
    </group>
  )
}

useGLTF.preload('./loaders/head_orange-transformed.glb')

export default HeadOrange;