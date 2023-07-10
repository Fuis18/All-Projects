'use strict';
const hexa = color => {
   let newColor = [];
   for (let i = 0; i < 2; i++) {
      switch (color.substr(i,1)) {
         case "a":
            newColor[i] = 10;
            break;
         case "b":
            newColor[i] = 11;
            break;
         case "c":
            newColor[i] = 12;
            break;
         case "d":
            newColor[i] = 13;
            break;
         case "e":
            newColor[i] = 14;
            break;
         case "f":
            newColor[i] = 15;
            break;
         default:
            newColor[i] = parseInt(color.substr(i,1));
      }
   }
   return (newColor[0] * 16 + newColor[1]);
}
const rgb = hexcolor => {
   let red = hexcolor.substr(1,2);
   let green = hexcolor.substr(3,2)
   let blue = hexcolor.substr(5,2);
   red = hexa(red);
   green = hexa(green);
   blue = hexa(blue);
   return [red,green,blue];
}
let text = 0;
let input = document.getElementById("color");
const rgb_ia = (r,g,b) => {
   let red = 0;
   let green = 0;
   let blue = 0;
   if (text == 0) {
      if (r > .5 || g > .5 || b > .5) {
         red = 255;
         green = 255;
         blue = 255;
      }
   } else if (text == 1) {
      red = r*255;
      green = g*255;
      blue = b*255;
   }
   return `rgb(${red},${green},${blue})`;
}
const div = document.getElementById("sitio");
const color_run = () => {
   let entrada = {
      rojo: rgb(input.value)[0]/255,
      verde: rgb(input.value)[1]/255,
      azul: rgb(input.value)[2]/255,
   }
   // Obtener la predicción
   let result = network.run(entrada);
   let red = result.rojo;
   let green = result.verde;
   let blue = result.azul;
   let end = rgb_ia(red,green,blue);
   // Imprimir
   div.style.color = end;
   div.style.borderWidth = "2px";
   div.style.borderStyle = "solid";
   div.style.borderColor = end;
}
let network = new brain.NeuralNetwork();
network.train([
   // Fondo negro, texto blanco
   {input: {rojo:0, verde:0, azul:0}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (32), texto blanco
   {input: {rojo:0.125, verde:0.125, azul:0.125}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (48), texto blanco
   {input: {rojo:0.1875, verde:0.1875, azul:0.1875}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (64), texto blanco
   {input: {rojo:0.25, verde:0.25, azul:0.25}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (80), texto blanco
   {input: {rojo:0.3125, verde:0.3125, azul:0.3125}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (96), texto blanco
   {input: {rojo:0.325, verde:0.325, azul:0.325}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (128), texto negro
   {input: {rojo:0.5, verde:0.5, azul:0.5}, output: {rojo:0, verde:0, azul:0}},
   // Fondo gris (192), texto negro
   {input: {rojo:0.75, verde:0.75, azul:0.75}, output: {rojo:0, verde:0, azul:0}},
   // Fondo blanco, texto negro
   {input: {rojo:1, verde:1, azul:1}, output: {rojo:0, verde:0, azul:0}},
   // Fondo rojo
   {input: {rojo:1, verde:0, azul:0}, output: {rojo:0.203921, verde:0, azul:0}},
   // Fondo rojo rojo oscuro
   {input: {rojo:.75, verde:0, azul:0}, output: {rojo:1, verde:0.803921, azul:0.803921}},
   // Fondo rojo oscuro
   {input: {rojo:.5, verde:0, azul:0}, output: {rojo:1, verde:0.513725, azul:0.513725}},
   // Fondo rojo oscuro oscuro
   {input: {rojo:.25, verde:0, azul:0}, output: {rojo:1, verde:0.160784, azul:0.160784}},
   // Fondo rojo oscuro oscuro oscuro
   {input: {rojo:.125, verde:0, azul:0}, output: {rojo:0.960784, verde:0, azul:0}},
   // Fondo rojo rojo claro
   {input: {rojo:1, verde:.25, azul:.25}, output: {rojo:0.305882, verde:0, azul:0}},
   // Fondo rojo claro
   {input: {rojo:1, verde:.5, azul:.5}, output: {rojo:0.5, verde:0, azul:0}},
   // Fondo rojo claro claro
   {input: {rojo:1, verde:.75, azul:.75}, output: {rojo:0.705882, verde:0, azul:0}},
   // Fondo midrojo
   {input: {rojo:.5, verde:.25, azul:.25}, output: {rojo:1, verde:0.709803, azul:0.709803}},
   // Fondo verde
   {input: {rojo:0, verde:1, azul:0}, output: {rojo:0, verde:0.4375, azul:0}},
   // Fondo verde verde oscuro
   {input: {rojo:0, verde:.75, azul:0}, output: {rojo:0, verde:0.270588, azul:0}},
   // Fondo verde oscuro
   {input: {rojo:0, verde:.5, azul:0}, output: {rojo:0, verde:0.913725, azul:0}},
   // Fondo verde oscuro oscuro
   {input: {rojo:0, verde:.25, azul:0}, output: {rojo:0, verde:0.725490, azul:0}},
   // Fondo verde oscuro oscuro oscuro
   {input: {rojo:0, verde:.125, azul:0}, output: {rojo:0, verde:0.6, azul:0}},
   // Fondo verde verde claro
   {input: {rojo:.25, verde:1, azul:.25}, output: {rojo:0, verde:0.270588, azul:0}},
   // Fondo verde claro
   {input: {rojo:.5, verde:1, azul:.5}, output: {rojo:0, verde:0.462745, azul:0}},
   // Fondo verde claro claro
   {input: {rojo:.75, verde:1, azul:.75}, output: {rojo:0, verde:0.5, azul:0}},
   // Fondo midverde
   {input: {rojo:.25, verde:.5, azul:.25}, output: {rojo:0.929411, verde:1, azul:0.929411}},
   // Fondo azul
   {input: {rojo:0, verde:0, azul:1}, output: {rojo:0.717647, verde:0.717647, azul:1}},
   // Fondo azul azul oscuro
   {input: {rojo:0, verde:0, azul:.75}, output: {rojo:0.588235, verde:0.588235, azul:1}},
   // Fondo azul oscuro
   {input: {rojo:0, verde:0, azul:.5}, output: {rojo:0.474509, verde:0.474509, azul:1}},
   // Fondo azul oscuro oscuro
   {input: {rojo:0, verde:0, azul:.25}, output: {rojo:0.403921, verde:0.403921, azul:1}},
   // Fondo azul oscuro oscuro oscuro
   {input: {rojo:0, verde:0, azul:.125}, output: {rojo:0.384313, verde:0.384313, azul:1}},
   // Fondo azul azul claro
   {input: {rojo:.25, verde:.25, azul:1}, output: {rojo:0, verde:0, azul:0.290119}},
   // Fondo azul claro
   {input: {rojo:.5, verde:.5, azul:1}, output: {rojo:0, verde:0, azul:0.568627}},
   // Fondo midazul
   {input: {rojo:.5, verde:.5, azul:1}, output: {rojo:0.686274, verde:0.686274, azul:1}},
   // Fondo rojo verde
   {input: {rojo:1, verde:1, azul:0}, output: {rojo:0.454901, verde:0.454901, azul:0}},
   // Fondo rojo verde rojo verde oscuro
   {input: {rojo:.75, verde:.75, azul:0}, output: {rojo:0.298039, verde:0.298039, azul:0}},
   // Fondo rojo verde oscuro
   {input: {rojo:.5, verde:.5, azul:0}, output: {rojo:0.050980, verde:0.050980, azul:0}},
   // Fondo rojo verde oscuro oscuro
   {input: {rojo:.25, verde:.25, azul:0}, output: {rojo:0.686274, verde:0.686274, azul:0}},
   // Fondo rojo verde oscuro oscuro oscuro
   {input: {rojo:.125, verde:.125, azul:0}, output: {rojo:0.686274, verde:0.686274, azul:0}},
   // Fondo rojo verde rojo verde claro
   {input: {rojo:1, verde:1, azul:.25}, output: {rojo:0.454901, verde:0.454901, azul:0}},
   // Fondo rojo verde claro
   {input: {rojo:1, verde:1, azul:.5}, output: {rojo:0.454901, verde:0.454901, azul:0}},
   // Fondo rojo verde claro claro
   {input: {rojo:1, verde:1, azul:.75}, output: {rojo:0.458823, verde:0.458823, azul:0}},
   // Fondo mid rojo verde
   {input: {rojo:.5, verde:.5, azul:.25}, output: {rojo:0.066666, verde:0.066666, azul:0}},
   // Fondo rojo azul
   {input: {rojo:1, verde:0, azul:1}, output: {rojo:0.313725, verde:0, azul:0.313725}},
   // Fondo rojo azul rojo azul oscuro
   {input: {rojo:.75, verde:0, azul:.75}, output: {rojo:1, verde:0.537254, azul:1}},
   // Fondo rojo azul oscuro
   {input: {rojo:.5, verde:0, azul:.5}, output: {rojo:1, verde:0.537254, azul:1}},
   // Fondo rojo azul oscuro oscuro
   {input: {rojo:.25, verde:0, azul:.25}, output: {rojo:0.941176, verde:0, azul:0.941176}},
   // Fondo rojo azul oscuro oscuro oscuro
   {input: {rojo:.125, verde:0, azul:.125}, output: {rojo:0.941176, verde:0, azul:0.941176}},
   // Fondo rojo azul rojo azul claro
   {input: {rojo:1, verde:.25, azul:1}, output: {rojo:0.364705, verde:0, azul:0.364705}},
   // Fondo rojo azul claro
   {input: {rojo:1, verde:.5, azul:1}, output: {rojo:0.482352, verde:0, azul:0.482352}},
   // Fondo rojo azul claro claro
   {input: {rojo:1, verde:.75, azul:1}, output: {rojo:0.639215, verde:0, azul:0.639215}},
   // Fondo mid rojo azul
   {input: {rojo:.5, verde:.25, azul:.5}, output: {rojo:1, verde:0.725490, azul:1}},
   // Fondo verde azul
   {input: {rojo:0, verde:1, azul:1}, output: {rojo:0, verde:0.4375, azul:0.4375}},
   // Fondo verde azul verde azul oscuro
   {input: {rojo:0, verde:.75, azul:75}, output: {rojo:0, verde:0.282352, azul:0.282352}},
   // Fondo verde azul oscuro
   {input: {rojo:0, verde:.5, azul:.5}, output: {rojo:0, verde:0.180392, azul:0.180392}},
   // Fondo verde azul oscuro oscuro
   {input: {rojo:0, verde:.25, azul:.25}, output: {rojo:0, verde:0.709803, azul:0.709803}},
   // Fondo verde azul oscuro oscuro oscuro
   {input: {rojo:0, verde:.125, azul:.125}, output: {rojo:0, verde:0.709803, azul:0.709803}},
   // Fondo verde azul verde azul claro
   {input: {rojo:.25, verde:1, azul:1}, output: {rojo:0, verde:0.447058, azul:0.447058}},
   // Fondo verde azul claro
   {input: {rojo:.5, verde:1, azul:1}, output: {rojo:0, verde:0.447058, azul:0.447058}},
   // Fondo verde azul claro claro
   {input: {rojo:.75, verde:1, azul:1}, output: {rojo:0, verde:0.482352, azul:0.482352}},
   // Fondo mid verde azul
   {input: {rojo:.25, verde:.5, azul:.5}, output: {rojo:0, verde:0.196078, azul:0.196078}},
   // Fondo rojo rojo verde
   {input: {rojo:1, verde:.5, azul:0}, output: {rojo:0.352941, verde:0.176470, azul:0}},
   // Fondo rojo rojo verde rojo rojo verde oscuro
   {input: {rojo:.75, verde:.375, azul:0}, output: {rojo:0.078431, verde:0.039215, azul:0}},
   // Fondo rojo rojo verde oscuro
   {input: {rojo:.5, verde:.25, azul:0}, output: {rojo:1, verde:0.5, azul:0}},
   // Fondo rojo rojo verde oscuro oscuro
   {input: {rojo:.25, verde:.125, azul:0}, output: {rojo:0.882352, verde:0.443137, azul:0}},
   // Fondo rojo rojo verde rojo rojo verde claro
   {input: {rojo:1, verde:.5, azul:.25}, output: {rojo:0.352941, verde:.176470, azul:0}},
   // Fondo rojo rojo verde claro
   {input: {rojo:1, verde:.75, azul:.5}, output: {rojo:0.419607, verde:.317647, azul:0}},
   // Fondo rojo rojo verde claro claro
   {input: {rojo:1, verde:.875, azul:.75}, output: {rojo:0.443137, verde:.388235, azul:0}},
   // Fondo mid rojo rojo verde
   {input: {rojo:.5, verde:.375, azul:.25}, output: {rojo:0.152941, verde:0.078431, azul:0}},
   // Fondo rojo rojo azul
   {input: {rojo:1, verde:0, azul:.5}, output: {rojo:0.235294, verde:0, azul:0.117647}},
   // Fondo rojo rojo azul rojo rojo azul oscuro
   {input: {rojo:.75, verde:0, azul:.375}, output: {rojo:1, verde:0.815686, azul:1}},
   // Fondo rojo rojo azul oscuro
   {input: {rojo:.5, verde:0, azul:.25}, output: {rojo:1, verde:0.5, azul:0.75}},
   // Fondo rojo rojo azul oscuro oscuro
   {input: {rojo:.25, verde:0, azul:.125}, output: {rojo:1, verde:0, azul:0.533333}},
   // Fondo rojo rojo azul rojo rojo azul claro
   {input: {rojo:1, verde:.25, azul:.5}, output: {rojo:0.309803, verde:0, azul:0.176470}},
   // Fondo rojo rojo azul claro
   {input: {rojo:1, verde:.5, azul:.75}, output: {rojo:0.478431, verde:0, azul:0.360784}},
   // Fondo rojo rojo azul claro claro
   {input: {rojo:1, verde:.75, azul:.875}, output: {rojo:0.647058, verde:0, azul:0.568627}},
   // Fondo mid rojo rojo azul
   {input: {rojo:.5, verde:.25, azul:.375}, output: {rojo:1, verde:0.694117, azul:1}},
   // Fondo rojo verde verde
   {input: {rojo:.5, verde:1, azul:0}, output: {rojo:0.223529, verde:0.443137, azul:0}},
   // Fondo rojo verde verde rojo verde verde oscuro
   {input: {rojo:.375, verde:.75, azul:0}, output: {rojo:0.137254, verde:0.278431, azul:0}},
   // Fondo rojo verde verde oscuro
   {input: {rojo:.25, verde:.5, azul:0}, output: {rojo:0.886274, verde:1, azul:0.982222}},
   // Fondo rojo verde verde oscuro oscuro
   {input: {rojo:.125, verde:.25, azul:0}, output: {rojo:0.360784, verde:0.717647, azul:0}},
   // Fondo rojo verde verde rojo verde verde claro
   {input: {rojo:.5, verde:1, azul:.25}, output: {rojo:0.223539, verde:0.443137, azul:0}},
   // Fondo rojo verde verde claro
   {input: {rojo:.75, verde:1, azul:.5}, output: {rojo:0.337254, verde:0.443137, azul:0}},
   // Fondo rojo verde verde claro claro
   {input: {rojo:.875, verde:1, azul:.75}, output: {rojo:0.227450, verde:0.5, azul:0}},
   // Fondo mid rojo verde verde
   {input: {rojo:.375, verde:.5, azul:.25}, output: {rojo:0.086274, verde:0.2, azul:0}},
   // Fondo verde verde azul
   {input: {rojo:0, verde:1, azul:.5}, output: {rojo:0, verde:0.4375, azul:0.219607}},
   // Fondo verde verde azul verde verde azul oscuro
   {input: {rojo:0, verde:.75, azul:.375}, output: {rojo:0, verde:0.274509, azul:0.376470}},
   // Fondo verde verde azul oscuro
   {input: {rojo:0, verde:.5, azul:.25}, output: {rojo:0, verde:0.164705, azul:0.082352}},
   // Fondo verde verde azul oscuro oscuro
   {input: {rojo:0, verde:.25, azul:.125}, output: {rojo:0, verde:0.725490, azul:0.360784}},
   // Fondo verde verde azul verde verde azul claro
   {input: {rojo:.25, verde:1, azul:.5}, output: {rojo:0, verde:0.447058, azul:0.223529}},
   // Fondo verde verde azul claro
   {input: {rojo:.5, verde:1, azul:.75}, output: {rojo:0, verde:0.458823, azul:0.345098}},
   // Fondo verde verde azul claro claro
   {input: {rojo:.75, verde:1, azul:.875}, output: {rojo:0, verde:0.482352, azul:0.423529}},
   // Fondo mid verde verde azul
   {input: {rojo:.25, verde:.5, azul:.375}, output: {rojo:0.956862, verde:1, azul:0.976470}},
   // Fondo rojo azul azul
   {input: {rojo:.5, verde:0, azul:1}, output: {rojo:0.917647, verde:0.835294, azul:1}},
   // Fondo rojo azul azul rojo azul azul oscuro
   {input: {rojo:.375, verde:0, azul:.75}, output: {rojo:0.819607, verde:0.639215, azul:1}},
   // Fondo rojo azul azul oscuro
   {input: {rojo:.25, verde:0, azul:.5}, output: {rojo:0.729411, verde:0.454901, azul:1}},
   // Fondo rojo azul azul oscuro oscuro
   {input: {rojo:.125, verde:0, azul:.25}, output: {rojo:0.654901, verde:0.309803, azul:1}},
   // Fondo rojo azul azul rojo azul azul claro
   {input: {rojo:.5, verde:.25, azul:1}, output: {rojo:0.160764, verde:0.082352, azul:0.325490}},
   // Fondo rojo azul azul claro
   {input: {rojo:.75, verde:.5, azul:1}, output: {rojo:0.25, verde:0.168627, azul:0.333333}},
   // Fondo rojo azul azul claro claro
   {input: {rojo:.875, verde:.75, azul:1}, output: {rojo:0.368627, verde:0.317647, azul:0.419607}},
   // Fondo mid rojo azul azul
   {input: {rojo:.375, verde:.25, azul:.5}, output: {rojo:0.858823, verde:0.682352, azul:1}},
   // Fondo verde azul azul
   {input: {rojo:0, verde:.5, azul:1}, output: {rojo:0, verde:0.105882, azul:0.207843}},
   // Fondo verde azul azul verde azul azul oscuro
   {input: {rojo:0, verde:.375, azul:.75}, output: {rojo:0.776470, verde:0.890196, azul:1}},
   // Fondo verde azul azul oscuro
   {input: {rojo:0, verde:.25, azul:.5}, output: {rojo:0.415686, verde:0.560784, azul:1}},
   // Fondo verde azul azul oscuro oscuro
   {input: {rojo:0, verde:.125, azul:.25}, output: {rojo:0, verde:0.525490, azul:1}},
   // Fondo verde azul azul verde azul azul claro
   {input: {rojo:.25, verde:.5, azul:1}, output: {rojo:0, verde:0.117647, azul:0.235394}},
   // Fondo verde azul azul claro
   {input: {rojo:.5, verde:.75, azul:1}, output: {rojo:0, verde:0.313725, azul:0.419607}},
   // Fondo verde azul azul claro claro
   {input: {rojo:.75, verde:.875, azul:1}, output: {rojo:0, verde:0.415686, azul:0.474509}},
   // Fondo mid verde azul azul
   {input: {rojo:.25, verde:.375, azul:.5}, output: {rojo:0.717647, verde:0.839215, azul:1}},
   // Fondo negro, texto blanco
   {input: {rojo:0, verde:0, azul:0}, output: {rojo:1, verde:1, azul:1}}
]);
// 0 143 0, 0 128 0, 128 64 64, 34 28 130, 128 64 0

let in_color = document.querySelector(".text input");
in_color.addEventListener("change",(e)=>{
      if (in_color.checked == false) text = 0;
      else text = 1;
      // para usarlo para que la red nos de su predicción
      color_run()
})
input.addEventListener("change",(e)=>{
   // tomar el fondo actual elegido por el usuario
   div.style.backgroundColor = input.value;
   // para usarlo para que la red nos de su predicción
   color_run()
})
// https://www.youtube.com/watch?v=UNFFLJPW7KQ
