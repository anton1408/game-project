import './style.css'
import {Scene, PerspectiveCamera, WebGLRenderer, Clock} from 'three'
import Stats from 'three/addons/libs/stats.module.js'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import Game from './Game.ts'

const scene = new Scene()

const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 1, 5)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

const stats = new Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

const game = new Game(scene, camera, renderer, gui)
await game.init()

const clock = new Clock()
let delta

function animate() {
    requestAnimationFrame(animate)
    delta = clock.getDelta()

    game.update(delta)
    renderer.render(scene, camera)
    stats.update()
}

animate()