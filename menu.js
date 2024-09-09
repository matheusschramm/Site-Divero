var menuItem  =  document.querySelectorAll('.item-menu');

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

grupo = document.querySelectorAll('.grupo');
subgrupo = document.querySelectorAll('.grupo .subgrupo');
tipo = document.querySelectorAll('.tipo');

function abreFechaGruposMenu(){
    grupo.forEach(item => 
        item.style.display = 'none'
    );
    this.querySelectorAll('.grupo').forEach(item =>
        item.style.display = 'block'
    );
}

function abreFechaSubgruposMenu(){
    subgrupo.forEach(item => 
        item.style.display = 'none'
    );
    this.querySelectorAll('.subgrupo').forEach(item =>
        item.style.display = 'block'
    );
}



menuItem.forEach((item) =>
    item.addEventListener('click', abreFechaGruposMenu)
);

grupo.forEach((item) =>
    item.addEventListener('click', abreFechaSubgruposMenu)
);

