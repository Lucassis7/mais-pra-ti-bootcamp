// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Código do produto: "));

for (let i = 0; i < 10; i += 1) {
  console.log(num);
}
