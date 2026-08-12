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
        video.categoria === "aula_com_explicacao" &&
        !video.linkPortugues
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "A categoria Aula com explicação exige um vídeo em português."

        });

    }


    videoModel.cadastrar(
        video,
        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
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
    
  


//==========================================
// LISTAR VÍDEOS
//==========================================

function listar(req, res) {

    videoModel.listar((erro, resultado) => {
          
         if (erro) {

    console.log(erro);

    return res.status(500).json({
        sucesso: false,
        mensagem: erro.sqlMessage
    });

} 

        res.json(resultado);

    });

}



//==========================================
// LISTAR VÍDEOS
//==========================================

function listarPorProduto(req, res) {

    const idProduto = req.params.id;

    videoModel.listarPorProduto(idProduto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({

                sucesso:false,

                mensagem:"Erro ao listar vídeos."

            });

        }

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

    if (
    !video.Produto_idProduto ||
    !video.Niveis_idNiveis ||
    !video.categoria ||
    !video.linkIngles
) {

    return res.status(400).json({
        sucesso: false,
        mensagem: "Preencha todos os campos."
    });

}

if (
    video.categoria === "aula_com_explicacao" &&
    !video.linkPortugues
) {

    return res.status(400).json({

        sucesso: false,

        mensagem:
            "A categoria Aula com explicação exige um vídeo em português."

    });okay

}

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

    videoModel.buscarPorId(id, (erro, resultado) => {

    if (erro) {

        return res.status(500).json({

            sucesso:false,

            mensagem:"Erro ao buscar vídeo."

        });

    }

    if(resultado.length == 0){

        return res.status(404).json({

            sucesso:false,

            mensagem:"Vídeo não encontrado."

        });

    }

    videoModel.excluir(id, (erro)=>{

        if(erro){

            return res.status(500).json({

                sucesso:false,

                mensagem:"Erro ao excluir vídeo."

            });

        }

        res.json({

            sucesso:true,

            mensagem:"Vídeo excluído com sucesso."

        });

    });

});

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    listarPorProduto,
    buscarPorId,
    atualizar,
    excluir
    };     



