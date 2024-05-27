// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.

const prompt = require("prompt-sync")();

let total = 0;
let counter = 0;
const firstTerm = parseInt(prompt("Qual o primeiro termo da PA? "));
let arithProgression = [firstTerm];
const constant = parseInt(prompt("Qual a razão da PA? "));

for (let i = 0; i < 9; i += 1) {
  let newTerm = arithProgression[i] + constant;
  arithProgression.push(newTerm);
}

for (let i = 0; i < arithProgression.length; i += 1) {
  total += arithProgression[i];
}

console.log(
  `Os 10 primeiros termos da P.A são: ${arithProgression.join(", ")}`
);
console.log(`A soma dos termos da P.A foram: ${total}`);
