/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Jean"
if (nombre) {
    console.log("Hola " + nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Jean"
let contrasena = "1234"
if (usuario === "Jean" && contrasena === "1234") {
    console.log("Bienvenido " + usuario)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -5
if (numero > 0) {
    console.log("El número es positivo")
}
else if (numero < 0) {
    console.log("El número es negativo")
}
else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16
if (edad >= 18) {
    console.log("Puede votar")
}
else {
    let edadFaltante = 18 - edad
    console.log("No puede votar, le faltan " + edadFaltante + " años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad2 = 20
let tipoPersona = (edad2 >=18) ? "adulto" : "menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

//    1. Invierno: diciembre, enero, febrero
//    2. Primavera: marzo, abril, mayo
//    3. Verano: junio, julio, agosto
//    4. Otoño: septiembre, octubre, noviembre

let mes = "enero"
if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    console.log("Invierno")
}
else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("Primavera")
}
else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Verano")
}
else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    console.log("Otoño")
}
else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

//    1. Invierno: diciembre (31), enero (31), febrero (28 o 29)
//    2. Primavera: marzo (31), abril (30), mayo (31)
//    3. Verano: junio (30), julio (31), agosto (31)
//    4. Otoño: septiembre (30), octubre (31), noviembre (30)

if (mes === "diciembre") {
    console.log("31 días")
}
else if (mes === "enero") {
    console.log("31 días")
}
else if (mes === "febrero") {
    console.log("28 o 29 días")
}
else if (mes === "marzo") {
    console.log("31 días")
}
else if (mes === "abril") {
    console.log("30 días")
}
else if (mes === "mayo") {
    console.log("31 días")
}
else if (mes === "junio") {
    console.log("30 días")
}
else if (mes === "julio") {
    console.log("31 días")
}
else if (mes === "agosto") {
    console.log("31 días")
}
else if (mes === "septiembre") {
    console.log("30 días")
}
else if (mes === "octubre") {
    console.log("31 días")
}
else if (mes === "noviembre") {
    console.log("30 días")
}
else {
    console.log("Mes no válido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

//    1. Español: "Hola"
//    2. Inglés: "Hello"
//    3. Francés: "Bonjour"
//    4. Italiano: "Ciao"
//    5. Portugués: "Olá"

let idioma = "español"
switch (idioma) {
    case "español":
        console.log("Hola")
        break
    case "inglés":
        console.log("Hello")
        break
    case "francés":
        console.log("Bonjour")
        break
    case "italiano":
        console.log("Ciao")
        break
    case "portugués":
        console.log("Olá")
        break
    default:
        console.log("Idioma no válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno")
        break
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Primavera")
        break
    case "junio":
    case "julio":
    case "agosto":
        console.log("Verano")
        break
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Otoño")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case "diciembre":
        console.log("31 días")
        break
    case "enero":
        console.log("31 días")
        break
    case "febrero":
        console.log("28 o 29 días")
        break
    case "marzo":
        console.log("31 días")
        break
    case "abril":
        console.log("30 días")
        break
    case "mayo":
        console.log("31 días")
        break
    case "junio":
        console.log("30 días")
        break
    case "julio":
        console.log("31 días")
        break
    case "agosto":
        console.log("31 días")
        break
    case "septiembre":
        console.log("30 días")
        break
    case "octubre":
        console.log("31 días")
        break
    case "noviembre":
        console.log("30 días")
        break
    default:
        console.log("Mes no válido")
}