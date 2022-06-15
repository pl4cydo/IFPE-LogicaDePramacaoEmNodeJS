// Carro

class carro {
    constructor(a, b, c, d, e, f) {
        this.marca = a
        this.modelo = b
        this.kilometragem = c
        this.cavalosMotor = d
        this.cor = e 
        this.preco = f         
    }
}

let compass = new carro('Jepp', 'Compass', '0km', 240, 'Cinza Granit', 192.000)

function comprar (car) {
    if (car.preco > 0) {
        return 'infelizmente não tenho condições de comprar algo que não seja de graça.'
    } else {
        return 'é meu'    
    }
}

console.log(comprar(compass))
