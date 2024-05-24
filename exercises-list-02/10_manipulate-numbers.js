/*
  10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
  cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
  a) O somatório entre todos os valores;
  b) Qual foi o menor valor digitado;
  c) A média entre todos os valores;
  d) Quantos valores são pares.
*/

const prompt = require("prompt-sync")();

let continueRegistering = true;
let numbers = [];
let number = 0;
let total = 0;
let countEven = 0;

do {
  number = parseInt(prompt("Digite o número para adicionar: "));
  numbers.push(number);

  let answer = prompt(
    "Deseja continuar cadastrando números [S/N]? "
  ).toLowerCase();

  if (answer === "n") {
    continueRegistering = false;
  }
} while (continueRegistering === true);

let min = Math.min(...numbers);

for (i = 0; i < numbers.length; i += 1) {
  total += numbers[i];

  if (numbers[i] % 2 === 0) {
    countEven += 1;
  }
}

let average = total / numbers.length;

console.log(`a) O somatório dos valores foi: ${total}`);
console.log(`b) O menor valor digitado foi: ${min}`);
console.log(`c) A média entre os valores foi: ${average}`);
console.log(`d) A quantidade de pares foi: ${countEven}`);
