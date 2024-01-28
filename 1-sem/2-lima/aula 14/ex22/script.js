const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener("click", (event)=>{
  for(let i = 0; i <= 10; i++){
    if(i % 2 == 0 && i != 0){
      resultado.innerHTML += `<mark>${i}</mark>`;
      resultado.innerHTML += " ";
    }else{
      resultado.innerHTML += i;
      resultado.innerHTML += " ";
    }
  }
})