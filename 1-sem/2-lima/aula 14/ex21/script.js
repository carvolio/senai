
// const resultado = document.querySelector("#resultado");

// function click(){
//   const resultado = document.getElementById("resultado");
//   console.log(resultado);  
//   for(let i = 0; i <= 10; i++){
//   resultado.innerHTML += i;   
// }
// }
// click();

const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");
botao.addEventListener("click", (event)=>{
  for(let i = 0; i <= 10; i++){
    resultado.innerHTML += i; 
    resultado.innerHTML += " ";
  }
})