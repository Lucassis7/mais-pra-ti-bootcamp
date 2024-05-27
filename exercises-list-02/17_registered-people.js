// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.

const prompt = require("prompt-sync")();

let counter = 0;
let people = [];
let age = [];

while (counter < 9) {
  const person = prompt("Insira o nome da pessoa: ");
  const personAge = prompt("Insira a idade da pessoa: ");

  people.push(person);
  age.push(personAge);

  counter += 1;
}

for (let i = 0; i < people.length; i += 1) {
  if (age[i] < 18) {
    console.log(`${people[i]} tem ${age[i]} anos e é menor de idade.`);
  }
}
