const listaDeCompras = []; 

const listaDeNomes = ["bruno","fabiano","graciela"] //array strings

const listaDeNumero = [10,12,15,10]

console.log(listaDeNomes)//imprimi tudo q tem dentro do array

listaDeCompras.push("pão")
listaDeCompras.push("nata")
listaDeCompras.push("iogurte")
console.log(listaDeCompras)


//remove o ultimo item do array

listaDeCompras.pop()
console.log(listaDeNomes)

//exibe o item de acordo com sua posicao no array

console.log(listaDeNomes[1])

//troca um valor de um elemento no array de acordo com sua posicao


console.log("array antes da troca", listaDeNumero)

listaDeNumero[3] = 100


console.log("array depois da troca", listaDeNumero)


//

console.log(listaDeNumero.length)


const seriesboas = ["nobru capudo","hoje e so capa","free fire moments"]

console.log(seriesboas.includes("nobru capudo")) //true
console.log(seriesboas.includes("nobruzeira")) //false


//splice
//remove o elemento a partir da posicao 1 array

const letras = ["A","B","C","D","E","F","G","H"]

letras.splice(2,2,"Z")

console.log(letras)


let array
console.log('a. ', array)//undefined

array = null
console.log('b. ', array)//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]//11
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])//3

array[i+1] = 19
console.log('e. ', array)//3,19,5,6,7,8,9,10,11,12,13

const valor = array[i+6]
console.log('f. ', valor)//9



const readline = require('readline-sync')
let nome = readline.question("qual o seu noome?")
let email = readline.question("qual o seu email?")




console.log("o email " +email+ " foi cadastrado com sucesso.Seja bem-vindo(a) "+nome+"!")



let listaDeComidas = ["lasanha","hambuerguer","pizza","bauru","churrasco"]
console.log(listaDeComidas)








let listaDeTarefa = []

const readline = require('readline-sync')
const tarefa1 = readline.question("Digite a tarefa 1: ")
const tarefa2 = readline.question("Digite a tarefa 2: ")
const tarefa3 = readline.question("Digite a tarefa 3: ")

listaDeTarefa.push(tarefa1,tarefa2,tarefa3)

console.log(listaDeTarefa)

const numeroTarefa = readline.questionInt("qual tarefa voce já realizou? ")

const indice = numeroTarefa - 1
listaDeTarefa.splice(indice,1)






