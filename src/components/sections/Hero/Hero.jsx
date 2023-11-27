import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import BoxContainer from "./BoxContainer";
import HeroText from "./HeroText";
import LoadingText from "./LoadingText";
import HeadAqua from "../../loaders/HeadAqua.tsx";
import HeadGreen from "../../loaders/HeadGreen.tsx";
import HeadOrange from "../../loaders/HeadOrange.tsx";
import HeadPink from "../../loaders/HeadPink.tsx";
import HeadWhite from "../../loaders/HeadWhite.tsx";
import HeadYellow from "../../loaders/HeadYellow.tsx";

export default function Hero() {
    return (
        <div>
            <Canvas 
            style={{
                backgroundColor: 'yellow',
                height: '100vh',
                }}>

            <Physics>
                        <ambientLight color="white" intensity={2} />
                        <spotLight color="white" position={[0,10,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,0,30]} intensity={1000}/>
                        <spotLight color="white" position={[0,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[10,-10,30]} intensity={1000}/>
                        <spotLight color="white" position={[-10,-10,30]} intensity={1000}/>
                    <HeadAqua boundary={1} count={100}/>
                    <HeadGreen boundary={1} count={100}/>
                    <HeadOrange boundary={1} count={100}/>
                    <HeadPink boundary={1} count={100}/>
                    <HeadWhite boundary={1} count={100}/>
                    <HeadYellow boundary={1} count={100}/>
                    <HeroText />
                    <BoxContainer/>
            </Physics>
            
            </Canvas>
        </div>
    )
}