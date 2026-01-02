export const exhibitsData = [
    {
        id: 'hubble',
        position: [-5, 0, -5],
        model: '/models/hubble.glb',
        scale: 0.0003,
        title: 'Hubble Space Telescope',
        label: '🔭 Hubble'
    },
    {
        id: 'jwst',
        position: [0, 0, -5],
        model: '/models/jwst_james_webb_space_telescope.glb',
        scale: 0.05,
        title: 'James Webb Space Telescope',
        label: 'JWST'
    },
    {
        id: 'saturnv',
        position: [5, 0, -5],
        model: '/models/saturnVCorrect.glb',
        scale: 0.2,
        title: 'Saturn V Rocket',
        label: '🚀 Saturn V'
    },
    {
        id: 'iss',
        position: [-5, 0, 0],
        model: '/models/ISS_Correct.glb',
        scale: 0.1,
        title: 'International Space Station',
        label: '🌍 ISS'
    },
    {
        id: 'voyager',
        position: [5, 0, 0],
        model: '/models/voyager.glb',
        scale: 0.15,
        rotation: [0, 0, Math.PI / 4],
        title: 'Voyager Probe',
        label: '🛰️ Voyager'
    }
]
