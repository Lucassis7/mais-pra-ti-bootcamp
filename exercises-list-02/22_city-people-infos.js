/*
  22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
  dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
  número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, 
  o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

const prompt = require("prompt-sync")();

let continueRegistering = true;
const wages = [];
const childrenInfos = [];

while (continueRegistering) {
  const wage = parseInt(prompt("Salário: "));
  const childrenQuantity = parseInt(prompt("Quantidade de filhos: "));

  wages.push(wage);
  childrenInfos.push(childrenQuantity);

  const continueRegistration = prompt(
    "Digite 99 se quiser parar de registrar: "
  );

  if (continueRegistration === "99") {
    continueRegistering = false;
  }
}

let totalWage = 0;
let totalChildren = 0;
let maxWage = 0;
const peopleWageOverValue = [];

for (let i = 0; i < wages.length; i += 1) {
  totalWage += wages[i];
  totalChildren += childrenInfos[i];

  maxWage < wages[i] ? (maxWage = wages[i]) : maxWage;

  if (wages[i] <= 350) {
    peopleWageOverValue.push(wages[i]);
  }
}

console.log("");
console.log(`Média salarial: R$ ${(totalWage / wages.length).toFixed(2)}`);
console.log(
  `Média de filhos: ${(totalChildren / childrenInfos.length).toFixed(2)}`
);
console.log(`Maior salário: R$ ${maxWage.toFixed(2)}`);
console.log(
  `Porcentagem de pessoas abaixo de R$ 350,00: ${(
    (peopleWageOverValue.length / wages.length) *
    100
  ).toFixed(2)}%`
);
