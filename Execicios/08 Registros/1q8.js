// Jogo eletrônico

class game {
    constructor (a, b, c, d) {
        this.nome = a
        this.preco = b 
        this.ano = c
        this.categoria = d
    }
}

var leagueOfLegends = new game('lol', 0, 2010, 'moba')
var fifa = new game('fifa', 500, 2022, 'esportivo')
var godOfWar = new game('God of War', 300, 2021, 'ação')

function compararPreco(a){
    let quantoPago = 400
    if (a.preco <= quantoPago) {
        console.log(a)
    }
}

function comparandoPreco (b, c, d) {
    compararPreco(b)
    compararPreco(c)
    compararPreco(d)
}

comparandoPreco(leagueOfLegends, fifa, godOfWar)