// Receber três números como parâmetros e imprimi-los em ordem crescente;

function ordemCrescente (num1,num2,num3){
    if (num1 < num2 < num3){
        console.log(num1,num2,num3)  
    } else if (num1 < num3 < num2) {
        console.log(num1,num3,num2)
    }
}



ordemCrescente(1,3,2)