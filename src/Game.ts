import {PerspectiveCamera, Scene, WebGLRenderer, Vector3, Object3D, Mesh, CylinderGeometry, MeshStandardMaterial, BoxGeometry, MeshNormalMaterial} from 'three'
// import RAPIER, { World, EventQueue, RigidBodyDesc, ColliderDesc } from '@dimforge/rapier3d-compat'
import RAPIER, { World } from '@dimforge/rapier3d-compat'

export default class Game {
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
    world?: World
    dynamicBodies: [Object3D, RAPIER.RigidBody][] = []
    moveDirection: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };

    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
    }

    async init() {
        await RAPIER.init() // This line is only needed if using the compat version
        const gravity = new Vector3(0.0, -9.81, 0.0)
        this.world = new World(gravity)

        // floor
        const floorMesh = new Mesh(
            new CylinderGeometry( 15, 15, 0.1, 8, 1, false, 0),
            new MeshStandardMaterial()
        )
        floorMesh.receiveShadow = true
        floorMesh.position.y = -1
        this.scene.add(floorMesh)
        const staticFloorBody  = this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0))
        const floorColliderShape = RAPIER.ColliderDesc.cylinder(0.1, 15)
        this.world.createCollider(floorColliderShape, staticFloorBody )
        // end floor

        const cubeMesh = new Mesh(new BoxGeometry(1, 1, 1), new MeshNormalMaterial())
        cubeMesh.castShadow = true
        this.scene.add(cubeMesh)
        const cubeBody = this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false))
        const cubeShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(10).setRestitution(1)
        this.world.createCollider(cubeShape, cubeBody)
        this.dynamicBodies.push([cubeMesh, cubeBody])

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this.handleKeyDown(event)
        })
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            this.handleKeyUp(event)
        })
    }

    update() {
        if (this.world) {
            this.world.step()
            for (let i = 0, n = this.dynamicBodies.length; i < n; i++) {
                const [mesh, body] = this.dynamicBodies[i]
                mesh.position.copy(body.translation())
                mesh.quaternion.copy(body.rotation())

                // Update position based on movement direction
                body.setTranslation(new RAPIER.Vector3(
                    body.translation().x + this.moveDirection.x,
                    body.translation().y + this.moveDirection.y,
                    body.translation().z + this.moveDirection.z
                ), true)
            }
        }
    }

    handleKeyDown(event: KeyboardEvent) {
        console.log('event.code', event.code)
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveDirection.z = -0.1;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.moveDirection.z = 0.1;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.moveDirection.x = -0.1;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.moveDirection.x = 0.1;
                break
        }
    }

    handleKeyUp(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
            case 'ArrowDown':
            case 'KeyS':
                this.moveDirection.z = 0;
                break;
            case 'ArrowLeft':
            case 'KeyA':
            case 'ArrowRight':
            case 'KeyD':
                this.moveDirection.x = 0;
                break
        }
    }
}