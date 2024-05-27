// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require("prompt-sync")();

function validateTime(time) {
  const rgxPattern = /^([0-1]\d|2[0-3])\.([0-5]\d)\.([0-5]\d)$/;
  return rgxPattern.test(time);
}

const times = [];
let timeInput;

while (times.length < 5) {
  timeInput = prompt(
    `Digite o horário ${times.length + 1} no formato HH.MM.SS:`
  );

  if (validateTime(timeInput)) {
    times.push(timeInput);
  } else {
    console.log("Horário inválido. Por favor, tente novamente.");
  }
}

console.log("Horários fornecidos:");
times.forEach((time) => {
  console.log(time);
});
