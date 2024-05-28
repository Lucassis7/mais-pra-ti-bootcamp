// 35. Elaborar um algoritmo que leia um conjunto de 30 values e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.

function evenAndOddsValues(values) {
  let even = [];
  let odds = [];

  let evenIndex = 0;
  let oddsIndex = 0;

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    if (value % 2 === 0) {
      if (evenIndex === 5) {
        console.log("Vetor de pares cheio:", even);
        evenIndex = 0;
      }

      even[evenIndex] = value;
      evenIndex++;
    } else {
      if (oddsIndex === 5) {
        console.log("Vetor de ímpares cheio:", odds);
        oddsIndex = 0;
      }

      odds[oddsIndex] = value;
      oddsIndex++;
    }
  }

  if (evenIndex > 0) {
    console.log("Vetor de pares final:", even.slice(0, evenIndex));
  }

  if (oddsIndex > 0) {
    console.log("Vetor de ímpares final:", odds.slice(0, oddsIndex));
  }
}

const values = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

evenAndOddsValues(values);
