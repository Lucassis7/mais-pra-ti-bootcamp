// Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

const cigarettesQuantityPerDay = parseInt(
  prompt("Quantidade de cigarros por dia: ")
);
const years = parseInt(prompt("Quantos anos fumou: "));

const minutes = 10 * (cigarettesQuantityPerDay * 365 * years);
const days = (minutes / (60 * 24)).toFixed(2);

console.log(
  `O fumante teve seu tempo de vida reduzido em ${Math.round(days)} dias!`
);
