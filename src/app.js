/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Selecciona el primer elemento que coincida con el selector .excusa, lee el contenido HTML y muestra la función excusas aleatoriamente, cada que se recarga la página.
  document.querySelector(".excusa").innerHTML = excusas();
};

function excusas() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "Broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  // La función random genera números aleatorios decimales específicos, en este caso la longitud de cada cadena.
  // Por ejemplo para who = genera numeros aleatorios entre el 0 y 4. Por otro lado la función Math.floor hace
  // un redondeo de un numero entero hacia abajo.
  let sujeto = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let donde = Math.floor(Math.random() * when.length);

  return (
    //retornamos la concatenación de las variables combinadas.
    who[sujeto] + " " + action[accion] + " " + what[que] + " " + when[donde]
  );
}
