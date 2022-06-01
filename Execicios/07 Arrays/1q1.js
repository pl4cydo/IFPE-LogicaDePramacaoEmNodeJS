//  Implementar um programa que dado um array bidmensional e um número, multiplica cada elemento do array 
// pelo número


let paras = [
    [1,2],
    [3,4]
]

console.log(paras)

let num = 5

function arcanine (array, num) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            paras[i][j] = paras[i][j] * num
        }
        console.log('')
    }
}

arcanine(paras, num)
console.log(paras)
