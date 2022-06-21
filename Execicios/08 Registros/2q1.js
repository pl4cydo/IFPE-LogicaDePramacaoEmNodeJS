// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) 
// sobre o mesmo (dicas: utilize arrays, se vocẽ não souber qual operação implementar
// tente fazer uma função para buscar e retornar um elemento na lista):
// Lista de Filmes
let buscar_filme = 'star wars'

class lista_filmes {
    constructor (a, b, c, d) {
        this.name = a
        this.genero = b
        this.subgenero = c
        this.ano = d
    }
}

// alguns filmes eu só chutei a data
let array_filmes = [
    ['matrix', 'ação', 'distopia', 1999],
    ['senhor dos aneis', 'aventura', 'fantasia', 2001],
    ['donnie darko', 'suspense', 'ficção', 2001],
    ['happy feet', 'animação', 'aventura', 2010],
    ['star wars', 'espacial', 'aventura', 1975]
]


function encontrar_filme (array, nome_filme) {
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++) {
            if (j == 0) {
                let adicionar_filme = new lista_filmes(array[i][j], array[i][j+1], array[i][j+2], array[i][j+3]) 
                if (array[i][j] == nome_filme) {
                    console.log(adicionar_filme)
                }
            }   
        }   
    }
}

encontrar_filme(array_filmes, buscar_filme)