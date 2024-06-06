const cardDestinos = document.querySelector(".cardDestinos");
const cardPontos = document.querySelector(".cardPontos");
const cardHoteis = document.querySelector(".cardHoteis");
const container = document.querySelector(".container");

const addDestino = document.getElementById("addDestino");
const addPonto = document.getElementById("addPonto");
const addHotel = document.getElementById("addHotel");

const nomeDestino = document.querySelectorAll(".nomeDestino");

const mostrar = () => {
  fetch("http://localhost:3000/destinos")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((destino, i) => {
        const card = cardDestinos.cloneNode(true);

        const editBtn = card.querySelector(".btnEditDestino");
        const applyBtn = card.querySelector(".btnApplyDestino");
        const nomeDestino = card.querySelector(".nomeDestino");
        const valorDestino = card.querySelector(".valorDestino");
        const datas = card.querySelector(".data");

        card.classList.remove("hidden");

        card.querySelector(".nomeDestino").innerHTML = destino.nome;
        card.querySelector(".valorDestino").innerHTML = destino.valor;
        card.querySelector(".data").innerHTML = destino.data.split("T")[0];

        editBtn.addEventListener("click", () => {
          editBtn.classList.toggle("hidden");
          applyBtn.classList.toggle("hidden");
          editDestino(nomeDestino, valorDestino, datas);
        });

        applyBtn.addEventListener("click", () => {
          editBtn.classList.toggle("hidden");
          applyBtn.classList.toggle("hidden");
          updateDestino(nomeDestino, valorDestino, datas, i);
        });

        destino.pontos.forEach((ponto, j) => {
          const cardPonto = cardPontos.cloneNode(true);
          cardPonto.innerHTML += `
          <div class="card-body">
              <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-outline-none" onclick="editPontos(${i}, ${j}, ${ponto.id}, ${ponto.id_destino})" id="btnEditPonto${i}${j}"><img src="./assets/edit3.svg" class="w-75"></img></button>
                  <button type="button" class="btn btn-outline-none" id="btnDeletePonto${i}${j}"><img src="./assets/x-square.svg" class="w-75"></img></button>
              </div>
              <hr>
              <div class="d-flex align-items-center">
                  <img src="./assets/map.svg" class="icon2">
                  <span class="title2" id="nomePonto${i}${j}">${ponto.endereco}</br></span>
              </div>
              <div>
                  <img src="./assets/phone.svg" class="icon3-2">
                  <span id="telPonto${i}${j}">${ponto.telefone}</br></span>
              </div>
              <div>
                  <img src="./assets/dollar-sign.svg" class="icon3-2">
                  <span id="valorPonto${i}${j}">${ponto.valor}</br></span>
              </div>
          </div>
          `;
          card.appendChild(cardPonto);
        });

        destino.hoteis.forEach((hotel, a) => {
            const cardHotel = cardHoteis.cloneNode(true);

            cardHotel.innerHTML += `
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                            <button type="button" id="btnEditHotel${i}${a}" class="btn btn-outline-none" onclick="editHoteis(${i}, ${a}, ${hotel.id}, ${hotel.id_destino})"><img src="./assets/edit3.svg" class="w-75"></img></button>
                            <button type="button" id="btnDeleteHotel${i}${a}" class="btn btn-outline-none"><img src="./assets/x-square.svg" class="w-75"></img></button>
                        </div>
                        <hr>
                        <div class="d-flex align-items-center">
                            <img src="./assets/home.svg" class="icon2">
                            <span class="title2" id="nomeHotel${i}${a}">${hotel.nome}</br></span>
                        </div>
                        <div>
                            <img src="./assets/dollar-sign.svg" class="icon3-2">
                            <span id="valorHotel${i}${a}">${hotel.valor}</br></span>
                        </div>
                        <div>
                            <img src="./assets/check-circle.svg" class="icon3-2">
                            <span id="avaliacaoHotel${i}${a}">${hotel.avaliacao}</br></span>
                        </div>
                        <div>
                            <img src="./assets/at-sign.svg" class="icon3-2">
                            <span id="emailHotel${i}${a}">${hotel.email}</br></span>
                        </div>
                        <div>
                            <img src="./assets/chrome.svg" class="icon3-2">
                            <span id="siteHotel${i}${a}">${hotel.site}</br></span>
                        </div>
                    </div>
                    `;
                    
                    card.appendChild(cardHotel);
                });

        container.appendChild(card);

      });
    });
};

window.onload = () => {
  mostrar();
};

addDestino.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nome: addDestino.nomeDestino.value,
    valor: addDestino.valorDestino.value,
    data: addDestino.date.value,
  };

  const request = new Request("http://localhost:3000/destinos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  fetch(request).then((response) =>
    response.redirect("http://127.0.0.1:5500/front/index.html")
  );

  console.log(data);
});

addPonto.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id_destino: Number(addPonto.idDestino.value),
    endereco: addPonto.endereco.value,
    telefone: addPonto.telefone.value,
    valor: addPonto.valorPonto.value,
  };

  const request = new Request("http://localhost:3000/pontos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  fetch(request).then((response) =>
    response.redirect("http://127.0.0.1:5500/front/index.html")
  );

  console.log(data);
});

addHotel.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id_destino: Number(addHotel.idDestinoHotel.value),
    nome: addHotel.nomeHotel.value,
    valor: addHotel.valorHotel.value,
    avaliacao: addHotel.avaliacao.value,
    email: addHotel.email.value,
    site: addHotel.site.value,
  };

  const request = new Request("http://localhost:3000/hoteis", {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  fetch(request).then((response) =>
    response.redirect("http://127.0.0.1:5500/front/index.html")
  );

  console.log(data);
});

const editDestino = (nomeDestino, valorDestino, datas) => {
  console.log("editar destino ok");
  nomeDestino.setAttribute("contentEditable", "true");
  valorDestino.setAttribute("contentEditable", "true");
  datas.setAttribute("contentEditable", "true");
};

const updateDestino = (nomeDestino, valorDestino, datas, i) => {
  console.log("update destino okk");

  const editadoNome = nomeDestino.textContent;
  const editVaDes = valorDestino.textContent;
  const editDatas = datas.textContent;

  data = {
    nome: editadoNome,
    valor: editVaDes,
    data: editDatas,
  };

  console.log(data);

  const query = `http://localhost:3000/destinos/${i + 1}`;
  console.log(query);
  fetch(query, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  nomeDestino.setAttribute("contentEditable", "false");
  valorDestino.setAttribute("contentEditable", "false");
  datas.setAttribute("contentEditable", "false");

};

function editPontos(i, j, pontoId, idDestino){
    // console.log(i, j, pontoId);
    const btnEditPonto = document.getElementById(`btnEditPonto${i}${j}`);
    const nomePonto = document.getElementById(`nomePonto${i}${j}`);
    const telPonto = document.getElementById(`telPonto${i}${j}`);
    const valorPonto = document.getElementById(`valorPonto${i}${j}`);

    btnEditPonto.innerHTML = `<img src="./assets/save.svg" class="w-75"></img>`

    nomePonto.setAttribute("contentEditable", "true");
    telPonto.setAttribute("contentEditable", "true");
    valorPonto.setAttribute("contentEditable", "true");

    btnEditPonto.addEventListener("click", () => updatePontos(btnEditPonto, nomePonto, telPonto, valorPonto, pontoId, idDestino)); 
};


const updatePontos = (btnEditPonto, nomePonto, telPonto, valorPonto, pontoId, idDestino) => {
    data = {
        id_destino: idDestino,
        endereco: nomePonto.textContent,
        telefone: telPonto.textContent,
        valor: valorPonto.textContent
    };
  
    const query = `http://localhost:3000/pontos/${pontoId}`;
    // console.log(query);
    fetch(query, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    nomePonto.setAttribute("contentEditable", "false");
    telPonto.setAttribute("contentEditable", "false");
    valorPonto.setAttribute("contentEditable", "false");

    btnEditPonto.innerHTML = `<img src="./assets/edit3.svg" class="w-75"></img>`;
};

const editHoteis = (i, a, idHotel, idDestino) => {
    console.log(i, a, idHotel, idDestino);

    const btnEditHotel = document.getElementById(`btnEditHotel${i}${a}`);
    const nomeHotel = document.getElementById(`nomeHotel${i}${a}`);
    const valorHotel = document.getElementById(`valorHotel${i}${a}`);
    const avaliacaoHotel = document.getElementById(`avaliacaoHotel${i}${a}`);
    const emailHotel = document.getElementById(`emailHotel${i}${a}`);
    const siteHotel = document.getElementById(`siteHotel${i}${a}`);

    btnEditHotel.innerHTML = `<img src="./assets/save.svg" class="w-75"></img>`;

    nomeHotel.setAttribute("contentEditable", "true");
    valorHotel.setAttribute("contentEditable", "true");
    avaliacaoHotel.setAttribute("contentEditable", "true");
    emailHotel.setAttribute("contentEditable", "true");
    siteHotel.setAttribute("contentEditable", "true");

    btnEditHotel.addEventListener("click", () => updateHoteis(btnEditHotel, nomeHotel, valorHotel, avaliacaoHotel, emailHotel, siteHotel, idHotel, idDestino));
};

const updateHoteis = (btnEditHotel, nomeHotel, valorHotel, avaliacaoHotel, emailHotel, siteHotel, idHotel, idDestino) => {
    data = {
        id_destino: idDestino,
        nome: nomeHotel.textContent,
        valor: valorHotel.textContent,
        avaliacao: avaliacaoHotel.textContent,
        email: emailHotel.textContent,
        site: siteHotel.textContent
    };
    // console.log(data);

    const query = `http://localhost:3000/hoteis/${idHotel}`;
    // console.log(query);
    fetch(query, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    nomeHotel.setAttribute("contentEditable", "false");
    valorHotel.setAttribute("contentEditable", "false");
    avaliacaoHotel.setAttribute("contentEditable", "false");
    emailHotel.setAttribute("contentEditable", "false");
    siteHotel.setAttribute("contentEditable", "false");

    btnEditHotel.innerHTML = `<img src="./assets/edit3.svg" class="w-75"></img>`;
}