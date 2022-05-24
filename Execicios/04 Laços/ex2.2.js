//	Implemente um programa capaz de dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3)

var num1 = 7
var num2 = 3
var i = num1
var j = 0

while (i >= num2) {
	i = i - num2
	j++
}
console.log(j)
