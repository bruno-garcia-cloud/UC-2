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







