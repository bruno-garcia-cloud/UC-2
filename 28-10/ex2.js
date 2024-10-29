const readline = require("readline-sync")

const racas = ["pastor alemao","rottweiler","boxer","salsicha","husky"]

console.log(racas)

let indice = readline.question("escolha uma raca: \n1 - pastor alemao \n2 - rottweileir \n3 - boxer \n4 - salsicha \n5 husky \n")

console.log("voce escolheu", racas [indice - 2])
