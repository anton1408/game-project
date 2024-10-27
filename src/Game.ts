import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    Vector3,
} from 'three'
import RAPIER, { World, EventQueue } from '@dimforge/rapier3d-compat'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import Environment from './Environment.ts'
import RapierDebugRenderer from './RapierDebugRenderer'
import Player from './Player.ts'
import Platform from './Platform'

export default class Game {
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
    gui: GUI
    world?: World
    rapierDebugRenderer?: RapierDebugRenderer
    eventQueue?: EventQueue

    player?: Player

    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, gui: GUI) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.gui = gui
    }

    async init() {
        await RAPIER.init() // This line is only needed if using the compat version
        const gravity = new Vector3(0.0, -9.81, 0.0)
        this.world = new World(gravity)
        this.eventQueue = new EventQueue(true)

        this.rapierDebugRenderer = new RapierDebugRenderer(this.scene, this.world)
        this.rapierDebugRenderer.enabled = false
        this.gui.add(this.rapierDebugRenderer, 'enabled').name('Rapier Debug Renderer')

        // start platform
        new Platform(this.scene, this.world, [10, 0.2, 10], [0, -0.5, 0])

        new Platform(this.scene, this.world, [2, 0.1, 4], [-2, 0, 10])
        new Platform(this.scene, this.world, [4, 0.1, 2], [4, 0, 10])
        new Platform(this.scene, this.world, [2, 0.1, 2], [8, 1, 11.5])
        new Platform(this.scene, this.world, [0.3, 0.1, 10], [8, 1, 1])
        new Platform(this.scene, this.world, [2, 0.1, 2], [8, 2, -8])
        new Platform(this.scene, this.world, [4, 0.1, 2], [3, 3, -8])
        new Platform(this.scene, this.world, [4, 0.1, 2], [-3, 4, -8])
        new Platform(this.scene, this.world, [5, 0.2, 5], [-3, 4, -8])


        const position:[number, number, number] = [0, -1, 0]
        this.player = new Player(this.scene, this.camera, this.renderer, this.world, position, this.gui)
        await this.player.init()

        const environment = new Environment(this.scene, this.gui)
        await environment.init()
        environment.light.target = this.player.followTarget
    }

    update(delta: number): void {
        // ;(this.world as World).timestep = Math.min(delta, 0.1)
        this.world?.step(this.eventQueue)
        this.eventQueue?.drainCollisionEvents((_, __, started) => {
            if (started) {
                this.player?.setGrounded()
            }
        })
        this.player?.update(delta)
        this.rapierDebugRenderer?.update()
    }

}