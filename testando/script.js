// Definir todas as variaveis globais colocadas em diferentes divis, precisamos referenciar
var bottomRow = document.getElementById('bottomRow')
var stats = document.getElementsByClassName('stats')
var stats_player1 = document.getElementById('stats_player1')
var player1hp = document.getElementById('player1hp')
var bosshp = document.getElementById('bosshp')

// Definição de variaveis de hp:
var p1hp = 100;
var bshp = 100;


function comecarBatalha() {
    bottomRow.innerHTML = "<h1>Use as habilidades do Estudante para defender o IFPE</h1>"
    for(let i = 0; i < stats.length; i++) {
        stats[i].style.visibility = "visible";
    }
}


function murro(){
    let ataque = Math.round(Math.random()*20) + 5
    if (ataque >= 13) {
        let dano = Math.round(Math.random()*10) + 5
        bshp -= dano
        bottomRow.innerHTML = "Seu aque foi certeiro! Seu dano foi igual a: " + dano + ", O HP do MESSIAH agora é: " + bshp + "hp";
        let danoPorcento = (bshp/100)*240;
        bosshp.style.width = danoPorcento + "px"
    } else {
        bottomRow.innerHTML = "Você errou!" 
    }
}
