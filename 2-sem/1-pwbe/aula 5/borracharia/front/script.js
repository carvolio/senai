const dadosProdutos = document.getElementById('dadosProdutos');
const dadosFornecedores = document.getElementById('dadosFornecedores');
const dadosClientes = document.getElementById('dadosClientes');
const uri = "http://localhost:3000/"

const mostrarProduto = (uri) => {
    fetch("http://localhost:3000/produtos")
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dadosProdutos.innerHTML += `
                <tr>
                    <td>${it.id_produtos}</td>
                    <td>${it.nome}</td>
                    <td>${it.valor}</td>
                    <td>${it.id_fornecedor}</td>
                    <td><button onclick="edit(this)">✐</button></td>
                    <td><button onclick="excluir(this)">✖</button></td>
                </tr>
            `;
        });
    });
};

const mostrarFornecedores = (uri) => {
    fetch("http://localhost:3000/fornecedores")
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dadosFornecedores.innerHTML += `
                <tr>
                    <td>${it.id_fornecedores}</td>
                    <td>${it.nome}</td>
                    <td>${it.endereco}</td>
                    <td><button onclick="edit(this)">✐</button></td>
                    <td><button onclick="excluir(this)">✖</button></td>
                </tr>
            `;
        });
    });
};

const mostrarClientes = (uri) => {
    fetch("http://localhost:3000/clientes")
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dadosClientes.innerHTML += `
                <tr>
                    <td>${it.id_clientes}</td>
                    <td>${it.nome}</td>
                    <td>${it.endereco}</td>
                    <td><button onclick="edit(this)">✐</button></td>
                    <td><button onclick="excluir(this)">✖</button></td>
                </tr>
            `;
        });
    });
};

window.onload = () => {
    if (location.href === "http://127.0.0.1:5500/front/produto.html"){
        mostrarProduto(uri);
    } else if (location.href === "http://127.0.0.1:5500/front/fornecedores.html"){
        mostrarFornecedores(uri);
    } else if (location.href === "http://127.0.0.1:5500/front/clientes.html"){
        mostrarClientes(uri);
    }
};

criarProduto.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: criarProduto.nome.value,
        valor: criarProduto.valor.value,
        id_fornecedor: criarProduto.id_fornecedor.value
    };
    fetch("http://localhost:3000/produtos", {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    window.open("http://127.0.0.1:5500/front/produto.html")
});