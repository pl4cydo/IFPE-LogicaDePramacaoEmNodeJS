// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo 
// (dicas: utilize arrays, se vocẽ não souber qual operação implementar tente fazer uma função
//  para buscar e retornar um elemento na lista): Quadrado


class quadrado {
    constructor(lado1, lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
}
class listaQuadrado {
	constructor (quadrado) {
		this.quadrado2 = quadrado;
	}
}

let quadradoUm = new quadrado(15, 20)
let quadradoDois = new quadrado(16, 21)
let quadradoTres = new quadrado(19, 22)


let arrayQuadrados = ([quadradoUm, quadradoDois])

let lista1 = new listaQuadrado(arrayQuadrados)
// console.log(a)

function verificarLista(lista1, quad) {
	for (let i = 0; i lista1.quadrado2.length; i++) {
		console.log(lista1.quadrado2[i])
	}
}

verificarLista(lista1, quadradoDois)
// console.log(b)





// console.log(lado)
