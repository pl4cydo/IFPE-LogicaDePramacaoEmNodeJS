// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo:
// Filme

class filme {
    constructor (name, time) {
        this.name = name
        this.time = time
    }
}

let arcanine = [
    ['matrix', 120],
    ['homemAranha', 140],
    ['harryPotter', 130]
]

for (i = 0; i < arcanine.length; i++) {
    for (j = 0; j < arcanine[i].length; j++) { 
        if (j == 0) {
            let leitor = new filme(arcanine[i][j], arcanine[i][j+1])
            console.log(leitor)
        }
    }
}

