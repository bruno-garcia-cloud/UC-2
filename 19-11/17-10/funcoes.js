function calcularretangulo (base1,altura1){
     
    const area1 = base1 - altura1
console.log(area1)

}

calcularretangulo(9,6)
calcularretangulo(10,9)



function frases() {

console.log("ola")

}

function frase (nome,idade,altura) {

console.log(`sou ${nome},tenho anos ${idade} e tenho ${altura} de altura`)

}

frase ("bruno", 16, 170)



function horassegundos(hora1) {
const minutos = hora1 * 3600
console.log(`dentro de ${hora1} tem ${minutos}`)



}
horassegundos(60)

function medias(media1,media2,media3){


    const media = (media1 + media2 + media3)/3

    console.log(`media das notas ${media}`)

}




    
function parouimpar(numero){

if (numero === 0) {
    console.log("o numero é 0")

}
else if (numero % 2 === 0 ) {

    console.log(`o numero ${numero} é par`)
}
else {
console.log(`o numero ${numero} é impar`)


}

}


parouimpar(16)


function caclulaumasoma (nume1,nume2){
let soma = nume1 + nume2

console.log(soma)

return soma

}
let nume1 = caclulaumasoma(1,1)
caclulaumasoma(10,10)
console.log(nume1)




function temperatura(graus) {

let fahrenheit = (graus * 1.8) + 32

return fahrenheit



}
console.log(temperatura(30))

function saudacao (nome, nomeinformal) {
    

    
}



const voltas = 0

voltas += 1
voltas += 1
voltas ++
console.log(voltas)
