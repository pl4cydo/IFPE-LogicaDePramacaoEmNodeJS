// Implementar um subprograma que dado um vetor, computa a média dos seus elementos e retorna quantos elementos acima da
// média ele possui

function saara (vetor) {
    var media = 0
    var contador = 0
    for (i=0;i<vetor.length;i++) {
        media = media + vetor[i]
    }
    media = media / vetor.length

    for (j=0; j<vetor.length; j++){
        if (vetor[j]>media){
            contador++
        }
    }
    return contador
}
console.log(saara([1,2,3,4,5,6,7,8]))