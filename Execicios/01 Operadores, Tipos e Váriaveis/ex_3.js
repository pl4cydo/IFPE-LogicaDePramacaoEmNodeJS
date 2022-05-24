//Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s);

var num1 = 7

var calc1 = num1 % 3;
var calc2 = num1 % 4;

if (calc1 == 0) {
	if (calc2 > 0) {
		console.log("O número " + num1 + " é divisível por 3 e não por 4");
	}
} else {
	console.log("NOP")
}