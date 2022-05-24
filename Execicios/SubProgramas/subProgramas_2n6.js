// Receber como parâmetro quatro números e retornar quantos números pares há entre eles;
var contador = 0
function contadorPar (num1, num2, num3, num4){
    console.log(num1,num2,num3,num4)
    if (num1 % 2 == 0) {
       contador++
    }
    if (num2 % 2 == 0) {
         contador++
    }
    if (num3 % 2 == 0) {
        contador++
    }
    if (num4 % 2 == 0) {
        contador++
    }
    return contador
} 

console.log(contadorPar(1,4,6,8),'pares')
