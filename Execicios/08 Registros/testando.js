// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo 
// (dicas: utilize arrays, se vocẽ não souber qual operação implementar tente fazer uma função
//  para buscar e retornar um elemento na lista): Filmes

class filmes {
	constructor(nome, duracao) {
		this.nome = nome;
		this.duracao = duracao;
	}
		
}
class listaFilme {
	constructor(filme) {
		this.filme = filme
	}
}

let matrix = new filmes("matrix", 150)
let matrix2 = new filmes("matrix2", 151)
let lista = ([matrix, matrix2])

let contem = new listaFilme(lista)

function contemFilmes (lista, filme) {
	for (let i = 0; i < lista.filme.length; i++) {
		if (verificaFilme(filme, lista.filme[i])) {
			return true
		} else {
			return false
		}
	}
}

// console.log(contem)

function verificaFilme(filme1, filme2) {
	if (filme1.nome == filme2.nome && filme1.duracao == filme2.duracao) {
		return true
	} else {
		return false
	}
}

console.log(contemFilmes(contem, "jorge"))

