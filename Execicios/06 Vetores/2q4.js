// 4. Implementar um subprograma que dados três vetores, guarda no terceiro a soma dos índices equivalentes no dois primeiros
// Exemplo: c[0] = a[0] + b[0] // e assim por diante

// var a = [1,2,3] 
// var b = [1,2,3]
// var c = []

// for (let i = 0; i < a.length; i++) {
//     c[i] = a[i] + b[i]
// }

// console.log(c)

function arcanine (dugdrio, poliwag, haunter) {
    for (let i = 0; i < dugdrio.length; i++) {
        haunter[i] = dugdrio[i] + poliwag[i]
    }
    return haunter   
}

let pichu = arcanine([1,2,3],[1,2,3],['ratata'])

console.log(pichu)