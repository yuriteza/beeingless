//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Usuario
// =========================

function cadastrar(video, callback) {

    const sql = `INSERT INTO Video
        ( basico,basico_pronuncia, basico_vocabulario,basico_grammtica,basico_exterio_trabalho ,
         basico_exterior_travel ,intermediario, intermediario_pronuncia ,intermediario_vocabulario , intremediario_gramatica ,
         intremediario_exterior_trabalho ,intremediario_exterior_travel , avancado, avancado_pronuncia ,avancado_vocabulario ,
         avancado_gramatica ,avancado_exterior_trabalho ,avancado_exterior_travel ,Produto_idProduto ,
         Niveis_idNiveis)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            video.basico,
            video.basico_pronuncia,
            video.basico_vocabulario,
            video.basico_gramatica,
            video.basico_exterior_trabalho,
            video.basico_exterior_travel,
            video.intermediario,
            video.intermediario_pronuncia,
            video.intermediario_vocabulario,
            video.intermediario_gramatica,
            video.intermediario_exterior_trabalho,
            video.intermediario_exterior_travel,
            video.avancado,
            video.avancado_pronuncia,
            video.avancado_vocabulario,
            video.avancado_gramatica,
            video.avancado_exterior_trabalho,
            video.avancado_exterior_travel,
            video.Produto_idProduto,
            video.Niveis_idNiveis
        ],
        callback
    );

}

// =========================
// Listar Usuarios
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Video
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Video
        WHERE idVideo = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Video
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Usuario
// =========================

function atualizar(id, video, callback) {

    const sql = `
        UPDATE Video
        SET

            basico = ?,
            basico_pronuncia = ?,
            basico_vocabulario = ?,
            basico_gramatica = ?,
            basico_exterior_trabalho = ?,
            basico_exterior_travel = ?,
            intermediario = ?,
            intermediario_pronuncia = ?,
            intermediario_vocabulario = ?,
            intermediario_gramatica = ?,
            intermediario_exterior_trabalho = ?,
            intermediario_exterior_travel = ?,
            avancado = ?,
            avancado_pronuncia = ?,
            avancado_vocabulario = ?,
            avancado_gramatica = ?,
            avancado_exterior_trabalho = ?,
            avancado_exterior_travel = ?,
            Produto_idProduto = ?,
            Niveis_idNiveis = ?
            

        WHERE idVideo = ?
    `;

    conexao.query(
        sql,
        [
            video.basico,
            video.basico_pronuncia,
            video.basico_vocabulario,
            video.basico_gramatica,
            video.basico_exterior_trabalho,
            video.basico_exterior_travel,
            video.intermediario,
            video.intermediario_pronuncia,
            video.intermediario_vocabulario,
            video.intermediario_gramatica,
            video.intermediario_exterior_trabalho,
            video.intermediario_exterior_travel,
            video.avancado,
            video.avancado_pronuncia,
            video.avancado_vocabulario,
            video.avancado_gramatica,
            video.avancado_exterior_trabalho,
            video.avancado_exterior_travel,
            video.Produto_idProduto,
            video.Niveis_idNiveis
        ],
        callback
    );

}

// =========================
// Excluir Usuario
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Video
        WHERE idVideo = ?
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