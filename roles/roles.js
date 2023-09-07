let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0000000000", nombre: "Andres", apellido: "Arias", sueldo: 800.0 }
]

// PARTE 1
mostrarOpcionEmpleado = function () {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();

    //deshabilitar
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('btnGuardar');
}
mostrarOpcionRol = function () {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}
mostrarOpcionResumen = function () {
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
}

//PARTE 2
mostrarEmpleados = function () {
    let cmpTabla = document.getElementById('tablaEmpleados');
    let tabla = "<table> <thead><tr><td>#</td><td>CEDULA</td><td>NOMBRE</td><td>APELLIDO</td><td>SUELDO</td></tr></thead><tbody>";
    empleados.forEach((empleado, i) => {
        let indice = i + 1;
        let fila = "<tr><td>" + indice + "</td><td>" + empleado.cedula + "</td><td>" + empleado.nombre + "</td><td>" + empleado.apellido + "</td><td>" + empleado.sueldo + "</td></tr>";
        tabla += fila;
    });
    tabla += "</tbody></table>";
    cmpTabla.innerHTML = tabla;

}

//PARTE 3
let esNuevo = false;
ejecutarNuevo = function () {
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('txtCedula');
    habilitarComponente('btnGuardar');

    
    esNuevo = true;
}
buscarEmpleado = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula) {
            return empleados[i];
        }

    }
    return null;
}
agregarEmpleado = function (empleado) {
    let empleadoBuscado = buscarEmpleado(empleado.cedula);
    if (empleadoBuscado == null) {
        empleados.push(empleado);
        return true;
    }
    else {
        return false;
    }
}
guardar = function () {
    let cedula = document.getElementById('txtCedula').value;
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let sueldo = document.getElementById('txtSueldo').value;

    let cedulaError = validarCedula(cedula);
    let nombreError = validarNombre(nombre);
    let apellidoError = validarNombre(apellido);
    let sueldoError = validarSueldo(sueldo);


    mostrarTexto('lblErrorCedula', cedulaError);
    mostrarTexto('lblErrorNombre', nombreError);
    mostrarTexto('lblErrorApellido', apellidoError);
    mostrarTexto('lblErrorSueldo', sueldoError);

    if (cedulaError == '' && nombreError == '' && apellidoError == '' && sueldoError == '' && esNuevo == true) {
        let empleado = {};
        empleado.cedula = cedula;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sueldo = sueldo;
        let validarEmpleado = agregarEmpleado(empleado);
        if (validarEmpleado) {
            alert('EMPLEADO GUARDADO CORRECTAMENTE');
            mostrarEmpleados();
        }else{
            alert('YA EXISTE UN EMPLEADO CON LA CEDULA ' + empleado.cedula);
        }
    }


}
validarCedula = function (cedula) {
    let errores = '';
    if (cedula == '') {
        errores += 'Campo obligatorio. ';
    }
    if (cedula.length != 10) {
        errores += 'Cédula debe tener 10 dígitos. ';
    }

    return errores;
}
validarNombre = function (nombre) {
    let errores = '';
    if (nombre == '') {
        errores += 'Campo obligatorio. ';
    }
    if (nombre.length < 3) {
        errores += 'Nombre debe tener al menos 3 caracteres. ';
    }
    for (let i = 0; i < nombre.length; i++) {
        if (!esMayuscula(nombre.charAt(i))) {
            errores += 'Los caracteres deben ser mayúsculas';
            break;
        }

    }
    return errores;
}
validarSueldo = function (sueldo) {
    let errores = '';
    if (sueldo == '') {
        errores += 'Campo obligatorio. ';
    }
    sueldo = parseFloat(sueldo);
    if (isNaN(sueldo)) {
        errores += 'Ingrese un valor válido';
    }
    if (sueldo < 400 || sueldo >= 5000) {
        errores += 'Sueldo debe ser entre 400 y 5000';
    }
    return errores;
}

