/**
 * PROMPT, CONFIRM Y ALERT
 * 
 * Son métodos de objeto global window del navegador. Permite
 * leer datos, hacer confirmaciones o lanzar alertas.
 * 
 * prompt
 * Muestra mensaje y retorna un string
 * 
 * alert
 * Muestra mensaje de alerta
 * 
 * confirm
 * Muestra mensaje y retorna un booleano.
 * 
 * Notas:
 * - Existe tanto en el navegador como en node objetos globales, donde
 * en node global es el equivalente al objeto window en el navegador.
 */
(() => {
    'use strict';

    // promt para mostra mensaje
    let nombre = window.prompt('Ingresar nombre: ');
    window.alert(`Bienvenido ${nombre.toLowerCase()}`);
    console.log('Nombre: ' + nombre);

    // confiración
    let result = window.confirm('¿Mostrar su nombre?')
    if (result) {
        // obtenemos referencia de elemento del document
        const parrafo = document.getElementById('p-mensaje')
        parrafo.innerText = `Bienvenido ${nombre}`;
    } else {
        alert('Acceso Inválido!');
    }
})();