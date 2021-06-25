var hamburguer = document.querySelector('.hamburguer');
var container = document.querySelector('.container');

hamburguer.addEventListener('click', clicar);

function clicar(){
    container.classList.toggle('show-menu');
}
