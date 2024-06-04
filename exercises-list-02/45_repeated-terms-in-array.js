// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.

function objectCountTerms(stringArray) {
  const newObject = {};

  for (let i = 0; i < stringArray.length; i += 1) {
    if (newObject[stringArray[i]]) {
      newObject[stringArray[i]] += 1;
    } else {
      newObject[stringArray[i]] = 1;
    }
  }

  return newObject;
}

console.log(objectCountTerms(["a", "b", "a", "c", "d", "e", "a", "b"]));
