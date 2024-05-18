function loginWithGitHub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=d6d338bdd06c991bc642&scope=user';
    }
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if(error === 'access_denied') {
    window.location.href = 'index.html';
    }