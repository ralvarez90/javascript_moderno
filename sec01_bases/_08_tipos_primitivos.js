/**
 * TIPOS DE DATOS
 * 
 * JavaScript tiene 6 tipos de datos primitivos, es decir
 * tiene un tamaño fijo y almacenan directamente su valor en
 * su interior.
 * - booleanos
 * - number
 * - null (son primitivos)
 * - undefined
 * - strings
 * - symbols
 * 
 * JavaScript es debilmente tipado, es decir infiere el tipo
 * de dato al momento de asignado un dato.
 * 
 * Los primitivos no son objetos y son inmutables. Empleamos
 * el operador typeof para obtener el tipo de dato de un 
 * primitivo.
 * 
 * El objetivo principal de la existencia de los symbol es el
 * poder identificar propiedaes de objetos de manera única.
 */
(() => {
    'use strict';

    function runtimeType(obj) {
        return typeof obj;
    }

    function primitivosBooleanos() {
        const verdadero = true;
        const falso = false;
        console.log('true and true  : ' + (verdadero && verdadero));
        console.log('true and false : ' + (verdadero && falso));
        console.log('false and true : ' + (verdadero && verdadero));
        console.log('false and false: ' + (verdadero && falso));
        console.log('true or true   : ' + (falso || verdadero));
        console.log('true or false  : ' + (falso || falso));
        console.log('false or true  : ' + (falso || verdadero));
        console.log('false or false : ' + (falso || falso));
    }

    function primitivosString() {
        let myName = 'Rodrigo Álvarez';
        myName = myName.toUpperCase();
        console.log(`My name is "${myName}", with type ${runtimeType(myName)}`);
    }

    function primitivoNull() {
        console.log('Tipo  de null: ' + typeof null);
    }

    function primitivoSymbol() {
        let symbol1 = Symbol('a');
        let symbol2 = Symbol('a');
        console.log(symbol1);
        console.log(symbol2);
        console.log(symbol1 === symbol2);
    }

    // run application
    primitivosBooleanos();
    primitivosString();
    primitivoNull();
    primitivoSymbol();
})();