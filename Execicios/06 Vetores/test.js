/*
var a = ['a','b','c'] 

for (i = 0; i < a.length; i++){
    console.log(a[i])
}


var valores = []

valores[0] = 'j'
valores[1] = 'o'
valores[2] = 'r'
valores[3] = 'g'
valores[4] = 'e'

process.stdout.write(`${valores}`)



var a = ['f','g','h','j']

a.forEach((n) => {
    process.stdout.write(`${n}`)
})
*/

// var notas = [9,9,9,9,1,3.4] 
// var media = 0

// for (let i = 0; i < notas.length; i++) {
//     media = media + notas[i]
// }
// media = media / notas.length
// console.log(media.toFixed(2))

function elemento(vetor1,vetor2){
	for(let cont = 0; cont < vetor1.length; cont++){
		vetor2[cont] = vetor1[cont]
	}
	return vetor2
}
var vetor1 = [1,2,3,4,5]
var vetor2 = []
console.log(elemento(vetor1,vetor2))