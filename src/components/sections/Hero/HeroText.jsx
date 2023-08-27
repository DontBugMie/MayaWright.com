import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function HeroText() {
    return (
        <RigidBody type="fixed">
            <Text3D
                font={'./assets/fonts/Permanent_Marker_Regular.json'}
                lineHeight={1}
                letterSpacing={-0.025}
                position={[-1,1, -5]}
                rotation={[0,-0.5,0]}
            >
                {`"Hey,\n I'm Maya!"`}
                <meshNormalMaterial />
            </Text3D>
        </RigidBody>
    )
}