// Implementar um programa que dado um array bidimensional, atribui 0 a todos os elementos presentes em suas diagonais.

let landorus = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
]

for (let i=0; i<landorus.length; i++) {
    for (let j=0; j<landorus.length; j++) {
        // process.stdout.write(`${i}`+`${j}\t`)
        if (i + j == i*2) {
            // process.stdout.write(`${'0'}\t`)
            landorus[i][j] = 0
        } else if (i + j == landorus.length - 1 || i + j == landorus.length - 1) {
            // process.stdout.write(`${'0'}\t`)
            landorus[i][j] = 0
        }    
    }    
}

for (let k=0; k<landorus.length; k++) {
    for (let l=0; l<landorus.length; l++) {
        process.stdout.write(`${landorus[k][l]}\t`)
    }  
    console.log()  
}
