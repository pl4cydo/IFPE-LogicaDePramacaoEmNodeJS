// Receber dois parâmetros e retornar true se o primeiro ou o segundo forem negativos, e false, caso contrário
function negativos (num1,num2) {
    if (num1 < 0 || num2 < 0) {
        return true
    } else {
        return false
    }
}
console.log(negativos(-3,1))