// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.

let firstTerm = 1;
let terms = [firstTerm];

for (let i = 0; i < 14; i += 1) {
  if (terms.length > 1) {
    let newTerm = terms[i] + terms[i - 1];
    terms.push(newTerm);
  } else {
    terms.push(terms[0]);
  }
}

console.log(
  `Os 15 primeiros termos da sequência Fibonacci são: ${terms.join(", ")}`
);
