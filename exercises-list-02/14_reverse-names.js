// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

const prompt = require("prompt-sync")();

let counter = 1;
let people = [];

while (counter <= 7) {
  const person = prompt("Insira o nome: ");

  people.push(person);
  counter += 1;
}

for (let i = people.length - 1; i >= 0; i -= 1) {
  console.log(people[i]);
}
