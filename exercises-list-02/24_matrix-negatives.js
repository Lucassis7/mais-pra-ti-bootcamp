// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.

const matrixTest = [
  [1, -2, 3, 4, -5, 6, 7, 8],
  [-1, 2, -3, 4, 5, -6, -7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, -2, -3, -4, -5, -6, -7, -8],
  [0, 2, 0, 4, 0, 6, 0, 8],
  [-1, -1, -1, -1, -1, -1, -1, -1],
]; // Matriz gerada pelo ChatGPT

function countNegatives(matrix) {
  const negativesVector = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let negativesCounter = 0;
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] < 0) {
        negativesCounter += 1;
      }
    }

    negativesVector.push(negativesCounter);
  }

  return negativesVector;
}

console.log(countNegatives(matrixTest));
