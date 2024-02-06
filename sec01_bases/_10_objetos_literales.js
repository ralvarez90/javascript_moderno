/**
 * OBJETOS LITERALES
 * 
 * Son objetos en forma de pares clave-valor similares a los
 * diccionarios en python.
 * 
 * 
 */
(() => {
    'use strict';

    const personaje = {
        nombre: 'Tony Stark',
        codeName: 'Iron Man',
        isAlive: false,
        coords: {
            lat: 34.04,
            lng: -118.70,
        },
        trajes: ['Mark1', 'Mark5', 'Hulkbuster'],
        edad: 44,
        direccion: {
            zip: '10880, 90265',
            ubicacion: 'Malibú California',
        },
        lastMovie: 'Infinity War',
    };

    console.log(personaje.nombre);
    console.log(personaje['nombre']);
    console.log(personaje.edad);
    console.log(personaje['edad']);
    console.log(personaje.coords.lat);
    console.log(personaje['coords'].lat);
    console.log(personaje['coords']['lat']);
    console.log('Numero de trajes: ', personaje.trajes.length);
    console.log('Último traje: ', personaje['trajes'][personaje.trajes.length - 1]);

    const x = 'isAlive';
    console.log(personaje[x]);
    if (personaje['lastMovie']) {
        console.log('Última película: ', personaje.lastMovie);
    }
})();