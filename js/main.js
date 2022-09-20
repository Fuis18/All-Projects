"strict mode";
// Variables
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();
let veces = 18;
// Funciones
// Contrucción de cada boton para los proyectos
buildkey = (i) => {
	let input = document.createElement("input");
	input.classList.add("input");
	input.classList.add("input-" + i);
	input.setAttribute("type","button");
	input.setAttribute("value",buildH3(i));
	input.addEventListener("click",() => {
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
		} else remove();
	}) // input.setAttribute("onclick",`javascript:if(document.querySelector(".desarrollo__div").hasChildNodes()==false)clickboton${i}();elseremove();`);
	return input;
}
// Contrucción del titulo de cada boton
buildH3 = (i) => {
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
	div.appendChild(key);
	fragment.appendChild(div);
}
// Compilación
form.appendChild(fragment);
