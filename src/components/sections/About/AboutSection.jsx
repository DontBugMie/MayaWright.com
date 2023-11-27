import { Canvas } from "@react-three/fiber";
import {
    PointMaterial,
    AccumulativeShadows,
    RandomizedLight,
    Plane,
    Text3D,
    Html,
    RoundedBox,
    Text

} from "@react-three/drei";
import Marquee from "react-fast-marquee";
import AboutMarquee from "./AboutMarquee";
import ProjectsMarquee from "./ProjectsMarquee";
import './About.css';

export default function AboutSection() {
    return (
        <div style={{ backgroundColor: 'rgb(254,233,61)', paddingBottom: 0 }}>
            <Marquee>
                <AboutMarquee />
                <AboutMarquee />
                <AboutMarquee />
                <AboutMarquee />
                <AboutMarquee />
                <AboutMarquee />
                <AboutMarquee />
            </Marquee>
            <div className="aboutWordContainer">
                <div className="aboutWordWrapper">
                    <p>
                        Please, let me introduce myself.
                    </p>
                    <p>
                        I’m Maya! I am a full stack developer who has a fond interest in designs that excites the grey matter inside people’s squidgy brains. I’ve previously worked with clients, large and small to create engaging user focused website and apps that have thoughtful designs and create positive impacts across globe.
                    </p>
                    <p>
                        I like to let loose as well!
                    </p>
                    <p>
                        Outside of work, you can find me catching up with friends or taking a short holiday to somewhere with snow, where I rock and roll on my snowboard. I have been told before that I am a mini golf connoisseur, and I also love to travel!
                    </p>
                    <p>
                        Contact me
                    </p>
                    <p>
                        <a href="mailto: mayagwright20@hotmail.com" target="_blank" rel="noreferrer">
                            Email
                        </a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/maya-wright-2b7922168/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/MayaWright20" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}