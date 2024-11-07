// Banco de dados de doenças e sintomas
const doencas_db = {
    "febre": {
        doenca: "Infecção viral",
        tratamento: ["Paracetamol", "Descanso"],
        especialista: "Clínico Geral"
    },
    "tosse": {
        doenca: "Resfriado Comum",
        tratamento: ["Xarope para tosse", "Hidratação"],
        especialista: "Clínico Geral"
    },
    "dor de cabeça": {
        doenca: "Enxaqueca",
        tratamento: ["Ibuprofeno", "Descanso"],
        especialista: "Neurologista"
    }
};

function buscarDiagnostico() {
    // Pega o valor do textarea e divide em sintomas
    const sintomasInput = document.getElementById("sintomasInput").value.toLowerCase();
    const sintomas = sintomasInput.split(",").map(s => s.trim());

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";  // Limpa os resultados anteriores

    let encontrou = false;

    sintomas.forEach(sintoma => {
        if (doencas_db[sintoma]) {
            const info = doencas_db[sintoma];
            const resultadoHTML = `
                <div class="resultado">
                    <h3>Possível Doença: ${info.doenca}</h3>
                    <p><strong>Tratamento:</strong> ${info.tratamento.join(", ")}</p>
                    <p><strong>Especialista:</strong> ${info.especialista}</p>
                </div>
            `;
            resultadosDiv.innerHTML += resultadoHTML;
            encontrou = true;
        }
    });

    if (!encontrou) {
        resultadosDiv.innerHTML = "<p>Nenhuma doença encontrada para os sintomas informados.</p>";
    }
}
