const rollDice = () => {
    const diceFaces = {
        d00: `ASPFFK`,
        d01: `NUIHMQ`,
        d02: `OBJOAB`,
        d03: `LNHNRZ`,
        d10: `AHSPCO`,
        d11: `RYVDEL`,
        d12: `IOTMUC`,
        d13: `LREIXD`,
        d20: `TERWHV`,
        d21: `TSTIYD`,
        d22: `WNGEEH`,
        d23: `ERTTYL`,
        d30: `OWTOAT`,
        d31: `AEANEG`,
        d32: `EIUNES`,
        d33: `TOESSI`
    }

    const diceElements = Array.from(document.getElementsByClassName(`dice`)).sort(() => Math.random() - 0.5)

    const dice = Object.keys(diceFaces).map((key) => {
        diceElements.pop().id = key
        return new Die({faces: diceFaces[key], id: key})
    })
    dice.forEach((die) => die.roll())
}

const boggle = () => {
    rollDice()
    fadeBackground()
}

const fadeBackground = () => {
    const gameTime = 3 * 60

    const fadeToRed = () => {
        document.body.style.cssText += `transition: background-color ${gameTime}s`
        document.body.style.cssText += `background-color: red`
    }

    const resetToWhite = () => {
        document.body.style.removeProperty(`background-color`)
        document.body.style.removeProperty(`transition`)
    }

    document.body.style.cssText += `background-color: green`
    setTimeout(fadeToRed)
    setTimeout(resetToWhite, gameTime * 1000)
}

class Die {
    constructor({faces, id}) {
        this.faces = Array.from(faces)
        this.id = id
    }

    roll() {
        const elem = document.getElementById(this.id)
        const face = this.faces[Math.floor(Math.random() * this.faces.length)]
        if (face == `Q`) elem.innerText = `Qu`
        else elem.innerText = face
    }
}

Array.from(document.getElementsByClassName(`dice`)).forEach((die) => die.innerText = `?`)
