/**
 * RETORNO DE FUNCIONES
 * 
 * Se emplea la palabra reservada return para especificar el
 * valor de retorno dentro del cuerpo de una función de forma
 * explícita.
 */
(() => {
    'use strict';

    const getFullName = (fname, lname) => {
        return `${fname} ${lname}`;
    }

    const getNext = (number) => {
        return number + 1;
    }

    const getPrevios = number => number - 1;

    const getAleatorio = () => Math.random();

    const myName = getFullName('Rodrigo', 'Álvarez');
    console.log(myName);
    for (let i = 0; i < 10; i++) {
        console.log(getNext(i));
        console.log(getPrevios(i));
        console.log(getAleatorio());
    }
})();