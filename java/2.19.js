let formulario = document.querySelector("#formulario");
let numero1Input = document.querySelector("#numero1");
let numero2Input = document.querySelector("#numero2");
let resultado = document.querySelector("#resultado");
let msgerror = document.querySelector("#error");

let calcularMCD = (a, b) => {
    let steps = [];
    while (b !== 0) {
        let temp = b;
        let remainder = a % b;
        steps.push({ a, b, remainder });
        a = temp;
        b = remainder;
    }
    return { mcd: a, steps };
}

let imprimirResultado = (data) => {
    let { mcd, steps } = data;
    let msg = `<h3>El MCD es: ${mcd}</h3>`;
    msg += "<table class='table table-bordered'><thead><tr><th>A</th><th>B</th><th>Resto</th></tr></thead><tbody>";
    steps.forEach(step => {
        msg += `<tr><td>${step.a}</td><td>${step.b}</td><td>${step.remainder}</td></tr>`;
    });
    msg += "</tbody></table>";
    resultado.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    let numero1 = parseInt(numero1Input.value);
    let numero2 = parseInt(numero2Input.value);

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        error = "Ingrese números válidos y mayores a 0.";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        let data = calcularMCD(numero1, numero2);
        imprimirResultado(data);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    numero1Input.value = "";
    numero2Input.value = "";
    numero1Input.focus();
    msgerror.innerHTML = "";
}
