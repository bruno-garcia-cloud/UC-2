const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
    ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
    ]
}

console.log(filme.elenco[0])//matheus nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//3 - virginia cavendish
console.log(filme.transmissoesHoje[2])//canal globo 14h




const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//nome juca  idade 3   raca srd
console.log(gato)//nome juba  idade 3   raca srd
console.log(tartaruga)//nome jubo  idade 3   raca srd

//... - espalhamento



function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//backender: false
//undefined







