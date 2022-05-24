// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa; A² = b² + c² => A² - B² = C²


function hipotenusa (a, b) {
    return Math.sqrt((a*a) + (b*b))
}
console.log(hipotenusa(2,9))
