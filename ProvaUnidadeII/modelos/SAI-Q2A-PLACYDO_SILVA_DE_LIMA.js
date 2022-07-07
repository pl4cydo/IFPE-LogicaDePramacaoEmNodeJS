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
 * Questão: 2a
 *
 */
 // Imprimir os elementos de um array que estão em células onde as linha e coluna são pares;

 let arcanine = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ]

 function zard(array) {
    for(i = 0; i < array.length; i++) {
        for(j = 0; j < array[i].length; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                // console.log(i, j)
                console.log(array[i][j])
            }
        }
    }
 }

 zard(arcanine)