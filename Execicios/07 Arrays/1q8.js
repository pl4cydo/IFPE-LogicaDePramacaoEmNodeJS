// Implementar um subprograma que dados um array bidimensional de booleans, imprime true se ao menos um dos elementos do array 
// forem verdadeiros ou false, caso contrário.

function arcanine (array1, array2) {
    let boo = true;
    for (i=0; i < array1.length; i++) {
        for (j=0; j < array1.length; j++) {
            if (array1[i][j] != array2[i][j] && boo == true){
                boo = false
            }
        }
    }
    return boo
}

let landorus = [
    [true, true],
    [true, false]
]

let tornadus = [
    [true, false],
    [true, false]
]

console.log(arcanine(landorus, tornadus))