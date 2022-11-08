'use strict';
// Proyecto 1
const clickboton1 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="f1">
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
		document.querySelector(".result1").textContent = "Resultado: " + res;
	})
}
// Proyecto 2
const clickboton2 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="f2">
		<div class="f2__operatetor">
			<h4>Introduce tu operación</h4>
			<div class="f2__content">
				<div class="f2__firstValue">
					<input type="number" class="f2__firstValue-input" placeholder="1">
				</div>
				<div class="f2__unknown">.X^2+</div>
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
	const calculated = num => {'use strict';
		let arr = [];
		// Divisivilidad
		for (let i = 1; i <= num; i++) {
			if (num%i == 0 && i != 1 && i != num) {
				arr.push(i);
			}
		}
		// Reducir
		for (let i = arr.length; i > 0; i--) {
			if (arr[i] == 4 || arr[i] == 9 || arr[i] == 16 || arr[i] == 25 || arr[i] == 36 || arr[i] == 49 || arr[i] == 64 ||
				arr[i] == 81 || arr[i] == 100 || arr[i] == 121 || arr[i] == 144 || arr[i] == 169 || arr[i] == 196 ||
				arr[i] == 225 || arr[i] == 256 || arr[i] == 289 || arr[i] == 324 || arr[i] == 361 || arr[i] == 400 ||
				arr[i] == 441 || arr[i] == 484 || arr[i] == 529 || arr[i] == 576 || arr[i] == 625 || arr[i] == 676 ||
				arr[i] == 729 || arr[i] == 784 || arr[i] == 841 || arr[i] == 900) {
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
		if (document.querySelector(".f2__firstValue-input").value !== '') {
			a = parseInt(document.querySelector(".f2__firstValue-input").value);
		}
		if (document.querySelector(".f2__secondValue-input").value !== '') {
			b = parseInt(document.querySelector(".f2__secondValue-input").value);
		}
		if (document.querySelector(".f2__thirdValue-input").value !== '') {
			c = parseInt(document.querySelector(".f2__thirdValue-input").value);
		}
		if (document.querySelector(".f2__button-inactive")) {
			// ( -b +/- ^/(b * b - 4 * a * c) ) / 2 * a
			let oneValue, twoValue, threeValue, preAnswer;
			let content = document.createElement("p");
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
						let i = document.querySelectorAll(".f2__history p").length;
						content.textContent = `${i}: ${oneValue}.i, ${twoValue}.i`;
					} else {
						threeValue = (- b) /(2 * a);
						oneValue = (+ answer[0]) /(2 * a);
						twoValue = (- answer[0]) /(2 * a);
						let i = document.querySelectorAll(".f2__history p").length;
						content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]}.i ) /${2 * a}`;
					}
				} else {
					let answer = calculated(threeValue);
					threeValue = (- b) /(2 * a);
					oneValue = (+ answer[0]) /(2 * a);
					twoValue = (- answer[0]) /(2 * a);
					let i = document.querySelectorAll(".f2__history p").length;
					content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]} ) /${2 * a}`;
				}
			}
			else {
				oneValue = (- b + preAnswer) / (2 * a);
				twoValue = (- b - preAnswer) / (2 * a);
				let i = document.querySelectorAll(".f2__history p").length;
				content.textContent = `${i}: ${oneValue}, ${twoValue}`;
			}
			document.querySelector(".f2__history").appendChild(content);
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
const clickboton3 = () => {'use strict';
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
	const validarCantidad = () => {'use strict';
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
	document.querySelector(".f3__submit").addEventListener("click",()=> {'use strict';
		if (document.querySelector(".f3__error-active") == null && document.querySelector(".f3__amount-input").value != 0) {
			let cantidad = document.querySelector(".f3__amount-input").value;
			let listado = document.querySelector(".f3__listado-input").checked;
			let antes = document.querySelector(".f3__before-input").value;
			let answer;
			if (numberActive.className == "f3__numbers-input f3__button-active") {
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
const clickboton4 = () => {'use strict';
	console.log("2-(3-(3-(3-(3)))) "," 54−(6.5⋅2−(1−8)+(5x8)−3⋅6+5x4)+5");
	let container = document.querySelector(".desarrollo__div");
	const fragment4 = document.createDocumentFragment();
	let quest = [];
	let ac = false;
	let ans = 0;
	let history = 0;
	container.appendChild(fragment4);
	const separatOperators = array => {'use strict';
		// Seprar en multiplicación y división, atraves de la suma y resta
		let k = 0, temporal = [], retornar = [];
		for (let i = 0; i <= array.length - 1; i++) {
			if (!i == 0 && (array[i] == "+" || array[i] == "-")) {
				// Signo en medio de números
				k++;
				temporal = [];
				temporal.push(array[i]);
				retornar[k] = temporal;
			} else if (i == 0 && (array[i] == "+" || array[i] == "-")) {
				// El signo denfinido primero
				temporal = [];
				temporal.push(array[i]);
				retornar[k] = temporal;
			} else if (array[i] == "") {
				console.log("Error: " + temporal);
				// retornar[k] = temporal;
			} else {
				// Número
				temporal.push(array[i]);
				retornar[k] = temporal;
			}
		}
		return retornar;
	}
	const operateArrays = array => {'use strict';
		// Multiplicar y Divividir con signos Arrays
		let multiples = false, divisors = false, retornar = [], var1 = 1;
		for (let i = 0; i <= array.length - 1; i++) {
			var1 = 1;
			for (let a = 0; a <= array[i].length - 1; a++) {
				if (array[i][a] == "x" && array[i].length != 1) {
					multiples = true;
				} else if (array[i][a] == "/" && array[i].length != 1) {
					divisors = true;
				} else if (!a == 0 && array[i][a] == "(") {
					// Todo se invierte o mantiene
					var1 = 0;
				} else if (array[i][a] == ")" || array[i][a] == "(") {
					// Error
				} else if (array[i][a] == "-" && array[i].length != 1) {
					var1 = var1 * -1;
				} else if (array[i][a] == "+" && array[i].length != 1) {
					var1 = var1 * 1;
				} else if (multiples == true) {
					var1 = var1 * parseFloat(array[i][a]);
					multiples = false;
				} else if (divisors == true) {
					var1 = var1 / parseFloat(array[i][a]);
					divisors = false;
				} else if ((array[i][a] == "+" || array[i][a] == "-" || array[i][a] == "x" || array[i][a] == "/") &&
					array[i].length == 1) {
					var1 = array[i][a];
				} else if (array[i][a] == "ANS") {
					var1 = ans;
				} else {
					var1 = var1 * parseFloat(array[i][a]);
				}
			}
			retornar.push(var1);
		}
		return retornar
	}
	const determine = array => {'use strict';
		// Sumar y Restar
		let var1 = 0, retornar = [];
		for (let i = 0; i <= array.length - 1; i++) {
			if (array.length == 1) {
				var1 = array[i];
			} else {
				var1 += array[i];
			}
		}
		return var1;
	}
	const buttonValue = (btn,ctrl) => {'use strict';
		// detectar el valor del boton o key
		if (btn == "Backspace" || btn == "Enter" || btn == "DEL" || btn == "AC" || btn == "=") {
			if (btn == "Backspace" && ctrl == true) {
				options("AC");
			} else {
				options(btn);
			}
		} else if (btn == "0" || btn == "1" || btn == "2" || btn == "3" || btn == "4" || btn == "5" || btn == "6" || btn == "7" ||
			btn == "8" || btn == "9" || btn == "/" || btn == "*" || btn == "-" || btn == "+" || btn == "." || btn == "(" ||
			btn == ")" || btn == "x" || btn == "ANS") {
			let info = "", j = 0;
			if (ans && !quest.length && !ac && (btn == "/" || btn == "*" || btn == "-" || btn == "+")) {
				quest.push("ANS");
				if (btn == "*") {
					quest.push("x");
				} else quest.push(btn);
				for (let i = quest.length; i > 0; i--) {
					info += quest[j];
					j++;
				}
			} else {
				ac = false;
				if (btn == "*") {
					quest.push("x");
				} else quest.push(btn);
				for (let i = quest.length; i > 0; i--) {
					info += quest[j];
					j++;
				}
			}
			document.querySelector(".f4__window-operation").textContent = info;
		}
	}
	const options = btn => {'use strict';
		if (btn == "AC") {
			// Borrar Todo
			quest = [];
			ac = true;
			document.querySelector(".f4__window-operation").textContent = "";
			document.querySelector(".f4__window-answer").textContent = "0";
		} else if (btn == "DEL" || btn == "Backspace") {
			// Borrar
			quest.pop();
			let info = "", j = 0;
			for (let i = quest.length; i > 0; i--) {
				info += quest[j];
				j++;
			}
			document.querySelector(".f4__window-operation").textContent = info;
		} else if (btn == "Enter" || btn == "=") {
			// Operar
			let arr = [], answer = [];
			ac = false;
			if (quest.length == 0) {
				arr = history;
			} else if (quest.length > 0) {
			history = quest;
			arr = quest;
			quest = [];
			}
			// Juntar números
			let operation = [], text = "", j = 0, temporal = [];
			for (let i = 0; i < arr.length; i++) {
				if (!isNaN(parseFloat(arr[i])) || arr[i] == ".") {
					text += arr[i];
				} else {
					if (!text == "") {
						operation.push(text);
					}
					operation.push(arr[i]);
					text = "";
				}
				if (i == arr.length - 1) {
					operation.push(text);
				}
			}
			// Separar en parentesis
			let parentesis = false, number = false, sign = false, postSign = "";
			arr = [];
			for (let i = 0; i < operation.length; i++) {
				if ((operation[i] == "+" || operation[i] == "-" || operation[i] == "x" || operation[i] == "/") && parentesis == false) {
					// Si es una operación
					postSign = operation[i];
					sign = true;
				} else if ((operation[i] == "+"||operation[i] == "-"||operation[i] == "x" || operation[i] == "/")&&parentesis == true) {
					// Si es una operación luego de un parentesis
					j++;
					temporal = [];
					postSign = operation[i];
					temporal.push(postSign);
					arr[j] = postSign;
					j++;
					sign = true;
					temporal = [];
				} else if (operation[i] == "(" && sign == true && parentesis == false && number == false) {
					// Signo antes del parentesis. Principio
					temporal = []
					temporal.push(postSign);
					arr[j] = temporal;
					temporal = [];
					sign = false;
					j++;
				} else if (operation[i] == "(" && sign == true && parentesis == false) {
					// Signo antes del parentesis
					j++;
					temporal = []
					temporal.push(postSign);
					arr[j] = temporal;
					temporal = [];
					sign = false;
					j++;
				} else if (operation[i] == "(" && sign == true && parentesis == true) {
					// Signo en medio de parentesis
					parentesis = false;
				} else if (operation[i] == "(" && sign == false && i != 0) {
					// Multiplicación implicita
					arr[j] = temporal;
					j++;
					temporal = [];
					temporal.push("x");
					arr[j] = temporal;
					temporal = [];
					j++;
				} else if (operation[i] == ")") {
					// Activar el cierre de parentesis
					parentesis = true;
				} else if (operation[i] == "" || (operation[i] == "(" && sign == false && i == 0)) {
					// Ignorar. Manejo de errores.
				} else if (sign == true && parentesis == true) {
					// número despues de un signo y parentesis
					temporal.push(operation[i]);
					arr[j] = temporal;
				} else if (sign == true) {
					// número despues de un signo
					temporal.push(postSign);
					temporal.push(operation[i]);
					arr[j] = temporal;
					number = true;
				} else {
					// Si es un número
					temporal.push(operation[i]);
					arr[j] = temporal;
					number = true;
				}
			}
			// Operaciónes si hay parentesis
			let var1 = 1, k = 0, arrEnding = [];
			operation = [];
			// console.log("Array:", arr);
			for (let n = 0; n < arr.length; n++) {
				// Separar en Multiplicación y División
				operation = separatOperators(arr[n]);
				// console.log("Answer:", operation);
				// Multiplicar y Divividir con signos
				temporal = operateArrays(operation);
				// console.log("Answer:", temporal);
				operation = [];
				// Sumar y Restar
				var1 = determine(temporal);
				// console.log("Answer:", var1);
				arrEnding.push(var1);
				// console.log("Temporal: ", temporal);
			}
			// console.log("Answer:", arrEnding);
			// Separar en Multiplicación y División
			answer = separatOperators(arrEnding);
			// console.log("Answer:", answer);
			// Multiplicar y Divividir con signos
			answer = operateArrays(answer);
			// console.log("Answer:", answer);
			// Sumar y Restar
			answer = determine(answer);
			// console.log("Answer:", answer);
			if (answer == 0 && history == 0) {
				// Error
			} else {
			document.querySelector(".f4__window-answer").textContent = answer;
			ans = answer;
			let div = document.createElement("div");
			div.textContent = answer;
			document.querySelector(".f4__history-div").appendChild(div);
			}
		}
	}
	container.innerHTML = `
	<div class="f4">
		<div class="f4__window">
			<div class="f4__window-quest">
				<div class="f4__window-operation"></div>
				<div class="f4__window-text">_</div>
			</div>
			<div class="f4__window-answer">0</div>
		</div>
		<div class="f4__history">
			<h3 class="f4__history-h3">Historial</h3>
			<div class="f4__history-div"></div>
		</div>
		<div class="f4__buttons">
			<button class="f4__button-n"   value="7"  >7</button>
			<button class="f4__button-n"   value="8"  >8</button>
			<button class="f4__button-n"   value="9"  >9</button>
			<button class="f4__button-del" value="DEL">DEL</button>
			<button class="f4__button-ac" value="AC"  >AC</button>
			<button class="f4__button-n"   value="4"  >4</button>
			<button class="f4__button-n"   value="5"  >5</button>
			<button class="f4__button-n"   value="6"  >6</button>
			<button class="f4__button-n"   value="x"  >x</button>
			<button class="f4__button-n"   value="/"  >/</button>
			<button class="f4__button-n"   value="1"  >1</button>
			<button class="f4__button-n"   value="2"  >2</button>
			<button class="f4__button-n"   value="3"  >3</button>
			<button class="f4__button-n"   value="+"  >+</button>
			<button class="f4__button-n"   value="-"  >-</button>
			<button class="f4__button-n"   value="0"  >0</button>
			<button class="f4__button-n"   value="."  >•</button>
			<button class="f4__button-n"   value="("  >(</button>
			<button class="f4__button-n"   value=")"  >)</button>
			<button class="f4__button-n"   value="="  >=</button>
			<button class="f4__button-n"   value=" "  >√</button>
			<button class="f4__button-n"   value=" "  >x²</button>
			<button class="f4__button-n"   value=" "  >^</button>
			<button class="f4__button-n"   value=" "  >Exp</button>
			<button class="f4__button-n"   value="ANS">ANS</button>
		</div>
	</div>`;
	document.querySelectorAll(".f4__buttons button").forEach((button) => {
		button.addEventListener("click",()=>{
			buttonValue(button.value);
		})
	});
	document.addEventListener("keyup",(e)=>{
		buttonValue(e.key,e.ctrlKey);
	})
}
// Proyecto 5
const clickboton5 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	let alumnosTotales = [];
	let fragment1 = document.createDocumentFragment();
	let cantidad = prompt(`¿Cuántos alumnos son?`);
	let total = 15;
	let resta = total / 1.666;
	resta = Math.round(resta);

	const asistencia = (nombre,p,e) => {'use strict';
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
		if (alumnosTotales[alumno][0] >= resta) {
			resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br>";
		} else {resultado+= "<br>"}
		div5.innerHTML = resultado;
		fragment1.appendChild(div5);
	}
	container.appendChild(fragment1);
}
// Proyecto 6
const clickboton6 = () => {'use strict';
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
const clickboton7 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	let fragment1 = document.createDocumentFragment();
	const getInfo = (materia) => {'use strict';
		let materias = {
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
	const showMateria = (materia)=> {'use strict';
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
	const buildDiv = (materia) => {'use strict';
		let a = showMateria(materia);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const buildClases = (alumno) => {'use strict';
		let a = cantidadDeClases(alumno);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const cantidadDeClases = (alumno) => {'use strict';
		let info = getInfo();
		let clasesPresentes = [];
		let cantidadTotal = 0;
		for (let data in info) {
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
const clickboton8 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	// Funciones
	const buildForm = () => {'use strict';
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
	const validarForm = () => {'use strict';
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
const clickboton9 = () => {'use strict';
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
const clickboton10 = () => {'use strict';
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
const clickboton11 = () => {'use strict';
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
		<input type="button" class="f11__button" value="Stop">
	</div>`
	const addZeros = n => {'use strict';
		if (n.toString().length < 2) return "0".concat(n);
		return n;
	}
	const actualizarHora = () => {'use strict';
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
const clickboton12 = () => {'use strict';
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
	const definirIdioma = () => {'use strict';
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
	const cerrarModal = () => {'use strict';
		modal.style.animation = "desaparecer 1s forwards";
		modal.style.display = "none";
		remove.style.display = "initial";
	}
	const abrirModal = () => {'use strict';
		modal.style.animation = "aparecer 1s forwards";
		modal.style.display = "initial"
	}
	const eliminar = () => {'use strict';
		localStorage.removeItem("idioma");
		remove.style.display = "none";
	}
	let idioma = localStorage.getItem("idioma")
	if (idioma === null) {
		abrirModal();
		definirIdioma();
	}
	else {
		cerrarModal()
	}
}
// Proyecto 13
const clickboton13 = () => {'use strict';
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
	const transferirTextura = (n,e) => {'use strict';
		e.dataTransfer.setData("texture", n);
	}
}
// Proyecto 14
const clickboton14 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment14 = document.createDocumentFragment();
	container.appendChild(fragment14);
	container.innerHTML = `<div class="f14">
		<input type="file" class="f14__file" accept="image/png, .jpeg, .jpg, image/gif" multiple>
		<div class="f14__result"></div>
	</div>`;
	const readFile = file => {
		for (let i = 0; i < file.length; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(file[i])
			reader.addEventListener("load",(e)=>{
				let newImg = document.createElement("img");
				newImg.src = e.currentTarget.result;
				document.querySelector(".f14__result").appendChild(newImg);
			})
		}
	}
	document.querySelector(".f14__file").addEventListener("change",() => {
		readFile(document.querySelector(".f14__file").files);
	});
}
// Proyecto 15
const clickboton15 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const desarrollo = type => {'use strict';
		document.querySelector(".pregunta15").removeChild(document.querySelector(".select15"));
		document.querySelector(".pregunta15").removeChild(document.querySelector(".button15"));
		if (type == "text") {
			document.querySelector(".desarrollo15").innerHTML = `
			<div class="loading-bar15"></div>
			<div class="container15">Arrastre y Suelte un Archivo de texto</div>
			<div class="result15"></div>`;
		} else if (type == "img") {
			document.querySelector(".desarrollo15").innerHTML = `
			<div class="loading-bar15"></div>
			<div class="container15">Arrastre y Suelte una imagen</div>
			<div class="result15"></div>`;
		} else if (type == "video") {
			document.querySelector(".desarrollo15").innerHTML = `
			<div class="loading-bar15"></div>
			<div class="container15">Arrastre y Suelte un video</div>
			<div class="result15"></div>`;
		}
		const zona = document.querySelector(".container15");
		const resultado = document.querySelector(".result15");
		const loadingBar = document.querySelector(".loading-bar15")
		zona.addEventListener("dragover", e => {'use strict';
			e.preventDefault();
			changeStyle(e.srcElement, "#444");
		})
		zona.addEventListener("dragleave", e => {'use strict';
			e.preventDefault();
			changeStyle(e.srcElement, "#888");
		})
		const changeStyle = (obj, color) => {'use strict';
			obj.style.color = color;
			obj.style.border = `4px dashed ${color}`
		}
		if (type == "text") {
			zona.addEventListener("drop", e => {'use strict';
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				zona.style.border = "4px solid #888";
				const reader = new FileReader();
				reader.readAsText(e.dataTransfer.files[0]);
				reader.addEventListener("load", e => {'use strict';
					resultado.textContent = e.currentTarget.result;
				})
			})
		} else if (type == "img") {
			zona.addEventListener("drop", e => {'use strict';
				let file = e.dataTransfer.files[0]
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener("load", () => {'use strict';
					let url = URL.createObjectURL(file)
					let img = document.createElement("IMG");
					img.setAttribute("src", url);
					img.classList.add("img15");
					resultado.appendChild(img);
				})
				zona.style.border = "4px solid #888";
			})
		} else if (type == "video") {
			zona.addEventListener("drop", e => {'use strict';
				let file = e.dataTransfer.files[0];
				let mainStyleWidth = document.querySelector("main").style.width;
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsArrayBuffer(file);
				reader.addEventListener("progress", e => {'use strict';
					let carga = Math.round(e.loaded / file.size * 100);
					zona.textContent = `${carga}%`;
					loadingBar.style.padding = "75px 20px";
					if (mainStyleWidth <= "810px" && mainStyleWidth >= "500px") {
						loadingBar.style.width = `${carga/1.20}%`; //hasta el 83.2%;
					} else if (mainStyleWidth <= "500px" && mainStyleWidth >= "400px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 79.6%%;
					} else if (
						mainStyleWidth <= "400px"
						&& mainStyleWidth >= "350px"
						|| mainStyleWidth <= "400px"
						&& mainStyleWidth >= "350px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 74.2%;
					} else if (
						mainStyleWidth <= "350px" 
						&& mainStyleWidth >= "300px" 
						|| mainStyleWidth <= "809px" 
						&& mainStyleWidth >= "755px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 70.3%;
					} else if (mainStyleWidth >= "298px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 64.8%;
						loadingBar.style.height = `170px`;
					} else {
						loadingBar.style.width = `${carga/1.61}%`; //hasta el 62%;
					}
				})
				reader.addEventListener("loadend", e => {'use strict';
					changeStyle(zona, "#2e7");
					zona.style.borderStyle = "solid";
					loadingBar.style.background = "#2e7";
					setTimeout(() => {'use strict';
						zona.style.color = "#222";
						zona.style.animation = "aparecer 1s forwards";
						zona.textContent = "!Carga Completa!"
					},500)
				})
				reader.addEventListener("load", e => {'use strict';
					let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
					let url = URL.createObjectURL(video);
					let img = document.createElement("VIDEO");
					img.setAttribute("src", url);
					img.setAttribute("controls", true);
					img.classList.add("img15")
					resultado.appendChild(img);
					img.style.width = "calc(100vw - 145px)";
				})
				zona.style.border = "4px solid #888";
			})
		}
	}
	container.innerHTML = `
	<div class="pregunta15">
		<select class="select15">
			<option value="text">Texto</option>
			<option value="img">Imagenes</option>
			<option value="video">Videos</option>
		</select>
		<button class="button15">Aceptar</button>
	</div>
	<div class="desarrollo15"></div>`;
	let confirmar = document.querySelector(".button15")
	confirmar.addEventListener("click", e => {'use strict';
		let type = document.querySelector(".select15").value;
		desarrollo(type);
	})
}
// Proyecto 16
const clickboton16 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="add-names"><input type="text" id="name" placeholder="Introduce un nombre"><button id="add">Añadir</button></div>
	<div class="names"></div>`;
	const IDBRequest = indexedDB.open("daltobase",1);
	IDBRequest.addEventListener("upgradeneeded",()=> IDBRequest.result.createObjectStore("name",{autoIncrement: true}))
	IDBRequest.addEventListener("success",() => readObject())
	IDBRequest.addEventListener("error",() => alert("ocurrio un error al abrir la base de datos"))
	document.getElementById("add").addEventListener("click",()=> {'use strict';
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
	const addObject = object => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto agregado correctamente");
		IDBData.add(object);
	}
	const readObject = () => {'use strict';
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
	const modificarObject = (key, object) => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto modificado correctamente");
		IDBData.put(object, key);
	}
	const eliminarObject = key => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto eliminado correctamente");
		IDBData.delete(key);
	}
	const transactionOperation = (mode,msg) => {'use strict';
		const IDBTransaction = IDBRequest.result.transaction("name",mode);
		const objectStore = IDBTransaction.objectStore("name");
		// IDBTransaction.addEventListener("complete",()=>{
		// 	if (msg) alert.log(msg)
		// })
		return objectStore;
	}
	const nameHTML = (id, result) => {'use strict';
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
// Proyecto 17
const clickboton17 = () => {'use strict';
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
			{"nombre": "Eres Tu Danilo Montero",
			"contenido": "Declaralo esta noche así. Jesús tu eres el amigo que me ama, Jesús tu eres la esperanza de mi vida, Eer."},
			{"nombre": "Te veo",
			"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
			}
		]
	}
	const createPublicationCode = (name,content) => {'use strict';
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
	const cargarMasPublicaciones = entry => {'use strict';
		if (entry[0].isIntersecting) cargarPublicaciones(5)
	}
	const crearPublicacion = (arr,num) => {
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
	const observer = new IntersectionObserver(cargarMasPublicaciones)
	const cargarPublicaciones = async num => {'use strict';
		try {
			const request = await fetch("txt/f17.txt");
			const contain = await request.json();
			const arr = contain.content;
			crearPublicacion(arr,num);
		}
		catch(e) {
			console.log(e);
			const contain = filetxt; // Archivo aparte de texto
			const arr = contain.content;
			crearPublicacion(arr,num);
		}
	}
	cargarPublicaciones(10);
}
// Proyecto 18
const clickboton18 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment18 = document.createDocumentFragment();
	container.innerHTML = `
		<div class="div18">
			<div>Número de IP:</div>
			<input type="text" class="number18" placeholder="127.0.0.1">
			<div>Cantidad Deseada:</div>
			<input type="number" class="amount18">
			<div class="result18"></div>
			<div>Rellenar con HTTPS:
				<input type="checkbox" class="boolean18">
			</div>
			<input type="submit" class="button18">
		</div>`;
	document.querySelector(".button18").addEventListener("click",()=>{
		let amount = document.querySelector(".amount18").value;
		const node = document.createElement("div");
		for (let i = 0; i < amount; i++) {
			let number = document.querySelector(".number18").value;
			if (number == "") number = "127.0.0.1";
			let result = prompt("Dime tu URL:");
			let space = String.fromCharCode(160) + '\xa0' + '\xa0' + '\xa0' + '\xa0' + '\xa0' + '\xa0';
			let p0 = document.createElement("div");
			let p1 = document.createElement("div");
			if (document.querySelector(".boolean18").checked) {
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
			fragment18.appendChild(node);
		}
		container.removeChild(document.querySelector(".div18"))
		container.appendChild(fragment18);
	})
}
// Proyecto 19
const clickboton19 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment19 = document.createDocumentFragment();
	const IDBRequest = indexedDB.open("reader",2);
	const addObject = object => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto agregado correctamente");
		IDBData.add(object);
	}
	const readObject = () => {'use strict';
		const IDBData = transactionOperation("readonly");
		const cursor = IDBData.openCursor();
		const fragment = document.createDocumentFragment();
		cursor.addEventListener("success",()=>{
			if (cursor.result) {
				let c = cursor.result.value;
				let element = buildDiv(c.nombre, c.calculo, c.total, c.cantidad, c.tiempo, cursor.result.key, c.valor, c.lock);
				if (c.lock[0] == true) {
					document.querySelector(".f19__update__saved-content").appendChild(element);
				} else {
					document.querySelector(".f19__update__head-container").appendChild(element);
				}
				cursor.result.continue();
			}
		})
	}
	const modificarObject = (key, object) => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto modificado correctamente");
		IDBData.put(object, key);
	}
	const eliminarObject = key => {'use strict';
		const IDBData = transactionOperation("readwrite","Objeto eliminado correctamente");
		IDBData.delete(key);
	}
	const transactionOperation = (mode,msg) => {'use strict';
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
	const calculatePorcentaje = (amount,value) => {'use strict';
		let progress, result;
		if (value == undefined) {
			progress = document.querySelector(".f19__update-percentageInput").value;
			result = (progress * 100) / amount;
		} else result = (value * 100) / amount;
		return result;
	}
	const buildDiv = (name, calculate, timed, amount, tiempo, id, value, block) => {'use strict';
		let nameClass = "f19__update";
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
			buttonToUpdate.classList.replace("f19__update-toUpdate","f19__update-toUpdated");
		}
		checkFront.addEventListener("click",()=>{
			if (checkFront.style.fill == "rgb(204, 204, 204)") {
				checkFront.style.fill = "#000";
				calculatedCheck(true, checkFront, block[0]);
				if (!block[0]) {
					document.querySelector(".f19__update__header-delete").style.display = "block";
					document.querySelector(".f19__update__header-save").style.display = "block";
				} else {
					document.querySelector(".f19__update__save-delete").style.display = "block";
					document.querySelector(".f19__update__save-save").style.display = "block";
				}
			} else {
				checkFront.style.fill = "#ccc";
				calculatedCheck(false, checkFront, block[0]);
				if (document.querySelector(".f19__update-circleFront").style.fill == "rgb(204, 204, 204)" && !block[0]) {
					document.querySelector(".f19__update__header-delete").style.display = "none";
					document.querySelector(".f19__update__header-save").style.display = "none";
				} else {
					document.querySelector(".f19__update__save-save").style.display = "none";
					document.querySelector(".f19__update__save-delete").style.display = "none";
				}
			}
		})
		h4.addEventListener("keyup",()=>{
			if (!block[1]) {
				buttonToSave.classList.replace("f19__update-saved","f19__update-save");
				buttonToUpdate.classList.replace("f19__update-toUpdate","f19__update-toUpdated");
			}
		})
		percentageInput.addEventListener("keyup",()=>{
			if (!block[1]) {
				buttonToSave.classList.replace("f19__update-saved","f19__update-save");
				buttonToUpdate.classList.replace("f19__update-toUpdate","f19__update-toUpdated");
			}
		})
		buttonToSave.addEventListener("click",()=>{
			if (buttonToSave.className == "f19__update-save") {
				modificarObject(id,{
					nombre: h4.textContent,
					calculo: calculate,
					cantidad: amount,
					total: timed,
					tiempo: tiempo,
					valor: percentageInput.value,
					lock: block
				})
				buttonToUpdate.classList.replace("f19__update-toUpdated","f19__update-toUpdate");
				buttonToSave.classList.replace("f19__update-save","f19__update-saved");
			}
		})
		buttonToUpdate.addEventListener("click",() => {'use strict';
			if (buttonToSave.className == "f19__update-saved") {
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
					buttonToUpdate.classList.replace("f19__update-toUpdate","f19__update-toUpdated");
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
				if (block[0] == false) document.querySelector(".f19__update__head-container").removeChild(container);
				else document.querySelector(".f19__update__saved-content").removeChild(container);
			}
		})
		pathUnlock.addEventListener("click",()=>{
			if (percentageNumber >= 100 && buttonToSave.className == "f19__update-saved") {
				if (window.confirm("¿Quiéres Bloquear está lectura?")) {
					buttonToUpdate.classList.replace("f19__update-toUpdate","f19__update-toUpdated");
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
			} else if (buttonToSave.className == "f19__update-save") {
				alert("Hay cambios sin guardar");
			}
		})
		return container;
	}
	const checkMonth = (month, year) => {'use strict';
		if (month == 1 || month == 3 || month == 5 || month == 7  || month == 8  || month == 10  || month == 12) return 31;
		else if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
		else if (month == 2 && year%4 == 0 && year%400 == 0 && !year%100 == 0) return 29;
		else return 28;
	}
	const checkYear = year => {'use strict';
		if (year%4 == 0 && year%400 == 0 && !year%100 == 0) return 366;
		else return 365;
	}
	const calculateDate = (year, month, day) => {'use strict';
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
	const calculatePerformance = (amount, year, month, day) => {'use strict';
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
	const calculateMath = (year, month, day, amount, amountProgress) => {'use strict';
		amount = amount - amountProgress;
		let today = new Date();
		let todayYear = today.getYear() + 1900;
		let todayMonth = today.getMonth() + 1;
		let todayDay = today.getDate();
		let yearToDay = 0, monthToDay = 0, newDay, newMonth, newYear;

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
	const calculatedCheck = (bollean, origin, space) => {'use strict';
		let allDivs = document.querySelectorAll('.f19__update__head-container .f19__update-div');
		let nameClass = ".f19__update-optionsMaths .f19__update-main .f19__update-check .f19__update-checkFront";
		if (space) allDivs = document.querySelectorAll('.f19__update__saved-content .f19__update-div');
		if (origin.className.animVal == "f19__update-circleFront" || origin.className.animVal == "f19__update__save-circleFront") {
			for (let i = allDivs.length - 1; i >= 0; i--) {
			let divCheck = allDivs[i].querySelector(nameClass);
				if (bollean) {
					divCheck.style.fill = "#000";
				} else {
					divCheck.style.fill = "#ccc";
				}
			}
		} else {
			for (let i = allDivs.length - 1; i >= 0; i--) {
			let divCheck = allDivs[i].querySelector(nameClass);
				if (divCheck.style.fill == "rgb(204, 204, 204)") {
					bollean = false;
				} else {
					bollean = true;
					break;
				}
			}
			if (bollean) {
				if (!space) document.querySelector(".f19__update-circleFront").style.fill = "#000";
				else document.querySelector(".f19__update__save-circleFront").style.fill = "#000";
			} else {
				if (!space) {
					document.querySelector(".f19__update-circleFront").style.fill = "#ccc";
					document.querySelector(".f19__update__header-delete").style.display = "block";
					document.querySelector(".f19__update__header-save").style.display = "block";
				} else {
					document.querySelector(".f19__update__save-circleFront").style.fill = "#ccc";
					document.querySelector(".f19__update__save-delete").style.display = "block";
					document.querySelector(".f19__update__save-save").style.display = "block";
				}
			}
		}
	}
	const selectCheck = (space,type) => {'use strict';
		let text, nameClass = ".f19__update-optionsMaths .f19__update-main .f19__update-check .f19__update-checkFront";
		if (type == 0) text = "¿Seguro que quieres proceder a Eliminar?";
		else if (type == 1 && space == 0) text = "¿Seguro que quieres proceder a Archivar?";
		else text = "¿Seguro que quieres proceder a Desarchivar?";
		if (window.confirm(text)) {
			let arr = [], divs = [], allDivs;
			if (space == 0) allDivs = document.querySelectorAll('.f19__update__head-container .f19__update-div');
			else allDivs = document.querySelectorAll('.f19__update__saved-content .f19__update-div');
			// Recoge todos los ids seleccionados
			for (let i = allDivs.length - 1; i >= 0; i--) {
				let divCheck = allDivs[i].querySelector(nameClass);
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
						document.querySelector(".f19__update__head-container").removeChild(divs[i]);
						document.querySelector(".f19__update-circleFront").style.fill = "#ccc";
					}
					else {
						document.querySelector(".f19__update__saved-content").removeChild(divs[i]);
						document.querySelector(".f19__update__save-circleFront").style.fill = "#ccc";
					}
				}
				// Archiva
				else if (type == 1) {
					let obj = [];					
					obj.push(divs[i].querySelector(".f19__update-name").textContent);
					obj.push(divs[i].querySelector(".f19__update-recommendation").textContent);
					let temporal = divs[i].querySelector(".f19__update-percentageEntire").textContent.split("/");
					obj.push(parseInt(temporal[1]));
					obj.push(divs[i].querySelector(".f19__update-calculateTime").textContent);
					temporal = divs[i].querySelector(".f19__update-time").textContent.split("/");
					temporal = [parseInt(temporal[0]),parseInt(temporal[1]),parseInt(temporal[2])]
					obj.push(temporal);
					obj.push(divs[i].querySelector(".f19__update-percentageInput").value);
					if (space == 0) temporal = true;
					else temporal = false;
					obj.push(temporal);
					if (divs[i].querySelector(".f19__update-lock").style.display == "block") temporal = true;
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
					divs[i].querySelector(".f19__update-checkFront").style.fill = "#ccc";
				}
				if (space == 0 && type == 1) {
					document.querySelector(".f19__update-circleFront").style.fill = "#ccc";
					document.querySelector(".f19__update__head-container").removeChild(divs[i]);
					document.querySelector(".f19__update__saved-content").appendChild(divs[i]);
					document.querySelector(".f19__update__header-save").style.display = "none";
					document.querySelector(".f19__update__header-delete").style.display = "none";
				}
				else if (space == 1 && type == 1) {
					document.querySelector(".f19__update__save-circleFront").style.fill = "#ccc";
					document.querySelector(".f19__update__saved-content").removeChild(divs[i]);
					document.querySelector(".f19__update__head-container").appendChild(divs[i]);
					document.querySelector(".f19__update__save-save").style.display = "none";
					document.querySelector(".f19__update__save-delete").style.display = "none";
				}
			}
		}
	}
	const contractDiv = svg => {'use strict';
		let css = svg.style;
		if (css.transform == "rotateZ(0deg)") {
			css.transform = "rotateZ(-90deg)";
			if (svg.className.animVal == "f19__update__header-svg") {
				document.querySelector(".f19__update__title").style.display = "none";
				document.querySelector(".f19__update__head-container").style.display = "none";
			} else {
				document.querySelector(".f19__update__save__title").style.display = "none";
				document.querySelector(".f19__update__saved-content").style.display = "none";
			}
		} else {
			css.transform = "rotateZ(0deg)";
			if (svg.className.animVal == "f19__update__header-svg") {
				if (document.querySelector(".desarrollo__div").clientWidth >= 886) {
					document.querySelector(".f19__update__title").style.display = "grid";
				}
				document.querySelector(".f19__update__head-container").style.display = "flex";
			} else {
				if (document.querySelector(".desarrollo__div").clientWidth >= 886) {
					document.querySelector(".f19__update__save__title").style.display = "grid";
				}
				document.querySelector(".f19__update__saved-content").style.display = "flex";
			}
		}
	}
	// Añadir
	container.innerHTML = `
		<div class="f19">
			<div class="f19__add">
				<div class="f19__add-Div">
					<h3>Nombre de la lectura</h3>
					<input type="text" class="f19__add-name" spellcheck="false">
					<p style="display: none">El nombre esta incompleto</p>
				</div>
				<div class="f19__add-Div">
					<h3>Cantidad de páginas</h3>
					<input type="number" class="f19__add-amount">
					<p style="display: none">La cantidad esta incompleta</p>
					<p style="display: none">La cantidad no es válida</p>
				</div>
				<div class="f19__add-Div">
					<h3>Fecha de entrega</h3>
					<input type="date" class="f19__add-date">
					<p style="display: none">La fecha esta incompleta</p>
				</div>
				<div class="f19__add-Div">
					<h3>Páginas avanzadas</h3>
					<input type="number" class="f19__add-progress" placeholder="0">
				</div>
				<div class="f19__add-Div">
					<input type="submit" class="f19__add-submit">
				</div>
			</div>
			<div class="f19__update">
				<div class="f19__update__head">
					<div class="f19__update__header">
						<svg class="f19__update__header-svg" viewbox="0 0 10 10" class="svg">
							<polygon points=".8,2.5 5,10 9.2,2.5"fill="black"/>
						</sgv>
						<h3>Lecturas</h3>
						<div class="f19__update__header-buttons">
							<button class="f19__update__header-save" style="display: none">Archivar</button>
							<button class="f19__update__header-delete" style="display: none">Eliminar</button>
						</div>
					</div>
					<div class="f19__update__title">
						<svg class="f19__update__title-svg">
							<circle class="f19__update-circleBack" cx="5" cy="5" r="4.8"></circle>
							<circle class="f19__update-circleFront" cx="5" cy="5" r="3.5" style="fill:#ccc"></circle>
						</svg>
						<div class="f19__update__title-name">Nombre</div>
						<div class="f19__update__title-calculateTime">Tiempo Restante</div>
						<div class="f19__update__title-recommendation">Proporción</div>
						<div class="f19__update__title-time">Restante</div>
						<div class="f19__update__title-percentage">Porcentaje</div>
						<div class="f19__update__title-options">Opciones</div>
					</div>
				<div class="f19__update__head-container"></div>
				</div>
				<div class="f19__update__save">
					<div class="f19__update__saved">
						<svg class="f19__update__saved-svg" viewbox="0 0 10 10" class="svg">
							<polygon points=".8,2.5 5,10 9.2,2.5"fill="black"/>
						</sgv>
						<h3>Archivados</h3>
						<div class="f19__update__header-buttons">
							<button class="f19__update__save-save" style="display: none">Desarchivar</button>
							<button class="f19__update__save-delete" style="display: none">Eliminar</button>
						</div>
					</div>
					<div class="f19__update__save__title" style="display: none">
						<svg class="f19__update__title-svg">
							<circle class="f19__update__save-circleBack" cx="5" cy="5" r="4.8"></circle>
							<circle class="f19__update__save-circleFront" cx="5" cy="5" r="3.5" style="fill:#ccc"></circle>
						</svg>
						<div class="f19__update__save__title-name">Nombre</div>
						<div class="f19__update__save__title-calculateTime">Tiempo Restante</div>
						<div class="f19__update__save__title-recommendation">Proporción</div>
						<div class="f19__update__save__title-time">Restante</div>
						<div class="f19__update__save__title-percentage">Porcentaje</div>
						<div class="f19__update__save__title-options">Opciones</div>
					</div>
					<div class="f19__update__saved-content" style="display: none"></div>
				</div>
			</div>
		</div>`;
	// Ejecutar
	document.querySelector(".f19__add-submit").addEventListener("click",()=>{
		let name = document.querySelector(".f19__add-name").value;
		let amount = parseInt(document.querySelector(".f19__add-amount").value);
		let amountProgress = 0;
		if (document.querySelector(".f19__add-progress").value != '') {
			amountProgress = parseInt(document.querySelector(".f19__add-progress").value);
		}
		let date = document.querySelector(".f19__add-date").value;
		let year = parseInt(date.substring(0,4));
		let month = parseInt(date.substring(5,7));
		let day = parseInt(date.substring(8,10));
		// Validación
		if (name.length > 0 && amount > 0 && amount < 10000 && !date == "") {
			let calculated = calculateMath(year, month, day, amount, amountProgress);
			let timed = calculateDate(year, month, day);
			let key = document.querySelectorAll(".f19__update-div").length - 1;
			let idKey;
			if (key == -1) {
				idKey = 0;
			} else idKey = parseInt(document.querySelectorAll(".f19__update-div")[key].id) + 1;
			addObject({
				nombre: name,
				calculo: calculated,
				total: timed,
				cantidad: amount,
				tiempo: [day, month, year],
				valor: amountProgress,
				lock: [false, false]
			});
			document.querySelector(".f19__add-name").value = "";
			document.querySelector(".f19__add-amount").value = "";
			document.querySelector(".f19__add-date").value = "";
			document.querySelector(".f19__add-progress").value = "";
			let element = buildDiv(name, calculated, timed, amount, [day, month, year], idKey, amountProgress, [false, false]);
			document.querySelector(".f19__update__head-container").appendChild(element);
		} else {
			// Manejo de errores en la validación
			let div = document.querySelectorAll(".f19__add-Div");
			document.querySelector(".f19__add").classList.add("f19__add__error-content");
			if (name.length == '') {
				let error = div[0].children[2];
				div[0].classList.add("f19__add-error");
				error.style.display = "block";
			}
			if (isNaN(amount)) {
				let error = div[1].children[2];
				div[1].classList.add("f19__add-error");
				error.style.display = "block";
			} else if (amount > 10000) {
				let error = div[1].children[3];
				div[1].classList.add("f19__add-error");
				error.style.display = "block";
			}
			if (date == "") {
				let error = div[2].children[2];
				div[2].classList.add("f19__add-error");
				error.style.display = "block";
			}
		}
	})
	// Check list primero
	document.querySelector(".f19__update-circleFront").addEventListener("click",()=>{
		if (document.querySelector(".f19__update-circleFront").style.fill == "rgb(204, 204, 204)") {
			document.querySelector(".f19__update-circleFront").style.fill = "#000";
			document.querySelector(".f19__update__header-delete").style.display = "block";
			document.querySelector(".f19__update__header-save").style.display = "block";
			calculatedCheck(true, document.querySelector(".f19__update-circleFront"), false);
		} else {
			document.querySelector(".f19__update-circleFront").style.fill = "#ccc";
			document.querySelector(".f19__update__header-delete").style.display = "none";
			document.querySelector(".f19__update__header-save").style.display = "none";
			calculatedCheck(false, document.querySelector(".f19__update-circleFront"), false);
		}
	})
	// Check list segundo
	document.querySelector(".f19__update__save-circleFront").addEventListener("click",()=>{
		if (document.querySelector(".f19__update__save-circleFront").style.fill == "rgb(204, 204, 204)") {
			document.querySelector(".f19__update__save-circleFront").style.fill = "#000";
			document.querySelector(".f19__update__save-delete").style.display = "block";
			document.querySelector(".f19__update__save-save").style.display = "block";
			calculatedCheck(true, document.querySelector(".f19__update-circleFront"), true);
		} else {
			document.querySelector(".f19__update__save-circleFront").style.fill = "#ccc";
			document.querySelector(".f19__update__save-delete").style.display = "none";
			document.querySelector(".f19__update__save-save").style.display = "none";
			calculatedCheck(false, document.querySelector(".f19__update-circleFront"), true);
		}
	})
	document.querySelector(".f19__update__header-delete").addEventListener("click",()=> selectCheck(0, 0));
	document.querySelector(".f19__update__header-save").addEventListener("click",() => selectCheck(0, 1));
	document.querySelector(".f19__update__save-delete").addEventListener("click",()=> selectCheck(1, 0));
	document.querySelector(".f19__update__save-save").addEventListener("click",() => selectCheck(1, 1));

	document.querySelector(".f19__update__header-svg").addEventListener("click",() => {'use strict';
		contractDiv(document.querySelector(".f19__update__header-svg"));
	});
	document.querySelector(".f19__update__saved-svg").addEventListener("click",() => {'use strict';
		contractDiv(document.querySelector(".f19__update__saved-svg"));
	});
}
// Proyecto 20
const clickboton20 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment20 = document.createDocumentFragment();
	container.appendChild(fragment20);
	container.innerHTML = `
	<div class="f20__editor">
		<canvas class="f20__canvas" width="500px" height="150px"></canvas>
		<div>
			<input type="color" id="f20__color">
			<input type="range" id="f20__lw" min="1" max="8">
		</div>
	</div>`;
	const canvas = document.querySelector('.f20__canvas');
	const dif = canvas.getBoundingClientRect();
	const ctx = canvas.getContext('2d');
	let painting,color,linewidth,difX,difY;

	const dibujar = (x1,y1,x2,y2) => {
		ctx.strokeStyle = color;
		ctx.lineWidth = linewidth;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
	}
	canvas.addEventListener('mousedown',(e)=>{
		difX = e.clientX - dif.left;
		difY = e.clientY - dif.top;
		painting = true;
		color = document.getElementById('f20__color').value;
		linewidth = document.getElementById('f20__lw').value;
		ctx.beginPath();
	});
	canvas.addEventListener('mousemove',(e)=>{
		if (painting) {
			dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top)
			difX = e.clientX - difX.left;
			difY = e.clientY - difY.top;
		}
	})
	canvas.addEventListener('mouseup',(e)=>{
		ctx.closePath();
		painting = false;
	});
	document.querySelector(".desarrollo__div").addEventListener("mouseup",(e)=>{if (painting) painting = false});
}
// Proyecto 21
const clickboton21 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment21 = document.createDocumentFragment();
	const seno = num => {
		if (num % 180 == 0) {
			return 0
		} else {
			num *= Math.PI/180;
			let y = Math.sin(num);
			return y;
		}
	}
	const tang = num => {
		if (num % 180 == 0) {
			return 0
		} else {
			num *= Math.PI/180;
			let y = Math.tan(num);
			return y;
		}
	}
	const rectas = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.type = "submit";
		submit.addEventListener("click",()=>{
		})
		div.appendChild(submit);
		return div;
	}
	const circulo = () => {
		let div = document.createElement('div');
		let inputRadius = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputRadius.type = "number";
		inputRadius.placeholder = "Radio";
		submit.type = "submit";
		submit.addEventListener("click",()=>{
			// pi * radio^2
			let radio = inputRadius.value
			if (radio != "") {
				let answer = radio * radio * Math.PI;
				let answerDiv = document.createElement("div");
				answerDiv.textContent = `Radio: ${radio}, Área: ${answer}`;
				document.querySelector(".f21__develop div").appendChild(answerDiv);
			}
		})
		div.appendChild(inputRadius);
		div.appendChild(submit);
		return div;
	}
	const ovalo = () => {
		let div = document.createElement('div');
		let inputMinorRadius = document.createElement("INPUT");
		let inputManjorRadius = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputMinorRadius.type = "number";
		inputMinorRadius.placeholder = "Radio menor";
		inputManjorRadius.type = "number";
		inputManjorRadius.placeholder = "Radio mayor";
		submit.type = "submit";
		submit.addEventListener("click",()=>{
			// pi * radio^2
			let radioMenor = inputMinorRadius.value;
			let radioMayor = inputManjorRadius.value;
			if (radioMenor != "" && radioMayor != "") {
				let answer = Math.PI * radioMenor * radioMayor;
				let answerDiv = document.createElement("div");
				answerDiv.textContent = `Radio menor: ${radioMenor} Radio mayor: ${radioMayor}, Área: ${answer}`;
				document.querySelector(".f21__develop div").appendChild(answerDiv);
			}
		})
		div.appendChild(inputMinorRadius);
		div.appendChild(inputManjorRadius);
		div.appendChild(submit);
		return div;
	}
	const sectorCircular = () => {
		let div = document.createElement('div');
		let inputAngle = document.createElement("INPUT");
		let inputRadius = document.createElement("INPUT");
		let inputLength = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputAngle.type = "number";
		inputAngle.placeholder = "Ángulo Sexagesimal";
		inputRadius.type = "number";
		inputRadius.placeholder = "Radio";
		inputLength.type = "number";
		inputLength.placeholder = "Longitud de arco";
		submit.type = "submit";
		submit.addEventListener("click",()=>{
			// (pi*angle*r^2)/360 || (l*r)/2 || l^2/2*angle
			// pi * radio^2 * a/360
			let angulo = inputAngle.value;
			let radio = inputRadius.value;
			let longitudArco = inputLength.value;
			if (!(angulo != "" && radio != "" && longitudArco != "") && 
				((angulo != "" && radio != "") || (radio != "" && longitudArco != "") || (longitudArco != "" && angulo != ""))) {
				angulo = parseFloat(angulo);
				if (angulo >= 360) {
					let multipo = parseInt(angulo / 360);
					angulo = angulo - (multipo * 360);
				}
				let answerDiv = document.createElement("div");
				if ((!isNaN(angulo) || angulo == 0) && radio != "") {
					let answer = (angulo * radio * radio * Math.PI) / 360;
					answerDiv.textContent = `Ángulo: ${angulo}, Radio: ${radio}, Área: ${answer}`;
				} else if (radio != "" && longitudArco != "") {
					let answer = (radio * longitudArco) / 2;
					answerDiv.textContent = `Longitud de Árco: ${longitudArco}, Radio: ${radio}, Área: ${answer}`;
				} else if (longitudArco != "" && (angulo != "" || angulo == 0)) {
					let answer = (longitudArco * longitudArco) / (2 * angulo);
					answerDiv.textContent = `Longitud de Árco: ${longitudArco}, Ángulo: ${angulo}, Área: ${answer}`;
				}
				document.querySelector(".f21__develop div").appendChild(answerDiv);
			}
		})
		div.appendChild(inputAngle);
		div.appendChild(inputRadius);
		div.appendChild(inputLength);
		div.appendChild(submit);
		return div;
	}
	const triangulo = () => {
		let div = document.createElement('div');
		let inputBase = document.createElement("INPUT");
		let inputHeight = document.createElement("INPUT");
		let inputAngle = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputBase.setAttribute("type","number");
		inputBase.setAttribute("placeholder","Primer lado");
		inputHeight.setAttribute("type","number");
		inputHeight.setAttribute("placeholder","Segundo lado");
		inputAngle.setAttribute("type","number");
		inputAngle.setAttribute("placeholder","Ángulo del tercer lado (90°)");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			// Base * height / 2 if angle is 90
			//1/2 * Base * height * sen(angle)
			let answerDiv = document.createElement("div");
			let base = inputBase.value;
			let height = inputHeight.value;
			let angulo = inputAngle.value;
			if (base != "" && height != "" && angulo == "") {
				let answer = base * height * seno(90) / 2;
				answerDiv.textContent = `Primer lado: ${base}, Segundo lado: ${height}, Ángulo: ${90}, Área: ${answer}`;
			} else if (base != "" && height != "" && angulo != "") {
				let answer = base * height * seno(angulo) / 2;
				answerDiv.textContent = `Primer lado: ${base}, Segundo lado: ${height}, Ángulo: ${angulo}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(inputBase);
		div.appendChild(inputHeight);
		div.appendChild(inputAngle);
		div.appendChild(submit);
		return div;
	}
	const segmentoCircular = () => {
		let div = document.createElement('div');
		let inputRadius = document.createElement("INPUT");
		let inputAngle = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputAngle.setAttribute("type","number");
		inputRadius.setAttribute("type","number");
		inputRadius.setAttribute("placeholder","Radio");
		inputAngle.setAttribute("placeholder","Angulo Sexagesimal");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			// A = AreaSectorCircular - ATriangulo
			// pi * radio^2 * a/360 - lenght * height / 2
			let answerDiv = document.createElement("div");
			let radio = inputRadius.value;
			let angulo = inputAngle.value;
			if (radio != "" && angulo != "") {
				angulo = parseFloat(angulo);
				if (angulo >= 360) {
					let multipo = parseInt(angulo / 360);
					angulo = angulo - (multipo * 360);
				}
				let answer = ((Math.PI * radio * radio * angulo) / 360) - (radio * radio * seno(angulo) / 2);
				answerDiv.textContent = `Ángulo: ${angulo}, Radio: ${radio}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(inputRadius);
		div.appendChild(inputAngle);
		div.appendChild(submit);
		return div;
	}
	const trapecioCircular = () => {
		let div = document.createElement('div');
		let inputAngle = document.createElement("INPUT");
		let inputMinorRadius = document.createElement("INPUT");
		let inputManjorRadius = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		inputAngle.setAttribute("type","number");
		inputAngle.setAttribute("placeholder","Ángulo");
		inputMinorRadius.setAttribute("type","number");
		inputMinorRadius.setAttribute("placeholder","Radio menor");
		inputManjorRadius.setAttribute("type","number");
		inputManjorRadius.setAttribute("placeholder","Radio mayor");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			// (pi*(R^2-r^2)*a)/360
			let answerDiv = document.createElement("div");
			let angulo = inputAngle.value;
			let radioMenor = inputMinorRadius.value;
			let radioMayor = inputManjorRadius.value;
			if (angulo != "" && radioMenor != "" && radioMayor != "" && radioMenor < radioMayor) {
				angulo = parseFloat(angulo);
				if (angulo >= 360) {
					let multipo = parseInt(angulo / 360);
					angulo = angulo - (multipo * 360);
				}
				let answer = Math.PI * ((radioMayor ** 2) - (radioMenor ** 2)) * angulo / 360;
				answerDiv.textContent = `Ángulo: ${angulo}, Radio Mayor: ${radioMayor}, Radio Menor: ${radioMenor}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(inputAngle);
		div.appendChild(inputMinorRadius);
		div.appendChild(inputManjorRadius);
		div.appendChild(submit);
		return div;
	}
	const cuadrilatero = () => {
		// document
		let div = document.createElement('div');
		// let canvas = document.createElement('canvas');
		let inputAngleOne = document.createElement("INPUT");
		let inputAngleTwo = document.createElement("INPUT");
		// let inputLengthOne = document.createElement("INPUT");
		let inputLengthTwo = document.createElement("INPUT");
		let inputLengthThree = document.createElement("INPUT");
		let submit = document.createElement("INPUT");
		// canvas.id = "f21__canvas";
		inputAngleOne.type = "number";
		inputAngleOne.placeholder = "Angulo inferior izquierdo (90°)";
		inputAngleTwo.type = "number";
		inputAngleTwo.placeholder = "Angulo superior derecho (90°)";
		// inputLengthOne.type = "number";
		// inputLengthOne.placeholder = "Base superior";
		inputLengthTwo.type = "number";
		inputLengthTwo.placeholder = "Base";
		inputLengthThree.type = "number";
		inputLengthThree.placeholder = "Altura";
		submit.type = "submit";
		submit.addEventListener("click",()=>{
			let answerDiv = document.createElement("div");
			if (true) {
				let answer = (inputLengthOne + inputLengthTwo) / 2;
				answerDiv.textContent = ` ${answer}, : ${answer}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		// div.appendChild(canvas);
		div.appendChild(inputAngleOne);
		div.appendChild(inputAngleTwo);
		// div.appendChild(inputLengthOne);
		div.appendChild(inputLengthTwo);
		div.appendChild(inputLengthThree);
		div.appendChild(submit);
		return div;
	}
	const poligonoRegular = () => {
		// numero de lados * longitud de lado * apotema
		let div = document.createElement('div');
		let inputLength = document.createElement('input');
		let inputTimes = document.createElement('input');
		let submit = document.createElement("INPUT");
		inputLength.setAttribute("type","number");
		inputLength.setAttribute("placeholder","Longitud de lado");
		inputTimes.setAttribute("type","number");
		inputTimes.setAttribute("placeholder","Número de lados");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			let answerDiv = document.createElement("div");
			let longitudLado = inputLength.value;
			let numeroLados = inputTimes.value;
			if (longitudLado != "" && numeroLados != "") {
				let angulo = 360 / (2 * numeroLados);
				let apotema = longitudLado / (2 * tang(angulo));
				let answer = longitudLado * numeroLados * apotema / 2;
				answerDiv.textContent = `Longitud de lado: ${longitudLado}, Número de lados: ${numeroLados}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(inputLength)
		div.appendChild(inputTimes)
		div.appendChild(submit);
		return div;
	}
	const integral = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			let answerDiv = document.createElement("div");
			if (true) {
				let answer = (1);
				answerDiv.textContent = `: ${answer}, : ${answer}, Área: ${answer}`;
			}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(submit);
		return div;
	}
	const esfera = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{
			let answerDiv = document.createElement("div");
			if (true) {}
			document.querySelector(".f21__develop div").appendChild(answerDiv);
		})
		div.appendChild(submit);
		return div;
	}
	const cilindro = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{})
		div.appendChild(submit);
		return div;
	}
	const cono = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{})
		div.appendChild(submit);
		return div;
	}
	const integralTriple = () => {
		// document
		let div = document.createElement('div');
		let submit = document.createElement("INPUT");
		submit.setAttribute("type","submit");
		submit.addEventListener("click",()=>{})
		div.appendChild(submit);
		return div;
	}
	container.appendChild(fragment21);
	container.innerHTML = `<div class="f21">
		<div class="f21__container">
			<div class="f21__Segmentos-Content">
				<h3>Segmentos</h3>
				<div class="f21__Segmentos-buttons">
					<input type="button" value="Rectas">
				</div>
			</div>
			<div class="f21__Areas-Content">
				<h3>Áreas</h3>
				<div class="f21__Areas-buttons">
					<input type="button" value="Circulo">
					<input type="button" value="Ovalo">
					<input type="button" value="Sector Circular">
					<input type="button" value="Triangulo">
					<input type="button" value="Segmento Circular">
					<input type="button" value="Trapecio Circular">
					<input type="button" value="Cuadrilatero">
					<input type="button" value="Poligono Regular">
					<input type="button" value="Integral">
				</div>
			</div>
			<div class="f21__volumenes-Content">
				<h3>Volúmenes</h3>
				<div class="f21__volumenes-buttons">
					<input type="button" value="Esfera">
					<input type="button" value="Cilindro">
					<input type="button" value="Cono">
					<input type="button" value="Cubo">
					<input type="button" value="Tubo">
					<input type="button" value="Piramides">
					<input type="button" value="Tronco de piramide">
					<input type="button" value="Dona">
					<input type="button" value="Prisma regular">
					<input type="button" value="Integral Triple">
				</div>
			</div>
		</div>
		<div class="f21__develop">
			<h3>Desarrollo</h3>
		</div>
		<div class="f21__history">
			<h3>History</h3>
		</div>
	</div>`;
	let inputs = document.querySelectorAll(".f21__container input");
	inputs.forEach((input)=>{
		input.addEventListener("click",(e)=>{
			let add;
			if (document.querySelector(".f21__develop").childElementCount == 1) {
				switch (e.target.value) {
					case "Rectas":
						add = rectas();
						break;
					case "Circulo":
						add = circulo();
						break;
					case "Ovalo":
						add = ovalo();
						break;
					case "Sector Circular":
						add = sectorCircular();
						break;
					case "Triangulo":
						add = triangulo();
						break;
					case "Segmento Circular":
						add = segmentoCircular();
						break;
					case "Trapecio Circular":
						add = trapecioCircular();
						break;
					case "Cuadrilatero":
						add = cuadrilatero();
						break;
					case "Poligono Regular":
						add = poligonoRegular();
						break;
					case "Integral":
						add = integral();
						break;
					case "Esfera":
						add = esfera();
						break;
					case "Cilindro":
						add = cilindro();
						break;
					case "Cono":
						add = cono();
						break;
					case "Integral Triple":
						add = integralTriple();
						break;
					default:
						alert("No es ninguna de las anteriores");
						console.log(e.target.value);
				}
				document.querySelector(".f21__develop").appendChild(add);
			} else {
				document.querySelector(".f21__develop").removeChild(document.querySelector(".f21__develop div"));
			}
		})
	})
}
// Proyecto 22
const clickboton22 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment22 = document.createDocumentFragment();
	container.appendChild(fragment22);
	container.innerHTML = `<div class="f23"></div>`;
}
// Proyecto 23
const clickboton23 = () => {'use strict';
	let container = document.querySelector(".desarrollo__div");
	const fragment23 = document.createDocumentFragment();
	container.appendChild(fragment23);
	container.innerHTML = `<div class="f23"></div>`;
}
