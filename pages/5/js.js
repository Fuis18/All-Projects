"use strict";
const admision = document.querySelector(".form");
const deuda = document.querySelector(".deuda");
const inputs = document.querySelectorAll(".content form input");

const expression = {
  usuario: /^[A-zÀ-ÿ0-9\_\-]{1,16}$/,
  name: /^[A-zÀ-ÿ]{1,30}$/,
  // À-ÿ   À-Ý
  password: /^.{4,12}$/,
  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cellphone: /^\d{7,14}$/,
  rename:
    /^(Arquitectura|Astronomía|Agronomía|Aviación|Biología|Botánica|Contabilidad|Cuantica|Física|Geología|Marketing|Medicina|Minería|Oncología|Pentesting|Programación|Química)$/,
};
const campos = {
  first_name: [false, ""],
  last_name: [false, ""],
  materia: [false, "", false], // Existe, Nombre, desocupado
  mail: [false, ""],
};
const ingresados = {
  Arquitectura: [],
  Astronomía: [],
  Agronomía: [],
  Aviación: [],
  Biología: [],
  Botánica: [],
  Contabilidad: [],
  Cuantica: [],
  Física: [],
  Geología: [],
  Marketing: [],
  Minería: [],
  Oncología: [],
  Medicina: [],
  Pentesting: [],
  Programación: [],
  Química: [],
};
const validarForm = (e) => {
  switch (e.target.name) {
    case "last_name":
      validarCampo(expression.name, e.target, e.target.name);
      break;
    case "first_name":
      validarCampo(expression.name, e.target, e.target.name);
      break;
    case "materia":
      validarCampo(expression.rename, e.target, e.target.name);
      break;
    case "mail":
      validarCampo(expression.mail, e.target, e.target.name);
      break;
  }
};
const validarCampo = (expression, input, campo) => {
  if (expression.test(input.value)) {
    document.querySelector(`.Group__${campo}`).classList.remove("incorrect");
    document.querySelector(`.Group__${campo}`).classList.add("correct");
    document
      .querySelector(`.Group__${campo} .Group-items .cambiarI`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`.Group__${campo} .Group-items .cambiarI`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`.Group__${campo} .input-error`)
      .classList.remove("input-error-activo");
    campos[campo][0] = true;
    campos[campo][1] = input.value;
  } else {
    document.querySelector(`.Group__${campo}`).classList.remove("correct");
    document.querySelector(`.Group__${campo}`).classList.add("incorrect");
    document
      .querySelector(`.Group__${campo} .Group-items .cambiarI`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`.Group__${campo} .Group-items .cambiarI`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`.Group__${campo} .input-error`)
      .classList.add("input-error-activo");
    campos[campo][0] = false;
  }
};
const registro = () => {
  let content = document.querySelector(".joined-content-items");
  let div = document.createElement("div");
  div.classList.add("joined");
  div.innerHTML = `<p>Nombre: ${campos.first_name[1]}</p>
		<p>Apellido: ${campos.last_name[1]}</p>
		<p>Materia: ${campos.materia[1]}</p>`;
  ingresados[campos.materia[1]].push([
    campos.first_name[1],
    campos.last_name[1],
    campos.materia[1],
    campos.mail[1],
  ]);
  content.appendChild(div);
};
// Ejecución
inputs.forEach((input) => {
  input.addEventListener("keyup", validarForm);
  input.addEventListener("blur", validarForm);
});
admision.addEventListener("submit", (e) => {
  e.preventDefault();
  const terminos = document.querySelector(".checkbox");
  if (ingresados[campos.materia[1]] != undefined) {
    if (ingresados[campos.materia[1]].length < 10) {
      campos.materia[2] = true;
    } else {
      campos.materia[2] = false;
    }
  }
  if (
    campos.first_name[0] &&
    campos.last_name[0] &&
    campos.materia[0] &&
    campos.materia[2] &&
    campos.mail[0] &&
    terminos.checked
  ) {
    admision.reset();
    document
      .getElementById("form__error")
      .classList.remove("form__error-activo");
    document.getElementById("form__exito").classList.remove("form__exito");
    document.getElementById("form__error").classList.add("form__error");
    document.getElementById("form__exito").classList.add("form__exito-activo");
    document
      .getElementById("form__materia")
      .classList.remove("form__materia-activo");
    document.getElementById("form__materia").classList.add("form__materia");
    setTimeout(() => {
      document
        .getElementById("form__exito")
        .classList.remove("form__exito-activo");
      document.getElementById("form__exito").classList.add("form__exito");
    }, 2500);
    document.querySelectorAll(".Group-items .cambiarI").forEach((icono) => {
      icono.classList.remove("fa-check-circle");
    });
    document.querySelectorAll(".Group").forEach((correct) => {
      correct.classList.remove("correct");
    });
    registro();
  } else if (
    campos.first_name[0] == false ||
    campos.last_name[0] == false ||
    campos.materia[0] == false ||
    campos.mail[0] == false ||
    terminos.checked == false
  ) {
    document.getElementById("form__error").classList.remove("form__error");
    document.getElementById("form__error").classList.add("form__error-activo");
  } else {
    document.getElementById("form__materia").classList.remove("form__materia");
    document
      .querySelector(".Group__materia .Group-items .cambiarI")
      .classList.remove("fa-check-circle");
    document.querySelector(".Group__materia").classList.remove("correct");
    document
      .getElementById("form__materia")
      .classList.add("form__materia-activo");
    document
      .querySelector(".Group__materia .Group-items .cambiarI")
      .classList.add("fa-times-circle");
    document.querySelector(".Group__materia").classList.add("incorrect");
    setTimeout(() => {
      document
        .getElementById("form__materia")
        .classList.remove("form__materia-activo");
      document.getElementById("form__materia").classList.add("form__materia");
    }, 2500);
  }
});
deuda.addEventListener("submit", (e) => {
  e.preventDefault();
});
