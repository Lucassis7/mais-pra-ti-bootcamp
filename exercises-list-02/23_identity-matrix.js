// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.

const prompt = require("prompt-sync")();

const lines = parseInt(prompt("Número de linhas e colunas da matriz: "));

const matrix = [];

for (let i = 0; i < lines; i += 1) {
  const matrixLine = [];
  for (let j = 0; j < lines; j += 1) {
    if (i === j) {
      matrixLine.push(1);
    } else {
      matrixLine.push(0);
    }
  }

  matrix.push(matrixLine);
}

console.log(matrix);
