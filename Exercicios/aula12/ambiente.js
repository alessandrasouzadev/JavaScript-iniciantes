/*Estrutura de retição ´While´:
mesmo resultado com poucas linhas de códigos.*/ 

var c = 1 
while (c <= 6){
    console.log(`Passo ${c}! Tudo bem?`)
    c ++ // c = c + 1
}

        OU

console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')



/*Estrutura de retição ´do...While´:
mesmo resultado com poucas linhas de códigos.*/

var c = 1 
do {
    console.log(`Passo ${c}! Tudo bem?`)
    c ++ // c = c + 1
} while (c <= 6)

console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')
console.log('Tudo bem? ')

/*Estrutura de retição ´for´:
mesmo resultado com poucas linhas de códigos.*/

var c = 1
while (c <= 5){
    console.log(c)
    c ++
}
    OU
for(var c = 1; c <= 5; c++){
    console.log(c)
}

/*DEPURAÇÃO: Técnica de solucionar eventuais bugs, segue um passo a passo estrutural para verificar erros.Localiza os erros enquanto a programação está rodando. São 3 tipos de erros que podem acontecer no programa: Sintaxe, execução e semântica.
COMANDO PARA UTILIZAR O DEPURADOR NO VSCODE: F5 (Depurar > Iniciar Depuração)*/

console.log('Vai começar...')
for(var c = 1; c <= 5; c++){
    console.log(c)
}
console.log('FIM!')

