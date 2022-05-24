//Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor

function saara (vetor, numS) {
    console.log('vetor', vetor, '-', numS)
    let sub = 0
    for (i=0;i<vetor.length;i++) {
        sub = vetor[i] - numS
        console.log(sub)
    }
}    

saara([1,2,3,4,5], 2)


