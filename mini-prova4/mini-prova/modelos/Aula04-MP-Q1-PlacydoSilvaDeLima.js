/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Plácydo Silva de Lima
 * Curso: TSI ou IPI
 * Aula: Aula 04 - Execução Condicional - Mini-prova
 * Questão: 1
 *
 */

// Implemente um programa capaz de identificar quando dois números são divisíveis por 5 ao mesmo tempo.

// Entrada
const num1 = 13
const num2 = 10

// Processamento
const calc1 = num1 % 5
const calc2 = num2 % 5

// saída
if (calc1 == 0 && calc2 == 0) {
  console.log('Os números ' + num1 + ' e ' + num2 + ' são divisíveis por 5')
} else if (calc1 != 0 && calc2 == 0 || calc2 != 0 && calc1 == 0) {
  console.log('Um dos números não é divisivel por 5')
} else {
  console.log('        .---.  ')
  console.log("      .'_:___ .   BIP BIP PIIII ERRO ERRO!")
  console.log('      |__ --==|')
  console.log('      [  ]  :[|   Você recebeu o R2-D2 do ERRO,')
  console.log('      |__| I=[|   os dois número de entrada não são divisíveis por 5')
  console.log('      / / ____|')
  console.log("     |-/.____.'")
  console.log('    /___| /___|')
}
