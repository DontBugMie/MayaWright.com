import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function BoxContainer() {
    return (
        <RigidBody type="fixed">
            <Box
                args={[55, 10, 20]}
                rotation={[0,0,0]}
                position={[0,-8,0]}
            >
                <meshPhongMaterial color="#ff00ff" opacity={0.1} transparent />
            </Box>
            <Box
                args={[55, 10, 20]}
                rotation={[0,0,0]}
                position={[0,20,0]}
            >
                <meshPhongMaterial color="#ff00ff" opacity={0.0} transparent />
            </Box>
            <Box
                args={[55, 55, 2]}
                rotation={[0,0,0]}
                position={[0,-5,-10]}
            >
                <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
            </Box>
            <Box
                args={[55, 55, 2]}
                rotation={[0,0,0]}
                position={[0,-10,5]}
            >
                <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
            </Box>
            <Box
                args={[55, 55, 2]}
                rotation={[0,1.5,0]}
                position={[-15,-10,-15]}
            >
                <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
            </Box>
            <Box
                args={[55, 55, 2]}
                rotation={[0,1.5,0]}
                position={[15,-10,-15]}
            >
                <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
            </Box>
            
        </RigidBody>
    )
}