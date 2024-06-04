// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.

function objectCreator(objOne, objTwo) {
  const newObject = {};

  const objectOneKeys = Object.keys(objOne);
  const objectTwoKeys = Object.keys(objTwo);

  const allKeys = [...objectOneKeys, ...objectTwoKeys];

  for (let i = 0; i < allKeys.length; i += 1) {
    if (objOne[allKeys[i]]) {
      newObject[allKeys[i]] = objOne[allKeys[i]];
    }

    if (objTwo[allKeys[i]]) {
      newObject[allKeys[i]] = objTwo[allKeys[i]];
    }
  }

  return newObject;
}

const objectTestOne = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
  profissao: "Engenheiro",
  email: "joao@example.com",
};

const objectTestTwo = {
  nome: "Maria",
  idade: 25,
  cidade: "Rio de Janeiro",
  hobbies: ["leitura", "viagens"],
  telefone: "1234-5678",
};

console.log(objectCreator(objectTestOne, objectTestTwo));
