//Receber como parâmetro três números e retornar o maior valor entre eles

function mew2 (num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else if (num3 > num1 && num3 > num2) {
        return num3
    } else {
        return false
    }
}

console.log(mew2(1,1,1))