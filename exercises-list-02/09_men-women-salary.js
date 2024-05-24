// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

const prompt = require("prompt-sync")();

let register = 0;
let menSalary = [];
let womenSalary = [];
let gender = null;
let wage = 0;

while (register !== 99) {
  gender = prompt(
    "Você deseja cadastrar uma [M]ulher ou [H]omem? "
  ).toLowerCase();
  wage = parseInt(prompt("Salário para cadastrar: "));

  if (gender === "m") {
    womenSalary.push(wage);
    console.log(womenSalary);
  } else if (gender === "h") {
    menSalary.push(wage);
    console.log(menSalary);
  } else {
    console.log("Parâmetro incorreto, salário não cadastrado!");
  }

  register = parseInt(
    prompt(
      "Digite 99 caso queira finalizar o programa e ver o somatório de salários: "
    )
  );

  if (register === 99) {
    let totalMenSalary = 0;
    let totalWomenSalary = 0;

    for (let i = 0; i < menSalary.length; i += 1) {
      totalMenSalary += menSalary[i];
    }

    for (let i = 0; i < womenSalary.length; i += 1) {
      totalWomenSalary += womenSalary[i];
    }

    console.log(totalMenSalary);
    console.log(totalWomenSalary);

    console.log(
      `O total de salários cadastrados masculinos foi de: R$ ${totalMenSalary.toFixed(
        2
      )}`
    );
    console.log(
      `O total de salários cadastrados femininos foi de: R$ ${totalWomenSalary.toFixed(
        2
      )}`
    );
  }
}
