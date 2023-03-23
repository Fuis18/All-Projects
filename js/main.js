'use strict';
// Variables
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();
let veces = 22;
// Funciones
// Contrucción de cada boton para los proyectos
const buildkey = (i) => {'use strict';
	let input = document.createElement("input");
	input.classList.add("input");
	input.classList.add("input-" + i);
	input.setAttribute("type","button");
	input.setAttribute("value",buildH3(i));
	input.addEventListener("mousedown",(e) => {
		if (document.querySelector(".desarrollo__div").hasChildNodes() == false) {
			if (i == 1)  clickboton1();
			if (i == 2)  clickboton2();
			if (i == 3)  clickboton3();
			if (i == 4)  clickboton4();
			if (i == 5)  clickboton5();
			if (i == 6)  clickboton6();
			if (i == 7)  clickboton7();
			if (i == 8)  clickboton8();
			if (i == 9)  clickboton9();
			if (i == 10) clickboton10();
			if (i == 11) clickboton11();
			if (i == 12) clickboton12();
			if (i == 13) clickboton13();
			if (i == 14) clickboton14();
			if (i == 15) clickboton15();
			if (i == 16) clickboton16();
			if (i == 17) clickboton17();
			if (i == 18) clickboton18();
			if (i == 19) clickboton19();
			if (i == 20) clickboton20();
			if (i == 21) console.log("clickboton21()");
			if (i == 22) clickboton22();
		} else remove();
	})
// input.setAttribute("onclick",`javascript:
// if(document.querySelector(".desarrollo__div").hasChildNodes()==false)clickboton${i}();elseremove();`);
	return input;
}
// Contrucción del titulo de cada boton
const buildH3 = (i) => {'use strict';
	if (i == 1) return "Regla de 3 simple";
	if (i == 2) return "Función Cuadratica";
	if (i == 3) return "Bucle";
	if (i == 4) return "Calculadora";
	if (i == 5) return "Asistencias por 15 días";
	if (i == 6) return "Intervalo de tiempo";
	if (i == 7) return "Cursos";
	if (i == 8) return "Temperatura y Comida";
	if (i == 9) return "Selección de tu input";
	if (i == 10) return "Conteo rápido y normal";
	if (i == 11) return "Reloj";
	if (i == 12) return "Idioma";
	if (i == 13) return "Texturizador";
	if (i == 14) return "Galería dinámica";
	if (i == 15) return "Lector de arhivos dinámico";
	if (i == 16) return "IndexDB + Drag & Drop";
	if (i == 17) return "Lazy Load";
	if (i == 18) return "Bucle Host http";
	if (i == 19) return "Eficiencia lectora";
	if (i == 20) return "Web Paint";
	if (i == 21) return "Construcción";
	if (i == 22) return "Horario";
}
const remove = () => {'use strict';
	let a = document.createElement("H2");
	let text = document.createTextNode("Desarrollo del proyecto");
	a.appendChild(text);
	let b = document.createElement("DIV");
	b.classList.add("desarrollo__div");
	document.querySelector(".desarrollo").removeChild(document.querySelector(".desarrollo h2"));
	document.querySelector(".desarrollo").removeChild(document.querySelector(".desarrollo__div"));
	document.querySelector(".desarrollo").appendChild(a);
	document.querySelector(".desarrollo").appendChild(b);
}
// Ejecucción
for (let i = 1; i <= veces; i++) {
	let div = document.createElement("DIV");
	div.classList.add("form__div");
	let key = buildkey(i);
	div.appendChild(key);
	fragment.appendChild(div);
}
// Compilación
form.appendChild(fragment);
