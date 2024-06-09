const card = document.querySelectorAll('.card');

card.forEach(function(c, i) {
    c.addEventListener('click', function() {
        window.location.href = `http://127.0.0.1:5500/games/game${i + 1}/index.html`
    });
});