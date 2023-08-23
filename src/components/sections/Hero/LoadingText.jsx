import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function LoadingText() {
    return (
        <RigidBody type="fixed">
            <Text3D
                font={'./assets/fonts/Permanent_Marker_Regular.json'}
                // font={'./assets/fonts/Rock_3D_Regular.json'}
                lineHeight={1}
                letterSpacing={-0.025}
                position={[-1,-4.3, -1]}
                rotation={[0,0,0]}
                scale={0.5}
            >
                {`Loading...`}
                <meshNormalMaterial />
            </Text3D>
        </RigidBody>
    )
}