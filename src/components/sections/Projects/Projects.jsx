import Marquee from "react-fast-marquee";
import ProjectsMarquee from "../About/ProjectsMarquee.jsx";
import './Projects.css';

import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import purplePhone from "../../../assets/images/purplePhone.png";
import messageInBottleVid from "../../../assets/videos/messageInBottleVid.MP4";
import simpleOnlineVid from "../../../assets/videos/SimpleOnline.MP4";
import zippers from "../../../assets/videos/Zippers.MP4";

export default function ProjectsSection() {
    return (
        <div style={{ backgroundColor: 'rgb(254,233,61)' }}>
            <Canvas>
                <Text3D
                    font={'./assets/fonts/Permanent_Marker_Regular.json'}
                    lineHeight={1}
                    letterSpacing={-0.025}
                    position={[-2.5, 0, 2]}
                    rotation={[0, 0, 0]}
                >
                    {`Projects`}
                    <meshNormalMaterial />
                </Text3D>
            </Canvas>
            <div className="projectContainer">
                <div className="projectWrapper">
                    <video className="phoneBackground" typeof="video/mp4" src={messageInBottleVid} width="auto" height="700" muted={true} controls autoPlay={true} loop={true}/>
                </div>
                <div className="projectWrapper">
                    <video className="phoneBackground" typeof="video/mp4" src={simpleOnlineVid} width="auto" height="700" muted={true} controls autoPlay={true} loop={true}/>
                </div>
                <div className="projectWrapper">
                    <video className="phoneBackground" typeof="video/mp4" src={zippers} width="auto" height="700" muted={true} controls autoPlay={true} loop={true}/>
                </div>
            </div>
        </div>
    )
}