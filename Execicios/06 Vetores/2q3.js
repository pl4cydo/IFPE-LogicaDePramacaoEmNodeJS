// Implementar um subprograma que computa e retorna o valor da multiplicação de dois vetores 
// (pesquise a fórmula da multiplicação de vetores)

var mankey = [2,5,4] 
var abra = [3,6,4]
var mult = 0
var soma = 0

for (i=0; i<mankey.length; i++) {
    mult = mankey[i] * abra[i]
    soma = soma + mult
}


console.log(soma)