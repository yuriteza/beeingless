//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem
// =========================

function cadastrar(imagem, callback) {

    const sql = `INSERT INTO Imagem_produto
        ( arquivo,Produto_idProduto )
        VALUES ( ?, ?)`;

    conexao.query(
        sql,
        [
            imagem.arquivo,
            imagem.Produto_idProduto
        ],
        callback
    );

}

        
// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Imagem_produto
    `;

    conexao.query(sql, callback);

}

function listarPorProduto(idProduto, callback) {

    const sql = `
        SELECT *
        FROM Imagem_produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}




// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Imagem_produto
        WHERE idImagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}


// =========================
// Atualizar Imagem
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE Imagem_produto
        SET

            arquivo = ?,
            Produto_idProduto = ?

        WHERE idImagem_produto = ?
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
// Excluir Imagem
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem_produto
        WHERE idImagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    listarPorProduto,
    buscarPorId,
    atualizar,
    excluir

};