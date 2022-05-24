// Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido 
// como parâmetro


function vetor (vetorM, num) {
    for (var i = 0; i < vetorM.length; i++) {
        num = num * vetorM[i]
    }
    return num
}
console.log(vetor([1,2,3,4], 5))