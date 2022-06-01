// Implementar um subprograma que dado um array bidimensional, computa a média dos seus elementos, conta e retorna quantos elementos
// acima da média ele possui

let landorus = [
    [1,2,9],
    [1,2,3]
]

function arcanine (array) {
    let soma = 0;
    let contador = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length + 1; j++) {
            soma = soma + array[i][j];
            contador++
        }
    }
    let media = soma / contador;
    return media
}

function pupitar (array1) {
    let tyranitarMedia = arcanine(array1)
    let contador = 0;
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1.length + 1; j++) {
            if (array1[i][j] > tyranitarMedia) {
            contador++
            }
        }
    }
    return contador
}

console.log('quantidade de números a cima da média é:', pupitar(landorus))