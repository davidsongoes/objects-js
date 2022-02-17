const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "Capa Élfica +2",
};

const guerreiro = {
  fichaGuerreiro,
  equipoGuerreiro,
};

const guerreiroSpread = {
  ...fichaGuerreiro,
  ...equipoGuerreiro,
};
console.log(guerreiro);
console.log(guerreiroSpread);
