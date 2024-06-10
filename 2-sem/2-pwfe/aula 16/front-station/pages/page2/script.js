const start = document.querySelector('.start');
const click = document.querySelector('.click');
const mostra = document.querySelector('.mostra');

let i = 0;

click.addEventListener('click', function(e) {
    i += 1;
    mostra.innerHTML = `click: ${i}`;
});
