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

let network = new brain.NeuralNetwork();
network.train([
   // Fondo negro, texto blanco
   {input: {rojo:0, verde:0, azul:0},output: {color:1}},
   // Fondo blanco, texto negro
   {input: {rojo:1, verde:1, azul:1},output: {color:0}},
   // Fondo verde, texto negro
   {input: {rojo:0, verde:1, azul:0},output: {color:0}},
   // Fondo azul, texto negro
   {input: {rojo:0, verde:.43, azul:1},output: {color:1}},
   // Fondo verde, texto negro
   {input: {rojo:1, verde:0, azul:0},output: {color:1}},
   // // Fondo Naranja, texto blanco
   {input: {rojo:1, verde:.5, azul:0},output: {color:1}}
]);

let input = document.getElementById("color");
input.addEventListener("change",(e)=>{
   console.log(rgb(input.value)[0]/255,rgb(input.value)[1]/255,rgb(input.value)[1]/255);
   let div = document.getElementById("sitio");
   div.style.backgroundColor = input.value;

   // tomar el fondo actual elegido por el usuario
   // para usarlo para que la red nos de su predicción
   let entrada = {
      rojo: rgb(input.value)[0]/255,
      verde: rgb(input.value)[1]/255,
      azul: rgb(input.value)[2]/255
   }

   // Obtener la predicción
   let result = network.run(entrada);
   // Imprimir
   console.log(result)
   // Si resultado > .5, se considera color de texto blanco
   if (result.color > .5) {
      div.style.color = "#fff";
   } else {
      div.style.color = "#000";
   }
})
// https://www.youtube.com/watch?v=UNFFLJPW7KQ