/*
  48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
  inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
  item em estoque. Escreva uma função que combine os inventários em um único objeto.
  Se um item aparecer em ambas as lojas, some as quantidades.
*/

function sumInventories(inventoryA, inventoryB) {
  const newObject = {};
  const keysA = Object.keys(inventoryA);
  const keysB = Object.keys(inventoryB);

  for (let i = 0; i < keysA.length; i += 1) {
    if (newObject[keysA[i]]) {
      newObject[keysA[i]] += inventoryA[keysA[i]];
    } else {
      newObject[keysA[i]] = inventoryA[keysA[i]];
    }
  }

  for (let j = 0; j < keysB.length; j += 1) {
    if (newObject[keysB[j]]) {
      newObject[keysB[j]] += inventoryB[keysB[j]];
    } else {
      newObject[keysB[j]] = inventoryB[keysB[j]];
    }
  }

  return newObject;
}

const inventarioLojaA = {
  arroz: 25,
  pastaDeDente: 4,
  feijao: 32,
  macarrao: 14,
  oleo: 7,
};

const inventarioLojaB = {
  arroz: 10,
  sabonete: 44,
  fava: 9,
  azeite: 1,
  oleo: 12,
};

console.log("INVENTÓRIO TOTAL:");
console.log(sumInventories(inventarioLojaA, inventarioLojaB));
