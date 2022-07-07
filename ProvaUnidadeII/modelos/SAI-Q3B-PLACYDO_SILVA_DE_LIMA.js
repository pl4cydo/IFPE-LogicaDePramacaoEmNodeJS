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
 * Questão: 3b
 *
 */

 // (0.5) Criar uma função que, dados dois meses retorna -1 se o primeiro for anterior
 //  ao segundo, 0 se ambos forem iguais ou 1 se o primeiro for posterior ao segundo;

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

 function zard(mes1, mes2) {
    if (mes1.numero == (mes2.numero - 1)) {
        return -1
    } else if (mes1.numero == mes2.numero) {
        return 0
    } else if (mes1.numero == (mes2.numero + 1)) {
        return 1
    }
 }

 console.log(zard(arcanine, latias))