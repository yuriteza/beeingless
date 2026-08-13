//==========================================
// CONEXÃO COM O BANCO
//==========================================

const conexao =
    require("../conexao/conexao.js");


//==========================================
// CADASTRAR LOJISTA
//==========================================

function cadastrar(lojista, callback) {

    const sql = `
        INSERT INTO Lojista
        (
            nome,
            cpf,
            cnpj,
            email,
            senha,
            telefone
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;


    conexao.query(

        sql,

        [
            lojista.nome,
            lojista.cpf,
            lojista.cnpj || null,
            lojista.email,
            lojista.senha,
            lojista.telefone
        ],

        callback

    );

}


//==========================================
// BUSCAR POR CPF
//==========================================

function buscarPorCpf(cpf, callback) {

    const sql = `
        SELECT *
        FROM Lojista
        WHERE cpf = ?
    `;

    conexao.query(
        sql,
        [cpf],
        callback
    );

}


//==========================================
// BUSCAR POR CNPJ
//==========================================

function buscarPorCnpj(cnpj, callback) {

    const sql = `
        SELECT *
        FROM Lojista
        WHERE cnpj = ?
    `;

    conexao.query(
        sql,
        [cnpj],
        callback
    );

}


//==========================================
// BUSCAR POR EMAIL
//==========================================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT *
        FROM Lojista
        WHERE email = ?
    `;

    conexao.query(
        sql,
        [email],
        callback
    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    buscarPorCpf,
    buscarPorCnpj,
    buscarPorEmail

};