import { Canvas } from "@react-three/fiber";
import {
    PointMaterial,
    AccumulativeShadows,
    RandomizedLight,
    Plane,
    Text3D,
    Html,
    RoundedBox,

} from "@react-three/drei";

export default function AboutMarquee() {
    return (
        <Canvas>
            <Text3D
                font={'./assets/fonts/Permanent_Marker_Regular.json'}
                lineHeight={1}
                letterSpacing={-0.025}
                position={[0, 0, 3]}
                rotation={[0, 0.2, 0]}
            >
                {`About`}
                <meshNormalMaterial />
            </Text3D>
        </Canvas>
    )
}