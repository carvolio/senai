class Marca {
  constructor(nome) {
    this.nome = nome;
  }

  FalarMarca(){
    return `Eu sou o carro da marca ${this.nome}`;
  }
}

class Modelo extends Marca {
  constructor (marca, modelo){
    super(marca);
    this.modelo = modelo;
  }

  FalarModelo(){
    return `${this.FalarMarca()} e sou o modelo ${this.modelo}`;
  }
}

const marca1 = new Marca("carrinho feio");
const marca2 = new Marca("meia boca");

const modelo1 = new Modelo(marca1, "topflex");
const modelo2 = new Modelo(marca1, "ultraultra");
const modelo3 = new Modelo(marca1, "conversivel");
const modelo4 = new Modelo(marca2, "voador");
const modelo5 = new Modelo(marca2, "voador ultra");


