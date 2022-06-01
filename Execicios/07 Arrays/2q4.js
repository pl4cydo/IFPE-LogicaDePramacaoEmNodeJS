// Implementar um subprograma que dados dois arrays bidimensionais, escreve no segundo array a transcrição do primeiro;
// Exemplo: b[linha,coluna] = a[coluna,linha]

function arcanine (array, array2) {
    for (i = 0; i < array.length; i++) {
        array2[i] = []
        for (j = 0; j < array.length; j++) {
            array2[i][j] = array[j][i] 
            process.stdout.write(`${array2[i][j]}\t`)
        } 
        console.log()  
    }
}

let mew = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let mew2 = []

arcanine(mew, mew2)