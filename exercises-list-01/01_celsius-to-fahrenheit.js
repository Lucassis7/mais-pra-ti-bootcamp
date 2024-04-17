// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

let tempCelsius = parseInt(
  prompt(
    "Qual a temperatura que deseja transformar de Celsius para Fahrenheit? "
  )
);

let tempFahrenheit = tempCelsius * (9 / 5) + 32;

console.log(`A temperatura de ${tempCelsius}°C é igual a ${tempFahrenheit}°F`);
