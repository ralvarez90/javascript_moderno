/**
 * FUNCIONES
 * 
 * Son objetos invocables que permiten generar bloques de código
 * reutilizables. Tenemos las normales que se implementan por medio
 * de la palabra reservada function y las arrow functions.
 * 
 * Todas las funciones retornarn al menos un valor que es el
 * undefined. 
 * 
 * Las funciones tradicionales, en su interior tienen un objeto
 * implícito llamado arguments.
 * 
 * Las funciones flecha o lambda funcitions. Recordar que todas las
 * funciones si no se especifica su retorno retorna un undefined.
 * 
 * Usaremos las arrow functions lo más posible.
 */
(() => {
    'use strict';

    // función normal
    function saludar() {
        console.log('Hello World in Js!');
    }

    // función flecha
    const sayHi = () => {
        console.log('Hi!');
    };

    // función anónima
    const saludar2 = function () {
        console.log('Hello World in Js!');
    }

    // función con argumentos
    function sayHi2(nombre) {
        console.log(arguments);
        console.log('Hi Mr ' + nombre);
    }

    // mostrar info
    const mostrarInfo = (nombre, edad, isMarried) => {
        console.log('Nombre: ', nombre);
        console.log('Edad: ', edad);
        if (isMarried) {
            console.log('Está casado');
        } else {
            console.log('Está soltero');
        }
    }

    // invocamos funciones
    saludar()
    sayHi()
    saludar2();
    sayHi2('Rodrigo');
    mostrarInfo('Rodrigo', 33, true);
})();