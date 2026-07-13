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

// importar a conexao com o banco de dados
const conexao = require("./conexao");

// importar as rotas do servidor 
app.listen(3000, () => {
    console.log("Servidor iniciando!");
});