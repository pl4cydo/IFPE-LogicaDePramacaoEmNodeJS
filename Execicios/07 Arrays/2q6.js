// Implementar um subprograma que dados dois arrays bidimensionais, retorna qual deles possui a maior soma de seus elementos;

function pupitar (array) {
    let soma = 0;
    for (i=0; i<array.length; i++) {
        for (j=0; j<array.length; j++) {
            for (k=0; k<array.length; k++) {
                soma = soma + array[i][j][k]
            }
        }
    }
    return soma
}

function arcanine (array1, array2) {
    let maior1 = pupitar(array1)
    let maior2 = pupitar(array2)
    if (maior1 > maior2) {
        return 'o primeiro é maior'
    } else if (maior1 < maior2) {
        return 'o segundo é maior'
    } else {
        return 'os dois são iguais'
    }
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

let nemo = [
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

console.log(arcanine(dory, nemo))