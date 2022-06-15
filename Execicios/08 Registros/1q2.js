// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo:
// Quadrado

class quadrado {
    constructor(lado) {
        this.lado = lado
    }
}

let lado = new quadrado(15)

function arcanine(l) {
    let area = l**2
    console.log(lado)
    console.log(`${'A area do quadrado é: ' + area}`)
}
arcanine(lado.lado)