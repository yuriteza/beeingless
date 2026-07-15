/*====================================================
=
=           BLOG.JS
=           PARTE 1
=
= Banco de Dados
= Variáveis Globais
=
=====================================================*/


/*=========================
        HERO
=========================*/

const hero = {

    titulo: "Domine o Inglês de forma simples e divertida",

    destaque: "Inglês",

    categoria: "Aprenda Inglês",

    descricao:
        "Descubra conteúdos sobre gramática, vocabulário, pronúncia, listening, speaking e muito mais.",

    imagem: "img/banner.jpg",

    botao: "Começar Agora"

};



/*=========================
      CATEGORIAS
=========================*/

const categorias = [

    "Todos",

    "Grammar",

    "Vocabulary",

    "Speaking",

    "Listening",

    "Reading",

    "Writing",

    "Pronunciation"

];



/*=========================
        POSTS
=========================*/

const posts = [

{

    id:1,

    categoria:"Grammar",

    titulo:"Como aprender os tempos verbais em inglês",

    descricao:"Aprenda uma metodologia simples para dominar os tempos verbais rapidamente.",

    imagem:"img/post1.jpg",

    autor:"Equipe",

    data:"15 Jul 2026",

    leitura:"6 min"

},

{

    id:2,

    categoria:"Vocabulary",

    titulo:"50 palavras usadas todos os dias",

    descricao:"Amplie seu vocabulário aprendendo as palavras mais frequentes da língua inglesa.",

    imagem:"/img/vocabularioblog.png",

    autor:"Equipe",

    data:"12 Jul 2026",

    leitura:"8 min"

},

{

    id:3,

    categoria:"Speaking",

    titulo:"Como perder o medo de falar inglês",

    descricao:"Dicas práticas para desenvolver confiança durante conversações.",

    imagem:"img/post3.jpg",

    autor:"Equipe",

    data:"10 Jul 2026",

    leitura:"5 min"

},

{

    id:4,

    categoria:"Listening",

    titulo:"Treine seu ouvido todos os dias",

    descricao:"Exercícios simples para melhorar sua compreensão auditiva.",

    imagem:"img/post4.jpg",

    autor:"Equipe",

    data:"08 Jul 2026",

    leitura:"7 min"

},

{

    id:5,

    categoria:"Reading",

    titulo:"Como ler textos em inglês sem traduzir",

    descricao:"Aprenda técnicas para compreender textos naturalmente.",

    imagem:"img/post5.jpg",

    autor:"Equipe",

    data:"05 Jul 2026",

    leitura:"9 min"

},

{

    id:6,

    categoria:"Writing",

    titulo:"Escrevendo frases como um nativo",

    descricao:"Evite traduções literais e escreva de maneira natural.",

    imagem:"img/post6.jpg",

    autor:"Equipe",

    data:"03 Jul 2026",

    leitura:"6 min"

}

];


/*=========================
      POSTS POPULARES
=========================*/

const populares = [

    posts[2],

    posts[0],

    posts[4]

];


/*=========================
        TAGS
=========================*/

const tags = [

    "Grammar",

    "Vocabulary",

    "Business",

    "TOEFL",

    "IELTS",

    "Speaking",

    "Listening",

    "Reading",

    "Writing",

    "Phrasal Verbs",

    "Idioms",

    "Conversation"

];


/*=========================
      PAGINAÇÃO
=========================*/

const POSTS_POR_PAGINA = 4;

let paginaAtual = 1;

let categoriaAtual = "Todos";

let termoPesquisa = "";


/*=========================
      ELEMENTOS HTML
=========================*/

const heroContainer = document.getElementById("heroContainer");

const categoriesContainer = document.getElementById("categoriesContainer");

const postsContainer = document.getElementById("postsContainer");

const popularPosts = document.getElementById("popularPosts");

const sidebarCategories = document.getElementById("sidebarCategories");

const tagsContainer = document.getElementById("tagsContainer");

const pagination = document.getElementById("pagination");

const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("searchInput");

const menuMobile = document.getElementById("menuMobile");

const navbar = document.querySelector(".navbar");

const overlay = document.getElementById("overlay");

const newsletter = document.getElementById("newsletter");


/*=========================
      UTILITÁRIOS
=========================*/

function formatarData(data){

    return data;

}

function slug(texto){

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .replace(/\s+/g,"-");

}

/*====================================================
=
=           BLOG.JS
=           PARTE 2
=
= Hero
= Categorias
= Sidebar
= Tags
=
=====================================================*/


/*=========================
      HERO BANNER
=========================*/

function renderHero(){

    heroContainer.innerHTML = `

        <div
            class="hero-card"
            style="background-image:url('${hero.imagem}')"
        >

            <div class="hero-content">

                <span class="hero-category">

                    ${hero.categoria}

                </span>

                <h1>

                    ${hero.titulo.replace(
                        hero.destaque,
                        `<span>${hero.destaque}</span>`
                    )}

                </h1>

                <p>

                    ${hero.descricao}

                </p>

                <button>

                    ${hero.botao}

                </button>

            </div>

        </div>

    `;

}


/*=========================
    CATEGORIAS TOPO
=========================*/

function renderCategorias(){

    categoriesContainer.innerHTML = "";

    categorias.forEach(categoria => {

        const button = document.createElement("button");

        button.className = "category-btn";

        if(categoria === categoriaAtual){

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


/*=========================
   CATEGORIAS SIDEBAR
=========================*/

function renderSidebarCategorias(){

    sidebarCategories.innerHTML = "";

    categorias
        .filter(item => item !== "Todos")
        .forEach(categoria => {

            const quantidade = posts.filter(post =>
                post.categoria === categoria
            ).length;

            sidebarCategories.innerHTML += `

                <div
                    class="sidebar-category"
                    data-category="${categoria}"
                >

                    <span>

                        ${categoria}

                    </span>

                    <span>

                        ${quantidade}

                    </span>

                </div>

            `;

        });

}


/*=========================
      POSTS POPULARES
=========================*/

function renderPopulares(){

    popularPosts.innerHTML = "";

    populares.forEach(post => {

        popularPosts.innerHTML += `

            <div class="popular-post">

                <img
                    src="${post.imagem}"
                    alt="${post.titulo}"
                >

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


/*=========================
          TAGS
=========================*/

function renderTags(){

    tagsContainer.innerHTML = "";

    tags.forEach(tag => {

        tagsContainer.innerHTML += `

            <span
                class="tag"
                data-tag="${tag}"
            >

                ${tag}

            </span>

        `;

    });

}


/*=========================
   EVENTOS SIDEBAR
=========================*/

document.addEventListener("click", (e) => {

    const categoria = e.target.closest(
        ".sidebar-category"
    );

    if(!categoria) return;

    categoriaAtual =
        categoria.dataset.category;

    paginaAtual = 1;

    renderCategorias();

    renderPosts();

});


/*=========================
      EVENTOS TAGS
=========================*/

document.addEventListener("click", (e) => {

    const tag = e.target.closest(".tag");

    if(!tag) return;

    searchInput.value =
        tag.dataset.tag;

    termoPesquisa =
        tag.dataset.tag;

    paginaAtual = 1;

    renderPosts();

});

/*====================================================
=
=           BLOG.JS
=           PARTE 3
=
= Filtro
= Cards
= Renderização dos Posts
=
=====================================================*/


/*=========================
      FILTRAR POSTS
=========================*/

function obterPostsFiltrados(){

    let resultado = [...posts];

    if(categoriaAtual !== "Todos"){

        resultado = resultado.filter(post =>
            post.categoria === categoriaAtual
        );

    }

    if(termoPesquisa.trim() !== ""){

        resultado = resultado.filter(post =>

            post.titulo.toLowerCase().includes(
                termoPesquisa.toLowerCase()
            ) ||

            post.descricao.toLowerCase().includes(
                termoPesquisa.toLowerCase()
            ) ||

            post.categoria.toLowerCase().includes(
                termoPesquisa.toLowerCase()
            )

        );

    }

    return resultado;

}


/*=========================
      CARD DO POST
=========================*/

function criarCard(post){

    return `

        <article class="post-card fade-up">

            <div class="post-image">

                <img
                    src="${post.imagem}"
                    alt="${post.titulo}"
                >

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

                        ${formatarData(post.data)}

                    </span>

                    <span>

                        <i class="fa-solid fa-clock"></i>

                        ${post.leitura}

                    </span>

                </div>

                <h2 class="post-title">

                    ${post.titulo}

                </h2>

                <p class="post-description">

                    ${post.descricao}

                </p>

                <a
                    href="#"
                    class="read-more"
                    data-id="${post.id}"
                >

                    Leia Mais

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        </article>

    `;

}


/*=========================
      RENDER POSTS
=========================*/

function renderPosts(){

    const lista = obterPostsFiltrados();

    const inicio =
        (paginaAtual - 1) * POSTS_POR_PAGINA;

    const fim =
        inicio + POSTS_POR_PAGINA;

    const pagina =
        lista.slice(inicio, fim);

    postsContainer.innerHTML = "";

    if(lista.length === 0){

        postsContainer.innerHTML = `

            <div
                style="
                grid-column:1/-1;
                text-align:center;
                padding:70px 20px;
                "
            >

                <h2>

                    Nenhum artigo encontrado.

                </h2>

                <p>

                    Tente pesquisar outro termo.

                </p>

            </div>

        `;

        pagination.innerHTML = "";

        return;

    }

    pagina.forEach(post => {

        postsContainer.innerHTML += criarCard(post);

    });

    renderPaginacao(lista.length);

}


/*=========================
      CONTAGEM
=========================*/

function totalPaginas(){

    return Math.ceil(

        obterPostsFiltrados().length /

        POSTS_POR_PAGINA

    );

}

/*====================================================
=
=           BLOG.JS
=           PARTE 4
=
= Paginação
= Leia Mais
= Inicialização
=
=====================================================*/


/*=========================
        PAGINAÇÃO
=========================*/

function renderPaginacao(totalPosts){

    pagination.innerHTML = "";

    const total = Math.ceil(totalPosts / POSTS_POR_PAGINA);

    if(total <= 1){

        return;

    }

    /* Botão Anterior */

    const anterior = document.createElement("button");

    anterior.className = "page-btn";

    anterior.innerHTML = "&laquo;";

    anterior.disabled = paginaAtual === 1;

    anterior.addEventListener("click", () => {

        if(paginaAtual > 1){

            paginaAtual--;

            renderPosts();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });

    pagination.appendChild(anterior);


    /* Números */

    for(let i = 1; i <= total; i++){

        const botao = document.createElement("button");

        botao.className = "page-btn";

        botao.textContent = i;

        if(i === paginaAtual){

            botao.classList.add("active");

        }

        botao.addEventListener("click", () => {

            paginaAtual = i;

            renderPosts();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

        pagination.appendChild(botao);

    }


    /* Próximo */

    const proximo = document.createElement("button");

    proximo.className = "page-btn";

    proximo.innerHTML = "&raquo;";

    proximo.disabled = paginaAtual === total;

    proximo.addEventListener("click", () => {

        if(paginaAtual < total){

            paginaAtual++;

            renderPosts();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });

    pagination.appendChild(proximo);

}


/*=========================
      LEIA MAIS
=========================*/

document.addEventListener("click", function(e){

    const link = e.target.closest(".read-more");

    if(!link){

        return;

    }

    e.preventDefault();

    const id = Number(link.dataset.id);

    const post = posts.find(item => item.id === id);

    if(!post){

        return;

    }

    console.log("Abrindo post:", post);

    /*
        Futuramente você pode fazer:

        location.href =
        "post.html?id=" + id;

        ou abrir um modal.
    */

});


/*=========================
      BOTÃO HERO
=========================*/

document.addEventListener("click", function(e){

    if(e.target.closest(".hero-content button")){

        document.querySelector(".blog").scrollIntoView({

            behavior:"smooth"

        });

    }

});


/*=========================
      INICIALIZAÇÃO
=========================*/

function init(){

    renderHero();

    renderCategorias();

    renderSidebarCategorias();

    renderPopulares();

    renderTags();

    renderPosts();

}


/*=========================
      DOM READY
=========================*/

document.addEventListener(

    "DOMContentLoaded",

    init

);

/*====================================================
=
=           BLOG.JS
=           PARTE 5
=
= Pesquisa
= Busca
=
=====================================================*/


/*=========================
      PESQUISA
=========================*/

function pesquisarPosts(){

    termoPesquisa = searchInput.value.trim();

    paginaAtual = 1;

    renderPosts();

}


/*=========================
      FORMULÁRIO
=========================*/

searchForm.addEventListener(

    "submit",

    function(e){

        e.preventDefault();

        pesquisarPosts();

    }

);


/*=========================
      TEMPO REAL
=========================*/

searchInput.addEventListener(

    "input",

    function(){

        pesquisarPosts();

    }

);


/*=========================
      ESC
=========================*/

searchInput.addEventListener(

    "keydown",

    function(e){

        if(e.key === "Escape"){

            searchInput.value = "";

            termoPesquisa = "";

            paginaAtual = 1;

            renderPosts();

        }

    }

);


/*=========================
      LIMPAR
=========================*/

function limparPesquisa(){

    searchInput.value = "";

    termoPesquisa = "";

    paginaAtual = 1;

    renderPosts();

}


/*=========================
      ATALHO
=========================*/

document.addEventListener(

    "keydown",

    function(e){

        if(e.ctrlKey && e.key.toLowerCase() === "k"){

            e.preventDefault();

            searchInput.focus();

        }

    }

);


/*=========================
      TAGS
=========================*/

document.addEventListener(

    "click",

    function(e){

        const tag = e.target.closest(".tag");

        if(!tag){

            return;

        }

        const texto = tag.dataset.tag;

        searchInput.value = texto;

        termoPesquisa = texto;

        paginaAtual = 1;

        renderPosts();

    }

);


/*=========================
      CATEGORIAS
=========================*/

document.addEventListener(

    "click",

    function(e){

        const categoria = e.target.closest(".sidebar-category");

        if(!categoria){

            return;

        }

        categoriaAtual = categoria.dataset.category;

        paginaAtual = 1;

        renderCategorias();

        renderPosts();

    }

);

/*====================================================
=
=           BLOG.JS
=           PARTE 6
=
= Menu Mobile
= Overlay
= Header
= Newsletter
=
=====================================================*/


/*=========================
      MENU MOBILE
=========================*/

function abrirMenu(){

    navbar.classList.add("active");

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

function fecharMenu(){

    navbar.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow = "";

}


/*=========================
      EVENTOS MENU
=========================*/

menuMobile.addEventListener(

    "click",

    abrirMenu

);

overlay.addEventListener(

    "click",

    fecharMenu

);


/*=========================
      FECHAR MENU
=========================*/

document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",fecharMenu);

});


/*=========================
      ESC
=========================*/

document.addEventListener(

    "keydown",

    function(e){

        if(e.key==="Escape"){

            fecharMenu();

        }

    }

);


/*=========================
      HEADER SCROLL
=========================*/

const header = document.querySelector(".header");

window.addEventListener(

    "scroll",

    function(){

        if(window.scrollY>30){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

);


/*=========================
      NEWSLETTER
=========================*/

newsletter.addEventListener(

    "submit",

    function(e){

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if(email===""){

            alert("Informe um e-mail válido.");

            return;

        }

        alert("Inscrição realizada com sucesso!");

        this.reset();

    }

);


/*=========================
      IMAGENS
=========================*/

document.addEventListener(

    "error",

    function(e){

        if(e.target.tagName==="IMG"){

            e.target.src="img/no-image.jpg";

        }

    },

    true

);


/*=========================
      ANIMAÇÃO
=========================*/

const observer = new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },

    {

        threshold:.15

    }

);


function observarCards(){

    document.querySelectorAll(".post-card").forEach(card=>{

        observer.observe(card);

    });

}


/*=========================
      REOBSERVAR
=========================*/

const renderPostsOriginal = renderPosts;

renderPosts = function(){

    renderPostsOriginal();

    observarCards();

};


/*=========================
      PRELOAD
=========================*/

window.addEventListener(

    "load",

    function(){

        document.body.classList.add("loaded");

    }

);

/*====================================================
=
=           BLOG.JS
=           PARTE 7
=
= Utilidades
= Acessibilidade
= Otimizações
=
=====================================================*/


/*=========================
      ATUALIZA RODAPÉ
=========================*/

(function(){

    const texto = document.querySelector(".footer-content p");

    if(!texto){

        return;

    }

    texto.innerHTML =

        `© ${new Date().getFullYear()} Todos os direitos reservados.`;

})();


/*=========================
      ACESSIBILIDADE
=========================*/

document.querySelectorAll("button").forEach(botao=>{

    if(!botao.getAttribute("type")){

        botao.setAttribute("type","button");

    }

});


/*=========================
      IMAGENS
=========================*/

document.querySelectorAll("img").forEach(img=>{

    img.loading = "lazy";

});


/*=========================
      LINKS
=========================*/

document.querySelectorAll("a").forEach(link=>{

    if(link.getAttribute("href")==="#"){

        link.addEventListener("click",e=>{

            e.preventDefault();

        });

    }

});


/*=========================
      RESIZE
=========================*/

window.addEventListener(

    "resize",

    ()=>{

        if(window.innerWidth>991){

            fecharMenu();

        }

    }

);


/*=========================
      OBSERVADOR
=========================*/

const mutation = new MutationObserver(()=>{

    observarCards();

});

mutation.observe(

    postsContainer,

    {

        childList:true

    }

);


/*=========================
      PERFORMANCE
=========================*/

window.addEventListener(

    "pageshow",

    ()=>{

        observarCards();

    }

);


/*=========================
      DEBUG
=========================*/

console.log(

    "%cBlog carregado com sucesso!",

    "color:#1F5A56;font-size:16px;font-weight:bold"

);

console.table(posts);


/*=========================
      OBJETO GLOBAL
=========================*/

window.blog={

    hero,

    categorias,

    posts,

    populares,

    tags,

    renderHero,

    renderCategorias,

    renderPosts,

    renderPopulares,

    renderSidebarCategorias,

    renderTags,

    limparPesquisa

};


/*=========================
      FIM
=========================*/

console.log(

    "Projeto inicializado."

);