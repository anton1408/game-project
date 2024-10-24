import './assets/style.css'
import {Scene, PerspectiveCamera, WebGLRenderer} from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import Environment from './Environment.ts'
import Game from './Game.ts'

const stats = new Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

const scene = new Scene()

const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 10, 25)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

const light = new Environment(scene, gui)
await light.init()

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
// controls.autoRotate = true
// controls.screenSpacePanning = true // lock level

const game = new Game(scene, camera, renderer)
await game.init()

function animate() {
    requestAnimationFrame(animate)

    game.update()

    controls.update()

    renderer.render(scene, camera)

    stats.update()
}

animate()