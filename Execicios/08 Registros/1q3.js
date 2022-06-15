// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo:
// Cubo

class cubo {
    constructor(a) {
        this.aresta1 = a
        this.aresta2 = a
        this.aresta3 = a
    }
}

let cubo1 = new cubo(5)

function areaCubo (aresta) {
    let area = aresta**3
    console.log(`${'a area do cubo é: ' + area}`)
}

console.log(cubo1)
areaCubo(cubo1.aresta1)