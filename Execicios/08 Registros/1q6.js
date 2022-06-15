// fogão

class fogao {
    constructor(a, b, c, d, e, f) {      
        this.bocas = a
        this.forno = b
        this.material = c
        this.tipo = d
        this.preco = e
        this.marca = f
    }
} 

let brastemp = new fogao(4, true, 'aco inox', 'gás', 1500, 'brastemp')
let mundial = new fogao(5, false, 'ferro', 'indução', 1400, 'mundial')

function escolha (fog1, fog2) {
    if (fog1.forno == false && fog1.tipo == 'indução' && fog1.preco < 1500) {
            return fog1
    } else if (fog2.forno == false && fog2.tipo == 'indução' && fog2.preco < 1500) {
            return fog2
    }
}
  

console.log(escolha(brastemp, mundial))
