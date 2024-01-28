const resultado = document.getElementById("resultado");
const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const numero = Number(document.getElementById("numero").value);
  for(let i = 1; i <= 10; i++){
    resultado.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }
})