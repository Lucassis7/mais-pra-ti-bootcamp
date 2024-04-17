// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let apples = prompt("Quantidade de maçãs: ");
let valorTotal;

if (apples >= 12) {
  valorTotal = apples * 0.25;
} else {
  valorTotal = apples * 0.3;
}

console.log(`O valor total foi de R$ ${valorTotal.toFixed(2)}`);
