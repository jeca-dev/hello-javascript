/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3; // Suma
let resta = 10 - 4; // Resta
let multiplicacion = 6 * 7; // Multiplicación
let division = 20 / 4; // División
let modulo = 10 % 3; // Módulo

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let sumaAsignacion = 5; // Inicializa la variable
sumaAsignacion += 3; // Suma

let restaAsignacion = 10; // Inicializa la variable
restaAsignacion -= 4; // Resta

let multiplicacionAsignacion = 6; // Inicializa la variable
multiplicacionAsignacion *= 7; // Multiplicación

let divisionAsignacion = 20; // Inicializa la variable
divisionAsignacion /= 4; // División

let moduloAsignacion = 10; // Inicializa la variable
moduloAsignacion %= 3; // Módulo

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3); // Mayor que
console.log(10 < 20); // Menor que
console.log(15 >= 10); // Mayor o igual que
console.log(8 <= 8); // Menor o igual que
console.log(5 === 5); // Igual que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3); // Menor que
console.log(10 > 20); // Mayor que
console.log(15 <= 10); // Menor o igual que
console.log(8 >= 8); // Mayor o igual que
console.log(5 !== 5); // Diferente de

// 5. Utiliza el operador lógico and

let andCondition = (5 > 3) && (10 < 20); // Ambas condiciones son verdaderas
console.log(andCondition); // true

// 6. Utiliza el operador lógico or

let orCondition = (5 < 3) || (10 > 20); // Al menos una condición es verdadera
console.log(orCondition); // false

// 7. Combina ambos operadores lógicos

let combinedCondition = (5 > 3 && 10 < 20) || (15 > 10 && 8 < 5); // Al menos una condición es verdadera
console.log(combinedCondition); // true

// 8. Añade alguna negación

let negationCondition = !(5 < 3); // Negación de una condición
console.log(negationCondition); // true

// 9. Utiliza el operador ternario

let ternaryCondition = (5 > 3) ? "Es verdadero" : "Es falso"; // Operador ternario
console.log(ternaryCondition); // "Es verdadero"

// 10. Combina operadores aritméticos, de comparáción y lógicas

let complexCondition = ((5 + 3) > 7) && (10 < (20 / 4)); // Combinación de operadores
console.log(complexCondition); // true