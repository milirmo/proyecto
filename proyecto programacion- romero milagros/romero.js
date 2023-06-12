function cargardatos() {
    //cargar valores
    let nombre= document.getElementById("nombre").value;
    let curso= document.getElementById("curso").value;
    let fecha= document.getElementById("fecha").value;

    // crear elementos
    let name = document.createElement('p'); //creas elemento que queremos.
    let elementopadre = document.querySelector('.padre'); //seleccionas el padre (con class).
    elementopadre.appendChild(name); //agregas nodo.
    let parrafonombre = document.createTextNode('nombre y apellido: '+nombre); //creas texto que quieras que aparezca en el navegador.
    name.appendChild(parrafonombre); //pegas el texto creado.

    let curse = document.createElement('p');
    elementopadre.appendChild(curse);
    let parrafocurso = document.createTextNode('curso: '+curso);
    curse.appendChild(parrafocurso);

    let date = document.createElement('p');
    elementopadre.appendChild(date);
    let parrafofecha = document.createTextNode('fecha: '+fecha);
    date.appendChild(parrafofecha);
}
function cargarnotas() {
    //cargar materia y notas
    let materia= document.getElementById("materia").value;
    let nota1= document.getElementById("nota1").value;
    let nota2= document.getElementById("nota2").value;
    let promedio=parseFloat(nota1+nota2/2);

    //crear filas del boletin
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement("td");

    td1.innerHTML = materia;
    td2.innerHTML = nota1;
    td3.innerHTML = nota2;
    td4.innerHTML = promedio;

    tr.appendChild(td1, td2, td3, td4);
    

}