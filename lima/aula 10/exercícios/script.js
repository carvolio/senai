function ex1(){
  let a = Number(document.querySelector('#a').value);
  let b = Number(document.querySelector('#b').value);
  let c = Number(document.querySelector('#c').value);
  console.log((a + b) / c);
  document.querySelector('#mostraEx1').innerHTML = `${(a+b)/c}`;
}

function ex2(){
  let velo = Number(document.querySelector('#velo').value);
  let dist = Number(document.querySelector('#dist').value);
  console.log(velo / dist);
  document.querySelector('#mostraEx2').innerHTML = `${velo / dist} horas até o destino`;
}

function ex3(){
  let salario = Number(document.querySelector('#salario').value);
  let reajuste = Number(document.querySelector('#reajuste').value);
  console.log(((salario / 100) * reajuste) + salario);
  document.querySelector('#mostraEx3').innerHTML = `novo salário: ${((salario / 100) * reajuste) + salario}`;
}

function ex4(){
  let vitorias = Number(document.querySelector('#vitorias').value);
  let empates = Number(document.querySelector('#empates').value);
  let pontos = (vitorias * 3) + empates;
  let time = document.querySelector('#time').value;
  console.log(pontos);
  document.querySelector('#mostraEx4').innerHTML = `${time} tem ${pontos} pontos`;
}

function ex5(){
  let numeroN = Number(document.querySelector('#numeroN').value);
  console.log(`${numeroN - 1} e ${numeroN + 1}`);
  document.querySelector('#mostraEx5').innerHTML = `${numeroN - 1} e ${numeroN + 1}`;
}

function ex6(){
  let distancia6 = Number(document.querySelector('#distancia6').value);
  console.log(`${distancia6 / 900}h`);
  document.querySelector('#mostraEx6').innerHTML = `${distancia6 / 900} horas para chegar ao destino`;
}

function ex7(){
  let caminhao = Number(document.querySelector('#caminhao').value);
  let alqueire = Number(document.querySelector('#alqueire').value);
  console.log(`${alqueire * 250}` / `${caminhao * 18}`);
  document.querySelector(`#mostraEx7`).innerHTML = `${(alqueire * 250) / (caminhao * 18)} viagems`;
}

function ex8(){
  let raio = Number(document.querySelector('#raio').value);
  let altura = Number(document.querySelector('#altura').value);
  console.log(`área = ${2 * 3 * raio * (raio + altura)}cm2 e volume = ${3 * (raio * raio) * altura}cm3`);
  document.querySelector(`#mostraEx8`).innerHTML = `área = ${2 * 3 * raio * (raio + altura)}cm2 e volume = ${3 * (raio * raio) * altura}cm3`;
}

function ex9(){
  let mercadoria = document.querySelector('#mercadoria').value;
  let preco = Number(document.querySelector('#preco').value);
  console.log(`${mercadoria} tem o novo valor de: ${preco * 1.05}R$`);
  document.querySelector(`#mostraEx9`).innerHTML = `${mercadoria} tem o novo valor de: ${preco * 1.05} R$`;
}

function ex10(){
  let cidade = document.querySelector('#cidade').value;
  let eleitores = Number(document.querySelector('#eleitores').value);
  let votos = Number(document.querySelector('#votos').value);
  console.log(`${cidade} teve ${(100 * votos) / eleitores}% de eleitores votantes!`);
  document.querySelector(`#mostraEx10`).innerHTML = `${cidade} teve ${(100 * votos) / eleitores}% de eleitores votantes!`;
}

