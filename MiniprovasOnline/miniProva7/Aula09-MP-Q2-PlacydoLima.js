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
 * Questão: 2
 *
 */

// [4.0] Implemente um subprograma capaz de, dado um array de duas dimensões como parâmetro, imprimir o dobro dos seus elementos
//  em ordem inversa (PS.: não serão aceitas respostas com o uso do método reverse da classe Array 
// https://www.w3schools.com/jsref/jsref_reverse.asp).

// Exemplo de entrada

// Array: 
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Exemplo de saída

// 18
// 16
// 14
// 12
// 10
// 8
// 6
// 4
// 2

function arcanine (array) {
    for (i = (array.length -1); i >= 0; i--) {
        for (j = (array[i].length -1); j >= 0; j--) {
            console.log(`${array[i][j]*2}`)
        }
    }
}

let landorus = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9]
  ]
  
arcanine(landorus)
