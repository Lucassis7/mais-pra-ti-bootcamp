// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.

const matrixTest = [
  [13, 6, 20, 8, 15],
  [11, 7, 14, 18, 2],
  [8, 19, 4, 17, 12],
  [3, 10, 18, 7, 5],
  [1, 11, 5, 9, 17],
]; // Matriz gerada pelo ChatGPT

const sumLines = [];
const sumColumns = [];

for (let i = 0; i < matrixTest.length; i += 1) {
  let sumLine = 0;
  let sumColumn = 0;
  for (let j = 0; j < matrixTest[i].length; j += 1) {
    sumLine += matrixTest[i][j];
    sumColumn += matrixTest[j][i];
  }

  sumLines.push(sumLine);
  sumColumns.push(sumColumn);
}

console.log("O vetor de soma das linhas da matriz é: " + sumLines);
console.log("O vetor de soma das colunas da matriz é: " + sumColumns);
