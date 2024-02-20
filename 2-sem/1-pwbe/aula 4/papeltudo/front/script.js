const dados = document.getElementById('dados');
const criar = document.getElementById('criar');
const valorTotal = document.querySelector(".valorTotal");
const uri = "http://localhost:3000/item/"


const mostrar = (uri) => {
    dados.innerHTML = "";
    fetch(uri)
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dados.innerHTML += `
                <tr>
                    <td class="id">${it.id}</td>
                    <td>${it.nome}</td>
                    <td>${it.descricao}</td>
                    <td >${it.valor}</td>
                    <td><button onclick="edit(this)">✐</button></td>
                    <td><button onclick="excluir(this)">✖</button></td>
                </tr>
            `;
            let soma = 0;
            res.forEach(it => {
                soma += it.valor;
            });
            console.log(soma);
            valorTotal.innerHTML = `O Valor Total É: ${soma} R$`;
        });
    });
};


window.onload = () => {
    mostrar(uri);
};

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    fetch(uri, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(window.location.reload())
        
});

const excluir = (Element) => {
    const tabela = Element.parentNode.parentNode;
    const id = tabela.querySelector(".id").textContent;
    const query = `${uri} + ${id}`;
    fetch(query, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
        .then(window.location.reload())
};

const update = (Element) => {
    let linha = Element.parentNode.parentNode;
    let celula = linha.cells;
    const id = celula[0].textContent;
    const data = {
        nome: celula[1].innerHTML,
        descricao: celula[2].innerHTML,
        valor: celula[3].innerHTML
    };
    const query = `${uri} + ${id}`;
    fetch(query, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(window.location.reload())
};

const edit = (Element) => {
    let linha = Element.parentNode.parentNode;
    let celula = linha.cells;
    for(let i = 1; i < celula.length - 2; i++) {
        celula[i].setAttribute('contenteditable', 'true');
    };
    Element.innerHTML = '✔';
    Element.setAttribute('onclick', 'update(this)');
};

