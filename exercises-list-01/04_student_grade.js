// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

const prompt = require("prompt-sync")();

let grade1 = parseInt(prompt("Primeira nota: "));
let grade2 = parseInt(prompt("Segunda nota: "));

let average = (grade1 + grade2) / 2;

if (average >= 6) {
  console.log("PARABÉNS! Você foi aprovado!");
}

console.log("Programa de cálculo de notas encerrado!");
