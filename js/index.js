const rollDice = () => {
    const diceFaces = {
        d00: "ASPFFK",
        d01: "NUIHMQ",
        d02: "OBJOAB",
        d03: "LNHNRZ",
        d10: "AHSPCO",
        d11: "RYVDEL",
        d12: "IOTMUC",
        d13: "LREIXD",
        d20: "TERWHV",
        d21: "TSTIYD",
        d22: "WNGEEH",
        d23: "ERTTYL",
        d30: "OWTOAT",
        d31: "AEANEG",
        d32: "EIUNES",
        d33: "TOESSI"
    }

    const diceElements = Array.from(document.getElementsByClassName("dice")).sort(() => Math.random() - 0.5)

    const yeet = Object.keys(diceFaces).map((key) => {
        diceElements.pop().id = key
        return new Die({faces: diceFaces[key], id: key})
    })
    yeet.forEach((die) => die.roll())
}

class Die {
    constructor({faces, id}) {
        this.faces = Array.from(faces)
        this.id = id
    }

    roll(){
        const elem = document.getElementById(this.id)
        const face = this.faces[Math.floor(Math.random() * this.faces.length)]
        if (face == "Q") elem.innerText = "Qu"
        else elem.innerText = face
    }
}