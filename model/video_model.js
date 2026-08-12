//CONEXAO com o banco de dados
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Video
// =========================

function cadastrar(video, callback) {

    const sql = `
        INSERT INTO Video
<<<<<<< HEAD
(
=======
     (
>>>>>>> 232029b (ajeitando tela de cadastro dnv meu deus)
    Produto_idProduto,
    Niveis_idNiveis,
    categoria,
    linkIngles,
    linkPortugues
<<<<<<< HEAD
)
VALUES (?, ?, ?, ?, ?)
=======
   )
    VALUES (?, ?, ?, ?, ?)
>>>>>>> 232029b (ajeitando tela de cadastro dnv meu deus)
    `;

    conexao.query(
        sql,
<<<<<<< HEAD
    [
    video.Produto_idProduto,
    video.Niveis_idNiveis,
    video.categoria,
    video.linkIngles,
    video.linkPortugues
    ],
=======
        [
            video.Produto_idProduto,
            video.Niveis_idNiveis,
            video.categoria,
            video.linkIngles,
            video.linkPortugues
        ],
>>>>>>> 232029b (ajeitando tela de cadastro dnv meu deus)
        callback
    );

}

// =========================
// Listar Video
// =========================

function listar(callback) {

    const sql = `
SELECT

    v.idVideo,

    p.nome AS produto,

    n.nome AS nivel,

    v.categoria,

    v.linkIngles,
<<<<<<< HEAD
   
=======
    
>>>>>>> 232029b (ajeitando tela de cadastro dnv meu deus)
    v.linkPortugues

FROM Video v

INNER JOIN Produto p

ON p.idProduto = v.Produto_idProduto

INNER JOIN Niveis n

ON n.idNiveis = v.Niveis_idNiveis
`;

   conexao.query(sql, callback);

}


function listarPorProduto(idProduto, callback) {

    const sql = `
        SELECT
            v.*,
            n.nome AS nivel
        FROM Video v
        INNER JOIN Niveis n
        ON n.idNiveis = v.Niveis_idNiveis
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
        FROM Video
        WHERE idVideo = ?
    `;

    conexao.query(sql, [id], callback);

}



// =========================
// Atualizar Video
// =========================

function atualizar(id, video, callback) {

    const sql = `
        UPDATE Video
        SET

            Produto_idProduto = ?,

            Niveis_idNiveis = ?,

            categoria = ?,

            linkIngles = ?,
<<<<<<< HEAD

=======
            
>>>>>>> 232029b (ajeitando tela de cadastro dnv meu deus)
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
            video.linkPortugues,
            id
        ],
        callback
    );

}
// =========================
// Excluir Video
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
    listarPorProduto,
    buscarPorId,
    atualizar,
    excluir

};