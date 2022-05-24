//mplementar uma função que recebe um número como parâmetro e
// retorna true se ele for divisível 7 e false caso contrário

function zard (a) {

	if (a % 7 == 0) {
		return true
	} else {
		return false
	}
}

var char = zard(4)

console.log (char)