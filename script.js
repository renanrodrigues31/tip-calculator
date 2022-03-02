//CODIGO PARA MUDAR A PROPRIEDADE CSS QUANDO O BOTÃO(DIV) FOR CLICADO

const botaoClick = document.querySelectorAll('.click');

botaoClick.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

function handleClick(event){
    botaoClick.forEach(btn => {
        btn.classList.remove('botoesPorcentagemClik');

        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('botoesPorcentagemClik');
        }
    })

}
