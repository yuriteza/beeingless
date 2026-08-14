codigo para o servidor.js
//==========================================

// IMPORTAÇÕES

//==========================================
 
const express = require("express");

const cors = require("cors");

const path = require("path");
 
const app = express();
 
console.log(">>> ESTE SERVIDOR.JS ESTÁ RODANDO <<<");
 
 
//==========================================

// CONFIGURAÇÕES

//==========================================
 
app.use(cors());
 
app.use(express.json());
 
app.use(

    express.urlencoded({

        extended: true

    })

);
 
 
//==========================================

// ARQUIVOS PÚBLICOS / ASSETS

//==========================================
 
app.use(

    "/assets",

    express.static(

        path.join(__dirname, "..", "assets")

    )

);
 
 
//==========================================

// CONEXÃO COM O BANCO

//==========================================
 
const conexao = require("./conexao");
 
 
//==========================================

// ARQUIVOS ESTÁTICOS

//==========================================
 
// Arquivos da raiz do projeto

app.use(

    express.static(

        path.join(__dirname, "..")

    )

);
 
 
// Arquivos da pasta PAGES

app.use(

    "/pages",

    express.static(

        path.join(__dirname, "..", "PAGES")

    )

);
 
 
// Arquivos da pasta STYLE

app.use(

    "/style",

    express.static(

        path.join(__dirname, "..", "STYLE")

    )

);
 
 
// Arquivos da pasta JS

app.use(

    "/js",

    express.static(

        path.join(__dirname, "..", "JS")

    )

);
 
 
//==========================================

// PÁGINA INICIAL

//==========================================
 
app.get("/", (req, res) => {
 
    res.sendFile(

        path.join(

            __dirname,

            "..",

            "index.html"

        )

    );
 
});

 
app.use("/uploads", express.static("uploads"));



// cria uma rota para testar a conexao com o banco de dados
const usuarioRoutas = require("../routes/usuario_rotas.js");
app.use("/usuario", usuarioRoutas);

const bannerRoutas = require("../routes/banner_rotas.js");
app.use("/banner", bannerRoutas);

const imagem_produtoRoutas = require("../routes/imagem_produto_rotas.js");
app.use("/imagem_produto", imagem_produtoRoutas);


const niveisRoutas = require("../routes/niveis_rotas.js");
app.use("/niveis", niveisRoutas);


const produtoRoutas = require("../routes/produto_rotas.js");
app.use("/produto", produtoRoutas);


const videoRoutas = require("../routes/video_rotas.js");
app.use("/video", videoRoutas);

const lojistaRotas =
    require("../routes/lojista.rotas.js");

app.use(
    "/lojista",
    lojistaRotas
);

// importar as rotas do servidor 
app.listen(3000, () => {
    console.log("Servidor iniciando!");
});

