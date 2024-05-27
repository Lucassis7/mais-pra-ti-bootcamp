// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.

function matrixMultiplier(matrix, multiplier) {
  let finalVector = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      finalVector.push(matrix[i][j] * multiplier);
    }
  }

  return finalVector;
}

const matrixTest = [
  [4, 17, 8, 15, 22, 9],
  [12, 5, 20, 11, 3, 18],
  [7, 14, 6, 19, 13, 2],
  [10, 23, 16, 1, 24, 21],
  [19, 9, 14, 8, 3, 17],
  [6, 22, 11, 15, 4, 20],
]; // Matriz gerada pelo ChatGPT

console.log(matrixMultiplier(matrixTest, 5));
