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
      rojo: (rgb(input.value)[0]) + 1 / 256,
      verde: (rgb(input.value)[1]) + 1 / 256,
      azul: (rgb(input.value)[2]) + 1 / 256,
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
let network = new brain.NeuralNetwork({
   // Número de neuronas en cada capa oculta
   hiddenLayers: [6,6]
   // [3] inicial
   // Candidatos: 24,18,12,9,6
});
// console.log(network)
network.train([
   // Fondo blanco, texto negro
   {input: {rojo:1, verde:1, azul:1}, output: {rojo:0, verde:0, azul:0}},
   // Fondo gris (192), texto negro
   {input: {rojo:0.75, verde:0.75, azul:0.75}, output: {rojo:0, verde:0, azul:0}},
   // Fondo gris (128), texto negro
   {input: {rojo:0.5, verde:0.5, azul:0.5}, output: {rojo:0, verde:0, azul:0}},
   // Fondo gris (96), texto blanco
   {input: {rojo:0.325, verde:0.375, azul:0.375}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (80), texto blanco
   {input: {rojo:0.3125, verde:0.3125, azul:0.3125}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (64), texto blanco
   {input: {rojo:0.25, verde:0.25, azul:0.25}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (48), texto blanco
   {input: {rojo:0.1875, verde:0.1875, azul:0.1875}, output: {rojo:1, verde:1, azul:1}},
   // Fondo gris (32), texto blanco
   {input: {rojo:0.125, verde:0.125, azul:0.125}, output: {rojo:1, verde:1, azul:1}},
   // Fondo negro, texto blanco
   {input: {rojo:0, verde:0, azul:0}, output: {rojo:1, verde:1, azul:1}},

   // Fondo rojo
   {input: {rojo:1, verde:0, azul:0}, output: {rojo:0.21875, verde:0, azul:0}},
   // Fondo rojo rojo oscuro
   {input: {rojo:.75, verde:0, azul:0}, output: {rojo:1, verde:0.8125, azul:0.8125}},
   // Fondo rojo oscuro
   {input: {rojo:.5, verde:0, azul:0}, output: {rojo:1, verde:0.53125, azul:0.53125}},
   // Fondo rojo oscuro oscuro
   {input: {rojo:.25, verde:0, azul:0}, output: {rojo:1, verde:0.15625, azul:0.15625}},
   // Fondo rojo oscuro oscuro oscuro
   {input: {rojo:.125, verde:0, azul:0}, output: {rojo:0.96875, verde:0, azul:0}},
   // Fondo rojo rojo claro
   {input: {rojo:1, verde:.25, azul:.25}, output: {rojo:0.3125, verde:0, azul:0}},
   // Fondo rojo rojo mid
   {input: {rojo:.75, verde:.1875, azul:.1875}, output: {rojo:1, verde:0.875, azul:0.875}},
   // Fondo rojo rojo mid oscuro
   {input: {rojo:.5, verde:.125, azul:.125}, output: {rojo:1, verde:0.5625, azul:0.5625}},
   // Fondo rojo rojo mid oscuro oscuro
   {input: {rojo:.25, verde:.0625, azul:.0625}, output: {rojo:1, verde:0.25, azul:0.25}},
   // Fondo rojo rojo mid oscuro oscuro oscuro
   {input: {rojo:.125, verde:.03125, azul:.03125}, output: {rojo:0.96875, verde:0, azul:0}},
   // Fondo rojo claro
   {input: {rojo:1, verde:.5, azul:.5}, output: {rojo:0.5, verde:0, azul:0}},
   // Fondo rojo rojo mid claro
   {input: {rojo:.75, verde:.375, azul:.375}, output: {rojo:0.15625, verde:0, azul:0}},
   // Fondo rojo mid mid
   {input: {rojo:.5, verde:.25, azul:.25}, output: {rojo:1, verde:0.71875, azul:0.71875}},
   // Fondo rojo mid mid oscuro
   {input: {rojo:.25, verde:.125, azul:.125}, output: {rojo:1, verde:0.328125, azul:0.328125}},
   // Fondo rojo mid mid oscuro oscuro
   {input: {rojo:.125, verde:.0625, azul:.0625}, output: {rojo:1, verde:0, azul:0}},
   // Fondo rojo claro claro
   {input: {rojo:1, verde:.75, azul:.75}, output: {rojo:0.71875, verde:0, azul:0}},
   // Fondo rojo rojo mid claro claro
   {input: {rojo:.75, verde:.5625, azul:.5625}, output: {rojo:0.4375, verde:0, azul:0}},
   // Fondo rojo mid claro
   {input: {rojo:.75, verde:.375, azul:.375}, output: {rojo:0.25, verde:0, azul:0}},
   // Fondo rojo mid mid mid
   {input: {rojo:.25, verde:.1875, azul:.1875}, output: {rojo:1, verde:0.375, azul:0.375}},
   // Fondo rojo mid mid mid oscuro
   {input: {rojo:.125, verde:.09375, azul:.09375}, output: {rojo:1, verde:0.625, azul:0.625}},

   // Fondo verde
   {input: {rojo:0, verde:1, azul:0}, output: {rojo:0, verde:0.4375, azul:0}},
   // Fondo verde verde oscuro
   {input: {rojo:0, verde:.75, azul:0}, output: {rojo:0, verde:0.28125, azul:0}},
   // Fondo verde oscuro
   {input: {rojo:0, verde:.5, azul:0}, output: {rojo:0.8125, verde:1, azul:0.8125}},
   // Fondo verde oscuro oscuro
   {input: {rojo:0, verde:.25, azul:0}, output: {rojo:0, verde:0.71875, azul:0}},
   // Fondo verde oscuro oscuro oscuro
   {input: {rojo:0, verde:.125, azul:0}, output: {rojo:0, verde:0.59375, azul:0}},
   // Fondo verde verde claro
   {input: {rojo:.25, verde:1, azul:.25}, output: {rojo:0, verde:0.28125, azul:0}},
   // Fondo verde verde mid
   {input: {rojo:.1875, verde:.75, azul:.1875}, output: {rojo:0, verde:0.28125, azul:0}},
   // Fondo verde verde mid oscuro
   {input: {rojo:.125, verde:.5, azul:.125}, output: {rojo:0, verde:0.90625, azul:0}},
   // Fondo verde verde mid oscuro oscuro
   {input: {rojo:.0625, verde:.25, azul:.0625}, output: {rojo:0, verde:0.72875, azul:0}},
   // Fondo verde verde mid oscuro oscuro oscuro
   {input: {rojo:.03125, verde:.125, azul:.03125}, output: {rojo:0, verde:0.59375, azul:0}},
   // Fondo verde claro
   {input: {rojo:.5, verde:1, azul:.5}, output: {rojo:0, verde:0.46875, azul:0}},
   // Fondo verde verde mid claro
   {input: {rojo:.375, verde:.75, azul:.375}, output: {rojo:0, verde:0.28125, azul:0}},
   // Fondo verde mid mid
   {input: {rojo:.25, verde:.5, azul:.25}, output: {rojo:0.9375, verde:1, azul:0.9375}},
   // Fondo verde mid mid oscuro
   {input: {rojo:.125, verde:.25, azul:.125}, output: {rojo:0, verde:0.75, azul:0}},
   // Fondo verde mid mid oscuro oscuro
   {input: {rojo:.0625, verde:.125, azul:.0625}, output: {rojo:0, verde:0.59375, azul:0}},
   // Fondo verde claro claro
   {input: {rojo:.75, verde:1, azul:.75}, output: {rojo:0, verde:0.5, azul:0}},
   // Fondo verde verde mid claro claro
   {input: {rojo:.5625, verde:.75, azul:.5625}, output: {rojo:0, verde:0.3125, azul:0}},
   // Fondo verde mid mid claro
   {input: {rojo:.375, verde:.5, azul:.375}, output: {rojo:0, verde:0.21875, azul:0}},
   // Fondo verde mid mid mid
   {input: {rojo:.1875, verde:.25, azul:.1875}, output: {rojo:0.375, verde:1, azul:0.375}},
   // Fondo verde mid mid mid oscuro
   {input: {rojo:.09375, verde:.125, azul:.09375}, output: {rojo:0.625, verde:1, azul:0.625}},

   // Fondo azul
   {input: {rojo:0, verde:0, azul:1}, output: {rojo:0.71875, verde:0.71875, azul:1}},
   // Fondo azul azul oscuro
   {input: {rojo:0, verde:0, azul:.75}, output: {rojo:0.59375, verde:0.59375, azul:1}},
   // Fondo azul oscuro
   {input: {rojo:0, verde:0, azul:.5}, output: {rojo:0.46875, verde:0.46875, azul:1}},
   // Fondo azul oscuro oscuro
   {input: {rojo:0, verde:0, azul:.25}, output: {rojo:0.40625, verde:0.40625, azul:1}},
   // Fondo azul oscuro oscuro oscuro
   {input: {rojo:0, verde:0, azul:.125}, output: {rojo:0.375, verde:0.375, azul:1}},
   // Fondo azul azul claro
   {input: {rojo:.25, verde:.25, azul:1}, output: {rojo:0, verde:0, azul:0.28125}},
   // Fondo azul azul mid
   {input: {rojo:.1875, verde:.1875, azul:.75}, output: {rojo:0.6875, verde:0.6875, azul:1}},
   // Fondo azul azul mid oscuro
   {input: {rojo:.125, verde:.125, azul:.5}, output: {rojo:0.53125, verde:0.53125, azul:1}},
   // Fondo azul azul mid oscuro oscuro
   {input: {rojo:.0625, verde:.0625, azul:.25}, output: {rojo:0.4375, verde:0.4375, azul:1}},
   // Fondo azul azul mid oscuro oscuro oscuro
   {input: {rojo:.03125, verde:.03125, azul:.125}, output: {rojo:0.40625, verde:0.40625, azul:1}},
   // Fondo azul claro
   {input: {rojo:.5, verde:.5, azul:1}, output: {rojo:0, verde:0, azul:0.5625}},
   // Fondo azul azul mid claro
   {input: {rojo:.375, verde:.375, azul:.75}, output: {rojo:0, verde:0, azul:0.46875}},
   // Fondo azul mid mid
   {input: {rojo:.25, verde:.25, azul:.5}, output: {rojo:0.6875, verde:0.6875, azul:1}},
   // Fondo azul mid mid oscuro
   {input: {rojo:.125, verde:.125, azul:.25}, output: {rojo:0.484375, verde:0.484375, azul:1}},
   // Fondo azul mid mid oscuro oscuro
   {input: {rojo:.0625, verde:.0625, azul:.125}, output: {rojo:0.40625, verde:0.40625, azul:1}},
   // Fondo azul claro claro
   {input: {rojo:.75, verde:.75, azul:1}, output: {rojo:0.125, verde:0.125, azul:1}},
   // Fondo azul azul mid claro claro
   {input: {rojo:.5625, verde:.5625, azul:.75}, output: {rojo:0, verde:0, azul:0.625}},
   // Fondo azul mid mid claro
   {input: {rojo:.375, verde:.375, azul:.5}, output: {rojo:0, verde:0, azul:0.328125}},
   // Fondo azul mid mid mid
   {input: {rojo:.1875, verde:.1875, azul:.25}, output: {rojo:0.375, verde:0.375, azul:1}},
   // Fondo azul mid mid mid oscuro
   {input: {rojo:.5, verde:.5, azul:1}, output: {rojo:0.625, verde:0.625, azul:1}},

   // Fondo rojo verde
   {input: {rojo:1, verde:1, azul:0}, output: {rojo:0.453125, verde:0.453125, azul:0}},
   // Fondo rojo verde rojo verde oscuro
   {input: {rojo:.75, verde:.75, azul:0}, output: {rojo:0.28125, verde:0.28125, azul:0}},
   // Fondo rojo verde oscuro
   {input: {rojo:.5, verde:.5, azul:0}, output: {rojo:0.046875, verde:0.046875, azul:0}},
   // Fondo rojo verde oscuro oscuro
   {input: {rojo:.25, verde:.25, azul:0}, output: {rojo:0.6875, verde:0.6875, azul:0}},
   // Fondo rojo verde oscuro oscuro oscuro
   {input: {rojo:.125, verde:.125, azul:0}, output: {rojo:0.6875, verde:0.6875, azul:0}},
   // Fondo rojo verde rojo verde claro
   {input: {rojo:1, verde:1, azul:.25}, output: {rojo:0.453125, verde:0.453125, azul:0}},
   // Fondo rojo verde rojo verde mid
   {input: {rojo:.75, verde:.75, azul:.1875}, output: {rojo:0.296875, verde:0.296875, azul:0}},
   // Fondo rojo verde rojo verde mid oscuro
   {input: {rojo:.5, verde:.5, azul:.125}, output: {rojo:0.6875, verde:0.6875, azul:0}},
   // Fondo rojo verde rojo verde mid oscuro oscuro
   {input: {rojo:.25, verde:.25, azul:.0625}, output: {rojo:0.71875, verde:0.71875, azul:0}},
   // Fondo rojo verde rojo verde mid oscuro oscuro oscuro
   {input: {rojo:.125, verde:.125, azul:.03125}, output: {rojo:0.75, verde:0.75, azul:0}},
   // Fondo rojo verde claro
   {input: {rojo:1, verde:1, azul:.5}, output: {rojo:0.453125, verde:0.453125, azul:0}},
   // Fondo rojo verde rojo verde mid claro
   {input: {rojo:.75, verde:.75, azul:.375}, output: {rojo:0.296875, verde:0.296875, azul:0}},
   // Fondo rojo verde mid mid
   {input: {rojo:.5, verde:.5, azul:.25}, output: {rojo:0.0625, verde:0.0625, azul:0}},
   // Fondo rojo verde mid mid oscuro
   {input: {rojo:.25, verde:.25, azul:.125}, output: {rojo:0.6875, verde:0.6875, azul:0}},
   // Fondo rojo verde mid mid oscuro oscuro
   {input: {rojo:.125, verde:.125, azul:.0625}, output: {rojo:.75, verde:.75, azul:0}},
   // Fondo rojo verde claro claro
   {input: {rojo:1, verde:1, azul:.75}, output: {rojo:0.458823, verde:0.458823, azul:0}},
   // Fondo rojo verde rojo verde mid claro claro
   {input: {rojo:.75, verde:.75, azul:.5625}, output: {rojo:0.3125, verde:0.3125, azul:0}},
   // Fondo rojo verde mid mid claro
   {input: {rojo:.5, verde:.5, azul:.375}, output: {rojo:0.21875, verde:0.21875, azul:0}},
   // Fondo rojo verde mid mid mid
   {input: {rojo:.25, verde:.25, azul:.1875}, output: {rojo:0.6875, verde:0.6875, azul:0}},
   // Fondo rojo verde mid mid mid oscuro
   {input: {rojo:.125, verde:.125, azul:.09375}, output: {rojo:.75, verde:.75, azul:0}},

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
   // Fondo rojo azul rojo azul mid mid
   {input: {rojo:.75, verde:.1875, azul:.75}, output: {rojo:1, verde:0.71875, azul:1}},
   // Fondo rojo azul rojo azul mid oscuro
   {input: {rojo:.5, verde:.125, azul:.5}, output: {rojo:1, verde:0.59375, azul:1}},
   // Fondo rojo azul rojo azul mid oscuro oscuro
   {input: {rojo:.25, verde:.0625, azul:.25}, output: {rojo:0.96875, verde:0, azul:0.96875}},
   // Fondo rojo azul rojo azul mid oscuro oscuro oscuro
   {input: {rojo:.125, verde:.03125, azul:.125}, output: {rojo:0.875, verde:0, azul:0.875}},
   // Fondo rojo azul claro
   {input: {rojo:1, verde:.5, azul:1}, output: {rojo:0.482352, verde:0, azul:0.482352}},
   // Fondo rojo azul rojo azul mid mid
   {input: {rojo:.75, verde:.375, azul:.75}, output: {rojo:0.40625, verde:0, azul:0.40625}},
   // Fondo rojo azul mid mid
   {input: {rojo:.5, verde:.25, azul:.5}, output: {rojo:1, verde:0.4375, azul:1}},
   // Fondo rojo azul rojo azul mid oscuro oscuro
   {input: {rojo:.25, verde:.125, azul:.25}, output: {rojo:0.8125, verde:0, azul:0.8125}},
   // Fondo rojo azul rojo azul mid oscuro oscuro oscuro
   {input: {rojo:.125, verde:.0625, azul:.125}, output: {rojo:0.875, verde:0, azul:1}},
   // Fondo rojo azul claro claro
   {input: {rojo:1, verde:.75, azul:1}, output: {rojo:0.639215, verde:0, azul:0.639215}},
   // Fondo rojo azul rojo azul mid mid
   {input: {rojo:.75, verde:.5625, azul:.75}, output: {rojo:0.4375, verde:0, azul:0.4375}},
   // Fondo rojo azul mid mid
   {input: {rojo:.5, verde:.375, azul:.5}, output: {rojo:0.25, verde:0, azul:0.25}},
   // Fondo rojo azul rojo azul mid oscuro oscuro
   {input: {rojo:.25, verde:.1875, azul:.25}, output: {rojo:1, verde:0.375, azul:1}},
   // Fondo rojo azul rojo azul mid oscuro oscuro oscuro
   {input: {rojo:.125, verde:.09375, azul:.125}, output: {rojo:1, verde:0.625, azul:1}},

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
   {input: {rojo:.25, verde:1, azul:1}, output: {rojo:0, verde:0.4375, azul:0.4375}},
   // Fondo verde azul verde azul mid
   {input: {rojo:.1875, verde:.75, azul:75}, output: {rojo:0, verde:0.28125, azul:0.28125}},
   // Fondo verde azul verde azul mid oscuro
   {input: {rojo:.125, verde:.5, azul:.5}, output: {rojo:0, verde:0.1875, azul:0.1875}},
   // Fondo verde azul verde azul mid oscuro oscuro
   {input: {rojo:.0625, verde:.25, azul:.25}, output: {rojo:0, verde:0.71875, azul:0.71875}},
   // Fondo verde azul verde azul mid oscuro oscuro oscuro
   {input: {rojo:.03125, verde:.125, azul:.125}, output: {rojo:0, verde:0.8125, azul:0.8125}},
   // Fondo verde azul claro
   {input: {rojo:.5, verde:1, azul:1}, output: {rojo:0, verde:0.453125, azul:0.453125}},
   // Fondo verde azul verde azul mid claro
   {input: {rojo:.375, verde:.75, azul:75}, output: {rojo:0, verde:0.296875, azul:0.296875}},
   // Fondo verde azul mid mid
   {input: {rojo:.25, verde:.5, azul:.5}, output: {rojo:0, verde:0.1875, azul:0.1875}},
   // Fondo verde azul mid oscuro
   {input: {rojo:.125, verde:.25, azul:.25}, output: {rojo:0, verde:0.71875, azul:0.71875}},
   // Fondo verde azul mid oscuro oscuro
   {input: {rojo:.0625, verde:.125, azul:.125}, output: {rojo:0, verde:.75, azul:.75}},
   // Fondo verde azul claro claro
   {input: {rojo:.75, verde:1, azul:1}, output: {rojo:0, verde:0.46875, azul:0.46875}},
   // Fondo verde azul verde azul mid claro claro
   {input: {rojo:.5625, verde:.75, azul:75}, output: {rojo:0, verde:0.3125, azul:0.3125}},
   // Fondo verde azul mid mid claro
   {input: {rojo:.375, verde:.5, azul:.5}, output: {rojo:0, verde:0.21875, azul:0.21875}},
   // Fondo verde azul mid mid mid
   {input: {rojo:.1875, verde:.25, azul:.25}, output: {rojo:.375, verde:1, azul:1}},
   // Fondo verde azul mid mid mid oscuro
   {input: {rojo:.09375, verde:.125, azul:.125}, output: {rojo:.625, verde:1, azul:1}},

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
   {input: {rojo:1, verde:.75, azul:.875}, output: {rojo:0.647058, verde:0, azul:0.5625}},
   // Fondo mid rojo rojo azul
   {input: {rojo:.5, verde:.25, azul:.375}, output: {rojo:1, verde:0.694117, azul:1}},

   // Fondo rojo verde verde
   {input: {rojo:.5, verde:1, azul:0}, output: {rojo:0.223529, verde:0.443137, azul:0}},
   // Fondo rojo verde verde rojo verde verde oscuro
   {input: {rojo:.375, verde:.75, azul:0}, output: {rojo:0.137254, verde:0.278431, azul:0}},
   // Fondo rojo verde verde oscuro
   {input: {rojo:.25, verde:.5, azul:0}, output: {rojo:0.886274, verde:1, azul:0.982222}},
   // Fondo rojo verde verde oscuro oscuro
   {input: {rojo:.125, verde:.25, azul:0}, output: {rojo:0.360784, verde:0.71875, azul:0}},
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
   {input: {rojo:0, verde:.25, azul:.125}, output: {rojo:0, verde:0.71875, azul:0.360784}},
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
   {input: {rojo:.25, verde:0, azul:.5}, output: {rojo:0.729411, verde:0.453125, azul:1}},
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
   {input: {rojo:.75, verde:.875, azul:1}, output: {rojo:0, verde:0.415686, azul:0.46875}},
   // Fondo mid verde azul azul
   {input: {rojo:.25, verde:.375, azul:.5}, output: {rojo:0.71875, verde:0.839215, azul:1}},
   // Fondo negro, texto blanco
   {input: {rojo:0, verde:0, azul:0}, output: {rojo:1, verde:1, azul:1}}
],{
   // learningRate: 0.03, // Tasa de aprendizaje
   // errorThresh: 0.0005, // Umbral de error para detener el entrenamiento
   // iterations: 200000, // Número de iteraciones/épocas de entrenamiento
   // log: true, // Mostrar información de entrenamiento en la consola
   // logPeriod: 500 // Mostrar información de entrenamiento cada 10 iteraciones
});
// 0 143 0, 0 128 0, 128 64 64, 34 28 130, 128 64 0, 138 112 0, 138 128 0, 139 121 50, 128 72 72, 128 128 64

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

// const trainedModel = net.toJSON();
// 'trainedModel' contiene toda la configuración y los pesos del modelo entrenado

// Puedes guardar 'trainedModel' en un archivo o en una base de datos para su uso posterior

// const savedModel = ... // Carga 'trainedModel' desde el archivo o la base de datos

// const net = new brain.NeuralNetwork();
// net.fromJSON(savedModel);
// El modelo se carga y está listo para ser utilizado para inferencia sin necesidad de entrenamiento adicional