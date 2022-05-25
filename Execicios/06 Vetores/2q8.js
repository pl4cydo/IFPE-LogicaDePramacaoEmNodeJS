// Implementar um subprograma que dados dois vetores, retorna true caso todos os elementos de ambos sejam iguais, ou false,
// caso contrário false

// let a = [1,3,4]
// let b = [1,2,4]
// let booleans = true

// for (i = 0; i < a.length; i++) {
//     if (a[i] != b[i]) {
//         booleans = false
//     }
// }

// console.log(booleans)

function arcanine (a, b) {
    
    let booleans = true
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            booleans = false
        }
    }
    return booleans 
}

var mew = arcanine([1,7,4],[1,2,4])
console.log(mew)