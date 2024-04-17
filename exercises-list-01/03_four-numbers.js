/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
  ● Some 25 ao primeiro inteiro;
  ● Triplique o valor do segundo inteiro;
  ● Modifique o valor do terceiro inteiro para 12% do valor original;
  ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Primeiro número: "));
let num2 = parseInt(prompt("Segundo número: "));
let num3 = parseInt(prompt("Terceiro número: "));
let num4 = parseInt(prompt("Quarto número: "));

num4 = num1 + num2 + num3;
num1 = num1 + 25;
num2 = num2 * 3;
num3 = num3 * 0.12;

console.log("*******************");
console.log("Os resultado final dos quatro números foram:");
console.log("Novo primeiro número:", num1);
console.log("Novo segundo número:", num2);
console.log("Novo terceiro número:", num3);
console.log("Novo quarto número:", num4);
console.log("*******************");
