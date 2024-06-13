const start = document.querySelector('.start');
const click = document.querySelector('.click');
const mostra = document.querySelector('.mostra');
const mostraPonto = document.querySelector('.mostraPonto');


start.addEventListener('click', function(e) {
    let i = 0;
    mostra.innerHTML = `clicks ${i}/10`;

    const dateStart = new Date().getTime();
    mostra.classList.remove('hidden');
    mostraPonto.classList.add('hidden');
    
    click.addEventListener('click', function(e) {
        i += 1;
        mostra.innerHTML = `clicks ${i}/10`;

        if (i === 10) {
            const dateEnd = new Date().getTime();
            mostra.classList.add('hidden');
            mostraPonto.classList.remove('hidden');
        
            const time = Math.floor((dateEnd / 1000) - (dateStart / 1000))
            mostraPonto.innerHTML = `TEMPO: ${time} segundos`;
        };
    });


    
});
