// Receber três números como parâmetros e imprimir aqueles que são múltiplos de 2 e de 3 ao mesmo tempo

 function jorge2 (a,b,c) {
     jorge(a)
     jorge(b)
     jorge(c)
 }

 function jorge (n) {
    if (n%3==0 && n%2==0) {
        console.log(n)
    } else {
        console.log(' ')
    }
}

console.log(jorge2(30,60,90))
