// Implemente um programa capaz de multiplicar dois números sem usar o operador da multiplicação (Dica: 5x3 = 5 + 5 + 5)

var num1 = 23
var num2 = 3
var calc = 0
var i = 0
console.log(num1, 'x', num2)

do {
	calc = calc + num1
	i = i + 1 
} while (i < num2)
console.log(calc)

