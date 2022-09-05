"strict mode";
// Variables
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();
let veces = 18;
// Funciones
// Contrucción de cada boton para los proyectos
buildkey = (i) => {
	let h3 = document.createElement("h3");
	let input = document.createElement("input");
	let textH3 = document.createTextNode(buildH3(i));
	h3.appendChild(textH3);
	input.classList.add("input");
	input.classList.add("input-" + i);
	input.setAttribute("type","button");
	input.setAttribute("value",buildH3(i));
	input.setAttribute("onclick",`javascript:
		if (document.querySelector(".desarrollo__div").hasChildNodes() == false) clickboton${i}();
		else remove();`)
	return [h3, input];
}
// Contrucción del titulo de cada boton
buildH3 = (i) => {
	if (i == 1) return "Regla de 3 simple";
	if (i == 2) return "Función Cuadratica";
	if (i == 3) return "Bucle";
	if (i == 4) return "Calculadora";
	if (i == 5) return "Asistencias por 30 días";
	if (i == 6) return "Intervalo de tiempo";
	if (i == 7) return "Cursos";
	if (i == 8) return "Temperatura y Comida";
	if (i == 9) return "Selección de tu input";
	if (i == 10) return "Conteo rápido y normal";
	if (i == 11) return "Reloj";
	if (i == 12) return "Idioma";
	if (i == 13) return "Texturizador";
	if (i == 14) return "FileRieder, Drag & Drop, Barra de progreso";
	if (i == 15) return "IndexDB + Drag & Drop";
	if (i == 16) return "Lazy Load";
	if (i == 17) return "Bucle Host http";
	if (i == 18) return "Eficiencia lectora";
}
remove = () => {
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
	div.appendChild(key[0]);
	div.appendChild(key[1]);
	fragment.appendChild(div);
}
form.appendChild(fragment);