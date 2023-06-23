'use strict';
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
      if (arr[i] == 4   || arr[i] == 9   || arr[i] == 16  || arr[i] == 25  || arr[i] == 36  || arr[i] == 49  || arr[i] == 64  || arr[i] == 81  || arr[i] == 100 || arr[i] == 121 ||
         arr[i] == 144 || arr[i] == 169 || arr[i] == 196 || arr[i] == 225 || arr[i] == 256 || arr[i] == 289 || arr[i] == 324 || arr[i] == 361 || arr[i] == 400 || arr[i] == 441 ||
         arr[i] == 484 || arr[i] == 529 || arr[i] == 576 || arr[i] == 625 || arr[i] == 676 || arr[i] == 729 || arr[i] == 784 || arr[i] == 841 || arr[i] == 900 || arr[i] == 961) {
         let valor1 = Math.sqrt(arr[i]);
         let valor2 = num / arr[i];
         return [valor1,valor2];
         break;
      }
   }
   return Math.sqrt(num);
}
document.querySelector(".zeroValue-input").addEventListener("click",()=>{
   if (document.querySelector(".button-inactive")) {
      document.querySelector(".zeroValue-input").classList.replace("button-inactive","button-active");
      document.querySelector(".unknownValue").classList.replace("none","block");
   } else {
      document.querySelector(".zeroValue-input").classList.replace("button-active","button-inactive");
      document.querySelector(".unknownValue").classList.replace("block","none");
   }
});
document.querySelector(".submit-input").addEventListener("click",()=>{
   let a = 1, b = 1, c = 0;
   if (document.querySelector(".firstValue-input").value !== '') a = parseInt(document.querySelector(".firstValue-input").value);
   if (document.querySelector(".secondValue-input").value !== '') b = parseInt(document.querySelector(".secondValue-input").value);
   if (document.querySelector(".thirdValue-input").value !== '') c = parseInt(document.querySelector(".thirdValue-input").value);
   if (document.querySelector(".button-inactive")) {
      // ( -b +/- ^/(b * b - 4 * a * c) ) / 2 * a
      let oneValue, twoValue, threeValue, preAnswer;
      let content = document.createElement("p");
      oneValue = b * b;
      twoValue = 4 * a * c; 
      threeValue = oneValue - twoValue;
      preAnswer = Math.sqrt(threeValue);
      if (isNaN(preAnswer)) {
         if (Math.sign(threeValue) == -1) {
            // Raiz de menos uno o i
            threeValue = threeValue * -1;
            let answer = calculated(threeValue);
            if (typeof answer == "number") {
               oneValue = (- b + answer) / (2 * a);
               twoValue = (- b - answer) / (2 * a);
               let i = document.querySelectorAll(".history p").length;
               content.textContent = `${i}: ${oneValue}.i, ${twoValue}.i`;
            } else {
               threeValue = (- b) /(2 * a);
               oneValue = (+ answer[0]) /(2 * a);
               twoValue = (- answer[0]) /(2 * a);
               let i = document.querySelectorAll(".history p").length;
               content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]}.i ) /${2 * a}`;
            }
         } else {
            let answer = calculated(threeValue);
            threeValue = (- b) /(2 * a);
            oneValue = (+ answer[0]) /(2 * a);
            twoValue = (- answer[0]) /(2 * a);
            let i = document.querySelectorAll(".history p").length;
            content.textContent = `${i}: ( ${-b} ± ${answer[0]} √${answer[1]} ) /${2 * a}`;
         }
      }
      else {
         oneValue = (- b + preAnswer) / (2 * a);
         twoValue = (- b - preAnswer) / (2 * a);
         let i = document.querySelectorAll(".history p").length;
         content.textContent = `${i}: ${oneValue}, ${twoValue}`;
      }
      document.querySelector(".history").appendChild(content);
   } else {
      let x = document.querySelector(".unknownValue-input").value;
      let answerOne = a * x * x;
      let answerTwo = x * b;
      let answerZero = answerOne + answerTwo + c;
      alert("Respuesta: " + answerZero);
   }
});