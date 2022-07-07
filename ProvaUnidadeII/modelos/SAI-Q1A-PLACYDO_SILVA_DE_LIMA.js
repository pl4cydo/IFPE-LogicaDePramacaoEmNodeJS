/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: PLÁCYDO SILVA DE LIMA
 * Curso: TSI ou IPI
 * Segunda Avaliação Individual
 * Questão: 1a
 *
 */

// (1.0) Imprimir os elementos de índices pares em um vetor;

let arcanine = [1,2,3,4,5,6,7,8,9,10];

function zard(array) {
    for (i = 0; i < array.length; i++){
        if (i % 2 == 0) {
          console.log(array[i]) 
        }
    }
}

zard(arcanine)


