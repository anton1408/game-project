export default class Keyboard {
    keyMap: { [key: string]: boolean } = {}

    constructor() {
        document.addEventListener('keydown', this.handleKey)
        document.addEventListener('keyup', this.handleKey)

    }

    handleKey = (event: KeyboardEvent) => {
        this.keyMap[event.code] = event.type === 'keydown'
        console.log('event.code', event.code)
    }
}