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