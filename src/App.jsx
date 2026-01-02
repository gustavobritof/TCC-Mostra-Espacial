import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useSceneStore } from './store/useSceneStore'
import MuseumScene from './scenes/MuseumScene'
import GalleryScene from './scenes/GalleryScene'
import ViewerScene from './scenes/ViewerScene'
import BackButton from './ui/BackButton'

export default function App() {
  const scene = useSceneStore(s => s.scene)

  return (
    <>
      <BackButton />
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [0, 1.6, 6], fov: 60 }}>
          <Suspense fallback={null}>
            {scene === 'museum' && <MuseumScene />}
            {scene === 'gallery' && <GalleryScene />}
            {scene === 'viewer' && <ViewerScene />}
          </Suspense>
        </Canvas>
      </div >
    </>
  )
}
