const cardDestinos = document.querySelector('.cardDestinos');
const cardPontos = document.querySelector('.cardPontos');
const cardHoteis = document.querySelector('.cardHoteis');
const container = document.querySelector('.container');

const addDestino = document.getElementById('addDestino');
const addPonto = document.getElementById('addPonto');
const addHotel = document.getElementById('addHotel');

const btnEdit = document.getElementById('btnEdit');
const btnApply = document.getElementById('btnApply');

const nomeDestino = document.querySelectorAll('.nomeDestino');

const mostrar = () => {
    fetch('http://localhost:3000/destinos')
    .then(res => res.json())
    .then(res => {
        res.forEach((destino, i) => {
            
            console.log(destino);

            const card = cardDestinos.cloneNode(true);
            card.classList.remove('hidden');

            card.querySelector('.nomeDestino').innerHTML = destino.nome;
            card.querySelector('.valorDestino').innerHTML = destino.valor;
            card.querySelector('.data').innerHTML = destino.data.split('T')[0];

            const cardPonto = cardPontos.cloneNode(true);
            const cardHotel = cardHoteis.cloneNode(true);
            
            destino.pontos.forEach((ponto) => {
                cardPonto.innerHTML += `
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <button type="button" id="btnEditPonto" class="btn btn-outline-none"><img src="./assets/edit3.svg" class="w-75"></img></button>
                        <button type="button" id="btnDeletePonto" class="btn btn-outline-none"><img src="./assets/x-square.svg" class="w-75"></img></button>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center text-center">
                        <img src="./assets/map.svg" class="icon2">
                        <span class="card-title fs-4">${ponto.endereco}</br></span>
                    </div>
                    <div>
                        <img src="./assets/phone.svg" class="icon3-2">
                        <span>${ponto.telefone}</br></span>
                    </div>
                    <div>
                        <img src="./assets/dollar-sign.svg" class="icon3-2">
                        <span>${ponto.valor}</br></span>
                    </div>
                </div>
                `;
            });

            destino.hoteis.forEach(hotel => {
                cardHotel.innerHTML += `
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <button type="button" id="btnEditHotel" class="btn btn-outline-none"><img src="./assets/edit3.svg" class="w-75"></img></button>
                        <button type="button" id="btnDeleteHotel" class="btn btn-outline-none"><img src="./assets/x-square.svg" class="w-75"></img></button>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center text-center">
                        <img src="./assets/home.svg" class="icon2">
                        <span class="card-title fs-4">${hotel.nome}</br></span>
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
                        <span>${hotel.email}</br></span>
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
    })
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

btnEdit.addEventListener('click', () => {
    btnApply.classList.toggle('hidden');
    btnEdit.classList.toggle('hidden');
    ableEdit();
});

btnApply.addEventListener('click', () => {
    btnEdit.classList.toggle('hidden');
    btnApply.classList.toggle('hidden');
    update();
});

const ableEdit = () => {
    console.log(nomeDestino);
    for (let i = 0; i < nomeDestino.length; i++) {
        nd = nomeDestino[i];
        nd.setAttribute('contenteditable', 'true');
    }
    nomeDestino[0].setAttribute('contenteditable', 'true');
};

const update = (e) => {
    console.log("ok2");
};