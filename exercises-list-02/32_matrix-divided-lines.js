// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.

const firstMatrix = [
  [83, 57, 37, 60, 76, 8, 94, 21, 33, 65, 23, 78, 3],
  [17, 68, 59, 90, 91, 24, 30, 50, 31, 28, 75, 56, 9],
  [92, 41, 84, 13, 5, 79, 87, 32, 14, 45, 96, 98, 88],
  [9, 35, 61, 16, 51, 29, 69, 82, 72, 43, 99, 64, 5],
  [33, 65, 23, 78, 3, 85, 10, 93, 38, 74, 89, 99, 64],
  [31, 28, 75, 56, 95, 54, 86, 1, 97, 12, 70, 77, 1],
  [14, 45, 96, 98, 88, 58, 81, 63, 39, 15, 48, 67, 2],
  [72, 43, 99, 64, 53, 46, 66, 27, 71, 19, 49, 4, 2],
  [74, 89, 99, 64, 53, 46, 66, 27, 71, 19, 49, 4, 20],
  [12, 70, 77, 11, 2, 34, 25, 36, 62, 47, 100, 7, 44],
  [15, 48, 67, 22, 52, 40, 80, 6, 42, 73, 26, 18, 55],
  [19, 49, 4, 20, 83, 57, 37, 60, 76, 8, 94, 21, 33],
]; // Matriz gerada pelo ChatGPT

const newMatrix = [];

for (let i = 0; i < firstMatrix.length; i += 1) {
  let maxLineNum = 0;
  for (let j = 0; j < firstMatrix[i].length; j += 1) {
    if (Math.abs(firstMatrix[i][j]) > maxLineNum) {
      maxLineNum = firstMatrix[i][j];
    }
  }

  let currentLine = [];

  for (let k = 0; k < firstMatrix[i].length; k += 1) {
    currentLine.push((firstMatrix[i][k] / maxLineNum).toFixed(2));
  }

  newMatrix.push(currentLine);
}

console.log("Matriz inicial: ");
console.log(firstMatrix);
console.log("");
console.log("Matriz final: ");
console.log(newMatrix);
