// ==========================================
// CONEXÃO COM O BANCO DE DADOS
// ==========================================

const conexao = require("../conexao/conexao.js");


// ==========================================
// CADASTRAR VÍDEO
// ==========================================

function cadastrar(video, callback) {

    const sql = `
        INSERT INTO Video
        (
            Produto_idProduto,
            Niveis_idNiveis,
            categoria,
            linkIngles,
            linkPortugues
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            video.Produto_idProduto,
            video.Niveis_idNiveis,
            video.categoria,
            video.linkIngles,
            video.linkPortugues || null
        ],
        callback
    );
}


// ==========================================
// LISTAR VÍDEOS
// ==========================================

function listar(callback) {

    const sql = `
        SELECT

            v.idVideo,

            p.nome AS produto,

            n.nome AS nivel,

            v.categoria,

            v.linkIngles,

            v.linkPortugues

        FROM Video v

        INNER JOIN Produto p
            ON p.idProduto = v.Produto_idProduto

        INNER JOIN Niveis n
            ON n.idNiveis = v.Niveis_idNiveis
    `;

    conexao.query(sql, callback);
}


// ==========================================
// LISTAR VÍDEOS POR PRODUTO
// ==========================================

function listarPorProduto(idProduto, callback) {

    const sql = `
        SELECT

            v.*,

            n.nome AS nivel

        FROM Video v

        INNER JOIN Niveis n
            ON n.idNiveis = v.Niveis_idNiveis

        WHERE v.Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [idProduto],
        callback
    );
}


// ==========================================
// BUSCAR VÍDEO POR ID
// ==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Video
        WHERE idVideo = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// ==========================================
// ATUALIZAR VÍDEO
// ==========================================

function atualizar(id, video, callback) {

    const sql = `
        UPDATE Video
        SET

            Produto_idProduto = ?,

            Niveis_idNiveis = ?,

            categoria = ?,

            linkIngles = ?,

            linkPortugues = ?

        WHERE idVideo = ?
    `;

    conexao.query(
        sql,
        [
            video.Produto_idProduto,
            video.Niveis_idNiveis,
            video.categoria,
            video.linkIngles,
            video.linkPortugues || null,
            id
        ],
        callback
    );
}


// ==========================================
// EXCLUIR VÍDEO
// ==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Video
        WHERE idVideo = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// ==========================================
// EXPORTAÇÃO
// ==========================================

module.exports = {

    cadastrar,
    listar,
    listarPorProduto,
    buscarPorId,
    atualizar,
    excluir

};