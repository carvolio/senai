const resultado = document.getElementById("resultado");
const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const numero = Number(document.getElementById("numero").value);
  let fatorial = 1;
  for(let i = 1; i <= numero; i++){
    fatorial *= i;
    resultado.innerHTML = fatorial;
  }
})