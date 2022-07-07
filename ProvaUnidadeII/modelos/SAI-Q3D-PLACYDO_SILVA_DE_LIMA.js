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
 * Questão: 3d
 *
 */

 // (1.0) Criar uma função capaz de retornar a quantidade de dias que um ano possui.

 class mesDoAno {
    constructor(ano, mes, diasMes) {
        this.ano = ano;
        this.mes = mes;
        this.diasMes = diasMes;
    }
 }

let janeiro = new mesDoAno("Janeiro", 1, 31);
let fevereiro = new mesDoAno("Fevereiro", 2, 28);
let marco = new mesDoAno("Março", 3, 31);
let abril = new mesDoAno("Abril", 4, 30);
let maio = new mesDoAno("Maio", 5, 31);
let junho = new mesDoAno("Junho", 6, 30);
let julho = new mesDoAno("Julho", 7, 31);
let agosto = new mesDoAno("Agosto", 8, 31);
let setembro = new mesDoAno("Setembro", 9, 30);
let outubro = new mesDoAno("Outubro", 10, 31);
let novembro = new mesDoAno("Novembro", 11, 30);
let dezembro = new mesDoAno("Dezembro", 12, 31);

let arrayMeses = [janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro];

function zard(array) {
    let contadorDias = 0
    for(i = 0; i < array.length; i++) {
        contadorDias = contadorDias + array[i].diasMes;
    }
    return contadorDias
}

console.log("Um ano tem ", zard(arrayMeses), " dias");