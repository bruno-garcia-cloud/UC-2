
let nome = "bruno"

function imrpimeFrase() {
    let nome = "bruno"

console.log(`Ola ${nome}!`)

function imprimeEcalcula(){
let numero1 = 2
let numero2 = 4
console.log(`Ola ${nome}, o resultado da soma é ${numero1 + numero2}`)

}
imprimeEcalcula()
}



imrpimeFrase()

const readlineSync = require('readline-sync')

function imprimiFrase (){

console.log("ola, tudo bem com voce?")

}

function calculaSoma(){

    console.log(`A soma de 5+5 é ${5+5}`);
}





function exibirMenu () {
let opcao;

    while(true){
opcao = readlineSync.questionInt("Escolha uma opção: \n1. Exibir Olá\n2. Exibir hora atual\n3. Sair\n");

switch(opcao){
    case 1:
        console.log("Olá");
        break;
    case 2:
        console.log("Como vai");
        break;
    case 3:
        console.log("saindo...")
        return;
    default:
        console.log("Opção invalida!");
        break;
}


    }



}


exibirMenu();

