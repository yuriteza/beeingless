const express = require("express");
const cors = require("cors");

const app = express();

console.log("=================================");
console.log("ESTE É O BACKEND.JS QUE ESTÁ RODANDO");
console.log("=================================");

app.use(cors());

app.use(express.json());

app.get("/teste", (req, res) => {

    console.log("=================================");
    console.log("TESTE DO BACKEND FUNCIONOU");
    console.log("=================================");

    res.json({
        sucesso: true,
        mensagem: "Backend funcionando!"
    });

});

app.use("/uploads", express.static("uploads"));

const conexao = require("./conexao/conexao.js");


// ================================
// USUÁRIO
// ================================

const usuarioRoutas =
require("./routes/usuario_rotas.js");

app.use("/usuario", usuarioRoutas);


// ================================
// BANNER
// ================================

const bannerRoutas =
require("./routes/banner_rotas.js");

app.use("/banner", bannerRoutas);


// ================================
// IMAGEM PRODUTO
// ================================

const imagem_produtoRoutas =
require("./routes/imagem_produto_rotas.js");

app.use(
    "/imagem_produto",
    imagem_produtoRoutas
);


// ================================
// NÍVEIS
// ================================

const niveisRoutas =
require("./routes/niveis_rotas.js");

app.use("/niveis", niveisRoutas);


// ================================
// PRODUTO
// ================================

const produtoRoutas =
require("./routes/produto_rotas.js");

app.use("/produto", produtoRoutas);


// ================================
// VÍDEO
// ================================

const videoRoutas =
require("./routes/video_rotas.js");

app.use("/video", videoRoutas);


// ================================
// SERVIDOR
// ================================

app.listen(3000, () => {

    console.log("Servidor iniciado na porta 3000!");

});