console.log("UPLOAD.JS CARREGADO");

const multer = require("multer");
const path = require("path");

const caminhoUploads = path.join(
    __dirname,
    "..",
    "uploads"
);

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, caminhoUploads);

    },

    filename: function (req, file, cb) {

        const extensao =
            path.extname(file.originalname);

        const nomeArquivo =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            extensao;

        cb(null, nomeArquivo);

    }

});

const fileFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image/")) {

        cb(null, true);

    } else {

        cb(
            new Error("Somente imagens são permitidas."),
            false
        );

    }

};

module.exports = multer({

    storage: storage,
    fileFilter: fileFilter

});