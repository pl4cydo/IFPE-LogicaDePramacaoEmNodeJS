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
 * Questão: 4
 *
 */

 // [Correção] (2.0) O programa abaixo deveria implementar o tipo Janela com os atributos marca, 
 // altura e largura, além da função maior (que, dadas duas janelas, retorna aquela com maior área).
 //  Corrija todos os erros do programa e comente cada uma das correções.

//  class Janela {
//     Constructor(marca, altura, largura) { // constructor com letra menuscula
//         this.marca = marca      
//         this.largura = altura  // deveria ser this.altura = altura
//         this.altura = largura  // deveria ser this.largura = altura
//     }
// }

// function maior(largura1, profundidade1, largura2, profundidade2) {
//     if (largura1 * profundidade1 < largura2 * profundidade2) {
//         console.log(largura1 * profundidade1)
//     } else {
//         console.log(largura2 * profundidade2)
//     }
// } 
// ****COMENTARIO****
// se estamos usando uma classe, além da funçao tá torta, tem jeitos melhores de usar a classe para
// calcular, como por exemplo janela1.largura * janela1.altura


 class Janela {
    constructor(marca, altura, largura) {
        this.marca = marca      
        this.largura = altura  // deveria ser this.altura = altura
        this.altura = largura  // deveria ser this.largura = altura
    }
}

let janelaBrastemp = new Janela("Brastemp", 10, 10);
let janelaNintendo = new Janela("Nintendo", 15, 15);

console.log(janelaBrastemp)
console.log(janelaNintendo)

function maior(janela1, janela2) {
    if ((janela1.altura * janela1.largura) > (janela2.altura * janela2.largura)){
        return janela1
    } else if ((janela1.altura * janela1.largura) < (janela2.altura * janela2.largura)) {
        return janela2
    }
}
console.log("")
console.log("Janela com maior area: ")
console.log(maior(janelaBrastemp, janelaNintendo))