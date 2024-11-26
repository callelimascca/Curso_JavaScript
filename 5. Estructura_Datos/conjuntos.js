//crear una lista que almacene las cinco vocales y luego los muestre por consola.
// let lista=["a","e","i","o","u"]
// console.log(lista)

// //acceder a la vocal "o"
// console.log(lista[3])

// //accediendo a los elementos con for
// for (let i=0; i<lista.length;i++){
//     console.log(lista[i])
// }
// console.log(lista.length)

// TRABAJO
//Tengo una lista de 7 frutas crear un programa que identifique si en mi lista existe naranja , de existir me mostrara su indice, de no existir me mostrara un mensaje de error.
let frutas = ["manzana", "plátano", "pera", "uva", "naranja", "fresa", "kiwi"];
let encontrado = false;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "naranja") {
        console.log("La naranja está en el índice:", i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Error: 'naranja' no se encuentra en la lista.");
}
//ejercicio
//crear dos funciones que reciban por parametros una lista de numeros una funcion encontrara y devolvera el numero menor de la lista y la otra el numero mayor de la lista. NO USAR "MAX", NI "MIN".
function encontrarNumeroMenor(lista) {
    let menor = lista[0]; 
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; 
        }
    }
    return menor;
}

// Función para encontrar el número mayor
function encontrarNumeroMayor(lista) {
    let mayor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]; 
        }
    }
    return mayor;
}

let numeros = [5, 3, 8, 1, 4, 7];

let numeroMenor = encontrarNumeroMenor(numeros);
let numeroMayor = encontrarNumeroMayor(numeros);

console.log(`El número menor es: ${numeroMenor}`); 
console.log(`El número mayor es: ${numeroMayor}`); 

// Crear una funcion que me permita contar la cnatidad de vocales "A" que tengo en una lista.
function contarVocalesA(lista) {
    let contador = 0; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === "a") {
            contador++; 
        }
    }
    return contador;
}

// Ejemplo de uso
let letras = ["a", "b", "c", "a", "d", "e", "a", "f"];
let cantidadVocalesA = contarVocalesA(letras);

console.log(`La cantidad de vocales "a" es: ${cantidadVocalesA}`); 