const objectPerson = {
  nome: "Fabiana",
  idade: 31,
  email: "fabianalopesdesousa@gmail.com"
};

const jsonPerson = JSON.stringify(objectPerson);
const objectPersonAfter = JSON.parse(jsonPerson);
console.log(jsonPerson);
console.log(objectPersonAfter);
