let clientes = [{ cedula: '00000', nombre: 'Andres', edad: 25 },
{ cedula: '11111', nombre: 'Carlos', edad: 40 },
{ cedula: '22222', nombre: 'Pedro', edad: 15 }];

guardarCambios = function(){
    let cedula = recuperarTexto('txtCedula');
    let nombre = recuperarTexto('txtNombre');
    let edad = recuperarInt('txtEdad');
    let cliente ={};
    cliente.cedula = cedula;
    cliente.nombre = nombre;
    cliente.edad = edad;
    modificarCliente(cliente)
    mostrarClientes();
}
modificarCliente = function(cliente){
    
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado!=null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}
ejecutarBusqueda = function(){
    let cedula = recuperarTexto('txtCedulaBusqueda');
    let respuesta = buscarCliente(cedula);
    if (respuesta == null) {
        alert('cliente no encontrado');
    }else{
        mostratTextEnCaja('txtCedula',respuesta.cedula);
        mostratTextEnCaja('txtNombre',respuesta.nombre);
        mostratTextEnCaja('txtEdad',respuesta.edad);
    }
}
crearCliente = function(){
    let cedula = recuperarTexto('txtCedula');
    let nombre = recuperarTexto('txtNombre');
    let edad = recuperarInt('txtEdad');
    let cliente = {};
    cliente.cedula = cedula;
    cliente.nombre = nombre;
    cliente.edad = edad;
    agregaCliente(cliente);
}
agregaCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
    }
    else{
        alert('Cliente ya existe');
    }
}
buscarCliente = function (cedula) {
    let cliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        cliente = clientes[i];
        if (cliente.cedula == cedula) {
            clienteEncontrado = cliente;
            break;
        }
    }
    return clienteEncontrado;
}
mostrarClientes = function () {
    let contenidoTabla = "<table> <thead> <tr><td>CEDULA</td><td>NOMBRE</td><td>EDAD</td></tr> </thead>";
    let cliente
    for (let i = 0; i < clientes.length; i++) {
        cliente = clientes[i];
        contenidoTabla += "<tr>"
            + "<td>" + cliente.cedula + "</td>"
            + "<td>" + cliente.nombre + "</td>"
            + "<td>" + cliente.edad + "</td>"
            + "</tr>"

    }
    contenidoTabla += "</table>";
    let cmpTabla = document.getElementById('divTabla');
    cmpTabla.innerHTML = contenidoTabla;
}