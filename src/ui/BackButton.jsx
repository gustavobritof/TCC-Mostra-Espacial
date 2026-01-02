import { useSceneStore } from '../store/useSceneStore'

export default function BackButton() {
    const scene = useSceneStore(s => s.scene)
    const setScene = useSceneStore(s => s.setScene)

    if (scene === 'museum') return null

    return (
        <button
            onClick={() => setScene(scene === 'viewer' ? 'gallery' : 'museum')}
            style={{
                position: 'absolute',
                top: 20,
                left: 20,
                padding: '10px 14px',
                zIndex: 10
            }}
        >
            Voltar
        </button>
    )
}
