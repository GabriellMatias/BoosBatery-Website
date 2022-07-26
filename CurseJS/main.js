
function play_sound(idTecla) {
    const element = document.querySelector(idTecla);
    if (element && element.localName === 'audio') {
        element.play();
    }else  alert('Elemento NULO');
    
}

const listTeclas =  document.querySelectorAll('.tecla');


for (let i = 0; i < listTeclas.length; i++) {
    const tecla = listTeclas [i];
    const instrumento =tecla.classList[1];
    const audio = `#som_${instrumento}`;

    tecla.onclick = function () {
        play_sound(audio)
    };

    tecla.onkeydown = function (event){
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
     
    }
    tecla.onkeyup = function(event){
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
    }
    
}
