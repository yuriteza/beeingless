/*==================================================
            ELEMENTOS DA PÁGINA
==================================================*/

const tituloPagina = document.getElementById("tituloPagina");
const subtituloPagina = document.getElementById("subtituloPagina");

const pesquisa = document.getElementById("pesquisa");
const filtroStatus = document.getElementById("filtroStatus");
const btnPesquisar = document.getElementById("btnPesquisar");

const listaUsuarios = document.getElementById("listaUsuarios");

const fundo = document.getElementById("background-circles");

/*==================================================
            TEXTOS DA PÁGINA
==================================================*/

tituloPagina.textContent = "Gerenciamento de Usuários";

subtituloPagina.textContent =
"Visualize e gerencie todos os usuários cadastrados.";

btnPesquisar.innerHTML =
'<i class="fa-solid fa-magnifying-glass"></i> Pesquisar';

/*==================================================
            STATUS
==================================================*/

const statusDisponiveis = [

    "Todos",

    "Ativo",

    "Inativo",

    "Bloqueado"

];

statusDisponiveis.forEach(status=>{

    filtroStatus.innerHTML +=
    `<option value="${status}">${status}</option>`;

});

/*==================================================
            DADOS DE EXEMPLO
==================================================*/

let usuarios = [

    {

        id:1,

        foto:"../assets/img/user.png",

        nome:"João Silva",

        email:"joao@email.com",

        telefone:"(63)99999-1111",

        status:"Ativo"

    },

    {

        id:2,

        foto:"../assets/img/user.png",

        nome:"Maria Souza",

        email:"maria@email.com",

        telefone:"(63)99999-2222",

        status:"Ativo"

    },

    {

        id:3,

        foto:"../assets/img/user.png",

        nome:"Carlos Lima",

        email:"carlos@email.com",

        telefone:"(63)99999-3333",

        status:"Bloqueado"

    },

    {

        id:4,

        foto:"../assets/img/user.png",

        nome:"Ana Paula",

        email:"ana@email.com",

        telefone:"(63)99999-4444",

        status:"Inativo"

    }

];

/*==================================================
            PAGINAÇÃO
==================================================*/

const usuariosPorPagina = 8;

let paginaAtual = 1;

/*==================================================
            CÍRCULOS
==================================================*/

const TOTAL_CIRCULOS = 30;

const circulos = [];

function numero(min,max){

    return Math.random()*(max-min)+min;

}

/*==================================================
            CRIAR CÍRCULOS
==================================================*/

function criarCirculos(){

    fundo.innerHTML = "";

    circulos.length = 0;

    for(let i = 0; i < TOTAL_CIRCULOS; i++){

        const circle = document.createElement("span");

        circle.className = "circle";

        const tamanho = numero(80,300);

        const blur = numero(10,28);

        const opacity = numero(0.08,0.22);

        circle.style.width = tamanho + "px";
        circle.style.height = tamanho + "px";

        circle.style.opacity = opacity;

        circle.style.filter = `blur(${blur}px)`;

        circle.style.background = `
            radial-gradient(
                circle,
                rgba(61,153,138,.95),
                rgba(79,209,141,.75)
            )
        `;

        fundo.appendChild(circle);

        circulos.push({

            elemento:circle,

            tamanho:tamanho,

            x:numero(-300,window.innerWidth+300),

            y:numero(-300,window.innerHeight+300),

            velocidadeX:numero(.4,1.4),

            velocidadeY:numero(.3,1.2),

            direcaoX:Math.random() > .5 ? 1 : -1,

            direcaoY:Math.random() > .5 ? 1 : -1,

            escala:numero(.8,1.2),

            angulo:numero(0,360),

            rotacao:numero(.05,.25)

        });

    }

}

criarCirculos();

/*==================================================
            ANIMAÇÃO DOS CÍRCULOS
==================================================*/

function animarCirculos(){

    circulos.forEach(c=>{

        c.x += c.velocidadeX * c.direcaoX;

        c.y += c.velocidadeY * c.direcaoY;

        c.angulo += c.rotacao;

        if(c.x > window.innerWidth + 250){

            c.x = -250;

        }

        if(c.x < -250){

            c.x = window.innerWidth + 250;

        }

        if(c.y > window.innerHeight + 250){

            c.y = -250;

        }

        if(c.y < -250){

            c.y = window.innerHeight + 250;

        }

        const pulsar =

            c.escala +

            Math.sin(Date.now()/1800 + c.angulo) * .08;

        c.elemento.style.transform =

            `translate(${c.x}px, ${c.y}px)
             scale(${pulsar})
             rotate(${c.angulo}deg)`;

    });

    requestAnimationFrame(animarCirculos);

}

animarCirculos();

/*==================================================
            RESPONSIVIDADE
==================================================*/

window.addEventListener("resize",()=>{

    criarCirculos();

});

/*==================================================
            CARREGAR TABELA
==================================================*/

function carregarTabela(lista = usuarios){

    listaUsuarios.innerHTML = "";

    if(lista.length === 0){

        listaUsuarios.innerHTML = `

            <tr>

                <td colspan="6">

                    Nenhum usuário encontrado.

                </td>

            </tr>

        `;

        return;

    }

    const inicio = (paginaAtual - 1) * usuariosPorPagina;

    const fim = inicio + usuariosPorPagina;

    const usuariosPagina = lista.slice(inicio, fim);

    usuariosPagina.forEach(usuario=>{

        listaUsuarios.innerHTML += `

            <tr>

                <td>

                    <img

                        src="${usuario.foto}"

                        class="user-photo"

                        alt="${usuario.nome}">

                </td>

                <td>${usuario.nome}</td>

                <td>${usuario.email}</td>

                <td>${usuario.telefone}</td>

                <td>

                    <span class="status ${usuario.status.toLowerCase()}">

                        ${usuario.status}

                    </span>

                </td>

                <td>

                    <div class="actions">

                        <button

                            class="btn-view"

                            title="Visualizar"

                            onclick="visualizarUsuario(${usuario.id})">

                            <i class="fa-solid fa-eye"></i>

                        </button>

                        <button

                            class="btn-edit"

                            title="Editar"

                            onclick="editarUsuario(${usuario.id})">

                            <i class="fa-solid fa-pen"></i>

                        </button>

                        <button

                            class="btn-delete"

                            title="Excluir"

                            onclick="excluirUsuario(${usuario.id})">

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </td>

            </tr>

        `;

    });

}

/*==================================================
            PESQUISAR
==================================================*/

function pesquisarUsuarios(){

    const texto = pesquisa.value

        .toLowerCase()

        .trim();

    const statusSelecionado =

        filtroStatus.value;

    const resultado = usuarios.filter(usuario=>{

        const encontrouTexto =

            usuario.nome

            .toLowerCase()

            .includes(texto)

            ||

            usuario.email

            .toLowerCase()

            .includes(texto)

            ||

            usuario.telefone

            .includes(texto);

        const encontrouStatus =

            statusSelecionado === "Todos"

            ||

            usuario.status === statusSelecionado;

        return encontrouTexto && encontrouStatus;

    });

    paginaAtual = 1;

    carregarTabela(resultado);

}

/*==================================================
            EVENTOS
==================================================*/

btnPesquisar.addEventListener(

    "click",

    pesquisarUsuarios

);

pesquisa.addEventListener(

    "keyup",

    pesquisarUsuarios

);

filtroStatus.addEventListener(

    "change",

    pesquisarUsuarios

);

/*==================================================
            INICIALIZAÇÃO
==================================================*/

carregarTabela();


/*==================================================
            VISUALIZAR USUÁRIO
==================================================*/

function visualizarUsuario(id){

    const usuario = usuarios.find(

        usuario => usuario.id === id

    );

    if(!usuario){

        return;

    }

    alert(

`Nome: ${usuario.nome}

E-mail: ${usuario.email}

Telefone: ${usuario.telefone}

Status: ${usuario.status}`

    );

}

/*==================================================
            EDITAR USUÁRIO
==================================================*/

function editarUsuario(id){

    const usuario = usuarios.find(

        usuario => usuario.id === id

    );

    if(!usuario){

        return;

    }

    const novoStatus = prompt(

        "Digite o novo status (Ativo, Inativo ou Bloqueado):",

        usuario.status

    );

    if(novoStatus == null){

        return;

    }

    if(

        novoStatus !== "Ativo" &&

        novoStatus !== "Inativo" &&

        novoStatus !== "Bloqueado"

    ){

        alert("Status inválido.");

        return;

    }

    usuario.status = novoStatus;

    pesquisarUsuarios();

}

/*==================================================
            EXCLUIR USUÁRIO
==================================================*/

function excluirUsuario(id){

    const confirmar = confirm(

        "Deseja realmente excluir este usuário?"

    );

    if(!confirmar){

        return;

    }

    usuarios = usuarios.filter(

        usuario => usuario.id !== id

    );

    pesquisarUsuarios();

}

/*==================================================
            PAGINAÇÃO
==================================================*/

function atualizarPaginacao(lista = usuarios){

    const numerosPaginas =

        document.getElementById("numerosPaginas");

    numerosPaginas.innerHTML = "";

    const totalPaginas = Math.ceil(

        lista.length / usuariosPorPagina

    );

    for(let i = 1; i <= totalPaginas; i++){

        const botao = document.createElement("button");

        botao.textContent = i;

        if(i === paginaAtual){

            botao.classList.add("ativo");

        }

        botao.onclick = function(){

            paginaAtual = i;

            carregarTabela(lista);

        };

        numerosPaginas.appendChild(botao);

    }

}

/*==================================================
            BOTÕES DA PAGINAÇÃO
==================================================*/

document.getElementById("btnAnterior")

.addEventListener("click",()=>{

    if(paginaAtual > 1){

        paginaAtual--;

        pesquisarUsuarios();

    }

});

document.getElementById("btnProximo")

.addEventListener("click",()=>{

    const totalPaginas = Math.ceil(

        usuarios.length / usuariosPorPagina

    );

    if(paginaAtual < totalPaginas){

        paginaAtual++;

        pesquisarUsuarios();

    }

});

/*==================================================
            ATUALIZA TABELA
==================================================*/

const carregarTabelaOriginal = carregarTabela;

carregarTabela = function(lista = usuarios){

    carregarTabelaOriginal(lista);

    atualizarPaginacao(lista);

};

/*==================================================
            PRIMEIRO CARREGAMENTO
==================================================*/

window.addEventListener("load",()=>{

    carregarTabela();

});
