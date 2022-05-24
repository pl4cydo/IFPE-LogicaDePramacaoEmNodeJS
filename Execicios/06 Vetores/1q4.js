// Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor

function jorge (vetor){
    var contador = 0
    for (i=0; i<vetor.length; i++) {
        if (vetor[i] % 2 != 0) {
            contador++
        }
    }
    return contador
}
console.log(jorge([1,2,3,4,5,6,7,9]))