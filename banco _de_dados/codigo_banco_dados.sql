/* =========================================================
   BANCO DE DADOS
   ========================================================= */

CREATE DATABASE BEEINGLES;

USE BEEINGLES;


/* =========================================================
   TABELAS SEM CHAVE ESTRANGEIRA
   ========================================================= */


/* =========================================================
   1. TABELA LOJISTA
   ========================================================= */

CREATE TABLE Lojista (

    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    cpf VARCHAR(45) NOT NULL UNIQUE,

    cnpj VARCHAR(45) UNIQUE,

    email VARCHAR(120) NOT NULL,

    senha VARCHAR(255) NOT NULL,

    telefone VARCHAR(14) NOT NULL

);


/* =========================================================
   2. TABELA NIVEIS
   ========================================================= */

CREATE TABLE Niveis (

    idNiveis INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(50) NOT NULL

);


/* =========================================================
   3. INSERIR NIVEIS
   ========================================================= */

INSERT INTO Niveis (nome)
VALUES
    ('Básico'),
    ('Intermediário'),
    ('Avançado');


/* =========================================================
   TABELAS COM CHAVE ESTRANGEIRA
   ========================================================= */


/* =========================================================
   4. TABELA LOJA
   Depende de: Lojista
   ========================================================= */

CREATE TABLE Loja (

    idLoja INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    whatsapp VARCHAR(50),

    instagram VARCHAR(50),

    facebook VARCHAR(50),

    telefone VARCHAR(14) NOT NULL,

    email VARCHAR(120) NOT NULL,

    Lojista_idLojista INT,

    FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista(idLojista)

);


/* =========================================================
   5. TABELA USUARIO
   Depende de: Loja
   ========================================================= */

CREATE TABLE Usuario (

    idUsuario INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    telefone VARCHAR(45),

    email VARCHAR(120) NOT NULL,

    senha VARCHAR(255) NOT NULL,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


/* =========================================================
   6. TABELA PRODUTO
   Depende de: Loja
   ========================================================= */

CREATE TABLE Produto (

    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    descricao TEXT NOT NULL,

    ativo BOOLEAN DEFAULT TRUE,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


/* =========================================================
   7. TABELA BANNER
   Depende de: Loja
   ========================================================= */

CREATE TABLE Banner (

    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    imagem LONGBLOB NOT NULL,

    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)

);


/* =========================================================
   8. TABELA IMAGEM_PRODUTO
   Depende de: Produto
   ========================================================= */

CREATE TABLE Imagem_produto (

    idImagem_produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,

    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)

);


/* =========================================================
   9. TABELA VIDEO
   Depende de: Produto e Niveis
   ========================================================= */

CREATE TABLE Video (

    idVideo INT PRIMARY KEY AUTO_INCREMENT,

    Produto_idProduto INT NOT NULL,

    Niveis_idNiveis INT NOT NULL,

    categoria ENUM(
        'pronuncia',
        'vocabulario',
        'gramatica',
        'exterior_trabalho',
        'exterior_travel'
    ) NOT NULL,

    link VARCHAR(2000) NOT NULL,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Niveis_idNiveis)
        REFERENCES Niveis(idNiveis)

);


/* =========================================================
   VERIFICAR TABELAS CRIADAS
   ========================================================= */

SHOW TABLES;


/* =========================================================
   TESTES DE INSERÇÃO
   ========================================================= */


/* =========================================================
   10. INSERIR LOJISTA
   ========================================================= */

INSERT INTO Lojista
(
    nome,
    cpf,
    email,
    senha,
    telefone
)
VALUES
(
    'cleiciane',
    '63539189863',
    'acobeyuri@gmail.com',
    'armywire09',
    '639982715'
);


/* =========================================================
   11. INSERIR LOJA
   Depende do Lojista criado acima
   ========================================================= */

INSERT INTO Loja
(
    nome,
    whatsapp,
    telefone,
    email,
    Lojista_idLojista
)
VALUES
(
    'bee ingles',
    '8534326',
    '6399802715',
    'acobeyuri@gmail.com',
    1
);


/* =========================================================
   CONSULTAS DE TESTE
   ========================================================= */

SELECT * FROM Lojista;

SELECT * FROM Loja;

SELECT * FROM Usuario;

SELECT * FROM Produto;

SELECT * FROM Banner;

SELECT * FROM Imagem_produto;

SELECT * FROM Niveis;

SELECT * FROM Video;


/* =========================================================
   DESCREVER TABELAS
   ========================================================= */

DESC Lojista;

DESC Loja;

DESC Usuario;

DESC Produto;

DESC Banner;

DESC Imagem_produto;

DESC Niveis;

DESC Video;