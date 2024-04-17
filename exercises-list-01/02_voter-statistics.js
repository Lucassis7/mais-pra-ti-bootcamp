// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total e eleitores.

const prompt = require("prompt-sync")();

let voters = parseInt(prompt("Quantidade de eleitores: "));
let whiteVotes = parseInt(prompt("Quantidade de votos brancos: "));
let nullVotes = parseInt(prompt("Quantidade de votos nulos: "));
let validVotes = parseInt(prompt("Quantidade de votos válidos: "));

console.log(`${(whiteVotes / voters) * 100}% de votos brancos!`);
console.log(`${(nullVotes / voters) * 100}% de votos nulos!`);
console.log(`${(validVotes / voters) * 100}% de votos válidos!`);
