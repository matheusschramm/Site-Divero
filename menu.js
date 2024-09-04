let menuItem  =  document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach(item => 
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
);

// expandindo pelo botao de expandir

var btnExp = document.querySelector('#btnExp');
var ladoMenu = document.querySelector('.menu-lateral');
var logo = document.querySelector('.logo-hidden');

btnExp.addEventListener('click', function(){
    ladoMenu.classList.toggle('expand');
    logo.classList.toggle('logo-divero');
    logo.classList.toggle('logo-hidden');
    
})
