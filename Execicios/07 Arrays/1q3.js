// Implementar um subprograma que retorna a quantidade de elementos ímpares em um array de duas dimensões;

const naruto = [
    [1,3],
    [7,5]
]

function arcanine (array) {
    let quant = 0
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i][j] % 2 != 0) {
                quant++
            } 
        }
    }
    return quant
}
console.log(arcanine(naruto))