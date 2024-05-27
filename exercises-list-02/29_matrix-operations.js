/*
  29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/

function matrixOperations(matrix) {
  let sumLineFour = 0;
  let sumColumnTwo = 0;
  let sumMainDiagonal = 0;
  let sumTotal = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (i === 3) {
        sumLineFour += matrix[i][j];
      }

      if (j === 1) {
        sumColumnTwo += matrix[i][j];
      }

      if (i === j) {
        sumMainDiagonal += matrix[i][j];
      }

      sumTotal += matrix[i][j];
    }
  }

  return [sumLineFour, sumColumnTwo, sumMainDiagonal, sumTotal];
}

const matrixTest = [
  [13, 6, 20, 8, 15],
  [11, 7, 14, 18, 2],
  [8, 19, 4, 17, 12],
  [3, 10, 18, 7, 5],
  [1, 11, 5, 9, 17],
]; // Matriz gerada pelo ChatGPT

const result = matrixOperations(matrixTest);

console.log(`
  Matriz: 
  ${matrixTest}

  Soma da linha 4: ${result[0]}
  Soma da coluna 2: ${result[1]}
  Soma da diagonal principal: ${result[2]}
  Soma total: ${result[3]}
`);
