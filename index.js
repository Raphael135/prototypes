const animal = {
  som: "Um som de animal",
  tipo: "animal",
  emitirSom: function () {
    console.log(this.som);
  },
};

const gato = {
  som: "miau",
  tipo: "gato",
  emitirSom: function () {
    console.log(`${this.som}  ${this.som}`);
  },
};

Object.setPrototypeOf(gato, animal);
gato.emitirSom();

const gatoRaivoso = {
  tipo: "gatoRaivoso",
  miarForte: function () {
    console.log(this.som.toUpperCase());
  },
};

Object.setPrototypeOf(gatoRaivoso, gato);
gatoRaivoso.miarForte();

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(
    `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`
  );
};

const p1 = new Pessoa("Raphael", 22);
const p2 = new Pessoa("Bruna", 20);

p1.falar();
p2.falar();
