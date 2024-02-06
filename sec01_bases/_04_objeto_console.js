/**
 * OBJETO CONSOLE
 * 
 * Podemos emplear métodos del objeto console para mostrar información
 * con ciertos formatos.
 */
(function () {
    'use strict';

    // using console
    console.log('console.log');
    console.warn('console.warn');
    console.error('console.error');
    console.table('console.table');

    // console
    console.log();

    // some variables
    let a = 10, b = 20, c = 30, d = 'Hello';
    console.log('%c Mis variables:', 'color:blue; font-weight: bold;');
    console.log('a:', a);
    console.log('b:', b);
    console.log('c:', c);
    console.log({ a });
    console.log({ b });
    console.log({ c });

    // constola table
    console.table({ a, b, c, d })

    // constantes
    c = 'Hello';
    d = 'World';
    const saludo = `${c} ${d}`;
    console.log(saludo);
})();