// Implementar um subprograma que dado um array bidimensional retorna true se a soma dos seus elementos for positiva ou false,
// caso contrário;

var paras = [
    [1,2],
    [3,-7]
]

function aracanine (array) {
    let soma = 0
        for (i = 0; i < paras.length; i++) {
            for (j = 0; j < paras.length; j++) {
                soma = soma + paras[i][j]
            }
        }
    if (soma > 0) {
        return true
    } else {
        return false
    }
}

console.log(aracanine(paras))