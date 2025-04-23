/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let suma = 0;
// for (let i = 1; i <= 100; i++){
//     suma += i;
//     console.log(suma);
// }

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// for (let i = 1; i <= 50; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];
// for (let i = 0; i < nombres.length; i++){
//     console.log(nombres[i]);
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// const texto = 'Hola, ¿cómo estás?';
// let contadorVocales = 0;
// const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
// for (let i = 0; i < texto.length; i++){
//     if (vocales.includes(texto[i])){
//         contadorVocales++;
//     }
// }
// console.log(`El número de vocales en "${texto}" es: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// const numeros = [1, 2, 3, 4, 5];
// let producto = 1;
// for (let i = 0; i < numeros.length; i++){
//     producto *= numeros[i];
//     console.log(`El producto de los números es: ${producto}`);
// }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// const numero = 5;
// for (let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 8. Usa un bucle para invertir una cadena de texto

// let cadena = 'Hola, mundo!';
// let cadenaInvertida = '';
// for (let i = cadena.length - 1; i >= 0; i--) {
//     cadenaInvertida += cadena[i];
// }
// console.log(`La cadena invertida es: ${cadenaInvertida}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// const fibonacci = [0, 1];
// for (let i = 2; i < 10; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(`Los primeros 10 números de la secuencia de Fibonacci son: ${fibonacci}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numeros = [5, 12, 8, 20, 3, 15];
const mayoresA10 = [];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > 10){
        mayoresA10.push(numeros[i]);
    }
}
console.log(`Los números mayores a 10 son: ${mayoresA10}`);