function cargardatos() {
    //cargar valores
    let nombre = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;
    let fecha = document.getElementById("fecha").value;

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
    document.getElementById("pfinal").textContent=("promedio final: "+promfinal);
}