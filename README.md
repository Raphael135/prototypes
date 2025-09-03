# 📘 Documentação: Prototypes em JavaScript

## 🔹 O que é Prototype?

No JavaScript, **prototype** é um mecanismo pelo qual objetos podem herdar propriedades e métodos de outros objetos.
Ou seja: todo objeto em JavaScript tem uma "ligação oculta" (chamada `[[Prototype]]`) para outro objeto, que chamamos de **protótipo**.

👉 Quando você tenta acessar uma propriedade em um objeto e ela **não existe nele**, o JavaScript vai procurar no protótipo.

---

## 🔹 Prototype em Funções Construtoras

Quando criamos objetos usando **funções construtoras** ou **classes**, o JavaScript armazena métodos no `prototype` para que todos os objetos criados compartilhem esses métodos (economizando memória).

Exemplo com função construtora:

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// adicionando um método no prototype
Pessoa.prototype.falar = function() {
  console.log(`Olá, meu nome é ${this.nome}`);
};

const p1 = new Pessoa("Ana", 25);
const p2 = new Pessoa("João", 30);

p1.falar(); // Olá, meu nome é Ana
p2.falar(); // Olá, meu nome é João
```

➡️ Aqui, o método `falar` não está duplicado dentro de cada objeto criado, mas sim no **prototype de Pessoa**.

---

## 🔹 Cadeia de Prototypes (Prototype Chain)

Se uma propriedade não for encontrada no objeto, o JavaScript procura no seu protótipo.
E se não achar ali, procura no protótipo do protótipo, formando uma **cadeia**.

Exemplo:

```js
const animal = {
  tipo: "Desconhecido",
  respirar() {
    console.log("Respirando...");
  }
};

const cachorro = Object.create(animal);
cachorro.tipo = "Cachorro";
cachorro.latir = function() {
  console.log("Au au!");
};

cachorro.respirar(); // herdado de animal
cachorro.latir();    // método próprio
```

---

## 🔹 `__proto__` vs `prototype`

* **`prototype`** → É usado em **funções construtoras** (ou classes) para definir quais métodos/atributos serão herdados pelos objetos criados.
* **`__proto__`** → É a referência interna de cada objeto para o seu protótipo.
  Exemplo:

```js
function Carro(modelo) {
  this.modelo = modelo;
}

Carro.prototype.ligar = function() {
  console.log("Carro ligado!");
};

const c1 = new Carro("Fusca");

// o objeto c1 tem __proto__ apontando para Carro.prototype
console.log(c1.__proto__ === Carro.prototype); // true
```

---

## 🔹 Prototype em Classes (Sintaxe Moderna)

Desde o ES6, podemos usar `class`, mas por baixo dos panos ainda é **prototype** que funciona.

```js
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Oi, eu sou ${this.nome}`);
  }
}

const maria = new Pessoa("Maria");
maria.falar(); // Oi, eu sou Maria
```

➡️ O método `falar` continua sendo adicionado no `prototype` da classe.

---

## 🔹 Resumindo

* Todo objeto em JS tem um **prototype**.
* Métodos comuns devem ser colocados no **prototype** para serem compartilhados.
* A busca de propriedades segue a **Prototype Chain**.
* `prototype` → usado em construtores/classes.
* `__proto__` → ligação interna de cada objeto com seu protótipo.

Quer que eu faça também uns **exercícios práticos** para você treinar prototypes na prática?
