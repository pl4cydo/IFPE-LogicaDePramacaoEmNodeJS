// Implementar subprograma que dados três arrays bidimensionais, guarda no terceiro array a soma dos índices equivalentes no dois
// primeiros;

function arcanine (array1,array2,array3) {
    let soma = 0
    for (i = 0; i < array1.length; i++) {
        array3[i] = []
        for (j = 0; j < array1.length; j++) {
            array3[i][j] = array1[i][j] + array2[i][j]
            process.stdout.write(`${array3[i][j]}\t`)
        }    
        console.log()
    }
}

let mew = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let mew2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let mew2y = []

arcanine(mew, mew2, mew2y)
