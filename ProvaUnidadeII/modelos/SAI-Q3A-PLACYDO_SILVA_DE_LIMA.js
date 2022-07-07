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
 * Questão: 3a
 *
 */

 // (0.5) Criar o tipo Mês com os atributos nome, número (janeiro = 1, fevereiro - 2, etc.)
 // quantidade de dias;

 class mes {
    constructor(nome, num, dias) {
        this.nome = nome;
        this.numero = num;
        this.dias = dias;
    }
 }

 let arcanine = new mes("Janeiro", 1, 31)
 let latias = new mes("Fevereiro", 2, 28)
 console.log(arcanine)
 console.log(latias)