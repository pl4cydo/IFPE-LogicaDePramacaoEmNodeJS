// Console (video game)

class consol {
    constructor (a, b, c, d, e) {
        this.marca = a
        this.modelo = b
        this.geracao = c
        this.controle = d
        this.preco = e
    }
}

let nintendoSwitch = new consol('nintendo', 'switch', 'fodase', 2, 2349)
let playStation = new consol('sony', 'play5', 5, 1, 6159)
let xBox = new consol('microsoft', 'xBoxOne', 5, 1, 3000)

console.log(nintendoSwitch)
console.log(playStation)
console.log(xBox)
