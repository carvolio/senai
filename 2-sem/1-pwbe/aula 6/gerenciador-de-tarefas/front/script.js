const formLogin = document.getElementById('formLogin');
const dados = document.getElementById('dados');
const criar = document.getElementById('criar');
const uri = "http://localhost:3000/"

// formLogin.addEventListener('submit', e => {
//     e.preventDefault();
//     const data = {
//         emailLogin: formLogin.emailLogin.value,
//         senhaLogin: formLogin.senhaLogin.value
//     };

//     const request = new Request("http://localhost:3000/login", {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: new Headers({ 
//             'Content-Type': 'application/json'
//         })
//     });

//     fetch(request).then(response => response.redirect("http://127.0.0.1:5500/front/tarefas.html"));

//     console.log(data);
// });

const mostrar = () => {
    dados.innerHTML = "";
    fetch("http://localhost:3000/read")
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dados.innerHTML += `
                <tr>
                    <td class="id">${it.id_tarefas}</td>
                    <td>${it.descricao}</td>
                    <td>${it.dataVencimento.split("T")[0]}</td>
                    <td>${it.status}</td>
                    <td>${it.id_usuarios}</td>
                    <td><button onclick="edit(this)" class="btn">✐</button></td>
                    <td><button onclick="excluir(this)" class="btn">✖</button></td>
                </tr>
            `;
        });
    });
};


window.onload = () => {
    mostrar();
};

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
        descricao: celula[1].innerHTML,
        dataVencimento: celula[2].innerHTML,
        status: celula[3].innerHTML,
        id_usuarios: celula[4].innerHTML
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

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        descricao: criar.descricao.value,
        dataVencimento: criar.dataVencimento.value,
        status: criar.status.value,
        id_usuarios: criar.id_usuarios.value
    };
    fetch("http://localhost:3000/create", {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(window.location.reload())
        
});