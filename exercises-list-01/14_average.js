// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();
let counter = 0;
let soma = 0;
let num;

while (true) {
  num = parseFloat(prompt("Valor: "));
  if (num !== 0) {
    soma += num;
    counter += 1;
  } else {
    break;
  }
}

console.log(`Média: ${soma / counter}`);
