//==========================================
// IMPORTA O MODEL
//==========================================

const lojistaModel =
    require("../model/lojista.model");


//==========================================
// CADASTRAR LOJISTA
//==========================================

function cadastrar(req, res) {

    const lojista = req.body;


    //======================================
    // VALIDAR CAMPOS
    //======================================

    if (
        !lojista.nome ||
        !lojista.cpf ||
        !lojista.email ||
        !lojista.senha ||
        !lojista.telefone
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    //======================================
    // VERIFICAR CPF
    //======================================

    lojistaModel.buscarPorCpf(

        lojista.cpf,

        (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao verificar CPF."

                });

            }


            if (resultado.length > 0) {

                return res.status(409).json({

                    sucesso: false,

                    mensagem:
                        "CPF já cadastrado."

                });

            }


            //================================
            // VERIFICAR CNPJ
            //================================

            if (lojista.cnpj) {

                lojistaModel.buscarPorCnpj(

                    lojista.cnpj,

                    (erro, resultado) => {

                        if (erro) {

                            console.error(erro);

                            return res.status(500).json({

                                sucesso: false,

                                mensagem:
                                    "Erro ao verificar CNPJ."

                            });

                        }


                        if (resultado.length > 0) {

                            return res.status(409).json({

                                sucesso: false,

                                mensagem:
                                    "CNPJ já cadastrado."

                            });

                        }


                        verificarEmail();

                    }

                );

            }

            else {

                verificarEmail();

            }


            //================================
            // VERIFICAR EMAIL
            //================================

            function verificarEmail() {

                lojistaModel.buscarPorEmail(

                    lojista.email,

                    (erro, resultado) => {

                        if (erro) {

                            console.error(erro);

                            return res.status(500).json({

                                sucesso: false,

                                mensagem:
                                    "Erro ao verificar e-mail."

                            });

                        }


                        if (resultado.length > 0) {

                            return res.status(409).json({

                                sucesso: false,

                                mensagem:
                                    "E-mail já cadastrado."

                            });

                        }


                        //========================
                        // CADASTRAR
                        //========================

                        lojistaModel.cadastrar(

                            lojista,

                            (erro, resultado) => {

                                if (erro) {

                                    console.error(erro);

                                    return res.status(500).json({

                                        sucesso: false,

                                        mensagem:
                                            "Erro ao cadastrar lojista."

                                    });

                                }


                                return res.status(201).json({

                                    sucesso: true,

                                    mensagem:
                                        "Lojista cadastrado com sucesso!",

                                    idLojista:
                                        resultado.insertId

                                });

                            }

                        );

                    }

                );

            }

        }

    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar

};