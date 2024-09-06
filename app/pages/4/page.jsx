"use client";
import Main from "@/app/components/Main";
import "./css.css";
import Button from './button'
import React, { useState, useEffect, useRef, useCallback } from "react";


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

const separator = (arr) => {
  // Falla, genera muchos parentesis, resolver problemas
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

const calculate = (quest,answer) => {
  console.log("Inicio ");
  console.log(quest);
  // Separar en parentesis
  let stack = [];
  let bParenthesis = false;
  let nParenthesis = 0;
  let startIdx = 0;
  for (let i = 0; i < quest.length; i++) {
    if (quest[i] == "(") {
      if (nParenthesis == 0) startIdx = i; // Guardar el índice de inicio del paréntesis
      bParenthesis = true;
      nParenthesis++;
    } else if (quest[i] == ")") {
      nParenthesis--;
      if (nParenthesis == 0 && bParenthesis) {
        stack.push(calculate(quest.slice(startIdx + 1,i)))
        bParenthesis = false;
      }
    } else if (!bParenthesis) {
      stack.push(quest[i] === "ANS" ? answer : quest[i]);
    }
  }
  quest = stack;
  stack = [];
  console.log("Respuesta ");
  console.log(quest);
  // Separar en Suma y resta
  stack = separator(quest);
  quest = stack;
  stack = [];
  console.log("Respuesta ");
  console.log(quest);
  // Resuelve
  stack = quest.map(operator);
  quest = stack;
  stack = [];
  console.log("Respuesta ");
  console.log(quest);
  // Aplanar Arrays
  stack = quest.reduce((accumulate, value) => accumulate.concat(value), [])
  quest = stack;
  stack = [];
  console.log("Respuesta ");
  console.log(quest);
  // Suma y Resta
  stack = operator(quest)
  quest = stack;
  stack = [];
  console.log("Respuesta ");
  console.log(quest);
  return quest;
};


export default function Page() {
  const buttonsRef = useRef(null);
  const [quest, setQuest] = useState([]);
  const [history, setHistory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [answer, setAnswer] = useState("0");

  const buttonValue = useCallback((btn, ctrl) => {
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
    } else if (["0","1","2","3","4","5","6","7","8","9",".","/","*","-","+","(",")","x","X","ANS","a","A","^"].includes(btn)) {
      let info = "";
      if (btn === "X" || btn === "*") btn = "x";
      if (history && !quest.length && ["x", "/", "-", "+", "^"].includes(btn)) {
        setQuest([...quest, "ANS", btn]);
        info = ["ANS", btn].join("");
      } else {
        setQuest([...quest, btn]);
        info = quest.join("") + btn;
      }
      setOperation(info);
    }
  }, [history, quest]);

  const options = (btn) => {
    if (btn === "AC") {
      setQuest([]); // Reiniciar la operación
      setAnswer("0"); // Reiniciar la respuesta a 0
      setOperation(""); // Limpiar la operación mostrada
    } else if (btn === "DEL" || btn === "Backspace") {
      const updatedQuest = [...quest];
      updatedQuest.pop(); // Eliminar el último valor
      setQuest(updatedQuest); // Actualizar el estado de la operación
      setOperation(updatedQuest.join("")); // Actualizar la operación mostrada
    } else if (btn === "Enter" || btn === "=") {
      try {
        let result = num(quest);
        console.log(result)
        result = calculate(result,answer);
        setHistory(answer);
        setAnswer(result);
        setQuest([]);
      } catch (err) {
        setAnswer("Error");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      buttonValue(event.target.value);
    };

    const handleKeyDown = (event) => {
      buttonValue(event.key, event.ctrlKey);
    };

    const buttonsContainer = buttonsRef.current;
    if (buttonsContainer) {
      const buttons = buttonsContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("click", handleClick);
      });
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (buttonsContainer) {
        const buttons = buttonsContainer.querySelectorAll("button");
        buttons.forEach((button) => {
          button.removeEventListener("click", handleClick);
        });
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [quest, history, answer, buttonValue]);

  return (
    <Main title="Calculadora" className="cont__pages">
      <div className="f4">
        <div className="f4__window">
          <div className="f4__window-history">{history}</div>
          <div className="f4__window-quest">
            <div className="f4__window-operation">{operation}</div>
            <div className="f4__window-text">_</div>
          </div>
          <div className="f4__window-answer">{answer}</div>
        </div>
        <div className="f4__buttons" ref={buttonsRef}>
          <Button text="7" value="7">7</Button>
          <Button text="8" value="8"></Button>
          <Button text="9" value="9"></Button>
          <Button text="DEL" value="DEL"></Button>
          <Button text="AC" value="AC"></Button>
          <Button text="4" value="4"></Button>
          <Button text="5" value="5"></Button>
          <Button text="6" value="6"></Button>
          <Button text="X" value="x"></Button>
          <Button text="/" value="/"></Button>
          <Button text="1" value="1"></Button>
          <Button text="2" value="2"></Button>
          <Button text="3" value="3"></Button>
          <Button text="+" value="+"></Button>
          <Button text="-" value="-"></Button>
          <Button text="0" value="0"></Button>
          <Button text="•" value="."></Button>
          <Button text="(" value="("></Button>
          <Button text=")" value=")"></Button>
          <Button text="=" value="="></Button>
          <Button text="√" value="v"></Button>
          <Button text="x²" value="^2"></Button>
          <Button text="^ˣ" value="^"></Button>
          <Button text="EXP" value="EXP"></Button>
          <Button text="ANS" value="ANS"></Button>
        </div>
      </div>
    </Main>
  );
}
