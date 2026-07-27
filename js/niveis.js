const modal = document.getElementById("videoModal");
const video = document.getElementById("videoPlayer");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".play-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const videoSrc = btn.dataset.video;

        video.src = videoSrc;

        modal.style.display = "flex";

        video.play();
    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    video.pause();
    video.currentTime = 0;

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

        video.pause();
        video.currentTime = 0;
    }

});



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



