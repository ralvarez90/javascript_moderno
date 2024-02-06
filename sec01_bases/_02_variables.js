/**
 * VARIABLES 
 * 
 * Son espacios de memoria a los cuales se les asigna un nombre
 * identificador. Podemos declararlas y definirlas empleando la
 * palabra reservada let o const.
 * 
 * Los const crea referencias inmuitables.
 */
(function () {
    'use strict';

    // comentario unilínea
    console.log('Hello World in JS!');

    // variable
    let someNumber = 10;
    console.log(`someNumber: ${someNumber}`);

    // variable de referencia constante
    const someArr = [1, 2, 3]
    someArr.push(4, 5)
    console.log(`someArr: ${someArr}`);
})();