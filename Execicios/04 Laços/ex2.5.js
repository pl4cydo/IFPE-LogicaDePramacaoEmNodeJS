//	Implemente um programa capaz testar se um número é primo
//	Implemente um programa capaz testar se um número é primo

var num1 = 10
var num2 = 0
var j = 0

while (num2 != num1) {
		num2++
		if (num1 % num2 == 0 ) {
			j++
		}
	}
if (j == 2) {
	console.log(num1, "é primo")
} else if (j > 2) {
	console.log(num1, "não é primo")
}