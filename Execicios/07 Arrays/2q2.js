// Implementar subprograma que dados dois arrays bidimensionais, copia o conteúdo do primeiro no segundo array;

function arcanine (array1, array2) {
    for (i = 0; i < mew.length; i++) {
        array2[i] = []
        for (j = 0; j < mew.length; j++) {
            array2[i][j] = array1[i][j]
        }
    }
    return array2
}

let mew = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let mew2 = []

console.log(arcanine(mew, mew2))