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
          let temporal = calculate(arr.slice(startIdx + 1,i));
          if (isNaN(stack[stack.length-1])) stack.push(temporal);
          else stack.push("x",temporal);
          bParenthesis = false;
        }
      } else if (!bParenthesis) {
        stack.push(arr[i] === "ANS" ? answer : arr[i]);
      } else if (bParenthesis && arr.length - 1 == i) {
        let temporal = calculate(arr.slice(startIdx + 1,i + 1));
        if (isNaN(stack[stack.length-1])) stack.push(temporal);
        else stack.push("x",temporal);
      }
    }
    return stack;
  }

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
    let sign = "+";
    let op = "";
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (["+","-"].includes(arr[i])) {
        if (arr[i] == "-" && sign == "-") sign = "+";
        else sign = arr[i];
      } else if (["x","/"].includes(arr[i])) {
        op = arr[i];
      } else if (!isNaN(arr[i])) {
        let [NI1,ND1] = num.toString().split(".")
        let [NI2,ND2] = arr[i].toString().split(".")
        ND2 = ND2 ? ND2 : "";
        ND1 = ND1 ? ND1 : "";
        let NF1 = ND1.length;
        let NF2 = ND2.length;
        if (op == "x" || op == "/") {
          if (op == "x") {
            if (Math.sign(arr[i]) == 1) {
              num = parseInt(NI1.concat(ND1)) * parseInt(sign.concat(NI2.concat(ND2))) / Math.pow(10, (NF1) + (NF2));
            } else {
              num = parseInt(NI1.concat(ND1)) * parseInt(NI2.concat(ND2)) / Math.pow(10, (NF1) + (NF2))
              if (sign == "-") num *= -1;
            }
          } else {
            if (Math.sign(arr[i]) == 1) {
              num = (parseInt(NI1.concat(ND1)) * Math.pow(10,NF2)) / (parseInt(sign.concat(NI2.concat(ND2))) * Math.pow(10,NF1));
            } else {
              num = (parseInt(NI1.concat(ND1)) * Math.pow(10,NF2)) / (parseInt(NI2.concat(ND2)) * Math.pow(10,NF1));
              if (sign == "-") num *= -1;
            }
          }
        } else if (sign == "+" || sign == "-") {
          let float = 0; // Llevarse una
          ND1 = ND1 == "" ? 0 : parseInt(ND1);
          ND2 = ND2 == "" ? 0 : parseInt(ND2);
          if (NF1 < NF2) ND1 *= Math.pow(10,NF2 - NF1);
          else ND2 *= Math.pow(10,NF1 - NF2);
          float = ND2 == 0 ? 0 : ND2.toString().length;
          // Desarrollar
          if (Math.sign(arr[i]) == 1) {
            num = parseFloat(`${sign}${((parseInt(`${NI1}${ND1 == 0 ? "" : ND1}`) + parseInt(`${NI2}${ND2 == 0 ? "" : ND2}`))) / Math.pow(10,float)}`);
          } else {
            num = parseFloat(`${((parseInt(`${NI1}${ND1 == 0 ? "" : ND1}`) + parseInt(`${NI2}${ND2 == 0 ? "" : ND2}`))) / Math.pow(10,float)}`);
            if (sign == "-") num *= -1;
          }
          sign = "+";
        } else {
          console.log("Error: ",arr[i]);
        }
      } else {
        console.log("Error: ",arr[i]);
      }
    }
    if (arr.length == 1 && ["+","-"].includes(arr[0])) return sign;
    else if (arr.length == 1 && isNaN(arr[0])) return op;
    else if (isNaN(arr[arr.length - 1])) return [num,op];
    else return num;
  };

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
      document.querySelector(".f4__window-operation").textContent = quest.join("")
    } else if (btn === "DEL" || btn === "Backspace") {
      const updatedQuest = [...quest];
      updatedQuest.pop(); // Eliminar el último valor
      quest = updatedQuest; // Actualizar el estado de la operación
      document.querySelector(".f4__window-operation").textContent = quest.join("")
    } else if (btn === "Enter" || btn === "=") {
      try {
        history = ans;
        ans = calculate(num(quest),ans);
      } catch (err) {
        ans = "ERROR"
      }
    }
}

const buttonValue = (btn,ctrl) => {'use strict';
   if (btn === "Backspace" || btn === "Enter" || btn === "DEL" || btn === "AC" || btn === "=") {
      if (btn === "Backspace" && ctrl) {
         options("AC");
      } else {
         options(btn);
      }
      } else if (["0","1","2","3","4","5","6","7","8","9",".","/","*","-","+","(",")","x","X","ANS","a","A","^"].includes(btn)) {
      if (result) {
        quest = []
        result = false
      }
      let info = "";
      if (btn === "X" || btn === "*") btn = "x";
      if (history && ["x", "/", "-", "+", "^"].includes(btn) && !quest.length) {
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
