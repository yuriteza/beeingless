//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Usuario
// =========================

function cadastrar(banner, callback) {

    const sql = `INSERT INTO Banner
        ( imagem,Loja_idLoja,Niveis_idNiveis )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.Loja_idLoja,
            banner.Niveis_idNiveis
        ],
        callback
    );

}

            
// =========================
// Listar Banners
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Banner
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE Banner
        SET

            nome = ?,
            telefone = ?,
            email = ?,
            senha = ?,
            Loja_idLoja = ?

        WHERE idBanner = ?
    `;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.Loja_idLoja,
            banner.Niveis_idNiveis, 
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Banner
        WHERE idBanner = ?
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