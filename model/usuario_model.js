//=========================================================
// CONEXÃO COM O BANCO DE DADOS
//=========================================================

const conexao = require("../conexao/conexao.js");

//=========================================================
// CADASTRAR USUÁRIO
//=========================================================

function cadastrar(usuario, callback) {

    const sql = `
        INSERT INTO Usuario
        (
            nome,
            telefone,
            email,
            senha,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            usuario.nome,
            usuario.telefone,
            usuario.email,
            usuario.senha,
            usuario.Loja_idLoja
        ],
        callback
    );

}

//=========================================================
// LISTAR USUÁRIOS
//=========================================================

function listar(callback) {

    const sql = `
        SELECT
            u.idUsuario,
            u.nome,
            u.telefone,
            u.email,
            u.Loja_idLoja,
            l.nome AS loja
        FROM Usuario u
        INNER JOIN Loja l
            ON u.Loja_idLoja = l.idLoja
        ORDER BY u.nome
    `;

    conexao.query(sql, callback);

}

//=========================================================
// BUSCAR USUÁRIO POR ID
//=========================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT
            u.idUsuario,
            u.nome,
            u.telefone,
            u.email,
            u.senha,
            u.Loja_idLoja,
            l.nome AS loja
        FROM Usuario u
        INNER JOIN Loja l
            ON u.Loja_idLoja = l.idLoja
        WHERE u.idUsuario = ?
    `;

    conexao.query(sql, [id], callback);

}

//=========================================================
// BUSCAR USUÁRIO POR EMAIL
//=========================================================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT *
        FROM Usuario
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

//=========================================================
// ATUALIZAR USUÁRIO
//=========================================================

function atualizar(id, usuario, callback) {

    const sql = `
        UPDATE Usuario
        SET
            nome = ?,
            telefone = ?,
            email = ?,
            senha = ?,
            Loja_idLoja = ?
        WHERE idUsuario = ?
    `;

    conexao.query(
        sql,
        [
            usuario.nome,
            usuario.telefone,
            usuario.email,
            usuario.senha,
            usuario.Loja_idLoja,
            id
        ],
        callback
    );

}

//=========================================================
// EXCLUIR USUÁRIO
//=========================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Usuario
        WHERE idUsuario = ?
    `;

    conexao.query(sql, [id], callback);

}

//=========================================================
// EXPORTAÇÃO DAS FUNÇÕES
//=========================================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};