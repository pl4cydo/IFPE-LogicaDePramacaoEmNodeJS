a = 10
b = 5
c = false
a = ((b / a) * 100) + b - a
b = (b ** 3) - a - a
c = (c && false) || (!c && !false)
console.log(a, b, c)