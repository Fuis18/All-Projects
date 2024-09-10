'use strict';
let num1 = 1, num2 = 1, num3 = 1;
let left = document.querySelector(".f1__input1-left");
let right = document.querySelector(".f1__input1-right");
let down = document.querySelector(".f1__input1-down");
document.querySelectorAll(".f1__container input").forEach((input) => {
   input.addEventListener("keyup",(e) => {
      if (left.value != '') num1 = left.value;
      if (right.value != '') num2 = right.value;
      if (down.value != '') num3 = down.value;
      let res = (num1 * num2) / num3;
      document.querySelector(".result1").textContent = "Resultado: " + res;
   })
})