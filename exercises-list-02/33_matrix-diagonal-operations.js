// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.

const matrixTest = [
  [2, 5, 18],
  [12, 8, 7],
  [9, 3, 22],
];

const average = (matrixTest[2][0] + matrixTest[1][1] + matrixTest[0][2]) / 3;

for (let i = 0; i < matrixTest.length; i += 1) {
  for (let j = 0; j < matrixTest[i].length; j += 1) {
    if (i === j) {
      matrixTest[i][j] = matrixTest[i][j] * average;
    }
  }
}

console.log(matrixTest);
