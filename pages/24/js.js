"use strict";
const publicaciones = document.querySelector(".publicaciones");
let contador = 0;
const filetxt = {
  content: [
    {
      nombre: "ENFERMERÍA - CONOCE",
      contenido:
        "El acoso sexual puede manifestarse a través de diversas conductas físicas y verbales que incomodan o intimidan a la víctima. Estas acciones abarcan una amplia gama de comportamientos, desde miradas insistentes o invasivas hasta el contacto físico no deseado, como empujones, pellizcos, jalones de cabello, e incluso agresiones físicas más intensas. En casos graves, puede involucrar cachetadas, arañazos, mordidas, golpes, patadas, y en algunos casos, agresiones con objetos o armas. Es importante reconocer que estas conductas constituyen una forma de violencia que vulnera la integridad y el bienestar de la víctima, y deben ser denunciadas para asegurar la protección y justicia de la persona afectada.",
      img: "img/1.png",
    },
    {
      nombre: "ING. SISTEMAS - DENUNCIA",
      contenido:
        "En casos de acoso sexual en redes sociales, la recomendación es denunciar el incidente a las autoridades correspondientes, como la Policía Nacional del Perú, mediante su central telefónica 105 o en la comisaría más cercana. Si la víctima está recibiendo mensajes inapropiados, amenazas o si se están difundiendo contenidos íntimos sin su consentimiento, se debe tomar evidencia (capturas de pantalla, enlaces) y presentarla en la denuncia. Las autoridades pueden asesorar y, en casos graves, iniciar investigaciones para proteger a la víctima y tomar acciones legales contra el acosador.",
      img: "img/2.png",
    },
    {
      nombre: "ARQUITECTURA - PROTEGETE",
      contenido:
        "Para protegerte del acoso, establece límites claros y exprésalos con firmeza, manejando los conflictos con respeto pero sin tolerar comportamientos invasivos. Identifica los lugares seguros a tu alrededor y mantén a la mano tus contactos de emergencia. Participa en talleres de prevención para fortalecer tu seguridad y aprender técnicas de defensa personal, y recuerda confiar siempre en tu instinto; si algo te incomoda o no parece estar bien, aléjate y busca ayuda. Estas medidas te permitirán actuar con más seguridad y proteger tu bienestar.",
      img: "img/3.png",
    },
    {
      nombre: "ING. AMBIENTAL - SANA",
      contenido:
        "Para sanar después de una experiencia difícil o traumática, es fundamental apoyarte en personas de confianza con quienes puedas hablar libremente y expresar tus emociones. Practicar el autocuidado mediante actividades que promuevan tu bienestar físico y mental, como la meditación, el ejercicio, o simplemente descansar, puede ayudarte a relajarte y a reconectar contigo mismo. Retomar hobbies o explorar nuevos intereses también es una forma efectiva de distraerte y encontrar momentos de alegría. Llevar un diario es otra herramienta valiosa que te permite procesar tus pensamientos y emociones, reflexionar sobre tu progreso y, con el tiempo, recuperar tu confianza y sentido de paz.",
      img: "img/4.png",
    },
    {
      nombre: "ENFERMERÍA - NO TE OLVIDES!",
      contenido:
        "En el ámbito de la enfermería, es crucial no minimizar actos menores de abuso o acoso, ya que esto contribuye a una cultura de tolerancia hacia el abuso y la violencia. Incluso los comportamientos que pueden parecer inofensivos o leves pueden escalar a agresiones más graves si no se abordan desde el principio. Cada acción, por pequeña que parezca, tiene el potencial de causar un impacto profundo en el bienestar físico y emocional de las víctimas, y a menudo, quienes rodean la situación no reconocen su gravedad. Como profesionales de la salud, el personal de enfermería tiene un rol importante en identificar estos signos de abuso, sensibilizar sobre sus efectos y proteger la integridad de cada persona, recordando siempre que ninguna forma de maltrato debe ser normalizada ni tolerada.",
      img: "img/5.png",
    }
  ]
};
const createPublicationCode = (num, name, content, url) => {
  "use strict";
  const container = document.createElement("DIV");
  container.classList.add("publicacion");
  const cubeContainer = document.createElement("DIV");
  cubeContainer.classList.add("cube__container");
  const cubeNumber = document.createElement("DIV");
  cubeNumber.textContent = `0${num+1}.`;
  cubeNumber.classList.add("cube__number");
  const cube = document.createElement("DIV");
  cube.classList.add("cube")
  const front = document.createElement("DIV");
  front.classList.add("cube__face","cube__face--front");
  const right = document.createElement("DIV");
  right.classList.add("cube__face","cube__face--right");
  const left = document.createElement("DIV");
  left.classList.add("cube__face","cube__face--left");
  const info = document.createElement("DIV");
  cube.appendChild(front);
  cube.appendChild(right);
  cube.appendChild(left);
  cubeContainer.appendChild(cubeNumber);
  cubeContainer.appendChild(cube)
  const nombre = document.createElement("H3");
  nombre.textContent = name;
  const contenido = document.createElement("P");
  contenido.textContent = content;
  info.appendChild(nombre);
  info.appendChild(contenido);
  container.appendChild(cubeContainer)
  container.appendChild(info);
  if (url !== undefined) {
     const img = document.createElement("IMG");
     img.src = url;
     container.appendChild(img);
  }

  return container;
};
const cargarMasPublicaciones = (entry) => {
  "use strict";
  if (entry[0].isIntersecting) cargarPublicaciones(5);
};
const crearPublicacion = (arr, num) => {
  const documentFragment = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    if (arr[contador] != undefined) {
      const newPublicacion = createPublicationCode(
        contador,
        arr[contador].nombre,
        arr[contador].contenido,
        arr[contador].img
      );
      documentFragment.appendChild(newPublicacion);
      contador++;
      if (i == num - 1) observer.observe(newPublicacion);
    } else if (document.getElementById("noMore") == undefined) {
    } else break;
  }
  publicaciones.appendChild(documentFragment);
};
const observer = new IntersectionObserver(cargarMasPublicaciones);
const cargarPublicaciones = async (num) => {
  "use strict";
  try {
    const request = await fetch("f17.txt");
    const contain = await request.json();
    const arr = contain.content;
    crearPublicacion(arr, num);
  } catch (e) {
    console.log(e);
    const contain = filetxt; // Archivo aparte de texto
    const arr = contain.content;
    crearPublicacion(arr, num);
  }
};
cargarPublicaciones(10);
