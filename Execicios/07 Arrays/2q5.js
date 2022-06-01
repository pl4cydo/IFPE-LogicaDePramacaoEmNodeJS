// Implementar um subprograma que dado um array tridimensional, computa a média de seus elementos;
// Dica: são necessários três for’s aninhados para computar a média

function arcanine (array) {
    let soma = 0;
    var contador = 0
    for (i=0; i<array.length; i++) {
        for (j=0; j<array.length; j++) {
            for (k=0; k<array.length; k++) {
                // console.log(array[i][j][k])
                soma = soma + array[i][j][k]
                contador++
            }
        }
    }
    let mult = soma / contador;
    return mult
}

let dory = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
]


console.log(arcanine(dory))
