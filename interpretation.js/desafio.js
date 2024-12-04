const readlineSync = require('readline-sync'); // Importa a biblioteca readline-sync

// Função para obter os dados do usuário e criar o objeto
function criarObjetoUsuario() {
    // Pergunta ao usuário os dados necessários
    const nome = readlineSync.question('Qual é o seu nome? ');
    const idade = readlineSync.questionInt('Qual é a sua idade? ');
    const profissao = readlineSync.question('Qual é a sua profissão? ');

    // Cria o objeto com as propriedades fornecidas
    const usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };

    // Imprime o objeto no console
    console.log(usuario);

    // Exibe o tipo do objeto (deve ser "object")
    console.log(typeof usuario); // Esperado: "object"
}

// Chama a função para executar o código
criarObjetoUsuario();





// Função para comparar os anos de lançamento de dois filmes
function compararFilmes(filme1, filme2) {
    // Comparando os anos de lançamento
    const foiLançadoAntes = filme1.ano < filme2.ano;
    const foiLançadoNoMesmoAno = filme1.ano === filme2.ano;

    // Retornando as mensagens solicitadas
    console.log(`O primeiro filme foi lançado antes do segundo? ${foiLançadoAntes}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${foiLançadoNoMesmoAno}`);
}

// Exemplo de objetos de filmes
const filme1 = {
    nome: "Filme A",
    ano: 2010
};

const filme2 = {
    nome: "Filme B",
    ano: 2015
};

// Chama a função com os dois filmes
compararFilmes(filme1, filme2);



// Função para inverter a disponibilidade de uma fruta
function inverterDisponibilidade(fruta) {
    // Inverte o valor da propriedade 'disponibilidade'
    fruta.disponibilidade = !fruta.disponibilidade;
    
    // Retorna o objeto da fruta com a disponibilidade invertida
    return fruta;
}

// Exemplo de objetos de frutas
const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
};

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
};

// Testando a função inverterDisponibilidade
console.log(inverterDisponibilidade(fruta1)); // A disponibilidade da maçã será invertida
console.log(inverterDisponibilidade(fruta2)); // A disponibilidade da banana será invertida
console.log(inverterDisponib)






