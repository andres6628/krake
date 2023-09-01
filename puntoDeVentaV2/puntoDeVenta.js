calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    // variables para almacenar los mensajes de las funciones validadoras
    let msjProducto;
    let msjCantidad;
    let msjPrecio;
    //1. Recuperar el nombre del producto como String
    nombreProducto = document.getElementById('txtProducto').value;
    //2. Recuperar el precio como float
    precioProducto = parseFloat(document.getElementById('txtPrecio').value);
    //3. Recuperar cantidad como int
    cantidad = parseInt(document.getElementById('txtCantidad').value);
    // VALIDAR CAMPOS
    msjProducto = esProductoValido(nombreProducto);
    msjCantidad = esCantidadValida(cantidad);
    msjPrecio = esPrecioValido(precioProducto);
    //4. Recuperar el porcentaje de descuento como int
    // porcentajeDescuento = parseInt(document.getElementById('txtPorcentajeDescuento').value);
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    mostrarTexto('lblError1', msjProducto);
    mostrarTexto('lblError2', msjCantidad);
    mostrarTexto('lblError3', msjPrecio);

    //CONDICION PARA MOSTRAR RESULTADO
    if (msjProducto == '' && msjCantidad == '' && msjPrecio == '') {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        mostrarTexto('lblSubtotal', valorSubtotal);
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
        //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, porcentajeDescuento).toFixed(2);
        //7. Mostrar el resultado en el componente lblDescuento
        mostrarTexto('lblDescuento', valorDescuento);
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        //   El IVA debe calcularse sobre el valor del subtotal menos el descuento
        valorIVA = calcularIva(valorSubtotal - valorDescuento).toFixed(2);
        //9. Mostrar el resultado en el componente lblValorIVA  
        mostrarTexto('lblValorIVA', valorIVA);
        /*
                Caso de prueba: 
                    precioProducto: 5.4  cantidad: 10 descuento: 10
                        --valorSubtotal: 54
                        --descuento:5.4
                        --valorSubtotal - descuento: 48.6
                    IVA esperado: 5.832
                Si el caso de prueba es exitoso, hacer un commit
            */
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal

        valorTotal = calcularTotal(parseFloat(valorSubtotal), parseFloat(valorDescuento), parseFloat(valorIVA));
        console.log(valorTotal);
        //11. Mostrar el resultado en el componente lblTotal
        mostrarTexto('lblTotal', valorTotal);
        /*
       Caso de prueba: 
           precioProducto: 5.4  cantidad: 10 descuento: 10
               --valorSubtotal: 5.4
               --descuento: 5.4
               --IVA: 5.832
           Total esperado: 54.432
       Si el caso de prueba es exitoso, hacer un commit
   */
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        let mensajeResumen = 'Valor a pagar por '+ cantidad + ' ' + nombreProducto +' con el $' + valorDescuento + ' de descuento es: $'+ valorTotal; 
        mostrarTexto('lblResumen', mensajeResumen);
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */
    }

}
limpiar = function () {
    mostrarTextoEnCaja('txtProducto', '');
    mostrarTextoEnCaja('txtCantidad', '0');
    mostrarTextoEnCaja('txtPrecio', '0.0');
    //mostrarTextoEnCaja('txtPorcentajeDescuento', '0.0');

    mostrarTexto('lblSubtotal', '0.0');
    mostrarTexto('lblDescuento', '0.0');
    mostrarTexto('lblValorIVA', '0.0');
    mostrarTexto('lblTotal', '0.0');
    mostrarTexto('lblResumen', '');

    mostrarTexto('lblError1','');
    mostrarTexto('lblError2','');
    mostrarTexto('lblError2','');

    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */