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
 * Questão: 3
 *
 */

/* O programa abaixo deveria ser capaz de verificar se um estudante foi aprovado em uma
 determinada matéria com média mínima de 6 para a aprovação, mas possui diversos erros,
 corrija todos os erros do mesmo e para cada erro encontrado faça um comentário explicando
 qual o erro e qual foi a solução encontrada

var media = 7
var nome = “João”

if (media > 6) {
    console.log(nome; "foi aprovado");
} else if (media < 6) {
     console.log(nome; ‘não foi aprovado’);
}
*** ERROS ***
1- No if 'media > 6' porém o enunciado fala que a média mínima é 6, ou seja o correto seria 'media >= 6'
fazendo assim o 6 fazer parte da aprovação;
2- no console.log a divisão entre variável e string não é feita por ponto e virgula, normalmente eu uso o
sinal de mais, mas também pode ser usado uma vírgula comum.
3 o uso do 'else if' é redundante porque só um 'else' já englobaria todo o resto;

*/

const average = 5
const name = 'Sanwise Gamgee'

if (average >= 6) {
  console.log(name, 'foi aprovado')
} else {
  console.log(name, 'foi reprovado')
}
