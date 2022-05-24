// Dados três números quaisquer, imprimi-los em ordem crescente

// entrada
const num1 = 3
const num2 = 2
const num3 = 1

// processamento

if (num1 < num2) {
  if (num2 < num3) {
    console.log(num1, num2, num3)
  } else if (num1 < num3) {
    console.log(num1, num3, num2)
  } else if (num3 < num1) {
    console.log(num3, num1, num2)
  }
} else if (num2 < num1) {
  if (num1 < num3) {
    console.log(num2, num1, num3)
  } else if (num2 < num3) {
    console.log(num2, num3, num1)
  } else {
    console.log(num3, num2, num1)
  }
}

/*
num1 x num2 x num3

num1 x num3 x num2

num3 x num1 x num2

num2 x num1 x num3

num2 x num3 x num1

num3 x num2 x num1
*/
