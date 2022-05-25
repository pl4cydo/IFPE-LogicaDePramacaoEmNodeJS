// Implementar um subprograma que dado um vetor de booleans, retorna true se todos os elementos do vetor
//  forem verdadeiros ou false, caso contrário

// let booleans = [true, true, true]
// let confirm = true
// for (let i = 0; i < booleans.length; i++) {
//     if (booleans[i] == false) {
//         confirm = false
//     }

// }
// console.log(booleans)
// console.log(confirm)

function arcanine (booleans) {
    
    let confirm = true
    for (let i = 0; i < booleans.length; i++) {
        if (booleans[i] == false) {
        confirm = false
        }
    }
    return confirm
}

let skarmory = arcanine([true, false, true])

console.log(skarmory)