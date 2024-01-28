// alert("oi, sou o javascript, estou esperando o código");

const obj = {};
obj.nome = 'bola', 'raquete';
obj.preco = 39.90;
obj.qtd = 10;
obj.total = function(){
  return obj.preco * obj.qtd;
}
obj.showHTML = () => {
  let str = `<label>nome: </label><label>${obj.nome} </label>`;
  str += `<label>preco: </label><label>${obj.preco} </label>`;
  str += `<label>qtd: </label><label>${obj.qtd} </label>`;
  str += `<label>total: </label><label>${obj.total()} </label>`;
  return str;
}
console.log(obj);
console.log('valor total = R$',obj.total().toFixed(2));


const obj2 = {};
obj2.nome = 'raquete';
obj2.preco = 72;
obj2.qtd = 5;
obj2.total = function(){
  return obj2.preco * obj2.qtd;
}
obj2.showHTML = () => {
  let str = `<label>nome: </label><label>${obj2.nome} </label>`;
  str += `<label>preco: </label><label>${obj2.preco} </label>`;
  str += `<label>qtd: </label><label>${obj2.qtd} </label>`;
  str += `<label>total: </label><label>${obj2.total()} </label>`;
  return str;
}
console.log(obj2);
console.log('valor total = R$',obj2.total().toFixed(2));


const obj3 = {};
obj3.nome = 'rede';
obj3.preco = 20.87;
obj3.qtd = 2;
obj3.total = function(){
  return obj3.preco * obj3.qtd;
}
obj3.showHTML = () => {
  let str = `<label>nome: </label><label>${obj3.nome} </label>`;
  str += `<label>preco: </label><label>${obj3.preco} </label>`;
  str += `<label>qtd: </label><label>${obj3.qtd} </label>`;
  str += `<label>total: </label><label>${obj3.total()} </label>`;
  return str;
}
console.log(obj3);
console.log('valor total = R$',obj3.total().toFixed(2));


const main = document.getElementById('objetos');

const div = document.createElement("div");
div.innerHTML = obj.showHTML();
main.appendChild(div);

const div2 = document.createElement("div");
div2.innerHTML = obj2.showHTML();
main.appendChild(div2);

const div3 = document.createElement("div");
div3.innerHTML = obj3.showHTML();
main.appendChild(div3);

