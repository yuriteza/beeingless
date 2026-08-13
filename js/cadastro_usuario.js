/*==========================================================
                ELEMENTOS DA PÁGINA
==========================================================*/

const tituloPagina =
    document.getElementById("tituloPagina");

const subtituloPagina =
    document.getElementById("subtituloPagina");

const tituloFormulario =
    document.getElementById("tituloFormulario");

const tituloTabela =
    document.getElementById("tituloTabela");

const pesquisa =
    document.getElementById("pesquisa");

const filtroStatus =
    document.getElementById("filtroStatus");

const nome =
    document.getElementById("nome");

const email =
    document.getElementById("email");

const telefone =
    document.getElementById("telefone");

const cadastro =
    document.getElementById("cadastro");

const ultimoAcesso =
    document.getElementById("ultimoAcesso");

const status =
    document.getElementById("status");

const observacoes =
    document.getElementById("observacoes");

const btnPesquisar =
    document.getElementById("btnPesquisar");

const btnSalvar =
    document.getElementById("btnSalvar");

const btnBloquear =
    document.getElementById("btnBloquear");

const btnExcluir =
    document.getElementById("btnExcluir");

const btnLimpar =
    document.getElementById("btnLimpar");

const listaUsuarios =
    document.getElementById("listaUsuarios");

const btnAnterior =
    document.getElementById("btnAnterior");

const btnProximo =
    document.getElementById("btnProximo");

const numerosPaginas =
    document.getElementById("numerosPaginas");


/*==========================================================
                CONFIGURAÇÃO DA API
==========================================================*/

const API = "http://localhost:3000";


/*==========================================================
                DADOS DOS USUÁRIOS
==========================================================*/

/*
    IMPORTANTE:

    Os usuários NÃO são cadastrados aqui.

    Eles serão buscados do banco de dados
    através da API /usuario.
*/

let usuarios = [];

let paginaAtual = 1;

const usuariosPorPagina = 8;

let usuarioSelecionado = null;


/*==========================================================
                DADOS DA PÁGINA
==========================================================*/

tituloPagina.textContent =
    "Gerenciamento de Usuários";

subtituloPagina.textContent =
    "Visualize, pesquise e gerencie todos os usuários cadastrados.";

tituloFormulario.textContent =
    "Informações do Usuário";

tituloTabela.textContent =
    "Usuários Cadastrados";

btnPesquisar.innerHTML =
    '<i class="fa-solid fa-magnifying-glass"></i> Pesquisar';

btnSalvar.innerHTML =
    '<i class="fa-solid fa-floppy-disk"></i> Salvar';

btnBloquear.innerHTML =
    '<i class="fa-solid fa-lock"></i> Bloquear';

btnExcluir.innerHTML =
    '<i class="fa-solid fa-trash"></i> Excluir';

btnLimpar.innerHTML =
    '<i class="fa-solid fa-eraser"></i> Limpar';


/*==========================================================
                    STATUS
==========================================================*/

/*
    Estes status são apenas para o funcionamento
    visual do filtro neste momento.

    Eles NÃO estão sendo buscados do banco,
    porque sua tabela Usuario atual não possui
    uma coluna status.
*/

const listaStatus = [

    "Todos",

    "Ativo",

    "Inativo",

    "Bloqueado"

];


listaStatus.forEach(item => {

    const option =
        document.createElement("option");

    option.value = item;

    option.textContent = item;

    filtroStatus.appendChild(option);

});


listaStatus.slice(1).forEach(item => {

    const option =
        document.createElement("option");

    option.value = item;

    option.textContent = item;

    status.appendChild(option);

});


/*==========================================================
                CÍRCULOS ANIMADOS
==========================================================*/

const fundo =
    document.getElementById("background-circles");

const TOTAL_CIRCULOS = 30;

const circulos = [];


function numero(min, max) {

    return Math.random() * (max - min) + min;

}


/*==========================================================
                CRIAR CÍRCULOS
==========================================================*/

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

        circle.className = "circle";


        const tamanho =
            numero(60, 320);

        const blur =
            numero(8, 30);

        const opacity =
            numero(0.08, 0.25);


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


        fundo.appendChild(circle);


        circulos.push({

            el: circle,

            x: numero(
                -200,
                window.innerWidth
            ),

            y: numero(
                -200,
                window.innerHeight
            ),

            velocidadeX:
                numero(0.15, 0.8),

            velocidadeY:
                numero(0.10, 0.6),

            direcaoX:
                Math.random() > 0.5
                    ? 1
                    : -1,

            direcaoY:
                Math.random() > 0.5
                    ? 1
                    : -1,

            escala:
                numero(0.8, 1.3),

            angulo:
                numero(0, 360),

            rotacao:
                numero(0.02, 0.15)

        });

    }

}


criarCirculos();


/*==========================================================
                ANIMAÇÃO DOS CÍRCULOS
==========================================================*/

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


        if (c.x < -250) {

            c.x =
                window.innerWidth + 250;

        }


        if (
            c.y >
            window.innerHeight + 250
        ) {

            c.y = -250;

        }


        if (c.y < -250) {

            c.y =
                window.innerHeight + 250;

        }


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


/*==========================================================
                    EFEITO PARALLAX
==========================================================*/

let mouseX = 0;

let mouseY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            (event.clientX /
                window.innerWidth) - 0.5;

        mouseY =
            (event.clientY /
                window.innerHeight) - 0.5;

    }
);


function efeitoParallax() {

    circulos.forEach(
        (c, index) => {

            const intensidade =
                (index % 6) + 1;


            c.el.style.marginLeft =
                `${mouseX * intensidade * 6}px`;


            c.el.style.marginTop =
                `${mouseY * intensidade * 6}px`;

        }
    );


    requestAnimationFrame(
        efeitoParallax
    );

}


efeitoParallax();


/*==========================================================
                REDIMENSIONAMENTO
==========================================================*/

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


/*==========================================================
                ANIMAÇÃO DA PÁGINA
==========================================================*/

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


/*==========================================================
            BUSCAR USUÁRIOS DO BANCO
==========================================================*/

async function carregarUsuarios() {

    try {

        listaUsuarios.innerHTML = `

            <tr>

                <td colspan="7">

                    <div class="loading">

                        <i class="fa-solid fa-spinner"></i>

                        Carregando usuários...

                    </div>

                </td>

            </tr>

        `;


        const resposta =
            await fetch(
                `${API}/usuario`
            );


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar os usuários."
            );

        }


        usuarios =
            await resposta.json();


        console.log(
            "Usuários recebidos da API:",
            usuarios
        );


        paginaAtual = 1;


        carregarTabela();


        if (
            usuarios.length > 0
        ) {

            selecionarUsuario(
                usuarios[0].idUsuario
            );

        }

    }
    catch (erro) {

        console.error(
            "Erro ao carregar usuários:",
            erro
        );


        listaUsuarios.innerHTML = `

            <tr>

                <td colspan="7">

                    <div class="empty">

                        <i class="fa-solid fa-circle-exclamation"></i>

                        <h3>
                            Não foi possível carregar os usuários
                        </h3>

                        <p>
                            Verifique se o servidor está funcionando.
                        </p>

                    </div>

                </td>

            </tr>

        `;

    }

}


/*==========================================================
                STATUS VISUAL
==========================================================*/

/*
    Como a tabela Usuario atual não possui
    uma coluna status, todos aparecem como
    "Ativo" visualmente.

    Quando você adicionar status no banco,
    esta função poderá ser alterada.
*/

function obterStatus(usuario) {

    return usuario.status || "Ativo";

}


/*==========================================================
                CARREGAR TABELA
==========================================================*/

function carregarTabela(lista = usuarios) {

    listaUsuarios.innerHTML = "";


    if (lista.length === 0) {

        listaUsuarios.innerHTML = `

            <tr>

                <td colspan="7">

                    <div class="empty">

                        <i class="fa-solid fa-users-slash"></i>

                        <h3>
                            Nenhum usuário encontrado
                        </h3>

                        <p>
                            Não existem usuários para exibir.
                        </p>

                    </div>

                </td>

            </tr>

        `;


        atualizarPaginacao(lista);

        return;

    }


    const inicio =
        (paginaAtual - 1) *
        usuariosPorPagina;


    const fim =
        inicio +
        usuariosPorPagina;


    const usuariosPagina =
        lista.slice(
            inicio,
            fim
        );


    usuariosPagina.forEach(
        usuario => {

            const statusUsuario =
                obterStatus(usuario);


            listaUsuarios.innerHTML += `

                <tr>

                    <td>

                        <div class="user-photo">

                            <i class="fa-solid fa-user"></i>

                        </div>

                    </td>


                    <td>
                        ${usuario.nome || "Não informado"}
                    </td>


                    <td>
                        ${usuario.email || "Não informado"}
                    </td>


                    <td>
                        ${usuario.telefone || "Não informado"}
                    </td>


                    <td>

                        <span
                            class="status ${statusUsuario.toLowerCase()}">

                            ${statusUsuario}

                        </span>

                    </td>


                    <td>
                        ${usuario.dataCadastro || "Não informado"}
                    </td>


                    <td>

                        <div class="actions">

                            <button
                                class="btn-view"
                                title="Visualizar"
                                onclick="selecionarUsuario(${usuario.idUsuario})">

                                <i class="fa-solid fa-eye"></i>

                            </button>


                            <button
                                class="btn-delete"
                                title="Excluir"
                                onclick="excluirUsuario(${usuario.idUsuario})">

                                <i class="fa-solid fa-trash"></i>

                            </button>

                        </div>

                    </td>

                </tr>

            `;

        }
    );


    atualizarPaginacao(lista);

}


/*==========================================================
                SELECIONAR USUÁRIO
==========================================================*/

function selecionarUsuario(id) {

    const usuario =
        usuarios.find(
            item =>
                item.idUsuario === id
        );


    if (!usuario) {

        return;

    }


    usuarioSelecionado =
        usuario;


    nome.value =
        usuario.nome || "";


    email.value =
        usuario.email || "";


    telefone.value =
        usuario.telefone || "";


    /*
        Estes campos não existem atualmente
        na tabela Usuario.

        Por isso permanecem vazios.
    */

    cadastro.value =
        usuario.dataCadastro || "";


    ultimoAcesso.value =
        usuario.ultimoAcesso || "";


    status.value =
        usuario.status || "Ativo";


    observacoes.value =
        usuario.observacoes || "";

}


/*==========================================================
                PAGINAÇÃO
==========================================================*/

function atualizarPaginacao(lista) {

    numerosPaginas.innerHTML = "";


    const totalPaginas =
        Math.ceil(
            lista.length /
            usuariosPorPagina
        );


    for (
        let i = 1;
        i <= totalPaginas;
        i++
    ) {

        numerosPaginas.innerHTML += `

            <button
                class="${i === paginaAtual
                    ? "ativo"
                    : ""}"
                onclick="irParaPagina(${i})">

                ${i}

            </button>

        `;

    }

}


/*==========================================================
                IR PARA PÁGINA
==========================================================*/

function irParaPagina(numero) {

    paginaAtual =
        numero;


    const texto =
        pesquisa.value
            .trim()
            .toLowerCase();


    const filtro =
        filtroStatus.value;


    if (
        texto ||
        filtro !== "Todos"
    ) {

        pesquisarUsuarios();

        return;

    }


    carregarTabela();

}


/*==========================================================
                BOTÃO ANTERIOR
==========================================================*/

btnAnterior.addEventListener(
    "click",
    () => {

        if (paginaAtual <= 1) {

            return;

        }


        paginaAtual--;


        pesquisarUsuarios();

    }
);


/*==========================================================
                BOTÃO PRÓXIMO
==========================================================*/

btnProximo.addEventListener(
    "click",
    () => {

        const totalPaginas =
            Math.ceil(
                usuarios.length /
                usuariosPorPagina
            );


        if (
            paginaAtual >=
            totalPaginas
        ) {

            return;

        }


        paginaAtual++;


        pesquisarUsuarios();

    }
);


/*==========================================================
                PESQUISAR USUÁRIOS
==========================================================*/

function pesquisarUsuarios() {

    const texto =
        pesquisa.value
            .trim()
            .toLowerCase();


    const filtro =
        filtroStatus.value;


    const resultado =
        usuarios.filter(
            usuario => {

                const nomeUsuario =
                    (
                        usuario.nome || ""
                    ).toLowerCase();


                const emailUsuario =
                    (
                        usuario.email || ""
                    ).toLowerCase();


                const telefoneUsuario =
                    (
                        usuario.telefone || ""
                    ).toLowerCase();


                const encontrouTexto =

                    nomeUsuario.includes(
                        texto
                    )

                    ||

                    emailUsuario.includes(
                        texto
                    )

                    ||

                    telefoneUsuario.includes(
                        texto
                    );


                const statusUsuario =
                    obterStatus(usuario);


                const encontrouStatus =

                    filtro === "Todos"

                    ||

                    statusUsuario === filtro;


                return (
                    encontrouTexto &&
                    encontrouStatus
                );

            }
        );


    paginaAtual = 1;


    carregarTabela(
        resultado
    );

}


/*==========================================================
                EVENTOS DA PESQUISA
==========================================================*/

btnPesquisar.addEventListener(
    "click",
    pesquisarUsuarios
);


pesquisa.addEventListener(
    "input",
    pesquisarUsuarios
);


filtroStatus.addEventListener(
    "change",
    pesquisarUsuarios
);


pesquisa.addEventListener(
    "keypress",
    event => {

        if (
            event.key === "Enter"
        ) {

            pesquisarUsuarios();

        }

    }
);


/*==========================================================
                LIMPAR FORMULÁRIO
==========================================================*/

btnLimpar.addEventListener(
    "click",
    () => {

        usuarioSelecionado =
            null;


        nome.value = "";

        email.value = "";

        telefone.value = "";

        cadastro.value = "";

        ultimoAcesso.value = "";

        observacoes.value = "";


        if (status.options.length > 0) {

            status.selectedIndex = 0;

        }

    }
);


/*==========================================================
                EXCLUIR USUÁRIO
==========================================================*/

async function excluirUsuario(id) {

    const confirmar =
        confirm(
            "Deseja realmente excluir este usuário?"
        );


    if (!confirmar) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/usuario/${id}`,
                {
                    method: "DELETE"
                }
            );


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível excluir o usuário."
            );

        }


        alert(
            "Usuário excluído com sucesso!"
        );


        usuarioSelecionado =
            null;


        await carregarUsuarios();


    }
    catch (erro) {

        console.error(
            "Erro ao excluir usuário:",
            erro
        );


        alert(
            "Não foi possível excluir o usuário."
        );

    }

}


/*==========================================================
                BLOQUEAR USUÁRIO
==========================================================*/

/*
    ATENÇÃO:

    Sua tabela Usuario atual não possui
    uma coluna status.

    Portanto, NÃO vamos alterar o banco
    com esta função ainda.

    Por enquanto ela apenas informa
    que o recurso precisa ser criado
    no banco.
*/

btnBloquear.addEventListener(
    "click",
    () => {

        if (!usuarioSelecionado) {

            alert(
                "Selecione um usuário primeiro."
            );

            return;

        }


        alert(
            "O bloqueio ainda precisa ser implementado no banco de dados."
        );

    }
);


/*==========================================================
                SALVAR
==========================================================*/

/*
    O botão salvar não será usado para
    alterar dados fictícios.

    Os dados precisam ser enviados
    para a API através de PUT.

    A função abaixo será utilizada quando
    o endpoint de atualização estiver
    configurado no seu backend.
*/

btnSalvar.addEventListener(
    "click",
    async () => {

        if (!usuarioSelecionado) {

            alert(
                "Selecione um usuário primeiro."
            );

            return;

        }


        const dadosAtualizados = {

            nome:
                nome.value.trim(),

            email:
                email.value.trim(),

            telefone:
                telefone.value.trim()

        };


        if (
            !dadosAtualizados.nome ||
            !dadosAtualizados.email
        ) {

            alert(
                "Nome e e-mail são obrigatórios."
            );

            return;

        }


        try {

            const resposta =
                await fetch(
                    `${API}/usuario/${usuarioSelecionado.idUsuario}`,
                    {

                        method: "PUT",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify(
                                dadosAtualizados
                            )

                    }
                );


            if (!resposta.ok) {

                throw new Error(
                    "Erro ao atualizar usuário."
                );

            }


            alert(
                "Usuário atualizado com sucesso!"
            );


            await carregarUsuarios();

        }
        catch (erro) {

            console.error(
                "Erro ao atualizar usuário:",
                erro
            );


            alert(
                "Não foi possível atualizar o usuário."
            );

        }

    }
);


/*==========================================================
                ATUALIZAR SISTEMA
==========================================================*/

function atualizarSistema() {

    carregarUsuarios();

}


/*==========================================================
                INICIALIZAÇÃO
==========================================================*/

window.addEventListener(
    "load",
    () => {

        carregarUsuarios();

    }
);


/*==========================================================
                    FIM DO JS
==========================================================*/