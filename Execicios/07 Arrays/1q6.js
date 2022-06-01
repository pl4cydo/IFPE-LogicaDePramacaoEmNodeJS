// Implementar um subprograma que dado um array bidimensional e um número, divide todos os elementos 
// do array pelo número;

let landorus = [
    [10,20],
    [30,40]
]
let num = 5;

function arcanine(array, n){
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            landorus[i][j] = landorus[i][j] / n;
        }
    }
}

arcanine(landorus, num);
console.log(landorus)
