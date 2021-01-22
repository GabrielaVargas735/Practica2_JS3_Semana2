/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/
const title = document.querySelector('h3');
console.log(title.innerText);
/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
const first = document.querySelectorAll('li').firstChild;
console.log(first);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const email = document.querySelector('form');
console.log(email);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
const table = document.querySelector('tr:nth-child(3) td');
console.log(table);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const table2 = document.querySelector('tr:nth-child(4) td');
console.log(table2);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algún elemento y trae un ejemplo de
  para que lo usarias
*/