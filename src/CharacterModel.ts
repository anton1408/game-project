import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Group, AnimationAction, AnimationMixer, Mesh } from 'three'


export default class CharacterModel extends Group {
    glTFLoader: GLTFLoader
    animationMixer?: AnimationMixer

    constructor() {
        super()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('jsm/libs/draco/')

        this.glTFLoader = new GLTFLoader()
        this.glTFLoader.setDRACOLoader(dracoLoader)
    }

    async init(animationActions: { [key: string]: AnimationAction }) {
        const [ninja, walk, run, jump] = await Promise.all([
            this.glTFLoader.loadAsync('models/ninja$@standing_compressed.glb'),
            this.glTFLoader.loadAsync('models/ninja@walking.glb'),
            this.glTFLoader.loadAsync('models/ninja@running.glb'),
            this.glTFLoader.loadAsync('models/ninja@jumping.glb'),
        ])

        ninja.scene.traverse((m) => {
            if ((m as Mesh).isMesh) {
                m.castShadow = true
            }
        })
        jump.animations[0].tracks = jump.animations[0].tracks.filter((e)=> !e.name.endsWith('.position'))

        this.animationMixer = new AnimationMixer(ninja.scene)
        animationActions['stand'] = this.animationMixer.clipAction(ninja.animations[0])
        animationActions['walk'] = this.animationMixer.clipAction(walk.animations[0])
        animationActions['run'] = this.animationMixer.clipAction(run.animations[0])
        animationActions['jump'] = this.animationMixer.clipAction(jump.animations[0])

        animationActions['stand'].play()

        this.add(ninja.scene)
    }

    update(delta: number) {
        this.animationMixer?.update(delta)
    }
}