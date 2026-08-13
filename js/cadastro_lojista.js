/*==================================================
    ELEMENTOS DA TELA
==================================================*/

const titulo =
    document.getElementById("titulo");

const subtitulo =
    document.getElementById("subtitulo");


const lblNome =
    document.getElementById("lblNome");

const lblEmail =
    document.getElementById("lblEmail");

const lblCpf =
    document.getElementById("lblCpf");

const lblSenha =
    document.getElementById("lblSenha");

const lblCnpj =
    document.getElementById("lblCnpj");

const lblTelefone =
    document.getElementById("lblTelefone");


const nome =
    document.getElementById("nome");

const email =
    document.getElementById("email");

const cpf =
    document.getElementById("cpf");

const senha =
    document.getElementById("senha");

const cnpj =
    document.getElementById("cnpj");

const telefone =
    document.getElementById("telefone");


const erroNome =
    document.getElementById("erroNome");

const erroEmail =
    document.getElementById("erroEmail");

const erroCpf =
    document.getElementById("erroCpf");

const erroSenha =
    document.getElementById("erroSenha");

const erroCnpj =
    document.getElementById("erroCnpj");

const erroTelefone =
    document.getElementById("erroTelefone");


const btnSenha =
    document.getElementById("btnSenha");

const btnCadastrar =
    document.getElementById("btnCadastrar");

const btnLimpar =
    document.getElementById("btnLimpar");


const formulario =
    document.getElementById("formCadastro");


const fundo =
    document.getElementById("background-circles");


/*==================================================
    DADOS DA TELA
==================================================*/

const tela = {

    titulo:
        "Cadastro do Lojista",

    subtitulo:
        "Preencha seus dados para criar sua conta.",

    labels: {

        nome: "Nome Completo",

        email: "E-mail",

        cpf: "CPF",

        senha: "Senha",

        cnpj: "CNPJ",

        telefone: "Telefone"

    },

    placeholders: {

        nome:
            "Digite seu nome completo",

        email:
            "Digite seu e-mail",

        cpf:
            "000.000.000-00",

        senha:
            "Digite sua senha",

        cnpj:
            "00.000.000/0000-00",

        telefone:
            "(00) 00000-0000"

    },

    botoes: {

        cadastrar:
            "Cadastrar",

        limpar:
            "Limpar"

    }

};


/*==================================================
    PREENCHER A TELA
==================================================*/

function carregarTela() {

    titulo.textContent =
        tela.titulo;

    subtitulo.textContent =
        tela.subtitulo;


    lblNome.textContent =
        tela.labels.nome;

    lblEmail.textContent =
        tela.labels.email;

    lblCpf.textContent =
        tela.labels.cpf;

    lblSenha.textContent =
        tela.labels.senha;

    lblCnpj.textContent =
        tela.labels.cnpj;

    lblTelefone.textContent =
        tela.labels.telefone;


    nome.placeholder =
        tela.placeholders.nome;

    email.placeholder =
        tela.placeholders.email;

    cpf.placeholder =
        tela.placeholders.cpf;

    senha.placeholder =
        tela.placeholders.senha;

    cnpj.placeholder =
        tela.placeholders.cnpj;

    telefone.placeholder =
        tela.placeholders.telefone;


    btnCadastrar.textContent =
        tela.botoes.cadastrar;

    btnLimpar.textContent =
        tela.botoes.limpar;

}


carregarTela();


/*==================================================
    LIMPAR MENSAGENS
==================================================*/

function limparErros() {

    erroNome.textContent = "";

    erroEmail.textContent = "";

    erroCpf.textContent = "";

    erroSenha.textContent = "";

    erroCnpj.textContent = "";

    erroTelefone.textContent = "";

}


/*==================================================
    MOSTRAR / OCULTAR SENHA
==================================================*/

btnSenha.addEventListener(
    "click",
    () => {

        if (senha.type === "password") {

            senha.type = "text";

            btnSenha.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }

        else {

            senha.type = "password";

            btnSenha.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    }
);


/*==================================================
    BOTÃO LIMPAR
==================================================*/

btnLimpar.addEventListener(
    "click",
    () => {

        limparErros();

    }
);


/*==================================================
    MÁSCARA CPF
==================================================*/

cpf.addEventListener(
    "input",
    () => {

        let valor =
            cpf.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 11);

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

        valor =
            valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

        cpf.value = valor;

    }
);


/*==================================================
    MÁSCARA CNPJ
==================================================*/

cnpj.addEventListener(
    "input",
    () => {

        let valor =
            cnpj.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 14);

        valor =
            valor.replace(
                /^(\d{2})(\d)/,
                "$1.$2"
            );

        valor =
            valor.replace(
                /^(\d{2})\.(\d{3})(\d)/,
                "$1.$2.$3"
            );

        valor =
            valor.replace(
                /\.(\d{3})(\d)/,
                ".$1/$2"
            );

        valor =
            valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

        cnpj.value = valor;

    }
);


/*==================================================
    MÁSCARA TELEFONE
==================================================*/

telefone.addEventListener(
    "input",
    () => {

        let valor =
            telefone.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 11);


        if (valor.length <= 10) {

            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

            valor =
                valor.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );

        }

        else {

            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

            valor =
                valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

        }

        telefone.value = valor;

    }
);


/*==================================================
    VALIDAR E-MAIL
==================================================*/

function validarEmail(
    emailDigitado
) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailDigitado);

}


/*==================================================
    VALIDAR FORMULÁRIO
==================================================*/

function validarFormulario() {

    limparErros();

    let valido = true;


    /* NOME */

    if (
        nome.value.trim() === ""
    ) {

        erroNome.textContent =
            "Informe seu nome.";

        valido = false;

    }


    /* EMAIL */

    if (
        email.value.trim() === ""
    ) {

        erroEmail.textContent =
            "Informe seu e-mail.";

        valido = false;

    }

    else if (
        !validarEmail(
            email.value.trim()
        )
    ) {

        erroEmail.textContent =
            "E-mail inválido.";

        valido = false;

    }


    /* CPF */

    if (
        cpf.value.length < 14
    ) {

        erroCpf.textContent =
            "CPF inválido.";

        valido = false;

    }


    /* SENHA */

    if (
        senha.value.length < 6
    ) {

        erroSenha.textContent =
            "A senha deve possuir pelo menos 6 caracteres.";

        valido = false;

    }


    /* CNPJ */

    if (
        cnpj.value.length < 18
    ) {

        erroCnpj.textContent =
            "CNPJ inválido.";

        valido = false;

    }


    /* TELEFONE */

    if (
        telefone.value.length < 14
    ) {

        erroTelefone.textContent =
            "Telefone inválido.";

        valido = false;

    }


    return valido;

}


/*==================================================
=            ENVIO FORMULÁRIO
==================================================*/

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Limpa mensagens anteriores
    limparErros();

    // Valida os campos
    if (!validarFormulario()) {

        return;

    }

    // Desabilita o botão
    btnCadastrar.disabled = true;

    btnCadastrar.textContent = "Cadastrando...";


    //==========================================
    // PEGA OS DADOS DO FORMULÁRIO
    //==========================================

    const dadosLojista = {

        nome: nome.value.trim(),

        email: email.value.trim(),

        cpf: cpf.value.replace(/\D/g, ""),

        senha: senha.value,

        cnpj: cnpj.value.replace(/\D/g, ""),

        telefone: telefone.value.replace(/\D/g, "")

    };


    console.log("Dados enviados:", dadosLojista);


    //==========================================
    // ENVIA PARA O NODE.JS
    //==========================================

    try {

        const resposta = await fetch(
            "http://localhost:3000/lojista/",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(dadosLojista)

            }
        );


        //======================================
        // CONVERTE A RESPOSTA
        //======================================

        const resultado = await resposta.json();


        console.log(
            "Resposta do servidor:",
            resultado
        );


        //======================================
        // CADASTRO REALIZADO
        //======================================

        if (resposta.ok && resultado.sucesso) {

            alert(
                resultado.mensagem
            );


            formulario.reset();

            limparErros();


            return;

        }


        //======================================
        // ERRO RETORNADO PELO BACKEND
        //======================================

        alert(
            resultado.mensagem ||
            "Não foi possível cadastrar o lojista."
        );


    } catch (erro) {

        //======================================
        // ERRO DE CONEXÃO
        //======================================

        console.error(
            "Erro ao conectar com o servidor:",
            erro
        );


        alert(
            "Não foi possível conectar ao servidor."
        );


    } finally {

        //======================================
        // REATIVA O BOTÃO
        //======================================

        btnCadastrar.disabled = false;

        btnCadastrar.textContent =
            tela.botoes.cadastrar;

    }

});


/*==================================================
    CÍRCULOS ANIMADOS
==================================================*/

const TOTAL_CIRCULOS = 30;

const circulos = [];


function numero(min, max) {

    return Math.random() *
        (max - min) +
        min;

}


/*==================================================
    CRIAR CÍRCULOS
==================================================*/

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
                rgb(61, 153, 138),
                rgba(0, 255, 98, 0.77)
            )
        `;


        fundo.appendChild(
            circle
        );


        circulos.push({

            el: circle,

            x:
                numero(
                    -200,
                    window.innerWidth
                ),

            y:
                numero(
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


/*==================================================
    ANIMAÇÃO PRINCIPAL
==================================================*/

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


        if (
            c.x < -250
        ) {

            c.x =
                window.innerWidth + 250;

        }


        if (
            c.y >
            window.innerHeight + 250
        ) {

            c.y = -250;

        }


        if (
            c.y < -250
        ) {

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
            `translate(${c.x}px, ${c.y}px)
             scale(${pulsar})
             rotate(${c.angulo}deg)`;

    });


    requestAnimationFrame(
        animar
    );

}


animar();


/*==================================================
    PARALLAX DO MOUSE
==================================================*/

let mouseX = 0;

let mouseY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (event.clientX /
                window.innerWidth) -
            .5;

        mouseY =
            (event.clientY /
                window.innerHeight) -
            .5;

    }
);


function efeitoParallax() {

    circulos.forEach(
        (c, index) => {

            const intensidade =
                (index % 6) + 1;


            c.el.style.marginLeft =
                `${mouseX *
                intensidade *
                6}px`;


            c.el.style.marginTop =
                `${mouseY *
                intensidade *
                6}px`;

        }
    );


    requestAnimationFrame(
        efeitoParallax
    );

}


efeitoParallax();


/*==================================================
    REDIMENSIONAMENTO
==================================================*/

window.addEventListener(
    "resize",
    () => {

        circulos.forEach(c => {

            if (
                c.x >
                window.innerWidth
            ) {

                c.x =
                    numero(
                        0,
                        window.innerWidth
                    );

            }


            if (
                c.y >
                window.innerHeight
            ) {

                c.y =
                    numero(
                        0,
                        window.innerHeight
                    );

            }

        });

    }
);


/*==================================================
    ANIMAÇÃO DE ENTRADA
==================================================*/

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
            "0";


        requestAnimationFrame(
            () => {

                document.body.style.transition =
                    "opacity .8s";

                document.body.style.opacity =
                    "1";

            }
        );

    }
);