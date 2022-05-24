// Implementar um subprograma que computa e retorna o valor da multiplicação de dois vetores 
// (pesquise a fórmula da multiplicação de vetores)

var mankey = [2,5,4] 
var abra = [3,6]
var mult = 0
var soma = 0

if (mankey.length > abra.length){
    for (i=0; i<mankey.length; i++) {
        mult = mankey[i] * abra[i]
        soma = soma + mult
    }
} else if (abra.length > mankey.length){
    for (i=0; i<abra.length; i++) {
        mult = mankey[i] * abra[i]
        soma = soma + mult
    }
}


console.log(soma)