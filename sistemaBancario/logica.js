// variavel que armazena o saldo inicial da conta

let saldo = 0

//Função para atualizar o saldo na tela
function atualizarSaldo(){
//selecionar o elemento do saldo e atualizar o texto com o valor
document.getElementById('saldo').textContent = saldo.toFixed(2)




}

//função que realiza o depósito
function depositar(){
// obtem o valor digitado pelo usuario e converte para numero decimal
valor = parseFloat(document.getElementById('valor').value)
//verifica se o valor é valido(maior que 0 e numérico)
if(isNaN(valor)|| valor <= 0){
// Exibe alerta se o valor for válido 
alert(" Por favor magnata,insira um número válido! ")
return //Interrompe a execução da função
}

// adicionar valor ao saldo
saldo += valor
//atualizar o saldo na tela
atualizarSaldo()

//exibir uma mensagem confirmando o depósito
alert("magnata é magnata né pai, depositou " + valor.toFixed(2) + "e ficou rico naquele modelo chucro")


}




//função que realiza o saque

function sacar(){
//obtem o valor digitado pelo usuario e converte para decimal
valor = parseFloat(document.getElementById('valor').value)
//verifica se o valor é válido
if (isNaN(valor)|| valor <= 0){
    alert ("por magnata, insira um valor valido!")
    return
}
//verificar se o saldo é suficiente
if(valor > saldo){
    alert("tu tá pobre magnata")
    return
}
//subtrai o valor do saldo
saldo -= valor
//atualizar saldo
atualizarSaldo()
alert("Saque de R$ " + valor.toFixed(2)+ " realizado com sucesso")
}









