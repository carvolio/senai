const card = document.querySelectorAll('.card');

card.forEach(function(c, i) {
    c.addEventListener('click', function() {
        window.location.href = `http://127.0.0.1:5500/pages/page${i + 1}/index.html`
    });
});

function loginWithGitHub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=d6d338bdd06c991bc642&scope=user';
    }
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if(error === 'access_denied') {
        window.location.href = 'login.html';
    } 