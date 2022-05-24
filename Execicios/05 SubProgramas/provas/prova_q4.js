// (2.0) Implemente um programa capaz de, dado um número, imprimir todos os divisores ímpares dele.
var num = 20

for (i = num; i > 0; i--) {
    if (num%i==0) {
        if (i%2!=0){
            console.log(i)
        } 
    }
}