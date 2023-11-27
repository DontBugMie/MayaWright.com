import { Canvas } from "@react-three/fiber";
import {
    Text3D
} from "@react-three/drei";

export default function AboutMarquee() {
    return (
        <Canvas>
            <Text3D
                font={'./assets/fonts/Permanent_Marker_Regular.json'}
                lineHeight={1}
                letterSpacing={-0.025}
                position={[0, 0, 1]}
                rotation={[0, 0, 0]}
            >
                {`Projects`}
                <meshNormalMaterial />
            </Text3D>
        </Canvas>
    )
}