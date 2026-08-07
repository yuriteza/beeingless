// express é um framework para criar servidores web
// aplicacoes web com node.js
const express = require("express");
// cors é um middleware que permite que o servidor aceite requisicoes de outros dominios
const cors = require("cors");

// criar uma istancia do express para criar o servidor
const app = express();

//permitir que o servidor aceite requisicoes de outros dominios
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// importar a conexao com o banco de dados
const conexao = require("./conexao");

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



// importar as rotas do servidor 
app.listen(3000, () => {
    console.log("Servidor iniciando!");
});

