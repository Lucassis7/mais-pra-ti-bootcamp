// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

const prompt = require("prompt-sync")();

let counter = 0;
let numbers = [];
let evenNumbers = [];
let positions = [];

while (counter < 10) {
  let number = parseInt(prompt("Insira o número: "));

  numbers.push(number);
  counter += 1;
}

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
    positions.push(i);
  }
}

for (let i = 0; i < evenNumbers.length; i += 1) {
  console.log(
    `O número par ${evenNumbers[i]} está na posição ${positions[i]}.`
  );
}
