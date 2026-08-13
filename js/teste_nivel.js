/* =========================================================
   TESTE DE NÍVEL - BEE INGLÊS
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const btnComecar =
    document.getElementById("btnComecar");

const cardIntroducao =
    document.getElementById("cardIntroducao");

const cardQuestao =
    document.getElementById("cardQuestao");

const resultado =
    document.getElementById("resultado");

const pergunta =
    document.getElementById("pergunta");

const numeroPergunta =
    document.getElementById("numeroPergunta");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const barraProgresso =
    document.getElementById("barraProgresso");

const porcentagem =
    document.getElementById("porcentagem");

const btnAnterior =
    document.getElementById("btnAnterior");

const btnProxima =
    document.getElementById("btnProxima");

const nivelFinal =
    document.getElementById("nivelFinal");

const descricaoNivel =
    document.getElementById("descricaoNivel");

const significadoNivel =
    document.getElementById("significadoNivel");

const btnIrAulas =
    document.getElementById("btnIrAulas");


/* =========================================================
   ALTERNATIVAS
========================================================= */

const alternativa0 =
    document.getElementById("alternativa0");

const alternativa1 =
    document.getElementById("alternativa1");

const alternativa2 =
    document.getElementById("alternativa2");

const alternativa3 =
    document.getElementById("alternativa3");


const radios =
    document.querySelectorAll(
        'input[name="resposta"]'
    );


/* =========================================================
   QUESTÕES
========================================================= */

const questoes = [

    /* =====================================================
       BÁSICO
    ====================================================== */

    {
        pergunta: "Choose the correct sentence:",

        alternativas: [
            "She go to school every day.",
            "She goes to school every day.",
            "She going to school every day.",
            "She gone to school every day."
        ],

        correta: 1,

        nivel: "basico"
    },


    {
        pergunta: "What is the opposite of 'big'?",

        alternativas: [
            "Small",
            "Tall",
            "Long",
            "Fast"
        ],

        correta: 0,

        nivel: "basico"
    },


    {
        pergunta: "Complete the sentence: I ___ from Brazil.",

        alternativas: [
            "am",
            "is",
            "are",
            "be"
        ],

        correta: 0,

        nivel: "basico"
    },


    {
        pergunta: "Choose the correct option: They ___ happy.",

        alternativas: [
            "is",
            "am",
            "are",
            "be"
        ],

        correta: 2,

        nivel: "basico"
    },


    {
        pergunta: "What does 'Good morning' mean?",

        alternativas: [
            "Boa noite",
            "Bom dia",
            "Boa tarde",
            "Até logo"
        ],

        correta: 1,

        nivel: "basico"
    },


    {
        pergunta: "Complete: She ___ a student.",

        alternativas: [
            "are",
            "am",
            "is",
            "be"
        ],

        correta: 2,

        nivel: "basico"
    },


    /* =====================================================
       INTERMEDIÁRIO
    ====================================================== */

    {
        pergunta:
            "Choose the correct sentence:",

        alternativas: [
            "I have lived here for five years.",
            "I live here since five years.",
            "I am live here for five years.",
            "I lived here since five years."
        ],

        correta: 0,

        nivel: "intermediario"
    },


    {
        pergunta:
            "If it rains tomorrow, we ___ at home.",

        alternativas: [
            "stay",
            "stayed",
            "will stay",
            "would stayed"
        ],

        correta: 2,

        nivel: "intermediario"
    },


    {
        pergunta:
            "She has been studying English ___ 2022.",

        alternativas: [
            "for",
            "since",
            "during",
            "from"
        ],

        correta: 1,

        nivel: "intermediario"
    },


    {
        pergunta:
            "What does 'give up' mean?",

        alternativas: [
            "Continue",
            "Give something to someone",
            "Quit",
            "Start again"
        ],

        correta: 2,

        nivel: "intermediario"
    },


    {
        pergunta:
            "Choose the correct option: I wish I ___ more time.",

        alternativas: [
            "have",
            "had",
            "will have",
            "having"
        ],

        correta: 1,

        nivel: "intermediario"
    },


    {
        pergunta:
            "Which sentence is correct?",

        alternativas: [
            "He didn't went there.",
            "He doesn't went there.",
            "He didn't go there.",
            "He don't go there."
        ],

        correta: 2,

        nivel: "intermediario"
    },


    {
        pergunta:
            "By the time we arrived, the movie ___.",

        alternativas: [
            "started",
            "has started",
            "had started",
            "starts"
        ],

        correta: 2,

        nivel: "intermediario"
    },


    /* =====================================================
       AVANÇADO
    ====================================================== */

    {
        pergunta:
            "Choose the grammatically correct sentence:",

        alternativas: [
            "Had I known about it, I would have acted differently.",
            "Had I knew about it, I would acted differently.",
            "If I had knew about it, I would have act differently.",
            "If I know about it, I would have acted differently."
        ],

        correta: 0,

        nivel: "avancado"
    },


    {
        pergunta:
            "What does the expression 'to go the extra mile' mean?",

        alternativas: [
            "To travel a long distance",
            "To make an additional effort",
            "To arrive late",
            "To change direction"
        ],

        correta: 1,

        nivel: "avancado"
    },


    {
        pergunta:
            "Choose the best option:",

        alternativas: [
            "Despite of the difficulties, he continued.",
            "Despite the difficulties, he continued.",
            "Despite he had difficulties, he continued.",
            "Despite of having difficulties, continued."
        ],

        correta: 1,

        nivel: "avancado"
    },


    {
        pergunta:
            "Which word best completes the sentence? The results were ___ unexpected.",

        alternativas: [
            "highly",
            "deeply",
            "strongly",
            "heavily"
        ],

        correta: 0,

        nivel: "avancado"
    },


    {
        pergunta:
            "Choose the correct sentence:",

        alternativas: [
            "No sooner had he arrived than the meeting started.",
            "No sooner he had arrived than the meeting started.",
            "No sooner had he arrived when the meeting started.",
            "No sooner he arrived than the meeting had started."
        ],

        correta: 0,

        nivel: "avancado"
    },


    {
        pergunta:
            "What does 'under the weather' mean?",

        alternativas: [
            "Feeling sick or unwell",
            "Being outside in the rain",
            "Feeling extremely happy",
            "Being confused"
        ],

        correta: 0,

        nivel: "avancado"
    }

];


/* =========================================================
   VARIÁVEIS
========================================================= */

let questaoAtual = 0;

let respostas = [];

let pontuacao = 0;


/* =========================================================
   COMEÇAR
========================================================= */

btnComecar.addEventListener(
    "click",
    iniciarTeste
);


function iniciarTeste() {

    questaoAtual = 0;

    respostas = [];

    pontuacao = 0;

    cardIntroducao.style.display = "none";

    resultado.style.display = "none";

    cardQuestao.style.display = "block";

    carregarQuestao();

}


/* =========================================================
   CARREGAR QUESTÃO
========================================================= */

function carregarQuestao() {

    const questao =
        questoes[questaoAtual];


    pergunta.textContent =
        questao.pergunta;


    numeroPergunta.textContent =
        `Questão ${questaoAtual + 1}`;


    numeroQuestao.textContent =
        `Questão ${questaoAtual + 1} de ${questoes.length}`;


    alternativa0.textContent =
        questao.alternativas[0];

    alternativa1.textContent =
        questao.alternativas[1];

    alternativa2.textContent =
        questao.alternativas[2];

    alternativa3.textContent =
        questao.alternativas[3];


    radios.forEach(
        radio => {

            radio.checked = false;

        }
    );


    /* Recuperar resposta anterior */

    if (
        respostas[questaoAtual] !== undefined
    ) {

        radios[
            respostas[questaoAtual]
        ].checked = true;

    }


    /* Progresso */

    const progresso =
        (
            (questaoAtual + 1)
            /
            questoes.length
        ) * 100;


    barraProgresso.style.width =
        `${progresso}%`;


    porcentagem.textContent =
        `${Math.round(progresso)}%`;


    /* Botão anterior */

    if (questaoAtual === 0) {

        btnAnterior.disabled = true;

        btnAnterior.style.opacity = "0.5";

        btnAnterior.style.cursor =
            "not-allowed";

    } else {

        btnAnterior.disabled = false;

        btnAnterior.style.opacity = "1";

        btnAnterior.style.cursor =
            "pointer";

    }


    /* Última questão */

    if (
        questaoAtual ===
        questoes.length - 1
    ) {

        btnProxima.textContent =
            "Finalizar ✓";

    } else {

        btnProxima.textContent =
            "Próxima →";

    }

}


/* =========================================================
   OBTER RESPOSTA
========================================================= */

function obterResposta() {

    let resposta = null;


    radios.forEach(
        radio => {

            if (radio.checked) {

                resposta =
                    Number(radio.value);

            }

        }
    );


    return resposta;

}


/* =========================================================
   PRÓXIMA
========================================================= */

btnProxima.addEventListener(
    "click",
    function () {

        const resposta =
            obterResposta();


        if (resposta === null) {

            alert(
                "Selecione uma alternativa antes de continuar."
            );

            return;

        }


        respostas[questaoAtual] =
            resposta;


        if (
            questaoAtual <
            questoes.length - 1
        ) {

            questaoAtual++;

            carregarQuestao();

        } else {

            finalizarTeste();

        }

    }
);


/* =========================================================
   ANTERIOR
========================================================= */

btnAnterior.addEventListener(
    "click",
    function () {

        if (questaoAtual <= 0) {

            return;

        }


        const resposta =
            obterResposta();


        if (resposta !== null) {

            respostas[questaoAtual] =
                resposta;

        }


        questaoAtual--;

        carregarQuestao();

    }
);


/* =========================================================
   FINALIZAR
========================================================= */

function finalizarTeste() {

    pontuacao = 0;


    questoes.forEach(
        (questao, index) => {

            if (
                respostas[index] ===
                questao.correta
            ) {

                pontuacao++;

            }

        }
    );


    mostrarResultado();

}


/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultado() {

    let nivel;

    let descricao;

    let significado;


    /*
        0 a 7     = BÁSICO
        8 a 14    = INTERMEDIÁRIO
        15 a 20   = AVANÇADO
    */


    if (pontuacao <= 7) {

        nivel = "BÁSICO";


        descricao =
            "Você está começando sua jornada no inglês e possui conhecimentos básicos do idioma.";


        significado =
            "Você consegue compreender palavras, expressões e frases simples utilizadas em situações do dia a dia.";

    }


    else if (pontuacao <= 14) {

        nivel = "INTERMEDIÁRIO";


        descricao =
            "Você já possui uma boa base de inglês e está preparado para trabalhar conteúdos de nível intermediário.";


        significado =
            "Você consegue se comunicar em situações do dia a dia, compreender textos mais complexos e utilizar estruturas intermediárias da língua inglesa.";

    }


    else {

        nivel = "AVANÇADO";


        descricao =
            "Você possui um excelente domínio do inglês e está preparado para conteúdos mais avançados.";


        significado =
            "Você consegue compreender estruturas complexas, interpretar textos avançados e se comunicar com maior naturalidade.";

    }


    nivelFinal.textContent =
        nivel;


    descricaoNivel.textContent =
        descricao;


    significadoNivel.textContent =
        significado;


    cardQuestao.style.display =
        "none";


    resultado.style.display =
        "block";


    resultado.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   IR PARA AULAS
========================================================= */

btnIrAulas.addEventListener(
    "click",
    function () {

        window.location.href = "#";

    }
);

/*=========================================================
    MENU DE NAVEGAÇÃO
=========================================================*/

document.getElementById("idhome").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../index.html";

});

document.getElementById("idnivel").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/niveis.html";

});

document.getElementById("idblog").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/blog.html";

});

document.getElementById("idtopicos").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/topicos.html";

});

document.getElementById("idexercicios").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/exercicios.html";

});

document.getElementById("idteste").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/teste_nivel.html";

});