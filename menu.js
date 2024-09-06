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
    // faz a logo aparecer e desaparecer quando colica para expandir o btnExp
    logo.classList.toggle('logo-divero');
    logo.classList.toggle('logo-hidden');
})

// fazendo aparecer os links de cada modelagem

var btnItemAtivo = document.querySelectorAll('.ativo');

btnItemAtivo.addEventListener('click', function(){
    
})


























// let subtipo_tipo  =  document.querySelectorAll('.tipo');

// function selectTipo(){
//     subtipo_tipo.forEach(item => 
//         item.classList.remove('tipo-ativo')
//     );
//     this.classList.add('tipo-ativo');
// }

// var btni = document.querySelectorAll('.subtipo');
// var btnItemAtivo = document.querySelectorAll('ativo');

// btnSubtipo.addEventListener('click', function(){
    
// })
