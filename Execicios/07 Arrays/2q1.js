// Implementar um subprograma que dadas a quantidade de linhas e de colunas, cria um array de duas dimensões com a quantidade de 
// linhas e colunas especificadas, inicializa seus índices com o valor -1, o imprime e o retorna;

function arcanine (linha, coluna) {
    let array = [];
    for (let i = 0; i < linha; i++) {
        array[i] = []
        for (let j = 0; j < coluna; j++) {
            // process.stdout.write(`${i, j}`)
            array[i][j] = -1
            process.stdout.write(`${array[i][j]}` + ' | ')
        }  
        console.log(' ')  
    }
    return array
}

arcanine(10, 15)

// NÃO PRECISO FAZER OUTRO FOR PARA IMPRIMIR
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//            process.stdout.write(`${array[i][j]}`)
//         // array[i][j] = -1
//     }  
//     console.log(' ')  
// }

// // console.log(array)