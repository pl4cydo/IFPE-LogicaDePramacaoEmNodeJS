// Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro no segundo 
// vetor (elemento por elemento) na ordem inversa
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function arcanine (vetor1, vetor2) {
    var j = 0
    for (let i=(vetor1.length-1); i>=0; i--) {
      //  console.log(i,j)
        vetor2[i] = vetor1[j]
        j++
    }
    return vetor2
}

console.log(arcanine([1,2,3,4],[]))