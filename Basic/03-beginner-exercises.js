/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Este es un comentario de una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Jean" // String
let myAge = 22 // Number
let isStudent = true // Boolean
let myHeight = 1.69 // Number (float)
let undefinedValue // Undefined
let nullValue = null // Null
let mySymbol = Symbol("symbol") // Symbol
let myBigInt = BigInt(1234567890123456789012345678901234567890) // BigInt
let myBigInt2 = 1234567890123456789012345678901234567890n // BigInt (sufijo n)

// 4. Imprime por consola el valor de todas las variables
console.log(myName) // String
console.log(myAge) // Number
console.log(isStudent) // Boolean
console.log(myHeight) // Number (float)
console.log(undefinedValue) // Undefined
console.log(nullValue) // Null
console.log(mySymbol) // Symbol
console.log(myBigInt) // BigInt
console.log(myBigInt2) // BigInt (sufijo n)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName) // String
console.log(typeof myAge) // Number
console.log(typeof isStudent) // Boolean
console.log(typeof myHeight) // Number (float)
console.log(typeof undefinedValue) // Undefined
console.log(typeof nullValue) // Null
console.log(typeof mySymbol) // Symbol
console.log(typeof myBigInt) // BigInt
console.log(typeof myBigInt2) // BigInt (sufijo n)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Jean Carlos" // String
myAge = 23 // Number
isStudent = false // Boolean
myHeight = 1.70 // Number (float)
undefinedValue = undefined // Undefined
nullValue = null // Null
mySymbol = Symbol("newSymbol") // Symbol
myBigInt = BigInt(9876543210987654321098765432109876543210) // BigInt
myBigInt2 = 9876543210987654321098765432109876543210n // BigInt (sufijo n)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 123 // Number (antes String)
myAge = "veintitrés" // String (antes Number)
isStudent = 0 // Number (antes Boolean)
myHeight = "uno punto setenta" // String (antes Number)
undefinedValue = 42 // Number (antes Undefined)
nullValue = "nulo" // String (antes Null)
mySymbol = 123 // Number (antes Symbol)
myBigInt = "mil" // String (antes BigInt)
myBigInt2 = true // Boolean (antes BigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myConstantName = "Jean" // String
const myConstantAge = 22 // Number
const isConstantStudent = true // Boolean
const myConstantHeight = 1.69 // Number (float)
const undefinedConstantValue = undefined // Undefined
const nullConstantValue = null // Null
const myConstantSymbol = Symbol("symbol") // Symbol
const myConstantBigInt = BigInt(1234567890123456789012345678901234567890) // BigInt
const myConstantBigInt2 = 1234567890123456789012345678901234567890n // BigInt (sufijo n)

// 9. A continuación, modifica los valores de las constantes

// (esto debería dar error al ejecutarlo)
// myConstantName = "Carlos" // String (antes String)
// myConstantAge = 23 // Number (antes Number)
// isConstantStudent = false // Boolean (antes Boolean)
// myConstantHeight = 1.70 // Number (float) (antes Number (float))
// undefinedConstantValue = undefined // Undefined (antes Undefined)
// nullConstantValue = null // Null (antes Null)
// myConstantSymbol = Symbol("newSymbol") // Symbol (antes Symbol)
// myConstantBigInt = BigInt(9876543210987654321098765432109876543210) // BigInt (antes BigInt)
// myConstantBigInt2 = 9876543210987654321098765432109876543210n // BigInt (sufijo n) (antes BigInt (sufijo n))

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse