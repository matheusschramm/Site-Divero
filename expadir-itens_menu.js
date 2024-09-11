document.addEventListener('DOMContentLoaded', function(){
    // Expande ou recolhe grupos
    document.querySelectorAll('.item-menu').forEach(function(itemMenu){
        itemMenu.addEventListener('click', function(){
            document.querySelectorAll('.grupo').forEach(function(grupo) {
                grupo.classList.remove('expandido');
            });

            let grupos = this.querySelectorAll('.grupo');
            if(grupos){
                grupos.forEach(item => 
                    item.classList.toggle('expandido')
                )
            }
        });
    });

    // Enpande ou recolhe os subgrupos
    document.querySelectorAll('.grupo > a').forEach(function(grupoA){

        grupoA.addEventListener('click', function(){
            let subgrupos = this.parentElement.querySelectorAll('.subgrupo');
            subgrupos.forEach(function(subgrupo){
                subgrupo.classList.toggle('expandido');
            })
            
        });
    });

    // Expande ou recolhe os tipos 
    document.querySelectorAll('.subgrupo > a').forEach(function(subgrupoA){
       
        subgrupoA.addEventListener('click', function(){
            let tipos = this.parentElement.querySelectorAll('.tipo');
             tipos.forEach(function(tipo){
                 tipo.classList.toggle('expandido');
             })
            
        });
    });
});