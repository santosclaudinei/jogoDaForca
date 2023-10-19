const espacoLetras = document.querySelector('.letras');
const conteudoTentativas = document.querySelector('.tentativas');
const conteudoLetrasErradas = document.querySelector('.letras-incorretas');
const conteudoLetrasCorretas = document.querySelector('.letras-corretas');

var palavrasSecretas = ['alura', 'backend', 'css', 'docker', 'enigma',
                        'frontend', 'grandeza', 'html', 'inteligencia', 'java',
                        'limite', 'marco', 'numero', 'oracle', 'python',
                        'questao', 'resiliencia', 'sabedoria', 'testar', 'usufruir',
                        'virtude', 'xadrez', 'zerar'];

var palavraSecreta;
var palavraTratada;
var tamanhoPalavra;
var letrasDaPalavra;
var letrasCorretas = 0;
var tentativas = 6;
var letrasCertas = [];
var letrasIncorretas = [];

var iniciarJogo = document.querySelector('#iniciar-jogo');
iniciarJogo.addEventListener('click', function(evento){

    iniciaElementosJogo();

});

function sorteiaPalavra() {

    palavraSecreta = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)].toUpperCase();
    palavraTratada = palavraSecreta.split('');
    return palavraTratada;

}

function iniciaElementosJogo() {

    tamanhoPalavra = sorteiaPalavra().length;
    for (var i = 0; i < tamanhoPalavra; i++) {
        
        letrasDaPalavra = document.createElement('div');
        espacoLetras.appendChild(letrasDaPalavra);
        letrasDaPalavra.classList.add('tracejado');
        letrasDaPalavra.classList.add(palavraSecreta[i]);

    }
    desenhaForca();

}

document.addEventListener('keydown', acaoUsuario);

function acaoUsuario(evento) {

    var teclaPressionada = evento.key;
    teclaPressionada = teclaPressionada.toUpperCase();
    console.log(teclaPressionada);

    var letraValida = 'ABCÇDEFGHIJKLMNOPQRSTUVWYXZ'.indexOf(teclaPressionada) > - 1;
    var caracterInvalido = '\|,.;:/?~^]}[{´`=+§º°1!2@3#4$5%6"7&8*9(0)-_'.indexOf(teclaPressionada) > - 1;
    
    if (!(evento.shiftKey || evento.ctrlKey || evento.altKey || 
        teclaPressionada == "ALTGRAPH" || caracterInvalido)) {
    
        if (letraValida) {

            var palavraContemLetra = palavraSecreta.indexOf(teclaPressionada) > -1;
            var letraErradaRepetida = letrasIncorretas.indexOf(teclaPressionada) > -1;
            var letraCorretaRepetida = letrasCertas.indexOf(teclaPressionada) > -1;

            if (palavraContemLetra) {

                palavraTratada.forEach(letra => {
                    if (letra == teclaPressionada && !letraCorretaRepetida ) {
                        letrasCertas.push(teclaPressionada);
                        letrasCorretas++;
                    } 
                });

                if (letrasCorretas == tamanhoPalavra) {
                    insereLetra(teclaPressionada);
                    vitoriaNoJogo()
                    
                } else {
                    insereLetra(teclaPressionada);
                }
 
            } else {

                if (!letraErradaRepetida) {
                    letrasIncorretas.push(teclaPressionada);
                    tentativas--;
                    desenha();
                    conteudoLetrasErradas.textContent = `Letras erradas: ${letrasIncorretas}`;
                    conteudoTentativas.textContent = `Chances restantes: ${tentativas}`;

                    if (tentativas == 0) {
                        perdeuNoJogo();
                    }
                }

            }
        }
    }
}

function insereLetra(tecla) {
    
    var mostrarLetra = document.querySelectorAll(`.${tecla}`);
                    mostrarLetra.forEach(letra => {
                        letra.innerHTML = tecla
                    });
    
}

function vitoriaNoJogo() {
    
    limparCanvas();
    conteudoLetrasCorretas.textContent = "Parabens! Você VENCEU.";
    

}

function perdeuNoJogo() {
    limparCanvas();
    conteudoLetrasCorretas.textContent = `Que Pena! Você perdeu. A palavra secreta era "${palavraSecreta}"`;
    var todasAsLetras = document.querySelectorAll('.tracejado')
    todasAsLetras.forEach(elemento => {
        elemento.remove()
    })
    
}

function desenha() {

    if (tentativas == 5) {
        desenhaCabeca();
    } else if (tentativas == 4) {
        desenhaTronco();
    } else if (tentativas == 3) {
        desenhaBracoEsquerdo();
    } else if (tentativas == 2) {
        desenhaBracoDireito();
    } else if (tentativas == 1) {
        desenhaPernaEsquerda();
    } else if (tentativas == 0) {
        desenhaPernaDireita();
    }

}
