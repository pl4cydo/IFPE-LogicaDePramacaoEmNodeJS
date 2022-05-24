function desenho (coluna){
    if(coluna == 0){
        return 0
    }
    process.stdout.write('$')
    desenho(coluna - 1)
}
function vezes(coluna,linha){
    if(linha == 0){
        return 0
    }
    if(linha >= 0){
        desenho(coluna)
        console.log()
        
    }
    vezes(coluna,linha-1)
}
vezes(5,7)