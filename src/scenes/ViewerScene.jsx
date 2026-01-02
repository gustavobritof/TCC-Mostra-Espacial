import { OrbitControls } from '@react-three/drei'
import { useSceneStore } from '../store/useSceneStore'
import Model from '../components/Model'

export default function ViewerScene() {
    const selected = useSceneStore(s => s.selected)

    return (
        <>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} />
            <OrbitControls />

            <Model color={selected.color} />
        </>
    )
}
