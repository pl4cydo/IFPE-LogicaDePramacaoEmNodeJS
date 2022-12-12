// Testar se um número não é primo
// Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio;

let num = 10
let contador = num
let resultado = 0
while(contador > 1) {
    contador--
    // console.log(contador)
    if(num%contador==0){
        resultado++
    }
}
// console.log(resultado)
if (resultado == 1){
    console.log(num+" é primo")
} else {
    console.log(num+" não é primo")
}