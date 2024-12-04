const readline = require("readline-sync")

const pokemon = [
{nome:"pikachu",tipo:"eletrico",nivel:100,geracao:1},
{nome:"mewtwo",tipo:"psiquico",nivel:50,geracao:1},
{nome:"eevee",tipo:"normal",nivel:70,geracao:1},
{nome:"charmander",tipo:"fogo",nivel:90,geracao:1},
{nome:"snorlax",tipo:"normal",nivel:60,geracao:1},
{nome:"squirtle",tipo:"agua",nivel:10,geracao:1},
{nome:"clefary",tipo:"fada",nivel:15,geracao:1},
{nome:"bulbasaur",tipo:"planta",nivel:20,geracao:1},

]



const Mochila =[]



function adicionapokemon (){
console.log("Escolha um Pokemon para adicionar a mochila");
for( let i = 0;i < pokemon.length; i ++){console.log(`${[i+1]} ${pokemon[i].nome}`) }

const escolha = readline.questionInt("Digite o numero do pokemon: ");

if (Mochila.length < 6){

const pokemonEscolhido = pokemon[escolha - 1]
Mochila.push[pokemonEscolhido];
console.log(`${pokemonEscolhido.nome} foi adicionado a mochila`)
}else{console.log("Escolha invalida")}

}


function verPokemonNaMochila() {
    for( let i = 0;i < pokemon.length; i ++){console.log(`${[i+1]} ${pokemon[i].nome}`) }
}

   

    function MochilaTreinador (){
        console.log("Lista de pokemons");
        for( let i = 0;i < pokemon.length; i ++){console.log(`${[i+1]} ${pokemon[i].nome}`) }
        const escolha = readline.questionInt("Digite o numero do pokemon: ");

        if (MochilaTreinador.length < 6){
        
        const pokemonEscolhido = pokemon[escolha - 1]
        Mochila.push[pokemonEscolhido];
        console.log(`${pokemonEscolhido.nome} foi adicionado a mochila`)
        }else{console.log("Escolha invalida")}
        
}
verPokemonNaMochila()


function removerPok () {   
    console.log("\nEscolha um Pokemon para remover:");
    for (let i = 0; i < mochila.length; i++)     {
        console.log(`${i+1}. ${mochila[i].nome}`)
    }
    const removerPok = readline.questionInt('Digite o numero conforme o pokemon que quer remover: ')
    if (mochila.length >=removerPok) {
        const pokRemovido = Mochila[removerPok-1];
        Mochila.splice(removerPok-1,1);
        console.log(`${pokRemovido.nome} foi removido da mochila.`)
    }
    else {console.log('NAO - invalido');
    }
    
}











function exibirMenu () {
    let opcao;
    
        while(true){
    opcao = readlineSync.questionInt("Escolha uma opção: \n1. Exibir \n2. Exibir hora atual\n3. Sair\n");
    
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
    
    



    
     
      