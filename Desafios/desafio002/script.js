function verificar(){
    //variáveis
    // retorno no ano atual do sistema
    var data = new Date()
    var ano = data.getFullYear()

    //ano de nascimento digitado
    var fano = document.getElementById('txtano')
    
    //resultado impresso
    var res = document.getElementById('res')


    //(primeira validação) os dados estão corretos?
        if(fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {

    // (segunda validação) calculo de idade
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fano.value)
            var gênero = ''

    /* criação de elemento de forma dinâmica
    img: uma tag criação como img
    id, foto: criando um id chamado foto */
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

    //(terceira validação) verificação de sexo        
            if(fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 40){
                    img.setAttribute('src', 'img/homem-jovem.png')
                    // jovem
                } else if( idade < 60){
                    img.setAttribute('src', 'img/quarentao.png')
                    //quarentão
                } else {
                    img.setAttribute('src', 'img/idoso.png')
                    //idoso
                }
            } else {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 40){
                    img.setAttribute('src', 'img/mulher-jovem.png')
                    //jovem
                } else if (idade < 60){
                    img.setAttribute('src', 'img/quarentona.png')
                    //quarentona
                } else{
                    img.setAttribute('src', 'img/idosa.png')
                    // idosa
                }
                }
            } 
            //centralização no JavaScript
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            //adicionando a imagem depois do texto.
            res.appendChild(img)
    }
    

    //msg.innerHTML = `Detectamos uma mulher de ${idade} anos`;


    //for (var i in sexo)
    //if(sexo[i].checked)
        //alert(`Escolheu: ${sexo[i].value}`);

    //estrutura de condição
    //if (idade >= 40 && <= 60) && (sexo) {
        //foto.src = ('img/mulher-jovem.png')
    //}


// COMO DESCOBRIR O SEXO NA FUNÇÃO RADIO

    
// >= 40 = quarentona
// >= 60 = idoso
// var anoatual = new Date().getFullYear(); funciona?