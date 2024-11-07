async function buscarDiagnostico() {
    const sintomasInput = document.getElementById("sintomasInput").value;
    const sintomas = sintomasInput.split(", ").map(s => s.trim());

    const response = await fetch("http://localhost:3000/api/sintomas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sintomas })
    });
    
    const resultados = await response.json();
    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "<p>Nenhuma doença encontrada para os sintomas informados.</p>";
    } else {
        resultados.forEach(resultado => {
            const doencaDiv = document.createElement("div");
            doencaDiv.classList.add("resultado");

            const doencaTitulo = document.createElement("h3");
            doencaTitulo.textContent = `Possível Doença: ${resultado.doenca}`;
            doencaDiv.appendChild(doencaTitulo);

            const tratamento = document.createElement("p");
            tratamento.textContent = `Tratamento: ${resultado.tratamento.join(", ")}`;
            doencaDiv.appendChild(tratamento);

            const especialista = document.createElement("p");
            especialista.textContent = `Especialista: ${resultado.especialista}`;
            doencaDiv.appendChild(especialista);

            resultadosDiv.appendChild(doencaDiv);
        });
    }
}
