function tabuada(){
    //variáveis
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')


    //(primeira validação) - os dados foram inseridos?
    
        if(num.value.length == 0){
            window.alert('Por favor, Digite um número!')
        } else {
    //(segunda validação) - foi inserido, então converta o tipo

            let n = Number(num.value)
            let c = 1
    // limpando o select
            tab.innerHTML = ''
    //(terceira validação) - estrutura de repetição

            for (c; c <= 10; c++){
    //criou os valores do select dentro do JS
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
    // inserindo value ao option
            item.value = `tab ${c}`
    //adicionar elemento filho
                tab.appendChild(item)
            } 
            
            
        }
}
