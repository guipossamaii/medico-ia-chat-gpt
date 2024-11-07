const sintomas_db = {
    "fever": ["flu", "infection", "dengue"],
    "headache": ["migraine", "tension", "sinusitis"],
    "stomach ache": ["gastritis", "ulcer", "intestinal infection"],
    // Outros sintomas e doenças...
};

const doencas_db = {
    "flu": {
        "sintomas": ["fever", "headache", "cough"],
        "tratamento": ["paracetamol", "rest", "hydration"],
        "especialista": "general practitioner"
    },
    "migraine": {
        "sintomas": ["headache", "nausea", "light sensitivity"],
        "tratamento": ["ibuprofen", "paracetamol", "rest in a dark place"],
        "especialista": "neurologist"
    },
    // Outras doenças...
};

function processarSintomas(sintomas, idioma) {
    // Função de processamento de sintomas similar ao exemplo em Python
    let possiveisDoencas = [];

    sintomas.forEach((sintoma) => {
        const sintomaTraduzido = traduzirTexto(sintoma, idioma);
        if (sintomaTraduzido in sintomas_db) {
            possiveisDoencas.push(...sintomas_db[sintomaTraduzido]);
        }
    });

    return possiveisDoencas.map((doenca) => doencas_db[doenca]);
}

module.exports = { processarSintomas };
