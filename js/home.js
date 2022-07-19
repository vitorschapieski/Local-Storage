var botaoCad = document.querySelector('.r-loginLink')
let jaja = document.querySelector('.r-cadLink')

var paginaLogin = document.querySelector('.r-login')
var paginaCad = document.querySelector('.r-cadastro')

function paginaCadastro(){
    paginaLogin.classList.toggle('ativar');
    paginaCad.classList.toggle('ativar');
}

botaoCad.addEventListener('click', paginaCadastro);
jaja.addEventListener('click', paginaCadastro);