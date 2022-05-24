// Testar se um número é divisível por 2 ou por 7 (tente fazer usando apenas if’s

const num1 = 200

const calc1 = num1 % 2
const calc2 = num1 % 7

if (calc1 == 0) {
  console.log('O número ' + num1 + ' é divisivel por 2')
} else if (calc2 == 0) {
  console.log('O número ' + num1 + ' é divisivel por 7')
} else {
  console.log('O número ' + num1 + ' não é divisível por 2 ou 7')
}
