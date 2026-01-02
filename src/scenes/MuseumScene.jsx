import { Sky } from '@react-three/drei'
import Exhibit from '../components/Exhibit'
import { exhibitsData } from '../data/exhibitsData'
import { useSceneStore } from '../store/useSceneStore'

export default function MuseumScene() {
    const setScene = useSceneStore(s => s.setScene)

    return (
        <>
            {/* Luzes */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />
            <pointLight position={[-5, 3, -5]} intensity={0.5} color="#ffe8cc" />
            <pointLight position={[5, 3, -5]} intensity={0.5} color="#ffe8cc" />
            <pointLight position={[0, 3, 0]} intensity={0.5} color="#ffe8cc" />

            {/* Ambiente */}
            <Sky />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#8b6f47" roughness={0.6} />
            </mesh>

            {/* Parede fundo */}
            <mesh position={[0, 2.5, -10]}>
                <boxGeometry args={[20, 5, 0.3]} />
                <meshStandardMaterial color="#e8dcc7" />
            </mesh>

            {/* Exibições */}
            {exhibitsData.map(exhibit => (
                <Exhibit
                    key={exhibit.id}
                    data={exhibit}
                    onSelect={(data) => setScene('gallery', data)}
                />
            ))}
        </>
    )
}
