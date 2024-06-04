// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.

const objectTest = {
  name: "Fulano",
  age: 28,
  gender: "M",
  children: ["Luis", "Fernando", "Maria"],
  pets: ["Godofredo", "Juliet", "Cacá"],
  phone: "21558966325",
};

function objectConverter(initObject) {
  const newObject = {};

  const objectKeys = Object.keys(initObject);

  for (let i = 0; i < objectKeys.length; i += 1) {
    if (Array.isArray(initObject[objectKeys[i]])) {
      newObject[objectKeys[i]] = initObject[objectKeys[i]];
    }
  }

  return newObject;
}

console.log(objectConverter(objectTest));
