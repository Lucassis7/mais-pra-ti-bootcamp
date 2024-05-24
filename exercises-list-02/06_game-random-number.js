// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

const randomNum = Math.floor(Math.random() * 5) + 1;
let userNumber = 0;

while (true) {
  userNumber = parseInt(prompt("Escolha um número de 1 a 5: "));

  if (userNumber === randomNum) {
    console.log("Parabéns, você acertou!!");
    break;
  } else {
    console.log("Ops... não foi dessa vez, mas tente novamente!");
    console.log("");
  }
}
