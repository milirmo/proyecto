function cargardatos() {
    //cargar valores
    let nombre = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;
    let fecha = document.getElementById("fecha").value;
    if (nombre === "") {
        alert("es necesario ingresar NOMBRE Y APELLIDO.");
    } else {
        if (curso === "") {
            alert("es necesario ingresar CURSO.");
        } else {
            if (fecha === "") {
                alert("es necesario ingresar FECHA DE EMISION.");
            } else {
                // crear elementos
                let name = document.createElement('p'); //creas elemento que queremos.
                let elementopadre = document.querySelector('.padre'); //seleccionas el padre (con class).
                elementopadre.appendChild(name); //agregas nodo.
                let parrafonombre = document.createTextNode('nombre y apellido: ' + nombre); //creas texto que quieras que aparezca en el navegador.
                name.appendChild(parrafonombre); //pegas el texto creado.

                let curse = document.createElement('p');
                elementopadre.appendChild(curse);
                let parrafocurso = document.createTextNode('curso: ' + curso);
                curse.appendChild(parrafocurso);

                let date = document.createElement('p');
                elementopadre.appendChild(date);
                let parrafofecha = document.createTextNode('fecha: ' + fecha);
                date.appendChild(parrafofecha);

                //eliminar formulario al rellenar datos
                let formulario1 = document.getElementById("form1");
                formulario1.remove();

                //habilitar boton 
                let btnnotas = document.getElementById("botonnotas");
                btnnotas.disabled = false;
            }
        }
    }
}

let promfinal = 0;
let sumaprom = 0;
let divisor = 1;
function cargarnotas() {
    //cargar materia y notas
    let materia = document.getElementById("materia").value;
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let prom = 0;

    if (!materia) {
        alert("ingrese MATERIA para continuar.");
    } else {
        if (!nota1) {
            alert("ingrese NOTA 1ER TRIMESTRE para continuar.");
        } else {
            if (!nota2) {
                alert("ingrese NOTA 2DO TRIMESTRE para continuar.");
            } else {
                //crear filas del boletin
                let madre = document.querySelector('.madre');
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                prom = (nota1 + nota2) / 2
                td1.innerHTML = materia;
                td2.innerHTML = nota1;
                td3.innerHTML = nota2;
                td4.innerHTML = prom;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                madre.appendChild(tr);

                sumaprom += prom

                //calculo de promedio final
                promfinal = (sumaprom / divisor);
                divisor++

                //mostrar promedio final
                document.getElementById("pfinal").textContent = ("promedio final: " + promfinal);
            }
        }
    }
}

function imprimir() {
    let formulario2 = document.getElementById("form2");
    formulario2.remove();
    let botonimprimir = document.getElementById("botonimprimir");
    botonimprimir.remove();

    window.print();
}