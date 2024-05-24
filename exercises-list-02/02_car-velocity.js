// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")();

const carVelocity = parseInt(prompt("Velocidade do carro: "));

if (carVelocity > 80) {
  const velocityExceeded = carVelocity - 80;
  const penalty = velocityExceeded * 5;

  console.log(
    `Você foi multado por ultrapassar em ${velocityExceeded} km/h a velocidade permitida, e por isto, recebeu uma multa no valor de: R$ ${penalty.toFixed(
      2
    )}`
  );
} else {
  console.log("Velocidade dentro dos padrões permitidos.");
}
