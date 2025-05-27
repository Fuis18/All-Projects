"use strict";
console.log("54-(6.5*2-(1-8)+(5*8)-3*6+5*4)*5", " // -256");
let quest = [];
let ac = false;
let ans = 0;
let result = false;

const num = (quest) => {
	// Juntar números
	return quest.reduce(
		(arr, item) => {
			let last = arr.length - 1;
			// Es un número o un punto
			if (!isNaN(item) || item === ".") {
				if (!isNaN(arr[last])) {
					arr[last] = (arr[last] || "") + item;
				} else if (arr[last] == ".") {
					arr[last] = arr[last] + item;
				} else {
					arr.push(item);
				}
			} else {
				if (arr[last] !== undefined && arr[last] !== "") {
					arr.push(item);
				} else {
					arr[last] = item;
				}
			}
			return arr;
		},
		[""]
	);
};

const calculate = (quest, answer) => {
	console.log("Inicio ", quest);

	let progress = [];

	const processParentheses = (arr) => {
		// Separar en parentesis
		let stack = [];
		let startIdx = 0;
		let bParenthesis = false;
		let nParenthesis = 0;
		let mParenthesis = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == "(") {
				if (nParenthesis == 0) startIdx = i; // Guardar el índice de inicio del paréntesis
				bParenthesis = true;
				nParenthesis++;
			} else if (arr[i] == ")") {
				nParenthesis--;
				if (nParenthesis == 0 && bParenthesis) {
					let temporal = calculate(arr.slice(startIdx + 1, i));
					progress.push(temporal[1]);
					// console.log(temporal[1]);
					temporal = temporal[0];
					if (isNaN(stack[stack.length - 1])) stack.push(temporal);
					else stack.push("x", temporal);
					// console.log(stack)
					bParenthesis = false;
					mParenthesis = true;
				}
			} else if (!bParenthesis) {
				if (mParenthesis && !isNaN(arr[i])) stack.push("x");
				stack.push(arr[i] === "ANS" ? answer : arr[i]);
				mParenthesis = false;
			} else if (bParenthesis && arr.length - 1 == i) {
				let temporal = calculate(arr.slice(startIdx + 1, i + 1));
				if (isNaN(stack[stack.length - 1])) stack.push(temporal);
				else stack.push("x", temporal);
			}
		}
		return stack;
	};

	const separator = (arr) => {
		// Resolver problemas
		let k = 0;
		let temporal = [];
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			if (["+", "-"].includes(arr[i])) {
				// Si son las operaciones
				if (i !== 0) k++;
				temporal = [];
				temporal.push(arr[i]);
				result[k] = temporal;
			} else {
				// Si es un número
				temporal.push(arr[i]);
				result[k] = temporal;
			}
		}
		return result;
	};

	const operator = (arr) => {
		// Hacer operaciones
		let sign = "+";
		let op = "";
		let jocker = false;
		let num = 0;
		console.log(arr);
		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i]);
			if (["+", "-"].includes(arr[i])) {
				if (arr[i] == "-" && sign == "-") sign = "+";
				else sign = arr[i];
			} else if (["x", "/", "√"].includes(arr[i])) {
				op = arr[i];
			} else if (["%"].includes(arr[i])) {
				num = num * 0.01;
				jocker = true;
			} else if (!isNaN(arr[i])) {
				let [NI1, ND1] = num.toString().split(".");
				let [NI2, ND2] = arr[i].toString().split(".");
				ND2 = ND2 ? ND2 : "";
				ND1 = ND1 ? ND1 : "";
				let NF1 = ND1.length;
				let NF2 = ND2.length;
				if (op == "x" || op == "/") {
					if (op == "x") {
						if (Math.sign(arr[i]) == 1) {
							num =
								(parseInt(NI1.concat(ND1)) *
									parseInt(sign.concat(NI2.concat(ND2)))) /
								Math.pow(10, NF1 + NF2);
						} else {
							num =
								(parseInt(NI1.concat(ND1)) *
									parseInt(NI2.concat(ND2))) /
								Math.pow(10, NF1 + NF2);
							if (sign == "-") num *= -1;
						}
					} else {
						if (Math.sign(arr[i]) == 1) {
							num =
								(parseInt(NI1.concat(ND1)) *
									Math.pow(10, NF2)) /
								(parseInt(sign.concat(NI2.concat(ND2))) *
									Math.pow(10, NF1));
						} else {
							num =
								(parseInt(NI1.concat(ND1)) *
									Math.pow(10, NF2)) /
								(parseInt(NI2.concat(ND2)) * Math.pow(10, NF1));
							if (sign == "-") num *= -1;
						}
					}
				} else if (op == "√") {
					console.log(num, arr, arr[i], sign);
					let t = Math.sqrt(arr[i]);
					if (t.toString().includes(".")) num = [op, arr[i]];
					else if (arr[i] < 0) num = [op, arr[i]];
					else num = Math.sqrt(arr[i]);
				} else if (sign == "+" || sign == "-") {
					let float = 0; // Llevarse una
					if (NF1 < NF2) ND1 = `${ND1}${"0".repeat(NF2 - NF1)}`;
					else ND2 = `${ND2}${"0".repeat(NF1 - NF2)}`;
					float = ND2.toString().length;
					// Desarrollar
					// console.log(parseInt(`${NI1}${ND1}`), parseInt(`${NI2}${ND2}`), "sign: "+sign);
					if (
						Math.sign(parseInt(`${NI2}${ND2}`)) == -1 &&
						sign == "-"
					) {
						num = parseFloat(
							`${
								(parseInt(`${NI1}${ND1}`) -
									parseInt(`${NI2}${ND2}`)) /
								Math.pow(10, float)
							}`
						);
					} else {
						num = parseFloat(
							`${
								(parseInt(`${NI1}${ND1}`) +
									parseInt(`${NI2}${ND2}`)) /
								Math.pow(10, float)
							}`
						);
						if (sign == "-") num *= -1;
					}
					sign = "+";
				} else {
					console.log("Error: ", arr[i]);
				}
			} else {
				console.log("Error: ", arr[i]);
			}
		}
		if (arr.length == 1 && ["+", "-"].includes(arr[0])) return sign;
		else if (arr.length == 1 && isNaN(arr[0])) return op;
		else if (isNaN(arr[arr.length - 1]) && jocker == true) return num;
		else if (isNaN(arr[arr.length - 1])) return [num, op];
		else return num;
	};

	progress.push(quest);

	// Separar parentesis
	quest = processParentheses(quest);
	console.log("Respuesta ", quest);
	progress.push(quest);

	// Separar en Suma y resta
	quest = separator(quest);
	console.log("Respuesta ", quest);

	// Resuelve
	quest = quest.map(operator);
	console.log("Respuesta ", quest);
	progress.push(quest);

	// Aplanar Arrays
	quest = quest.reduce((accumulate, value) => accumulate.concat(value), []);
	console.log("Respuesta ", quest);

	// Suma y Resta
	quest = operator(quest);
	console.log("Respuesta ", quest);
	progress.push(quest);

	return [quest, progress];
};

const setProcess = (data) => {
	const processData = (data, depth, fragment) => {
		function normalizeArray(arr) {
			if (!Array.isArray(arr)) return arr; // Si no es un array, devolver tal cual.

			let result = [];
			let sign = 1;

			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === "+") continue; // Ignorar '+'
				if (arr[i] === "-") {
					sign *= -1; // Invertir signo
					continue;
				}

				// Si el elemento es un número (o cadena numérica), aplicar signo
				if (!isNaN(arr[i])) {
					result.push(sign * Number(arr[i]));
				} else {
					result.push(arr[i]); // Mantener elementos no numéricos sin cambios
				}

				sign = 1; // Resetear signo después de aplicarlo
			}

			return result;
		}

		function deepEqual(a, b) {
			// 🔥 Normalizar ambos arrays ANTES de compararlos
			a = normalizeArray(a);
			b = normalizeArray(b);

			// Comparación estricta para valores primitivos
			if (a === b) return true;

			// Comparar arrays elemento por elemento
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return false;
				return a.every((val, i) => deepEqual(val, b[i]));
			}

			// Si uno es un array y el otro no, y el array tiene un único elemento
			if (Array.isArray(a) && !Array.isArray(b)) {
				return a.length === 1 && deepEqual(a[0], b);
			}
			if (Array.isArray(b) && !Array.isArray(a)) {
				return b.length === 1 && deepEqual(a, b[0]);
			}

			// Comparar objetos por sus propiedades
			if (
				typeof a === "object" &&
				a !== null &&
				typeof b === "object" &&
				b !== null
			) {
				const keysA = Object.keys(a);
				const keysB = Object.keys(b);
				if (keysA.length !== keysB.length) return false;
				return keysA.every((key) => deepEqual(a[key], b[key]));
			}

			// En cualquier otro caso, son diferentes
			return false;
		}

		const handlingCommas = (arr) => {
			if (!Array.isArray(arr)) return arr;
			let sign = false;
			return arr
				.map((item, j) => {
					if (item === "+" && Math.sign(arr[j + 1]) === -1)
						return " ";
					if (item === "-" && Math.sign(arr[j + 1]) === -1) {
						sign = true;
						return " ";
					}
					if (Math.sign(item) === -1) {
						if (sign)
							return `+ ${-item} ${
								Math.sign(arr[j + 1]) == 1 ? " +" : ""
							}`;
						return `- ${-item} ${
							Math.sign(arr[j + 1]) == 1 ? " +" : ""
						}`;
					}
					if (Math.sign(item) === 1) {
						return `${item} ${
							Math.sign(arr[j + 1]) == 1 ? " +" : ""
						}`;
					}
					return item;
				})
				.join(" ");
		};

		data.forEach((info, i) => {
			if (deepEqual(info, data[i - 1])) return;
			let div = document.createElement("DIV");
			if (Array.isArray(info)) {
				if (Array.isArray(info[0]))
					processData(info, depth + 1, fragment);
				else if (
					(info.length == 2 && isNaN(info[0]) && !isNaN(info[1])) ||
					(info.length == 1 && !isNaN(info[0]))
				) {
					div.textContent = `${"| ".repeat(depth)}= ${handlingCommas(
						info
					)}`;
					fragment.appendChild(div);
				} else {
					div.textContent = `${"| ".repeat(depth)}> ${handlingCommas(
						info
					)}`;
					fragment.appendChild(div);
				}
			} else {
				div.textContent = `${"| ".repeat(depth)}= ${handlingCommas(
					info
				)}`;
				fragment.appendChild(div);
			}
		});
	};

	const fragment = document.createDocumentFragment();
	processData(data, 0, fragment);
	let div_process = document.querySelector(".f4__process");
	while (div_process.firstChild) {
		div_process.removeChild(div_process.firstChild);
	}
	document.querySelector(".f4__process").appendChild(fragment);
};

const options = (btn) => {
	"use strict";
	if (btn === "AC") {
		quest = []; // Reiniciar la operación
		ans = "0"; // Reiniciar la respuesta a 0
		document.querySelector(".f4__window-operation").textContent =
			quest.join("");
	} else if (btn === "DEL" || btn === "Backspace") {
		const updatedQuest = [...quest];
		updatedQuest.pop(); // Eliminar el último valor
		quest = updatedQuest; // Actualizar el estado de la operación
		document.querySelector(".f4__window-operation").textContent =
			quest.join("");
	} else if (btn === "Enter" || btn === "=") {
		try {
			document.querySelector(".f4__window-history").textContent = ans;
			let pack = calculate(num(quest), ans);
			if (isNaN(pack[0])) {
				document.querySelector(".f4__window-answer").textContent =
					"ERROR";
				ans = "ERROR";
			} else {
				document.querySelector(".f4__window-answer").textContent =
					pack[0];
				ans = pack[0];
			}
			setProcess(pack[1]);
			result = true;
		} catch (err) {
			ans = "ERROR";
		}
	}
};

const buttonValue = (btn, ctrl) => {
	"use strict";
	if (
		btn === "Backspace" ||
		btn === "Enter" ||
		btn === "DEL" ||
		btn === "AC" ||
		btn === "="
	) {
		if (btn === "Backspace" && ctrl) {
			options("AC");
		} else {
			options(btn);
		}
	} else if (
		[
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			".",
			"/",
			"*",
			"-",
			"+",
			"(",
			")",
			"x",
			"X",
			"ANS",
			"a",
			"A",
			"^",
			"v",
			"V",
			"^2",
			"%",
			"EXP",
			"E",
			"e",
		].includes(btn)
	) {
		let info = "";
		if (btn === "X" || btn === "*") btn = "x";
		if (btn === "a" || btn === "A") btn = "ANS";
		if (btn === "v" || btn === "V") btn = "√";
		if (btn === "EXP" || btn === "E") btn = "e";
		if (result) {
			if (["x", "/", "-", "+", "^"].includes(btn) && ans != 0) {
				quest = ["ANS", btn];
				info = ["ANS", btn].join("");
			} else {
				quest = [btn];
				info = btn;
			}
			result = false;
		} else {
			quest = [...quest, btn];
			info = quest.join("");
		}
		document.querySelector(".f4__window-operation").textContent = info;
	}
};

document.querySelectorAll(".f4 button").forEach((button) => {
	button.addEventListener("click", () => {
		button.blur();
		buttonValue(button.value);
	});
});
document.addEventListener("keydown", (e) => {
	buttonValue(e.key, e.ctrlKey);
});
