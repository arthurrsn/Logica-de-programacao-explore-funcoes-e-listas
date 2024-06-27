function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input');
    return chute == secretNumber;
};

function main() {
    let secretNumber = gerarNumeroAleatorio();

    exibirTextoNaTela('h1', 'NUMBER SECRET');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 1000');

    console.log(secretNumber);
    verificarChute();
}

main()