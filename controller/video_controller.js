//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const videoModel = require("../model/video_model");

//==========================================
// CADASTRAR VÍDEO
//==========================================

function cadastrar(req, res) {

    const video = req.body;

    // Validação dos campos obrigatórios

    if (
        !video.basico||
        !video.basico_pronuncia ||
        !video.basico_vocabulario ||
        !video.basico_gramatica ||
        !video.basico_exterior_trabalho ||
        !video.basico_exterior_travel ||
        !video.intermediario    ||
        !video.intermediario_pronuncia ||
        !video.intermediario_vocabulario ||
        !video.intermediario_gramatica ||
        !video.intermediario_exterior_trabalho ||
        !video.intermediario_exterior_travel,
        !video.avancado ||
        !video.avancado_pronuncia   ||
        !video.avancado_vocabulario ||
        !video.avancado_gramatica ||
        !video.avancado_exterior_trabalho ||
        !video.avancado_exterior_travel ||
        !video.Produto_idProduto ||
        !video.Niveis_idNiveis
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!video.Loja_idLoja) {

       video.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    videoModel.buscarPorEmail(video.email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Vídeo já cadastrado."
            });

        }

        // Cadastra o vídeo

        videoModel.cadastrar(video, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar vídeo."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Vídeo cadastrado com sucesso!",
                idVideo: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR VÍDEOS
//==========================================

function listar(req, res) {

    videoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar vídeos."
            });

        }
        // Retorna a lista de vídeos em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR VÍDEO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    videoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar vídeo."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Vídeo não encontrado."
            });

        }
        // Retorna o vídeo encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR VÍDEO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do vídeo a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do vídeo a partir do corpo da requisição
    const video = req.body;

    videoModel.atualizar(id, video, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar vídeo."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Vídeo atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR VÍDEO
//==========================================

function excluir(req, res) {
    // Obtém o ID do vídeo a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    videoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir vídeo."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Vídeo excluído com sucesso."
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