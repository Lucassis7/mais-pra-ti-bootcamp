/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require("prompt-sync")();

let sideA = parseInt(prompt("Primeiro lado: "));
let sideB = parseInt(prompt("Segundo lado: "));
let sideC = parseInt(prompt("Terceiro lado: "));

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  if (sideA === sideB && sideB === sideC) {
    console.log("Formam um triângulo equilátero!");
  } else if (sideA !== sideB && sideB !== sideC) {
    console.log("Formam um triângulo escaleno!");
  } else {
    console.log("Formam um triângulo isósceles!");
  }
} else {
  console.log("Estes lados não formam um triângulo!");
}
