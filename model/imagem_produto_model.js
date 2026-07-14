//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem
// =========================

function cadastrar(imagem, callback) {

    const sql = `INSERT INTO Imagem_Produto
        ( arquivo,Produto_idProduto )
        VALUES ( ?, ?)`;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto
        ],
        callback
    );

}

        
// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Imagem_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Imagem_Produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Usuario
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE Imagem_Produto
        SET

            arquivo = ?,
            Produto_idProduto = ?

        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto,
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
        DELETE FROM Imagem_Produto
        WHERE idImagem_Produto = ?
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