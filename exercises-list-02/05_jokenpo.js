// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();
let result = true;

function verifyChoices(c1, c2) {
  c1 = c1.toLowerCase();
  c2 = c2.toLowerCase();
  if (
    c1 === "r" ||
    c1 === "p" ||
    c1 === "s" ||
    c2 === "r" ||
    c2 === "p" ||
    c2 === "s"
  ) {
    return true;
  }

  return false;
}

function verifyWinner(c1, c2) {
  let winner = null;
  let result = true;

  c1 = c1.toLowerCase();
  c2 = c2.toLowerCase();

  if (c1 === "p" && c2 === "p") {
    return {
      winner: "Empate",
      result: true,
    };
  } else if (c1 === "p" && c2 === "s") {
    return {
      winner: "Jogador 2",
      result: false,
    };
  } else if (c1 === "p" && c2 === "r") {
    return {
      winner: "Jogador 1",
      result: false,
    };
  } else if (c1 === "s" && c2 === "s") {
    return {
      winner: "Empate",
      result: true,
    };
  } else if (c1 === "s" && c2 === "r") {
    return {
      winner: "Jogador 2",
      result: false,
    };
  } else if (c1 === "s" && c2 === "p") {
    return {
      winner: "Jogador 1",
      result: false,
    };
  } else if (c1 === "r" && c2 === "r") {
    return {
      winner: "Empate",
      result: true,
    };
  } else if (c1 === "r" && c2 === "p") {
    return {
      winner: "Jogador 2",
      result: false,
    };
  } else if (c1 === "r" && c2 === "s") {
    return {
      winner: "Jogador 1",
      result: false,
    };
  }
}

while (result === true) {
  const choiceOne = prompt(
    "Jogador 1 escolha entre Rock [R], Paper [P], Scissors [S]: "
  );
  const choiceTwo = prompt(
    "Jogador 2 escolha entre Rock [R], Paper [P], Scissors [S]: "
  );

  if (verifyChoices(choiceOne, choiceTwo)) {
    const matchResult = verifyWinner(choiceOne, choiceTwo);
    console.log(
      `O resultado do vencedor da partida foi: ${matchResult.winner}`
    );
    result = matchResult.result;
  } else {
    console.log(
      "Valores de input errados! Por favor, entre com dados válidos!"
    );
  }
}
