// nesse arquivo, definimos as rotas relacionadas aos níveis e associamos cada rota a uma função do NiveisController. As rotas são:
// POST /niveis: para cadastrar um novo nível.
// GET /niveis: para listar todos os níveis.
// GET /niveis/:id: para buscar um nível específico pelo ID.
// PUT /niveis/:id: para atualizar as informações de um nível específico pelo ID.
// DELETE /niveis/:id: para excluir um nível específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos níveis.
const NiveisController = require("../controller/niveis_controller.js");

router.post("/", NiveisController.cadastrar);

router.get("/", NiveisController.listar);

router.get("/:id", NiveisController.buscarPorId);

router.put("/:id", NiveisController.atualizar);

router.delete("/:id", NiveisController.excluir);

module.exports = router;