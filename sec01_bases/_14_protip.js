/**
 * DESTRUCTURACIÓN DE OBJETOS
 * 
 * Podemos extraer valores o elementos a partir de objetos literales
 * de javascript.
 */
(() => {
    'use strict';

    // generamos objeto
    const someObj = {
        nombre: 'Rodrigo',
        edad: 33,
        single: false,
    };

    // crea un objeto literal
    const createPerson = (fname, lname) => ({ fname, lname });

    // imprime los argumentos que se le envian
    function imprimirArgumentos1() {
        console.log(`arguments: `, arguments)
    }

    // rest parameters
    const imprimirArgumentos2 = (...args) => {
        console.log('arguments:', args);
    }

    const getSum = (x, y, ...numbers) => {
        let partialTotal = 0
        numbers.forEach(n => { partialTotal += n })
        return x + y + partialTotal;
    }

    const getArguments = (...args) => {
        return args;
    }

    // obtenemos instancia
    const persona = createPerson('Rodrigo', 'Álvarez');
    console.log(persona);
    console.log();

    // imprimimos arguments
    imprimirArgumentos1(10, true, 'hola', null);
    imprimirArgumentos2(10, true, 'hola', null);
    console.log('1+2+3+4+5 =', getSum(1, 2, 3, 4, 5));
    const argumentos = getArguments(true, false, 'Rodrigo', 'Hello World');
    console.log('argumentos: ', argumentos);

    // destructuracion a partir de arreglo
    const [casado, vivo, nombre, saludo] = argumentos;
    console.log(casado, vivo, nombre, saludo);

    // destructuración a partir de objeto
    const { fname: jwname, lname: jwlname } = createPerson('John', 'Wick');
    console.log(jwname, jwlname);

    // destructuración de argumetnos
    const tony = {
        nombre: 'Tony Stark',
        isAlive: false,
        trajes: ['Mark 1', 'Hulkbuster'],
        edad: 40,
    }

    const imprimirPropiedaesSuperheroe = ({ nombre = '', isAlive = false, edad = 0, trajes = [] }) => {
        console.log('Superheroe info:');
        console.log('nombre', nombre);
        console.log('isAlive', isAlive);
        console.log('edad', edad);
        console.log('trajes', trajes);
    }

    imprimirPropiedaesSuperheroe(tony)
})();