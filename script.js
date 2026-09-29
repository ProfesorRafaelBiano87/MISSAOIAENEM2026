const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ano letivo começou e a contagem regressiva para o ENEM já está valendo. Qual é o seu primeiro passo para organizar a rotina de estudos?",
        alternativas: [
            {
                texto: "Montar um cronograma rigoroso dividindo matérias por dias e horários fixation.",
                afirmacao: "Você é uma pessoa altamente disciplinada que busca controle e previsibilidade na sua rotina de estudos."
            },
            {
                texto: "Focar em resolver provas antigas e aprender com os erros na prática através de simulados.",
                afirmacao: "Sua abordagem é prática e focada no formato real da prova, aprendendo pela resolução de problemas."
            }
        ]
    },
    {
        enunciado: "Na preparação para a Redação do ENEM (Nota 1000), qual estratégia você prefere adotar?",
        alternativas: [
            {
                texto: "Utilizar modelos de estrutura de texto para garantir rapidez e segurança no dia do exame.",
                afirmacao: "Gosta de otimizar seu tempo usando estratégias consolidadas para evitar imprevistos."
            },
            {
                texto: "Ler atualidades, filosofias e repertórios socioculturais diversos para criar argumentos originais.",
                afirmacao: "Desenvolve uma visão crítica e repertório amplo para construir ideias autênticas e bem fundamentadas."
            }
        ]
    },
    {
        enunciado: "Faltando um mês para a prova, o cansaço e a pressão começam a aumentar. Como você lida com a ansiedade pré-ENEM?",
        alternativas: [
            {
                texto: "Acelera o ritmo de revisões até a véspera para não deixar nenhum detalhe passar.",
                afirmacao: "Sua determinação e foco inabalável te levam a dar o máximo de si até o último momento."
            },
            {
                texto: "Equilibra os estudos com exercícios físicos, momentos de descanso e boas noites de sono.",
                afirmacao: "Reconhece a importância da saúde mental e do descanso estratégico para alcançar o alto rendimento."
            }
        ]
    },
    {
        enunciado: "No primeiro dia de prova (Linguagens, Humanas e Redação), você se depara com um texto longo e complexo. O que você faz?",
        alternativas: [
            {
                texto: "Lê primeiro o comando da questão e as alternativas para saber exatamente o que buscar no texto.",
                afirmacao: "Aplica táticas ágeis de leitura focada para economizar tempo e energia mental durante a prova."
            },
            {
                texto: "Lê todo o texto com muita atenção antes de ir para as perguntas e alternativas.",
                afirmacao: "Prioriza a interpretação profunda para evitar pegadinhas e ter certeza total da resposta."
            }
        ]
    },
    {
        enunciado: "A prova passou e agora você aguarda a divulgação das notas para ingressar no SISU/ProUni. Como encara essa fase de transição?",
        alternativas: [
            {
                texto: "Pesquisa notas de corte, faz simulações de cursos e cria vários planos de ação.",
                afirmacao: "Trabalha com planejamento estratégico e flexibilidade para aproveitar as melhores oportunidades universitárias."
            },
            {
                texto: "Mantém a calma, confia no processo de preparação realizado e aguarda os resultados finais.",
                afirmacao: "Enfrenta grandes mudanças de ciclo com maturidade, autoconfiança e serenidade."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seu Perfil de Candidato ao ENEM:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
