// alert("oi");

class coisa{
  constructor(nome, preco, qtd){
    this.nome = nome;
    this.preco = preco;
    this.qtd = qtd;
  }
  total(){
    return this.preco * this.qtd;
  }
  showHTML(){
    let str = `<label>nome: </label><label>${this.nome} </label>`;
    str += `<label>preco: </label><label>${this.preco} </label>`;
    str += `<label>qtd: </label><label>${this.qtd} </label>`;
    str += `<label>total: </label><label>${this.total().toFixed(2)} </label>`;
    return str;
  }
}

const obj = new coisa('cadeira', 140.90, 2);
const obj2 = new coisa('mesa', 500.80, 5);
const obj3 = new coisa('janela', 765.90, 17);
const obj4 = new coisa('aquario', 4690.90, 1);

const main = document.getElementById('objetos');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

div.innerHTML = obj.showHTML();
div2.innerHTML = obj2.showHTML();
div3.innerHTML = obj3.showHTML();
div4.innerHTML = obj4.showHTML();

main.appendChild(div);
main.appendChild(div2);
main.appendChild(div3);
main.appendChild(div4);


