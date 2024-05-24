// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

const sideOne = parseInt(prompt("Lado 1: "));
const sideTwo = parseInt(prompt("Lado 2: "));
const sideThree = parseInt(prompt("Lado 3: "));

function verifySides(s1, s2, s3) {
  if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
    return true;
  }

  return false;
}

if (verifySides(sideOne, sideTwo, sideThree)) {
  console.log("É possível formar um triângulo com estes lados!");
} else {
  console.log("Não é possível formar um triângulo com esses lados.");
}
