//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const imagem_produtoModel = require("../model/imagem_produto_model");

//==========================================
// CADASTRAR IMAGEM DE PRODUTO
//==========================================

function cadastrar(req, res) {

    const imagem_produto = req.body;

    // Validação dos campos obrigatórios
  if (
        !imagem_produto.arquivo ||
        !imagem_produto.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe uma imagem de produto com o mesmo arquivo

   
        // Cadastra a imagem de produto

        imagem_produtoModel.cadastrar(imagem_produto, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar imagem de produto."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Imagem de produto cadastrada com sucesso!",
                idImagemProduto: resultado.insertId

            });

        });

    }

function listarPorProduto(req, res) {

    const idProduto = req.params.id;

    imagem_produtoModel.listarPorProduto(idProduto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// LISTAR IMAGENS DE PRODUTO
//==========================================

function listar(req, res) {

    imagem_produtoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens de produto."
            });

        }
        // Retorna a lista de imagens de produto em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR IMAGEM DE PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    imagem_produtoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar imagem de produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Imagem de produto não encontrada."
            });

        }
        // Retorna a imagem de produto encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR IMAGEM DE PRODUTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da imagem de produto a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da imagem de produto a partir do corpo da requisição
    const imagem_produto = req.body;

if (
    !imagem_produto.arquivo ||
    !imagem_produto.Produto_idProduto
) {

    return res.status(400).json({
        sucesso: false,
        mensagem: "Preencha todos os campos."
    });

}


    imagem_produtoModel.atualizar(id, imagem_produto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar imagem de produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem de produto atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR IMAGEM DE PRODUTO
//==========================================

function excluir(req, res) {
    // Obtém o ID da imagem de produto a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    imagem_produtoModel.buscarPorId(id, (erro, resultado) => {

    if (erro) {

        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar imagem."
        });

    }

    if (resultado.length === 0) {

        return res.status(404).json({
            sucesso: false,
            mensagem: "Imagem não encontrada."
        });

    }

    imagem_produtoModel.excluir(id, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir imagem."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem excluída com sucesso."
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