/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Plácydo Silva de Lima
 * Curso: TSI ou IPI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 1
 *
 */

// [3.0] Implemente um subprograma capaz de, dado um array de duas dimensões e um elemento como parâmetros, imprimir a linha 
// e a coluna da primeira ocorrência do elemento no array.

// Exemplo de entrada

// Elemento: 4

// Array: 
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 4, 9]
// ]

// Exemplo de saída

// Linha 1, coluna 0

function arcanine (array, num) {
    let parador = false;
    for (i = 0; i < array.length; i++) {
        if (parador == true) break
        for (j = 0; j < array[i].length; j++) {
            if (array[i][j] == num) {
                console.log(`${'Linha ' + i + ', Coluna ' + j}`)
                parador = true
            }
            if (parador == true) break
        }    
    }
}

let landorus = [
    [1,2,3,6],
    [4,6,6],
    [7,8]
]

let elemento = 6;

arcanine(landorus, elemento)
