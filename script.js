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
let first = document.querySelector('li:first-child');
console.log(first.innerHTML);
let last = document.querySelector('li:last-child');
console.log(last.innerHTML);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const email = document.querySelector('label:nth-of-type(3)');
console.log(email);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
const table = document.querySelectorAll('tr:nth-child(3) td');
console.log(table.length);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const table2 = document.querySelector('tr:nth-child(4) td');
console.log(table2.innerText);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algún elemento y trae un ejemplo de
  para que lo usarias
*/