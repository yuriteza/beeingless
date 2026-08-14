// coectar com o servidor do node.js e o banco de dados mysql
const mysql = require("mysql2");

// variavel que armazena a conexao com o banco de dados
const conexao = mysql.createConnection({
    host: "reseau.proxy.rlwy.net",
    user: "root",
    port: 25146,
    password: "IppCWjiAaAwROGvxCjHxWKSnLZXGsiso", // senha do mysql
    database: "railway"
});
conexao.connect((erro) => {
    
    if (erro) {
        console.log("Erro ao conectar : " + erro);
        return;
    }

    console.log("Conexão estabelecida com sucesso!");
});

module.exports = conexao;