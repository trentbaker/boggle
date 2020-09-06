class Die {
    constructor({faces, id}) {
        this.faces = Array.from(faces)
        this.id = id
    }

    roll() {
        const elem = document.getElementById(this.id)
        const face = this.faces[Math.floor(Math.random() * this.faces.length)]
        this.rotate(parseInt(`${Math.random() * 4}`))
        if (face == `Q`) elem.innerText = `Qu`
        else elem.innerText = face
    }

    rotate(turns) {
        const elem = document.getElementById(this.id)
        elem.style.removeProperty(`transform`)
        elem.style.cssText += `transform: rotate(${90 * turns}deg)`
    }
}

const diceFaces = {
    d00: `ASPFFK`,
    d01: `NUIHMQ`,
    d02: `OBJOAB`,
    d03: `LNHNRZ`,
    d04: `AHSPCO`,
    d05: `RYVDEL`,
    d06: `IOTMUC`,
    d07: `LREIXD`,
    d08: `TERWHV`,
    d09: `TSTIYD`,
    d10: `WNGEEH`,
    d11: `ERTTYL`,
    d12: `OWTOAT`,
    d13: `AEANEG`,
    d14: `EIUNES`,
    d15: `TOESSI`
}

const diceElements = () => Array.from(document.getElementsByClassName(`dice`))

const dice = () => {
    const elems = diceElements().sort(() => Math.random() - 0.5)
    return Object.keys(diceFaces).map((key) => {
        elems.pop().id = key
        return new Die({faces: diceFaces[key], id: key})
    })
}

const rollDice = () => dice().forEach((die) => die.roll())
const concealDice = () => diceElements().forEach((die) => die.innerText = `?`)
const straightenDice = () => dice().forEach((die) => die.rotate(0))

const resetDice = () => {
    concealDice()
    straightenDice()
}

const resetBackground = () => {
    document.body.style.removeProperty(`background-color`)
    document.body.style.removeProperty(`transition`)
    document.body.style.cssText += `background-color: slategray`
}

const resetGame = () => {
    resetDice()
    resetBackground()
    document.getElementById(`start-button`).disabled = false
}

const boggle = (gameSeconds) => {
    rollDice()

    document.body.style.cssText += `transition: background-color ${gameSeconds}s`
    document.body.style.cssText += `background-color: red`

    document.getElementById(`start-button`).disabled = true
}

const setup = () => {
    document.body.addEventListener(`transitionend`, () => {
        resetBackground()
        document.getElementById(`start-button`).disabled = false
    })

    concealDice()
    resetBackground()
}

setup()
