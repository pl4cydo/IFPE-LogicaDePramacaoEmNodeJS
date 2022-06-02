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
 * Questão: 3
 *
 */

// [3.0] O subprograma abaixo deveria contar e retornar quantas vezes um elemento ocorre dentro de um array de duas dimensões, 
// mas possui diversos erros, corrija todos os erros do programa e para cada erro encontrado faça um comentário explicando qual 
// o erro e qual foi a solução encontrada:

// function funcFuncFunc(arr) {
//     let a = 1 // a não é usado para nada

//     for (let i = 0; i < 10; i++) { // a condicional deveria ser relativa ao tamanho do array - i < arr.length
//         if (elemento == 0) { // elemento não foi declarado - arr[i][j] == 0
//             i++ // i++ vai incrementar a variavel do for, poderia ser o 'a' suado como contador, mas para isso precisaria começar em 0
//         }
//     }


//     return i++ // retornar i++ vai ser equivalente a retornar 9 + 1, quando chamar a função
// }

// // cadê o array?
// // se o array é bidimensional deveria ter dois for
// // não chamou a função

function funcFuncFunc(arr) {
    let a = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (arr[i][j] == 0) {
                a++
            }
        }
    }
    return a
}

let landorus = [
    [0,1,2],
    [3,4,5],
    [0,8,0]
]

console.log(funcFuncFunc(landorus))
