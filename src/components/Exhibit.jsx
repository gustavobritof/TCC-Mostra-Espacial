import RotatingModel from './RotatingModel'
import { Text } from '@react-three/drei'

export default function Exhibit({ data, onSelect }) {
    return (
        <group position={data.position}>
            {/* Base */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.2, 1, 1.2]} />
                <meshStandardMaterial color="#34495e" roughness={0.4} />
            </mesh>

            <mesh position={[0, 1.05, 0]}>
                <boxGeometry args={[1.25, 0.1, 1.25]} />
                <meshStandardMaterial color="#2c3e50" />
            </mesh>

            <mesh position={[0, 1.2, 0]}>
                <boxGeometry args={[1, 0.15, 1]} />
                <meshStandardMaterial color="#5d6d7e" metalness={0.3} />
            </mesh>

            {/* Modelo */}
            <group position={[0, 2, 0]}>
                <RotatingModel
                    url={data.model}
                    scale={data.scale}
                    rotation={data.rotation}
                    onClick={() => onSelect(data)}
                />
            </group>

            {/* Label */}
            <Text
                position={[0, 0.2, 0.65]}
                fontSize={0.18}
                color="#2c3e50"
                anchorX="center"
                anchorY="middle"
            >
                {data.label}
            </Text>
        </group>
    )
}
