// led = variável local
// var = variável global
// const = variável constante

// const obj =[ 
//   {
//     name: 'Lucas',
//     age: 22,
//     country: 'Brazil'
//   },
//   {
//     name: 'João',
//     age: 22,
//     country: 'Brazil'
//   },
//   {
//     name: 'Pedro',
//     age: 22,
//     country: 'Brazil'
//   }
// ]

// console.log(obj);
// console.warn('AVISO');
// console.error('ERRO');
// console.table(obj);



// i. Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.
// var a = 10;
// var b = 20;
// var c = 30;
// console.log(a + b / c); 

/* ii. Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância a ser percorrida (km) por ele. Calcule e apresente na tela, quanto tempo 
(horas) será necessário para o carro percorrer a distância informada.*/
// var velo = 100;
// var dist = 150;
// console.log(velo / dist);

/* iii. Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) de reajuste do salário. 
Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.*/
// var salario = 1000;
// var ajuste = 15;
// console.log(salario + (salario * ajuste / 100));



// var data = new Date();

// var dia = data.getDate();
// var mes = data.getMonth() + 1;
// var ano = data.getFullYear();

// var anocompleto = `${dia}/${mes}/${ano}`;

// var hora = data.getHours();
// var min = data.getMinutes();

// var horacompleta = `${min}:${hora}`;

// console.log(anocompleto, horacompleta, 'am');



// Math.ceil();  aredonda para cima
// Math.floor(); aredonda para baixo
// Math.round(); para baixo e para cima
// Number.parseInt(); converte para int
// Number.parseFloat();  converte para float



// if(){

// }

// cindição ? true : false; 

// switch(){
//   case 1:
//     break;
//   default:
//     break;
// }

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }


// var lista = 'a b c d e'.split(' ');

// console.log(lista);
// for(let i = 0; i <= lista.length; i++){
//   console.log(lista[i]);
// }

// lista.forEach(item => {
//   console.log(item);
// });


// 1 Desenvolva um programa que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final.

// var preco = 2000;

// if(preco > 1000){
//   console.log(Math.round(preco * 0.92));
// }else{
//   console.log(preco);
// }

// 2 Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário 
// receberá um salário família equivalente a 45 reais por filho. Apresente o salário final.

// var salario = 2500;
// var numFilhos = 3;

// if(salario < 2000){
//   console.log((numFilhos * 45) + salario);
// }else{
//   console.log(salario);
// }

// 1 - Faça um programa que mostre na tela valores no intervalo entre 10 e 200;

// for(var i = 10; i <= 200; i++){
//   console.log(i);
// }

// 2 - Faça um programa que mostre na tela valores no intervalo entre 200 e 10;

// for(var i = 200; i >= 10; i--){
//   console.log(i);
// }