import React from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud } from "../../loaders/Cloud";
import AboutText from "./AboutText";

export default function AboutSection() {
    return (
        <div>
        <div
            style={{
                backgroundImage: 'linear-gradient( rgb(253,231,22), rgb(207,243,242) 5%)',
                height: '80vh',
                marginBottom: 0
            }}
        >
            <Canvas>
                <ambientLight color="white" intensity={2} />
                <spotLight color="white" position={[0, 10, 90]} intensity={10000} />
                <spotLight color="white" position={[0, 0, 90]} intensity={10000} />
                <spotLight color="white" position={[0, -10, 90]} intensity={10000} />
                <spotLight color="white" position={[10, -10, 90]} intensity={10000} />
                <spotLight color="white" position={[-10, -10, 90]} intensity={10000} />
                <Cloud />
            </Canvas>

            
        </div>
        <AboutText/>
        </div>
    )
}