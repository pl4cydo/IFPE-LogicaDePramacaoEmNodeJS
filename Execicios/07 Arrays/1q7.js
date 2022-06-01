// Implementar um subprograma que dados dois arrays bidimensionais, retorna true se ambos forem iguais ou false caso contrário;

function arcanine (array1, array2) {
    let boo = true;
    for (i=0; i<array1.length; i++) {
        for (j=0; j<array1.length; j++) {
            if (array1[i][j] != array2[i][j] && boo == true){
                boo = false
            }
        }
    }
    return boo
}

let landorus1 = [
    [10,20],
    [30,40]
]

let landorus2 = [
    [10,20],
    [3,40]
]

console.log(arcanine(landorus1, landorus2))