/* COMENTARIO DE VARIAS LINHAS*/
-- COMENTARIO DE 1 LINHA

-- CRIAR TABELAS QUE NÃO TEM CHAVE ESTRANGEIRA

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE BEEINGLES;
USE BEEINGLES;

insert into lojista (nome,cpf,email,senha,telefone) values("cleiciane",63539189863,"acobeyuri@gmail.com","armywire09", 639982715);
select * from lojista; 

CREATE TABLE Lojista(
idLojista int primary key auto_increment,
nome varchar(200) not null,
cpf mediumint(12) not null unique,
cnpj mediumint (15) unique,
email varchar(120) not null,
senha varchar(13) not null,
telefone mediumint(14) 
);

CREATE TABLE Marca(
idMarca int primary key auto_increment,
nome varchar(100) not null,
logo longblob
);


-- CRIAR TABELAS COM CHAVE ESTRANGEIRA FK
insert into loja(nome, whatsapp, telefone, email, lojista_idlojista) 
values ("bee ingles", "8534326", 6399802715,"acobeyuri@gmail.com",1);

select * from loja;


CREATE TABLE Loja(
idLoja int primary key auto_increment,
nome varchar(200) not null,
whatsapp varchar(50),
instagram varchar(50),
facebook varchar(50),
telefone mediumint(14) not null,
email varchar(120) not null,
Lojista_idLojista int,
FOREIGN KEY (Lojista_idLojista) REFERENCES Lojista (idLojista)
);

CREATE TABLE USUARIO (
idUsuario int primary key auto_increment,
nome varchar(200) not null,
telefone mediumint(15) not null,
email varchar(120) not null,
senha varchar(13) not null,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Banner(
idBanner int primary key auto_increment,
imagem longblob not null,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja),
FOREIGN KEY (Niveis_idNiveis) REFERENCES Niveis (idNiveis)
);
CREATE TABLE Produto(
idProduto int primary key auto_increment,
nome varchar(45) not null,
descricao text(1000) not null,
ativo boolean,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Imagem_produto(
idImagem_produto int primary key auto_increment,
arquivo longblob not null,
Produto_idProduto int,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);
 
CREATE TABLE NIVEIS(
idNiveis INT primary key auto_increment,

basico VARCHAR(2000),
basico_pronuncia VARCHAR(2000),
basico_vocabulario VARCHAR(2000),
basico_grammtica VARCHAR(2000),
basico_exterio_trabalho VARCHAR(2000),
basico_exterior_travel VARCHAR(2000),

intermediario VARCHAR(2000),
intermediario_pronuncia VARCHAR(2000),
intermediario_vocabulario VARCHAR(2000),
intremediario_gramatica VARCHAR(2000),
intremediario_exterior_trabalho VARCHAR(2000),
intremediario_exterior_travel VARCHAR(2000),

avancado VARCHAR(2000),
avancado_pronuncia VARCHAR(2000),
avancado_vocabulario VARCHAR(2000),
avancado_gramatica VARCHAR(2000),
avancado_exterior_trabalho VARCHAR(2000),
avancado_exerio_travel VARCHAR(2000),
Produto_idProduto INT,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);

CREATE TABLE VIDEO(
idVideo INT  primary key auto_increment,
Produto_idProduto INT,

basico VARCHAR(2000),
basico_pronuncia VARCHAR(2000),
basico_vocabulario VARCHAR(2000),
basico_grammtica VARCHAR(2000),
basico_exterio_trabalho VARCHAR(2000),
basico_exterior_travel VARCHAR(2000),

intermediario VARCHAR(2000),
intermediario_pronuncia VARCHAR(2000),
intermediario_vocabulario VARCHAR(2000),
intremediario_gramatica VARCHAR(2000),
intremediario_exterior_trabalho VARCHAR(2000),
intremediario_exterior_travel VARCHAR(2000),

avancado VARCHAR(2000),
avancado_pronuncia VARCHAR(2000),
avancado_vocabulario VARCHAR(2000),
avancado_gramatica VARCHAR(2000),
avancado_exterior_trabalho VARCHAR(2000),
avancado_exerio_travel VARCHAR(2000),
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
FOREIGN KEY (Niveis_idNiveis) REFERENCES Niveis (idNiveis)
);








-- DML-- COMANDOS DE MODELAGEM DO BD
-- INSERIR, EDITAR, EXCLUIR, LISTAR

-- LISTAGEM DE TABELAS
show tables;

-- INSERT - INSERIR DADOS NA TABELA
insert INTO -- endereco

-- LISTAR DADOS DA TABELA
select * from -- nome da tabela


