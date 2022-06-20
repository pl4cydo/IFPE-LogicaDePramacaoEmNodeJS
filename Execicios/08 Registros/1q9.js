// Microondas

class microOndas {
    constructor (a,b,c,d,e) {
        this.marca = a        
        this.modelo = b
        this.preco = c
        this.litros = d
        this.cor = e
    }
}

let eletrolux = new microOndas('Eletrolux', 'MI41S', '799', '31', 'Prata')

// console.log(eletrolux.marca)

// TABELA DE CARACTERISTICAS 
let Marca = 0
let Modelo = 1
let Preço = 2
let Litos = 3
let Cor = 4
let qualCaracteristica = Marca

function encontrar(num) {
    if (num == 0) {
        console.log(eletrolux.marca)
    }
}

encontrar(qualCaracteristica)