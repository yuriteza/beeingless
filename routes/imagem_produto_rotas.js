// nesse arquivo, definimos as rotas relacionadas aos produtos e associamos cada rota a uma função do Imagem_ProdutoController. As rotas são:
// POST /imagens-produto: para cadastrar uma nova imagem de produto.
// GET /imagens-produto: para listar todas as imagens de produto.
// GET /imagens-produto/:id: para buscar uma imagem de produto específica pelo ID.
// PUT /imagens-produto/:id: para atualizar as informações de uma imagem de produto específica pelo ID.
// DELETE /imagens-produto/:id: para excluir uma imagem de produto específica pelo ID.


const express = require("express");

// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();

// Criando um objeto router para definir as rotas relacionadas às imagens de produto.
const Imagem_ProdutoController = 
        require("../controller/imagem_produto_controller.js");

const upload = require("../config/upload");

router.post(
    "/",

    (req, res, next) => {

        console.log("=================================");
        console.log("ROTA DE IMAGEM FOI CHAMADA");
        console.log("=================================");

        upload.single("arquivo")(req, res, function (erro) {

            if (erro) {

                console.log("=================================");
                console.log("ERRO DO MULTER");
                console.log("=================================");
                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        erro.message ||
                        "Erro ao enviar imagem."

                });

            }

            console.log("MULTER PROCESSOU A REQUISIÇÃO");

            console.log("ARQUIVO:", req.file);
            console.log("BODY:", req.body);

            next();

        });

    },

    Imagem_ProdutoController.cadastrar
);

router.get("/", Imagem_ProdutoController.listar);

// Listar imagens de um produto
router.get("/produto/:id", Imagem_ProdutoController.listarPorProduto);

router.get("/:id", Imagem_ProdutoController.buscarPorId);

router.put("/:id", Imagem_ProdutoController.atualizar);

router.delete("/:id", Imagem_ProdutoController.excluir);

module.exports = router;