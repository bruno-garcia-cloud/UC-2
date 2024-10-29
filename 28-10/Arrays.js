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
