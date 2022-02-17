const clientes = [
  {
    nome: "Davidson",
    idade: 34,
    email: "davidsongoes@gmail.com",
    dependentes: [
      {
        nome: "Fabiana",
        idade: 31,
        email: "fabianalopesdesousa@gmail.com"
      },
      {
        nome: "Davi",
        idade: 4,
        email: "davilbgoes@gmail.com"
      }
    ]
  },
  {
    nome: "Davi",
    idade: 58,
    email: "davi@gmail.com",
    dependentes: [
      {
        nome: "Helania",
        idade: 49,
        email: "helania@gmail.com"
      },
      {
        nome: "Guilherme",
        idade: 20,
        email: "guilherme@gmail.com"
      }
    ]
  }
];
function adicionaDependentes(lista) {
  let dependentes = [];
  lista.forEach((cliente) => {
    if (cliente.dependentes.length !== 0) {
      dependentes.push(...cliente.dependentes);
    }
  });
  return dependentes;
}
console.table(adicionaDependentes(clientes));
