//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí




//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let stringExample = "hola, mundo";
let numberExample = 5;
let booleanExample = false;
let nullExample = null;
let undefinedExample;
let objectExample = {
    name: "matheus",
    age: 26,
};
let arrayExample =[ "hola", "item1", "item2"];

console.log(objectExample.age);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const POSTRES = ["helado", "tarta", "pastel" ]

console.log(POSTRES)


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const CODER = {
    nombre: "matheus",
    surname: "ribeiro",
    age: 26,
}

console.log(CODER)


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof stringExample, nullExample, arrayExample )


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let z = 5;
let y = 5;

console.log(z+y)

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let c = 5;
let d = 3;

let resta = c-d;

console.log(resta)


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let e = 5;
let f = 3;

let multi = e*f;

console.log(multi)


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí


let g = 30;
let h = 3;

let divi = g/h;

console.log(divi)

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let val1 = 1;
let val2 = 2;

let compa = (val1 === val2);

console.log(compa)


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let val3 = 1;
let val4 = 1;

let compar = (val3 === val4);

console.log(compar)


//Ejercicio 11: completa el ejercicio


let num1 = 15
let num2 = 20

let comparacion = typeof num1 == typeof num2 //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)


//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = num3 === num3AsString //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 13: completa el ejercicio

let result2 = num3 !== num3AsString //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let firstName = "Matheus";
let secondName = "Ribeiro"; 
let allName =  `${firstName} ${secondName}`;

// console.log(firstName + " " + secondName )

console.log(allName)


//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 ===  b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 == b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 == b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 > b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 


// <: Menor que
// >: Mayor que
// ==: Igual a
// !=: No igual a
// <=: Menor o igual que
// >=: Mayor o igual que
