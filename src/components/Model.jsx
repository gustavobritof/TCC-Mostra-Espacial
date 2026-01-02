export default function Model({ color }) {
    return (
        <mesh position={[0, 1, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
