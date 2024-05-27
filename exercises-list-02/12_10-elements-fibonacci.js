// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let firstTerm = 1;
let terms = [firstTerm];

for (let i = 0; i < 9; i += 1) {
  if (terms.length > 1) {
    let newTerm = terms[i] + terms[i - 1];
    terms.push(newTerm);
  } else {
    terms.push(terms[0]);
  }
}

console.log(`Os 10 termos da sequência Fibonacci são: ${terms.join(", ")}`);
