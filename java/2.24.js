function contador() {
    let palabra = document.getElementById('inputPalabra').value.toLowerCase();
    let contadorLetra = {};
    let i = 0;

    while (i < palabra.length) {
        let letra = palabra[i];
        if (contadorLetra[letra]) {
            contadorLetra[letra]++;
        } else {
            contadorLetra[letra] = 1;
        }
        i++;
    }

    let tablaResultados = document.getElementById('tabla');
    let msg = "<table class='table table-bordered'><thead><tr><th>Letra</th><th>Veces</th></tr></thead>";
    msg += "<tbody>";
    for (let letra in contadorLetra) {
        let contador = contadorLetra[letra];
        let contadorTexto = contador === 1 ? 'una' : contador === 2 ? 'dos' : contador === 3 ? 'tres' : contador;
        msg += `<tr><td>${letra}</td><td>${contadorTexto}</td></tr>`;
    }
    msg += "</tbody></table>";
    tablaResultados.innerHTML = msg;
}