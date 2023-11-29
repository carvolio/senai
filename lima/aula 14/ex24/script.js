const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener("click", (event)=>{
  for(let i = 10; i > 0; i--){
    resultado.innerHTML += i;
    resultado.innerHTML += " ";
  }
})