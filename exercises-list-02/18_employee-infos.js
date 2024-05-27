// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.

const prompt = require("prompt-sync")();

const name = prompt("Nome do funcionário: ");
const role = prompt("Cargo do funcionário: ");
const wage = parseInt(prompt("Salário do Funcionário: "));

console.log("*-*-*-*-*-*-*-*-*-*");
console.log("     Nome     |     Cargo     |     Salário     ");
console.log(`   ${name}    |   ${role}     |   R$ ${wage.toFixed(2)}`);
console.log("*-*-*-*-*-*-*-*-*-*");
