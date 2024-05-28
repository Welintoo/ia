const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');
const pergunta = [
    {
        enunciado: "você esta entediado(a) e deside mecher no PC  ",
        alternativas: [
            "assistir um filme",
            "jogar um jogo online"
        ]
    },
    {
        enunciado: "jogando e você encontra um outro jogador irritado discutindo com seu colega",
        alternativas: [
            "entrar na discussão em defeza do seu colega",
            "tentar entender a discussão"
        ]
    },
    {
        enunciado: "eles le perguntão qual é o certo",
        alternativas: [
            "bolacha",
            "biscoito"
        ]
    },
    {
        enunciado: "você escolhe biscoito e seu amigo ficou brabo pois falou q era bolacha e você deside ",
        alternativas: [
            "consolar ele",
            "tentar convencer ele que o certo e biscoito"
        ]
    },
    {
        enunciado: "vocês entraram em uma discucão",
        alternativas: [
            "você deside deichar pra lá",
            "xingar ele e toda sua geração e perder a amizade com ele"
        ]
    }