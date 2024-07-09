let formulario = document.querySelector("#formulario");
        let numeroInput = document.querySelector("#numero");
        let tabla = document.querySelector("#tabla");
        let msgerror = document.querySelector("#error");
        let numeros = [];

        let calcularSerie = (limite) => {
            let numero = 3;
            let resultados = [];

            while (numero <= limite) {
                resultados.push(numero);
                numero += 3; 
            }

            return resultados;
        }

        let imprimir = (resultados) => {
            let msg = "<table class='table table-bordered'><thead><th>No</th><th>Número</th></thead>";
            msg += "<tbody>";
            for (let i = 0; i < resultados.length; i++) {
                msg += "<tr>";
                msg += `<td>${i + 1}</td>`;
                msg += `<td>${resultados[i]}</td>`;
                msg += "</tr>";
            }
            msg += "</tbody></table>";
            tabla.innerHTML = msg;
        }

        formulario.addEventListener("submit", (event) => {
            let centinela = false;
            let error = "";
            let numero = parseInt(numeroInput.value);

            if (isNaN(numero) || numero < 3 || numero > 99) {
                error = "Ingrese un número válido entre 3 y 99";
                centinela = true;
            }

            if (centinela) {
                msgerror.innerHTML = error;
            } else {
                let resultados = calcularSerie(numero);
                imprimir(resultados);
                limpiar();
            }

            event.preventDefault();
        });

        let limpiar = () => {
            numeroInput.value = "";
            numeroInput.focus();
            msgerror.innerHTML = "";
        }