// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /clientes: para cadastrar um novo cliente.
// GET /clientes: para listar todos os clientes.
// GET /clientes/:id: para buscar um cliente específico pelo ID.
// PUT /clientes/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /clientes/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos vídeos.
const VideoController = require("../controller/video_controller.js");
router.post("/", VideoController.cadastrar);

router.get("/", VideoController.listar);

// Listar vídeos de um produto
router.get("/produto/:id", VideoController.listarPorProduto);

router.get("/:id", VideoController.buscarPorId);

router.put("/:id", VideoController.atualizar);

router.delete("/:id", VideoController.excluir);

module.exports = router;