validarPlacas = function(){
    let placa = document.getElementById('idPlaca').value;
    let msjEror =  validarEstructura(placa);
    let msjValidacion = '';
    let provincia = obtenerProvincia(placa);
    let vehiculo = obtenerTipoVehiculo(placa);
    let picoPlaca = obtenerDiaPicoYPlaca(placa);

    let cmpValidacion = document.getElementById('lblValida');
    let cmpError = document.getElementById('lblErrores');
    let cmpProvincia = document.getElementById('lblProvincia');
    let cmpVehiculo = document.getElementById('lblVehiculo');
    let cmpPicoPlaca = document.getElementById('lblPicoPlaca');

    if (msjEror=='' && provincia != null) {
        msjValidacion = 'ESTRUCTURA VALIDA';
        cmpProvincia.innerText = provincia;
        cmpVehiculo.innerText = vehiculo;
        cmpPicoPlaca.innerText = picoPlaca;
    } else {
        msjValidacion = 'ESTRUCTURA INVALIDA ';
        cmpProvincia.innerText = 'PROVINICA INCORRECTA';
        cmpVehiculo.innerText = vehiculo;
    }
    
    cmpValidacion.innerText = msjValidacion;
    cmpError.innerText = msjEror;

}

limpiarDatos = function() {
    let cmpValidacion = document.getElementById('lblValida');
    let cmpError = document.getElementById('lblErrores');
    let cmpProvincia = document.getElementById('lblProvincia');
    let cmpVehiculo = document.getElementById('lblVehiculo');
    let cmpPicoPlaca = document.getElementById('lblPicoPlaca');
    let placa = document.getElementById('idPlaca');
    
    placa.value = '';
    cmpValidacion.innerText = '';
    cmpError.innerText = '';
    cmpPicoPlaca.innerText = '';
    cmpProvincia.innerText = '';
    cmpPicoPlaca.innerText = '';
    cmpVehiculo.innerText = '';

}