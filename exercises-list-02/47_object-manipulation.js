// 47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.

function createNewObject(obj, func) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  const newObject = {};

  for (let i = 0; i < values.length; i += 1) {
    newObject[keys[i]] = func(values[i]);
  }

  return newObject;
}

function squareNumbers(num) {
  return num ** num;
}

const objTest = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(createNewObject(objTest, squareNumbers));
