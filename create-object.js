const colecionador = {
  nome: "Davidson de Góes",
  idade: 34,
  tipoColecao: ["Quadrinhos"],
  contato: "davidsongoes@gmail.com",
  adicionarTipo: function (props, type) {
    if (typeof this[props] === "object") this[props].push(type);
  },
};

console.table(colecionador);
console.log("===============================");
console.log(colecionador.nome);
console.log(colecionador["nome"]);
for (i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipoColecao", "HQ" + i);
}
console.table(colecionador);
