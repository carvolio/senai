class decoracao {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class livro {
  constructor(titulo) {
    this.titulo = titulo;
  }
}

class estante {
  constructor() {
    this.decoracoes = [];
    this.livros = [];
  }

  addLivro(livro) {
    this.livros.push(livro);
  }

  addDecoracao(decoracao) {
    this.decoracoes.push(decoracao);
  }
}

const livro1 = new livro("1001 noites");
const livro2 = new livro("e não sobrou nenhum");
const decoracao1 = new decoracao("action figure");
const decoracao2 = new decoracao("peso de papel");

const estante1 = new estante();
estante1.addLivro(livro1);
estante1.addLivro(livro2);
estante1.addDecoracao(decoracao1);
console.log(estante1);

const estante2 = new estante();
console.log(estante2);

const estante3 = new estante();
estante3.addLivro(livro1);
estante3.addLivro(livro2);
estante3.addLivro(livro1);
estante3.addLivro(livro2);
estante3.addDecoracao(decoracao1);
estante3.addDecoracao(decoracao2);
console.log(estante3);


