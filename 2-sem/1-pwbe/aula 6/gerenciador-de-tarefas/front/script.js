const formLogin = document.getElementById('formLogin');
const uri = "http://localhost:3000/login"

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        emailLogin: formLogin.emailLogin.value,
        senhaLogin: formLogin.senhaLogin.value
    };

    const request = new Request(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })
    });

    fetch(request).then(response => response.redirect("http://127.0.0.1:5500/front/tarefas.html"));

    console.log(data);
});