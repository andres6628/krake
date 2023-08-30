calcularTasaInteres = function (ingresoAnual) {
    let tasa = 0;

    if (ingresoAnual < 300000) {
        tasa = ingresoAnual*16/100;
        return tasa;
    } else {
        if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
            tasa = ingresoAnual * 15/100;
            return tasa;
        } else {
            if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
                tasa = ingresoAnual * 14/100;
                return tasa;
            } else {
                if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
                    tasa = ingresoAnual * 13/100;
                    return tasa;
                } else {
                    tasa = ingresoAnual * 12/100;
                    return tasa;
                }
            }
        }
    }
}
calcularCapacidadPAgo = function (edad, ingresos, egresos) {
    let sobrante = ingresos - egresos;
    let capacidad = ingresos * 30 / 100;
    let cuota;
    if (edad > 50 && sobrante == capacidad) {
        return cuota;
    } else {
        if (edad <= 50 && sobrante == capacidad) {
            return cuota;
        }
    }
}
calcularDescuento = function (precio, cantidad) {
    let valorPagar;
    let descuento;
    let porcentajeDescuento;
    if (cantidad < 3) {
        descuento = 0;
    } else {
        if (cantidad >= 3 && cantidad <= 5) {
            descuento = 2;
        } else {
            if (cantidad >= 6 && cantidad <= 11) {
                descuento = 3;
            } else {
                descuento = 4;
            }
        }
    }
    porcentajeDescuento = precio * cantidad;
    valorPagar = (precio * cantidad) - (porcentajeDescuento * descuento / 100);
    return valorPagar;
}
determinarColesterolLDL = function (nivelColesterol) {
    let mensaje;
    if (nivelColesterol < 100) {
        mensaje = "Óptimo (lo mejor para su salud)";
        return mensaje;
    } else {
        if (nivelColesterol >= 100 && nivelColesterol < 130) {
            mensaje = "Casi óptimo";
            return mensaje;
        } else {
            if (nivelColesterol >= 130 && nivelColesterol < 160) {
                mensaje = "Límite superior del rango normal";
                return mensaje;
            } else {
                if (nivelColesterol >= 160 && nivelColesterol < 190) {
                    mensaje = "Alto";
                    return mensaje;
                } else {
                    mensaje = "Muy alto";
                    return mensaje;
                }
            }
        }

    }
}
validarClave = function (clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}
esMayuscula = function (caracter) {
    if (caracter.charCodeArt(0) >= 65 && caracter.charCodeArt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}
esMinuscula = function (caracter) {
    if (caracter.charCodeArt(0) >= 97 && caracter.charCodeArt(0) <= 122) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    if (caracter.charCodeArt(0) >= 48 && caracter.charCodeArt(0) <= 57) {
        return true;
    } else {
        return false;
    }
}
darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}
otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}
dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 && (notaFisica > 90 || notaGeometria > 80) ) {
        if(notaFisica > notaMatematica){
            return true;
        }
    } else {
        return false;
    }
}