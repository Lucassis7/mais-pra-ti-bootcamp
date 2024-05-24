/*
  7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
  carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
  cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
  (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
  mostre o preço a ser pago de acordo com os dados a seguir:

  Carros populares
  - Até 100 Km percorridos: R$ 0,20 por Km
  - Acima de 100 Km percorridos: R$ 0,10 por Km

  Carros de luxo
  - Até 200 Km percorridos: R$ 0,30 por Km
  - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require("prompt-sync")();

const carType = prompt(
  "Escolha o tipo de carro P para Popular e L para Luxo: "
).toLowerCase();
const rentDays = parseInt(prompt("Dias de aluguel: "));
const traveledKM = parseInt(prompt("Kilômetros percorridos: "));

if (carType === "p") {
  if (traveledKM <= 100) {
    const totalValue = 90 * rentDays + 0.2 * traveledKM;
    console.log(
      `O valor total do aluguel ficou por: R$ ${totalValue.toFixed(2)}`
    );
  } else {
    const totalValue = 90 * rentDays + 0.1 * traveledKM;
    console.log(
      `O valor total do aluguel ficou por: R$ ${totalValue.toFixed(2)}`
    );
  }
} else if (carType === "l") {
  if (traveledKM <= 200) {
    const totalValue = 150 * rentDays + 0.3 * traveledKM;
    console.log(
      `O valor total do aluguel ficou por: R$ ${totalValue.toFixed(2)}`
    );
  } else {
    const totalValue = 150 * rentDays + 0.25 * traveledKM;
    console.log(
      `O valor total do aluguel ficou por: R$ ${totalValue.toFixed(2)}`
    );
  }
} else {
  console.log("Valores não encontrados para o tipo do carro.");
}
