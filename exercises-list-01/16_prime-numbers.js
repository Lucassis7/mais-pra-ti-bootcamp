// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let counter = 0;
let num = 101;
let primeNumbers = [];

while (counter < 50) {
  let isPrime = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
    counter += 1;
    primeNumbers.push(num);
  }
  num += 1;
}

console.log(primeNumbers.length);
