/* =====================================
   DADOS
===================================== */

const appData = {

    header: "",

    welcome: {
        title: "WELCOME BACK",
        subtitle: "VDFBHBBVNIZNJJDGDVXVHB HAGFEBBVNV"
    },

    login: {
        title: "Login",
        description: "Acesso seguro para alunos B.E.E.",

        email: {
            label: "Email",
            placeholder: "seuemail@dominio.com",
            info: "Ex: nome@empresa.com"
        },

        password: {
            label: "Senha",
            placeholder: "••••••••",
            info: "Mantenha sua conta protegida"
        }
    },

    footer: "© 2026 B.E.E."
};

/* =====================================
   WELCOME
===================================== */

function renderWelcome(){

    const section = document.getElementById("welcomeSection");

    section.innerHTML = `

        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-5"></div>

        <div class="welcome-card">

            <h2 class="welcome-title">
                ${appData.welcome.title}
            </h2>

            <p class="welcome-subtitle">
                ${appData.welcome.subtitle}
            </p>

        </div>

    `;
}

/* =====================================
   LOGIN
===================================== */

function renderLogin(){

    const section = document.getElementById("loginSection");

    section.innerHTML = `

        <div class="login-box">

            <h1 class="login-title">
                ${appData.login.title}
            </h1>

            <p class="login-description">
                ${appData.login.description}
            </p>

            <form id="loginForm">

                <div class="form-group">

                    <label class="form-label">
                        ${appData.login.email.label}
                    </label>

                    <input
                        type="email"
                        class="form-input"
                        placeholder="${appData.login.email.placeholder}"
                        required
                    >

                    <div class="input-info">
                        ${appData.login.email.info}
                    </div>

                </div>

                <div class="form-group">

                    <label class="form-label">
                        ${appData.login.password.label}
                    </label>

                    <input
                        type="password"
                        class="form-input"
                        placeholder="${appData.login.password.placeholder}"
                        required
                    >

                    <div class="input-info">
                        ${appData.login.password.info}
                    </div>

                </div>

                <div class="forgot-password">
                    <a href="#">
                        Esqueceu a senha?
                    </a>
                </div>

                <div class="buttons">

                    <button
                        type="button"
                        class="btn btn-outline"
                    >
                        Criar conta
                    </button>

                    <button
                        type="submit"
                        class="btn btn-dark"
                    >
                        Entrar
                    </button>

                </div>

                <div class="separator"></div>

                <button
                    type="button"
                    class="google-btn"
                >
                    <span class="google-icon">G</span>
                    Entrar com o Google
                </button>

            </form>

        </div>

    `;
}

/* =====================================
   FOOTER
===================================== */

function renderFooter(){

    document.getElementById("footer").innerHTML =
    `<p style="color:white;text-align:center;padding-top:20px;">
        ${appData.footer}
    </p>`;
}

/* =====================================
   EVENTOS
===================================== */

function registerEvents(){

    document.addEventListener("submit", function(e){

        if(e.target.id === "loginForm"){

            e.preventDefault();

            alert("Login enviado!");

        }

    });

}

/* =====================================
   INICIALIZAÇÃO
===================================== */

renderWelcome();
renderLogin();
renderFooter();
registerEvents();