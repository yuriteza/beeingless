//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Usuario
// =========================

function cadastrar(niveis, callback) {

    const sql = `INSERT INTO Niveis
        ( basico,basico_pronuncia, basico_vocabulario,basico_grammtica,basico_exterio_trabalho ,
         basico_exterior_travel ,intermediario, intermediario_pronuncia ,intermediario_vocabulario , intremediario_gramatica ,
         intremediario_exterior_trabalho ,intremediario_exterior_travel , avancado, avancado_pronuncia ,avancado_vocabulario ,
         avancado_gramatica ,avancado_exterior_trabalho ,avancado_exterior_travel ,Produto_idProduto ,
         )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, )`;

    conexao.query(
        sql,
        [
            niveis.basico,
            niveis.basico_pronuncia,
            niveis.basico_vocabulario,
            niveis.basico_gramatica,
            niveis.basico_exterior_trabalho,
            niveis.basico_exterior_travel,
            niveis.intermediario,
            niveis.intermediario_pronuncia,
            niveis.intermediario_vocabulario,
            niveis.intermediario_gramatica,
            niveis.intermediario_exterior_trabalho,
            niveis.intermediario_exterior_travel,
            niveis.avancado,
            niveis.avancado_pronuncia,
            niveis.avancado_vocabulario,
            niveis.avancado_gramatica,
            niveis.avancado_exterior_trabalho,
            niveis.avancado_exterior_travel,
            niveis.Produto_idProduto,
            
        ],
        callback
    );

}

// =========================
// Listar Usuarios
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Niveis
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Niveis
        WHERE idNiveis = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Niveis
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Usuario
// =========================

function atualizar(id, niveis, callback) {

    const sql = `
        UPDATE Niveis
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
            

        WHERE idNiveis = ?
    `;

    conexao.query(
        sql,
        [
            niveis.basico,
            niveis.basico_pronuncia,
            niveis.basico_vocabulario,
            niveis.basico_gramatica,
            niveis.basico_exterior_trabalho,
            niveis.basico_exterior_travel,
            niveis.intermediario,
            niveis.intermediario_pronuncia,
            niveis.intermediario_vocabulario,
            niveis.intermediario_gramatica,
            niveis.intermediario_exterior_trabalho,
            niveis.intermediario_exterior_travel,
            niveis.avancado,
            niveis.avancado_pronuncia,
            niveis.avancado_vocabulario,
            niveis.avancado_gramatica,
            niveis.avancado_exterior_trabalho,
            niveis.avancado_exterior_travel,
            niveis.Produto_idProduto,
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
        DELETE FROM Niveis
        WHERE idNiveis = ?
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