const multer = require("multer");
const path = require("path");

// Configuração do armazenamento
const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "uploads/");

    },

    filename: function (req, file, cb) {

        const extensao = path.extname(file.originalname);

        const nomeArquivo = Date.now() + extensao;

        cb(null, nomeArquivo);

    }

});

// Aceita somente imagens
const fileFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image/")) {

        cb(null, true);

    } else {

        cb(new Error("Somente imagens são permitidas."), false);

    }

};

module.exports = multer({

    storage,
    fileFilter

});