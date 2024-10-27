import RAPIER, {World, RigidBody, ActiveEvents} from '@dimforge/rapier3d-compat'
import CharacterModel from './CharacterModel.ts'
import {AnimationAction, PerspectiveCamera, Scene, Vector3, WebGLRenderer, Euler, Quaternion, Object3D, Matrix4} from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import Keyboard from './Keyboard.ts'
import FollowCam from './FollowCam'

export default class Player {
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
    world?: World
    gui: GUI

    characterBody?: RigidBody
    characterModel?: CharacterModel
    animationActions: { [key: string]: AnimationAction } = {}
    activeAnimationAction?: AnimationAction

    vector = new Vector3()
    inputVelocity = new Vector3()
    euler = new Euler()
    quaternion = new Quaternion()
    followTarget = new Object3D() //new Mesh(new SphereGeometry(0.1), new MeshNormalMaterial())
    grounded = true
    rotationMatrix = new Matrix4()
    targetQuaternion = new Quaternion()
    followCam: FollowCam
    keyboard: Keyboard
    speed: number = 0
    wait: boolean = false
    position: [number, number, number]


    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, world: World, position: [number, number, number], gui: GUI) {
        this.gui = gui
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.world = world
        this.keyboard = new Keyboard()
        this.followCam = new FollowCam(this.scene, camera, renderer)
        scene.add(this.followTarget) // the followCam will lerp towards this object3Ds world position.

        this.position = position
        this.createCharacter(this.position)
    }

    createCharacter(position: [number, number, number]) {
        this.characterBody = this.world?.createRigidBody(
            RAPIER.RigidBodyDesc.dynamic()
                .setTranslation(...position)
                .enabledRotations(false, false, false)
                .setLinearDamping(4)
                .setCanSleep(false)
        )
        const characterShape = RAPIER.ColliderDesc.capsule(0.7, 0.15)
            .setTranslation(0, 0.855, 0)
            .setMass(1)
            .setFriction(0)
            .setActiveEvents(ActiveEvents.COLLISION_EVENTS)

        this.world?.createCollider(characterShape, this.characterBody)
    }

    async init() {
        this.characterModel = new CharacterModel()
        await this.characterModel.init(this.animationActions)
        this.characterModel.position.y = 0
        this.activeAnimationAction = this.animationActions['stand']
        this.scene.add(this.characterModel)
    }

    // TODO: move to ovn class animation controller
    updateAnimation(delta: number): void {
        if (!this.wait) {
            let actionAssigned = false

            if (this.keyboard.keyMap['Space'] || this.keyboard.keyMap?.test) {
                actionAssigned = true
                this.setAction(this.animationActions['jump'])
                this.wait = true
                setTimeout(() => (this.wait = false), 1000)
            } else if (
                !actionAssigned &&
                this.keyboard.keyMap['ShiftLeft'] &&
                (this.keyboard.keyMap['KeyW'] ||
                    this.keyboard.keyMap['KeyS'] ||
                    this.keyboard.keyMap['KeyA'] ||
                    this.keyboard.keyMap['KeyD'])
            ) {
                actionAssigned = true
                this.setAction(this.animationActions['run'])
            } else if (
                !actionAssigned &&
                this.keyboard.keyMap['KeyW'] ||
                this.keyboard.keyMap['KeyS'] ||
                this.keyboard.keyMap['KeyA'] ||
                this.keyboard.keyMap['KeyD']
            ) {
                actionAssigned = true
                this.setAction(this.animationActions['walk'])
            }

            !actionAssigned && this.setAction(this.animationActions['stand'])
        }
        // update сharacter movement animation
        // https://threejs.org/docs/index.html#api/en/animation/AnimationMixer
        this.characterModel?.update(delta)
    }

    // TODO: move to ovn class animation controller
    setAction(action: AnimationAction) {
        if (action !== this.activeAnimationAction) {
            console.log('action', action)
            this.activeAnimationAction?.fadeOut(0.1)
            this.activeAnimationAction = action
            console.log('action', action)
            this.activeAnimationAction.reset().fadeIn(0.1).play()

            switch (action) {
                case this.animationActions['walk']:
                    this.speed = 7
                    break
                case this.animationActions['run']:
                case this.animationActions['jump']:
                    this.speed = 20
                    break
                case this.animationActions['stand']:
                    this.speed = 0
                    break
            }
        }
    }

    setGrounded() {
        this.characterBody?.setLinearDamping(4)
        this.grounded = true
        setTimeout(() => (this.wait = false), 250)
    }

    playerRestart() {
        this.characterBody?.setLinvel(new Vector3(...this.position), true)
        this.characterBody?.setTranslation(new Vector3(...this.position), true)
    }

    update(delta: number): void {
        this.inputVelocity.set(0, 0, 0)
        if (this.grounded) {
            if (this.keyboard.keyMap['KeyW']) {
                this.inputVelocity.z = -1
            }
            if (this.keyboard.keyMap['KeyS']) {
                this.inputVelocity.z = 1
            }
            if (this.keyboard.keyMap['KeyA']) {
                this.inputVelocity.x = -1
            }
            if (this.keyboard.keyMap['KeyD']) {
                this.inputVelocity.x = 1
            }

            this.inputVelocity.setLength(delta * (this.speed))

            if (!this.wait && this.keyboard.keyMap['Space']) {
                this.characterBody?.setLinearDamping(0.05)
                if (this.keyboard.keyMap['ShiftLeft']) this.inputVelocity.multiplyScalar(2)
                else this.inputVelocity.multiplyScalar(1)

                this.inputVelocity.y = 5
                this.grounded = false
            }
        }

        this.euler.y = this.followCam.yaw.rotation.y
        this.quaternion.setFromEuler(this.euler)
        this.inputVelocity.applyQuaternion(this.quaternion)

        this.characterBody?.applyImpulse(this.inputVelocity, true)
        if (this.characterBody && this.characterBody.translation().y < -10) this.playerRestart()

        if(this.characterBody) this.followTarget.position.copy(this.characterBody.translation())
        this.followTarget.getWorldPosition(this.vector)
        this.followCam.pivot.position.lerp(this.vector, delta * 10)

        this.characterModel?.position.lerp(this.vector, delta * 20)

        this.rotationMatrix.lookAt(
            this.followTarget.position,
            this.characterModel?.position as Vector3,
            this.characterModel?.up as Vector3
        )
        this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix)

        const distance = this.characterModel?.position.distanceTo(this.followTarget.position)
        if ((distance as number) > 0.0001 && !this.characterModel?.quaternion.equals(this.targetQuaternion)) {
            this.targetQuaternion.z = 0
            this.targetQuaternion.x = 0
            this.targetQuaternion.normalize()
            this.characterModel?.quaternion.rotateTowards(this.targetQuaternion, delta * 20)
        }

        this.updateAnimation(delta)
    }
}