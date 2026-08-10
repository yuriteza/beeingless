/* =========================================================
   BEE INGLÊS
   SISTEMA DE EXERCÍCIOS
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const app = {

    nome: "BEE Inglês",

    usuario: "Aluno",

    categoria: "Grammar",

    titulo: "Present Simple",

    descricao:
        "Pratique o uso do Present Simple e aprenda a formar frases afirmativas, negativas e interrogativas.",

    nivel: "Básico",

    tempo: "10 min",

    instrucaoTitulo:
        "Complete a frase",

    instrucao:
        "Digite a forma correta do verbo indicado entre parênteses.",

    textoDica:
        "Ver dica",

    textoAnterior:
        "Anterior",

    textoVerificar:
        "Verificar",

    textoProximo:
        "Próxima",

    tituloExplicacao:
        "Por que esta é a resposta?",

    tituloSeuProgresso:
        "Seu progresso",

    textoPontos:
        "pontos",

    textoAcertos:
        "Acertos",

    textoErros:
        "Erros",

    tituloQuestoes:
        "Questões",

    tituloMaterial:
        "Material da aula",

    descricaoMaterial:
        "Consulte o material original desta atividade.",

    material:
        "#",

    footerDescricao:
        "Aprenda inglês de forma simples, prática e interativa.",

    footerDireitos:
        "© 2026 BEE Inglês. Todos os direitos reservados."

};



/* =========================================================
   EXERCÍCIOS
========================================================= */

const exercicios = [

    {
        numero: 1,

        frase:
            "Sarah __________ (like) to play tennis.",

        resposta:
            "likes",

        dica:
            "Sarah = she. No Present Simple, usamos -s com he, she e it.",

        explicacao:
            "Quando o sujeito é he, she ou it, normalmente acrescentamos -s ao verbo no Present Simple.",

        exemplo:
            "Sarah likes to play tennis."
    },


    {
        numero: 2,

        frase:
            "They __________ (watch) cartoons on TV every Friday.",

        resposta:
            "watch",

        dica:
            "O sujeito é They.",

        explicacao:
            "Com I, you, we e they, usamos o verbo em sua forma base.",

        exemplo:
            "They watch cartoons every Friday."
    },


    {
        numero: 3,

        frase:
            "My mom __________ (cook) delicious meals for dinner.",

        resposta:
            "cooks",

        dica:
            "My mom = she.",

        explicacao:
            "My mom é uma pessoa no singular. Por isso, usamos a terceira pessoa do singular.",

        exemplo:
            "My mom cooks delicious meals."
    },


    {
        numero: 4,

        frase:
            "We __________ (go) to the park after school.",

        resposta:
            "go",

        dica:
            "O sujeito é We.",

        explicacao:
            "Com We, usamos o verbo em sua forma base: go.",

        exemplo:
            "We go to the park."
    },


    {
        numero: 5,

        frase:
            "__________ he __________ (study) English every day?",

        resposta:
            "does study",

        dica:
            "Perguntas com he usam Does.",

        explicacao:
            "Nas perguntas do Present Simple usamos Does com he, she e it. O verbo principal volta para a forma base.",

        exemplo:
            "Does he study English every day?"
    },


    {
        numero: 6,

        frase:
            "Dogs __________ (sleep) a lot during the day.",

        resposta:
            "sleep",

        dica:
            "Dogs está no plural.",

        explicacao:
            "Como Dogs está no plural, usamos a forma base do verbo.",

        exemplo:
            "Dogs sleep a lot."
    },


    {
        numero: 7,

        frase:
            "I __________ (not eat) vegetables.",

        resposta:
            "do not eat",

        dica:
            "Use do not com I.",

        explicacao:
            "Para frases negativas com I, you, we e they, usamos do not + verbo na forma base.",

        exemplo:
            "I do not eat vegetables."
    },


    {
        numero: 8,

        frase:
            "The bus __________ (arrive) at 9:00 AM.",

        resposta:
            "arrives",

        dica:
            "The bus = it.",

        explicacao:
            "The bus é singular. Por isso, o verbo recebe -s.",

        exemplo:
            "The bus arrives at 9:00 AM."
    },


    {
        numero: 9,

        frase:
            "He __________ (play) the guitar in a band.",

        resposta:
            "plays",

        dica:
            "He é terceira pessoa do singular.",

        explicacao:
            "Com he, she e it, acrescentamos -s ao verbo na forma afirmativa.",

        exemplo:
            "He plays the guitar."
    },


    {
        numero: 10,

        frase:
            "Dogs __________ (bark) when they see strangers.",

        resposta:
            "bark",

        dica:
            "Dogs está no plural.",

        explicacao:
            "Com sujeitos no plural, usamos o verbo na forma base.",

        exemplo:
            "Dogs bark when they see strangers."
    },


    {
        numero: 11,

        frase:
            "She __________ (read) a book before bedtime.",

        resposta:
            "reads",

        dica:
            "She é terceira pessoa do singular.",

        explicacao:
            "Com She, usamos reads.",

        exemplo:
            "She reads a book."
    },


    {
        numero: 12,

        frase:
            "__________ you often __________ (visit) your grandparents?",

        resposta:
            "do visit",

        dica:
            "Perguntas com you usam Do.",

        explicacao:
            "Com you, usamos Do para formar perguntas no Present Simple.",

        exemplo:
            "Do you often visit your grandparents?"
    },


    {
        numero: 13,

        frase:
            "He __________ (always forget) his keys.",

        resposta:
            "always forgets",

        dica:
            "He exige a terceira pessoa do singular.",

        explicacao:
            "O advérbio always vem antes do verbo principal. Como o sujeito é He, o verbo recebe -s.",

        exemplo:
            "He always forgets his keys."
    },


    {
        numero: 14,

        frase:
            "The sun __________ (rise) in the east.",

        resposta:
            "rises",

        dica:
            "The sun = it.",

        explicacao:
            "The sun é singular, então usamos rises.",

        exemplo:
            "The sun rises in the east."
    },


    {
        numero: 15,

        frase:
            "They __________ (usually go) shopping on weekends.",

        resposta:
            "usually go",

        dica:
            "They não recebe -s.",

        explicacao:
            "Com They usamos a forma base do verbo. O advérbio usually aparece antes do verbo principal.",

        exemplo:
            "They usually go shopping."
    },


    {
        numero: 16,

        frase:
            "I __________ (not like) spicy food.",

        resposta:
            "do not like",

        dica:
            "Use do not com I.",

        explicacao:
            "A forma negativa com I é do not + verbo base.",

        exemplo:
            "I do not like spicy food."
    },


    {
        numero: 17,

        frase:
            "Cats __________ (chase) after mice.",

        resposta:
            "chase",

        dica:
            "Cats está no plural.",

        explicacao:
            "Com sujeitos plurais usamos a forma base do verbo.",

        exemplo:
            "Cats chase mice."
    },


    {
        numero: 18,

        frase:
            "My dad __________ (work) in an office.",

        resposta:
            "works",

        dica:
            "My dad = he.",

        explicacao:
            "My dad é singular, então usamos works.",

        exemplo:
            "My dad works in an office."
    },


    {
        numero: 19,

        frase:
            "Birds __________ (sing) in the morning.",

        resposta:
            "sing",

        dica:
            "Birds está no plural.",

        explicacao:
            "Com Birds usamos a forma base do verbo: sing.",

        exemplo:
            "Birds sing in the morning."
    },


    {
        numero: 20,

        frase:
            "We __________ (play) board games on rainy days.",

        resposta:
            "play",

        dica:
            "We usa a forma base do verbo.",

        explicacao:
            "Com We não adicionamos -s ao verbo.",

        exemplo:
            "We play board games on rainy days."
    }

];



/* =========================================================
   ESTADO
========================================================= */

let questaoAtual = 0;

let acertos = 0;

let erros = 0;

let respondeu = false;



/* =========================================================
   ELEMENTOS
========================================================= */

const logo =
    document.getElementById("logo");

const linkInicio =
    document.getElementById("linkInicio");

const linkCursos =
    document.getElementById("linkCursos");

const linkExercicios =
    document.getElementById("linkExercicios");

const nomeUsuario =
    document.getElementById("nomeUsuario");

const categoria =
    document.getElementById("categoria");

const tituloExercicio =
    document.getElementById("tituloExercicio");

const descricaoExercicio =
    document.getElementById("descricaoExercicio");

const nivelExercicio =
    document.getElementById("nivelExercicio");

const tempoExercicio =
    document.getElementById("tempoExercicio");

const totalQuestoes =
    document.getElementById("totalQuestoes");

const textoInstrucaoTitulo =
    document.getElementById("textoInstrucaoTitulo");

const textoInstrucao =
    document.getElementById("textoInstrucao");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const tipoQuestao =
    document.getElementById("tipoQuestao");

const fraseQuestao =
    document.getElementById("fraseQuestao");

const labelResposta =
    document.getElementById("labelResposta");

const resposta =
    document.getElementById("resposta");

const dicaButton =
    document.getElementById("dicaButton");

const dicaBox =
    document.getElementById("dicaBox");

const dicaTexto =
    document.getElementById("dicaTexto");

const feedback =
    document.getElementById("feedback");

const feedbackIcone =
    document.getElementById("feedbackIcone");

const feedbackTitulo =
    document.getElementById("feedbackTitulo");

const feedbackTexto =
    document.getElementById("feedbackTexto");

const botaoAnterior =
    document.getElementById("botaoAnterior");

const botaoVerificar =
    document.getElementById("botaoVerificar");

const botaoProximo =
    document.getElementById("botaoProximo");

const textoAnterior =
    document.getElementById("textoAnterior");

const textoVerificar =
    document.getElementById("textoVerificar");

const textoProximo =
    document.getElementById("textoProximo");

const explicacao =
    document.getElementById("explicacao");

const tituloExplicacao =
    document.getElementById("tituloExplicacao");

const textoExplicacao =
    document.getElementById("textoExplicacao");

const exemploExplicacao =
    document.getElementById("exemploExplicacao");

const pontuacao =
    document.getElementById("pontuacao");

const acertosElemento =
    document.getElementById("acertos");

const errosElemento =
    document.getElementById("erros");

const contadorQuestoes =
    document.getElementById("contadorQuestoes");

const textoProgresso =
    document.getElementById("textoProgresso");

const porcentagemProgresso =
    document.getElementById("porcentagemProgresso");

const progressoPreenchimento =
    document.getElementById("progressoPreenchimento");

const modalFinal =
    document.getElementById("modalFinal");

const fecharModal =
    document.getElementById("fecharModal");

const botaoRefazer =
    document.getElementById("botaoRefazer");

const botaoProximaAula =
    document.getElementById("botaoProximaAula");

const resultadoPontuacao =
    document.getElementById("resultadoPontuacao");

const resultadoAcertos =
    document.getElementById("resultadoAcertos");

const resultadoErros =
    document.getElementById("resultadoErros");

const botaoMaterial =
    document.getElementById("botaoMaterial");

const menuMobileButton =
    document.getElementById("menuMobileButton");

const menuMobile =
    document.getElementById("menuMobile");



/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function iniciarPagina() {

    preencherInformacoes();

    preencherMenuMobile();

    preencherQuestoesLaterais();

    carregarQuestao();

    criarCirculos();

}



/* =========================================================
   PREENCHER INFORMAÇÕES
========================================================= */

function preencherInformacoes() {

    logo.textContent =
        app.nome;

    nomeUsuario.textContent =
        app.usuario;

    categoria.textContent =
        app.categoria;

    tituloExercicio.textContent =
        app.titulo;

    descricaoExercicio.textContent =
        app.descricao;

    nivelExercicio.textContent =
        app.nivel;

    tempoExercicio.textContent =
        app.tempo;

    totalQuestoes.textContent =
        `${exercicios.length} questões`;

    textoInstrucaoTitulo.textContent =
        app.instrucaoTitulo;

    textoInstrucao.textContent =
        app.instrucao;

    textoDica.textContent =
        app.textoDica;

    textoAnterior.textContent =
        app.textoAnterior;

    textoVerificar.textContent =
        app.textoVerificar;

    textoProximo.textContent =
        app.textoProximo;

    tituloExplicacao.textContent =
        app.tituloExplicacao;

    tituloSeuProgresso.textContent =
        app.tituloSeuProgresso;

    textoPontos.textContent =
        app.textoPontos;

    textoAcertos.textContent =
        app.textoAcertos;

    textoErros.textContent =
        app.textoErros;

    tituloQuestoes.textContent =
        app.tituloQuestoes;

    tituloMaterial.textContent =
        app.tituloMaterial;

    descricaoMaterial.textContent =
        app.descricaoMaterial;

    botaoMaterial.href =
        app.material;

    footerLogo.textContent =
        app.nome;

    footerDescricao.textContent =
        app.footerDescricao;

    footerDireitos.textContent =
        app.footerDireitos;

}



/* =========================================================
   MENU MOBILE
========================================================= */

function preencherMenuMobile() {

    mobileInicio.textContent =
        "Início";

    mobileCursos.textContent =
        "Cursos";

    mobileExercicios.textContent =
        "Exercícios";

}



/* =========================================================
   QUESTÕES LATERAIS
========================================================= */

function preencherQuestoesLaterais() {

    for (
        let i = 1;
        i <= exercicios.length;
        i++
    ) {

        const elemento =
            document.getElementById(
                `questaoNumero${i}`
            );

        elemento.textContent =
            i;

    }

}



/* =========================================================
   CARREGAR QUESTÃO
========================================================= */

function carregarQuestao() {

    const exercicio =
        exercicios[questaoAtual];


    respondeu = false;


    numeroQuestao.textContent =
        `Questão ${exercicio.numero}`;


    tipoQuestao.textContent =
        "Complete";


    fraseQuestao.textContent =
        exercicio.frase;


    labelResposta.textContent =
        "Sua resposta";


    resposta.value =
        "";


    resposta.disabled =
        false;


    dicaTexto.textContent =
        app.textoDica;


    dicaTexto.textContent =
        "Ver dica";


    dicaTexto.textContent =
        app.textoDica;


    dicaTexto.textContent =
        "Ver dica";


    dicaBox.classList.remove("show");

    dicaTexto.textContent =
        exercicio.dica;


    feedback.classList.remove(
        "show",
        "correct",
        "incorrect"
    );


    explicacao.classList.remove(
        "show"
    );


    botaoVerificar.style.display =
        "inline-flex";


    botaoProximo.style.display =
        "none";


    botaoAnterior.disabled =
        questaoAtual === 0;


    atualizarProgresso();

    atualizarQuestoesLaterais();

    resposta.focus();

}



/* =========================================================
   ATUALIZAR PROGRESSO
========================================================= */

function atualizarProgresso() {

    const atual =
        questaoAtual + 1;

    const total =
        exercicios.length;

    const porcentagem =
        Math.round(
            (atual / total) * 100
        );


    textoProgresso.textContent =
        `Questão ${atual} de ${total}`;


    porcentagemProgresso.textContent =
        `${porcentagem}%`;


    progressoPreenchimento.style.width =
        `${porcentagem}%`;


    pontuacao.textContent =
        acertos * 10;


    acertosElemento.textContent =
        acertos;


    errosElemento.textContent =
        erros;


    contadorQuestoes.textContent =
        `${atual}/${total}`;

}



/* =========================================================
   ATUALIZAR QUESTÕES LATERAIS
========================================================= */

function atualizarQuestoesLaterais() {

    for (
        let i = 1;
        i <= exercicios.length;
        i++
    ) {

        const elemento =
            document.getElementById(
                `questaoNumero${i}`
            );


        elemento.classList.remove(
            "atual"
        );


        if (
            i === questaoAtual + 1
        ) {

            elemento.classList.add(
                "atual"
            );

        }

    }

}



/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function verificarResposta() {

    if (respondeu) {
        return;
    }


    const exercicio =
        exercicios[questaoAtual];


    const respostaAluno =
        resposta.value
            .trim()
            .toLowerCase();


    if (!respostaAluno) {

        resposta.focus();

        return;

    }


    const respostaCorreta =
        exercicio.resposta
            .trim()
            .toLowerCase();


    respondeu = true;


    if (
        respostaAluno ===
        respostaCorreta
    ) {

        acertarQuestao(
            exercicio
        );

    } else {

        errarQuestao(
            exercicio
        );

    }

}



/* =========================================================
   ACERTO
========================================================= */

function acertarQuestao(
    exercicio
) {

    acertos++;


    feedback.classList.add(
        "show",
        "correct"
    );


    feedbackIcone.className =
        "fa-solid fa-check";


    feedbackTitulo.textContent =
        "Muito bem!";


    feedbackTexto.textContent =
        `Resposta correta: ${exercicio.resposta}.`;


    resposta.disabled =
        true;


    mostrarExplicacao(
        exercicio
    );


    marcarQuestao(
        questaoAtual + 1,
        "correta"
    );


    botaoVerificar.style.display =
        "none";


    botaoProximo.style.display =
        "inline-flex";


    atualizarProgresso();

}



/* =========================================================
   ERRO
========================================================= */

function errarQuestao(
    exercicio
) {

    erros++;


    feedback.classList.add(
        "show",
        "incorrect"
    );


    feedbackIcone.className =
        "fa-solid fa-xmark";


    feedbackTitulo.textContent =
        "Quase lá!";


    feedbackTexto.textContent =
        `A resposta correta é: ${exercicio.resposta}.`;


    resposta.disabled =
        true;


    mostrarExplicacao(
        exercicio
    );


    marcarQuestao(
        questaoAtual + 1,
        "incorreta"
    );


    botaoVerificar.style.display =
        "none";


    botaoProximo.style.display =
        "inline-flex";


    atualizarProgresso();

}



/* =========================================================
   EXPLICAÇÃO
========================================================= */

function mostrarExplicacao(
    exercicio
) {

    textoExplicacao.textContent =
        exercicio.explicacao;


    exemploExplicacao.textContent =
        exercicio.exemplo;


    explicacao.classList.add(
        "show"
    );

}



/* =========================================================
   MARCAR QUESTÃO
========================================================= */

function marcarQuestao(
    numero,
    classe
) {

    const elemento =
        document.getElementById(
            `questaoNumero${numero}`
        );


    elemento.classList.remove(
        "atual"
    );


    elemento.classList.add(
        classe
    );

}



/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

function proximaQuestao() {

    if (
        questaoAtual <
        exercicios.length - 1
    ) {

        questaoAtual++;

        carregarQuestao();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        finalizarExercicio();

    }

}



/* =========================================================
   QUESTÃO ANTERIOR
========================================================= */

function questaoAnterior() {

    if (
        questaoAtual > 0
    ) {

        questaoAtual--;

        carregarQuestao();

    }

}



/* =========================================================
   FINALIZAR
========================================================= */

function finalizarExercicio() {

    const porcentagem =
        Math.round(
            (acertos /
                exercicios.length) *
                100
        );


    resultadoPontuacao.textContent =
        `${porcentagem}%`;


    resultadoAcertos.textContent =
        acertos;


    resultadoErros.textContent =
        erros;


    modalFinal.classList.add(
        "show"
    );

}



/* =========================================================
   REFAZER
========================================================= */

function refazerExercicio() {

    questaoAtual = 0;

    acertos = 0;

    erros = 0;

    respondeu = false;


    modalFinal.classList.remove(
        "show"
    );


    for (
        let i = 1;
        i <= exercicios.length;
        i++
    ) {

        const elemento =
            document.getElementById(
                `questaoNumero${i}`
            );


        elemento.classList.remove(
            "correta",
            "incorreta"
        );

    }


    carregarQuestao();

}



/* =========================================================
   DICA
========================================================= */

function mostrarDica() {

    const exercicio =
        exercicios[questaoAtual];


    dicaTexto.textContent =
        exercicio.dica;


    dicaBox.classList.toggle(
        "show"
    );

}



/* =========================================================
   ÁUDIO
========================================================= */

function ouvirFrase() {

    const exercicio =
        exercicios[questaoAtual];


    if (
        "speechSynthesis" in window
    ) {

        const fala =
            new SpeechSynthesisUtterance(
                exercicio.frase
            );


        fala.lang =
            "en-US";


        fala.rate =
            0.85;


        window.speechSynthesis.speak(
            fala
        );

    }

}



/* =========================================================
   CÍRCULOS
========================================================= */

function criarCirculos() {

    const container =
        document.getElementById(
            "background-circles"
        );


    const total =
        20;


    for (
        let i = 0;
        i < total;
        i++
    ) {

        const elemento =
            document.createElement(
                "span"
            );


        elemento.classList.add(
            "circle"
        );


        const tamanho =
            Math.floor(
                Math.random() * 70
            ) + 25;


        elemento.style.width =
            `${tamanho}px`;


        elemento.style.height =
            `${tamanho}px`;


        elemento.style.left =
            `${Math.random() * 100}%`;


        elemento.style.animationDuration =
            `${Math.floor(
                Math.random() * 15
            ) + 15}s`;


        elemento.style.animationDelay =
            `-${Math.floor(
                Math.random() * 15
            )}s`;


        elemento.style.background =
            "linear-gradient(135deg, #0f8da2, #f4bd32)";


        container.appendChild(
            elemento
        );

    }

}



/* =========================================================
   EVENTOS
========================================================= */

botaoVerificar.addEventListener(
    "click",
    verificarResposta
);


botaoProximo.addEventListener(
    "click",
    proximaQuestao
);


botaoAnterior.addEventListener(
    "click",
    questaoAnterior
);


dicaButton.addEventListener(
    "click",
    mostrarDica
);


audioButton.addEventListener(
    "click",
    ouvirFrase
);


fecharModal.addEventListener(
    "click",
    () => {

        modalFinal.classList.remove(
            "show"
        );

    }
);


botaoRefazer.addEventListener(
    "click",
    refazerExercicio
);


botaoProximaAula.addEventListener(
    "click",
    () => {

        modalFinal.classList.remove(
            "show"
        );

        alert(
            "Aqui você poderá direcionar o aluno para a próxima aula."
        );

    }
);


menuMobileButton.addEventListener(
    "click",
    () => {

        menuMobile.classList.toggle(
            "show"
        );

    }
);


resposta.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            if (
                !respondeu
            ) {

                verificarResposta();

            } else {

                proximaQuestao();

            }

        }

    }
);



/* =========================================================
   MODAL
========================================================= */

modalFinal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            modalFinal
        ) {

            modalFinal.classList.remove(
                "show"
            );

        }

    }
);



/* =========================================================
   INICIAR
========================================================= */

iniciarPagina();