/*==================================================
=                DADOS DO BLOG
==================================================*/

const banner = {
    categoria: "Aprenda Inglês",
    titulo: "Domine o Inglês de forma simples e divertida",
    destaque: "Inglês",
    descricao:
        "Descubra conteúdos sobre gramática, vocabulário, pronúncia e conversação para acelerar seu aprendizado.",

    imagem: "/assets/bannerblog.png",

    botao: "Começar Agora"
};

const categorias = [
    "Todos",
    "Vocabulary",
    "Grammar",
    "Speaking",
    "Listening",
    "Reading",
    "Writing",
    "Pronunciation"
];

const tags = [
    "Verbos",
    "Vocabulário",
    "Tempos Verbais",
    "Business",
    "TOEFL",
    "IELTS",
    "Expressões",
    "Phrasal Verbs",
    "Conversação",
    "Inglês Básico"
];


/*==================================================
=                 POSTS
==================================================*/

const posts = [

{
    id:1,

    categoria:"Vocabulary",

    titulo:"20 palavras em inglês usadas diariamente",

    descricao:"Aprenda as palavras mais utilizadas pelos nativos e aumente rapidamente seu vocabulário.",

    imagem:"img/post1.jpg",

    autor:"Equipe",

    data:"12 Maio 2026",

    tempo:"6 min"
},

{
    id:2,

    categoria:"Grammar",

    titulo:"Present Perfect explicado de forma simples",

    descricao:"Entenda quando utilizar o Present Perfect sem complicação.",

    imagem:"img/post2.jpg",

    autor:"Equipe",

    data:"14 Maio 2026",

    tempo:"8 min"
},

{
    id:3,

    categoria:"Speaking",

    titulo:"Como perder o medo de falar inglês",

    descricao:"Técnicas para desenvolver confiança durante a conversação.",

    imagem:"img/post3.jpg",

    autor:"Equipe",

    data:"16 Maio 2026",

    tempo:"7 min"
},

{
    id:4,

    categoria:"Listening",

    titulo:"Melhore sua compreensão auditiva",

    descricao:"Exercícios simples para treinar seu listening todos os dias.",

    imagem:"img/post4.jpg",

    autor:"Equipe",

    data:"18 Maio 2026",

    tempo:"5 min"
},

{
    id:5,

    categoria:"Reading",

    titulo:"Como ler textos em inglês",

    descricao:"Aprenda estratégias para compreender artigos rapidamente.",

    imagem:"img/post5.jpg",

    autor:"Equipe",

    data:"21 Maio 2026",

    tempo:"9 min"
},

{
    id:6,

    categoria:"Writing",

    titulo:"Escrevendo frases naturalmente",

    descricao:"Evite traduções literais e escreva como um nativo.",

    imagem:"img/post6.jpg",

    autor:"Equipe",

    data:"25 Maio 2026",

    tempo:"6 min"
}

];


/*==================================================
=            POSTS POPULARES
==================================================*/

const populares = [

posts[2],

posts[0],

posts[4]

];


/*==================================================
=            VARIÁVEIS GLOBAIS
==================================================*/

const heroBanner = document.getElementById("heroBanner");

const categoriesContainer = document.getElementById("categoriesContainer");

const postsContainer = document.getElementById("postsContainer");

const popularPosts = document.getElementById("popularPosts");

const tagsContainer = document.getElementById("tagsContainer");

const pagination = document.getElementById("pagination");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

let categoriaAtual = "Todos";

let paginaAtual = 1;

const postsPorPagina = 4;

/*==================================================
=              RENDER BANNER
==================================================*/

function renderBanner() {

    heroBanner.innerHTML = `
        <div class="hero-card"
             style="background-image:url('${bannerblog.imagem}')">

            <div class="hero-content">

                <span class="hero-category">
                    ${bannerblog.categoria}
                </span>

                <h1>
                    Domine o
                    <span>${bannerblog.destaque}</span>
                    de forma simples e divertida
                </h1>

                <p>
                    ${bannerblog.descricao}
                </p>

                <button>
                    ${bannerblog.botao}
                </button>

            </div>

        </div>
    `;

}


/*==================================================
=           RENDER CATEGORIAS
==================================================*/

function renderCategorias() {

    categoriesContainer.innerHTML = "";

    categorias.forEach(categoria => {

        const button = document.createElement("button");

        button.className = "category-btn";

        if (categoria === categoriaAtual) {
            button.classList.add("active");
        }

        button.textContent = categoria;

        button.addEventListener("click", () => {

            categoriaAtual = categoria;

            paginaAtual = 1;

            renderCategorias();

            renderPosts();

        });

        categoriesContainer.appendChild(button);

    });

}


/*==================================================
=             FILTRAR POSTS
==================================================*/

function obterPostsFiltrados() {

    let resultado = [...posts];

    if (categoriaAtual !== "Todos") {

        resultado = resultado.filter(post =>
            post.categoria === categoriaAtual
        );

    }

    const termo = searchInput.value
        .trim()
        .toLowerCase();

    if (termo !== "") {

        resultado = resultado.filter(post =>

            post.titulo.toLowerCase().includes(termo) ||

            post.descricao.toLowerCase().includes(termo)

        );

    }

    return resultado;

}


/*==================================================
=              CRIAR CARD
==================================================*/

function criarCard(post) {

    return `

    <article class="post-card">

        <div class="post-image">

            <img src="${post.imagem}" alt="${post.titulo}">

            <span class="post-category">

                ${post.categoria}

            </span>

        </div>

        <div class="post-content">

            <div class="post-meta">

                <span>

                    <i class="fa-solid fa-user"></i>

                    ${post.autor}

                </span>

                <span>

                    <i class="fa-solid fa-calendar"></i>

                    ${post.data}

                </span>

                <span>

                    <i class="fa-solid fa-clock"></i>

                    ${post.tempo}

                </span>

            </div>

            <h2 class="post-title">

                ${post.titulo}

            </h2>

            <p class="post-description">

                ${post.descricao}

            </p>

            <a href="#" class="read-more">

                Leia Mais

                <i class="fa-solid fa-arrow-right"></i>

            </a>

        </div>

    </article>

    `;

}


/*==================================================
=             RENDER POSTS
==================================================*/

function renderPosts() {

    const lista = obterPostsFiltrados();

    const inicio = (paginaAtual - 1) * postsPorPagina;

    const fim = inicio + postsPorPagina;

    const pagina = lista.slice(inicio, fim);

    postsContainer.innerHTML = "";

    pagina.forEach(post => {

        postsContainer.innerHTML += criarCard(post);

    });

    renderPaginacao(lista.length);

}


/*==================================================
=          POSTS POPULARES
==================================================*/

function renderPostsPopulares() {

    popularPosts.innerHTML = "";

    populares.forEach(post => {

        popularPosts.innerHTML += `

        <div class="popular-post">

            <img src="${post.imagem}" alt="${post.titulo}">

            <div class="popular-content">

                <h4>

                    ${post.titulo}

                </h4>

                <span>

                    ${post.data}

                </span>

            </div>

        </div>

        `;

    });

}


/*==================================================
=                 TAGS
==================================================*/

function renderTags() {

    tagsContainer.innerHTML = "";

    tags.forEach(tag => {

        tagsContainer.innerHTML += `

            <span class="tag">

                ${tag}

            </span>

        `;

    });

}


/*==================================================
=               PAGINAÇÃO
==================================================*/

function renderPaginacao(totalPosts) {

    pagination.innerHTML = "";

    const paginas = Math.ceil(totalPosts / postsPorPagina);

    if (paginas <= 1) return;

    for (let i = 1; i <= paginas; i++) {

        const botao = document.createElement("button");

        botao.className = "page-btn";

        botao.textContent = i;

        if (i === paginaAtual) {

            botao.classList.add("active");

        }

        botao.addEventListener("click", () => {

            paginaAtual = i;

            renderPosts();

            window.scrollTo({

                top: 300,

                behavior: "smooth"

            });

        });

        pagination.appendChild(botao);

    }

}

/*==================================================
=               BUSCA
==================================================*/

function pesquisarPosts() {

    paginaAtual = 1;

    renderPosts();

}

searchButton.addEventListener("click", pesquisarPosts);

searchInput.addEventListener("keyup", (e) => {

    if (e.key === "Enter") {

        pesquisarPosts();

    }

});


searchInput.addEventListener("input", () => {

    pesquisarPosts();

});


/*==================================================
=           MENU MOBILE
==================================================*/

const menu = document.querySelector(".menu");

const menuMobile = document.querySelector(".menu-mobile");

const overlay = document.querySelector(".overlay");

function abrirMenu() {

    menu.classList.add("active");

    overlay.classList.add("active");

}

function fecharMenu() {

    menu.classList.remove("active");

    overlay.classList.remove("active");

}

menuMobile.addEventListener("click", abrirMenu);

overlay.addEventListener("click", fecharMenu);

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", fecharMenu);

});


/*==================================================
=             NEWSLETTER
==================================================*/

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = this.querySelector("input").value;

    if(email.trim() === ""){

        alert("Digite um e-mail válido.");

        return;

    }

    alert("Cadastro realizado com sucesso!");

    this.reset();

});


/*==================================================
=             BOTÃO HERO
==================================================*/

document.addEventListener("click", function(e){

    if(e.target.matches(".hero-content button")){

        window.scrollTo({

            top:700,

            behavior:"smooth"

        });

    }

});


/*==================================================
=          SCROLL HEADER
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});


/*==================================================
=           ABRIR POST
==================================================*/

document.addEventListener("click",(e)=>{

    const botao = e.target.closest(".read-more");

    if(!botao) return;

    e.preventDefault();

    const card = botao.closest(".post-card");

    const titulo = card.querySelector(".post-title").textContent;

    console.log("Abrir post:",titulo);

    /*
        Aqui você poderá fazer:

        location.href="post.html?id="+id;

        ou abrir um modal

        ou consumir uma API.

    */

});


/*==================================================
=             CLIQUE NAS TAGS
==================================================*/

document.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("tag")) return;

    searchInput.value = e.target.textContent;

    pesquisarPosts();

});


/*==================================================
=              INICIALIZAÇÃO
==================================================*/

function init(){

    renderBanner();

    renderCategorias();

    renderPosts();

    renderPostsPopulares();

    renderTags();

}

document.addEventListener("DOMContentLoaded", init);


/*==================================================
=                FUTURAS APIS
==================================================*/

/*

Exemplo para consumir API futuramente:

async function carregarPosts(){

    const resposta = await fetch("/api/posts");

    const dados = await resposta.json();

    posts.length = 0;

    posts.push(...dados);

    renderPosts();

}

*/

/*==================================================
=                FIM DO ARQUIVO
==================================================*/