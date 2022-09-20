"strict mode";
// Proyecto 1
clickboton1 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="flex">
		<div class="f1__container">
			<input type="number" class="f1__input1-left" placeholder="1">
			<input type="number" class="f1__input1-right" placeholder="1">
			<input type="number" class="f1__input1-down" placeholder="1">
		</div>
		<div class="f1__answer"><button>=</button></div>
		<div class="result1">Resultado: </div>
	</div>`;
	let num1 = 1, num2 = 1, num3 = 1;
	document.querySelector(".f1__answer button").addEventListener("click",()=>{
		if (document.querySelector(".f1__input1-left").value != '') num1 = document.querySelector(".f1__input1-left").value;
		if (document.querySelector(".f1__input1-right").value != '') num2 = document.querySelector(".f1__input1-right").value;
		if (document.querySelector(".f1__input1-down").value != '') num3 = document.querySelector(".f1__input1-down").value;
		let res = (num1 * num2) / num3;
		document.querySelector(".result1").textContent = "Resultado:" + res;
	})
}
// Proyecto 2
clickboton2 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="f2">
		<div class="f2__operatetor">
			<h4>Introduce tu operación</h4>
			<div class="flex">
				<div class="f2__firstValue">
					<input type="number" class="f2__firstValue-input" placeholder="1">
				</div>
				<div class="f2__unknown">.X^2.</div>
				<div class="f2__secondValue">
					<input type="number" class="f2__secondValue-input" placeholder="1">
				</div>
				<div class="f2__unknown">.X+</div>
				<div class="f2__thirdValue">
					<input type="number" class="f2__thirdValue-input" placeholder="0">
				</div>
			</div>
			<div class="f2__zeroValue">Definir incógnita:
				<div class="f2__zeroValue-input f2__button-inactive"></div>
			</div>
			<div class="f2__unknownValue f2__none">Incógnita:
				<input type="number" class="f2__unknownValue-input">
			</div>
			<div class="f2__submit">
				<input type="submit" class="f2__submit-input">
			</div>
		</div>
		<div class="f2__history__content">
			<h4>Historial</h4>
			<div class="f2__history"></div>
		</div>
	</div>`;
	document.querySelector(".f2__zeroValue-input").addEventListener("click",()=>{
		if (document.querySelector(".f2__button-inactive")) {
			document.querySelector(".f2__zeroValue-input").classList.replace("f2__button-inactive","f2__button-active");
			document.querySelector(".f2__unknownValue").classList.replace("f2__none","f2__block");
		} else {
			document.querySelector(".f2__zeroValue-input").classList.replace("f2__button-active","f2__button-inactive");
			document.querySelector(".f2__unknownValue").classList.replace("f2__block","f2__none");
		}
	})
	calculated = num => {
		let arr = [];
		// Divisivilidad
		for (let i = 1; i <= num; i++) {
			if (num%i == 0 && i != 1 && i != num) {
				arr.push(i);
			}
		}
		// Reducir
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == 4 || arr[i] == 9 || arr[i] == 16 || arr[i] == 25 || arr[i] == 36) {
				let valor1 = Math.sqrt(arr[i]);
				let valor2 = num / arr[i];
				return [valor1,valor2];
				break;
			}
		}
		num = Math.sqrt(num)
		return num;
	}
	document.querySelector(".f2__submit-input").addEventListener("click",()=>{
		let a = 1, b = 1, c = 0;
		if (document.querySelector(".f2__firstValue-input").value !== '') a = parseInt(document.querySelector(".f2__firstValue-input").value);
		if (document.querySelector(".f2__secondValue-input").value !== '') b = parseInt(document.querySelector(".f2__secondValue-input").value);
		if (document.querySelector(".f2__thirdValue-input").value !== '') c = parseInt(document.querySelector(".f2__thirdValue-input").value);
		if (document.querySelector(".f2__button-inactive")) {
			// ( -b +/- ^/(b * b - 4 * a * c) ) / 2 * a
			let oneValue, twoValue, threeValue, preAnswer;
			oneValue = b * b;
			twoValue = 4 * a * c;
			threeValue = oneValue - twoValue; 
			threeValue = oneValue - twoValue;
			preAnswer = Math.sqrt(threeValue)
			if (isNaN(preAnswer)) {
				if (Math.sign(threeValue) == -1) {
					// Raiz de menos uno o i
					threeValue = threeValue * -1;
					let answer = calculated(threeValue);
					if (typeof answer == "number") {
						oneValue = (- b + answer) / (2 * a);
						twoValue = (- b - answer) / (2 * a);
						let content = document.createElement("p");
						let i = document.querySelectorAll(".f2__history p").length;
						content.textContent = `${i}: ${oneValue}.i, ${twoValue}.i`;
						document.querySelector(".f2__history").appendChild(content);
					} else {
						threeValue = (- b) /(2 * a);
						oneValue = (+ answer[0]) /(2 * a);
						twoValue = (- answer[0]) /(2 * a);
						let content = document.createElement("p");
						let i = document.querySelectorAll(".f2__history p").length;
						content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]}.i ) /${2 * a}`;
						document.querySelector(".f2__history").appendChild(content);
					}
				} else {
					let answer = calculated(threeValue);
					threeValue = (- b) /(2 * a);
					oneValue = (+ answer[0]) /(2 * a);
					twoValue = (- answer[0]) /(2 * a);
					let content = document.createElement("p");
					let i = document.querySelectorAll(".f2__history p").length;
					content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]} ) /${2 * a}`;
					document.querySelector(".f2__history").appendChild(content);
				}
			}
			else {
				oneValue = (- b + preAnswer) / (2 * a);
				twoValue = (- b - preAnswer) / (2 * a);
				let content = document.createElement("p");
				let i = document.querySelectorAll(".f2__history p").length;
				content.textContent = `${i}: ${oneValue}, ${twoValue}`;
				document.querySelector(".f2__history").appendChild(content);
			}
		} else {
			let x = document.querySelector(".f2__unknownValue-input").value;
			let answerOne = a * x * x;
			let answerTwo = x * b;
			let answerZero = answerOne + answerTwo + c;
			alert("Respuesta: " + answerZero);
		}
	})
}
// Proyecto 3
clickboton3 = () => {
	let container = document.querySelector(".desarrollo__div");
	let fragment1 = document.createDocumentFragment();
	container.innerHTML = `
	<div class="f3">
		<div>Cantidad:</div>
		<input type="number" class="f3__amount-input" value="0">
		<spam class="f3__bigAmount-error f3__error-inactive">La cantidad no puede ser mayor a 50000</spam>
		<spam class="f3__smallAmount-error f3__error-inactive">La cantidad debe ser mayor a 0</spam>
		<div>En listado:
			<input type="checkbox" class="f3__listado-input">
		</div>
		<div>Dato estable antes de la iteración:</div>
		<input type="text" class="f3__before-input">
		<div>Con números:
			<div class="f3__numbers-input f3__button-inactive"></div>
		</div>
		<div class="f3__after f3__none">Dato estable luego de la iteración:
		</div>
		<input type="text" class="f3__after-input f3__none">
		<div class="f3__zeros f3__none">Con Cero(s) adelante:
			<input type="checkbox" class="f3__zeros-input">
		</div>
		<input type="submit" class="f3__submit">
	</div>`;
	let numberActive = document.querySelector(".f3__numbers-input");
	validarCantidad = () => {
		if (document.querySelector(".f3__amount-input").value > 50000) {
			document.querySelector(".f3__bigAmount-error").classList.replace("f3__error-inactive","f3__error-active");
		} else if (document.querySelector(".f3__amount-input").value < 0 || document.querySelector(".f3__amount-input").value == "") {
			document.querySelector(".f3__smallAmount-error").classList.replace("f3__error-inactive","f3__error-active");
		} else{
			document.querySelector(".f3__smallAmount-error").classList.replace("f3__error-active","f3__error-inactive");
			document.querySelector(".f3__bigAmount-error").classList.replace("f3__error-active","f3__error-inactive");
		}
	}
	numberActive.addEventListener("click",()=> {
		if (document.querySelector(".f3__button-inactive")) {
			document.querySelector(".f3__after").classList.replace("f3__none","f3__block");
			document.querySelector(".f3__after-input").classList.replace("f3__none","f3__block");
			document.querySelector(".f3__zeros").classList.replace("f3__none","f3__block");
			numberActive.classList.replace("f3__button-inactive","f3__button-active");
		} else {
			document.querySelector(".f3__after").classList.replace("f3__block","f3__none");
			document.querySelector(".f3__after-input").classList.replace("f3__block","f3__none");
			document.querySelector(".f3__zeros").classList.replace("f3__block","f3__none");
			numberActive.classList.replace("f3__button-active","f3__button-inactive");
		}
	})
	document.querySelector(".f3__amount-input").addEventListener("keyup", validarCantidad);
	document.querySelector(".f3__amount-input").addEventListener("blur", validarCantidad);
	document.querySelector(".f3__submit").addEventListener("click",()=> {
		if (document.querySelector(".f3__error-active") == null && document.querySelector(".f3__amount-input").value != 0) {
			let cantidad = document.querySelector(".f3__amount-input").value;
			let listado = document.querySelector(".f3__listado-input").checked;
			let antes = document.querySelector(".f3__before-input").value;
			if (numberActive.className == "f3__numbers-input f3__button-active") {
				let answer;
				let luego = document.querySelector(".f3__before-input").value;
				let ceros = document.querySelector(".f3__zeros-input").checked;
				if (ceros) {
					for (let i = 0; i <= cantidad; i++) {
						let div = document.createElement("DIV");
						if (listado) div.classList.add("f3__div-block");
						else div.classList.add("f3__div-inline")
						let i9_i100 = i > 9 && i < 100;
						let i99_i1000 = i > 99 && i < 1000;
						let a99_a1000 = cantidad > 99 && cantidad < 1000;
						let l999_l10000 = cantidad > 999 && cantidad < 10000;
						let a9999_a100000 = cantidad > 9999 && cantidad < 100000;
						let d0 = `${antes}0${i}${luego}`;
						let d00 = `${antes}00${i}${luego}`;
						let d000 = `${antes}000${i}${luego}`;
						// 00 - 99
						if (i < 10 && cantidad < 100) answer = d0;
						// 000 - 999
						else if (i < 10 && a99_a1000) answer = d00;
						else if (i9_i100 && a99_a1000) answer = d0;
						// 0000 - 9999
						else if (i < 10 && l999_l10000) answer = d000;
						else if (i9_i100 && l999_l10000) answer = d00;
						else if (i99_i1000 && l999_l10000) answer = d0;
						// 00000 - 99999
						else if (i < 10 && a9999_a100000) answer = `${antes}0000${i}${luego}`;
						else if (i9_i100 && a9999_a100000) answer = d000;
						else if (i99_i1000 && a9999_a100000) answer = d00;
						else if (i > 999 && i < 10000 && a9999_a100000) answer = d0;
						// last
						else answer = antes + i + luego;
						if (!listado) answer = answer + "&nbsp;";
						div.innerHTML = answer;
						fragment1.appendChild(div);
					}
				} else {
					for (let i = 0; i <= cantidad; i++) {
						let div = document.createElement("DIV");
						if (listado) div.classList.add("f3__div-block");
						else div.classList.add("f3__div-inline")
						answer = antes + i + luego;
						if (!listado) answer = answer + "&nbsp;";
						div.innerHTML = answer;
						fragment1.appendChild(div);
					}
				}
			} else {
				for (let i = 0; i <= cantidad; i++) {
					let div = document.createElement("DIV");
					if (listado) div.classList.add("f3__div-block");
					else div.classList.add("f3__div-inline");
					answer = antes;
					if (!listado) answer = answer + "&nbsp;";
					div.innerHTML = answer;
					fragment1.appendChild(div);
				}
			}
			container.appendChild(fragment1)
			container.removeChild(document.querySelector(".f3"));
		}
	})
}
// Proyecto 4
clickboton4 = () => {
	class Calculator {
		constructor() {}
		plus(num1,num2,num3 = 0,num4 = 0,num5 = 0) {
			return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
		}
		subtract(num1,num2,num3 = 0,num4 = 0,num5 = 0) {
			return parseInt(num1) - parseInt(num2) - parseInt(num3) - parseInt(num4) - parseInt(num5);
		}
		multiply(num1,num2,num3 = 1,num4 = 1,num5 = 1) {
			return parseInt(num1) * parseInt(num2) * parseInt(num3) * parseInt(num4) * parseInt(num5);
		}
		divide(num1,num2,num3 = 1,num4 = 1,num5 = 1) {
			return parseInt(num1) / parseInt(num2) / parseInt(num3) / parseInt(num4) / parseInt(num5);
		}
		potenciar(num1,num2) {
			let num3 = parseInt(num1)
			for (let i = 1; i < parseInt(num2); i++) {
				num3 = num3 * num1;
			}
			return num3;
			// return num1**num2;
		}
		raizsquares(num1) {
			return Math.sqrt(num1);
		}
		raizcubicates(num1,num2) {
			return Math.cbrt(num1);
		}
	}
	let arr = [];
	const calculadora = new Calculator();
	let var1, var2;
	var1 = prompt("¿Qué quieres hacer? ¿Sumar, Multiplicar, Restar, Dividir, Potenciar, Raíz Cuadrada o Raíz Cúbica?");
	all:if (var1 == "suma" || var1 == "sumar" || var1 == "Suma" || var1 == "Sumar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.plus(...arr);
		alert(var2);break all;
	} else if (var1 == "resta" || var1 == "restar" || var1 == "Resta" || var1 == "Restar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.subtract(...arr);
		alert(var2);break all;
	} else if (var1 == "multiplica" || var1 == "multiplicar" || var1 == "Multiplica" || var1 == "Multiplicar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.multiply(...arr);
		alert(var2);break all;
	} else if (var1 == "Dividir" || var1 == "dividir" || var1 == "divide" || var1 == "Divide") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.divide(...arr);
		alert(var2);break all;
	} else if (var1 == "Potenciar" || var1 == "potenciar" || var1 == "potencia" || var1 == "Potencia") {
		arr[0] = prompt("Dime el número a potenciar");
		arr[1] = prompt("Dime tu exponente");
		var2 = calculadora.potenciar(...arr);
		alert(var2);break all;
	} else if (var1 == "Raiz Cuadrada" || var1 == "raíz cuadrada" || var1 == "Raíz Cuadrada"
		|| var1 == "raíz cuadrada" || var1 == "Raíz cuadrada" || var1 == "Raiz cuadrada" || var1 == "raiz cuadrada") {
		arr[0] = prompt("Raíz cuadrada de");
		var2 = calculadora.raizsquares(...arr);
		alert(var2);break all;
	} else if (var1 == "Raiz Cubica" || var1 == "raíz cubica" || var1 == "Raíz Cúbica" || var1 == "raíz cúbica"
		|| var1 == "Raíz cúbica" || var1 == "Raiz cubica" || var1 == "raiz cubica") {
		arr[0] = prompt("Raíz cúbica de");
		var2 = calculadora.raizcubicates(...arr);
		alert(var2);break all;
	} else if (var1 == "malo" || var1 == "Malo" || var1 == "MALO") {
		alert("¿Quién es el malo, el quién lo dice a otra persona o el quien hace un programa para ayudar a los demás?");
	} else {
		alert("La opción no es válida");
	}
}
// Proyecto 5
clickboton5 = () => {
	let container = document.querySelector(".desarrollo__div");
	let alumnosTotales = [];
	let fragment1 = document.createDocumentFragment();
	let cantidad = prompt(`¿Cuántos alumnos son?`);
	let total = 15;
	let resta = total / 1.666;
	resta = Math.round(resta);

	const asistencia = (nombre,p,e) => {
		let presencia = prompt(nombre + ", Presencia (P/p), Inasistencias (A/a). Día: " + e);
		if (presencia == "p" || presencia == "P" || presencia == "pp") {
			alumnosTotales[p][1]++
		}
	}
	for (let i = 0; i < cantidad; i++) {
		alumnosTotales[i] = [prompt(`Nombre del alumno ${i + 1}`),0];
	}
	for (let i = 0; i < total; i++) {
		for (alumno in alumnosTotales) {
			asistencia(alumnosTotales[alumno][0],alumno,i);
		}
	}
	for (alumno in alumnosTotales) {
		let div5 = document.createElement('DIV');
		let resultado = `${alumnosTotales[alumno][0]}:<br>
		Presencias:  <b>${alumnosTotales[alumno][1]}</b><br>
		Inasistencias: <b>${total - parseInt(alumnosTotales[alumno][1])}</b><br>`;
		if (total - alumnosTotales[alumno][1] > resta) {
			resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
		} else {resultado+= "<br><br>"}
		div5.innerHTML = resultado;
		fragment1.appendChild(div5);
	}
	container.appendChild(fragment1);
}
// Proyecto 6
clickboton6 = () => {
	let container = document.querySelector(".desarrollo__div");
	let time = 0;
	let p = document.createElement("P");
	container.appendChild(p);
	const myInterval = setInterval(()=>{
		try {
			time++;
			p.innerHTML = "Tiempo: <b>" + time + ".</b>";
			let a = document.querySelector(".desarrollo__div p b").textContent;
			a.toString(a);
			if (a == '30.') {
				InName = prompt("¿Cómo te llamás?");
				instate = prompt("¡Hola " + InName + " ¿Cómo estás?!");
				time = 0;
				if (instate == "Bien" || instate == "bien") {
					alert("Me alegro, disfruta de la pagina " + InName);	
				} else if (instate == "Mal" || instate == "mal") {
					alert("Oh, ojala que mañana mejoré, disfruta de la pagina " + InName);
				} else {alert("Disfruta de la pagina " + InName);}
			}
		}
		catch (e) {
			clearInterval(myInterval)
		}
	},1000);
}
// Proyecto 7
clickboton7 = () => {
	let container = document.querySelector(".desarrollo__div");
	let fragment1 = document.createDocumentFragment();
	const getInfo = (materia) => {
		materias = {
			fisica: ["Perez","pedro","pepito","cofla","maria"],
			programacion: ["Dalto","pedro","juan","pepito"],
			logica: ["Hernandez","pedro","juan","cofla","maria"],
			quimica: ["Rodriguez","juan","pepito","cofla","maria"]
		}
		if (materias[materia] !== undefined) {
			return [materias[materia],materia,materias];
		} else {
			return materias;
		}
	}
	const showMateria = (materia)=> {
		let info = getInfo(materia);

		if (info !== false) {
			let teacher = info[0][0];
			let alumnos = info[0];
			alumnos.shift();
			let a = alumnos.pop();
			alumnos.push(a + ".");
			return `El profesor de <b>${info[1]}</b> es: <b style="color:red">${teacher}</b><br>
				Los alumnos son: <b style="color:blue">${alumnos.join(", ")}</b><br><br>`;
		}
	}
	const buildDiv = (materia) => {
		let a = showMateria(materia);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const buildClases = (alumno) => {
		let a = cantidadDeClases(alumno);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const cantidadDeClases = (alumno) => {
		let info = getInfo();
		let clasesPresentes = [];
		let cantidadTotal = 0;
		for (data in info) {
			if (info[data].includes(alumno)) {
				cantidadTotal++;
				clasesPresentes.push(" " + data);
			}
		}
		let a = clasesPresentes.pop();
		clasesPresentes.push(a + ".");
		return `Cantidad de materias de <b style="color:blue">${alumno}</b>: <b>${cantidadTotal}</b><br>
		Materias: <b style="color:green">${clasesPresentes}</b><br/><br/>`;
	}
	buildDiv("fisica");
	buildDiv("programacion");
	buildDiv("logica");
	buildDiv("quimica");
	buildClases("cofla");
	buildClases("maria");
	buildClases("pedro");
	buildClases("pepito");
}
// Proyecto 8
clickboton8 = () => {
	let container = document.querySelector(".desarrollo__div");
	// Funciones
	const buildForm = () => {
		let f8 = document.createElement("FORM");
		f8.classList.add("f8");
		let a = `<label>Ingresar Datos</label>`;
		let b = `<div class="f8__display">
			<label>Ingresar Temperatura</label>
			<input type="range" min="1" max="5" id="inTemperatur">
			<div class="f8__div"><p>Congelamiento</p><p>Frio</p><p>Tropical</p><p>calor</p><p>hipertermia</p></div>
		</div>`;
		let c = `<div class="f8__display">
			<label>Ingresar Comida</label>
			<input type="range" min="1" max="5" id="inFood">
			<div class="f8__div"><p>Envenenado</p><p>Crudo</p><p>Optima</p><p>Fita</p><p>Saturada</p></div>
		</div>`;
		let d = `<div class="from8_display"><input type="button" name="detector" class="f8__button"></div>`;
		f8.innerHTML = a + b + c + d;
		container.appendChild(f8);
		return [
			document.getElementById("inTemperatur"),
			document.getElementById("inFood"),
			document.querySelector(".f8__button"),
			document.createElement("DIV")
		]
	}
	const validarForm = () => {
		if (e[0].value == 1 && e[1].value == 1) e[3].innerHTML = "<p>Muerto por congelamiento e Intoxicado</p>";
		if (e[0].value == 2 && e[1].value == 1) e[3].innerHTML = "<p>Muerto por gripe</p>";
		if (e[0].value == 3 && e[1].value == 1) e[3].innerHTML = "<p>Muerto por Envenamiento</p>";
		if (e[0].value == 4 && e[1].value == 1) e[3].innerHTML = "<p>Muerto por Fiebre</p>";
		if (e[0].value == 5 && e[1].value == 1) e[3].innerHTML = "<p>Muerto por calentamiento y Envenenamiento</p>";
		if (e[0].value == 1 && e[1].value == 2) e[3].innerHTML = "<p>Muerto por congelamiento</p>";
		if (e[0].value == 2 && e[1].value == 2) e[3].innerHTML = "<p>Adaptación al frio con fátiga</p>";
		if (e[0].value == 3 && e[1].value == 2) e[3].innerHTML = "<p>Vómitos, diarrea, nauseas</p>";
		if (e[0].value == 4 && e[1].value == 2) e[3].innerHTML = "<p>Adaptación al calor con cansancio</p>";
		if (e[0].value == 5 && e[1].value == 2) e[3].innerHTML = "<p>Muerto por calentamiento</p>";
		if (e[0].value == 1 && e[1].value == 3) e[3].innerHTML = "<p>Muerto por congelamiento</p>";
		if (e[0].value == 2 && e[1].value == 3) e[3].innerHTML = "<p>Adaptación al frio</p>";
		if (e[0].value == 3 && e[1].value == 3) e[3].innerHTML = "<p>Estado optimo</p>";
		if (e[0].value == 4 && e[1].value == 3) e[3].innerHTML = "<p>Adaptación al calor</p>";
		if (e[0].value == 5 && e[1].value == 3) e[3].innerHTML = "<p>Muerto por calentamiento</p>";
		if (e[0].value == 1 && e[1].value == 4) e[3].innerHTML = "<p>Muerto por congelamiento</p>";
		if (e[0].value == 2 && e[1].value == 4) e[3].innerHTML = "<p>Adaptación al frio</p>";
		if (e[0].value == 3 && e[1].value == 4) e[3].innerHTML = "<p>Sedentarismo</p>";
		if (e[0].value == 4 && e[1].value == 4) e[3].innerHTML = "<p>Sedentario</p>";
		if (e[0].value == 5 && e[1].value == 4) e[3].innerHTML = "<p>Muerto por calentamiento</p>";
		if (e[0].value == 1 && e[1].value == 5) e[3].innerHTML = "<p>Muerto por congelamiento</p>";
		if (e[0].value == 2 && e[1].value == 5) e[3].innerHTML = "<p>Adaptación al frio</p>";
		if (e[0].value == 3 && e[1].value == 5) e[3].innerHTML = "<p>Obesidad</p>";
		if (e[0].value == 4 && e[1].value == 5) e[3].innerHTML = "<p>Desidratación</p>";
		if (e[0].value == 5 && e[1].value == 5) e[3].innerHTML = "<p>Muerto por calentamiento</p>";
		container.appendChild(e[3]);
	}
	// Ejecución
	let e = buildForm();
	e[2].addEventListener("click", validarForm);
}
// Proyecto 9
clickboton9 = () => {
	// let fragment1 = document.createDocumentFragment();
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<h2>Dime lo que selecioné</h2>
	<input class="f9__input" type="text"></input>
	<div class="f9__div"></div>`
	let input = document.querySelector(".f9__input")
	let div1 = document.querySelector(".f9__div")
	input.addEventListener("select",(e)=>{
		let start = e.target.selectionStart;
		let end = e.target.selectionEnd;
		let text = input.value;
		div1.innerHTML = text.substring(start,end)
	});
}
// Proyecto 10
clickboton10 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="f10__fast"></div>
	<div class="f10__slow"></div>
	<div class="f10__answer"></div>`
	let i = 0;
	let e = 0;
	let min = 60;
	let tf = 320; //320;
	let ts = 1000;//1000;
	let fast = document.querySelector(".f10__fast");
	let slow = document.querySelector(".f10__slow");
	let answer = document.querySelector(".f10__answer");
	const a = setInterval(() => {
		i++;
		fast.innerHTML = ("Con lectura rápida en: " + i + ".");
	},tf)
	const b = setInterval(() => {
		e++;
		slow.innerHTML = ("Con lectura normal en: " + e + ".");
	},ts)
	setTimeout(()=>{
		clearInterval(a);
		clearInterval(b);
		answer.innerHTML = ("<p>Se excede en: " + (i - min) + "</p>")
	},(min * ts))
	// 128 - 125
}
// Proyecto 11
clickboton11 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="f11__reloj">
		<div class="f11__hora">00</div>
		<div class="f11__min">00</div>
		<div class="f11__seg">00</div>
		<div>|</div>
		<div class="f11__dia">00</div>
		<div class="f11__mes">00</div>
		<div class="f11__year">00</div>
		<div>|</div>
		<button class="f11__button">Stop</button>
	</div>`
	const addZeros = n => {
		if (n.toString().length < 2) return "0".concat(n);
		return n;
	}
	const actualizarHora = () => {
		if (document.querySelector(".f11__reloj")) {
			const time = new Date();
			document.querySelector(".f11__hora").textContent = addZeros(time.getHours());
			document.querySelector(".f11__min").textContent = addZeros(time.getMinutes());
			document.querySelector(".f11__seg").textContent = addZeros(time.getSeconds());
			document.querySelector(".f11__dia").textContent = addZeros(time.getDate());
			document.querySelector(".f11__mes").textContent = addZeros(time.getMonth() + 1);
			document.querySelector(".f11__year").textContent = addZeros(time.getYear() + 1900);
		}
	}
	const a = setInterval(actualizarHora,1000);
	actualizarHora();
	document.querySelector(".f11__button").addEventListener("click",()=>{clearInterval(a)})
}
// Proyecto 12
clickboton12 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="modal-overlay">
		<div class="modal">
			<h2>¿En que idioma quieres visualizar la página?</h2>
			<button class="en">Ingles</button>
			<button class="es">Español</button>
		</div>
	</div>
	<button class="remove">Eliminar</button>`
	const modal = document.querySelector(".modal-overlay");
	const remove = document.querySelector(".remove");
	const definirIdioma = () => {
		document.querySelector(".en").addEventListener("click", ()=>{
			localStorage.setItem("idioma","en");
			cerrarModal();
		})
		document.querySelector(".es").addEventListener("click", ()=>{
			localStorage.setItem("idioma","es");
			cerrarModal();
		})
	}
	remove.addEventListener("click", ()=>{
		eliminar();
		abrirModal();
	})
	const cerrarModal = () => {
		modal.style.animation = "desaparecer 1s forwards";
		modal.style.display = "none";
		remove.style.display = "initial";
	}
	const abrirModal = () => {
		modal.style.animation = "aparecer 1s forwards";
		modal.style.display = "initial"
	}
	const eliminar = () => {
		localStorage.removeItem("idioma");
		remove.style.display = "none";
	}
	idioma = localStorage.getItem("idioma")
	if (idioma === null) {
		abrirModal();
		definirIdioma();
	}
	else {
		cerrarModal()
	}
}
// Proyecto 13
clickboton13 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="textures">
		<div class="texture0"></div>
		<div class="texture1"></div>
		<div class="texture2"></div>
		<div class="texture3"></div>
	</div>
	<div class="zone"></div>`;
	const zone = document.querySelector(".zone");
	zone.addEventListener("dragover", (e)=>{
		e.preventDefault();
	})
	zone.addEventListener("drop", (e)=>{
		let n = e.dataTransfer.getData("texture")
		zone.style.background = `url("img/textura${n}.png")`;
	})
	const textures = document.querySelector(".textures");
	for (let i = 0; i < textures.children.length; i++) {
		document.querySelector(`.texture${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e));
	}
	const transferirTextura = (n,e) => {
		e.dataTransfer.setData("texture", n);
	}
}
// Poryecto 14
clickboton14 = () => {
	let container = document.querySelector(".desarrollo__div");
	const desarrollo = type => {
		document.querySelector(".pregunta14").removeChild(document.querySelector(".select14"));
		document.querySelector(".pregunta14").removeChild(document.querySelector(".button14"));
		if (type == "text") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte un Archivo de texto</div>
			<div class="result14"></div>`
		} else if (type == "img") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte una imagen</div>
			<div class="result14"></div>`
		} else if (type == "video") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte un video</div>
			<div class="result14"></div>`
		}
		const zona = document.querySelector(".container14");
		const resultado = document.querySelector(".result14");
		const loadingBar = document.querySelector(".loading-bar14")
		zona.addEventListener("dragover", e => {
			e.preventDefault();
			changeStyle(e.srcElement, "#444");
		})
		zona.addEventListener("dragleave", e => {
			e.preventDefault();
			changeStyle(e.srcElement, "#888");
		})
		const changeStyle = (obj, color) => {
			obj.style.color = color;
			obj.style.border = `4px dashed ${color}`
		}
		if (type == "text") {
			zona.addEventListener("drop", e => {
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				zona.style.border = "4px solid #888";
				const reader = new FileReader();
				reader.readAsText(e.dataTransfer.files[0]);
				reader.addEventListener("load", e => {
					resultado.textContent = e.currentTarget.result;
				})
			})
		} else if (type == "img") {
			zona.addEventListener("drop", e => {
				let file = e.dataTransfer.files[0]
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener("load", () => {
					let url = URL.createObjectURL(file)
					let img = document.createElement("IMG");
					img.setAttribute("src", url);
					img.classList.add("img14");
					resultado.appendChild(img);
				})
				zona.style.border = "4px solid #888";
			})
		} else if (type == "video") {
			zona.addEventListener("drop", e => {
				let file = e.dataTransfer.files[0];
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsArrayBuffer(file);
				reader.addEventListener("progress", e => {
					let carga = Math.round(e.loaded / file.size * 100);
					zona.textContent = `${carga}%`;
					loadingBar.style.padding = "75px 20px";
					if (document.querySelector("main").style.width <= "810px" && document.querySelector("main").style.width >= "500px") {
						loadingBar.style.width = `${carga/1.20}%`; //hasta el 83.2%;
					} else if (document.querySelector("main").style.width <= "500px" && document.querySelector("main").style.width >= "400px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 79.6%%;
					} else if (
						document.querySelector("main").style.width <= "400px"
						&& document.querySelector("main").style.width >= "350px"
						|| document.querySelector("main").style.width <= "400px"
						&& document.querySelector("main").style.width >= "350px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 74.2%;
					} else if (
						document.querySelector("main").style.width <= "350px" 
						&& document.querySelector("main").style.width >= "300px" 
						|| document.querySelector("main").style.width <= "809px" 
						&& document.querySelector("main").style.width >= "755px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 70.3%;
					} else if (document.querySelector("main").style.width >= "298px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 64.8%;
						loadingBar.style.height = `170px`;
					} else {
						loadingBar.style.width = `${carga/1.61}%`; //hasta el 62%;
					}
				})
				reader.addEventListener("loadend", e => {
					changeStyle(zona, "#2e7");
					zona.style.borderStyle = "solid";
					loadingBar.style.background = "#2e7";
					setTimeout(() => {
						zona.style.color = "#222";
						zona.style.animation = "aparecer 1s forwards";
						zona.textContent = "!Carga Completa!"
					},500)
				})
				reader.addEventListener("load", e => {
					let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
					let url = URL.createObjectURL(video);
					let img = document.createElement("VIDEO");
					img.setAttribute("src", url);
					img.setAttribute("controls", true);
					img.classList.add("img14")
					resultado.appendChild(img);
					img.style.width = "calc(100vw - 145px)";
				})
				zona.style.border = "4px solid #888";
			})
		}
	}
	container.innerHTML = `
	<div class="pregunta14">
		<select class="select14">
			<option value="text">Texto</option>
			<option value="img">Imagenes</option>
			<option value="video">Videos</option>
		</select>
		<button class="button14">Aceptar</button>
	</div>
	<div class="desarrollo14"></div>`;
	let confirmar = document.querySelector(".button14")
	confirmar.addEventListener("click", e => {
		let type = document.querySelector(".select14").value;
		desarrollo(type);
	})
}
// Poryecto 15
clickboton15 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="add-names"><input type="text" id="name" placeholder="Introduce un nombre"><button id="add">Añadir</button></div>
	<div class="names"></div>`;
	const IDBRequest = indexedDB.open("daltobase",1);
	IDBRequest.addEventListener("upgradeneeded",()=> IDBRequest.result.createObjectStore("name",{autoIncrement: true}))
	IDBRequest.addEventListener("success",() => readObject())
	IDBRequest.addEventListener("error",() => alert("ocurrio un error al abrir la base de datos"))
	document.getElementById("add").addEventListener("click",()=> {
		let name = document.getElementById("name").value;
		if (name.length > 0) {
			if (document.querySelector(".possibly") != undefined) {
				if (confirm("Hay Elementos sin guardar: ¿Quiéres continuar?")) {
					addObject({name});
					document.getElementById("name").value = "";
					readObject();
				}
				else {
					addObject({name});
					document.getElementById("name").value = "";
					readObject();
				}
			}
			else {
				addObject({name});
				document.getElementById("name").value = "";
				readObject();
			}
		}
	})
	const addObject = object => {
		const IDBData = transactionOperation("readwrite","Objeto agregado correctamente");
		IDBData.add(object);
	}
	const readObject = () => {
		const IDBData = transactionOperation("readonly");
		const cursor = IDBData.openCursor();
		const fragment = document.createDocumentFragment();
		cursor.addEventListener("success",()=>{
			if (cursor.result) {
				let element = nameHTML(cursor.result.key,cursor.result.value);
				fragment.appendChild(element);
				cursor.result.continue();
				document.querySelector(".names").appendChild(element);
			}
		})
	}
	const modificarObject = (key, object) => {
		const IDBData = transactionOperation("readwrite","Objeto modificado correctamente");
		IDBData.put(object, key);
	}
	const eliminarObject = key => {
		const IDBData = transactionOperation("readwrite","Objeto eliminado correctamente");
		IDBData.delete(key);
	}
	const transactionOperation = (mode,msg) => {
		const IDBTransaction = IDBRequest.result.transaction("name",mode);
		const objectStore = IDBTransaction.objectStore("name");
		// IDBTransaction.addEventListener("complete",()=>{
		// 	if (msg) alert.log(msg)
		// })
		return objectStore;
	}
	const nameHTML = (id, result) => {
		const container = document.createElement("DIV");
		const h2 = document.createElement("h2");
		const options = document.createElement("DIV");
		const saveButton = document.createElement("button");
		const deleteButton = document.createElement("button");
		container.classList.add("name");
		options.classList.add("options");
		saveButton.classList.add("impossible");
		deleteButton.classList.add("delete");
		saveButton.textContent = "Guardar";
		deleteButton.textContent = "Eliminar";
		h2.textContent = result.name;
		h2.setAttribute("contenteditable","true");
		h2.setAttribute("spellcheck","false");
		options.appendChild(saveButton);
		options.appendChild(deleteButton);
		container.appendChild(h2);
		container.appendChild(options);
		h2.addEventListener("keyup",()=>{
			saveButton.classList.replace("impossible","possibly");
		})
		saveButton.addEventListener("click",()=>{
			if (saveButton.className == "possibly") {
				modificarObject(id,{name: h2.textContent})
				saveButton.classList.replace("possibly","impossible")
			}
		})
		deleteButton.addEventListener("click",()=>{
			eliminarObject(id);
			document.querySelector(".names").removeChild(container);
		})
		return container;
	}
}
// Poryecto 16
clickboton16 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="publicaciones"></div>`;
	const publicaciones = document.querySelector(".publicaciones");
	let contador = 0;
	const filetxt = {
			"content": [
				{"nombre": "Lucas Dalto",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Rancio Dalto",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Luis Román",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Cofla Cofla",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Fuis18 Larc",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Dalto Nico",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Ai Román",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Roberto Sanchez",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "José Carlos",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Alfonso Pedrosky",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Esto está de Rúcula",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Bruja Asquerosa",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Buenovich",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Hormigas Esteban",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Darin Coder",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Lupa Pincel",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Elver Gon",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Kariño",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "MaVeNi",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Juan Pijalvaso",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Absolutamente",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Tritocode",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "La Larcpedia de esto",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Tettatech",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Adiós Mundo",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "RanaulMasters",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "RubioProfe",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Rojo",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Deucht",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Masters",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Gamers",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Music",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Capi Sama",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "España Crew",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Delasama Gamer",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Lara Amely Violeta Perea",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Runier",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Chris",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Latinogato",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Jared Manuel",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Clave de Sol",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Miyu",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Diana",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Fan de Eric Wiserman",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Ramo",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Shido y Bianca",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."},
				{"nombre": "Eres Tu Danilo Montero",
				"contenido": "Declaralo esta noche así. Jesús tu eres el amigo que me ama, Jesús tu eres la esperanza de mi vida, Eer."},
				{"nombre": "Te veo",
				"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				}
			]
		}
	const createPublicationCode = (name,content) => {
		const container = document.createElement("DIV");
		const comentarios = document.createElement("DIV");
		const nombre = document.createElement("H3");
		const contenido = document.createElement("P");
		const btnComentario = document.createElement("INPUT");
		const btnEnviar = document.createElement("INPUT");

		container.classList.add("publicacion");
		comentarios.classList.add("comentarios");
		btnComentario.setAttribute("placeholder","Introduce tu comentario");
		nombre.textContent = name;
		contenido.textContent = content;
		btnComentario.setAttribute("type","text");
		btnEnviar.setAttribute("type","submit");

		comentarios.appendChild(btnComentario);
		comentarios.appendChild(btnEnviar);
		container.appendChild(nombre);
		container.appendChild(contenido);
		container.appendChild(comentarios);

		return container;
	}
	const cargarMasPublicaciones = entry => {
		if (entry[0].isIntersecting) cargarPublicaciones(5)
	}
	const observer = new IntersectionObserver(cargarMasPublicaciones)
	const cargarPublicaciones = /*async*/ num => {
		// const request = await fetch(filetxt);
		// const content = await request.json();
		const content = filetxt; //archivo aparte de texto
		const arr = content.content;
		const documentFragment = document.createDocumentFragment();
		for (let i = 0; i < num; i++) {
			if (arr[contador] != undefined) {
				const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
				documentFragment.appendChild(newPublicacion);
				contador++;
				if (i == num-1) observer.observe(newPublicacion)
			} else if (document.getElementById("noMore") == undefined) {
				let noMore = document.createElement("H3");
				noMore.id = "noMore";
				noMore.textContent = "No hay más publicaciones";
				documentFragment.appendChild(noMore);
				publicaciones.appendChild(documentFragment);
			}
			else break;
		}
		publicaciones.appendChild(documentFragment);
	}
	cargarPublicaciones(10);
}
// Poryecto 17
clickboton17 = () => {
	let container = document.querySelector(".desarrollo__div");
	const fragment17 = document.createDocumentFragment();
	container.innerHTML = `
		<div class="div17">
			<div>Número de IP:</div>
			<input type="text" class="number17">
			<div>Cantidad Deseada:</div>
			<input type="number" class="amount17">
			<div class="result17"></div>
			<div>Rellenar con HTTPS:
				<input type="checkbox" class="boolean17">
			</div>
			<input type="submit" class="button17">
		</div>`;
	document.querySelector(".button17").addEventListener("click",()=>{
		let amount = document.querySelector(".amount17").value;
		const node = document.createElement("div");
		for (let i = 0; i < amount; i++) {
			let number = document.querySelector(".number17").value;
			let result = prompt("Dime tu URL:");
			let space = String.fromCharCode(160) + '\xa0' + '\xa0' + '\xa0' + '\xa0' + '\xa0' + '\xa0';
			let p0 = document.createElement("div");
			let p1 = document.createElement("div");
			if (document.querySelector(".boolean17").checked) {
				p0.textContent = number + space + "https://www." + result;
				p1.textContent = number + space + "https://" + result;
			} else {
				p0.textContent = number + space + "http://www." + result;
				p1.textContent = number + space + "http://" + result;
			}
			let p2 = document.createElement("div");
			p2.textContent = number + space + "www." + result;
			let p3 = document.createElement("div");
			p3.textContent = number + space + result;
			node.classList.add("div3");
			node.appendChild(p0);
			node.appendChild(p1);
			node.appendChild(p2);
			node.appendChild(p3);
			fragment17.appendChild(node);
		}
		container.removeChild(document.querySelector(".div17"))
		container.appendChild(fragment17);
	})
}
// Poryecto 18
clickboton18 = () => {
	let container = document.querySelector(".desarrollo__div");
	const fragment18 = document.createDocumentFragment();
	const IDBRequest = indexedDB.open("reader",2);
	const addObject = object => {
		const IDBData = transactionOperation("readwrite","Objeto agregado correctamente");
		IDBData.add(object);
	}
	const readObject = () => {
		const IDBData = transactionOperation("readonly");
		const cursor = IDBData.openCursor();
		const fragment = document.createDocumentFragment();
		cursor.addEventListener("success",()=>{
			if (cursor.result) {
				let curs = cursor.result.value;
				let element = buildDiv(curs.nombre,curs.calculo,curs.total,curs.cantidad,curs.tiempo,cursor.result.key,curs.valor,curs.lock);
				if (curs.lock[0] == true) {
					document.querySelector(".f18__update__saved-content").appendChild(element);
				} else {
					document.querySelector(".f18__update__head-container").appendChild(element);
				}
				cursor.result.continue();
			}
		})
	}
	const modificarObject = (key, object) => {
		const IDBData = transactionOperation("readwrite","Objeto modificado correctamente");
		IDBData.put(object, key);
	}
	const eliminarObject = key => {
		const IDBData = transactionOperation("readwrite","Objeto eliminado correctamente");
		IDBData.delete(key);
	}
	const transactionOperation = (mode,msg) => {
		const IDBTransaction = IDBRequest.result.transaction("books",mode);
		const objectStore = IDBTransaction.objectStore("books");
		return objectStore;
	}
	IDBRequest.addEventListener("upgradeneeded",()=> IDBRequest.result.createObjectStore("books",{autoIncrement: true}))
	IDBRequest.addEventListener("success",() => readObject())
	class Fraccion {
		constructor(numerador, denominador) {
	        this.setNumerador(numerador);
	        this.setDenominador(denominador);
	    }
	    setNumerador(numerador) {
	        this.numerador = numerador;
	    }
	    setDenominador(denominador) {
	        if (denominador === 0) {
	            throw "El denominador debe ser distinto de 0";
	        }
	        this.denominador = denominador;
	    }
		// Ayudantes
	    maximoComunDivisor(a, b) {
	        let temporal;//Para no perder b
	        while (b != 0) {
	            temporal = b;
	            b = a % b;
	            a = temporal;
	        }
	        return a;
	    }
	    minimoComunMultiplo(a, b) {
	        return (a * b) / this.maximoComunDivisor(a, b);
	    }
	    simplifica() {
	        const mcd = this.maximoComunDivisor(this.numerador, this.denominador);
	        return new Fraccion(this.numerador / mcd, this.denominador / mcd);
	    }
	    toString() {
	        return `${this.numerador}/${this.denominador}`;
	    }
	}
	// Porcentaje de avance entre lo leído y lo no leido
	calculatePorcentaje = (amount,value) => {
		let progress, result;
		if (value == undefined) {
			progress = document.querySelector(".f18__update-percentageInput").value;
			result = (progress * 100) / amount;
		} else result = (value * 100) / amount;
		return result;
	}
	buildDiv = (name, calculate, timed, amount, tiempo, id, value, block) => {
		let nameClass = "f18__update";
		let percentageNumber = calculatePorcentaje(amount, value);
		let container = document.createElement('div');
		let divMain = document.createElement('div');
		let check = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let checkBack = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		let checkFront = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		let finish = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let pathUnlock = document.createElementNS("http://www.w3.org/2000/svg", "path");
		let pathLock = document.createElementNS("http://www.w3.org/2000/svg", "path");
		let h4 = document.createElement('h4');
		let calculateTimeDiv = document.createElement('div');
		let calculateTime = document.createElement('p');
		let recommendation = document.createElement('p');
		let percentage = document.createElement('p');
		let percentageInput = document.createElement('input');
		let percentageEntire = document.createElement('p');
		let time = document.createElement('p');
		let theProgressDiv = document.createElement('div');
		let containerProgress = document.createElement('div');
		let theProgress = document.createElement('div');
		let numberProgress = document.createElement('div');
		let optionsMaths = document.createElement('div');
		let optionsButtons = document.createElement('div');
		let buttonToUpdate = document.createElement('button');
		let buttonToSave = document.createElement('button');
		let buttonDelete = document.createElement('button');
		container.classList.add(nameClass + "-div");
		divMain.classList.add(nameClass + "-main");
		container.setAttribute('id',id);
		checkBack.classList.add(nameClass + "-checkBack");
		checkBack.setAttribute('cx','5');
		checkBack.setAttribute('cy','5');
		checkBack.setAttribute('r','4.8');
		checkFront.classList.add(nameClass + "-checkFront");
		checkFront.setAttribute('cx','5');
		checkFront.setAttribute('cy','5');
		checkFront.setAttribute('r','3.5');
		checkFront.style.fill = "#ccc";
		check.classList.add(nameClass + "-check");
		pathUnlock.classList.add(nameClass + "-unLock");
		pathUnlock.style.display = "block";
		pathUnlock.setAttribute('d',"M0 5 0 3.5 Q0.5 0 3 0 T6 3.5 L6 4 5 4 5 3.5 Q4.8 1 3 1 T1 3.5 L1 5 6 5 6 10 0 10z");
		pathLock.classList.add(nameClass + "-lock");
		pathLock.setAttribute('d',"M0 5 Q0.5 1 3 1 T6 5 M5 5 Q4.5 2 3 2 T1 5 L5 5 M6 5 L6 10 0 10 0 5z");
		pathLock.style.display = "none";
		finish.classList.add(nameClass + "-finish");
		h4.classList.add(nameClass + "-name");
		h4.textContent = name;
		h4.setAttribute("contenteditable","true");
		h4.setAttribute("spellcheck","false");
		calculateTimeDiv.classList.add(nameClass + "-calculateTimeDiv");
		calculateTime.classList.add(nameClass + "-calculateTime");
		calculateTime.textContent = timed;
		recommendation.classList.add(nameClass + "-recommendation");
		recommendation.textContent = calculate;
		percentage.classList.add(nameClass + "-percentage");
		percentageInput.classList.add(nameClass + "-percentageInput");
		percentageInput.setAttribute("type","number");
		percentageInput.setAttribute("value", value);
		percentageEntire.classList.add(nameClass + "-percentageEntire");
		percentageEntire.textContent = `\xa0 / ${amount}`;
		time.classList.add(nameClass + "-time");
		time.textContent = `${tiempo[0]}/${tiempo[1]}/${tiempo[2]}`;
		containerProgress.classList.add(nameClass + "-containerProgress");
		theProgressDiv.classList.add(nameClass + "-theProgressDiv");
		theProgress.classList.add(nameClass + "-theProgress");
		theProgress.style.width = `${percentageNumber}%`;
		numberProgress.classList.add(nameClass + "-numberProgress");
		numberProgress.textContent = `${Math.trunc(percentageNumber)}%`;
		optionsMaths.classList.add(nameClass + "-optionsMaths");
		optionsButtons.classList.add(nameClass + "-optionsButtons");
		buttonToUpdate.classList.add(nameClass + "-toUpdate");
		buttonToUpdate.textContent = "Actualizar";
		buttonToSave.classList.add(nameClass + "-saved");
		buttonToSave.textContent = "Guardar";
		buttonDelete.classList.add(nameClass + "-delete");
		buttonDelete.textContent = "Eliminar";
		check.appendChild(checkBack);
		check.appendChild(checkFront);
		divMain.appendChild(check);
		finish.appendChild(pathUnlock);
		finish.appendChild(pathLock);
		divMain.appendChild(finish);
		divMain.appendChild(h4);
		optionsMaths.appendChild(divMain);
		calculateTimeDiv.appendChild(calculateTime);
		optionsMaths.appendChild(calculateTimeDiv);
		optionsMaths.appendChild(recommendation);
		percentage.appendChild(percentageInput);
		percentage.appendChild(percentageEntire);
		percentage.appendChild(time);
		optionsMaths.appendChild(percentage);
		containerProgress.appendChild(theProgress);
		theProgressDiv.appendChild(containerProgress);
		theProgressDiv.appendChild(numberProgress);
		optionsMaths.appendChild(theProgressDiv);
		optionsButtons.appendChild(buttonToUpdate);
		optionsButtons.appendChild(buttonToSave)
		optionsButtons.appendChild(buttonDelete);
		container.appendChild(optionsMaths);
		container.appendChild(optionsButtons);
		if (percentageNumber >= 100) pathUnlock.style.fill = "#48e";
		else finish.style.cursor = "default";
		if (block[1]) {
			h4.setAttribute("contenteditable","false");
			percentageInput.setAttribute("disabled","");
			pathLock.style.display = "block";
			pathLock.style.fill = "#a11";
			pathUnlock.style.display = "none";
			finish.style.cursor = "default";
			buttonToUpdate.classList.replace("f18__update-toUpdate","f18__update-toUpdated");
		}
		checkFront.addEventListener("click",()=>{
			if (checkFront.style.fill == "rgb(204, 204, 204)") {
				checkFront.style.fill = "#000";
				calculatedCheck(true, checkFront, block[0]);
				if (!block[0]) {
					document.querySelector(".f18__update__header-delete").style.display = "block";
					document.querySelector(".f18__update__header-save").style.display = "block";
				} else {
					document.querySelector(".f18__update__save-delete").style.display = "block";
					document.querySelector(".f18__update__save-save").style.display = "block";
				}
			} else {
				checkFront.style.fill = "#ccc";
				calculatedCheck(false, checkFront, block[0]);
				if (document.querySelector(".f18__update-circleFront").style.fill == "rgb(204, 204, 204)" && !block[0]) {
					document.querySelector(".f18__update__header-delete").style.display = "none";
					document.querySelector(".f18__update__header-save").style.display = "none";
				} else {
					document.querySelector(".f18__update__save-save").style.display = "none";
					document.querySelector(".f18__update__save-delete").style.display = "none";
				}
			}
		})
		h4.addEventListener("keyup",()=>{
			if (!block[1]) {
				buttonToSave.classList.replace("f18__update-saved","f18__update-save");
				buttonToUpdate.classList.replace("f18__update-toUpdate","f18__update-toUpdated");
			}
		})
		percentageInput.addEventListener("keyup",()=>{
			if (!block[1]) {
				buttonToSave.classList.replace("f18__update-saved","f18__update-save");
				buttonToUpdate.classList.replace("f18__update-toUpdate","f18__update-toUpdated");
			}
		})
		buttonToSave.addEventListener("click",()=>{
			if (buttonToSave.className == "f18__update-save") {
				modificarObject(id,{
					nombre: h4.textContent,
					calculo: calculate,
					cantidad: amount,
					total: timed,
					tiempo: tiempo,
					valor: percentageInput.value,
					lock: block
				})
				buttonToUpdate.classList.replace("f18__update-toUpdated","f18__update-toUpdate");
				buttonToSave.classList.replace("f18__update-save","f18__update-saved");
			}
		})
		buttonToUpdate.addEventListener("click",() => {
			if (buttonToSave.className == "f18__update-saved") {
				let percentageNumber = calculatePorcentaje(amount, percentageInput.value);
				theProgress.style.width = `${percentageNumber}%`;
				numberProgress.textContent = `${Math.trunc(percentageNumber)}%`;
				calculate = calculateMath(tiempo[2], tiempo[1], tiempo[0], amount, percentageInput.value);
				recommendation.textContent = calculate;
				if (percentageNumber >= 100) {
					finish.style.cursor = "pointer";
					pathUnlock.style.fill = "#48e";
				} else {
					finish.style.cursor = "default";
					pathUnlock.style.fill = "#ccc";
				}

			}
			let date = time.textContent.split("/");
			let a = parseInt(date[2]);
			let b = parseInt(date[1]);
			let c = parseInt(date[0]);
			let timed = calculateDate(a,b,c);
			calculateTime.textContent = timed;
			if (block[0] == undefined) {
				block = [false, block]
				if (block[1]) {
					h4.setAttribute("contenteditable","false");
					percentageInput.setAttribute("disabled","");
					pathLock.style.display = "block";
					pathLock.style.fill = "#a11";
					pathUnlock.style.display = "none";
					finish.style.cursor = "default";
					buttonToUpdate.classList.replace("f18__update-toUpdate","f18__update-toUpdated");
				}
			}
			modificarObject(id,{
					nombre: h4.textContent,
					calculo: calculate,
					cantidad: amount,
					total: timed,
					tiempo: tiempo,
					valor: percentageInput.value,
					lock: block
				})
		})
		buttonDelete.addEventListener("click",()=>{
			if (window.confirm("¿Seguro que quieres Eliminar una lectura?")) {
				eliminarObject(id);
				if (block[0] == false) document.querySelector(".f18__update__head-container").removeChild(container);
				else document.querySelector(".f18__update__saved-content").removeChild(container);
			}
		})
		pathUnlock.addEventListener("click",()=>{
			if (percentageNumber >= 100 && buttonToSave.className == "f18__update-saved") {
				if (window.confirm("¿Quiéres Bloquear está lectura?")) {
					buttonToUpdate.classList.replace("f18__update-toUpdate","f18__update-toUpdated");
					h4.setAttribute("contenteditable","false");
					percentageInput.setAttribute("disabled","");
					pathLock.style.display = "block";
					pathLock.style.fill = "#a11";
					pathUnlock.style.display = "none";
					finish.style.cursor = "default";
					block[1] = true;
					modificarObject(id,{
						nombre: h4.textContent,
						calculo: calculate,
						cantidad: amount,
						total: timed,
						tiempo: tiempo,
						valor: percentageInput.value,
						lock: block
					})
				}
			} else if (buttonToSave.className == "f18__update-save") {
				alert("Hay cambios sin guardar");
			}
		})
		return container;
	}
	checkMonth = (month, year) => {
		if (month == 1 || month == 3 || month == 5 || month == 7  || month == 8  || month == 10  || month == 12) return 31;
		else if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
		else if (month == 2 && year%4 == 0 && year%400 == 0 && !year%100 == 0) return 29;
		else return 28;
	}
	checkYear = year => {
		if (year%4 == 0 && year%400 == 0 && !year%100 == 0) return 366;
		else return 365;
	}
	calculateDate = (year, month, day) => {
		let today = new Date();
		let todayYear = today.getYear() + 1900;
		let todayMonth = today.getMonth() + 1;
		let todayDay = today.getDate();

		let yearToDay = 0, monthToDay = 0, preNewDay, preNewMonth, preNewYear, newDay, newMonth, newYear;
		// Comparar Años
		if (todayYear <= year) newYear = year - todayYear;
		// Comparar Meses
		if (todayMonth <= month) newMonth =  month - todayMonth;
		else {
			newMonth =  month - todayMonth + 12;
			newYear--;
		}
		// Comparar Días
		if (todayDay <= day) newDay = day - todayDay;
		else {
			newDay = day - todayDay + checkMonth(month, year);
			newMonth--;
		}

		for (let i = 0; i < newYear; i++) {
			yearToDay += checkYear(year);
			year++;
		}
		for (let i = 0; i < newMonth; i++) {
			monthToDay += checkMonth(month);
			month++;
		}

		if (newDay == 1) preNewDay = `${newDay} día, `;
		else preNewDay = `${newDay} días, `;
		if (newMonth == 1) preNewMonth = `${newMonth} mes y `;
		else preNewMonth = `${newMonth} meses y `;
		if (newYear == 1) preNewYear = `${newYear} año`;
		else preNewYear = `${newYear} años`;
		let newDate = preNewDay + preNewMonth + preNewYear;
		return newDate;
	}
	calculatePerformance = (amount, year, month, day) => {
		// Total de días
		let temporalTime = year + month + day;

		let f = new Fraccion(amount,temporalTime);	
		let arrayFraccionPro = f.simplifica();
		let numeratorPro = arrayFraccionPro.numerador;
		let denominatorPro = arrayFraccionPro.denominador;
		let temporalProNominator = arrayFraccionPro.numerador;
		let temporalProDenominator = arrayFraccionPro.denominador;
		// Calcular el rendimiento con iteraciones
		let i = 1;
		while (i < 50) {
			let fPro = new Fraccion(numeratorPro,denominatorPro);
			arrayFraccionPro = fPro.simplifica();
			numeratorPro = parseInt(arrayFraccionPro.numerador);
			denominatorPro = parseInt(arrayFraccionPro.denominador);
			// Conservar el menor nominador
			if (temporalProNominator > numeratorPro) temporalProNominator = numeratorPro;
			// Conservar el menor denominador
			if (temporalProDenominator > denominatorPro) temporalProDenominator = denominatorPro;
			if (denominatorPro == 1) break;
			i++;
			numeratorPro++;
		}
		if (temporalProDenominator == denominatorPro && denominatorPro != 1) {
			temporalProDenominator++;
			let j = 1;
			while (j < 50) {
				let fPro = new Fraccion(numeratorPro,denominatorPro);
				arrayFraccionPro = fPro.simplifica();
				numeratorPro = parseInt(arrayFraccionPro.numerador);
				denominatorPro = parseInt(arrayFraccionPro.denominador);
				// Conservar el menor nominador
				if (temporalProNominator > numeratorPro) temporalProNominator = numeratorPro;
				// Conservar el menor denominador
				if (temporalProDenominator > denominatorPro) temporalProDenominator = denominatorPro;
				if (denominatorPro == 1) break;
				j++;
				numeratorPro++;
			}
		}
		return [temporalProNominator, temporalProDenominator]
	}
	calculateMath = (year, month, day, amount, amountProgress) => {
		amount = amount - amountProgress;
		let today = new Date();
		let todayYear = today.getYear() + 1900;
		let todayMonth = today.getMonth() + 1;
		let todayDay = today.getDate();
		let yearToDay = 0, monthToDay = 0, newDay, newMonth;

		// Comparar Años
		if (todayYear <= year) {
			newYear = year - todayYear;
		}
		// Comparar Meses
		if (todayMonth <= month) {
			newMonth =  month - todayMonth;
		} else {
			newMonth =  month - todayMonth + 12;
			newYear--;
		}
		// Comparar Días
		if (todayDay <= day) {
			newDay = day - todayDay;
		} else {
			newDay = day - todayDay + checkMonth(month, year);
			newMonth--;
		}
		// Convertir Años en días
		for (let i = 0; i < newYear; i++) {
			yearToDay += checkYear(year);
			year++;
		}
		// Convertir Meses en días
		for (let i = 0; i < newMonth; i++) {
			monthToDay += checkMonth(month);
			month++;
		}
		// Calcular el rendimiento
		let performance = calculatePerformance(amount, yearToDay, monthToDay, newDay);

		// Complementaciòn
		let arrayFraccionEficiency = new Fraccion(performance[0],performance[1]);
		arrayFraccionEficiency = arrayFraccionEficiency.simplifica();

		// Compilar la estructura
		let numerator, denominator;
		if (arrayFraccionEficiency.numerador == 1) numerator = `${arrayFraccionEficiency.numerador} página, `;
		else numerator = `${arrayFraccionEficiency.numerador} páginas, `;
		if (arrayFraccionEficiency.denominador == 1) denominator = `cada día`;
		else denominator = `cada ${arrayFraccionEficiency.denominador} días`;

		//Retorno
		let forEachPro = numerator + denominator;
		return forEachPro;
	}
	calculatedCheck = (bollean, origin, space) => {
		let allDivs = document.querySelectorAll('.f18__update__head-container .f18__update-div');
		if (space) allDivs = document.querySelectorAll('.f18__update__saved-content .f18__update-div');
		if (origin.className.animVal == "f18__update-circleFront" || origin.className.animVal == "f18__update__save-circleFront") {
			for (let i = allDivs.length - 1; i >= 0; i--) {
			let divCheck = allDivs[i].querySelector(".f18__update-optionsMaths .f18__update-main .f18__update-check .f18__update-checkFront");
				if (bollean) {
					divCheck.style.fill = "#000";
				} else {
					divCheck.style.fill = "#ccc";
				}
			}
		} else {
			for (let i = allDivs.length - 1; i >= 0; i--) {
			let divCheck = allDivs[i].querySelector(".f18__update-optionsMaths .f18__update-main .f18__update-check .f18__update-checkFront");
				if (divCheck.style.fill == "rgb(204, 204, 204)") {
					bollean = false;
				} else {
					bollean = true;
					break;
				}
			}
			if (bollean) {
				if (!space) document.querySelector(".f18__update-circleFront").style.fill = "#000";
				else document.querySelector(".f18__update__save-circleFront").style.fill = "#000";
			} else {
				if (!space) {
					document.querySelector(".f18__update-circleFront").style.fill = "#ccc";
					document.querySelector(".f18__update__header-delete").style.display = "block";
					document.querySelector(".f18__update__header-save").style.display = "block";
				} else {
					document.querySelector(".f18__update__save-circleFront").style.fill = "#ccc";
					document.querySelector(".f18__update__save-delete").style.display = "block";
					document.querySelector(".f18__update__save-save").style.display = "block";
				}
			}
		}
	}
	selectCheck = (space,type) => {
		let text;
		if (type == 0) text = "¿Seguro que quieres proceder a Eliminar?";
		else if (type == 1 && space == 0) text = "¿Seguro que quieres proceder a Archivar?";
		else text = "¿Seguro que quieres proceder a Desarchivar?";
		if (window.confirm(text)) {
			let arr = [], divs = [], allDivs;
			if (space == 0) allDivs = document.querySelectorAll('.f18__update__head-container .f18__update-div');
			else allDivs = document.querySelectorAll('.f18__update__saved-content .f18__update-div');
			// Recoge todos los ids seleccionados
			for (let i = allDivs.length - 1; i >= 0; i--) {
				let divCheck = allDivs[i].querySelector(".f18__update-optionsMaths .f18__update-main .f18__update-check .f18__update-checkFront");
				if (divCheck.style.fill == "rgb(0, 0, 0)") {
					let key = allDivs[i].getAttribute("id");
					arr.push(key)
				}
			}
			// Recoge los los divs seleccionados
			for (let i = allDivs.length - 1; i >= 0; i--) {
				for (let j = arr.length - 1; j >= 0; j--) if (allDivs[i].getAttribute("id") == arr[j]) divs.push(allDivs[i]);
			}
			// MOdifica cada uno
			for (let i = arr.length - 1; i >= 0; i--) {
				// Elimina
				if (type == 0) {
					eliminarObject(arr[i]);
					if (space == 0) {
						document.querySelector(".f18__update__head-container").removeChild(divs[i]);
						document.querySelector(".f18__update-circleFront").style.fill = "#ccc";
					}
					else {
						document.querySelector(".f18__update__saved-content").removeChild(divs[i]);
						document.querySelector(".f18__update__save-circleFront").style.fill = "#ccc";
					}
				}
				// Archiva
				else if (type == 1) {
					let obj = [];					
					obj.push(divs[i].querySelector(".f18__update-name").textContent);
					obj.push(divs[i].querySelector(".f18__update-recommendation").textContent);
					let temporal = divs[i].querySelector(".f18__update-percentageEntire").textContent.split("/");
					obj.push(parseInt(temporal[1]));
					obj.push(divs[i].querySelector(".f18__update-calculateTime").textContent);
					temporal = divs[i].querySelector(".f18__update-time").textContent.split("/");
					temporal = [parseInt(temporal[0]),parseInt(temporal[1]),parseInt(temporal[2])]
					obj.push(temporal);
					obj.push(divs[i].querySelector(".f18__update-percentageInput").value);
					if (space == 0) temporal = true;
					else temporal = false;
					obj.push(temporal);
					if (divs[i].querySelector(".f18__update-lock").style.display == "block") temporal = true;
					else temporal = false;
					obj.push(temporal);
					modificarObject(parseInt(arr[i]),{
						nombre: obj[0],
						calculo: obj[1],
						cantidad: obj[2],
						total: obj[3],
						tiempo: obj[4],
						valor: obj[5],
						lock: [obj[6], obj[7]]
					})
					divs[i].querySelector(".f18__update-checkFront").style.fill = "#ccc";
				}
				if (space == 0 && type == 1) {
					document.querySelector(".f18__update-circleFront").style.fill = "#ccc";
					document.querySelector(".f18__update__head-container").removeChild(divs[i]);
					document.querySelector(".f18__update__saved-content").appendChild(divs[i]);
					document.querySelector(".f18__update__header-save").style.display = "none";
					document.querySelector(".f18__update__header-delete").style.display = "none";
				}
				else if (space == 1 && type == 1) {
					document.querySelector(".f18__update__save-circleFront").style.fill = "#ccc";
					document.querySelector(".f18__update__saved-content").removeChild(divs[i]);
					document.querySelector(".f18__update__head-container").appendChild(divs[i]);
					document.querySelector(".f18__update__save-save").style.display = "none";
					document.querySelector(".f18__update__save-delete").style.display = "none";
				}
			}
		}
	}
	contractDiv = svg => {
		let css = svg.style;
		if (css.transform == "rotateZ(0deg)") {
			css.transform = "rotateZ(-90deg)";
			if (svg.className.animVal == "f18__update__header-svg") {
				document.querySelector(".f18__update__title").style.display = "none";
				document.querySelector(".f18__update__head-container").style.display = "none";
			} else {
				document.querySelector(".f18__update__save__title").style.display = "none";
				document.querySelector(".f18__update__saved-content").style.display = "none";
			}
		} else {
			css.transform = "rotateZ(0deg)";
			if (svg.className.animVal == "f18__update__header-svg") {
				if (document.querySelector(".desarrollo__div").clientWidth >= 886) {
					document.querySelector(".f18__update__title").style.display = "grid";
				}
				document.querySelector(".f18__update__head-container").style.display = "flex";
			} else {
				if (document.querySelector(".desarrollo__div").clientWidth >= 886) {
					document.querySelector(".f18__update__save__title").style.display = "grid";
				}
				document.querySelector(".f18__update__saved-content").style.display = "flex";
			}
		}
	}
	container.innerHTML = `
		<div class="f18">
			<div class="f18__add">
				<div class="f18__add-Div">
					<h3>Nombre de la lectura</h3>
					<input type="text" class="f18__add-name" spellcheck="false">
					<p class="f18__add__errorInactive">El nombre esta incompleto</p>
				</div>
				<div class="f18__add-Div">
					<h3>Cantidad de páginas</h3>
					<input type="number" class="f18__add-amount">
					<p class="f18__add__errorInactive">La cantidad esta incompleta</p>
					<p class="f18__add__errorInactive">La cantidad no es válida</p>
				</div>
				<div class="f18__add-Div">
					<h3>Fecha de entrega</h3>
					<input type="date" class="f18__add-date">
					<p class="f18__add__errorInactive">La fecha esta incompleta</p>
				</div>
				<div class="f18__add-Div">
					<h3>Páginas avanzadas</h3>
					<input type="number" class="f18__add-progress" placeholder="0">
				</div>
				<div class="f18__add-Div">
					<input type="submit" class="f18__add-submit">
				</div>
			</div>
			<div class="f18__update">
				<div class="f18__update__head">
					<div class="f18__update__header">
						<svg class="f18__update__header-svg" viewbox="0 0 10 10" class="svg">
							<polygon points=".8,2.5 5,10 9.2,2.5"fill="black"/>
						</sgv>
						<h3>Lecturas</h3>
						<div class="f18__update__header-buttons">
							<button class="f18__update__header-save" style="display: none">Archivar</button>
							<button class="f18__update__header-delete" style="display: none">Eliminar</button>
						</div>
					</div>
					<div class="f18__update__title">
						<svg class="f18__update__title-svg">
							<circle class="f18__update-circleBack" cx="5" cy="5" r="4.8"></circle>
							<circle class="f18__update-circleFront" cx="5" cy="5" r="3.5" style="fill:#ccc"></circle>
						</svg>
						<div class="f18__update__title-name">Nombre</div>
						<div class="f18__update__title-calculateTime">Tiempo Restante</div>
						<div class="f18__update__title-recommendation">Proporción</div>
						<div class="f18__update__title-time">Restante</div>
						<div class="f18__update__title-percentage">Porcentaje</div>
						<div class="f18__update__title-options">Opciones</div>
					</div>
				<div class="f18__update__head-container"></div>
				</div>
				<div class="f18__update__save">
					<div class="f18__update__saved">
						<svg class="f18__update__saved-svg" viewbox="0 0 10 10" class="svg">
							<polygon points=".8,2.5 5,10 9.2,2.5"fill="black"/>
						</sgv>
						<h3>Archivados</h3>
						<div class="f18__update__header-buttons">
							<button class="f18__update__save-save" style="display: none">Desarchivar</button>
							<button class="f18__update__save-delete" style="display: none">Eliminar</button>
						</div>
					</div>
					<div class="f18__update__save__title" style="display: none">
						<svg class="f18__update__title-svg">
							<circle class="f18__update__save-circleBack" cx="5" cy="5" r="4.8"></circle>
							<circle class="f18__update__save-circleFront" cx="5" cy="5" r="3.5" style="fill:#ccc"></circle>
						</svg>
						<div class="f18__update__save__title-name">Nombre</div>
						<div class="f18__update__save__title-calculateTime">Tiempo Restante</div>
						<div class="f18__update__save__title-recommendation">Proporción</div>
						<div class="f18__update__save__title-time">Restante</div>
						<div class="f18__update__save__title-percentage">Porcentaje</div>
						<div class="f18__update__save__title-options">Opciones</div>
					</div>
					<div class="f18__update__saved-content" style="display: none"></div>
				</div>
			</div>
		</div>`;
	// Añadir
	document.querySelector(".f18__add-submit").addEventListener("click",()=>{
		let name = document.querySelector(".f18__add-name").value;
		let amount = parseInt(document.querySelector(".f18__add-amount").value);
		let amountProgress = 0;
		if (document.querySelector(".f18__add-progress").value != '') {
			amountProgress = parseInt(document.querySelector(".f18__add-progress").value);
		}
		let date = document.querySelector(".f18__add-date").value;
		let year = parseInt(date.substring(0,4));
		let month = parseInt(date.substring(5,7));
		let day = parseInt(date.substring(8,10));
		// Validación
		if (name.length > 0 && amount > 0 && amount < 10000 && !date == "") {
			let calculated = calculateMath(year, month, day, amount, amountProgress);
			let timed = calculateDate(year, month, day);
			let key = document.querySelectorAll(".f18__update-div").length - 1;
			let idKey;
			if (key == -1) {
				idKey = 0;
			} else idKey = parseInt(document.querySelectorAll(".f18__update-div")[key].id) + 1;
			addObject({
				nombre: name,
				calculo: calculated,
				total: timed,
				cantidad: amount,
				tiempo: [day, month, year],
				valor: amountProgress,
				lock: [false, false]
			});
			document.querySelector(".f18__add-name").value = "";
			document.querySelector(".f18__add-amount").value = "";
			document.querySelector(".f18__add-date").value = "";
			document.querySelector(".f18__add-progress").value = "";
			let element = buildDiv(name, calculated, timed, amount, [day, month, year], idKey, amountProgress, [false, false]);
			document.querySelector(".f18__update__head-container").appendChild(element);
		} else {
			// Manejo de errores en la validación
			if (name.length == '') {
				let div = document.querySelectorAll(".f18__add-Div")[0];
				let error = div.children[2]
				div.classList.add("f18__add-error");
				error.classList.replace("f18__add__errorInactive","f18__add__errorActive");
			}
			if (isNaN(amount)) {
				let div = document.querySelectorAll(".f18__add-Div")[1];
				let error = div.children[2]
				error.classList.replace("f18__add__errorInactive","f18__add__errorActive");
				div.classList.add("f18__add-error");
			} else if (amount > 10000) {
				let div = document.querySelectorAll(".f18__add-Div")[1];
				let error = div.children[3]
				error.classList.replace("f18__add__errorInactive","f18__add__errorActive");
				div.classList.add("f18__add-error");
			}
			if (date == "") {
				let div = document.querySelectorAll(".f18__add-Div")[2];
				let error = div.children[2]
				error.classList.replace("f18__add__errorInactive","f18__add__errorActive");
				div.classList.add("f18__add-error");
			}
		}
	})
	// Check list primero
	document.querySelector(".f18__update-circleFront").addEventListener("click",()=>{
		if (document.querySelector(".f18__update-circleFront").style.fill == "rgb(204, 204, 204)") {
			document.querySelector(".f18__update-circleFront").style.fill = "#000";
			document.querySelector(".f18__update__header-delete").style.display = "block";
			document.querySelector(".f18__update__header-save").style.display = "block";
			calculatedCheck(true, document.querySelector(".f18__update-circleFront"), false);
		} else {
			document.querySelector(".f18__update-circleFront").style.fill = "#ccc";
			document.querySelector(".f18__update__header-delete").style.display = "none";
			document.querySelector(".f18__update__header-save").style.display = "none";
			calculatedCheck(false, document.querySelector(".f18__update-circleFront"), false);
		}
	})
	// Check list segundo
	document.querySelector(".f18__update__save-circleFront").addEventListener("click",()=>{
		if (document.querySelector(".f18__update__save-circleFront").style.fill == "rgb(204, 204, 204)") {
			document.querySelector(".f18__update__save-circleFront").style.fill = "#000";
			document.querySelector(".f18__update__save-delete").style.display = "block";
			document.querySelector(".f18__update__save-save").style.display = "block";
			calculatedCheck(true, document.querySelector(".f18__update-circleFront"), true);
		} else {
			document.querySelector(".f18__update__save-circleFront").style.fill = "#ccc";
			document.querySelector(".f18__update__save-delete").style.display = "none";
			document.querySelector(".f18__update__save-save").style.display = "none";
			calculatedCheck(false, document.querySelector(".f18__update-circleFront"), true);
		}
	})
	document.querySelector(".f18__update__header-delete").addEventListener("click",()=> selectCheck(0, 0));
	document.querySelector(".f18__update__header-save").addEventListener("click",() => selectCheck(0, 1));
	document.querySelector(".f18__update__save-delete").addEventListener("click",()=> selectCheck(1, 0));
	document.querySelector(".f18__update__save-save").addEventListener("click",() => selectCheck(1, 1));

	document.querySelector(".f18__update__header-svg").addEventListener("click",() => {
		contractDiv(document.querySelector(".f18__update__header-svg"));
	});
	document.querySelector(".f18__update__saved-svg").addEventListener("click",() => {
		contractDiv(document.querySelector(".f18__update__saved-svg"));
	});
}
