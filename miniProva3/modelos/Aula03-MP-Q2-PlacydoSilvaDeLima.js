/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Plácydo Silva de Lima
 * Curso: TSI ou IPI
 * Aula: Aula 03 - Variáveis, Tipos e Operadores - Mini-prova
 * Questão: 2
 *
 */
 
 // Implemente um programa capaz de computar as raízes de uma equação do segundo grau no formato: ax² + bx + c. Para esta questão não é necessário checar se as raízes existem ou se a é diferente de 0

 // entrada
 var aa = 1;
 var bb = 5;
 var cc = 6;

 // processamento
var calc1 = Math.sqrt((bb * bb) - 4 * aa * cc); // calc1 = 1
var calc2 = (- bb + calc1) / (2 * aa); // calc2 = -2
var calc3 = (- bb - calc1) / (2 * aa); // calc3 = -3

// saída
console.log("x1 = " + calc2);
console.log("x2 = " + calc3);

