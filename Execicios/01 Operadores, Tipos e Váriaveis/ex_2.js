//Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s);

var num1 = 7

var calc1 = num1 % 3;
var calc2 = num1 % 4;

if (calc1 == 0) {
		console.log("O número " + num1 + " é divisivel por 3");
} else if (calc2 == 0) {
		console.log("O número " + num1 + " é divisivel por 4");
} else {
	console.log("O número " + num1 + " não é divisível por 3 ou 4");
}
