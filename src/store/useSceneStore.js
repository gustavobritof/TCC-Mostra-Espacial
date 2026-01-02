import { create } from 'zustand'

export const useSceneStore = create(set => ({
    scene: 'museum',
    selected: null,

    setScene: (scene, selected = null) =>
        set({ scene, selected })
}))
