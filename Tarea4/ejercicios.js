/* //Ejemplo 4.1

let suma = 0;
let i = 0;
while (i<10) {
    suma += +prompt("Ingresa el valor a sumar");
    i++;
}
console.log(`Suma de valores : ${suma}`); */

/* //Ejemplo 4.2

let suma = 0;
let i = 0;
while (i<10) {
    suma += +prompt("Ingresa el valor a sumar");
    i++;
}
console.log(`Suma de valores : ${suma}`); */

/* //Ejemplo 4.3

let suma = 0;
for (let i = 0; i < 10; i++) {
    suma += +prompt("Ingresa el valor a sumar");
}
console.log(`Suma de valores : ${suma}`); */

/* //Ejemplo 4.4 

let suma = 0;
let alumnos = +prompt("Ingresa el número de alumnos");
let i = 0;
let promedio = 0;
while (i < alumnos) {
    suma += +prompt("Ingresa la edad del alumno");
    i++
}
promedio = suma / alumnos;
console.log(`Edad promedio : ${promedio}`); */

/* //Ejemplo 4.5

let suma = 0;
let estatura = +prompt("Ingresa la estatura de la persona");
let i = 0;
while (estatura > 0) {
    suma += estatura;
    estatura = +prompt("Ingresa la estatura de la persona");
    i++
}
if (i==0) {
    console.log(`No hay estaturas`);
} else {
    console.log(`Estatura promedio : ${suma / i}`);
} */

/* //Ejemplo 4.6

let ahorroTotal = 0;
let mes = 1;
while (mes <= 12) {
    let ahorroMes = +prompt("Ingresa la cantidad a ahorrar");
    ahorroTotal += ahorroMes;
    console.log(`El ahorro del mes ${mes} es : ${ahorroMes}`);
    m++;
}
console.log(`El ahorro final es : ${ahorroTotal}`); */

/* //Ejemplo 4.7

let cantidadPositivos = 0;
let cantidadNumeros = +prompt("Ingresa la cantidad de números");
for (let i = 0; i < cantidadNumeros; i++) {
    let numero = +prompt("Ingresa el número");
    if (numero > 0) {
        cantidadPositivos++;
    }
}
console.log(`La cantidad de números positivos es : ${cantidadPositivos}`);
console.log(`La cantidad de números negativos es : ${cantidadNumeros - cantidadPositivos}`); */

/* //Ejemplo 4.8

let n = 0;
while (n <= 100) {
    console.log(n);
    n += 2;
} */

/* //Ejemplo 4.9

let n = +prompt("Ingresa el número de términos");
let a = 0;
let b = 1;
console.log(a);
console.log(b);
let i = 1;
while (i <= (n-2)) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c
    i++;
} */

/* //Ejemplo 4.10

let horasTotal = 0;
let pago = +prompt("Ingresa el pago por hora");
let dia = 1;
while (dia <= 6) {
    let horasDia = +prompt("Ingresa las horas trabajadas");
    horasTotal += horasDia;
    dia++;
}
let sueldo =  horasTotal * pago;
console.log(`Las horas laboradas son : ${horasTotal}`);
console.log(`El sueldo es : ${sueldo}`); */

//Ejemplo 4.11

/* let a = 70
let b = 150
let distancia = b - a;
while (distancia > 0) {
    a++;
    b--;
    distancia = b - a;
}
if (distancia == 0) {
    a = b;
} else {
    a -= 0.5;
}
console.log(`Punto de encuentro : ${a}`); */

/* //Ejemplo 4.12

let numeroVentas = +prompt("Ingresa el número de ventas");
let totalA = 0;
let totalB = 0;
let totalC = 0;
let ventasA = 0;
let ventasB = 0;
let ventasC = 0;
let totalVentas = 0;
let i = 1;
while (i <= numeroVentas) {
    let venta = +prompt("Ingresa el monto de venta");
    if (venta > 1000) {
        ventasA++;
        totalA += venta;
    } else if (venta > 500){
        ventasB++;
        totalB += venta;
    }
    else {
        ventasC++;
        totalC += venta;
    }
    totalVentas += venta;
    i++;
}
console.log(`Hubieron ${ventasA} ventas del tipo A y sumaron un total de ${totalA}`);
console.log(`Hubieron ${ventasB} ventas del tipo A y sumaron un total de ${totalB}`);
console.log(`Hubieron ${ventasC} ventas del tipo A y sumaron un total de ${totalC}`);
console.log(`Todas las ventas sumaron un total de ${totalVentas}`); */

/* //Ejemplo 4.13

let pagoMensual = 10;
let pagoTotal = 0;
for (let i = 1; i <= 20; i++) {
    console.log(`Pago del mes ${i} : ${pagoMensual}`);
    pagoTotal += pagoMensual;
    pagoMensual *= 2;
}
console.log(`Pago total : ${pagoTotal}`); */

/* //Ejemplo 4.14

let trabajadores = +prompt("Ingresa el número de trabajadores");
let total = 0;
for (let i = 1; i <= trabajadores; i++) {
    let pago = +prompt(`Ingresa el pago por hora del trabajador ${i}`);
    let horas = +prompt(`Ingresa las horas laboradas por el trabajador ${i}`);
    let sueldo = pago * horas;
    console.log(`El sueldo del trabajador ${i} es ${sueldo}`);
    total += sueldo;
}
console.log(`El pago total es de ${total}`); */

/* //Ejemplo 4.15

let trabajadores = +prompt("Ingresa el número de trabajadores");
let total = 0;
for (let i = 1; i <= trabajadores; i++) {
    let pago = +prompt(`Ingresa el pago por hora del trabajador ${i}`);
    let dias = +prompt(`Ingresa los dias laborados del trabajador ${i}`);
    let totalHoras = 0;
    for (let j = 1; j <= dias; j++) {
        let horas = +prompt(`Ingresa las horas laboradas por trabajador ${i} el día ${j}`);
        totalHoras += horas;
    }
    let sueldo = pago * totalHoras;
    console.log(`El sueldo semanal del trabajador ${i} es ${sueldo}`);
    total += sueldo;
}
console.log(`El pago total es de ${total}`); */

/* //Ejemplo 4.16

let ventasCadena = 0;
let numeroCiudades = +prompt(`Ingresa el número de ciudades con sucursales`);
for (let i = 1; i <= numeroCiudades; i++) {
    let ventasCiudad = 0;
    let numeroTiendas = +prompt(`Ingresa el número de tiendas en la ciudad ${i}`);
    for (let j = 1; j <= numeroTiendas; j++) {
        let ventasTienda = 0;
        let numeroEmpleados = +prompt(`Ingresa el número de empleados de la tienda ${j}`);
        for (let k = 1; k <= numeroEmpleados; k++) {
            let ventasEmpleado = +prompt(`Ingresa las ventas del empleado ${k} de la tienda ${j}`);
            ventasTienda += ventasEmpleado;
        }
        ventasCiudad += ventasTienda;
        console.log(`El total de ventas de la tienda ${j} es : ${ventasTienda}`);
    }
    ventasCadena += ventasCiudad;
    console.log(`El total de ventas de la ciudad ${i} es : ${ventasCiudad}`);
}
console.log(`El total de ventas de la cadena es : ${ventasCadena}`); */