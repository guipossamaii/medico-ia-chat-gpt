const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const detectLang = require("i18n-langdetect"); // Biblioteca para detectar o idioma
const db = require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Função para detectar o idioma e responder na língua detectada
function traduzirTexto(texto, idioma) {
    const traducoes = {
        "febre": { "en": "fever", "es": "fiebre" },
        "dor de cabeça": { "en": "headache", "es": "dolor de cabeza" },
        // Outras traduções...
    };
    return traducoes[texto]?.[idioma] || texto;
}

app.post("/api/sintomas", (req, res) => {
    const sintomas = req.body.sintomas;
    const idioma = detectLang(sintomas.join(" "));

    // Processa sintomas e identifica possíveis doenças
    const resultados = db.processarSintomas(sintomas, idioma);
    res.json(resultados);
});

app.listen(port, () => {
    console.log(`Doctor IA rodando em http://localhost:${port}`);
});
