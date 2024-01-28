const resultado = document.getElementById("resultado");
const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const numInicial = Number(document.getElementById("numInicial").value);
  const numFinal = Number(document.getElementById("numFinal").value);
  for(let i = numInicial; i <= numFinal; i++){
    resultado.innerHTML += i;
    resultado.innerHTML += " ";
  }
})