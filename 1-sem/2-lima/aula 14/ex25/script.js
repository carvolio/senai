const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
  const numero = Number(document.getElementById("numero").value);
  event.preventDefault();
  for(let i = 0; i <= numero; i++){
    resultado.innerHTML += i;
    resultado.innerHTML += " ";
  }
})