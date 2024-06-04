// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.

function countStrings(obj) {
  let counter = 0;
  const objectValues = Object.values(obj);

  for (let i = 0; i < objectValues.length; i += 1) {
    if (typeof objectValues[i] === "string") {
      counter += 1;
    }
  }

  return counter;
}

const objectTest = {
  nome: "Maria",
  idade: 25,
  cidade: "Rio de Janeiro",
  hobbies: ["leitura", "viagens"],
  telefone: "1234-5678",
};

console.log(countStrings(objectTest));
