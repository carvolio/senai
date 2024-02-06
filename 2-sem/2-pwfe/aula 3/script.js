function Mostrar(dados) {
    document.querySelector("#rua").value = dados.logradouro
    document.querySelector("#bairro").value = dados.bairro
    document.querySelector("#cidade").value = dados.localidade
    document.querySelector("#estado").value = dados.uf
    document.querySelector("#ibge").value = dados.ibge
}

async function buscarCep(cep) {
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resposta => resposta.json());
    Mostrar(dados);
}

function Pesquisar() {
    const cep = document.querySelector("#input-cep").value;
    buscarCep(cep);
}
