// Ponto (em um plano cartesiano)

class ponto {
    constructor(x, y) {
        this.eixoX = x
        this.eixoY = y
    }   
}

let pontoA = new ponto(-1, 1)
let pontoB = new ponto(-2, 2)


function verify (a, b) {
    if (a.eixoX == b.eixoX && a.eixoY == b.eixoY) {
        return true
    } else {
        return false
    }
}

console.log(pontoA, pontoB)
console.log(verify(pontoA, pontoB))