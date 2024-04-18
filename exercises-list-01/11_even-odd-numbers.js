// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

const prompt = require("prompt-sync")();
let num;

while (true) {
  num = parseInt(prompt("Valor: "));

  if (num % 2 === 0) {
    console.log("PAR!");
  } else if (num < 0) {
    break;
  } else {
    console.log("ÍMPAR!");
  }
}
