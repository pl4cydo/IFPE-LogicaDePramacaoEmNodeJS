// Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);
let dividendo = 27
let divizor = 3
let resultado = 0

while(dividendo > 0) {
    // console.log(dividendo)
    dividendo = dividendo - divizor
    resultado++
}
console.log(resultado)