'use strict';
const seno = num => {
   if (num % 180 == 0) {
      return 0;
   } else {
      num *= Math.PI/180;
      let y = Math.sin(num);
      return y;
   }
}
const tang = num => {
   if (num % 180 == 0) {
      return 0;
   } else {
      num *= Math.PI/180;
      let y = Math.tan(num);
      return y;
   }
}
const rectas = () => {
   let div = document.createElement('div');
   let submit = document.createElement("INPUT");
   submit.type = "submit";
   submit.addEventListener("click",()=>{
   });
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
      let radio = inputRadius.value;
      if (radio != "") {
         let answer = radio * radio * Math.PI;
         let answerDiv = document.createElement("div");
         answerDiv.textContent = `Radio: ${radio}, Área: ${answer}`;
         document.querySelector(".f21__develop div").appendChild(answerDiv);
      }
   });
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
   });
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
   });
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
      //1/2 * Base * height * sen(angle);
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
   });
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
   });
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
   });
   div.appendChild(inputAngle);
   div.appendChild(inputMinorRadius);
   div.appendChild(inputManjorRadius);
   div.appendChild(submit);
   return div;
}
const cuadrilatero = () => {
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
   });
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
   });
   div.appendChild(inputLength);
   div.appendChild(inputTimes);
   div.appendChild(submit);
   return div;
}
const integral = () => {
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
   });
   div.appendChild(submit);
   return div;
}
const esfera = () => {
   let div = document.createElement('div');
   let submit = document.createElement("INPUT");
   submit.setAttribute("type","submit");
   submit.addEventListener("click",()=>{
      let answerDiv = document.createElement("div");
      if (true) {}
      document.querySelector(".f21__develop div").appendChild(answerDiv);
   });
   div.appendChild(submit);
   return div;
}
const cilindro = () => {
   let div = document.createElement('div');
   let submit = document.createElement("INPUT");
   submit.setAttribute("type","submit");
   submit.addEventListener("click",()=>{});
   div.appendChild(submit);
   return div;
}
const cono = () => {
   let div = document.createElement('div');
   let submit = document.createElement("INPUT");
   submit.setAttribute("type","submit");
   submit.addEventListener("click",()=>{});
   div.appendChild(submit);
   return div;
}
const integralTriple = () => {
   let div = document.createElement('div');
   let submit = document.createElement("INPUT");
   submit.setAttribute("type","submit");
   submit.addEventListener("click",()=>{});
   div.appendChild(submit);
   return div;
}
let inputs = document.querySelectorAll(".f21__container input");
inputs.forEach(input=>{
   input.addEventListener("click",(e)=>{
      let add;
      if (document.querySelector(".f21__develop").childElementCount == 1) {
         switch (e.target.value) {
            case "Rectas":
               add = rectas();				break;
            case "Circulo":
               add = circulo();			break;
            case "Ovalo":
               add = ovalo();				break;
            case "Sector Circular":
               add = sectorCircular();		break;
            case "Triangulo":
               add = triangulo();			break;
            case "Segmento Circular":
               add = segmentoCircular();	break;
            case "Trapecio Circular":
               add = trapecioCircular();	break;
            case "Cuadrilatero":
               add = cuadrilatero();		break;
            case "Poligono Regular":
               add = poligonoRegular();	break;
            case "Integral":
               add = integral();			break;
            case "Esfera":
               add = esfera();				break;
            case "Cilindro":
               add = cilindro();			break;
            case "Cono":
               add = cono();				break;
            case "Integral Triple":
               add = integralTriple();		break;
            default:
               alert("No es ninguna de las anteriores");
               console.log(e.target.value);
         }
         document.querySelector(".f21__develop").appendChild(add);
      } else document.querySelector(".f21__develop div").remove();
   });
});