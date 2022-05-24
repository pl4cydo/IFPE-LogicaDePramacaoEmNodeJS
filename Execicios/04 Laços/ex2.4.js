// Implemente um programa capaz de computar o fatorial de um número

var num = 8
var i = num
var j = num

console.log(num, 'fatorial')

while (i > 1) {
	j = j - 1
	i = i - 1
	num = num * j 
	//console.log(num)
	//console.log(j)
	//console.log(i)
}
console.log(num)