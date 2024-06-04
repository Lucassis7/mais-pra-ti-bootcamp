// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

function vectorCompactor(A) {
  const B = [];
  for (i = 0; i < A.length; i += 1) {
    if (A[i] > 0) {
      B.push(A[i]);
    }
  }

  return B;
}

const vectorTest = [
  34, -12, 56, 0, -7, 19, 0, 85, -23, 45, -8, 27, 0, 60, -34, 88, 12, 0, -19,
  31, 24, -5, 67, 0, -11, 20, 0, 77, -45, 38, 0, -9, 52, 70, -31, 0, 29, -2, 44,
  91, -6, 30, 0, 82, -28, 53, 17, -14, 0, 39, -4, 48, 63, 0, -21, 0, 50, 74,
  -16, 13, 0, -3, 65, 90, 0, -35, 22, -10, 0, 76, 33, -1, 0, 42, 57, -25, 0, 81,
  14, 0, -18, 47, 0, 69, -30, 25, 0, 59, 72, -13, 0, 54, -20, 0, 79, 16, -24, 0,
  41, 66,
]; // Array gerado por ChatGPT

console.log(vectorCompactor(vectorTest));
