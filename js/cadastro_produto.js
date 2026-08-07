/*=====================================================
=
=                 API
=
=====================================================*/

const API = "http://localhost:3000";

const URL_PRODUTO = `${API}/produto`;
const URL_VIDEO = `${API}/video`;
const URL_IMAGEM = `${API}/imagem_produto`;

/*=====================================================
=
=          TÍTULOS DA PÁGINA
=
=====================================================*/

const tituloPagina = document.getElementById("tituloPagina");
const descricaoPagina = document.getElementById("descricaoPagina");

const tituloInformacoes =
document.getElementById("tituloInformacoes");

const descricaoInformacoes =
document.getElementById("descricaoInformacoes");

const tituloVideo =
document.getElementById("tituloVideo");

const descricaoVideo =
document.getElementById("descricaoVideo");

const tituloImagem =
document.getElementById("tituloImagem");

const descricaoImagem =
document.getElementById("descricaoImagem");

/*=====================================================
=
=              CAMPOS PRODUTO
=
=====================================================*/

const nome =
document.getElementById("nome");

const descricao =
document.getElementById("descricao");

const ativo =
document.getElementById("ativo");

/*=====================================================
=
=              CAMPOS VÍDEO
=
=====================================================*/

const nivel =
document.getElementById("nivel");

const categoria =
document.getElementById("categoria");

const youtube =
document.getElementById("youtube");

/*=====================================================
=
=              CAMPOS IMAGEM
=
=====================================================*/

const thumbnail =
document.getElementById("thumbnail");

const previewThumbnail =
document.getElementById("previewThumbnail");

const btnRemoverImagem =
document.getElementById("btnRemoverImagem");

/*=====================================================
=
=               BOTÕES
=
=====================================================*/

const btnSalvarProduto =
document.getElementById("btnSalvarProduto");

const btnSalvarVideo =
document.getElementById("btnSalvarVideo");

const btnSalvarImagem =
document.getElementById("btnSalvarImagem");

const btnVisualizar =
document.getElementById("btnVisualizar");

const btnRascunho =
document.getElementById("btnRascunho");

const btnFinalizar =
document.getElementById("btnFinalizar");

/*=====================================================
=
=              MENSAGENS
=
=====================================================*/

const mensagemProduto =
document.getElementById("mensagemProduto");

const mensagemVideo =
document.getElementById("mensagemVideo");

const mensagemImagem =
document.getElementById("mensagemImagem");

/*=====================================================
=
=                 ETAPAS
=
=====================================================*/

const stepProduto =
document.getElementById("stepProduto");

const stepVideo =
document.getElementById("stepVideo");

const stepImagem =
document.getElementById("stepImagem");

/*=====================================================
=
=          VARIÁVEIS GLOBAIS
=
=====================================================*/

let idProduto = null;

/*=====================================================
=
=             INICIALIZAÇÃO
=
=====================================================*/

window.addEventListener("load", iniciarPagina);

function iniciarPagina(){

    carregarTextos();

    bloquearEtapas();

}

/*=====================================================
=
=           TEXTOS DA TELA
=
=====================================================*/

function carregarTextos(){

    tituloPagina.textContent =
    "Cadastro de Aula";

    descricaoPagina.textContent =
    "Cadastre primeiro o produto, depois o vídeo e por último a imagem.";

    tituloInformacoes.textContent =
    "Informações da Aula";

    descricaoInformacoes.textContent =
    "Informe os dados principais da aula.";

    tituloVideo.textContent =
    "Vídeo da Aula";

    descricaoVideo.textContent =
    "Cadastre o vídeo relacionado à aula.";

    tituloImagem.textContent =
    "Imagem da Aula";

    descricaoImagem.textContent =
    "Escolha a imagem que será exibida na plataforma.";

}

/*=====================================================
=
=        HABILITA / DESABILITA ETAPAS
=
=====================================================*/

function bloquearEtapas(){

    btnSalvarVideo.disabled = true;

    btnSalvarImagem.disabled = true;

}

function liberarVideo(){

    btnSalvarVideo.disabled = false;

    stepVideo.classList.add("active");

}

function liberarImagem(){

    btnSalvarImagem.disabled = false;

    stepImagem.classList.add("active");

}

/*=====================================================
=
=           MENSAGENS
=
=====================================================*/

function limparMensagens(){

    mensagemProduto.textContent = "";
    mensagemVideo.textContent = "";
    mensagemImagem.textContent = "";

    mensagemProduto.className = "mensagem";
    mensagemVideo.className = "mensagem";
    mensagemImagem.className = "mensagem";

}

function mostrarMensagem(elemento, texto, sucesso = false){

    elemento.textContent = texto;

    if(sucesso){

        elemento.classList.add("sucesso");

    }else{

        elemento.classList.add("erro");

    }

}

/*=====================================================
=
=         VALIDAR PRODUTO
=
=====================================================*/

function validarProduto(){

    limparMensagens();

    if(nome.value.trim() === ""){

        mostrarMensagem(
            mensagemProduto,
            "Informe o título da aula."
        );

        nome.focus();

        return false;

    }

    if(descricao.value.trim() === ""){

        mostrarMensagem(
            mensagemProduto,
            "Informe a descrição da aula."
        );

        descricao.focus();

        return false;

    }

    return true;

}

/*=====================================================
=
=      CADASTRAR PRODUTO
=
=====================================================*/

btnSalvarProduto.addEventListener(
    "click",
    cadastrarProduto
);

async function cadastrarProduto(){

    if(!validarProduto()){

        return;

    }

    const produto = {

        nome: nome.value.trim(),

        descricao: descricao.value.trim(),

        ativo: Number(ativo.value),

        Loja_idLoja: 1

    };

    btnSalvarProduto.disabled = true;

    try{

        const resposta = await fetch(
            URL_PRODUTO,
            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify(produto)

            }
        );

        const retorno = await resposta.json();

        if(!retorno.sucesso){

            btnSalvarProduto.disabled = false;

            mostrarMensagem(

                mensagemProduto,

                retorno.mensagem || "Erro ao cadastrar produto."

            );

            return;

        }

        idProduto = retorno.idProduto;

        mostrarMensagem(

            mensagemProduto,

            "Produto cadastrado com sucesso!",

            true

        );

        liberarVideo();

    }

    catch(erro){

        console.error(erro);

        btnSalvarProduto.disabled = false;

        mostrarMensagem(

            mensagemProduto,

            "Erro ao conectar com o servidor."

        );

    }

}

/*=====================================================
=
=       VERIFICAR PRODUTO
=
=====================================================*/

function verificarProduto(){

    if(idProduto === null){

        mostrarMensagem(

            mensagemVideo,

            "Cadastre primeiro o produto."

        );

        return false;

    }

    return true;

}

/*=====================================================
=
=           VALIDAR VÍDEO
=
=====================================================*/

function validarVideo(){

    limparMensagens();

    if(!verificarProduto()){

        return false;

    }

    if(nivel.value === ""){

        mostrarMensagem(
            mensagemVideo,
            "Selecione o nível."
        );

        nivel.focus();

        return false;

    }

    if(categoria.value === ""){

        mostrarMensagem(
            mensagemVideo,
            "Selecione uma categoria."
        );

        categoria.focus();

        return false;

    }

    if(youtube.value.trim() === ""){

        mostrarMensagem(
            mensagemVideo,
            "Informe o link do vídeo."
        );

        youtube.focus();

        return false;

    }

    return true;

}

/*=====================================================
=
=          CADASTRAR VÍDEO
=
=====================================================*/

btnSalvarVideo.addEventListener(
    "click",
    cadastrarVideo
);

async function cadastrarVideo(){

    if(!validarVideo()){

        return;

    }

    const video = {

        Produto_idProduto: idProduto,

        Niveis_idNiveis: Number(nivel.value),

        categoria: categoria.value,

        link: youtube.value.trim()

    };

    btnSalvarVideo.disabled = true;

    try{

        const resposta = await fetch(

            URL_VIDEO,

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify(video)

            }

        );

        const retorno = await resposta.json();

        if(!retorno.sucesso){

            btnSalvarVideo.disabled = false;

            mostrarMensagem(

                mensagemVideo,

                retorno.mensagem || "Erro ao cadastrar vídeo."

            );

            return;

        }

        mostrarMensagem(

            mensagemVideo,

            "Vídeo cadastrado com sucesso!",

            true

        );

        liberarImagem();

    }

    catch(erro){

        console.error(erro);

        btnSalvarVideo.disabled = false;

        mostrarMensagem(

            mensagemVideo,

            "Erro ao conectar ao servidor."

        );

    }

}

/*=====================================================
=
=          PREVIEW DA IMAGEM
=
=====================================================*/

thumbnail.addEventListener(

    "change",

    carregarPreviewImagem

);

function carregarPreviewImagem(){

    const arquivo = thumbnail.files[0];

    if(!arquivo){

        limparPreview();

        return;

    }

    if(!arquivo.type.startsWith("image/")){

        mostrarMensagem(

            mensagemImagem,

            "Selecione um arquivo de imagem."

        );

        thumbnail.value = "";

        limparPreview();

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function(evento){

        previewThumbnail.innerHTML = `

            <img
                src="${evento.target.result}"
                alt="Preview"
                class="imagem-preview">

        `;

        previewThumbnail.classList.add("tem-imagem");

    };

    leitor.readAsDataURL(arquivo);

}

/*=====================================================
=
=          LIMPAR PREVIEW
=
=====================================================*/

function limparPreview(){

    previewThumbnail.innerHTML = `

        <i class="fa-regular fa-image fa-4x"></i>

        <p>

            Nenhuma imagem selecionada

        </p>

    `;

    previewThumbnail.classList.remove("tem-imagem");

}

/*=====================================================
=
=          REMOVER IMAGEM
=
=====================================================*/

btnRemoverImagem.addEventListener(

    "click",

    () => {

        thumbnail.value = "";

        limparPreview();

        limparMensagens();

    }

);

/*=====================================================
=
=          CADASTRAR IMAGEM
=
=====================================================*/

btnSalvarImagem.addEventListener(
    "click",
    cadastrarImagem
);

async function cadastrarImagem(){

    limparMensagens();

    if(idProduto === null){

        mostrarMensagem(
            mensagemImagem,
            "Cadastre primeiro o produto."
        );

        return;

    }

    if(thumbnail.files.length === 0){

        mostrarMensagem(
            mensagemImagem,
            "Selecione uma imagem."
        );

        return;

    }

    const dados = new FormData();

    dados.append(
        "arquivo",
        thumbnail.files[0]
    );

    dados.append(
        "Produto_idProduto",
        idProduto
    );

    btnSalvarImagem.disabled = true;

    try{

        const resposta = await fetch(

            URL_IMAGEM,

            {

                method:"POST",

                body:dados

            }

        );

        const retorno = await resposta.json();

        if(!retorno.sucesso){

           
            mostrarMensagem(

                mensagemImagem,

                retorno.mensagem ||
                "Erro ao cadastrar imagem."

            );

            return;

        }

        mostrarMensagem(

            mensagemImagem,

            "Imagem cadastrada com sucesso!",

            true

        );

        stepImagem.classList.add("active");

    }

    catch(erro){

        console.error(erro);

        mostrarMensagem(

            mensagemImagem,

            "Erro ao conectar ao servidor."

        );

    }

    finally{

    btnSalvarImagem.disabled = false;

}

}

/*=====================================================
=
=          VISUALIZAR DADOS
=
=====================================================*/

btnVisualizar.addEventListener(

    "click",

    visualizarDados

);

function visualizarDados(){

    console.clear();

    console.table({

        nome:nome.value,

        descricao:descricao.value,

        ativo:ativo.value,

        nivel:nivel.value,

        categoria:categoria.value,

        youtube:youtube.value,

        imagem:

        thumbnail.files.length > 0 ?

        thumbnail.files[0].name :

        "Nenhuma"

    });

}

/*=====================================================
=
=          SALVAR RASCUNHO
=
=====================================================*/

btnRascunho.addEventListener(

    "click",

    salvarRascunho

);

function salvarRascunho(){

    const rascunho = {

        nome:nome.value,

        descricao:descricao.value,

        ativo:ativo.value,

        nivel:nivel.value,

        categoria:categoria.value,

        youtube:youtube.value

    };

    localStorage.setItem(

        "rascunhoProduto",

        JSON.stringify(rascunho)

    );

    alert(

        "Rascunho salvo com sucesso!"

    );

}

/*=====================================================
=
=          FINALIZAR CADASTRO
=
=====================================================*/

btnFinalizar.addEventListener(

    "click",

    finalizarCadastro

);

function finalizarCadastro(){

    alert(

        "Cadastro finalizado com sucesso!"

    );

    limparFormulario();

}

/*=====================================================
=
=          LIMPAR FORMULÁRIO
=
=====================================================*/

function limparFormulario(){

    nome.value = "";

    descricao.value = "";

    ativo.selectedIndex = 0;

    nivel.selectedIndex = 0;

    categoria.selectedIndex = 0;

    youtube.value = "";

    thumbnail.value = "";

    limparPreview();

    limparMensagens();

    idProduto = null;

    btnSalvarProduto.disabled = false;

    btnSalvarVideo.disabled = true;

    btnSalvarImagem.disabled = true;

    stepProduto.classList.add("active");

    stepVideo.classList.remove("active");

    stepImagem.classList.remove("active");

}

/*=====================================================
=
=          CARREGAR RASCUNHO
=
=====================================================*/

window.addEventListener(

    "load",

    carregarRascunho

);

function carregarRascunho(){

    const dados = localStorage.getItem(

        "rascunhoProduto"

    );

    if(!dados){

        return;

    }

    const rascunho = JSON.parse(dados);

    nome.value = rascunho.nome || "";

    descricao.value = rascunho.descricao || "";

    ativo.value = rascunho.ativo || "1";

    nivel.value = rascunho.nivel || "";

    categoria.value = rascunho.categoria || "";

    youtube.value = rascunho.youtube || "";

}

/*=====================================================
=
=              FIM DO ARQUIVO
=
=====================================================*/