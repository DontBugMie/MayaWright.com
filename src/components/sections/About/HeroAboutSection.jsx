import React from "react";
import { Canvas } from "@react-three/fiber";
import { HeadBorder } from "../../loaders/HeadBorder";

export default function HeroAboutSection(){
    return(
        <div
        style={{
            backgroundColor: 'transparent',
            height: '80vh',
            width: '100%',
            position: 'absolute',
            top:'75vh',
            zIndex: 7,
            }}
        >
            <Canvas>
            <ambientLight color="white" intensity={2} />
                        <spotLight color="white" position={[0,10,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,0,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[10,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[-10,-10,30]} intensity={1000}/>
                <HeadBorder/>
            </Canvas>
        </div>
    )
}