const cardDestinos = document.querySelector('.cardDestinos');
const cardPontos = document.querySelector('.cardPontos');
const cardHoteis = document.querySelector('.cardHoteis');
const container = document.querySelector('.container');

const addDestino = document.getElementById('addDestino');
const addPonto = document.getElementById('addPonto');
const addHotel = document.getElementById('addHotel');

const nomeDestino = document.querySelectorAll('.nomeDestino');

const mostrar = () => {
    fetch('http://localhost:3000/destinos')
    .then(res => res.json())
    .then(res => {
        res.forEach((destino, i) => {
            
            console.log(destino);

            const card = cardDestinos.cloneNode(true);

            const editBtn = card.querySelector('.btnEditDestino');
            const applyBtn = card.querySelector('.btnApplyDestino');
            const nomeDestino = card.querySelector('.nomeDestino');
            const valorDestino = card.querySelector('.valorDestino');
            const datas = card.querySelector('.data');

            card.classList.remove('hidden');

            card.querySelector('.nomeDestino').innerHTML = destino.nome;
            card.querySelector('.valorDestino').innerHTML = destino.valor;
            card.querySelector('.data').innerHTML = destino.data.split('T')[0];

            editBtn.addEventListener('click', () => {
                editBtn.classList.toggle('hidden');
                applyBtn.classList.toggle('hidden');
                editDestino(nomeDestino, valorDestino, datas);
            });

            applyBtn.addEventListener('click', () => {
                editBtn.classList.toggle('hidden');
                applyBtn.classList.toggle('hidden');
                updateDestino(nomeDestino, valorDestino, datas, i);
            });

            const cardPonto = cardPontos.cloneNode(true);
            const cardHotel = cardHoteis.cloneNode(true);
            
            destino.pontos.forEach((ponto) => {

                cardPonto.innerHTML += `
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-outline-none btnEditPonto"><img src="./assets/edit3.svg" class="w-75"></img></button>
                        <button type="button" class="btn btn-outline-none btnApplyPonto hidden"><img src="./assets/save.svg" class="w-75"></img></button>
                        <button type="button" class="btn btn-outline-none btnDeletePonto"><img src="./assets/x-square.svg" class="w-75"></img></button>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <img src="./assets/map.svg" class="icon2">
                        <span class="title2 nomePonto">${ponto.endereco}</br></span>
                    </div>
                    <div>
                        <img src="./assets/phone.svg" class="icon3-2">
                        <span class="telPonto">${ponto.telefone}</br></span>
                    </div>
                    <div>
                        <img src="./assets/dollar-sign.svg" class="icon3-2">
                        <span class="valorPonto">${ponto.valor}</br></span>
                    </div>
                </div>
                `;

                const idPonto = ponto.id;
                const btnEditPonto = cardPonto.querySelector('.btnEditPonto');
                const btnApplyPonto = cardPonto.querySelector('.btnApplyPonto');
                const nomePonto = cardPonto.querySelector('.nomePonto');
                const telPonto = cardPonto.querySelector('.telPonto');
                const valorPonto = cardPonto.querySelector('.valorPonto');

                btnEditPonto.addEventListener('click', () => {
                    btnEditPonto.classList.toggle('hidden');
                    btnApplyPonto.classList.toggle('hidden');
                    editPontos(nomePonto, telPonto, valorPonto);
                });

                btnApplyPonto.addEventListener('click', () => {
                    btnEditPonto.classList.toggle('hidden');
                    btnApplyPonto.classList.toggle('hidden');
                    updatePontos(nomePonto, telPonto, valorPonto, idPonto);
                });

            });



            destino.hoteis.forEach(hotel => {
                cardHotel.innerHTML += `
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <button type="button" id="btnEditHotel" class="btn btn-outline-none"><img src="./assets/edit3.svg" class="w-75"></img></button>
                        <button type="button" id="btnDeleteHotel" class="btn btn-outline-none"><img src="./assets/x-square.svg" class="w-75"></img></button>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <img src="./assets/home.svg" class="icon2">
                        <span class="title2">${hotel.nome}</br></span>
                    </div>
                    <div>
                        <img src="./assets/dollar-sign.svg" class="icon3-2">
                        <span>${hotel.valor}</br></span>
                    </div>
                    <div>
                        <img src="./assets/check-circle.svg" class="icon3-2">
                        <span>${hotel.avaliacao}</br></span>
                    </div>
                    <div>
                        <img src="./assets/at-sign.svg" class="icon3-2">
                        <span">${hotel.email}</br></span>
                    </div>
                    <div>
                        <img src="./assets/chrome.svg" class="icon3-2">
                        <span>${hotel.site}</br></span>
                    </div>
                </div>
                `;
            });

            container.appendChild(card);
            card.appendChild(cardPonto);
            card.appendChild(cardHotel);
        });
    });
};


window.onload = () => {
    mostrar();
};

addDestino.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: addDestino.nomeDestino.value,
        valor: addDestino.valorDestino.value,
        data: addDestino.date.value
    };

    const request = new Request("http://localhost:3000/destinos", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })
    });

    fetch(request).then(response => response.redirect("http://127.0.0.1:5500/front/index.html"));

    console.log(data);
});

addPonto.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        id_destino: Number(addPonto.idDestino.value),
        endereco: addPonto.endereco.value,
        telefone: addPonto.telefone.value,
        valor: addPonto.valorPonto.value
    };

    const request = new Request("http://localhost:3000/pontos", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })
    });

    fetch(request).then(response => response.redirect("http://127.0.0.1:5500/front/index.html"));

    console.log(data);
});

addHotel.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        id_destino: Number(addHotel.idDestinoHotel.value),
        nome: addHotel.nomeHotel.value,
        valor: addHotel.valorHotel.value,
        avaliacao: addHotel.avaliacao.value,
        email: addHotel.email.value,
        site: addHotel.site.value
    };

    const request = new Request("http://localhost:3000/hoteis", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })
    });

    fetch(request).then(response => response.redirect("http://127.0.0.1:5500/front/index.html"));

    console.log(data);
});

const editDestino = (nomeDestino, valorDestino, datas) => {
    console.log("editar destino ok");
    nomeDestino.setAttribute("contentEditable", "true");
    valorDestino.setAttribute("contentEditable", "true");
    datas.setAttribute("contentEditable", "true");

};

const updateDestino = (nomeDestino, valorDestino, datas, i) => {
    console.log("update destino okk")

    const editadoNome = nomeDestino.textContent;
    const editVaDes = valorDestino.textContent;
    const editDatas = datas.textContent;
    
    data = {
        nome: editadoNome,
        valor: editVaDes,
        data: editDatas
    };

    console.log(data);

    const query = `http://localhost:3000/destinos/${i + 1}`;
    console.log(query);
    fetch(query, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const editPontos = (nomePonto, telPonto, valorPonto) => {
    console.log("editar pontos ok");
    nomePonto.setAttribute('contentEditable', 'true');
    telPonto.setAttribute('contentEditable', 'true');
    valorPonto.setAttribute('contentEditable', 'true');
};

const updatePontos = (nomePonto, telPonto, valorPonto, idPonto) => {
    console.log("update pontos ok");
    console.log(idPonto);
};