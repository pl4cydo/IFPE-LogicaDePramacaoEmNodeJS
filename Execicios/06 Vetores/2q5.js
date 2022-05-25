// Implementar subprograma que dados dois inteiros a e b cria um vetor contendo todos os elementos entre a e b
// Exemplo: entrada: 2 e 6, saída: [3, 4, 5]

// let a = 2
// let b = 8
// let c = []


// let d = 0
// for (i=a+1; i<b;i++) {
//     c[d] = i
//     d++
// }

// console.log(c)

function torterra (eevee, dragonite, cleffa) {

    let d = 0
    for (i = eevee + 1; i < dragonite; i++) {
        cleffa[d] = i
        d++
    }
    return cleffa
}

let lapras = torterra(2, 8, [])

console.log(lapras)