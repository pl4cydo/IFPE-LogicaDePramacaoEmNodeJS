a = 0
b = 5
c = false
while (a < 10 && b > 0) {
    a = a + ((a % b) + 1)
   
    if (a % 2 == 1) {
        b = b + 2 * a
     } else {
        b = b + 2 * -a
     }
   
    c = (c || !c) && (true && !c)
   
    console.log(a, b, c)
}