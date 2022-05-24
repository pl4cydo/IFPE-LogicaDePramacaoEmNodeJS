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
 * Questão: 3
 *
 */
/*
    raioBase << 2;
    altura << 2:
    let area << 2
    
    
    area  << 3.14 x altura x raio²;
    
    
    console.log("volume: area");

    ***Os erros desse codigo***
    1- Variáveis precisam vir seguidas de '='.
    2- "let area << 2" mesmo que estivesse certo não serviria para nada, area não é calculada nesas formula.
    3- O cálculo de 'area' precisa de um '=' e não de '<<' para se referir a função da variável, seguinte de que
    deveria existir uma variável que correspondesse ao número de PI, ainda podemos ver que o calculo '3.14 x altura x raio'
    não funcionaria por vários motivos, sendo esses: I- x não representa multipiplicação no node; II- a variável 'raio' não
    existe na entrada de informações; II- não dá pra calcular um número ao quadrado colocando '²'.
    4- Na saída a informação esta dentro de aspas sendo considerada uma string, caso esse calculo podesse funcionar o que seria 
    mostrado na tela era 'volume: area' porque a palavra area não seria reconhecida como uma variável.
    */

// O programa abaixo deveria ser capaz de computar o volume de um cilindro, mas possui diversos erros, corrija todos os erros do programa e para cada erro encontrado faça um comentário explicando qual o erro e qual foi a solução encontrada:
// 62.80

//entrada
var raioBase = 2; 
var altura = 5;
var pi = 3.14;

// processamento
var calc = pi * (raioBase * raioBase) * altura;

// saída
console.log("O volume do cilindro é: " + calc.toFixed(2));