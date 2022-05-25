// 9. Implementar um subprograma que dado um vetor, inverte a ordem do seu conteúdo
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

// let a = [1, 3, 5, -2]
// let b = (a.length - 1)
// let c = []

// for (i = 0; i < a.length; i++) {
//      c[i] = a[b]
//    // console.log (i, b)
//     b-- 
// }
// console.log(c)
// deve ter um melhor de resolver isso que não seja colocar let b = (a.length - 1)

function arcanine (a) {
    
    let b = (a.length - 1)
    let c = []

    for (i = 0; i < a.length; i++) {
        c[i] = a[b]
        b-- 
    }
    return c
}

let lapras = arcanine([1, 3, 5, -2])

console.log(lapras)