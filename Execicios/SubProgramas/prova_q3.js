//(1.5) Implemente um programa capaz de testar se quatro números são negativos ao mesmo tempo.
var contador = 0

function mew2 (num1,num2,num3,num4) {
    negativos (num1)
    negativos (num2)
    negativos (num3)
    negativos (num4)
    console.log(num1,num2,num3,num4)
}
function negativos (n) {
    if (n < 0){
        contador++
    }
}

mew2(1,-2,-3,-4)
if (contador == 4) {
    console.log('todos são engativos')
} else {
    console.log('missigno')
}