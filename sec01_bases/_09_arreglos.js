/**
 * ARREGLOS
 * 
 * Son colecciones de tamaño dinámico que pueden almacenar
 * cualquier tipo de dato. Son objetos.
 * 
 * Regularmente el tipo de datos dentro de un arreglo
 * suele ser el mismo. Los arrays opueden almacenar
 * cualquier primivito u objeto como funciones, objetos
 * literales, etc.
 * 
 * Los arreglos son objetos que tienen propiedades y
 * métodos listos para emplearse. Dentro de sus propiedaes
 * y métodos más comunes son:
 * 
 * push
 *  agrega un elemento al final del arreglo
 * 
 * lenght
 *  propiedade que indica el número de elementos en su
 *  interior.
 * 
 * pop
 *  elimina y retorna el último elemento del arreglo.
 * 
 * forEach
 *  Recibe una función que se invoca por cada elemento del
 *  arreglo. Dicho callback recibe el elemento que se itera,
 *  la posición, y el arreglo sobre el que se está iterando.
 * 
 * unshift
 *  Recibe un numero de argumentos variables y los inserta
 *  al inicio del arreglo.
 * 
 */
(() => {
    'use strict';

    // arreglo de referencia inmutable
    const videoJuegos = [
        'Zelda', 'Good of War', 'Mario Kart 64',
        'Silent Hill', 'Gear of Wars', 'Megaman',
    ];

    // agregamos elementos
    videoJuegos.push('Mario Bros');
    console.log(`Videojuegos: ${videoJuegos}`);

    // creamos otra instancia
    const someArr = new Array(10);
    for (let i = 0; i < someArr.length; i++) {
        someArr[i] = 0;
    }

    // show array
    console.log(someArr);

    const arregloDeCosas = [
        'uno',
        2,
        'Tres',
        true,
        false,
        null,
        123.212,
        () => { console.log('Hello') },
        { nombre: 'Rodrigo', edad: 33 },
    ];

    // mostramos elementos
    arregloDeCosas.forEach(element => {
        if (typeof element === 'function') {
            element();
        } else {
            console.log(`- ${element}, with type: ${typeof element}`);
        }
    });

    // arreglo a llenar
    const firstNumbers = new Array(3);
    firstNumbers.fill(0);
    firstNumbers.forEach((elemento, indice, arr) => {
        console.log({ elemento, indice, arr });
    });

    firstNumbers.push(10);
    firstNumbers.unshift('n1', 'n2');
    while (firstNumbers.length > 0) {
        let eliminado = firstNumbers.pop();
        console.log(`Eliminado: ${eliminado}, restan: `, { firstNumbers });
    }
})();