/* ==========================================================
                FUNDO ANIMADO
========================================================== */

const fundo = document.getElementById("background-circles");

const TOTAL_CIRCULOS = 30;

const circulos = [];


/* ==========================================================
                FUNÇÃO NÚMERO ALEATÓRIO
========================================================== */

function numero(min, max) {
    return Math.random() * (max - min) + min;
}


/* ==========================================================
                TAMANHO DA PÁGINA
========================================================== */

function obterAlturaPagina() {

    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );

}


/* ==========================================================
                CRIAR CÍRCULOS
========================================================== */

function criarCirculos() {

    fundo.innerHTML = "";

    circulos.length = 0;

    const alturaPagina = obterAlturaPagina();

    fundo.style.height = alturaPagina + "px";


    for (let i = 0; i < TOTAL_CIRCULOS; i++) {

        const circle = document.createElement("span");

        circle.className = "circle";


        /* TAMANHO */

        const tamanho = numero(60, 320);

        const blur = numero(8, 30);

        const opacity = numero(0.08, 0.25);


        circle.style.width = tamanho + "px";

        circle.style.height = tamanho + "px";

        circle.style.filter = `blur(${blur}px)`;

        circle.style.opacity = opacity;


        /* COR */

        circle.style.background = `
            radial-gradient(
                circle,
                 rgb(71, 223, 84),
                rgb(33, 182, 187)
            )
        `;


        fundo.appendChild(circle);


        /* POSIÇÃO */

        circulos.push({

            el: circle,

            x: numero(
                -200,
                window.innerWidth
            ),

            y: numero(
                0,
                alturaPagina
            ),

            velocidadeX: numero(0.15, 0.8),

            velocidadeY: numero(0.10, 0.6),

            direcaoX:
                Math.random() > 0.5
                    ? 1
                    : -1,

            direcaoY:
                Math.random() > 0.5
                    ? 1
                    : -1,

            escala: numero(0.8, 1.3),

            angulo: numero(0, 360),

            rotacao: numero(0.02, 0.15)

        });

    }

}


/* ==========================================================
                CRIAR
========================================================== */

criarCirculos();


/* ==========================================================
                ANIMAÇÃO
========================================================== */

function animar() {

    const alturaPagina = obterAlturaPagina();

    circulos.forEach(c => {

        c.x +=
            c.velocidadeX *
            c.direcaoX;

        c.y +=
            c.velocidadeY *
            c.direcaoY;


        c.angulo += c.rotacao;


        /* LIMITE HORIZONTAL */

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


        /* LIMITE VERTICAL */

        if (
            c.y >
            alturaPagina + 250
        ) {

            c.y = -250;

        }


        if (c.y < -250) {

            c.y =
                alturaPagina + 250;

        }


        /* PULSAÇÃO */

        const pulsar =
            c.escala +
            Math.sin(
                Date.now() / 1500 +
                c.angulo
            ) * 0.08;


        c.el.style.transform = `
            translate(${c.x}px, ${c.y}px)
            scale(${pulsar})
            rotate(${c.angulo}deg)
        `;

    });


    requestAnimationFrame(animar);

}


animar();


/* ==========================================================
                REDIMENSIONAMENTO
========================================================== */

window.addEventListener("resize", () => {

    const alturaPagina = obterAlturaPagina();

    fundo.style.height = alturaPagina + "px";

});