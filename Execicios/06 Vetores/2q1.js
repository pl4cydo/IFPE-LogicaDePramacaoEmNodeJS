// Implementar um subprograma que dado um vetor, retorna true se a soma dos seus elementos for positiva ou false,
// caso contrário

function cacnia(vetor) {
    let soma = 0;
    for (let i=0; i<vetor.length; i++) {
        soma = soma + vetor[i]
    }
    if (soma > 0) {
        return true
    } else {
        return false
    }
}

console.log(cacnia([1,2,3,4,-11]))