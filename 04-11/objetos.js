

//como criar objetos
let pessoa = {
   //atributo/propriedade
   //Nós nao usamos let nem const
   //Nós usamos ":" ao invés de '='
   nome:"bruno",
   idade:16,
   cpf:928829489,
   filmesfav:["transformes","dragon ball a volta de freeza","carros"],
   trabalhar:function(){
    console.log(`${pessoa.nome} esta trabalhando. ele nao ve a hora de chegar em casa e jogar.`)
   }


}

console.log(pessoa)


//para acessar um dos atributos fazemos assim

console.log(pessoa.nome)
console.log(pessoa.filmesfav[0])


//para trocar o valor de um atributo fazemos assim

pessoa.idade = 30
console.log(pessoa.idade)


pessoa.altura = 1.70
console.log(pessoa.altura)



pessoa.trabalhar()//aqui eu chamo/executo o metodo do meu objeto

let personagem = {

nome: "goku",
idade: 40,
poder: ["kamehameha","uzaru"],
porrada:function(){
console.log(`${personagem.nome} esta metendo a porrada no freeza, e esta louco para bater no cell`)

}



}

console.log(personagem.idade)
console.log(personagem.nome)
console.log(personagem.poder)
personagem.porrada()


