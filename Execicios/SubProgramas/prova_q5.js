//(1.5) Transforme sua resposta da primeira questão em um subprograma capaz de computar e 
// retornar o valor da força gravitacional entre dois corpos, dados: M1, M2 e d como parâmetros.

function mew (g,m1,m2,d) {
return g*((m1*m2)/(d**2));
}
console.log(mew(6.67/(10**11),10000,10000,2))

