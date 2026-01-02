import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function RotatingModel({ url, scale, rotation, onClick }) {
    const ref = useRef()
    const { scene } = useGLTF(url)

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.6
        }
    })

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={scale}
            rotation={rotation}
            onClick={onClick}
            onPointerOver={() => (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = 'default')}
        />
    )
}
