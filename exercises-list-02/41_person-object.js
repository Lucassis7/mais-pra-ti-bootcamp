// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.

const personObject = {
  name: "Fulano",
  age: 19,
};

function addEmail(email) {
  personObject["email"] = email;

  return personObject;
}

console.log(addEmail("fulano@gmail.com"));
