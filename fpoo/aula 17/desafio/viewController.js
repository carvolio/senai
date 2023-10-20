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
    cards.appendChild(card);

    pessoas.forEach(pessoa => {
        var cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector("#nomeValor").innerHTML = pessoa.nome;
        cardNew.querySelector("#salarioValor").innerHTML = pessoa.salario;
        cardNew.querySelector("#salarioBase").innerHTML = pessoa.salarioBase;
        cardNew.querySelector("#salarioLiquido").innerHTML = pessoa.salarioLiquido;
        cardNew.querySelector('.id').innerHTML = `${pessoas.indexOf(pessoa)}`;
        cards.appendChild(cardNew);
    })
}

function removerElemento(query){
    query.parentNode.remove();
    pessoas.splice(query.parentNode.querySelector('.id').innerHTML.slice(1), 1);
    criarCard();
}

function editElemento(){

}

