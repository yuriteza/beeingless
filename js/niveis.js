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

const URL_VIDEO =
    "http://localhost:3000/video";
const video = document.getElementById("videoPlayer");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".play-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".card");

        const videoSrc = card.dataset.video;

        video.src = videoSrc;

        modal.style.display = "flex";

        video.play();

    });

});

closeBtn.addEventListener("click", () => {

    fecharModal();

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

        video.pause();
        video.currentTime = 0;
    }

});

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

}

 window.addEventListener(
    "click",
    (e) => {

        if (e.target === modal) {

            fecharModal();

        }

    }
);


async function carregarVideos() {

    try {

        const resposta = await fetch(URL_VIDEO);

        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar vídeos."
            );

        }

        const videos = await resposta.json();

        console.log(
            "Vídeos recebidos:",
            videos
        );

        organizarVideos(videos);

    } catch (erro) {

        console.error(
            "Erro ao carregar vídeos:",
            erro
        );

    }

}

carregarVideos();




function organizarVideos(videos) {

    cardsBasico.innerHTML = "";

    cardsIntermediario.innerHTML = "";

    cardsAvancado.innerHTML = "";

    videos.forEach(video => {

        const nivel = String(
            video.Niveis_idNiveis
        );

        if (nivel === "1") {

            criarCardVideo(
                cardsBasico,
                video
            );

        }

        else if (nivel === "2") {

            criarCardVideo(
                cardsIntermediario,
                video
            );

        }

        else if (nivel === "3") {

            criarCardVideo(
                cardsAvancado,
                video
            );

        }

    });

}


function criarCardVideo(container, video) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

        <div class="play-btn">

            <i class="fa-solid fa-play"></i>

        </div>

        <h3>
            ${video.nomeProduto}
        </h3>

        <span>
            ${video.categoria}
        </span>

    `;

    card.addEventListener(
        "click",
        () => abrirVideo(video)
    );

    container.appendChild(card);

}


function abrirVideo(video) {

    console.log(
        "Vídeo selecionado:",
        video
    );

    modalTitulo.textContent =
        video.nomeProduto;

    videoPlayerIngles.src =
        video.linkIngles;

    videoPlayerIngles.load();

    if (
        video.linkPortugues &&
        video.linkPortugues.trim() !== ""
    ) {

        explicacaoArea.style.display = "block";

        videoPlayerPortugues.src =
            video.linkPortugues;

        videoPlayerPortugues.load();

    } else {

        explicacaoArea.style.display = "none";

        videoPlayerPortugues.pause();

        videoPlayerPortugues.removeAttribute(
            "src"
        );

    }

    modal.style.display = "flex";

    videoPlayerIngles.play();

}

/*==================================================
=          CÍRCULOS ANIMADOS
==================================================*/

const TOTAL_CIRCULOS = 30;

const circulos = [];

function numero(min,max){

    return Math.random()*(max-min)+min;

}

/*==================================================
=          CRIAR CÍRCULOS
==================================================*/

function criarCirculos(){

    fundo.innerHTML = "";

    circulos.length = 0;

    for(let i=0;i<TOTAL_CIRCULOS;i++){

        const circle = document.createElement("span");

        circle.className = "circle";

        const tamanho = numero(60,320);

        const blur = numero(8,30);

        const opacity = numero(.08,.25);

        circle.style.width = tamanho + "px";
        circle.style.height = tamanho + "px";

        circle.style.filter = `blur(${blur}px)`;

        circle.style.opacity = opacity;

        circle.style.background = `
        radial-gradient(
            circle,
            rgb(61, 153, 138),
            rgba(0, 255, 98, 0.77)
        )`;

        fundo.appendChild(circle);

        circulos.push({

            el:circle,

            x:numero(-200,window.innerWidth),

            y:numero(-200,window.innerHeight),

            velocidadeX:numero(.15,.8),

            velocidadeY:numero(.10,.6),

            direcaoX:Math.random()>0.5?1:-1,

            direcaoY:Math.random()>0.5?1:-1,

            escala:numero(.8,1.3),

            angulo:numero(0,360),

            rotacao:numero(.02,.15)

        });

    }

}

criarCirculos();

/*==================================================
=        ANIMAÇÃO PRINCIPAL
==================================================*/

function animar(){

    circulos.forEach(c=>{

        c.x += c.velocidadeX*c.direcaoX;

        c.y += c.velocidadeY*c.direcaoY;

        c.angulo += c.rotacao;

        if(c.x>window.innerWidth+250){

            c.x=-250;

        }

        if(c.x<-250){

            c.x=window.innerWidth+250;

        }

        if(c.y>window.innerHeight+250){

            c.y=-250;

        }

        if(c.y<-250){

            c.y=window.innerHeight+250;

        }

        const pulsar =

        c.escala +

        Math.sin(Date.now()/1500+c.angulo)*0.08;

        c.el.style.transform=

        `translate(${c.x}px,${c.y}px)
         scale(${pulsar})
         rotate(${c.angulo}deg)`;

    });

    requestAnimationFrame(animar);

}

animar();


window.addEventListener("resize", () => {

    criarCirculos();

});

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