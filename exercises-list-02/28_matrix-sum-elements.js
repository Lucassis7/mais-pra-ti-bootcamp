/*
  28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
  item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
*/

const matrix = [
  [13, 6, 20, 8, 15, 5, 19, 3, 10, 17],
  [11, 7, 14, 18, 2, 9, 16, 12, 4, 1],
  [8, 19, 4, 17, 12, 6, 15, 1, 11, 9],
  [3, 10, 18, 7, 5, 14, 2, 16, 13, 20],
  [1, 11, 5, 9, 17, 3, 12, 6, 14, 8],
  [16, 4, 13, 20, 7, 15, 10, 19, 2, 18],
  [9, 1, 6, 14, 3, 11, 8, 7, 20, 12],
  [5, 12, 7, 19, 10, 2, 18, 13, 1, 16],
  [2, 20, 11, 6, 9, 17, 4, 14, 8, 15],
  [18, 8, 16, 3, 13, 1, 7, 10, 15, 5],
]; // Matriz gerada pelo ChatGPT

let supSum = 0;
let infSum = 0;

for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix[i].length; j += 1) {
    if (j > i) {
      supSum += matrix[i][j];
    } else if (i > j) {
      infSum += matrix[i][j];
    }
  }
}

console.log(`A soma dos elementos acima da diagonal principal é: ${supSum}`);
console.log(`A soma dos elementos abaixo da diagonal principal é: ${infSum}`);
