//Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos

function saara (vetor1, vetor2) {
    let soma1 = 0
    let soma2 = 0

    for (let i = 0; i < vetor1.length; i++) {
        soma1 = soma1 + vetor1[i]
    }
    for (let j = 0; j < vetor2.length; j++) {
        soma2 = soma2 + vetor2[j]
    }

    if (soma1 > soma2) {
       return vetor1
    } else {
        return vetor2
    }
}

console.log(saara([1,2,3,4,-7], [5,5,5]))