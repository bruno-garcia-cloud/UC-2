// Lista de palavras para o jogo
const palavras = [] //a lista de palavras que o jogo vai gerar
let palavraSecreta = []; // array para armazenar a palavra secreta
let letrasCorretas = []; // Array para armazenar as letras corretas que o jogador adivinhar
let letrasErradas = []; // Array para armazenar as letras erradas que o jogador tentar
let tentativas = 7; // O numero de tentativas iniciais que o jogador tentara em sua exímia sabedoria
let numeroDeLetras = 0; //Variavel par armazenar o numero de letras na palavra secreta

// função para escolher uma palavra aleatoria da lista
function escolherPalavra(){
const indice = Mat.floor(math.random()* palavraSecreta.length) // então aqui se escolhe um índice aleatório da lista de palavras
palavraSecreta = palavras[indice] //aqui a palavra secreta é escolhida
//contando o número de letras na palavra secreta, ignorando os espaços
numeroDeLetras = palavraSecreta.replace(/ /g,'').length //conta apenas as letras, sem considerar os espaços
//Substitui os espaços da palavra secreta
let palavracomHifen = palavraSecreta.replace(/ /g, '-')//troca os espaços por hifens

letrasCorretas = Array(palavracomHifen.length).fill('_')

letrasErradas = [];
tentativas = 5

atualizarPalavra()
atualizarErros()
document.getElementById('mensagem').textContent = ''

document.getElementById('imagem-acerto').style.display = 'none'
document.getElementById('imagem-erro').style.display = 'none'

document.getElementById('tentativas')

document.getElementById('tentativas-contagem'.textContent = tentativas)

document.getElementById('numero-letras').textContent = `numero de letras: ${numeroDeLetras}`




}

function atualizarPalavra() {
    let palavraExibida = ''; // Inicializa uma variável para a palavra exibida

    // Itera sobre a palavra secreta e revela as letras corretas, deixando espaços ou hífens
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (letrasCorretas[i] === '_') {
            if (palavraSecreta[i] === ' ') {
                palavraExibida += ' '; // Se for um espaço, mantém o espaço visível
            } else if (palavraSecreta[i] === '-') {
                palavraExibida += '-'; // Se for um hífen, mantém o hífen visível
            } else {
                palavraExibida += '_'; // Senão, mantém um traço indicando uma letra não adivinhada
            }
        } else {
            palavraExibida += letrasCorretas[i]; // Caso a letra já tenha sido adivinhada, exibe a letra
        }

        // Adiciona um espaço após cada letra ou traço para separar visualmente
        palavraExibida += ' ';
    }
    // Atualiza o elemento HTML com a palavra visível
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim(); // Remove o último espaço extra
}

// Função para atualizar a contagem de tentativas








