probarAtributos = function () {
    let persona = {
        nombre: 'asd',
        apellido: 'ddd',
        edad: 25,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log('no esta vivo');
    } else {
        console.log('esta vivo');
    }
}
crearProducto = function () {
    let producto1 = {
        nombre: 'Papas',
        precio: 1.50,
        stock: 20,
    }
    let producto2 = {
        nombre: 'Carne',
        precio: 1.00,
        stock: 21,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log('Stock de' + producto1.nombre + ' es mayor que ' + producto2.nombre);
    } else {
        if (producto1.stock < producto2.stock) {
            console.log('Stock de' + producto1.nombre + ' es menor que ' + producto2.nombre);
        } else {
            console.log('Stock de' + producto1.nombre + ' es igual a ' + producto2.nombre);
        }
    }
}
modificarAtributos = function(){
    let cuenta = {
        numero: "12345",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}
crearCliente = function() {
    let cliente = {
        cedula: "123456",
        nombre: "Andres"
    }
    let cliente1 = {}
    cliente1.nombre = "Pedro";
    cliente1.apellido = "Ortiz";
    cliente1.cedula = "0000000"
}
probarIncrementarSaldo = function(){
    let cta = { numero:"1234", saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probarDeterminarMayor =function(){
    let persona1 = {nombre:"Daniel", edad: 45};
    let persona2 = {nombre:"Maria", edad:25};
    let mayor = determinarMayor(persona1,persona2);
    if (mayor != null) {
        console.log('El mayor es '+mayor.nombre);
    }
}
incrementarSaldo = function(cuenta,monto){
    cuenta.saldo += monto;
}
determinarMayor = function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else{
        if (persona1.edad < persona2.edad) {
            return persona2;
        } else {
            return null;
        }
    }

}