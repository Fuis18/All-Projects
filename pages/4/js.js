'use strict';
console.log("54-(6.5*2-(1-8)+(5*8)-3*6+5*4)+5"," // -3");
let quest = [];
let ac = false;
let ans = 0;
let history = 0;

const num = (quest) => {
   // Juntar números
   return quest.reduce(
     (arr, item) => {
       let last = arr.length - 1;
       // Es un número o un punto
       if (!isNaN(item) || item === ".") {
         if (!isNaN(arr[last])) {
           arr[last] = (arr[last] || "") + item;
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
 
 const calculate = (quest,answer) => {
   console.log("Inicio ",quest);
 
   const separator = (arr) => {
     // Resolver problemas
     let k = 0
     let temporal = []
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
     let signo = "+";
     let op = "";
     let num = 0;
     for (let i = 0; i < arr.length; i++) {
       if (["+","-"].includes(arr[i])) {
         if (arr[i] == "-" && signo == "-") signo = "+";
         else signo = arr[i];
       } else if (["x","/"].includes(arr[i])) {
         op = arr[i];
       } else if (!isNaN(arr[i])) {
         if (op == "x" || op == "/") {
           let num1 = num.toString().split(".")
           let num2 = arr[i].toString().split(".")
           if (op == "x") {
             if (Math.sign(arr[i]) == 1) {
               num = parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * parseInt(signo.concat(num2[0].concat(num2[1] ? num2[1] : ""))) / Math.pow(10, num1[1] ? num1[1].length : 0 + num2[1] ? num2[1].length : 0);
             } else if (signo == "+") {
               num = parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * parseInt(num2[0].concat(num2[1] ? num2[1] : "")) / Math.pow(10, num1[1] ? num1[1].length : 0 + num2[1] ? num2[1].length : 0)
             } else if (signo == "-") {
               num = parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * parseInt(num2[0].concat(num2[1] ? num2[1] : "")) * -1 / Math.pow(10, num1[1] ? num1[1].length : 0 + num2[1] ? num2[1].length : 0)
             }
           } else{
             if (Math.sign(arr[i]) == 1) {
               num = (parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * Math.pow(10,num2[1] ? num2[1].length : 0)) / (parseInt(signo.concat(num2[0].concat(num2[1] ? num2[1] : ""))) * Math.pow(10,num1[1] ? num1[1].length : 0));
             } else if (signo == "+") {
               num = (parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * Math.pow(10,num2[1] ? num2[1].length : 0)) / (parseInt(num2[0].concat(num2[1] ? num2[1] : "")) * Math.pow(10,num1[1] ? num1[1].length : 0));
             } else if (signo == "-") {
               num = (parseInt(num1[0].concat(num1[1] ? num1[1] : "")) * Math.pow(10,num2[1] ? num2[1].length : 0)) / (parseInt(num2[0].concat(num2[1] ? num2[1] : "")) * Math.pow(10,num1[1] ? num1[1].length : 0)) * -1;
             }
           }
         } else if (signo == "+" || signo == "-") {
           if (Math.sign(arr[i]) == 1) {
             num += parseFloat(signo.concat(arr[i]))
           } else if (signo == "+") {
             num += parseFloat(arr[i])
           } else if (signo == "-") {
             num += parseFloat(arr[i]) * -1
           }
           signo = "+";
         } else {
           console.log("Error: ",arr[i])
         }
       } else {
         console.log("Error: ",arr[i])
       }
     }
     if (arr.length == 1 && ["+","-"].includes(arr[0])) return signo;
     else if (arr.length == 1 && isNaN(arr[0])) return op;
     else if (isNaN(arr[arr.length - 1])) return [num,op];
     else return num;
   };
 
   const  processParentheses = (arr) => {
     // Separar en parentesis
     let stack = [];
     let startIdx = 0;
     let bParenthesis = false;
     let nParenthesis = 0;
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] == "(") {
         if (nParenthesis == 0) startIdx = i; // Guardar el índice de inicio del paréntesis
         bParenthesis = true;
         nParenthesis++;
       } else if (arr[i] == ")") {
         nParenthesis--;
         if (nParenthesis == 0 && bParenthesis) {
           stack.push(calculate(arr.slice(startIdx + 1,i)))
           bParenthesis = false;
         }
       } else if (!bParenthesis) {
         stack.push(arr[i] === "ANS" ? answer : arr[i]);
       }
     }
     return stack;
   }
 
   // Separar parentesis
   quest = processParentheses(quest);
   console.log("Respuesta ",quest);
 
   // Separar en Suma y resta
   quest = separator(quest);
   console.log("Respuesta ",quest);
 
   // Resuelve
   quest = quest.map(operator);
   console.log("Respuesta ",quest);
 
   // Aplanar Arrays
   quest = quest.reduce((accumulate, value) => accumulate.concat(value), [])
   console.log("Respuesta ",quest);
 
   // Suma y Resta
   quest = operator(quest)
   console.log("Respuesta ",quest);

   document.querySelector(".f4__window-answer").textContent = quest;
 
   return quest;
 };
 

const options = btn => {'use strict';
   if (btn === "AC") {
      quest = []; // Reiniciar la operación
      ans = "0"; // Reiniciar la respuesta a 0
    } else if (btn === "DEL" || btn === "Backspace") {
      const updatedQuest = [...quest];
      updatedQuest.pop(); // Eliminar el último valor
      quest = updatedQuest; // Actualizar el estado de la operación
    } else if (btn === "Enter" || btn === "=") {
      try {
        history = ans;
        quest = calculate(num(quest),ans);
        ans = quest;
      } catch (err) {
        ans = "ERROR"
      }
    }
   document.querySelector(".f4__window-operation").textContent = quest.join("");
}

const buttonValue = (btn,ctrl) => {'use strict';
   console.log(btn,ctrl,quest);
   if (btn === "Backspace" || btn === "Enter" || btn === "DEL" || btn === "AC" || btn === "=") {
      if (btn === "Backspace" && ctrl) {
         options("AC");
      } else {
         options(btn);
      }
      } else if (["0","1","2","3","4","5","6","7","8","9",".","/","*","-","+","(",")","x","X","ANS","a","A","^"].includes(btn)) {
      let info = "";
      if (btn === "X" || btn === "*") btn = "x";
      if (ans && !quest.length && ["x", "/", "-", "+", "^"].includes(btn)) {
         quest = [...quest, "ANS", btn];
         info = ["ANS", btn].join("");
      } else {
         quest = ([...quest, btn]);
         info = quest.join("");
      }
      document.querySelector(".f4__window-operation").textContent = info;
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
