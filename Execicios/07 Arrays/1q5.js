// Implementar um subprograma que dados um array bidimensional e um número, subtrai o número de todos os elementos do array;

let victreebel = [
    [1,2],
    [3,4]
]
let num = 1

for (let i = 0; i < victreebel.length; i++) {
    for (let j = 0; j < victreebel.length; j++) {
        process.stdout.write(`${victreebel[i][j]}` + ' ')
    }
    console.log('')    
}

function arcanine (array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = array[i][j] - n
        }
    }
}

console.log('')

arcanine(victreebel,num)
// console.log(victreebel)

for (let i = 0; i < victreebel.length; i++) {
    for (let j = 0; j < victreebel.length; j++) {
        process.stdout.write(`${victreebel[i][j]}` + ' ')
    }
    console.log('')    
}