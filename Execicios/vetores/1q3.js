// Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro para segundo vetor
// (elemento por elemento)

function dani (vetor1, vetor2) {
    for (i=0; i<vetor2.length; i++) {
        vetor1[i] = vetor2[i]
    }
    return vetor1
}
console.log(dani([],[1,2,3,4]))