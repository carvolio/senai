const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener("click", (event)=>{
  for(let i = 0; i <= 10; i+=2){
    if(i != 0){
      resultado.innerHTML += i; 
      resultado.innerHTML += " ";
    }
  }
})