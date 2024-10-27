import {
    Scene,
    DirectionalLight,
    // DirectionalLightHelper,
    CameraHelper,
    EquirectangularReflectionMapping
} from 'three'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'

export default class Environment {
    scene: Scene
    light: DirectionalLight
    lightHelper: CameraHelper

    constructor(scene: Scene, gui: GUI) {
        this.scene = scene
        const data: {
            lightColor: number | string,
            lightIntensity: number,
            lightPosX: number,
            lightPosY: number,
            lightPosZ: number
        } = {
            lightColor: 0xffffff,
            lightIntensity: Math.PI * 1.5,
            lightPosX: 32,
            lightPosY: 32,
            lightPosZ: 18
        }

        this.light = new DirectionalLight(data.lightColor, data.lightIntensity)
        this.light.position.set(data.lightPosX, data.lightPosY, data.lightPosZ)
        this.light.shadow.camera.far = 100
        this.light.shadow.camera.left = -15
        this.light.shadow.camera.right = 15
        this.light.shadow.camera.top = 10
        this.light.shadow.camera.bottom = -10
        this.light.shadow.radius = 2
        this.light.shadow.blurSamples = 2
        this.light.shadow.mapSize.width = 512 * 3
        this.light.shadow.mapSize.height = 512 * 3
        this.light.castShadow = true
        this.scene.add(this.light)

        // lightHelper
        // const lightHelper = new DirectionalLightHelper(this.light)
        this.lightHelper = new CameraHelper(this.light.shadow.camera)
        this.lightHelper.visible = false
        this.scene.add(this.lightHelper)

        this.setupGUI(gui, data)
    }

    setupGUI(
        gui: GUI,
        data: {
            lightColor: number | string,
            lightPosX: number,
            lightPosY: number,
            lightPosZ: number
        }
    ) {
        const lightHelperFolder = gui.addFolder('Directional Light')
        lightHelperFolder.add(this.light, 'visible').name('Light on/off')
        lightHelperFolder.add(this.lightHelper, 'visible').name('lightHelper on/off')
        lightHelperFolder.addColor(data, 'lightColor').onChange(() => {
            this.light.color.set(data.lightColor)
        })
        lightHelperFolder.add(this.light, 'intensity', 0, 10, 0.1).name('Intensity')
        lightHelperFolder.add(data, 'lightPosX', -50, 50).name('Position X').onChange(() => {
            this.light.position.x = data.lightPosX
        })
        lightHelperFolder.add(data, 'lightPosY', -50, 50).name('Position Y').onChange(() => {
            this.light.position.y = data.lightPosY
        })
        lightHelperFolder.add(data, 'lightPosZ', -50, 50).name('Position Z').onChange(() => {
            this.light.position.z = data.lightPosZ
        })
        lightHelperFolder.add(this.light.shadow.camera, 'near', 0.1, 100).name('Shadow Near').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.add(this.light.shadow.camera, 'far', 0.1, 100).name('Shadow Far').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.add(this.light.shadow.camera, 'left', -50, 50).name('Shadow Left').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.add(this.light.shadow.camera, 'right', -50, 50).name('Shadow Right').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.add(this.light.shadow.camera, 'top', -50, 50).name('Shadow Top').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.add(this.light.shadow.camera, 'bottom', -50, 50).name('Shadow Bottom').onChange(() => {
            this.light.shadow.camera.updateProjectionMatrix()
        })
        lightHelperFolder.close()
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