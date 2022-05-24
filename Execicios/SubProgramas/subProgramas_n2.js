// Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

function div (parametro) {
    if (parametro % 7 == 0) {
        return true
    } else {
        return false
    }
}

console.log(div(7))
console.log(div(11))
console.log(div(14))
console.log(div(3))