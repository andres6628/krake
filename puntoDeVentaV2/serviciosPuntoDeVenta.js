calcularValorDescuento = function(monto,porcentajeDescuento){
    return monto * porcentajeDescuento / 100;
}
calcularIva = function(monto){
    return monto * 12 / 100;
}
calcularSubtotal = function(precio, cantidad){
    return precio * cantidad;
}
calcularTotal =function(subtotal, descuento, iva){
    return subtotal - descuento + iva;
}
calcularDescuentoPorVolumen = function(subtotal,cantidad){
    let descuento = 0;
if (cantidad<3) {
    return descuento;
}else{
    if (cantidad>=3 && cantidad<=5) {
        descuento = subtotal *3/100;
        return descuento
    }else{
        if (cantidad>=6 && cantidad<=11) {
            descuento = subtotal *4/100;
            return descuento;
        }else{
            descuento = subtotal *5/100;
            return descuento;
        }
    }
}
}
esProductoValido = function(producto){
    if (producto=='') {
        
        return 'CAMPO OBLIGATORIO';
    }
    if (producto.length > 10) {
        return 'EL PRODUCTO NO PUEDE TENER MAS DE 10 CARACTERES';
    } else {
        return '';
    }
}
esCantidadValida = function(cantidad){
if (cantidad ==null | isNaN(cantidad)) {
    return 'CAMPO OBLIGATORIO';
}
if (cantidad <=0 || cantidad >100) {
    return 'CANTIDAD DEBE SER ENTRE 0 Y 100';
}else{
    return '';
}
}
esPrecioValido =function(precio){
    if (precio ==null | isNaN(precio)) {
        return 'CAMPO OBLIGATORIO';
    }
    if (precio<0 || precio >50 ) {
        return 'EL PRECIO DEBE SER ENTRE 0 Y 50';
    } else {
        return '';
    }
}
