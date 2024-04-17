// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

const prompt = require("prompt-sync")();

let grade1 = parseInt(prompt("Primeira nota: "));
let grade2 = parseInt(prompt("Segunda nota: "));

let average = (grade1 + grade2) / 2;

if (average >= 6) {
  console.log("PARABÉNS! Você foi aprovado!");
} else {
  console.log("Você foi REPROVADO! Estude mais!");
}

console.log("Programa de cálculo de notas encerrado!");
