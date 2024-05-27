// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require("prompt-sync")();

const height = parseInt(prompt("Altura [em CM]: "));
const gender = prompt("Sexo [M ou F]: ").toLowerCase();

if (gender === "m") {
  console.log(`Peso ideal: ${(72.2 * (height / 100) - 58).toFixed(2)} kg`);
} else if (gender === "f") {
  console.log(`Peso ideal: ${(62.1 * (height / 100) - 44.7).toFixed(2)} kg`);
} else {
  console.log("Gênero não encontrado.");
}
