// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].

const A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]; // Matriz gerada pelo ChatGPT

const B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
]; // Matriz gerada pelo ChatGPT

const linesA = A.length;
const columnsA = A[0].length;
const linesB = B.length;
const columnsB = B[0].length;

const P = [];

for (let i = 0; i < linesA; i++) {
  P[i] = [];
  for (let j = 0; j < columnsB; j++) {
    let sum = 0;
    for (let k = 0; k < columnsA; k++) {
      sum += A[i][k] * B[k][j];
    }
    P[i][j] = sum;
  }
}

console.log(P);
