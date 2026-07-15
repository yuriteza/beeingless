//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const niveisModel = require("../model/niveis_model");

//==========================================
// CADASTRAR NÍVEL
//==========================================

function cadastrar(req, res) {

    const niveis = req.body;

    // Validação dos campos obrigatórios

    if (
        !niveis.basico ||
        !niveis.basico_pronuncia ||
        !niveis.basico_vocabulario ||
        !niveis.basico_gramatica ||
        !niveis.basico ||
        !niveis.basico_pronuncia ||
        !niveis.basico_vocabulario ||
        !niveis.basico_gramatica ||
        !niveis.basico_exterior_trabalho ||
        !niveis.basico_exterior_travel ||
        !niveis.intermediario ||
        !niveis.intermediario_pronuncia ||
        !niveis.intermediario_vocabulario ||
        !niveis.intermediario_gramatica ||
        !niveis.intermediario_exterior_trabalho ||
        !niveis.intermediario_exterior_travel ||
        !niveis.avancado||
        !niveis.avancado_pronuncia||
        !niveis.avancado_vocabulario||
        !niveis.avancado_gramatica||
        !niveis.avancado_exterior_trabalho||
        !niveis.avancado_exterior_travel||
        !niveis.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!niveis.Loja_idLoja) {

       niveis.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    niveisModel.buscarPorEmail(niveis.email, (erro, resultado) => {

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

        // Cadastra o usuário

        niveisModel.cadastrar(niveis, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar nível."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Nível cadastrado com sucesso!",
                idNivel: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR NÍVEIS
//==========================================

function listar(req, res) {

    niveisModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar níveis."
            });

        }
        // Retorna a lista de níveis em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR NÍVEL POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    niveisModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar nível."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Nível não encontrado."
            });

        }
        // Retorna o nível encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR NÍVEL
//==========================================

function atualizar(req, res) {
    // Obtém o ID do nível a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do nível a partir do corpo da requisição
    const niveis = req.body;

    niveisModel.atualizar(id, niveis, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar nível."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Nível atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR NÍVEL
//==========================================

function excluir(req, res) {
    // Obtém o ID do nível a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    niveisModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir nível."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Nível excluído com sucesso."
        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};