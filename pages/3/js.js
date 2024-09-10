'use strict';
let container = document.querySelector(".container");
let fragment1 = document.createDocumentFragment();
let numberActive = document.querySelector(".numbers-input");
const validarCantidad = () => {'use strict';
   if (document.querySelector(".amount-input").value > 50000) {
      document.querySelector(".bigAmount-error").classList.replace("error-inactive","error-active");
   } else if (document.querySelector(".amount-input").value < 0 || document.querySelector(".amount-input").value == "") {
      document.querySelector(".smallAmount-error").classList.replace("error-inactive","error-active");
   } else{
      document.querySelector(".smallAmount-error").classList.replace("error-active","error-inactive");
      document.querySelector(".bigAmount-error").classList.replace("error-active","error-inactive");
   }
}
numberActive.addEventListener("click",()=> {
   if (document.querySelector(".button-inactive")) {
      document.querySelector(".after").classList.replace("none","block");
      document.querySelector(".after-input").classList.replace("none","block");
      document.querySelector(".zeros").classList.replace("none","block");
      numberActive.classList.replace("button-inactive","button-active");
   } else {
      document.querySelector(".after").classList.replace("block","none");
      document.querySelector(".after-input").classList.replace("block","none");
      document.querySelector(".zeros").classList.replace("block","none");
      numberActive.classList.replace("button-active","button-inactive");
   }
});
document.querySelector(".amount-input").addEventListener("keyup", validarCantidad);
document.querySelector(".amount-input").addEventListener("blur", validarCantidad);
document.querySelector(".submit").addEventListener("click",()=> {'use strict';
   if (document.querySelector(".error-active") == null && document.querySelector(".amount-input").value != 0) {
      let cantidad = document.querySelector(".amount-input").value;
      let listado = document.querySelector(".listado-input").checked;
      let antes = document.querySelector(".before-input").value;
      let answer;
      if (numberActive.className == "numbers-input button-active") {
         let luego = document.querySelector(".after-input").value;
         let ceros = document.querySelector(".zeros-input").checked;
         if (ceros) {
            for (let i = 0; i <= cantidad; i++) {
               let div = document.createElement("DIV");
               if (listado) div.classList.add("div-block");
               else div.classList.add("div-inline");
               let i9_i100 = i > 9 && i < 100;
               let i99_i1000 = i > 99 && i < 1000;
               let a99_a1000 = cantidad > 99 && cantidad < 1000;
               let l999_l10000 = cantidad > 999 && cantidad < 10000;
               let a9999_a100000 = cantidad > 9999 && cantidad < 100000;
               let d0 = `${antes}0${i}${luego}`;
               let d00 = `${antes}00${i}${luego}`;
               let d000 = `${antes}000${i}${luego}`;
               let d0000 = `${antes}0000${i}${luego}`;
               // 00 - 99
               if (i < 10 && cantidad < 100) answer = d0;
               // 000 - 999
               else if (i < 10 && a99_a1000) answer = d00;
               else if (i9_i100 && a99_a1000) answer = d0;
               // 0000 - 9999
               else if (i < 10 && l999_l10000) answer = d000;
               else if (i9_i100 && l999_l10000) answer = d00;
               else if (i99_i1000 && l999_l10000) answer = d0;
               // 00000 - 99999
               else if (i < 10 && a9999_a100000) answer = d0000;
               else if (i9_i100 && a9999_a100000) answer = d000;
               else if (i99_i1000 && a9999_a100000) answer = d00;
               else if (i > 999 && i < 10000 && a9999_a100000) answer = d0;
               // last
               else answer = antes + i + luego;
               if (!listado) answer = answer + "&nbsp;";
               div.innerHTML = answer;
               fragment1.appendChild(div);
            }
         } else {
            for (let i = 0; i <= cantidad; i++) {
               let div = document.createElement("DIV");
               if (listado) div.classList.add("div-block");
               else div.classList.add("div-inline");
               let i9_i100 = i > 9 && i < 100;
               let i99_i1000 = i > 99 && i < 1000;
               let a99_a1000 = cantidad > 99 && cantidad < 1000;
               let l999_l10000 = cantidad > 999 && cantidad < 10000;
               let a9999_a100000 = cantidad > 9999 && cantidad < 100000;
               console.log(antes,luego)
               let d0 = `&nbsp;${antes}${i}${luego}`;
               let d00 = `&nbsp;&nbsp;${antes}${i}${luego}`;
               let d000 = `&nbsp;&nbsp;&nbsp;${antes}${i}${luego}`;
               let d0000 = `&nbsp;&nbsp;&nbsp;&nbsp;${antes}${i}${luego}`;
               // 00 - 99
               if (i < 10 && cantidad < 100) answer = d0;
               // 000 - 999
               else if (i < 10 && a99_a1000) answer = d00;
               else if (i9_i100 && a99_a1000) answer = d0;
               // 0000 - 9999
               else if (i < 10 && l999_l10000) answer = d000;
               else if (i9_i100 && l999_l10000) answer = d00;
               else if (i99_i1000 && l999_l10000) answer = d0;
               // 00000 - 99999
               else if (i < 10 && a9999_a100000) answer = d0000;
               else if (i9_i100 && a9999_a100000) answer = d000;
               else if (i99_i1000 && a9999_a100000) answer = d00;
               else if (i > 999 && i < 10000 && a9999_a100000) answer = d0;
               // last
               else answer = antes + i + luego;
               if (!listado) answer = answer + "&nbsp;";
               div.innerHTML = answer;
               fragment1.appendChild(div);
            }
         }
      } else {
         for (let i = 0; i <= cantidad; i++) {
            let div = document.createElement("DIV");
            if (listado) div.classList.add("div-block");
            else div.classList.add("div-inline");
            answer = antes;
            if (!listado) answer = answer + "&nbsp;";
            div.innerHTML = answer;
            fragment1.appendChild(div);
         }
      }
      container.appendChild(fragment1);
      document.querySelector(".f3").remove();
   }
});