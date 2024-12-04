const donodopet = {

    nome: "bruno",
    pet:{
        nome: "faisca",
        raca: "vira-lata preto",
        idade: 10

}


}

console.log(donodopet.pet.nome)



const curso = {
nome: "front",
linguagem: ("javascript","css","himl")

}

console.log(curso.linguagem[1])




const professoresTDs = [{nome:"leo",uc:"2"},
{nome:"lucas", uc:"3"},
{nome:"maria claudia",uc:5}


]
console.log(professoresTDs[0].uc)







const professor = {
nome: "leo",
idade:29,
disciplinas: ["algoritmos","banco de dados","java"]


}

const novoProfessor = {
...professor,
nome: "lucas",
idade: 30,
veiculo:"carro"

}
console.log(professor)
console.log(novoProfessor)



let pessoa2 = {

nome: "bicuda",
idade:20,
generoMusicalPreferido: "rock",

}

function novapessoa(objeto){let pessoa3 = {
    ...pessoa2,

    comidasPreferidas:["arroz","batata","carne"],
    melhorAmigo:{

    nome:"perincula",
    idade:10,

    },
    


}
}


console.log(`O nome da pessoa é ${novapessoa.nome} e suas comidas preferidas são ${novapessoa.comidasPreferidas}, ${pessoa2.comidasPreferidas},${pessoa2.comidasPreferidas}, e seu melhor amigo se chama ${pessoa2.melhorAmigo} e tem ${pessoa2.melhorAmigo.idade} anos`)


const pessoa4 = {
    nome:"Leonardo",
    idade: 29,
    generoMusical: "Eletrônica"
}


const pessoa1= {
    nome: "Lucca",
    idade: 20,
    generoMusical: "Indie"
}

function novoObj(obj){
    const novaPessoa = {
        ...obj,
        comidasFav: ["Xis", "Pizza", "Lasanha"],
        melhorAmigo: {
            nome: "Leo",
            idade: 28,
            pet: {
                nome:"Xablau"
            }
        }
    }

}