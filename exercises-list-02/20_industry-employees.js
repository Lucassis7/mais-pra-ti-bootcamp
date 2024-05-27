/*
  20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
  no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
  salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
  tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
      (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
      INSS).
*/

const prompt = require("prompt-sync")();

const INSSDeduction = 12;
const employeeRegister = prompt("Matrícula do funcionário: ");
const employeeName = prompt("Nome do funcionário: ");
const employeeWage = parseInt(prompt("Salário do funcionário: "));

console.log("*-*-*-*-*-*-*-*-*-*");
console.log(`Matrícula: ${employeeRegister}`);
console.log(`Nome: ${employeeName}`);
console.log(`Salário bruto: R$ ${employeeWage.toFixed(2)}`);
console.log(`Dedução INSS: ${INSSDeduction}%`);
console.log(
  `Salário líquido: R$ ${(employeeWage * (1 - INSSDeduction / 100)).toFixed(2)}`
);
console.log("*-*-*-*-*-*-*-*-*-*");
