// coectar com o servidor do node.js e o banco de dados mysql
const mysql = require("mysql2");

// variavel que armazena a conexao com o banco de dados
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // senha do mysql
    database: "BEEINGLES"
});
conexao.connect((erro) => {
    
    if (erro) {
        console.log("Erro ao conectar : " + erro);
        return;
    }

    console.log("Conexão estabelecida com sucesso!");
});

module.exports = conexao;