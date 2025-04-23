/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "elefante", "jirafa", "león"]
console.log(animales) // ["perro", "gato", "elefante", "jirafa", "león"]

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("tortuga") // Añade al principio
animales.push("delfín") // Añade al final
console.log(animales) // ["tortuga", "perro", "gato", "elefante", "jirafa", "león", "delfín"]

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1) // Elimina el que se encuentra en tercera posición (índice 2)
console.log(animales) // ["tortuga", "perro", "elefante", "jirafa", "león", "delfín"]

// 4. Crea un set que almacene cinco libros

let libros = new Set(["Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada", "El otoño del patriarca", "El general en su laberinto"])
console.log(libros) // Set(5) { "Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada", "El otoño del patriarca", "El general en su laberinto" }

// 5. Añade dos más. Uno de ellos repetido

libros.add("Cien años de soledad") // Añade un libro repetido
libros.add("El amor en los tiempos antigüos") // Añade otro libro
console.log(libros) // Set(6) { "Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada", "El otoño del patriarca", "El general en su laberinto", "El amor en los tiempos antigüos" }

// 6. Elimina uno concreto a tu elección

libros.delete("El amor en los tiempos del cólera") // Elimina un libro concreto
console.log(libros) // Set(5) { "Cien años de soledad", "Crónica de una muerte anunciada", "El otoño del patriarca", "El general en su laberinto", "El amor en los tiempos antigüos" }

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.has(5) ? `El mes número 5 es ${meses.get(5)}` : "El mes número 5 no existe") // El mes número 5 es Mayo

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", ["Junio", "Julio", "Agosto"])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let set = new Set(array) // Transforma el array a un Set
let map = new Map() // Crea un nuevo Map
map.set("meses", set) // Almacena el Set en el Map