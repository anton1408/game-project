import {Scene, DirectionalLight, DirectionalLightHelper, EquirectangularReflectionMapping} from 'three'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'

export default class Environment {
    scene: Scene
    light: DirectionalLight

    constructor(scene: Scene, gui: GUI) {
        const data = {lightColor: 0xffffff}

        this.scene = scene
        this.light = new DirectionalLight(data.lightColor, Math.PI)
        this.light.position.set(8, 4, 5)
        this.light.castShadow = true

        this.scene.add(this.light)

        // helper
        const lightHelper = new DirectionalLightHelper(this.light)
        lightHelper.visible = true

        // GUI
        const lightHelperFolder = gui.addFolder('Directional Light')
        lightHelperFolder.add(this.light, 'visible')
        lightHelperFolder.addColor(data, 'lightColor').onChange(() => {
            this.light.color.set(data.lightColor)
        })

        this.scene.add(lightHelper)
    }

    async init() {
        await new RGBELoader().loadAsync('img/blue_sky_1k.hdr').then((texture) => {
            texture.mapping = EquirectangularReflectionMapping
            this.scene.environment = texture
            this.scene.background = texture
            // scene.environmentIntensity = 0.8
            this.scene.environmentIntensity = 0.1
        })
    }
}