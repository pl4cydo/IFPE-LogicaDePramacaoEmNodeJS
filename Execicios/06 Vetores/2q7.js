// Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos um dos elementos do vetor for verdadeiro
//  ou false, caso contrário

function arcanine (booleans) {
    
    let confirm = false
    for (let i = 0; i < booleans.length; i++) {
        if (booleans[i] == true) {
        confirm = true
        }
    }
    return confirm
}

let skarmory = arcanine([false, true, false])

console.log(skarmory)