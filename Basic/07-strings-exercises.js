/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let string1 = "Hola";
let string2 = "Mundo";
let concatenatedString = string1 + " " + string2
console.log(concatenatedString); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto

let stringLength = concatenatedString.length
console.log(stringLength); // 10

// 3. Muestra el primer y último carácter de un string

let firstCharacter = concatenatedString.charAt(0)
let lastCharacter = concatenatedString.charAt(concatenatedString.length - 1)
console.log(firstCharacter); // "H"
console.log(lastCharacter); // "o"

// 4. Convierte a mayúsculas y minúsculas un string

let upperCaseString = concatenatedString.toUpperCase()
let lowerCaseString = concatenatedString.toLowerCase()

// 5. Crea una cadena de texto en varias líneas

let multiLineString = `Hola
Mundo
Esto es una cadena de texto en varias líneas.`

// 6. Interpola el valor de una variable en un string

let myName = "Jean"
let greeting = `Hola, ${myName}`
console.log(greeting); // "Hola, Jean"

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringWithSpaces = "Hola Mundo"
let stringWithDashes = stringWithSpaces.replace(" ", "-")
console.log(stringWithDashes); // "Hola-Mundo"

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let wordToCheck = "Mundo"
let containsWord = concatenatedString.includes(wordToCheck)
console.log(containsWord); // true

// 9. Comprueba si dos strings son iguales

let stringA = "Hola"
let stringB = "Hola"
let areEqual = stringA === stringB
console.log(areEqual); // true

// 10. Comprueba si dos strings tienen la misma longitud

let stringC = "Hola"
let stringD = "Mundo"
let haveSameLength = stringC.length === stringD.length
console.log(haveSameLength); // false