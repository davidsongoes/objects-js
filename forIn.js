const person = {
  nome: "Davidson",
  idade: 34,
  email: "davidsongoes@gmail.com",
  telefones: [
    {
      tipo: "residencial",
      ddd: 61,
      número: 12345678
    },
    {
      tipo: "celular",
      ddd: 61,
      número: 98765432
    }
  ]
};

for (let data in person) {
  if (typeof person[data] === "object") {
    console.log(`Telefones:\n${printIN(person[data])}`);
  } else {
    console.log(`${data}: ${person[data]}`);
  }
}

function printIN(objectData) {
  let text = "";
  objectData.map((data) => {
    for (let info in data) {
      text += `-${info}: ${data[info]}\n`;
    }
    text += `------------------\n`;
  });
  return text;
}
