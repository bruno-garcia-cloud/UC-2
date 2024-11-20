const readline = require('readline-sync')

let tabuada = readline.question ("quero ver a tabuada do numero")

let number5 = 4

while(tabuada < 10){

console.log(`${number5} x ${tabuada} = ${tabuada*number5}`)
tabuada ++
}

