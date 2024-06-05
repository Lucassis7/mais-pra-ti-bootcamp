/*
  49. Você recebe um array de objetos representando transações financeiras. Cada
  transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
  onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
  essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function sumarizeTransactions(transactions) {
  const newObject = {};

  for (let i = 0; i < transactions.length; i += 1) {
    if (newObject[transactions[i].categoria]) {
      newObject[transactions[i].categoria].push(transactions[i].valor);
      newObject["subtotal_" + transactions[i].categoria] +=
        transactions[i].valor;
    } else {
      newObject[transactions[i].categoria] = [transactions[i].valor];
      newObject["subtotal_" + transactions[i].categoria] =
        transactions[i].valor;
    }
  }

  return newObject;
}

const transactionsTest = [
  { id: 1, valor: 150.75, data: "2023-06-01", categoria: "alimentacao" },
  { id: 2, valor: 89.99, data: "2023-06-02", categoria: "lazer" },
  { id: 3, valor: 1200, data: "2023-06-03", categoria: "salario" },
  { id: 4, valor: 45.5, data: "2023-06-04", categoria: "lazer" },
  { id: 5, valor: 200, data: "2023-06-05", categoria: "transporte" },
];

console.log(sumarizeTransactions(transactionsTest));
