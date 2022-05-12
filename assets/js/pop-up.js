function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
    modal.classList.add('mostrar')
    modal.addEventListener('click', function(fechar){
        if(fechar.target.id == modalID || fechar.target.className == 'modalCard-fechar'){
            modal.classList.remove('mostrar');
            }
        });
    }
}


const card1 = document.querySelector('.card1');
card1.addEventListener('click', function(){
    iniciaModal('restBrDev');
});

const card2 = document.querySelector('.card2');
card2.addEventListener('click', function(){
    iniciaModal('hotelDev');
});

const card3 = document.querySelector('.card3');
card3.addEventListener('click', function(){
    iniciaModal('museuPUC');
});




