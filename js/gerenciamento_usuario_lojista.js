/*==========================================================
            GERENCIAMENTO DE USUÁRIOS
==========================================================*/

/*==========================================================
            ELEMENTOS DA PÁGINA
==========================================================*/

const tituloPagina = document.getElementById("tituloPagina");
const subtituloPagina = document.getElementById("subtituloPagina");

const tituloFormulario = document.getElementById("tituloFormulario");
const tituloTabela = document.getElementById("tituloTabela");

const pesquisa = document.getElementById("pesquisa");
const filtroStatus = document.getElementById("filtroStatus");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cadastro = document.getElementById("cadastro");
const ultimoAcesso = document.getElementById("ultimoAcesso");
const status = document.getElementById("status");
const observacoes = document.getElementById("observacoes");

const btnPesquisar = document.getElementById("btnPesquisar");
const btnSalvar = document.getElementById("btnSalvar");
const btnBloquear = document.getElementById("btnBloquear");
const btnExcluir = document.getElementById("btnExcluir");
const btnLimpar = document.getElementById("btnLimpar");

const listaUsuarios = document.getElementById("listaUsuarios");

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");
const numerosPaginas = document.getElementById("numerosPaginas");

/*==========================================================
                DADOS DA PÁGINA
==========================================================*/

tituloPagina.textContent = "Gerenciamento de Usuários";

subtituloPagina.textContent =
"Visualize, pesquise e gerencie todos os usuários cadastrados.";

tituloFormulario.textContent = "Informações do Usuário";

tituloTabela.textContent = "Usuários Cadastrados";

btnPesquisar.textContent = "Pesquisar";

btnSalvar.textContent = "Salvar";

btnBloquear.textContent = "Bloquear";

btnExcluir.textContent = "Excluir";

btnLimpar.textContent = "Limpar";

/*==========================================================
                STATUS
==========================================================*/

const listaStatus = [

    "Todos",

    "Ativo",

    "Inativo",

    "Bloqueado"

];

listaStatus.forEach(item=>{

    filtroStatus.innerHTML +=

    `<option>${item}</option>`;

});

listaStatus
.slice(1)
.forEach(item=>{

    status.innerHTML +=

    `<option>${item}</option>`;

});

/*==========================================================
            CRIAR CÍRCULOS
==========================================================*/

/*==================================================
=          CÍRCULOS ANIMADOS
==================================================*/

const fundo = document.getElementById("background-circles");

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

        `translate(${c.x}px,${c.y}px)s
         scale(${pulsar})
         rotate(${c.angulo}deg)`;

    });

    requestAnimationFrame(animar);

}

animar();

/*==================================================
=              PARALLAX
==================================================*/

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX =

    (e.clientX/window.innerWidth)-0.5;

    mouseY =

    (e.clientY/window.innerHeight)-0.5;

});

function efeitoParallax(){

    circulos.forEach((c,index)=>{

        const intensidade =

        (index%6)+1;

        c.el.style.marginLeft =

        `${mouseX*intensidade*6}px`;

        c.el.style.marginTop =

        `${mouseY*intensidade*6}px`;

    });

    requestAnimationFrame(efeitoParallax);

}

efeitoParallax();

/*==================================================
=         REDIMENSIONAMENTO
==================================================*/

window.addEventListener("resize",()=>{

    circulos.forEach(c=>{

        if(c.x>window.innerWidth){

            c.x = numero(0,window.innerWidth);

        }

        if(c.y>window.innerHeight){

            c.y = numero(0,window.innerHeight);

        }

    });

});

/*==================================================
=          ANIMAÇÃO DE ENTRADA
==================================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    requestAnimationFrame(()=>{

        document.body.style.transition="opacity .8s";

        document.body.style.opacity="1";

    });

});

/*==========================================================
            DADOS DOS USUÁRIOS
==========================================================*/

let usuarios=[

{

id:1,

nome:"João Silva",

email:"joao@email.com",

telefone:"(63)99999-1111",

status:"Ativo",

cadastro:"20/07/2026"

},

{

id:2,

nome:"Maria Souza",

email:"maria@email.com",

telefone:"(63)99999-2222",

status:"Ativo",

cadastro:"18/07/2026"

},

{

id:3,

nome:"Carlos Lima",

email:"carlos@email.com",

telefone:"(63)99999-3333",

status:"Bloqueado",

cadastro:"12/07/2026"

}

];

let paginaAtual = 1;

const usuariosPorPagina = 8;

let usuarioSelecionado = null;

/*==========================================================
            CARREGAR TABELA
==========================================================*/

function carregarTabela(lista = usuarios){

    listaUsuarios.innerHTML = "";

    const inicio = (paginaAtual - 1) * usuariosPorPagina;

    const fim = inicio + usuariosPorPagina;

    const usuariosPagina = lista.slice(inicio, fim);

    usuariosPagina.forEach(usuario=>{

        listaUsuarios.innerHTML += `

            <tr>

                <td>

                    <img
                        src="../assets/img/user.png"
                        class="user-photo"
                        alt="Usuário">

                </td>

                <td>${usuario.nome}</td>

                <td>${usuario.email}</td>

                <td>${usuario.telefone}</td>

                <td>

                    <span class="status ${usuario.status.toLowerCase()}">

                        ${usuario.status}

                    </span>

                </td>

                <td>${usuario.cadastro}</td>

                <td>

                    <div class="actions">

                        <button
                            class="btn-view"
                            onclick="selecionarUsuario(${usuario.id})">

                            <i class="fa-solid fa-eye"></i>

                        </button>

                        <button
                            class="btn-delete"
                            onclick="excluirUsuario(${usuario.id})">

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </td>

            </tr>

        `;

    });

    atualizarPaginacao(lista);

}

/*==========================================================
            SELECIONAR USUÁRIO
==========================================================*/

function selecionarUsuario(id){

    const usuario = usuarios.find(item=>item.id === id);

    if(!usuario){

        return;

    }

    usuarioSelecionado = usuario;

    nome.value = usuario.nome;

    email.value = usuario.email;

    telefone.value = usuario.telefone;

    cadastro.value = usuario.cadastro;

    ultimoAcesso.value = usuario.ultimoAcesso || "";

    status.value = usuario.status;

    observacoes.value = usuario.observacoes || "";

}

/*==========================================================
            PAGINAÇÃO
==========================================================*/

function atualizarPaginacao(lista){

    numerosPaginas.innerHTML = "";

    const totalPaginas = Math.ceil(

        lista.length / usuariosPorPagina

    );

    for(let i = 1; i <= totalPaginas; i++){

        numerosPaginas.innerHTML += `

            <button

                class="${i === paginaAtual ? 'ativo' : ''}"

                onclick="irParaPagina(${i})">

                ${i}

            </button>

        `;

    }

}

/*==========================================================
            TROCAR DE PÁGINA
==========================================================*/

function irParaPagina(numero){

    paginaAtual = numero;

    carregarTabela();

}

/*==========================================================
            BOTÃO ANTERIOR
==========================================================*/

btnAnterior.addEventListener("click",()=>{

    if(paginaAtual > 1){

        paginaAtual--;

        carregarTabela();

    }

});

/*==========================================================
            BOTÃO PRÓXIMO
==========================================================*/

btnProximo.addEventListener("click",()=>{

    const totalPaginas = Math.ceil(

        usuarios.length / usuariosPorPagina

    );

    if(paginaAtual < totalPaginas){

        paginaAtual++;

        carregarTabela();

    }

});

/*==========================================================
            PRIMEIRO CARREGAMENTO
==========================================================*/

carregarTabela();

if(usuarios.length > 0){

    selecionarUsuario(usuarios[0].id);

}

/*==========================================================
                PESQUISAR USUÁRIOS
==========================================================*/

function pesquisarUsuarios(){

    const texto = pesquisa.value
        .trim()
        .toLowerCase();

    const filtro = filtroStatus.value;

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
            .toLowerCase()
            .includes(texto);

        const encontrouStatus =

            filtro === "Todos"

            ||

            usuario.status === filtro;

        return encontrouTexto && encontrouStatus;

    });

    paginaAtual = 1;

    carregarTabela(resultado);

}

/*==========================================================
                EVENTOS DA PESQUISA
==========================================================*/

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

/*==========================================================
                SALVAR ALTERAÇÕES
==========================================================*/

btnSalvar.addEventListener(

    "click",

    ()=>{

        if(usuarioSelecionado == null){

            alert("Selecione um usuário.");

            return;

        }

        usuarioSelecionado.nome =

            nome.value;

        usuarioSelecionado.email =

            email.value;

        usuarioSelecionado.telefone =

            telefone.value;

        usuarioSelecionado.status =

            status.value;

        usuarioSelecionado.cadastro =

            cadastro.value;

        usuarioSelecionado.ultimoAcesso =

            ultimoAcesso.value;

        usuarioSelecionado.observacoes =

            observacoes.value;

        pesquisarUsuarios();

        alert(

            "Usuário atualizado com sucesso!"

        );

    }

);

/*==========================================================
                LIMPAR FORMULÁRIO
==========================================================*/

btnLimpar.addEventListener(

    "click",

    ()=>{

        usuarioSelecionado = null;

        nome.value = "";

        email.value = "";

        telefone.value = "";

        cadastro.value = "";

        ultimoAcesso.value = "";

        observacoes.value = "";

        status.selectedIndex = 0;

    }

);

/*==========================================================
            ATALHO ENTER
==========================================================*/

pesquisa.addEventListener(

    "keypress",

    (evento)=>{

        if(evento.key === "Enter"){

            pesquisarUsuarios();

        }

    }

);

/*==========================================================
                EXCLUIR USUÁRIO
==========================================================*/

function excluirUsuario(id){

    const confirmar = confirm(
        "Deseja realmente excluir este usuário?"
    );

    if(!confirmar){

        return;

    }

    usuarios = usuarios.filter(usuario=>{

        return usuario.id !== id;

    });

    if(usuarioSelecionado){

        if(usuarioSelecionado.id === id){

            usuarioSelecionado = null;

            nome.value = "";
            email.value = "";
            telefone.value = "";
            cadastro.value = "";
            ultimoAcesso.value = "";
            observacoes.value = "";
            status.selectedIndex = 0;

        }

    }

    pesquisarUsuarios();

}

/*==========================================================
            BLOQUEAR / DESBLOQUEAR
==========================================================*/

btnBloquear.addEventListener(

    "click",

    ()=>{

        if(!usuarioSelecionado){

            alert(
                "Selecione um usuário."
            );

            return;

        }

        if(usuarioSelecionado.status === "Ativo"){

            usuarioSelecionado.status = "Bloqueado";

        }

        else{

            usuarioSelecionado.status = "Ativo";

        }

        status.value = usuarioSelecionado.status;

        pesquisarUsuarios();

    }

);

/*==========================================================
            RECARREGAR TABELA
==========================================================*/

function atualizarSistema(){

    carregarTabela();

}

/*==========================================================
            RESTAURAR PRIMEIRO USUÁRIO
==========================================================*/

function selecionarPrimeiro(){

    if(usuarios.length === 0){

        return;

    }

    selecionarUsuario(

        usuarios[0].id

    );

}

/*==========================================================
            INICIALIZAÇÃO
==========================================================*/

window.addEventListener(

    "load",

    ()=>{

        carregarTabela();

        selecionarPrimeiro();

    }

);

/*==========================================================
                    FIM
==========================================================*/