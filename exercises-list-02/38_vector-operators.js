/*
  38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
  variável identificadora que calcule a operação conforme a informação contida nesta
  variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/

const prompt = require("prompt-sync")();

const initialVector = [];
let initialOperator = 0;

function vectorOperators(vector, operator) {
  switch (operator) {
    case 1:
      let sum = 0;
      for (let i = 0; i < vector.length; i += 1) {
        sum += vector[i];
      }

      console.log(sum);
      break;
    case 2:
      let product = vector[0];
      for (let i = 1; i < vector.length; i += 1) {
        product *= vector[i];
      }

      console.log(product);
      break;
    case 3:
      let average = 0;
      for (let i = 0; i < vector.length; i += 1) {
        average += vector[i];
      }

      console.log(average / vector.length);
      break;
    case 4:
      console.log(vector.sort((a, b) => a - b));
      break;
    case 5:
      console.log(vector);
      break;
    default:
      console.log("Não existe uma operação com este valor.");
  }
}

const positionOne = parseInt(prompt("Posição 01 do vetor: "));
initialVector.push(positionOne);
const positionTwo = parseInt(prompt("Posição 02 do vetor: "));
initialVector.push(positionTwo);
const positionThree = parseInt(prompt("Posição 03 do vetor: "));
initialVector.push(positionThree);
const positionFour = parseInt(prompt("Posição 04 do vetor: "));
initialVector.push(positionFour);
const positionFive = parseInt(prompt("Posição 05 do vetor: "));
initialVector.push(positionFive);
const positionSix = parseInt(prompt("Posição 06 do vetor: "));
initialVector.push(positionSix);

initialOperator = parseInt(prompt("Operador: "));

vectorOperators(initialVector, initialOperator);
