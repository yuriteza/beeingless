// ==========================================
// IMPORTA O MODEL
// ==========================================

const videoModel = require("../model/video_model");


// ==========================================
// CADASTRAR VÍDEO
// ==========================================

function cadastrar(req, res) {

    const video = req.body;

    console.log("DADOS RECEBIDOS DO FRONT:", video);


    // ======================================
    // CAMPOS OBRIGATÓRIOS
    // ======================================

    if (
        !video.Produto_idProduto ||
        !video.Niveis_idNiveis ||
        !video.categoria ||
        !video.linkIngles
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    // ======================================
    // VÍDEO EM PORTUGUÊS
    // ======================================

    if (
        video.possuiExplicacaoPortugues &&
        !video.linkPortugues
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o vídeo explicativo em português."

        });

    }


    // ======================================
    // CADASTRA NO BANCO
    // ======================================

    videoModel.cadastrar(
        video,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO CADASTRAR VÍDEO:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        erro.sqlMessage ||
                        "Erro ao cadastrar vídeo."

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Vídeo cadastrado com sucesso!",

                idVideo:
                    resultado.insertId

            });

        }
    );

}

function listar(req, res) {

    videoModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        erro.sqlMessage

                });

            }

            res.json(resultado);

        }
    );

}


// ==========================================
// LISTAR POR PRODUTO
// ==========================================

function listarPorProduto(req, res) {

    const idProduto = req.params.id;

    videoModel.listarPorProduto(
        idProduto,
        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar vídeos."

                });

            }

            res.json(resultado);

        }
    );

}


// ==========================================
// BUSCAR POR ID
// ==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    videoModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar vídeo."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Vídeo não encontrado."

                });

            }


            res.json(resultado[0]);

        }
    );

}


// ==========================================
// ATUALIZAR VÍDEO
// ==========================================

function atualizar(req, res) {

    const id = req.params.id;

    const video = req.body;


    if (
        !video.Produto_idProduto ||
        !video.Niveis_idNiveis ||
        !video.categoria ||
        !video.linkIngles
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    if (
        video.possuiExplicacaoPortugues &&
        !video.linkPortugues
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o vídeo explicativo em português."

        });

    }


    videoModel.atualizar(
        id,
        video,
        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar vídeo."

                });

            }


            res.json({

                sucesso: true,

                mensagem:
                    "Vídeo atualizado com sucesso."

            });

        }
    );

}


// ==========================================
// EXCLUIR VÍDEO
// ==========================================

function excluir(req, res) {

    const id = req.params.id;


    videoModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar vídeo."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Vídeo não encontrado."

                });

            }


            videoModel.excluir(
                id,
                (erro) => {

                    if (erro) {

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                "Erro ao excluir vídeo."

                        });

                    }


                    res.json({

                        sucesso: true,

                        mensagem:
                            "Vídeo excluído com sucesso."

                    });

                }
            );

        }
    );

}


// ==========================================
// EXPORTAÇÃO
// ==========================================

module.exports = {

    cadastrar,
    listar,
    listarPorProduto,
    buscarPorId,
    atualizar,
    excluir

};