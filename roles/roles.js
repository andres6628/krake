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
    deshabilitarFormulario();

}
mostrarOpcionRol = function () {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
    deshabilitarComponente('btnGuardarRol');
}
mostrarOpcionResumen = function () {
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
    mostrarRoles();
    mostrarTotales();
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
habilitarFormulario = function(){
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('txtCedula');
    habilitarComponente('btnGuardar');
};
deshabilitarFormulario = function(){
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('btnGuardar');
}
ejecutarNuevo = function () {
    habilitarFormulario();

    
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

    if (cedulaError == '' && nombreError == '' && apellidoError == '' && sueldoError == '') {
        let empleado = {};
        empleado.cedula = cedula;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sueldo = sueldo;
        if (esNuevo == true) {
            let validarEmpleado = agregarEmpleado(empleado);
            if (validarEmpleado) {
                alert('EMPLEADO GUARDADO CORRECTAMENTE');
                mostrarEmpleados();
                deshabilitarFormulario();
                limpiar();
            }else{
                alert('YA EXISTE UN EMPLEADO CON LA CEDULA ' + empleado.cedula);
            }
        }else{
            //modificar
            let empleadoEnLista = buscarEmpleado(empleado.cedula);
            empleadoEnLista.cedula = empleado.cedula;
            empleadoEnLista.nombre = empleado.nombre;
            empleadoEnLista.apellido = empleado.apellido;
            empleadoEnLista.sueldo = empleado.sueldo;
            alert('EMPLEADO MODIFICADO EXITOSAMENTE');
            mostrarEmpleados();
            deshabilitarFormulario();
            limpiar();
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
    if (sueldo < 400 || sueldo > 5000) {
        errores += 'Sueldo debe ser entre 400 y 5000';
    }
    return errores;
}

mostrarEmpleadoBuscado = function(){
    let cedula = document.getElementById('txtBusquedaCedula').value;
    let errores = validarCedula(cedula);
    if (errores == '') {
        let empleado = buscarEmpleado(cedula);
        if (empleado != null) {
            let cmpCedula = document.getElementById('txtCedula');
            cmpCedula.value = empleado.cedula;
            let cmpNombre = document.getElementById('txtNombre');
            cmpNombre.value = empleado.nombre;
            let cmpApellido = document.getElementById('txtApellido');
            cmpApellido.value = empleado.apellido;
            let cmpSueldo = document.getElementById('txtSueldo');
            cmpSueldo.value = empleado.sueldo;
            habilitarFormulario();
            deshabilitarComponente('txtCedula');
        }

    }
}

limpiar = function(){
    let cmpCedula = document.getElementById('txtCedula');
    cmpCedula.value = '';
    let cmpNombre = document.getElementById('txtNombre');
    cmpNombre.value = '';
    let cmpApellido = document.getElementById('txtApellido');
    cmpApellido.value = '';
    let cmpSueldo = document.getElementById('txtSueldo');
    cmpSueldo.value = '';
    let cmpBusqueda = document.getElementById('txtBusquedaCedula');
    cmpBusqueda.value = '';
    esNuevo = false;
}

//PARTE 5
buscarPorRol = function(){
    let cedula = document.getElementById('txtBusquedaCedulaRol').value;
    let errores = validarCedula(cedula);
    mostrarTexto('lblErrorBusqueda',errores);
    if (errores == '') {
        let empleado = buscarEmpleado(cedula);
        if (empleado != null) {
            mostrarTexto('infoCedula',empleado.cedula);
            mostrarTexto('infoNombre',empleado.nombre + ' ' + empleado.apellido);
            mostrarTexto('infoSueldo',empleado.sueldo);
        }else
        {
            alert('EL EMPLEADO NO EXISTE');
        }

    }
}

calcularAporteEmpleado = function(sueldo){
    let aporte = sueldo * 9.45 / 100;
    return aporte;
}
calcularValorAPagar = function(sueldo,aporte,descuento){
    let sueldoTotal = sueldo - aporte - descuento;
    return sueldoTotal;
}
recuperarTextoDiv = function(idComponente){
    let cmpComponente = document.getElementById(idComponente);
    return cmpComponente.textContent ;
}
recuperarIntDiv = function(idComponente){
    let cmpComponente = document.getElementById(idComponente);
    return  parseInt(cmpComponente.textContent) ;
}
recuperarFloatDiv = function(idComponente){
    let cmpComponente = document.getElementById(idComponente);
    return parseFloat(cmpComponente.textContent) ;
}
let roles = [];
calcularRol = function(){
    let sueldo = recuperarFloatDiv('infoSueldo') ;
    let descuento = recuperarFloat('txtDescuentos');
    let errores = validarDescuento(descuento);
    mostrarTexto('lblErrorDescuentos',errores);
    
    if (errores == '') {
        let aporte =  calcularAporteEmpleado(sueldo);
        mostrarTexto('infoIESS',aporte);
        let pago = calcularValorAPagar(sueldo,aporte,descuento);
        mostrarTexto('infoPago',pago);
        habilitarComponente('btnGuardarRol');
    }
    
}
validarDescuento = function (descuento) {
    let errores = '';
    if (descuento == '') {
        errores += 'Campo obligatorio. ';
    }
    descuento = parseFloat(descuento);
    if (isNaN(descuento)) {
        errores += 'Ingrese un valor válido';
    }
    return errores;
}

//PARTE 6 
buscarRol = function(cedula){
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula == cedula) {
            return roles[i];
        }

    }
    return null;
}
agregarRol = function(rol){
    let rolExistente = buscarRol(rol.cedula);
    if (rolExistente == null) {
        roles.push(rol);
        alert('Rol creado con éxito');
        deshabilitarComponente("btnGuardarRol");
    }else{
        alert('EL ROL YA EXISTE');
    }

}
calcularAporteEmpleador = function(sueldo){
    return sueldo * 11.5 / 100;
}
guardarRol = function(){
    let cedula = recuperarTextoDiv('infoCedula');
    let nombre = recuperarTextoDiv('infoNombre');
    let sueldo = recuperarFloatDiv('infoSueldo');
    let iess = recuperarFloatDiv('infoIESS');
    let vlorAPagar = recuperarFloatDiv('infoPago');

    let aporteE = calcularAporteEmpleador(sueldo);
    let rol ={};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorAPagar = vlorAPagar;
    rol.aporteEmpleado = iess;
    rol.aporteEmpleador = aporteE;
    agregarRol(rol);
}
mostrarRoles = function(){
    let cmpTabla = document.getElementById('tablaResumen');
    let tabla = "<table> <thead><tr><td>#</td><td>CEDULA</td><td>NOMBRE</td><td>VALOR A PAGAR</td><td>APORTE EMPLEADO</td><td>APORTE EMPLEADOR</td></tr></thead><tbody>";
    roles.forEach((rol, i) => {
        let indice = i + 1;
        let fila = "<tr><td>" + indice + "</td><td>" + rol.cedula + "</td><td>" + rol.nombre + "</td><td>" + rol.valorAPagar + "</td><td>" + rol.aporteEmpleado + "</td><td>"+rol.aporteEmpleador+"</td></tr>";
        tabla += fila;
    });
    tabla += "</tbody></table>";
    cmpTabla.innerHTML = tabla;
}
mostrarTotales = function(){
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    roles.forEach(rol => {
        totalEmpleado += rol.aporteEmpleado;
        totalEmpleador += rol.aporteEmpleador;
        totalAPagar += rol.valorAPagar;
    });

    let totalNomina = totalAPagar + totalEmpleado + totalEmpleador;
    mostrarTexto('infoTotalPago',totalAPagar);
    mostrarTexto('infoAporteEmpresa',totalEmpleador);
    mostrarTexto('infoAporteEmpleado',totalEmpleado);
    mostrarTexto('infoNomina',totalNomina);
}
