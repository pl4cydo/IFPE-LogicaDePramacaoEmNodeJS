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
 * Questão: 2
 *
 */

// Implemente um programa capaz de computar as raízes de uma equação do segundo grau no formato:
// ax² + bx + c. Para esta questão é necessário checar se as raízes existem (se o delta não é negativo)
// ou se a é diferente de 0.

// entrada
const aa = 1
const bb = 5
const cc = 6

// processamento
const calc1 = Math.sqrt((bb * bb) - 4 * aa * cc) // calc1 = 1
const calc2 = (-bb + calc1) / (2 * aa) // calc2 = -2
const calc3 = (-bb - calc1) / (2 * aa) // calc3 = -3

// saída
if (calc1 < 0) {
  console.log('As raízes não existem (o delta é negativo).')
} else if (aa == 0) {
  console.log(" 'a' não pode ser igual a zero.")
} else {
  console.log('x1 = ' + calc2)
  console.log('x2 = ' + calc3)
}
