// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela:

const prompt = require("prompt-sync")();

let productCode = parseInt(prompt("Código do produto: "));

if (productCode === 1) {
  console.log("Sul");
} else if (productCode === 2) {
  console.log("Norte");
} else if (productCode === 3) {
  console.log("Leste");
} else if (productCode === 4) {
  console.log("Oeste");
} else if (productCode === 5 || productCode === 6) {
  console.log("Nordeste");
} else if (productCode === 7 || productCode === 8 || productCode === 9) {
  console.log("Sudeste");
} else if (productCode >= 10 && productCode <= 20) {
  console.log("Centro-Oeste");
} else if (productCode >= 25 && productCode <= 50) {
  console.log("Nordeste");
} else {
  console.log("Produto Importado");
}
