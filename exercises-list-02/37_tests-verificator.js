/*
  37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
  o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
  respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
  aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
  e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

function testChecker(answers, studentAnswers) {
  for (let i = 0; i < studentAnswers.length; i += 1) {
    let hits = 0;
    for (let j = 0; j < studentAnswers[i].length; j += 1) {
      if (answers[j] === studentAnswers[i][j]) {
        hits += 1;
      }
    }

    if (hits < 12) {
      console.log(`Estudante ${i + 1}: REPROVADO`);
    } else {
      console.log(`Estudante ${i + 1}: APROVADO`);
    }
  }
}

const answerTest = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
];

const studentAnswersTest = [
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
  ],
  [
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
  ],
  [
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
  ],
  [
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
  ],
  [
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
  ],
  [
    "A",
    "D",
    "B",
    "E",
    "C",
    "A",
    "D",
    "B",
    "E",
    "C",
    "A",
    "D",
    "B",
    "E",
    "C",
    "A",
    "D",
    "B",
    "E",
    "C",
  ],
  [
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
  ],
  [
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
  ],
  [
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
  ],
  [
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
  ],
  [
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
  ],
  [
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
  ],
  [
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
  ],
  [
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
  ],
  [
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
  ],
  [
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
  ],
  [
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
  ],
  [
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
  ],
  [
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
  ],
  [
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
  ],
  [
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
  ],
  [
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
  ],
  [
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
  ],
  [
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
  ],
  [
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
  ],
  [
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
  ],
  [
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
  ],
  [
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
  ],
  [
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
  ],
  [
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
  ],
  [
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
  ],
  [
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
  ],
  [
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
  ],
  [
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
  ],
  [
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
  ],
  [
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
    "A",
    "D",
    "E",
    "B",
    "C",
  ],
  [
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
    "E",
    "C",
    "A",
    "B",
    "D",
  ],
  [
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
    "B",
    "A",
    "D",
    "C",
    "E",
  ],
  [
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
  ],
  [
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
  ],
  [
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
  ],
  [
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
  ],
  [
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
    "C",
    "A",
    "E",
    "B",
    "D",
  ],
  [
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
    "B",
    "D",
    "A",
    "E",
    "C",
  ],
  [
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
    "D",
    "C",
    "B",
    "E",
    "A",
  ],
  [
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
    "A",
    "C",
    "E",
    "D",
    "B",
  ],
  [
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
    "E",
    "A",
    "C",
    "D",
    "B",
  ],
  [
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
    "B",
    "D",
    "A",
    "C",
    "E",
  ],
  [
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
  ],
  [
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
    "D",
    "B",
    "C",
    "A",
    "E",
  ],
];

testChecker(answerTest, studentAnswersTest);
