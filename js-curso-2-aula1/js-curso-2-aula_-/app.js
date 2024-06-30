let tentativas = 1; // contador de tentativas, começara com um e a cada tentativa adiciona 1
let secretNumber = parseInt(Math.random() * 1000 + 1); /*
Math.random irá pegar um número aleatório entre 0 (incluso) e 1 (excluso), ex: 0.09323245675
Queremos que nosso programa vá até 1000, para isso multiplimos por 1000
Como o ultimo número é excluso estamos adicionando 1, o que irá excluir o 0
Se executarmos sem o parseInt ele irá dar os varios numeros flutuantes igual no exemplo acima
parse Int entao estara tirando esses numeros flutuantes e transformando em um inteiro
*/ 

// função que irá escrever algo na tela de acordo com a tag e o texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // selecionando todas os elementos referentes a tag
    if (campo) { // Se o campo for True ou verdadeiro (exitir)
        campo.innerHTML = texto; // colocando no html o parametro texto
    }
}

// Função que irá Limpar o espaço do querySelector, nesse caso o Input
function limparInput() {
    let inputVar = document.querySelector('input'); // Selecionando o primeiro input no html
    inputVar.value = ''; // declarando que o valor desse input vai ser Null ou Nada
}

// função que ao clicar no botao NOVO JOGO irá ser executada, assim criando um novo jogo.
function reiniciarJogo() {
    secretNumber = parseInt(Math.random() * 1000 + 1); // novamente pegando o valor do secret number
    limparInput(); // limpando campo input
    tentativas = 1; // declarando que a cada jogo as tentativas sao iguais a 1
    initialCode(); // escopo inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // declarando que o botao de novo jogo ficara indisponivel no começo da nova rodada
    document.getElementById('Chutar').removeAttribute('disabled'); // habilitando o botao chute novamente, pois tinha sido desabilitado até que um novo jogo iniciasse
}

// verificando o chute e falando se acertou ou errou
function verificarChute() {
    let chute = document.querySelector('input').value; //verificando o valor digitado no input
    chute = parseInt(chute); // transformando o nosso Chute em um Inteiro caso digitem um Float

    if (chute == secretNumber) { //se o chute for igual ao numero secreto aparecera as mensagens abaixo
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}!`); // se tentativas for == que 1 ele exibe 'tentativa', caso contrario, exibe 'tentativas', // paragrafo
        if (tentativas == 1) { //verificando se tentativas é igual a 1, pois se for, precisamos que ele remova o atributo do novo jogo antes de declarar que o botao chute esta desabilitado
        document.getElementById('reiniciar').removeAttribute('disabled'); // removendo disabled do id 'reiniciar'
        }
        document.getElementById('Chutar').setAttribute('disabled', true); // adicionando disabled como verdadeiro/funcionando
    } else {
        if (secretNumber > chute) { //se o chute nao for igual ele entra em uma outra condicional verificando se o numero é maior ou menor, assim podendo dar dica
            exibirTextoNaTela('p', 'O número é maior...');
        } else {
            exibirTextoNaTela('p', 'O número é menor...');
        }
        tentativas++; // adicionando 1 a tentativas
        limparInput() // limpando o campo com a função
    }
    document.getElementById('reiniciar').removeAttribute('disabled'); // removendo disabled do id 'reiniciar'
}

// Código inicial que apenas contem o titulo e o paragrafo
function initialCode() {
    //escopo inicial
    exibirTextoNaTela('h1', 'NUMBER SECRET'); 
    exibirTextoNaTela('p', 'Escolha um número de 1 a 1000');
}

//rodando
initialCode();