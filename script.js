import { aleatorio } from './aleatorio.js';
import { perguntas, nomesEstudantes } from './perguntas.js';


const caixaInicial = document.querySelector(".caixa-inicial");
const caixaJogo = document.querySelector(".caixa-jogo");
const caixaMissao = document.querySelector(".caixa-missao");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const btnIniciar = document.querySelector(".btn-iniciar");
const btnJogarNovamente = document.querySelector(".btn-jogar-novamente");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let nomeCandidato = "";


btnIniciar.addEventListener("click", iniciarJogo);
btnJogarNovamente.addEventListener("click", reiniciarJogo);

function iniciarJogo() {
    atual = 0;
    historiaFinal = "";
    
   
    nomeCandidato = aleatorio(nomesEstudantes);
    caixaMissao.textContent = `🎯 Missão atribuída ao(à) candidato(a): ${nomeCandidato}`;

   
    caixaInicial.classList.add("escondido");
    caixaResultado.classList.add("escondido");
    caixaJogo.classList.remove("escondido");

    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.type = "button";
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaJogo.classList.add("escondido");
    caixaResultado.classList.remove("escondido");
    caixaPerguntas.textContent = "";
    
    textoResultado.innerHTML = `<strong>Resultado da jornada de ${nomeCandidato}:</strong><br><br>${historiaFinal}`;
}

function reiniciarJogo() {
    caixaResultado.classList.add("escondido");
    caixaJogo.classList.add("escondido");
    caixaInicial.classList.remove("escondido");
}