import { OrbitControls } from '@react-three/drei'
import { useSceneStore } from '../store/useSceneStore'
import Model from '../components/Model'

export default function GalleryScene() {
    const selected = useSceneStore(s => s.selected)
    const setScene = useSceneStore(s => s.setScene)

    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />

            <Model color={selected.color} />

            <mesh
                position={[0, 0.5, -2]}
                onClick={() => setScene('viewer', selected)}
            >
                <boxGeometry args={[1, 0.3, 0.1]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </>
    )
}
