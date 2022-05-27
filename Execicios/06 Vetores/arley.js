function teste (num1, num2){
    sla =[]
    var j = 0 
    for(i = 0; i < num1.length; i++){
        sla[j] = num1[i] * num2[i]
        j++
    }
    return sla
}
result = teste([2,2],[4,3])
console.log(result)