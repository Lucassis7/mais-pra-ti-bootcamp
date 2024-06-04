/*
  36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
  um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
  do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
  número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
  o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
  mensagem "Parabéns, tu foi o GANHADOR".
*/

function lotteryChecker(winner, bettors) {
  for (let i = 0; i < bettors.length; i += 1) {
    let hits = 0;
    for (let j = 0; j < bettors[i].length; j += 1) {
      if (winner.includes(bettors[i][j])) {
        hits += 1;
      }
    }

    if (hits < 13) {
      console.log(`O apostador ${i + 1} teve ${hits} acertos!`);
    } else {
      console.log(`O apostador teve 13 acertos: Parabéns, tu foi o GANHADOR!`);
    }
  }
}

const winnerTest = [22, 7, 15, 13, 9, 36, 48, 55, 27, 19, 11, 51, 20];

const bettorsTest = [
  [12, 34, 56, 23, 45, 8, 60, 29, 37, 18, 50, 3, 41],
  [17, 52, 26, 39, 44, 3, 58, 20, 46, 11, 4, 21, 33],
  [7, 22, 55, 19, 41, 59, 15, 36, 53, 25, 13, 50, 32],
  [10, 60, 34, 17, 23, 45, 28, 52, 7, 46, 9, 31, 55],
  [12, 38, 41, 20, 57, 5, 29, 60, 8, 53, 18, 34, 46],
  [26, 1, 45, 12, 43, 6, 22, 59, 20, 35, 16, 39, 50],
  [9, 53, 33, 18, 37, 42, 26, 1, 48, 30, 57, 21, 8],
  [10, 40, 52, 23, 44, 27, 6, 34, 59, 3, 17, 50, 14],
  [22, 37, 5, 31, 15, 48, 2, 60, 46, 39, 7, 20, 54],
  [14, 47, 23, 39, 16, 51, 9, 3, 28, 42, 56, 12, 25],
  [29, 38, 6, 55, 21, 46, 14, 58, 9, 36, 41, 3, 30],
  [50, 22, 12, 5, 47, 35, 26, 7, 39, 53, 1, 48, 60],
  [44, 30, 17, 8, 29, 56, 20, 4, 50, 42, 25, 37, 15],
  [10, 31, 2, 38, 49, 21, 59, 16, 9, 44, 54, 12, 45],
  [23, 34, 4, 57, 41, 18, 48, 53, 20, 11, 7, 30, 55],
  [17, 36, 42, 13, 25, 58, 3, 32, 22, 47, 19, 60, 6],
  [33, 50, 7, 19, 45, 38, 27, 5, 13, 52, 10, 40, 24],
  [14, 23, 54, 6, 31, 45, 1, 39, 56, 26, 18, 37, 22],
  [47, 11, 36, 29, 5, 50, 12, 41, 25, 7, 19, 58, 21],
  [15, 42, 28, 34, 13, 48, 17, 55, 1, 23, 40, 46, 9],
  [6, 31, 20, 37, 12, 56, 42, 3, 50, 11, 25, 19, 59],
  [5, 38, 44, 1, 54, 27, 36, 20, 29, 50, 8, 33, 18],
  [21, 47, 13, 42, 6, 39, 24, 10, 19, 55, 2, 51, 30],
  [26, 17, 5, 28, 47, 12, 54, 39, 15, 2, 34, 59, 23],
  [10, 50, 37, 6, 45, 14, 3, 56, 23, 19, 42, 11, 27],
  [32, 18, 50, 22, 56, 7, 34, 3, 28, 47, 9, 39, 11],
  [12, 45, 39, 7, 2, 33, 48, 20, 51, 26, 55, 14, 23],
  [8, 23, 52, 45, 30, 18, 37, 9, 55, 4, 14, 41, 59],
  [19, 54, 2, 26, 46, 35, 9, 57, 15, 42, 8, 31, 21],
  [43, 14, 29, 57, 21, 48, 36, 1, 15, 27, 53, 10, 35],
  [5, 19, 60, 37, 22, 49, 12, 2, 56, 7, 33, 41, 26],
  [15, 31, 1, 60, 12, 52, 33, 44, 20, 57, 6, 39, 24],
  [30, 13, 55, 3, 42, 26, 18, 5, 20, 49, 57, 1, 39],
  [23, 47, 14, 50, 7, 36, 31, 18, 6, 29, 41, 11, 58],
  [45, 4, 27, 40, 15, 10, 53, 1, 25, 57, 6, 32, 19],
  [58, 23, 3, 41, 47, 6, 26, 13, 9, 32, 51, 12, 38],
  [10, 36, 54, 22, 47, 15, 60, 33, 11, 50, 5, 20, 48],
  [18, 52, 24, 12, 46, 5, 31, 39, 22, 8, 41, 60, 34],
  [9, 37, 21, 5, 50, 29, 54, 17, 4, 48, 31, 16, 59],
  [23, 14, 44, 3, 55, 38, 12, 7, 19, 49, 28, 37, 50],
  [16, 32, 47, 58, 29, 25, 20, 36, 9, 50, 42, 11, 3],
  [10, 42, 33, 13, 39, 8, 51, 26, 7, 35, 56, 21, 28],
  [6, 24, 53, 34, 45, 16, 57, 20, 12, 41, 31, 48, 3],
  [50, 39, 14, 1, 47, 34, 26, 8, 60, 18, 5, 43, 22],
  [30, 13, 28, 21, 48, 6, 56, 36, 7, 41, 9, 22, 45],
  [12, 46, 39, 5, 17, 29, 14, 48, 3, 53, 33, 24, 52],
  [8, 59, 25, 16, 36, 42, 3, 27, 47, 1, 53, 29, 57],
  [15, 48, 41, 32, 6, 21, 54, 10, 38, 17, 2, 59, 27],
  [18, 7, 23, 46, 40, 5, 11, 31, 50, 12, 37, 28, 51],
  [29, 8, 53, 12, 33, 38, 1, 55, 20, 7, 48, 19, 26],
  [10, 47, 34, 18, 42, 27, 54, 9, 36, 20, 6, 28, 3],
  [16, 53, 12, 40, 7, 34, 25, 5, 18, 41, 26, 59, 44],
  [30, 13, 8, 19, 51, 23, 4, 39, 6, 55, 46, 24, 37],
  [25, 12, 38, 20, 56, 9, 5, 29, 47, 36, 13, 31, 58],
  [22, 39, 48, 3, 15, 54, 8, 11, 45, 26, 37, 50, 21],
  [12, 47, 25, 53, 38, 19, 7, 34, 9, 60, 18, 45, 27],
  [50, 23, 44, 19, 15, 53, 31, 5, 25, 38, 8, 59, 42],
  [28, 6, 31, 39, 12, 52, 44, 19, 33, 57, 46, 3, 21],
  [45, 25, 17, 54, 9, 47, 22, 12, 34, 7, 20, 31, 56],
  [2, 18, 38, 55, 43, 20, 12, 59, 47, 5, 24, 36, 7],
  [44, 12, 33, 4, 28, 22, 5, 53, 16, 46, 25, 58, 10],
  [24, 8, 53, 39, 12, 47, 3, 17, 50, 19, 5, 31, 44],
  [13, 58, 34, 11, 7, 30, 6, 45, 21, 50, 3, 36, 49],
  [23, 2, 37, 19, 60, 12, 5, 45, 27, 56, 3, 52, 31],
  [40, 23, 10, 36, 8, 55, 1, 30, 20, 47, 59, 42, 17],
  [12, 39, 29, 5, 54, 6, 20, 44, 16, 25, 59, 3, 43],
  [22, 46, 32, 4, 37, 60, 29, 14, 53, 6, 18, 25, 11],
  [15, 43, 22, 34, 48, 2, 9, 41, 50, 8, 20, 55, 27],
  [3, 17, 52, 39, 6, 22, 48, 31, 19, 59, 14, 9, 40],
  [13, 56, 39, 5, 17, 25, 53, 32, 46, 29, 2, 41, 18],
  [12, 40, 21, 53, 38, 9, 24, 17, 2, 36, 55, 7, 44],
  [11, 27, 58, 34, 6, 49, 4, 25, 40, 15, 22, 53, 17],
  [5, 41, 50, 23, 3, 39, 12, 56, 19, 28, 9, 52, 8],
  [32, 19, 13, 47, 29, 4, 40, 1, 55, 6, 22, 39, 58],
  [50, 11, 33, 2, 9, 42, 21, 54, 25, 37, 17, 59, 30],
  [13, 48, 2, 29, 40, 24, 55, 7, 22, 38, 50, 12, 5],
  [39, 15, 5, 52, 48, 23, 30, 44, 7, 18, 57, 31, 20],
  [12, 47, 53, 39, 22, 25, 8, 56, 6, 41, 15, 29, 3],
  [37, 22, 3, 31, 12, 60, 44, 9, 27, 18, 50, 41, 16],
  [54, 5, 36, 11, 30, 40, 9, 15, 26, 22, 47, 1, 58],
  [3, 25, 17, 12, 40, 53, 34, 21, 29, 8, 39, 44, 15],
  [32, 54, 10, 19, 40, 13, 5, 29, 42, 26, 55, 17, 7],
  [11, 29, 19, 6, 50, 37, 1, 57, 22, 30, 53, 4, 25],
  [48, 6, 12, 19, 44, 1, 39, 17, 53, 25, 60, 13, 33],
  [27, 40, 14, 38, 5, 58, 23, 10, 33, 47, 2, 31, 12],
  [26, 5, 13, 54, 36, 20, 7, 52, 10, 33, 9, 24, 58],
  [35, 46, 4, 53, 21, 40, 16, 9, 29, 5, 56, 7, 30],
  [13, 19, 31, 5, 27, 42, 11, 23, 40, 1, 54, 37, 18],
  [22, 7, 15, 13, 9, 36, 48, 55, 27, 19, 11, 51, 20],
  [5, 41, 50, 23, 3, 39, 12, 56, 19, 28, 9, 52, 8],
  [32, 19, 13, 47, 29, 4, 40, 1, 55, 6, 22, 39, 58],
  [50, 11, 33, 2, 9, 42, 21, 54, 25, 37, 17, 59, 30],
  [13, 48, 2, 29, 40, 24, 55, 7, 22, 38, 50, 12, 5],
  [39, 15, 5, 52, 48, 23, 30, 44, 7, 18, 57, 31, 20],
  [12, 47, 53, 39, 22, 25, 8, 56, 6, 41, 15, 29, 3],
  [37, 22, 3, 31, 12, 60, 44, 9, 27, 18, 50, 41, 16],
  [54, 5, 36, 11, 30, 40, 9, 15, 26, 22, 47, 1, 58],
  [3, 25, 17, 12, 40, 53, 34, 21, 29, 8, 39, 44, 15],
  [32, 54, 10, 19, 40, 13, 5, 29, 42, 26, 55, 17, 7],
  [11, 29, 19, 6, 50, 37, 1, 57, 22, 30, 53, 4, 25],
]; // Matriz gerada pelo ChatGPT

lotteryChecker(winnerTest, bettorsTest);
