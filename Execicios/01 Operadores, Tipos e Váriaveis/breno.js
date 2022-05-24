var a = 11
var b = 11

var resto1 = a % 5
var resto2 = b % 5

if (resto1 == 0 && resto2 == 0) {
	console.log("divisiveis"); 
} else if (resto1 == 0 && resto2 != 0) {
	console.log("um dos dois não é divisivel");
} else if (resto2 == 0 && resto1 != 0) {
	console.log("um dos dois não é divisivel");
} else {
	console.log("nenhum é divisivel")
}