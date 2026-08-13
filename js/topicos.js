/*=========================================================
    DADOS DA PÁGINA
=========================================================*/

const dadosPagina = {

    subtitulo: "Categorias",

    titulo: "Explore nossos tópicos",

    descricao:
        "Escolha um dos tópicos abaixo para encontrar conteúdos organizados, exercícios, dicas e materiais que irão ajudar você a evoluir no aprendizado."

};


/*=========================================================
    TÓPICOS
=========================================================*/

const topicos = [

    {

        categoria: "NATURE & SCIENCE",

        titulo: "Flores",

        descricao:
            "Descubra o incrível mundo das abelhas, sua importância para a natureza e curiosidades sobre esses pequenos polinizadores.",

        imagem: "../assets/natureto.png",

        link: "abelhas.html"

    },

    {

        categoria: "ZOOLOGY",

        titulo: "Animais",

        descricao:
            "Explore o universo dos animais, conheça diferentes espécies, habitats, comportamentos e curiosidades.",

        imagem: "../assets/animaisto.png",

        link: "animais.html"

    },

    {

        categoria: "TRIVIA",

        titulo: "Fatos e curiosidades",

        descricao:
            "Aprenda fatos interessantes, curiosidades surpreendentes e informações que vão ampliar seu conhecimento.",

        imagem: "../assets/triviato.png",

        link: "fatos-curiosidades.html"

    },

    {

        categoria: "SELF-CARE",

        titulo: "Saúde e bem-estar",

        descricao:
            "Encontre conteúdos sobre qualidade de vida, hábitos saudáveis, saúde física e mental.",

        imagem: "../assets/saudeto.png",

        link: "saude-bem-estar.html"

    },

    {

        categoria: "NUTRITION",

        titulo: "Nutrição",

        descricao:
            "Descubra dicas de alimentação saudável, nutrientes, receitas e informações para uma vida equilibrada.",

        imagem: "../assets/nutricaoto.png",

        link: "nutricao.html"

    },

    {

        categoria: "GLOBAL NEWS",

        titulo: "Notícias e atualidades",

        descricao:
            "Fique por dentro das principais notícias, acontecimentos e temas importantes do Brasil e do mundo.",

        imagem: "../assets/newsto.png",

        link: "noticias.html"

    },

    {

        categoria: "PSYCHOLOGY",

        titulo: "Emoções e sentimentos",

        descricao:
            "Compreenda melhor as emoções humanas, o comportamento e o desenvolvimento pessoal.",

        imagem: "../assets/sentito.png",

        link: "emocoes-sentimentos.html"

    },

    {

        categoria: "SOCIALIZE",

        titulo: "Conversação do dia a dia",

        descricao:
            "Aprenda diálogos, expressões e situações comuns para melhorar sua comunicação no cotidiano.",

        imagem: "../assets/convoto.png",

        link: "conversacao.html"

    }

];

/*=========================================================
    ELEMENTOS DA PÁGINA
=========================================================*/

const subtitulo = document.getElementById("subtitulo");

const titulo = document.getElementById("titulo");

const descricao = document.getElementById("descricao");


/*=========================================================
    CABEÇALHO
=========================================================*/

subtitulo.textContent = dadosPagina.subtitulo;

titulo.textContent = dadosPagina.titulo;

descricao.textContent = dadosPagina.descricao;

/*=========================================================
    PREENCHER CARDS
=========================================================*/

for (let i = 0; i < topicos.length; i++) {

    const numero = i + 1;

    const imagem = document.getElementById(`img${numero}`);
    const categoria = document.getElementById(`categoria${numero}`);
    const tituloCard = document.getElementById(`titulo${numero}`);
    const descricaoCard = document.getElementById(`descricao${numero}`);
    const link = document.getElementById(`link${numero}`);

    if (!imagem) continue;

    imagem.src = topicos[i].imagem;
    imagem.alt = topicos[i].titulo;

    categoria.textContent = topicos[i].categoria;

    tituloCard.textContent = topicos[i].titulo;

    descricaoCard.textContent = topicos[i].descricao;

    link.href = topicos[i].link;

}


/*=========================================================
    HOVER DAS IMAGENS
=========================================================*/

const imagens = document.querySelectorAll(".topic-image img");

imagens.forEach((imagem) => {

    imagem.addEventListener("mouseenter", () => {

        imagem.style.transform = "scale(1.08)";

    });

    imagem.addEventListener("mouseleave", () => {

        imagem.style.transform = "scale(1)";

    });

});


/*=========================================================
    EFEITO NOS BOTÕES
=========================================================*/

const botoes = document.querySelectorAll(".btn-topic");

botoes.forEach((botao) => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-3px)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "translateY(0)";

    });

});


/*=========================================================
    SCROLL SUAVE PARA O TOPO
=========================================================*/

window.addEventListener("load", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================================================
    CÍRCULOS DECORATIVOS
=========================================================*/

const backgroundCircles = document.getElementById("backgroundCircles");

if (backgroundCircles) {

    for (let i = 0; i < 14; i++) {

        const circle = document.createElement("div");

        circle.classList.add("circle");

        circle.style.left = Math.random() * 100 + "%";

        circle.style.top = Math.random() * 100 + "%";

        circle.style.animationDelay = (Math.random() * 8) + "s";

        backgroundCircles.appendChild(circle);

    }

}


/*=========================================================
    ANIMAÇÃO AO APARECER NA TELA
=========================================================*/

const cards = document.querySelectorAll(".topic-card");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

cards.forEach((card) => {

    observador.observe(card);

});


/*=========================================================
    ACESSIBILIDADE DAS IMAGENS
=========================================================*/

document.querySelectorAll(".topic-image img").forEach((img) => {

    img.setAttribute("loading", "lazy");

    img.setAttribute("draggable", "false");

});


/*=========================================================
    PREVENIR LINKS VAZIOS
=========================================================*/

document.querySelectorAll(".btn-topic").forEach((botao) => {

    botao.addEventListener("click", (e) => {

        if (
            botao.getAttribute("href") === "#" ||
            botao.getAttribute("href") === ""
        ) {

            e.preventDefault();

        }

    });

});


/*=========================================================
    ANO AUTOMÁTICO NO FOOTER
=========================================================*/

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


/*=========================================================
    LOG
=========================================================*/

console.log("Página de tópicos carregada com sucesso.");

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