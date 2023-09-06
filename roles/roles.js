let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0000000000",nombre:"Andres",apellido:"Arias",sueldo:800.0}
]

// PARTE 1
mostrarOpcionEmpleado = function () {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol'); 
    ocultarComponente('divResumen'); 
    mostrarEmpleados(); 

}
mostrarOpcionRol = function(){
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado'); 
    ocultarComponente('divResumen');
}
mostrarOpcionResumen = function(){
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado'); 
    ocultarComponente('divRol');
}

//PARTE 2
mostrarEmpleados = function(){
    let cmpTabla = document.getElementById('tablaEmpleados');
    let tabla = "<table> <thead><tr><td>#</td><td>CEDULA</td><td>NOMBRE</td><td>APELLIDO</td><td>SUELDO</td></tr></thead><tbody>";
    empleados.forEach((empleado, i)  => {
        let indice = i+1;
        let fila ="<tr><td>"+indice + "</td><td>" +empleado.cedula+ "</td><td>"+empleado.nombre+"</td><td>"+empleado.apellido+"</td><td>"+empleado.sueldo+"</td></tr>";
        tabla += fila;
    });
    tabla +="</tbody></table>";
    cmpTabla.innerHTML = tabla;

}


