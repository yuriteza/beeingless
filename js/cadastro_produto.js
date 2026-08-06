/*=====================================================
=
=           API
=
=====================================================*/

const API = "http://localhost:3000";

const URL_PRODUTO = `${API}/produto`;
const URL_VIDEO = `${API}/video`;
const URL_IMAGEM = `${API}/imagem_produto`;

/*=====================================================
=
=           ELEMENTOS DA PÁGINA
=
=====================================================*/

const tituloPagina = document.getElementById("tituloPagina");
const descricaoPagina = document.getElementById("descricaoPagina");

const tituloInformacoes = document.getElementById("tituloInformacoes");
const descricaoInformacoes = document.getElementById("descricaoInformacoes");

const tituloVideo = document.getElementById("tituloVideo");
const descricaoVideo = document.getElementById("descricaoVideo");

const tituloImagem = document.getElementById("tituloImagem");
const descricaoImagem = document.getElementById("descricaoImagem");

const mensagem = document.getElementById("mensagem");

/*=====================================================
=
=           CAMPOS PRODUTO
=
=====================================================*/

const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const ativo = document.getElementById("ativo");

/*=====================================================
=
=           CAMPOS VÍDEO
=
=====================================================*/

const nivel = document.getElementById("nivel");
const categoria = document.getElementById("categoria");
const youtube = document.getElementById("youtube");

/*=====================================================
=
=           CAMPOS IMAGEM
=
=====================================================*/

const thumbnail = document.getElementById("thumbnail");
const previewThumbnail = document.getElementById("previewThumbnail");

/*=====================================================
=
=           BOTÕES
=
=====================================================*/

const btnSalvarProduto = document.getElementById("btnSalvarProduto");
const btnSalvarVideo = document.getElementById("btnSalvarVideo");
const btnSalvarImagem = document.getElementById("btnSalvarImagem");

/*=====================================================
=
=           ID DO PRODUTO CADASTRADO
=
=====================================================*/

let idProduto = null;

/*=====================================================
=
=           TEXTOS DA TELA
=
=====================================================*/

function carregarTextos() {

    tituloPagina.textContent = "Cadastro de Produto";

    descricaoPagina.textContent =
    "Cadastre primeiro o produto, depois o vídeo e por último a imagem.";

    tituloInformacoes.textContent =
    "Informações do Produto";

    descricaoInformacoes.textContent =
    "Cadastre o produto na plataforma.";

    tituloVideo.textContent =
    "Vídeo";

    descricaoVideo.textContent =
    "Cadastre o vídeo relacionado ao produto.";

    tituloImagem.textContent =
    "Imagem";

    descricaoImagem.textContent =
    "Cadastre a imagem de capa do produto.";

}

/*=====================================================
=
=           MENSAGEM
=
=====================================================*/

function mostrarMensagem(texto, cor = "red") {

    mensagem.style.color = cor;
    mensagem.textContent = texto;

}

/*=====================================================
=
=           INICIALIZAÇÃO
=
=====================================================*/

window.onload = function () {

    carregarTextos();

};

/*=====================================================
=
=           CADASTRAR PRODUTO
=
=====================================================*/

btnSalvarProduto.addEventListener("click", cadastrarProduto);

function cadastrarProduto() {

    const dados = {

        nome: nome.value.trim(),
        descricao: descricao.value.trim(),
        ativo: Number(ativo.value),
        Loja_idLoja: 1

    };

    /*=========================================
        VALIDAÇÃO
    =========================================*/

    if (dados.nome === "") {

        mostrarMensagem("Informe o nome do produto.");
        nome.focus();
        return;

    }

    if (dados.descricao === "") {

        mostrarMensagem("Informe a descrição.");
        descricao.focus();
        return;

    }

    /*=========================================
        ENVIO PARA API
    =========================================*/

    fetch(URL_PRODUTO, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(dados)

    })

    .then(resposta => resposta.json())

    .then(retorno => {

        if (retorno.sucesso) {

            idProduto = retorno.idProduto;

            mostrarMensagem(

                "Produto cadastrado com sucesso! Agora cadastre o vídeo.",

                "green"

            );

            btnSalvarProduto.disabled = true;

            console.log("ID Produto:", idProduto);

        }

        else{

            mostrarMensagem(retorno.mensagem);

        }

    })

    .catch(() => {

        mostrarMensagem("Erro ao conectar com o servidor.");

    });

}

/*=====================================================
=
=           LIMPAR PRODUTO
=
=====================================================*/

function limparProduto(){

    nome.value = "";
    descricao.value = "";

}

/*=====================================================
=
=           HABILITAR ETAPAS
=
=====================================================*/

function verificarProduto(){

    if(idProduto === null){

        mostrarMensagem(
            "Cadastre primeiro o produto."
        );

        return false;

    }

    return true;

}

/*=====================================================
=
=           CADASTRAR VÍDEO
=
=====================================================*/

btnSalvarVideo.addEventListener("click", cadastrarVideo);

function cadastrarVideo() {

    if (!verificarProduto()) {

        return;

    }

    const dados = {

        Produto_idProduto: idProduto,

        Niveis_idNiveis: Number(nivel.value),

        categoria: categoria.value,

        link: youtube.value.trim()

    };

    /*=========================================
        VALIDAÇÃO
    =========================================*/

    if (dados.Niveis_idNiveis === 0 || isNaN(dados.Niveis_idNiveis)) {

        mostrarMensagem("Selecione um nível.");

        nivel.focus();

        return;

    }

    if (dados.categoria === "") {

        mostrarMensagem("Selecione uma categoria.");

        categoria.focus();

        return;

    }

    if (dados.link === "") {

        mostrarMensagem("Informe o link do vídeo.");

        youtube.focus();

        return;

    }

    /*=========================================
        ENVIO
    =========================================*/

    fetch(URL_VIDEO, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(dados)

    })

    .then(resposta => resposta.json())

    .then(retorno => {

        if (retorno.sucesso) {

            mostrarMensagem(

                "Vídeo cadastrado com sucesso! Agora cadastre a imagem.",

                "green"

            );

            btnSalvarVideo.disabled = true;

        }

        else {

            mostrarMensagem(retorno.mensagem);

        }

    })

    .catch(() => {

        mostrarMensagem("Erro ao conectar ao servidor.");

    });

}

/*=====================================================
=
=           PREVIEW DA IMAGEM
=
=====================================================*/

thumbnail.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) {

        previewThumbnail.innerHTML = `

            <i class="fa-regular fa-image fa-4x"></i>

            <p>Nenhuma imagem selecionada</p>

        `;

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function (e) {

        previewThumbnail.innerHTML = `

            <img
                src="${e.target.result}"
                alt="Preview da imagem"
                class="imagem-preview"
            >

        `;

    };

    leitor.readAsDataURL(arquivo);

});
/*=====================================================
=
=           CADASTRAR IMAGEM
=
=====================================================*/

btnSalvarImagem.addEventListener("click", cadastrarImagem);

function cadastrarImagem() {

    if (!verificarProduto()) {

        return;

    }

    if (thumbnail.files.length === 0) {

        mostrarMensagem("Selecione uma imagem.");

        thumbnail.focus();

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

    fetch(URL_IMAGEM, {

        method: "POST",

        body: dados

    })

    .then(resposta => resposta.json())

    .then(retorno => {

        if (retorno.sucesso) {

            mostrarMensagem(

                "Produto cadastrado com sucesso!",

                "green"

            );

            btnSalvarImagem.disabled = true;

            limparFormularioCompleto();

        }

        else {

            mostrarMensagem(retorno.mensagem);

        }

    })

    .catch(() => {

        mostrarMensagem("Erro ao conectar ao servidor.");

    });

    

}



/*=====================================================
=
=           LIMPAR FORMULÁRIO
=
=====================================================*/

function limparFormularioCompleto() {

    nome.value = "";

    descricao.value = "";

    nivel.selectedIndex = 0;

    categoria.selectedIndex = 0;

    youtube.value = "";

    thumbnail.value = "";

    previewThumbnail.innerHTML = "";

    idProduto = null;

    btnSalvarProduto.disabled = false;

    btnSalvarVideo.disabled = false;

    btnSalvarImagem.disabled = false;

}





/*=====================================================
=
=           REMOVER IMAGEM
=
=====================================================*/

const btnRemoverImagem =
document.getElementById("btnRemoverImagem");

btnRemoverImagem.addEventListener("click", () => {

    thumbnail.value = "";

    previewThumbnail.innerHTML = `

        <i class="fa-regular fa-image fa-4x"></i>

        <p>Nenhuma imagem selecionada</p>

    `;

});

/*=====================================================
=
=           INICIALIZAÇÃO
=
=====================================================*/

window.addEventListener("load", () => {

    carregarTextos();

});

// ===========================================
//               CADSATRAR CATEGORIA
// ===========================================


document.getElementById("btnSalvarProduto").
addEventListener("click", function() {
 //capturar os dados do input
 const produtoNome
    = document.getElementById("nome").value;

    const produtoDescricao
    = document.getElementById("descricao").value;

    const produtoAtivo
    = document.getElementById("ativo").value;

  // criar um if para validar se o campo está vazio    
        if (produtoNome === "") {
            alert("Por favor, preencha o nome do produto.");
            return;
        }
 
        // criar um objeto com os dados da categoria
        const produto = {
            nome: produtoNome,
 
            descricao: produtoDescricao,
    
            ativo: produtoAtivo
 
        };
 
        // enviar os dados para o servidor
        fetch("http://localhost:3000/produto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Produto cadastrado:", data);
                alert("Produto cadastrado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar produto:", error);
                alert("Erro ao cadastrar produto.");
            });
});
    