/*=========================================================
    DADOS DA APLICAÇÃO
=========================================================*/

const app = {

    pageTitle: "Login",

   

    footer: "© BEE • Todos os direitos reservados",

    login:{

        title:"Login",

        subtitle:"Entre utilizando sua conta.",

        emailLabel:"E-mail",

        emailPlaceholder:"Digite seu e-mail",

        passwordLabel:"Senha",

        passwordPlaceholder:"Digite sua senha",

        forgot:"Esqueceu sua senha?",

        button:"Entrar",

        separator:"ou",

        google:"Entrar com Google"

    },

    register:{

        title:"Criar Conta",

        subtitle:"Preencha os dados abaixo.",

        nameLabel:"Nome",

        namePlaceholder:"Digite seu nome",

        emailLabel:"E-mail",

        emailPlaceholder:"Digite seu e-mail",

        passwordLabel:"Senha",

        passwordPlaceholder:"Crie uma senha",

        confirmLabel:"Confirmar senha",

        confirmPlaceholder:"Confirme sua senha",

        button:"Cadastrar"

    },

    leftPanel:{

        title:"Bem-vindo novamente ✧⁠◝⁠(⁠⁰⁠▿⁠⁰⁠)⁠◜⁠✧",

        description:
        "Já possui uma conta? Faça login para acessar sua plataforma ｡",

        button:"Entrar"

    },

    rightPanel:{

        title:"Olá! Estamos feliz em telo(a) aqui (っ ͡ ͡º ⁠▿ ͡ ͡º ς)  ",
       
        description:
        "Ainda não possui cadastro? Crie sua conta gratuitamente ｡⁠",

        button:"Criar Conta"

    }

};


/*=========================================================
    ELEMENTOS
=========================================================*/

const authContainer =
document.getElementById("authContainer");


/*=========================================================
    FUNÇÃO AUXILIAR
=========================================================*/

function setText(id,text){

    const element=document.getElementById(id);

    if(element){

        element.textContent=text;

    }

}

function setPlaceholder(id,text){

    const element=document.getElementById(id);

    if(element){

        element.placeholder=text;

    }

}

function setImage(id,src){

    const element=document.getElementById(id);

    if(element){

        element.src=src;

    }

}


/*=========================================================
    TÍTULO DA PÁGINA
=========================================================*/

document.title=app.pageTitle;


/*=========================================================
    LOGOS
=========================================================*/

setImage("logo",app.logo);

setImage("leftLogo",app.logo);

setImage("rightLogo",app.logo);

setImage("googleIcon",app.googleIcon);


/*=========================================================
    LOGIN
=========================================================*/

setText(
    "loginTitle",
    app.login.title
);

setText(
    "loginSubtitle",
    app.login.subtitle
);

setText(
    "loginEmailLabel",
    app.login.emailLabel
);

setText(
    "loginPasswordLabel",
    app.login.passwordLabel
);

setText(
    "forgotPassword",
    app.login.forgot
);

setText(
    "loginButton",
    app.login.button
);

setText(
    "separatorText",
    app.login.separator
);

setText(
    "googleText",
    app.login.google
);

setPlaceholder(
    "loginEmail",
    app.login.emailPlaceholder
);

setPlaceholder(
    "loginPassword",
    app.login.passwordPlaceholder
);


/*=========================================================
    CADASTRO
=========================================================*/

setText(
    "registerTitle",
    app.register.title
);

setText(
    "registerSubtitle",
    app.register.subtitle
);

setText(
    "registerNameLabel",
    app.register.nameLabel
);

setText(
    "registerEmailLabel",
    app.register.emailLabel
);

setText(
    "registerPasswordLabel",
    app.register.passwordLabel
);

setText(
    "confirmPasswordLabel",
    app.register.confirmLabel
);

setText(
    "registerButton",
    app.register.button
);

setPlaceholder(
    "registerName",
    app.register.namePlaceholder
);

setPlaceholder(
    "registerEmail",
    app.register.emailPlaceholder
);

setPlaceholder(
    "registerPassword",
    app.register.passwordPlaceholder
);

setPlaceholder(
    "confirmPassword",
    app.register.confirmPlaceholder
);
/*=========================================================
    PAINEL ESQUERDO
=========================================================*/

setText(
    "leftTitle",
    app.leftPanel.title
);

setText(
    "leftDescription",
    app.leftPanel.description
);

setText(
    "goLogin",
    app.leftPanel.button
);


/*=========================================
    MÁSCARA DO TELEFONE
=========================================*/

const telefone = document.getElementById("registerPhone");

telefone.addEventListener("input", (e) => {

    let valor = e.target.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, "");

    // Limita a 11 números
    valor = valor.substring(0, 11);

    // Aplica a máscara
    if (valor.length > 10) {

        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4}).*/,
            "($1) $2-$3"
        );

    } else if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{2})(\d{4})(\d+)/,
            "($1) $2-$3"
        );

    } else if (valor.length > 2) {

        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    } else if (valor.length > 0) {

        valor = valor.replace(
            /^(\d*)/,
            "($1"
        );

    }

    e.target.value = valor;

});
/*=========================================================
    PAINEL DIREITO
=========================================================*/

setText(
    "rightTitle",
    app.rightPanel.title
);

setText(
    "rightDescription",
    app.rightPanel.description
);

setText(
    "goRegister",
    app.rightPanel.button
);


/*=========================================================
    FOOTER
=========================================================*/

setText(
    "footerText",
    app.footer
);


/*=========================================================
    ELEMENTOS DOS BOTÕES
=========================================================*/

const btnGoRegister =
document.getElementById("goRegister");

const btnGoLogin =
document.getElementById("goLogin");

const loginForm =
document.getElementById("loginForm");

const registerForm =
document.getElementById("registerForm");


/*=========================================================
    CONTROLE DO PAINEL
=========================================================*/

function showRegister(){

    authContainer.classList.add("active");

}

function showLogin(){

    authContainer.classList.remove("active");

}


/*=========================================================
    EVENTOS DOS BOTÕES
=========================================================*/

btnGoRegister.addEventListener(

    "click",

    function(){

        showRegister();

    }

);






const btnEntrar = document.getElementById("loginButton");

btnEntrar.addEventListener("click", () => {

    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginPassword").value.trim();

    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
        return;

    }

    if (senha.length < 6 || senha.length > 12) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve possuir entre 6 e 12 caracteres.";
        return;

    }

    fetch("http://localhost:3000/usuario/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            senha: senha
        })

    })

    .then(res => res.json())

    .then(resposta => {

        if (resposta.sucesso) {

            localStorage.setItem(
                "usuario",
                JSON.stringify(resposta.usuario)
            );

            mensagem.style.color = "green";
            mensagem.innerHTML = "Login realizado com sucesso!";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 800);

        } else {

            mensagem.style.color = "red";
            mensagem.innerHTML = resposta.mensagem;

        }

    })

    .catch(() => {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Erro ao conectar com o servidor.";

    });

});
/*=========================================================
    EVENTO LOGIN
=========================================================*/




/*=========================================================
    EVENTO CADASTRO
=========================================================*/




/*=========================================================
    GOOGLE
=========================================================*/

document
.getElementById("googleButton")
.addEventListener(

    "click",

    function(){

        console.log(
            "Login Google..."
        );

    }

);


/*=========================================================
    ESQUECI SENHA
=========================================================*/

document
.getElementById("forgotPassword")
.addEventListener(

    "click",

    function(event){

        event.preventDefault();

        console.log(
            "Abrir recuperação de senha."
        );

    }

);
/*=========================================================
    VALIDAÇÃO DOS CAMPOS
=========================================================*/

function isEmpty(value){

    return value.trim()==="";

}

function validateLogin(){

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    if(isEmpty(email)){

        alert("Informe seu e-mail.");

        return false;

    }

    if(isEmpty(password)){

        alert("Informe sua senha.");

        return false;

    }

    return true;

}

function validateRegister(){

    const name =
    document.getElementById("registerName").value;

    const email =
    document.getElementById("registerEmail").value;

    const password =
    document.getElementById("registerPassword").value;

    const confirm =
    document.getElementById("confirmPassword").value;

    if(isEmpty(name)){

        alert("Informe seu nome.");

        return false;

    }

    if(isEmpty(email)){

        alert("Informe seu e-mail.");

        return false;

    }

    if(isEmpty(password)){

        alert("Informe uma senha.");

        return false;

    }

    if(password!==confirm){

        alert("As senhas não coincidem.");

        return false;

    }

    return true;

}

/*=========================================================
    SOBRESCREVE EVENTOS DOS FORMULÁRIOS
=========================================================*/

loginForm.addEventListener(

    "submit",

    function(event){

        event.preventDefault();

        if(!validateLogin()){

            return;

        }

        console.clear();

        console.log("===== LOGIN =====");

        console.log(
            "Email:",
            document.getElementById("loginEmail").value
        );

        console.log(
            "Senha:",
            document.getElementById("loginPassword").value
        );

        console.log("=================");

        // Aqui você poderá integrar sua API futuramente.

    }

);


/*=========================================================
    LIMPAR FORMULÁRIOS
=========================================================*/

function clearLogin(){

    loginForm.reset();

}

function clearRegister(){

    registerForm.reset();

}

/*=========================================================
    EVENTOS DOS PAINÉIS
=========================================================*/

btnGoRegister.addEventListener(

    "click",

    function(){

        clearLogin();

    }

);

btnGoLogin.addEventListener(

    "click",

    function(){

        clearRegister();

    }

);

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

function init(){

    authContainer.classList.remove("active");

    clearLogin();

    clearRegister();

    console.log("Aplicação iniciada.");

}

document.addEventListener(

    "DOMContentLoaded",

    init

);

/*=========================================================
    EXPORTAÇÃO (opcional)
=========================================================*/

window.app = app;




//BOTAO CADASTRAR
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//===================================  ==================================================
//===============================            ======================================================
//=========================                      =============================================================
//====================                                 ===================================================================
//==============                                                 ============================================================================
//===================                                                ===================================================================
//======================                                               ==============================================================
//=====================                                               =====================================================================
//=======================                                          ===================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//============================= ============================================================
//==========================================================================================
//==========================================================================================
document.getElementById("registerButton").addEventListener("click", () => {

    const nome = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const telefone = document.getElementById("registerPhone").value.trim();
    const senha = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const mensagem = document.getElementById("mensagem");

    // Campos obrigatórios
    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        senha === "" ||
        confirmPassword === ""
    ) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
        return;

    }

    // Telefone
    const somenteNumeros = telefone.replace(/\D/g, "");

    if (somenteNumeros.length !== 11) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um telefone válido.";
        return;

    }

    // Tamanho da senha
    if (senha.length < 6 || senha.length > 12) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve possuir entre 6 e 12 caracteres.";
        return;

    }

    // Duas letras maiúsculas
    const maiusculas = senha.match(/[A-Z]/g) || [];

    if (maiusculas.length < 2) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve conter pelo menos duas letras maiúsculas.";
        return;

    }

    // Duas letras minúsculas
    const minusculas = senha.match(/[a-z]/g) || [];

    if (minusculas.length < 2) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve conter pelo menos duas letras minúsculas.";
        return;

    }

    // Número
    if (!/[0-9]/.test(senha)) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve conter pelo menos um número.";
        return;

    }

    // Não pode terminar com número
    if (/\d$/.test(senha)) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha não pode terminar com um número.";
        return;

    }

    // Não pode conter o nome
    if (senha.toLowerCase().includes(nome.toLowerCase())) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha não pode conter o nome do usuário.";
        return;

    }

    // Confirmação
    if (senha !== confirmPassword) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "As senhas não coincidem.";
        return;

    }

    // E-mail
    if (
        !email.includes("@gmail.com") &&
        !email.includes("@hotmail.com") &&
        !email.includes("@yahoo.com") &&
        !email.includes("@outlook.com") &&
        !email.includes("@icloud.com")
    ) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um e-mail válido.";
        return;

    }

    const usuario = {

        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
        Loja_idLoja: 1

    };

    console.log(usuario);

    fetch("http://localhost:3000/usuario", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(usuario)

    })

    .then(res => res.json())

    .then(resposta => {

        if (resposta.sucesso) {

            mensagem.style.color = "green";
            mensagem.innerHTML = resposta.mensagem;

            document.getElementById("registerName").value = "";
            document.getElementById("registerEmail").value = "";
            document.getElementById("registerPhone").value = "";
            document.getElementById("registerPassword").value = "";
            document.getElementById("confirmPassword").value = "";

            setTimeout(() => {

                window.location.href = "../pages/login.html";

            }, 1000);

        } else {

            mensagem.style.color = "red";
            mensagem.innerHTML = resposta.mensagem;

        }

    })

    .catch(() => {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Erro ao conectar com o servidor.";

    });

});