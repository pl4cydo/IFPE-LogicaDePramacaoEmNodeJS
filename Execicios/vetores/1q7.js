//Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número
function saara (vetor, numS) {
    console.log('vetor', vetor, '/', numS)
    let sub = 0
    for (i=0;i<vetor.length;i++) {
        sub = vetor[i] / numS
        process.stdout.write(`${sub}` + " - ")
    }
}    

saara([1,2,3,4,5], 2)