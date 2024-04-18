//  15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

const prompt = require("prompt-sync")();
let soma = 0;
let cumulative = 0;
let num;
let weight;

while (true) {
  num = parseFloat(prompt("Valor: "));
  if (num !== 0) {
    weight = parseFloat(prompt("Peso: "));
    soma += num * weight;
    cumulative += weight;
  } else {
    break;
  }
}

console.log(`Média: ${soma / cumulative}`);
