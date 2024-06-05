// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.

function sumarizeSell(sellsArray) {
  const finalObject = {};
  for (let i = 0; i < sellsArray.length; i += 1) {
    if (finalObject[sellsArray[i].seller]) {
      finalObject[sellsArray[i].seller] += sellsArray[i].value;
    } else {
      finalObject[sellsArray[i].seller] = sellsArray[i].value;
    }
  }

  return finalObject;
}

const sellersTest = [
  {
    seller: "Jonas",
    value: 500,
  },
  {
    seller: "Fernando",
    value: 250,
  },
  {
    seller: "Jonas",
    value: 100,
  },
  {
    seller: "Pedro",
    value: 900,
  },
];

console.log(sumarizeSell(sellersTest));
