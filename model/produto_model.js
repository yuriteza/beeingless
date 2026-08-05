//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto, callback) {

    const sql = `INSERT INTO Produto
        ( nome, descricao, ativo, Loja_idLoja )
        VALUES ( ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.ativo,
            produto.Loja_idLoja
        ],
        callback
    );

}

       
// =========================
// Listar Produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}
// =========================
// Atualizar Produto
// =========================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE Produto
        SET

            nome = ?,
            descricao = ?,
            ativo = ?,
            Loja_idLoja = ?

        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.ativo,
            produto.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};