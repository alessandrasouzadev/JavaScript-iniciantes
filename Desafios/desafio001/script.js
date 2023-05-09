function carregar (){
var agora = new Date()
var hora = agora.getHours()
var foto = document.getElementById('imagem')
var res = document.querySelector('div#msg')
msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

//CONDIÇÃO PARA CARREGAMENTO DA IMAGEM
    if (hora >= 0 && hora< 12){
        document.body.style.background = '#e2cd9f'
        foto.src= 'img/manha.png'
    //BOM DIA 
    }
    else if (hora >= 12 && hora < 18){
        document.body.style.background = '#b9846f'
        foto.src= 'img/tarde.png'
    //BOA TARDE
    }
    else {
        document.body.style.background = '#515154'
        foto.src= 'img/noite.png'

    //BOA NOITE
    }
}
