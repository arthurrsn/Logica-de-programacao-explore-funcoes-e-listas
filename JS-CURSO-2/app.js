function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Hora do desafio');

function consoleClickButton() {
    console.log('O botão foi clicado');
};

function alertClickButton() {
    console.log('Eu amo JS');
};

function promptClickButton() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
};

function somaClickButton() {
    let number1 = parseInt(prompt('Digite o primeiro valor:'));
    let number2 = parseInt(prompt('Digite o segundo valor:'));

    alert(`A soma de ${number1} + ${number2} é igual a ${number1 + number2}!`)
};