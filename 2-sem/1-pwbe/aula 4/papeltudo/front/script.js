const dados = document.getElementById('dados');
const uri = "http://localhost:3000/item"

fetch(uri)
    .then(res => res.json())
    .then(res => {
        res.forEach(it => {
            dados.innerHTML += `
                <tr>
                    <td>${it.id}</td>
                    <td>${it.name}</td>
                    <td>${it.descricao}</td>
                    <td>${it.valor}</td>
                    <td><button>*</button></td>
                    <td><button>x</button></td>
                </tr>
            `;
        });
    });