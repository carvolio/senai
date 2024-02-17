const link_back = "http://localhost:3000";

function bnt_ex (element){
    console.log(element.parentNode.parentNode);
    const livro = element.parentNode.parentNode;
    const id_ex = livro.querySelector(".id_ex").textContent;
    console.log(id_ex);

    const request = new Request(`${link_back}/delete/${id_ex}`, { 
        method: "DELETE",
        headers: new Headers({ "Content-Type": "application/json"})
    });

    fetch(request)
        .then(response => response.json)
        .then(response => console.log(response));
}