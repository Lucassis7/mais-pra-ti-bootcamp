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

let newNum1 = num1 + 25;
let newNum2 = num2 * 3;
let newNum3 = num3 * 0.12;
let newNum4 = num1 + num2 + num3;

console.log("*******************");
console.log("Os resultado final dos quatro números foram:");
console.log("Novo primeiro número:", newNum1);
console.log("Novo segundo número:", newNum2);
console.log("Novo terceiro número:", newNum3);
console.log("Novo quarto número:", newNum4);
console.log("*******************");
