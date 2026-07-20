/*=====================================================
=
=           ELEMENTOS
=
=====================================================*/

const tituloPagina = document.getElementById("tituloPagina");
const descricaoPagina = document.getElementById("descricaoPagina");

const tituloInformacoes = document.getElementById("tituloInformacoes");
const descricaoInformacoes = document.getElementById("descricaoInformacoes");

const tituloVideo = document.getElementById("tituloVideo");
const descricaoVideo = document.getElementById("descricaoVideo");

const tituloThumbnail = document.getElementById("tituloThumbnail");
const descricaoThumbnail = document.getElementById("descricaoThumbnail");

const tituloConfiguracoes = document.getElementById("tituloConfiguracoes");
const descricaoConfiguracoes = document.getElementById("descricaoConfiguracoes");

/*=====================================================
=
=           LABELS
=
=====================================================*/

const lblTitulo = document.getElementById("lblTitulo");
const lblNivel = document.getElementById("lblNivel");
const lblCategoria = document.getElementById("lblCategoria");

const lblDescricao = document.getElementById("lblDescricao");

const lblUploadVideo = document.getElementById("lblUploadVideo");
const lblYoutube = document.getElementById("lblYoutube");

const lblThumbnail = document.getElementById("lblThumbnail");

const lblDuracao = document.getElementById("lblDuracao");
const lblOrdem = document.getElementById("lblOrdem");
const lblStatus = document.getElementById("lblStatus");
const lblVisibilidade = document.getElementById("lblVisibilidade");

/*=====================================================
=
=           CAMPOS
=
=====================================================*/

const tituloAula = document.getElementById("tituloAula");
const nivel = document.getElementById("nivel");
const categoria = document.getElementById("categoria");

const descricao = document.getElementById("descricao");

const arquivoVideo = document.getElementById("arquivoVideo");
const youtube = document.getElementById("youtube");

const thumbnail = document.getElementById("thumbnail");

const duracao = document.getElementById("duracao");
const ordem = document.getElementById("ordem");
const status = document.getElementById("status");
const visibilidade = document.getElementById("visibilidade");

/*=====================================================
=
=           PREVIEWS
=
=====================================================*/

const previewVideo = document.getElementById("previewVideo");
const previewThumbnail = document.getElementById("previewThumbnail");

/*=====================================================
=
=           BOTÕES
=
=====================================================*/

const btnVisualizar = document.getElementById("btnVisualizar");
const btnRascunho = document.getElementById("btnRascunho");
const btnPublicar = document.getElementById("btnPublicar");

/*=====================================================
=
=           DADOS DA TELA
=
=====================================================*/

const dadosTela = {

    tituloPagina: "Cadastro de Produto",

    descricaoPagina:
        "Cadastre novas aulas, vídeos ou produtos da plataforma Bee Inglês.",

    tituloInformacoes: "Informações Gerais",

    descricaoInformacoes:
        "Preencha os dados principais do conteúdo.",

    tituloVideo: "Vídeo da Aula",

    descricaoVideo:
        "Faça upload de um vídeo ou informe um link do YouTube.",

    tituloThumbnail: "Thumbnail",

    descricaoThumbnail:
        "Escolha uma imagem de capa para o conteúdo.",

    tituloConfiguracoes: "Configurações",

    descricaoConfiguracoes:
        "Defina status, ordem e visibilidade do conteúdo."

};

/*=====================================================
=
=           PREENCHER TEXTOS
=
=====================================================*/

function carregarTextos(){

    tituloPagina.textContent = dadosTela.tituloPagina;

    descricaoPagina.textContent = dadosTela.descricaoPagina;

    tituloInformacoes.textContent = dadosTela.tituloInformacoes;

    descricaoInformacoes.textContent = dadosTela.descricaoInformacoes;

    tituloVideo.textContent = dadosTela.tituloVideo;

    descricaoVideo.textContent = dadosTela.descricaoVideo;

    tituloThumbnail.textContent = dadosTela.tituloThumbnail;

    descricaoThumbnail.textContent = dadosTela.descricaoThumbnail;

    tituloConfiguracoes.textContent = dadosTela.tituloConfiguracoes;

    descricaoConfiguracoes.textContent = dadosTela.descricaoConfiguracoes;

}

/*=====================================================
=
=           LABELS
=
=====================================================*/

function carregarLabels(){

    lblTitulo.textContent = "Título da Aula";

    lblNivel.textContent = "Nível";

    lblCategoria.textContent = "Categoria";

    

    lblDescricao.textContent = "Descrição";

    lblUploadVideo.textContent = "Arquivo de Vídeo";

    lblYoutube.textContent = "Link do YouTube";

    lblThumbnail.textContent = "Imagem da Thumbnail";

    lblDuracao.textContent = "Duração";

    lblOrdem.textContent = "Ordem";

    lblStatus.textContent = "Status";

    lblVisibilidade.textContent = "Visibilidade";

}

/*=====================================================
=
=           PLACEHOLDERS
=
=====================================================*/

function carregarPlaceholders(){

    tituloAula.placeholder = "Digite o título da aula";

   

    descricao.placeholder = "Descreva o conteúdo...";

    youtube.placeholder = "https://youtube.com/...";

    duracao.placeholder = "00:00";

}

/*=====================================================
=
=           INICIAR
=
=====================================================*/

carregarTextos();

carregarLabels();

carregarPlaceholders();

/*=====================================================
=
=           PREENCHER SELECTS
=
=====================================================*/

const listaNiveis = [

    "Básico",
    "Intermediário",
    "Avançado"

];

const listaCategorias = [

    "Gramática",
    "Vocabulário",
    "Listening",
    "Speaking",
    "Pronúncia",
    "Expressões",
    "Phrasal Verbs"

];

const listaStatus = [

    "Rascunho",
    "Publicado"

];

const listaVisibilidade = [

    "Público",
    "Privado"

];

/*=====================================================
=
=           FUNÇÃO AUXILIAR
=
=====================================================*/

function preencherSelect(select, lista){

    select.innerHTML = "";

    lista.forEach(item=>{

        const option = document.createElement("option");

        option.value = item;

        option.textContent = item;

        select.appendChild(option);

    });

}

/*=====================================================
=
=           CARREGAR SELECTS
=
=====================================================*/

function carregarSelects(){

    preencherSelect(

        nivel,

        listaNiveis

    );

    preencherSelect(

        categoria,

        listaCategorias

    );

    preencherSelect(

        status,

        listaStatus

    );

    preencherSelect(

        visibilidade,

        listaVisibilidade

    );

}

carregarSelects();

/*=====================================================
=
=           PREVIEW THUMBNAIL
=
=====================================================*/

thumbnail.addEventListener(

    "change",

    function(){

        const arquivo = this.files[0];

        if(!arquivo){

            previewThumbnail.innerHTML = "";

            return;

        }

        const leitor = new FileReader();

        leitor.onload = function(e){

            previewThumbnail.innerHTML = `

                <img
                    src="${e.target.result}"
                    alt="Thumbnail"
                >

            `;

        }

        leitor.readAsDataURL(arquivo);

    }

);

/*=====================================================
=
=           PREVIEW VÍDEO
=
=====================================================*/

arquivoVideo.addEventListener(

    "change",

    function(){

        const arquivo = this.files[0];

        if(!arquivo){

            previewVideo.innerHTML = "";

            return;

        }

        const url = URL.createObjectURL(arquivo);

        previewVideo.innerHTML = `

            <video controls>

                <source
                    src="${url}"
                    type="${arquivo.type}"
                >

            </video>

        `;

    }

);

/*=====================================================
=
=           LINK DO YOUTUBE
=
=====================================================*/

youtube.addEventListener(

    "input",

    function(){

        if(this.value.trim() !== ""){

            arquivoVideo.disabled = true;

        }

        else{

            arquivoVideo.disabled = false;

        }

    }

);

/*=====================================================
=
=           UPLOAD DE VÍDEO
=
=====================================================*/

arquivoVideo.addEventListener(

    "change",

    function(){

        if(this.files.length > 0){

            youtube.disabled = true;

        }

        else{

            youtube.disabled = false;

        }

    }

);

/*=====================================================
=
=           FORMULÁRIO
=
=====================================================*/

const formCadastro = document.getElementById("formCadastro");

/*=====================================================
=
=           MÁSCARA DURAÇÃO
=
=====================================================*/

duracao.addEventListener("input", () => {

    let valor = duracao.value.replace(/\D/g, "");

    valor = valor.substring(0, 4);

    if (valor.length > 2) {

        valor = valor.replace(/(\d{2})(\d+)/, "$1:$2");

    }

    duracao.value = valor;

});

/*=====================================================
=
=           VALIDAÇÃO
=
=====================================================*/

function validarFormulario() {

    if (tituloAula.value.trim() === "") {

        alert("Informe o título da aula.");

        tituloAula.focus();

        return false;

    }

    if (categoria.value === "") {

        alert("Selecione uma categoria.");

        categoria.focus();

        return false;

    }

    if (nivel.value === "") {

        alert("Selecione um nível.");

        nivel.focus();

        return false;

    }

    if (descricao.value.trim() === "") {

        alert("Digite uma descrição.");

        descricao.focus();

        return false;

    }

    if (

        arquivoVideo.files.length === 0 &&

        youtube.value.trim() === ""

    ) {

        alert("Selecione um vídeo ou informe um link do YouTube.");

        return false;

    }

    if (

        thumbnail.files.length === 0

    ) {

        alert("Selecione uma thumbnail.");

        return false;

    }

    return true;

}

/*=====================================================
=
=           LIMPAR FORMULÁRIO
=
=====================================================*/

function limparFormulario() {

    formCadastro.reset();

    previewThumbnail.innerHTML = "";

    previewVideo.innerHTML = "";

    youtube.disabled = false;

    arquivoVideo.disabled = false;

}

/*=====================================================
=
=           VISUALIZAR
=
=====================================================*/

btnVisualizar.addEventListener(

    "click",

    () => {

        console.clear();

        console.table({

            titulo: tituloAula.value,

            categoria: categoria.value,

            nivel: nivel.value,

           

            descricao: descricao.value,

            youtube: youtube.value,

            duracao: duracao.value,

            ordem: ordem.value,

            status: status.value,

            visibilidade: visibilidade.value

        });

        alert("Os dados foram exibidos no Console do navegador.");

    }

);

/*=====================================================
=
=           SALVAR RASCUNHO
=
=====================================================*/

btnRascunho.addEventListener(

    "click",

    () => {

        const dados = {

            titulo: tituloAula.value,

            categoria: categoria.value,

            nivel: nivel.value,

           

            descricao: descricao.value,

            youtube: youtube.value,

            duracao: duracao.value,

            ordem: ordem.value,

            status: status.value,

            visibilidade: visibilidade.value

        };

        localStorage.setItem(

            "rascunhoProduto",

            JSON.stringify(dados)

        );

        alert("Rascunho salvo com sucesso.");

    }

);

/*=====================================================
=
=           CARREGAR RASCUNHO
=
=====================================================*/

function carregarRascunho() {

    const dados = localStorage.getItem("rascunhoProduto");

    if (!dados) return;

    const produto = JSON.parse(dados);

    tituloAula.value = produto.titulo || "";

    categoria.value = produto.categoria || "";

    nivel.value = produto.nivel || "";

   

    descricao.value = produto.descricao || "";

    youtube.value = produto.youtube || "";

    duracao.value = produto.duracao || "";

    ordem.value = produto.ordem || "";

    status.value = produto.status || "";

    visibilidade.value = produto.visibilidade || "";

}

/*=====================================================
=
=           PUBLICAR
=
=====================================================*/

formCadastro.addEventListener(

    "submit",

    function (e) {

        e.preventDefault();

        if (!validarFormulario()) {

            return;

        }

        alert("Produto cadastrado com sucesso!");

        localStorage.removeItem("rascunhoProduto");

        limparFormulario();

    }

);

/*=====================================================
=
=           ANIMAÇÃO DAS ETAPAS
=
=====================================================*/

const campos = document.querySelectorAll(

    "input, textarea, select"

);

const etapas = document.querySelectorAll(".step");

campos.forEach((campo, indice) => {

    campo.addEventListener("focus", () => {

        if (indice <= 4) {

            etapas[0].classList.add("active");

        }

        else if (indice <= 6) {

            etapas[1].classList.add("active");

        }

        else if (indice <= 7) {

            etapas[2].classList.add("active");

        }

        else {

            etapas[3].classList.add("active");

        }

    });

});

/*=====================================================
=
=           INICIALIZAÇÃO
=
=====================================================*/

window.addEventListener(

    "load",

    () => {

        carregarRascunho();

    }

);