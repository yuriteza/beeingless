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

btnGoLogin.addEventListener(

    "click",

    function(){

        showLogin();

    }

);


/*=========================================================
    EVENTO LOGIN
=========================================================*/

loginForm.addEventListener(

    "submit",

    function(event){

        event.preventDefault();

        console.clear();

        console.log("========== LOGIN ==========");

        console.log(
            "Email:",
            document.getElementById("loginEmail").value
        );

        console.log(
            "Senha:",
            document.getElementById("loginPassword").value
        );

        console.log("===========================");

    }

);


/*=========================================================
    EVENTO CADASTRO
=========================================================*/

registerForm.addEventListener(

    "submit",

    function(event){

        event.preventDefault();

        console.clear();

        console.log("======= CADASTRO =======");

        console.log(
            "Nome:",
            document.getElementById("registerName").value
        );

        console.log(
            "Email:",
            document.getElementById("registerEmail").value
        );

        console.log(
            "Senha:",
            document.getElementById("registerPassword").value
        );

        console.log(
            "Confirmar:",
            document.getElementById("confirmPassword").value
        );

        console.log("========================");

    }

);


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

registerForm.addEventListener(

    "submit",

    function(event){

        event.preventDefault();

        if(!validateRegister()){

            return;

        }

        console.clear();

        console.log("===== CADASTRO =====");

        console.log(
            "Nome:",
            document.getElementById("registerName").value
        );

        console.log(
            "Email:",
            document.getElementById("registerEmail").value
        );

        console.log("====================");

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