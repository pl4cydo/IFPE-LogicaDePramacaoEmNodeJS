//	Implemente um programa capaz de computar o resto da divisão de dois números sem utilizar o operador %
var num1 = 7
var num2 = 3
var i = num1
var j = 0
var resto = 0

do {
	i = i - num2
	j++
} while (i >= num2)

console.log(num1 - (j * num2) ) 
