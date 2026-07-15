//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Usuario
// =========================

function cadastrar(usuario, callback) {

    const sql = `INSERT INTO Usuario
        ( nome,email,senha,
        Loja_idLoja )
        VALUES (?,?,?, ?)`;

    conexao.query(
        sql,
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
            usuario.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Usuarios
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Usuario
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Usuario
        WHERE idUsuario = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Usuario
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Usuario
// =========================

function atualizar(id, usuario, callback) {

    const sql = `
        UPDATE Usuario
        SET

            nome = ?,
            email = ?,
            senha = ?,
            Loja_idLoja = ?

        WHERE idUsuario = ?
    `;

    conexao.query(
        sql,
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
            usuario.Loja_idLoja,
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
        DELETE FROM Usuario
        WHERE idUsuario = ?
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