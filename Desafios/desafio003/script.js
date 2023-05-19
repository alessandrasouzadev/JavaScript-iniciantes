function contar(){

    //variáveis
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    var res = document.getElementById('resultado')

    //(primeira validação) - algum parâmetro ficou vazio?
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = 'Impossível contar...'
        } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
    //(segunda validação) - o parâmetro de passo ficou vazio?
            if (p <= 0){
                window.alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }
    //(terceira validação) - estrutura de repetição
            if (i < f) {
                //Contagem crescente
                for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
                }
            } else {
                //Contagem regressiva
                for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            // concatenando ao contando impresso anteriormente - inserindo emoji (só funciona entre crases)
        }
            res.innerHTML += `\u{1F3C1}`
    }
}
        


