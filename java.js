document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-calcular-calor").addEventListener("click", calcularLeyEnfriamiento);
    document.getElementById("btn-calcular-combinaciones").addEventListener("click", calcularSorteoCombinaciones);
});

function calcularLeyEnfriamiento() {
    const t0 = parseFloat(document.getElementById("t0").value);
    const ts = parseFloat(document.getElementById("ts").value);
    const k = parseFloat(document.getElementById("k").value);
    const t = parseFloat(document.getElementById("t").value);
    const contenedorResultados = document.getElementById("resultado-calor");

    if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        mostrarResultado(contenedorResultados, "Error de entrada", "Por favor, complete todos los campos con valores numéricos válidos.", false);
        return;
    }

    const exponente = -k * t;
    const temperaturaFinal = ts + (t0 - ts) * Math.exp(exponente);
    
    const resultadoRedondeado = Math.round(temperaturaFinal);

    const mensajeHtml = `
        La temperatura final calculada tras <strong>${t} horas</strong> es de:
        <div style="font-size: 2rem; font-weight: 700; margin: 10px 0; color: var(--primary); text-align: center;">
            ${resultadoRedondeado}°C
        </div>
        <span style="font-size: 0.9rem; color: var(--text-sub);">(Valor exacto: ${temperaturaFinal.toFixed(4)}°C)</span>
    `;

    mostrarResultado(contenedorResultados, "Cálculo Exitoso", mensajeHtml, true);
}

function calcularSorteoCombinaciones() {
    const n1 = parseInt(document.getElementById("n1").value);
    const r1 = parseInt(document.getElementById("r1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const r2 = parseInt(document.getElementById("r2").value);
    const contenedorResultados = document.getElementById("resultado-combinaciones");

    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        mostrarResultado(contenedorResultados, "Valor Negativo", "Los valores introducidos no pueden ser negativos.", false);
        return;
    }
    if (r1 > n1 || r2 > n2) {
        mostrarResultado(contenedorResultados, "Error Lógico (r > n)", "En alguno de los grupos, la cantidad a seleccionar ('r') supera el total de elementos ('n').", false);
        return;
    }

    if (n1 > 100 || n2 > 100) {
        mostrarResultado(contenedorResultados, "Desbordamiento", "Para garantizar precisión, introduzca valores de 'n' menores o iguales a 100.", false);
        return;
    }

    const combGrupo1 = calcularCombinacion(n1, r1);
    const combGrupo2 = calcularCombinacion(n2, r2);
    
    const totalCombinaciones = combGrupo1 * combGrupo2;

    const formateadoTotal = totalCombinaciones.toLocaleString("es-ES");

    const mensajeHtml = `
        <ul style="list-style: none; padding: 0; margin-bottom: 15px; font-size: 0.95rem;">
            <li><strong>Grupo 1:</strong> C(${n1}, ${r1}) = ${combGrupo1.toLocaleString("es-ES")}</li>
            <li><strong>Grupo 2:</strong> C(${n2}, ${r2}) = ${combGrupo2.toLocaleString("es-ES")}</li>
        </ul>
        <div style="border-top: 1px solid var(--success-border); padding-top: 10px; text-align:center;">
            Total de combinaciones del sorteo:
            <div style="font-size: 2.2rem; font-weight: 700; color: var(--secondary);">
                ${formateadoTotal}
            </div>
        </div>
    `;

    mostrarResultado(contenedorResultados, "Análisis de Probabilidad", mensajeHtml, true);
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularCombinacion(n, r) {
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function mostrarResultado(elemento, titulo, mensajeHtml, esExitoso) {
    const icono = esExitoso ? 'check_circle' : 'error_outline';
    
    elemento.innerHTML = `
        <div class="result-header">
            <span class="material-icons-outlined">${icono}</span>
            <span>${titulo}</span>
        </div>
        <div class="result-body">
            ${mensajeHtml}
        </div>
    `;
    
    elemento.classList.remove("hidden", "success", "error");
    elemento.classList.add(esExitoso ? "success" : "error");
}