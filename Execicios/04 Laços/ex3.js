/* Testar se o fatorial de um número é primo. 
Qual seria a forma mais natural de implementar essa solução? Com while, for ou do … while?
*/

var num = 8
var num1 = num
var i = num1
var j = 0
var l = num1

console.log(num, 'fatorial')

while (i > 1) {
	i = i - 1
	num1 = num1 * i 
}
console.log(num1)
while (l > 0) {
	l--
	if (num1 % l == 0) {
		j++
	}

} 
if (j == 2) {
	console.log('O fatorial de ', num, ' é primo')
} else if (j > 2) {
	console.log('O fatorial de ', num,' não é primo')
}
