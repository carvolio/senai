const formPessoa = document.querySelector('#formPessoa');
const pessoas = [];

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault();
    pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salario.value));
    criarCard();
})

function criarCard(){
    const cards = document.querySelector('.cards');
    var card = document.querySelector('.card');
    cards.innerHTML = '';
    
    pessoas.forEach(pessoa => {
        var cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector("#nomeValor").innerHTML = pessoa.nome;
        cardNew.querySelector("#salarioValor").innerHTML = pessoa.salario;
        cardNew.querySelector("#salarioBase").innerHTML = pessoa.salarioBase;
        cardNew.querySelector("#salarioLiquido").innerHTML = pessoa.salarioLiquido;
        cards.appendChild(cardNew);
    })
}

// function eliminar(){
//     card.classList.remove('cardNew');
// }

function removerElemento(query){
    var ex = document.querySelector(query);
    if(!ex){
        return;
    }
    ex.parentElement.removeChild(ex);
    // var node = document.getElementById('.cards');
    // if(node.parentNode){
    //     node.parentNode.removeChild(node);
    // }
}

cards.addEventListener('submit', (n) => {
    e.preventDefault();
    removerElemento(cardNew);
})