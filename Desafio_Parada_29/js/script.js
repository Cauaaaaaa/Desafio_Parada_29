const menu_button = document.getElementsByClassName("menu_botão")[0];
const menu = document.getElementsByClassName("menu")[0];
const links_menu = document.getElementsByClassName("links_menu")[0];
function abrir_menu(abrir){
    if(abrir.type == 'touchstart') abrir.preventDefault();

links_menu.classList.toggle('active');
menu.classList.toggle('active');


}

menu_button.addEventListener('click', abrir_menu);
menu_button.addEventListener('touchstart', abrir_menu);