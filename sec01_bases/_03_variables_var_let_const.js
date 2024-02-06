/**
 * INTRODUCCIÓN A LA CONSOLA
 * 
 * En node y en los navegadores el objeto console nos brinda
 * de métodos que nos permiten mostrar información de diferentes
 * maneras.
 * 
 * Al declarar variables en el contexto del navegador, estas se
 * van agregando como propiedades del objeto global window. Esto
 * solo si no tenemos habilidato el modo estricto y no empleamos
 * let o const para declarar las variables.
 * 
 * Notas:
 * - Los objetos document y windows solo existen en el contexto
 * de los navegadores.
 */
(function () {
    // invocamos alert del objeto windows
    window.alert('Bienvenido al mundo de JS!');

    // se agrega al objeto global
    welcomeMessage = 'Welcome to JS!';
    console.log(welcomeMessage);
})();