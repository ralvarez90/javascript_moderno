/**
 * MÁS SOBRE OBJETOS LITERALES
 * 
 * Para eliminar propiedaes de un objeto literal empleamos la palabra
 * reservada delete seguido del objeto.propiedad
 */
(() => {
    'use strict';

    const personaje = {
        nombre: 'Tony Stark',
        edad: 44,
        isAlive: false,
        trajes: [
            'Mark 1',
            'Hulgbuster'
        ],
        coordenadas: {
            lat: 123.123,
            lng: 123.123,
        }
    };

    // eliminamos coordenadas
    delete personaje.coordenadas;
    personaje.isAlive = true;
    console.log(personaje);

    // iteramos objeto usando entries
    const entries = Object.entries(personaje)
    console.log('Uso de Objects.entries:');
    for (let i = 0; i < entries.length; i++) {
        const element = entries[i];
        console.log(element[0], element[1]);
    }

    console.log('\nUso de for-in con un objeto literal:');
    for (const key in personaje) {
        console.log(key, personaje[key]);
    }

    // agregamos propiedad
    personaje.isSingle = true;
    console.log(personaje);

    // hacemos que el objeto sea de referencia y estado
    // inmutable
    Object.freeze(personaje)
    personaje.trajes.push('Mark 3');
    console.log(personaje);

    // lista de propiedaes
    const personProperties = Object.getOwnPropertyNames(personaje);
    console.log('Propiedades de persona: ');
    personProperties.forEach(prop => {
        console.log(prop);
    });

    // lista de valores asignados a propieades
    const personValues = Object.values(personaje);
    console.log('Valores de cada propiedad de persona:');
    personValues.forEach(value => {
        console.log(value);
    });
})();