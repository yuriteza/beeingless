//=========================================================
// IMPORTA O MODEL
//=========================================================

const usuarioModel = require("../model/usuario_model");

//=========================================================
// CADASTRAR USUÁRIO
//=========================================================

function cadastrar(req, res) {

    const usuario = req.body;

    // Caso não seja enviada a loja, utiliza a loja padrão
    if (!usuario.Loja_idLoja) {
        usuario.Loja_idLoja = 1;
    }

    // Validação dos campos obrigatórios
    if (
        !usuario.nome ||
        !usuario.telefone ||
        !usuario.email ||
        !usuario.senha
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    usuarioModel.buscarPorEmail(usuario.email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "E-mail já cadastrado."
            });

        }

        usuarioModel.cadastrar(usuario, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar usuário."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Usuário cadastrado com sucesso!",
                idUsuario: resultado.insertId

            });

        });

    });

}

//=========================================================
// LISTAR USUÁRIOS
//=========================================================

function listar(req, res) {

    usuarioModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar usuários."
            });

        }

        res.json(resultado);

    });

}

//=========================================================
// BUSCAR POR ID
//=========================================================

function buscarPorId(req, res) {

    const id = req.params.id;

    usuarioModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar usuário."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//=========================================================
// ATUALIZAR
//=========================================================

function atualizar(req, res) {

    const id = req.params.id;
    const usuario = req.body;

    usuarioModel.atualizar(id, usuario, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar usuário."
            });

        }

        if (resultado.affectedRows == 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Usuário atualizado com sucesso."

        });

    });

}

//=========================================================
// EXCLUIR
//=========================================================

function excluir(req, res) {

    const id = req.params.id;

    usuarioModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir usuário."
            });

        }

        if (resultado.affectedRows == 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Usuário excluído com sucesso."

        });

    });

}

//=========================================================
// LOGIN
//=========================================================

function login(req, res) {

    const { email, senha } = req.body;

    if (!email || !senha) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o e-mail e a senha."

        });

    }

    usuarioModel.buscarPorEmail(email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({

                sucesso: false,
                mensagem: "Erro interno."

            });

        }

        if (resultado.length === 0) {

            return res.json({

                sucesso: false,
                mensagem: "E-mail ou senha inválidos."

            });

        }

        const usuario = resultado[0];

        if (usuario.senha !== senha) {

            return res.json({

                sucesso: false,
                mensagem: "E-mail ou senha inválidos."

            });

        }

        res.json({

            sucesso: true,

            usuario: {

                id: usuario.idUsuario,
                nome: usuario.nome,
                telefone: usuario.telefone,
                email: usuario.email,
                Loja_idLoja: usuario.Loja_idLoja

            }

        });

    });

}

//=========================================================
// EXPORTAÇÃO
//=========================================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    login

};