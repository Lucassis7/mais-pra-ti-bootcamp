/*
  40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
  resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
  cada), representando as apostas feitas. Compare os números das apostas com o
  resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
  corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
  e quadras, apenas por quinas.)
*/

function lotteryCheck(winner, bettors) {
  for (let i = 0; i < bettors.length; i += 1) {
    let hits = 0;
    for (let j = 0; j < bettors[i].length; j += 1) {
      if (winner.includes(bettors[i][j])) {
        hits += 1;
      }
    }

    if (hits === 5) {
      console.log(`O apostador ${i + 1} é o GANHADOR!`);
    }
  }
}

const winnerTest = [22, 7, 15, 13, 9];

const bettorsTest = [
  [32, 15, 44, 9, 28],
  [50, 3, 23, 57, 14],
  [1, 48, 29, 33, 7],
  [22, 7, 15, 13, 9],
  [2, 46, 17, 60, 34],
  [10, 27, 5, 53, 20],
  [31, 21, 8, 59, 37],
  [4, 25, 40, 18, 45],
  [19, 52, 11, 36, 6],
  [13, 49, 22, 35, 58],
  [47, 30, 1, 42, 16],
  [9, 43, 28, 14, 55],
  [39, 6, 34, 26, 3],
  [7, 19, 24, 53, 44],
  [38, 50, 12, 31, 23],
  [25, 4, 37, 15, 48],
  [58, 20, 33, 11, 59],
  [22, 8, 56, 29, 17],
  [35, 40, 3, 27, 49],
  [16, 1, 60, 42, 10],
  [5, 21, 31, 46, 14],
  [57, 11, 28, 50, 19],
  [43, 13, 26, 7, 52],
  [18, 39, 55, 9, 32],
  [20, 48, 2, 37, 30],
  [17, 6, 59, 25, 41],
  [22, 44, 1, 54, 33],
  [51, 15, 10, 36, 27],
  [47, 3, 60, 28, 13],
  [45, 31, 8, 50, 24],
  [40, 16, 5, 39, 18],
  [33, 12, 57, 29, 2],
  [53, 7, 25, 42, 30],
  [14, 56, 4, 35, 49],
  [58, 23, 17, 9, 20],
  [38, 28, 13, 21, 59],
  [11, 46, 1, 34, 41],
  [48, 19, 3, 43, 26],
  [32, 5, 27, 54, 12],
  [50, 15, 24, 37, 6],
  [36, 10, 55, 7, 22],
  [8, 40, 31, 18, 53],
  [57, 14, 2, 25, 42],
  [21, 33, 11, 38, 17],
  [16, 45, 26, 58, 9],
  [47, 4, 20, 30, 1],
  [35, 50, 19, 12, 44],
  [6, 28, 22, 29, 41],
  [13, 56, 3, 48, 7],
]; // Matriz gerada pelo ChatGPT

lotteryCheck(winnerTest, bettorsTest);
