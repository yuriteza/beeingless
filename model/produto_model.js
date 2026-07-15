//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Usuario
// =========================

function cadastrar(produto, callback) {

    const sql = `INSERT INTO Produto
        ( nome, descricao,  Loja_idLoja )
        VALUES ( ?, ?,  ?)`;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.Loja_idLoja
        ],
        callback
    );

}

       
// =========================
// Listar Usuarios
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
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

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
            Loja_idLoja = ?

        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Usuario
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
    buscarPorEmail,
    atualizar,
    excluir

};