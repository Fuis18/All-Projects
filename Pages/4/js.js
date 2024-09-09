'use strict';
console.log("54-(6.5*2-(1-8)+(5*8)-3*6+5*4)+5"," // -3");
let quest = [];
let ac = false;
let ans = 0;
let history = 0;
const separatOperators = array => {'use strict';
   // Seprar en multiplicación y división, atraves de la suma y resta
   let k = 0, temporal = [], retornar = [];
   for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] == "+" || array[i] == "-") {
         // Signo en medio de números
         if (i !== 0) k++;
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
         } else if ((array[i][a] == "+" || array[i][a] == "-" || array[i][a] == "x" || array[i][a] == "/") && array[i].length == 1) {
            var1 = array[i][a];
         } else if (array[i][a] == "ANS") {
            var1 = ans;
         } else {
            var1 = var1 * parseFloat(array[i][a]);
         }
      }
      retornar.push(var1);
   }
   return retornar;
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
   } else if (btn == "0" || btn == "1" || btn == "2" || btn == "3" || btn == "4" || btn == "5" || btn == "6" || btn == "7" || btn == "8" || btn == "9" || btn == "/" || btn == "*"|| btn == "-" || btn == "+" || btn == "." || btn == "(" || btn == ")" || btn == "x" || btn == "ANS") {
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
            temporal = [];
            temporal.push(postSign);
            arr[j] = temporal;
            temporal = [];
            sign = false;
            j++;
         } else if (operation[i] == "(" && sign == true && parentesis == false) {
            // Signo antes del parentesis
            j++;
            temporal = [];
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
            // Ignorar. Manejo de errores
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
      console.log(arr)
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
      console.log("Answer:", arrEnding);
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
document.querySelectorAll(".f4__buttons button").forEach(button => {
   button.addEventListener("click",()=>{
      buttonValue(button.value);
   });
});
document.addEventListener("keydown",(e)=>{
   buttonValue(e.key,e.ctrlKey);
});