"use strict";
// Variables
let form = document.querySelector(".container");
let fragment = document.createDocumentFragment();
let veces = 22;
// Funciones
// Contrucción del titulo de cada boton
const buildH3 = (i) => {
  "use strict";
  if (i == 1) return "Conversion";
  if (i == 2) return "Funciones";
  if (i == 3) return "Repetidor";
  if (i == 4) return "Calculadora";
  if (i == 5) return "Admisión";
  if (i == 6) return "Relog";
  if (i == 7) return "IA Text & Background";
  if (i == 8) return "Juego";
  if (i == 9) return "Conteo de palabras";
  if (i == 10) return "Juego 2";
  if (i == 11) return "Actualizaciones";
  if (i == 12) return "Configuración";
  if (i == 13) return "Texturizador";
  if (i == 14) return "Galería dinámica";
  if (i == 15) return "Lector de arhivos";
  if (i == 16) return "Base de Datos";
  if (i == 17) return "Lazy Load";
  if (i == 18) return "Bucle Host http";
  if (i == 19) return "Eficiencia lectora";
  if (i == 20) return "Web Paint";
  if (i == 21) return "Geometría";
  if (i == 22) return "Horario";
};
// Ejecucción
for (let i = 1; i <= veces; i++) {
  let div = document.createElement("DIV");
  div.classList.add("form__div");
  div.textContent = buildH3(i);
  div.addEventListener("click", () => {
    let a = document.createElement("a");
    a.href = `Pages/${i}/index.html`;
    a.click();
  });
  form.appendChild(div);
}
