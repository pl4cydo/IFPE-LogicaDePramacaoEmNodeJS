/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: PLACYDO SILVA DE LIMA
 * Curso: TSI ou IPI
 * Segunda Avaliação Individual
 * Questão: 2b
 *
 */

 // Imprimir a média aritmética dos elementos de um array

let arcanine = [
    [1,2,3],
    [4,5,6],
    [7,8,9,10]
  ]

let mediaA = 0;
let contador = 0;

function zard(array) {
    for(i = 0; i < array.length; i++) {
        for(j = 0; j < array[i].length; j++) {
            mediaA = mediaA + array[i][j]
            contador++        
        }
    }
    // console.log(contador)
    console.log(mediaA / contador)
 }

zard(arcanine)