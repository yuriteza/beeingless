/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const fundo = document.getElementById("background-circles");

const modal = document.getElementById("videoModal");

const videoPlayerIngles =
    document.getElementById("videoPlayerIngles");

const videoPlayerPortugues =
    document.getElementById("videoPlayerPortugues");

const modalTitulo =
    document.getElementById("modalTitulo");

const explicacaoArea =
    document.getElementById("explicacaoArea");

const cardsBasico =
    document.getElementById("cardsBasico");

const cardsIntermediario =
    document.getElementById("cardsIntermediario");

const cardsAvancado =
    document.getElementById("cardsAvancado");

const closeBtn =
    document.querySelector(".close");


/* =========================================================
   API
========================================================= */

const URL_VIDEO = "http://localhost:3000/video";


/* =========================================================
   CARREGAR VÍDEOS
========================================================= */

async function carregarVideos() {

    try {

        console.log("Buscando vídeos...");

        const resposta = await fetch(URL_VIDEO);

        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }

        const dados = await resposta.json();

        console.log("Resposta da API:", dados);


        /*
            Dependendo do seu controller,
            a API pode retornar:

            [
                {...},
                {...}
            ]

            ou:

            {
                videos: [...]
            }

            Por isso tratamos os dois casos.
        */

        let videos = dados;

        if (!Array.isArray(dados)) {

            if (Array.isArray(dados.videos)) {

                videos = dados.videos;

            } else if (Array.isArray(dados.data)) {

                videos = dados.data;

            } else if (Array.isArray(dados.resultado)) {

                videos = dados.resultado;

            } else {

                videos = [];

            }

        }


        console.log(
            "Quantidade de vídeos:",
            videos.length
        );


        organizarVideos(videos);

    } catch (erro) {

        console.error(
            "Erro ao carregar vídeos:",
            erro
        );

        mostrarErro(
            "Não foi possível carregar os vídeos."
        );

    }

}


/* =========================================================
   ORGANIZAR VÍDEOS POR NÍVEL
========================================================= */

function organizarVideos(videos) {

    /*
        Limpa os cards antigos
    */

    cardsBasico.innerHTML = "";

    cardsIntermediario.innerHTML = "";

    cardsAvancado.innerHTML = "";


    /*
        Verifica se existem vídeos
    */

    if (!videos || videos.length === 0) {

        mostrarMensagemNivel(
            cardsBasico,
            "Nenhum vídeo cadastrado."
        );

        mostrarMensagemNivel(
            cardsIntermediario,
            "Nenhum vídeo cadastrado."
        );

        mostrarMensagemNivel(
            cardsAvancado,
            "Nenhum vídeo cadastrado."
        );

        return;

    }


    /*
        Percorre todos os vídeos
    */

    videos.forEach(video => {

        console.log(
            "Vídeo:",
            video
        );


        /*
            Pega o ID do nível.

            O principal é:
            Niveis_idNiveis

            Os outros são apenas uma segurança
            caso o controller tenha usado outro nome.
        */

        const nivel =
            video.Niveis_idNiveis ??
            video.idNiveis ??
            video.nivelId ??
            video.nivel;


        console.log(
            "Nível encontrado:",
            nivel
        );


        /*
            BÁSICO
        */

        if (String(nivel) === "1") {

            criarCardVideo(
                cardsBasico,
                video
            );

        }


        /*
            INTERMEDIÁRIO
        */

        else if (String(nivel) === "2") {

            criarCardVideo(
                cardsIntermediario,
                video
            );

        }


        /*
            AVANÇADO
        */

        else if (String(nivel) === "3") {

            criarCardVideo(
                cardsAvancado,
                video
            );

        }

        else {

            console.warn(
                "Vídeo sem nível reconhecido:",
                video
            );

        }

    });

}


/* =========================================================
   CRIAR CARD
========================================================= */

function criarCardVideo(container, video) {

    const card =
        document.createElement("div");

    card.className = "card";


    /*
        Nome do produto/vídeo.

        Tentamos várias possibilidades
        para funcionar com diferentes retornos
        do backend.
    */

    const nome =
        video.nomeProduto ||
        video.nome ||
        video.titulo ||
        video.tituloVideo ||
        "Vídeo sem título";


    /*
        Categoria
    */

    const categoria =
        video.categoria ||
        "Aula";


    /*
        Cria o conteúdo do card
    */

    card.innerHTML = `

        <div class="play-btn">

            <i class="fa-solid fa-play"></i>

        </div>

        <h3>
            ${nome}
        </h3>

        <span>
            ${categoria}
        </span>

    `;


    /*
        Abre o vídeo ao clicar
    */

    card.addEventListener(
        "click",
        function () {

            abrirVideo(video);

        }
    );


    /*
        Coloca o card dentro do nível
    */

    container.appendChild(card);

}


/* =========================================================
   ABRIR VÍDEO
========================================================= */

function abrirVideo(video) {

    console.log(
        "Vídeo selecionado:",
        video
    );


    /*
        Título
    */

    const nome =
        video.nomeProduto ||
        video.nome ||
        video.titulo ||
        video.tituloVideo ||
        "Vídeo";


    modalTitulo.textContent = nome;


    /*
        LINK DO VÍDEO EM INGLÊS
    */

    const linkIngles =
        video.linkIngles ||
        video.link ||
        video.url ||
        "";


    /*
        Verifica se existe vídeo
    */

    if (!linkIngles) {

        alert(
            "Este vídeo ainda não possui um link cadastrado."
        );

        return;

    }


    /*
        Coloca o vídeo em inglês
    */

    videoPlayerIngles.src =
        linkIngles;

    videoPlayerIngles.load();


    /*
        VÍDEO DE EXPLICAÇÃO EM PORTUGUÊS
    */

    const linkPortugues =
        video.linkPortugues ||
        video.linkExplicacao ||
        video.linkExplicacaoPortugues ||
        "";


    if (
        linkPortugues &&
        linkPortugues.trim() !== ""
    ) {

        explicacaoArea.style.display =
            "block";

        videoPlayerPortugues.src =
            linkPortugues;

        videoPlayerPortugues.load();

    }

    else {

        explicacaoArea.style.display =
            "none";

        videoPlayerPortugues.pause();

        videoPlayerPortugues.removeAttribute(
            "src"
        );

    }


    /*
        Abre o modal
    */

    modal.style.display = "flex";


    /*
        Tenta iniciar o vídeo
    */

    videoPlayerIngles.play().catch(
        erro => {

            console.log(
                "O navegador bloqueou o autoplay.",
                erro
            );

        }
    );

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function fecharModal() {

    modal.style.display = "none";


    videoPlayerIngles.pause();

    videoPlayerPortugues.pause();


    videoPlayerIngles.removeAttribute(
        "src"
    );

    videoPlayerPortugues.removeAttribute(
        "src"
    );


    videoPlayerIngles.load();

    videoPlayerPortugues.load();

}


/* =========================================================
   BOTÃO FECHAR
========================================================= */

if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        fecharModal
    );

}


/* =========================================================
   FECHAR CLICANDO FORA
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            fecharModal();

        }

    }
);


/* =========================================================
   MENSAGEM DE ERRO
========================================================= */

function mostrarErro(mensagem) {

    cardsBasico.innerHTML = "";

    cardsIntermediario.innerHTML = "";

    cardsAvancado.innerHTML = "";


    mostrarMensagemNivel(
        cardsBasico,
        mensagem
    );

    mostrarMensagemNivel(
        cardsIntermediario,
        mensagem
    );

    mostrarMensagemNivel(
        cardsAvancado,
        mensagem
    );

}


/* =========================================================
   MENSAGEM QUANDO NÃO EXISTEM VÍDEOS
========================================================= */

function mostrarMensagemNivel(
    container,
    mensagem
) {

    const mensagemElemento =
        document.createElement("p");

    mensagemElemento.textContent =
        mensagem;

    mensagemElemento.style.gridColumn =
        "1 / -1";

    mensagemElemento.style.textAlign =
        "center";

    mensagemElemento.style.padding =
        "30px";

    mensagemElemento.style.color =
        "#173d24";

    container.appendChild(
        mensagemElemento
    );

}


/* =========================================================
   CÍRCULOS ANIMADOS
========================================================= */

const TOTAL_CIRCULOS = 30;

const circulos = [];


function numero(min, max) {

    return Math.random() *
        (max - min) +
        min;

}


/* =========================================================
   CRIAR CÍRCULOS
========================================================= */

function criarCirculos() {

    fundo.innerHTML = "";

    circulos.length = 0;


    for (
        let i = 0;
        i < TOTAL_CIRCULOS;
        i++
    ) {

        const circle =
            document.createElement("span");

        circle.className =
            "circle";


        const tamanho =
            numero(60, 320);

        const blur =
            numero(8, 30);

        const opacity =
            numero(.08, .25);


        circle.style.width =
            tamanho + "px";

        circle.style.height =
            tamanho + "px";

        circle.style.filter =
            `blur(${blur}px)`;

        circle.style.opacity =
            opacity;


        circle.style.background = `
            radial-gradient(
                circle,
                rgba(61,153,138,.45),
                rgba(161,211,186,.25),
                transparent
            )
        `;


        fundo.appendChild(circle);


        circulos.push({

            el: circle,

            x: numero(
                -200,
                window.innerWidth
            ),

            y: numero(
                -200,
                window.innerHeight
            ),

            velocidadeX:
                numero(.15, .8),

            velocidadeY:
                numero(.10, .6),

            direcaoX:
                Math.random() > .5
                    ? 1
                    : -1,

            direcaoY:
                Math.random() > .5
                    ? 1
                    : -1,

            escala:
                numero(.8, 1.3),

            angulo:
                numero(0, 360),

            rotacao:
                numero(.02, .15)

        });

    }

}


criarCirculos();


/* =========================================================
   ANIMAÇÃO
========================================================= */

function animar() {

    circulos.forEach(c => {

        c.x +=
            c.velocidadeX *
            c.direcaoX;

        c.y +=
            c.velocidadeY *
            c.direcaoY;

        c.angulo +=
            c.rotacao;


        if (
            c.x >
            window.innerWidth + 250
        ) {

            c.x = -250;

        }


        if (c.x < -250) {

            c.x =
                window.innerWidth + 250;

        }


        if (
            c.y >
            window.innerHeight + 250
        ) {

            c.y = -250;

        }


        if (c.y < -250) {

            c.y =
                window.innerHeight + 250;

        }


        const pulsar =
            c.escala +
            Math.sin(
                Date.now() / 1500 +
                c.angulo
            ) * .08;


        c.el.style.transform =
            `
            translate(
                ${c.x}px,
                ${c.y}px
            )
            scale(${pulsar})
            rotate(${c.angulo}deg)
            `;

    });


    requestAnimationFrame(
        animar
    );

}


animar();


/* =========================================================
   REDIMENSIONAMENTO
========================================================= */

window.addEventListener(
    "resize",
    function () {

        criarCirculos();

    }
);


/* =========================================================
   MENU
========================================================= */

document
    .getElementById("idhome")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../index.html";

        }
    );


document
    .getElementById("idnivel")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../pages/niveis.html";

        }
    );


document
    .getElementById("idblog")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../pages/blog.html";

        }
    );


document
    .getElementById("idtopicos")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../pages/topicos.html";

        }
    );


document
    .getElementById("idexercicios")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../pages/exercicios.html";

        }
    );


document
    .getElementById("idteste")
    .addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "../pages/teste_nivel.html";

        }
    );


/* =========================================================
   INICIAR
========================================================= */

carregarVideos();