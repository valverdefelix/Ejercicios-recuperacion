document.addEventListener('DOMContentLoaded', (event) => {
    let formulario = document.querySelector("#formulario");
    let ladoAInput = document.querySelector("#ladoA");
    let ladoBInput = document.querySelector("#ladoB");
    let ladoCInput = document.querySelector("#ladoC");
    let tabla = document.querySelector("#tabla");
    let msgerror = document.querySelector("#error");

    let calcularArea = (a, b, c) => {
        let s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    let imprimir = (a, b, c, area) => {
        let msg = "<table class='table table-bordered'><thead><th>Lado A</th><th>Lado B</th><th>Lado C</th><th>Área</th></thead>";
        msg += "<tbody>";
        msg += "<tr>";
        msg += `<td>${a}</td>`;
        msg += `<td>${b}</td>`;
        msg += `<td>${c}</td>`;
        msg += `<td>${area.toFixed(2)}</td>`;
        msg += "</tr>";
        msg += "</tbody></table>";
        tabla.innerHTML = msg;
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        let centinela = false;
        let error = "";
        let ladoA = parseFloat(ladoAInput.value);
        let ladoB = parseFloat(ladoBInput.value);
        let ladoC = parseFloat(ladoCInput.value);

        if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
            error = "Ingrese valores válidos para los lados del triángulo.";
            centinela = true;
        } else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
            error = "Los lados ingresados no forman un triángulo válido.";
            centinela = true;
        }

        if (centinela) {
            msgerror.innerHTML = error;
        } else {
            let area = calcularArea(ladoA, ladoB, ladoC);
            imprimir(ladoA, ladoB, ladoC, area);
            limpiar();
        }
    });

    let limpiar = () => {
        ladoAInput.value = "";
        ladoBInput.value = "";
        ladoCInput.value = "";
        ladoAInput.focus();
        msgerror.innerHTML = "";
    }
});
