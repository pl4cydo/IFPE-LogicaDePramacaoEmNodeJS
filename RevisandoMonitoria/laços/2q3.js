// Computar o resto da divisão de dois números sem utilizar o operador %
let dividendo = 79
let divizor = 9
let resultado = 0

while(dividendo >= divizor) {
    // console.log(dividendo)
    dividendo = dividendo - divizor
    resultado++
}
console.log("resultado da divisão: "+ resultado)
console.log("resto: "+dividendo)