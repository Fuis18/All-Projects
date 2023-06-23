'use strict';
let num1 = 1, num2 = 1, num3 = 1;
document.querySelector(".f1__answer button").addEventListener("click",()=>{
   if (document.querySelector(".f1__input1-left").value != '') num1 = document.querySelector(".f1__input1-left").value;
   if (document.querySelector(".f1__input1-right").value != '') num2 = document.querySelector(".f1__input1-right").value;
   if (document.querySelector(".f1__input1-down").value != '') num3 = document.querySelector(".f1__input1-down").value;
   let res = (num1 * num2) / num3;
   document.querySelector(".result1").textContent = "Resultado: " + res;
});