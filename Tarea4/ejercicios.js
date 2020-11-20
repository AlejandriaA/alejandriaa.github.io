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

/* //Ejercicio 4.1

let salario = 1500;
for (let i = 1; i <= 6; i++) {
    console.log(`Salario año ${i}: ${salario}`);
    salario += salario*0.1;
}
console.log(`Su salario al cabo de 6 años es : ${salario}`); */

/* //Ejercicio 4.2

let total = 0;
let cantidadHamburguesas = +prompt(`¿Cuántas hamburguesas pedirá?`);
for (let i = 1; i <= cantidadHamburguesas; i++) {
    while (true) {
        tipo = prompt(`¿La hamburguesa #${i} será (S)Sencilla, (D)Doble o (T)Triple?`).toLowerCase();
        if (tipo == 's') {
            total += 20;
            break;
        }
        if (tipo == 'd') {
            total += 25;
            break;
        }
        if (tipo == 't') {
            total += 28;
            break;
        }
    }
}
while (true) {
    formaPago = prompt(`¿Pagará con tarjeta de crédito?`).toLowerCase();
    if (formaPago == 'si') {
        total += total*0.05;
        break;
    }
    if (formaPago == 'no') {
        break;
    }
}
console.log(`El total a pagar es : ${total}`); */

/* //Ejercicio 4.3

let cantidadPositivos = 0;
let cantidadNegativos = 0;
let cantidadCeros = 0;
let cantidadNumeros = +prompt("Ingresa la cantidad de números");
for (let i = 0; i < cantidadNumeros; i++) {
    let numero = +prompt("Ingresa el número");
    if (numero > 0) {
        cantidadPositivos++;
    } else if (numero < 0) {
        cantidadNegativos++;
    }
    else {
        cantidadCeros++;
    }
}
console.log(`La cantidad de números positivos es : ${cantidadPositivos}`);
console.log(`La cantidad de números negativos es : ${cantidadNegativos}`); 
console.log(`La cantidad de ceros es : ${cantidadCeros}`);  */

/* //Ejercicio 4.4

let cantidadVerdes = 0;
let cantidadRojos = 0;
let cantidadBlancos = 0;
let cantidadFocos = +prompt("Cantidad de focos : ");
for (let i = 1; i <= cantidadFocos; i++) {
    while (true) {
        tipo = prompt(`Tipo de foco #${i} (V) Verde (R) Rojo (B) Blanco : `).toLowerCase();
        if (tipo == 'v') {
            cantidadVerdes++;
            break;
        }
        if (tipo == 'r') {
            cantidadRojos++;
            break;
        }
        if (tipo == 'b') {
            cantidadBlancos++;
            break;
        }
    }
}
console.log(`La cantidad de focos verdes es : ${cantidadVerdes}`);
console.log(`La cantidad de focos rojos es : ${cantidadRojos}`); 
console.log(`La cantidad de focos blancos es : ${cantidadBlancos}`); */

/* //Ejercicio 4.5

let ahorroTotal = 0;
let ahorroDia = 0.03;

for (let i = 1; i <= 365; i++) {
    console.log(`El ahorro del dia ${i} es : ${ahorroDia} pesos`);
    ahorroDia = ahorroDia*3;
    ahorroTotal += ahorroDia;
}
console.log(`El ahorro final es : ${ahorroTotal} pesos`); */

//Ejercicio 4.6 == 4.1

//Ejercicio 4.7 == 4.2

/* //Ejercicio 4.8 

let numeroArticulos = +prompt("Ingrese el número de artículos : ");
let precioTotal = 0;
for (let i = 1; i <= numeroArticulos; i++) {
    let precioArticulo = +prompt(`Ingrese el precio del artículo ${i} : `);
    if (precioArticulo >= 200) {
        precioArticulo -= precioArticulo*0.15;
    } else if (precioArticulo > 100) {
        precioArticulo -= precioArticulo*0.12;
    } else {
        precioArticulo -= precioArticulo*0.10;
    }
    precioTotal += precioArticulo;
}
console.log(`El monto a pagar es : ${precioTotal}`); */

/* //Ejercicio 4.9

let años = +prompt("Ingrese el número de años : ");
for (let i = 1; i <= años; i++) {
    let ahorroAño = 0;
    for (let j = 1; j <= 12; j++) {
        ahorroAño += +prompt(`Ingrese el ahorro del mes #${j} del año #${i} : `);
    }
    console.log(`El ahorro total del año #${i} : ${ahorroAño+=ahorroAño*0.1}`);
} */

/* //Ejercicio 4.10

let edadesEscuela = 0;
let salones = +prompt("Ingrese el número de salones : ");
for (let i = 1; i <= salones; i++) {
    let edadesSalon = 0;
    let estudiantes = +prompt(`Ingrese el número de estudiantes del salón #${i} : `);
    for (let j = 1; j <= estudiantes; j++) {
        edadesSalon += +prompt(`Ingrese la estatura del alumno #${j} del salón #${i} : `);
    }
    let promedioSalon = edadesSalon/estudiantes;
    console.log(`Edad promedio del salón #${i} : ${promedioSalon}`);
    edadesEscuela += promedioSalon;
}
console.log(`Edad promedio de la escuela : ${edadesEscuela/salones}`); */

/* //Ejercicio 4.11

let x = +prompt("Ingrese el valor de x : ");
let n = +prompt("Ingrese el valor de n : ");
let ex = 0;
for (let i = 0; i <= n; i++) {
    fact = 1;
    for (let j = i; j > 0; j--) {
        fact *= j;
    }
    ex += Math.pow(x,i)/fact;
}
console.log(`El resultado es : ${ex}`); */

/* //Ejercicio 4.12

let total = 0;
let billetes = +prompt("Ingrese la cantidad de billetes : ");
for (let i = 1; i <= billetes; i++) {
    billete = +prompt(`Ingrese el valor del billete #${i}: `);
        switch (billete) {
            case 10: case 20: case 50: case 100: case 200:
                total += billete;
                break;
            default:
                i--;
                break;
        }
}
let monedas = +prompt("Ingrese la cantidad de monedas : ");
for (let i = 1; i <= monedas; i++) {
    moneda = +prompt(`Ingrese el valor del moneda #${i}: `);
        switch (moneda) {
            case 5: case 2: case 1: case 0.5: case 0.2: case 0.1:
                total += moneda;
                break;
            default:
                i--;
                break;
        }
}
console.log(`El total de la caja registradora es : S/ ${total}`); */

/* //Ejercicio 4.13

let numeroVentas = +prompt("Ingrese el número de ventas : ");
let total = 0;
let ventasA = 0;
let totalA = 0;
let ventasB = 0;
let totalB = 0;
for (let i = 1; i <= numeroVentas; i++) {
    let monto = +prompt(`Ingrese el monto de la venta #${i} : `);
    if (monto <= 10000) {
        total += monto;
        ventasA++;
        totalA += monto
    } else if (monto < 20000) {
        total += monto;
        totalB += monto
    } else {
        total += monto;
    }
}
console.log(`Las ventas por 10000 o menos fueron ${ventasA} y sumaron un monto de ${totalA}`); 
console.log(`Las ventas por menos de 20000 fueron ${ventasB} y sumaron un monto de ${totalB}`);
console.log(`El monto total de ventas es ${total}`); */

/* //Ejercicio 4.15

let trabajadores = +prompt("Ingrese el número de trabajadores : ");
for (let i = 1; i <= trabajadores; i++) {
    let trabajador = prompt(`Ingrese el nombre del trabajador #${i} : `);
    let sueldo = 0;
    do {
        sueldo = 0;
        let horas = +prompt(`Ingrese el número de horas laboradas : `);
        let pago = +prompt(`Ingrese el pago por hora : `);
        sueldo = horas*pago;
        if (sueldo<=150) {
            sueldo -= sueldo*0.05;
        } else if (sueldo<300) {
            sueldo -= sueldo*0.07;
        }else {
            sueldo -= sueldo*0.09;
        } 
    } while (sueldo<0 || sueldo>=450);
    console.log(`El sueldo semanal de ${trabajador} es ${sueldo}`);
} */

/* //Ejercicio 4.16

let cantidad = +prompt("Ingrese la cantidad de números : ");
for (let i = 1; i <= cantidad; i++) {
    let numero = +prompt("Ingrese el número : ");
    console.log(`El cubo de ${numero} es ${numero*numero*numero}`);
} */

/* //Ejercicio 4.17 

let n = +prompt("Ingrese un número : ");
for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}  */

/* //Ejercicio 4.18

monto = 1500;
for (let i = 0; i < 59; i++) {
    monto += monto*0.15;
}
console.log(`La inversión de 1500 en 1961 vale ahora ${monto}`); */

/* //Ejercicio 4.19

let total = 0;
let total1 = 0;
let total2 = 0;
let total3 = 0;
let autos = +prompt("Ingrese la cantidad de automóviles : ");
for (let i = 1; i <= autos; i++) {
    let valor = +prompt(`Ingrese el valor del automóvil #${i}: `);
    let clave = +prompt(`Ingrese la clave del automóvil #${i}: `);
    let impuesto = 0;
        switch (clave) {
            case 1:
                impuesto = valor*0.10;
                total1 += impuesto;
                total += impuesto;
                console.log(`Impuesto del auto #${i} : ${impuesto}`);
                break;
            case 2:
                impuesto = valor*0.07;
                total2 += impuesto;
                total += impuesto;
                console.log(`Impuesto del auto #${i} : ${impuesto}`);
                break;
            case 3:
                impuesto = valor*0.05;
                total3 += impuesto;
                total += impuesto;
                console.log(`Impuesto del auto #${i} : ${impuesto}`);
                break;
            default:
                i--;
        }
}
console.log(`Total de impuestos de vehículos clave 1 : ${total1}`);
console.log(`Total de impuestos de vehículos clave 2 : ${total2}`);
console.log(`Total de impuestos de vehículos clave 3 : ${total3}`);
console.log(`Total de impuestos de vehículos : ${total}`); */

/* //Ejercicio 4.20

let x = +prompt("Ingrese el valor de x : ");
let n = +prompt("Ingrese el valor de n : ");
let sen = x;
let sig = '-';
for (let i = 3; i <= n; i+=2) {
    fact = 1;
    for (let j = i; j > 0; j--) {
        fact *= j;
    }
    if (sig == '-') {
        sen -= (Math.pow(x,i)/fact);
        sig = '+';
    } else {
        sen += (Math.pow(x,i)/fact);
        sig = '-';
    }
}
console.log(`El seno de ${x} es : ${sen}`); */

/* //Ejercicio 4.21

let total = 0;
let cantidad = +prompt("Ingrese la cantidad de billetes y monedas: ");
for (let i = 1; i <= cantidad; i++) {
    monto = +prompt(`Ingrese el valor del billete o moneda #${i}: `);
        switch (monto) {
            case 10: case 20: case 50: case 1: case 5:
                total += monto;
                break;
            default:
                i--;
                break;
        }
}
console.log(`La cantidad de dinero en el monedero es ${total}`); */