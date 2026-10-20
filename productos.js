/* ============================================================
   ROSA DE LANA — Archivo de productos y configuración
   ============================================================
   Este es el ÚNICO archivo que necesitas tocar para:
     - Agregar un producto nuevo
     - Quitar un producto
     - Cambiar precios, nombres, descripciones o fotos

   No necesitas saber programar: solo sigue el patrón de abajo.
   Guarda el archivo y sube los cambios a GitHub. Listo.
   ============================================================ */


/* ------------------------------------------------------------
   1) CONFIGURACIÓN GENERAL
   Cambia estos datos por los tuyos.
   ------------------------------------------------------------ */
const CONFIG = {
  // Número de WhatsApp SIN "+" y SIN espacios. Perú empieza con 51.
  // Ejemplo real: si tu número es 987 654 321, escribe "51987654321"
  whatsapp: "51958603842",

  // Usuario de Instagram (con o sin @, se muestra tal cual lo escribas)
  instagram: "@rosadelana",
  instagramUrl: "https://instagram.com/rosadelana",

  // Correo de contacto
  email: "hola@rosadelana.com",

  // Ranitas de colección: edición que se muestra en la portada (ej: "Halloween 2026").
  // Se muestran las ranitas disponibles cuyo campo "edicion" contenga este texto.
  // Déjalo "" para mostrar todas las ranitas disponibles.
  edicionActual: "Halloween 2026",

  // Mensaje que se abre en WhatsApp cuando alguien pregunta por un producto
  // Puedes usar {producto} y {precio}, se reemplazan automáticamente
  mensajeWhatsappProducto: "¡Hola! Vi «{producto}» ({precio}) en la web de Rosa de Lana y quisiera más información 🌸",

  // Mensaje del botón general "Escribir por WhatsApp"
  mensajeWhatsappGeneral: "¡Hola! Vi la web de Rosa de Lana y quisiera hacer una consulta 🌸",

  // Mensaje del botón "Contar mi idea" (encargos a medida)
  mensajeWhatsappEncargo: "¡Hola! Me gustaría encargar una pieza tejida a mi gusto. Les cuento mi idea 🌸",

  // Comidas (página aparte: comidas.html)
  // Pon false para esconder la página y todos sus enlaces.
  comidasActivo: true,

  // Turrones de temporada: con true aparece una franja en la portada,
  // una etiqueta "Temporada" en el menú y la cinta "De temporada" en los turrones.
  // Cuando termine la época, pon false y todo eso desaparece.
  turronesTemporada: true,
  // Fecha límite para recibir pedidos (opcional). Ej: "20 de octubre". Déjalo "" si no quieres mostrarla.
  turronesFechaLimite: "",
  textoTemporada: "Turrones de temporada: ya puedes hacer tu pedido.",
  mensajeWhatsappComida: "¡Hola! Vi «{producto}» ({precio}) en la sección de comidas de Rosa de Lana y quisiera hacer un pedido 🍽️ Lo necesitaría para el día: ",
  // Texto que aparece arriba de las comidas (anticipación, entrega, etc.)
  avisoComidas: "Todo se prepara por encargo. Coordinamos fecha, cantidad y forma de entrega por WhatsApp.",
};


/* ------------------------------------------------------------
   2) CATEGORÍAS
   Si agregas una categoría nueva a un producto (paso 3), agrégala
   también aquí para que aparezca como filtro. El "id" debe escribirse
   IGUAL en ambos lugares (sin tildes, en minúscula).
   ------------------------------------------------------------ */
const CATEGORIAS = [
  { id: "ranitas", nombre: "Ranitas de colección" },
  { id: "carteras", nombre: "Carteras" },
  { id: "amigurumis", nombre: "Amigurumis" },
  { id: "accesorios", nombre: "Accesorios" },
  { id: "otros", nombre: "Otros" },
];


/* ------------------------------------------------------------
   3) PRODUCTOS
   Copia un bloque { ... } completo, pégalo antes del "];" final,
   cambia los datos y listo — ya tienes un producto nuevo.

   Campos:
     id           -> texto único, sin espacios (ej: "cartera-01")
     nombre       -> nombre del producto
     categoria    -> debe coincidir con un "id" de CATEGORIAS
     precio       -> solo el número, sin "S/" (ej: 85, no "85 soles")
     imagen       -> subcarpeta + nombre del archivo, dentro de "fotos/".
                     Ejemplos: "carteras/cartera-negra.jpeg"
                               "amigurumis/amigurumi-pikachu.jpeg"
                     (se usa como foto principal / única si no agregas "imagenes")
     imagenes     -> OPCIONAL. Si quieres mostrar varias fotos del mismo
                     producto (para que la gente vea más ángulos al hacer
                     clic), agrega esta lista en vez de una sola "imagen":
                       imagenes: ["carteras/cartera-negra.jpeg", "carteras/cartera-negra-2.jpeg"],
                     Si no la agregas, no pasa nada — se usa "imagen" sola.
     descripcion  -> texto corto describiendo la pieza (aparece en el
                     detalle al hacer clic en el producto)
     destacado    -> true / false — true lo resalta con una cinta "Destacado"
     edicion      -> OPCIONAL. Texto de la colección, ej: "Halloween 2026 · N° 3 de 8" (se ve en la tarjeta y en el detalle)
     disponible   -> true / false — false lo muestra como "Vendido" y no se puede consultar

   CARPETAS dentro de "fotos/":
     fotos/carteras/     -> carteras
     fotos/amigurumis/   -> amigurumis
     fotos/comidas/       -> turrones y comida

   IMPORTANTE: todos los precios están en 0. Cámbialos por los reales.
   ------------------------------------------------------------ */
const PRODUCTOS = [

  /* ===================== CARTERAS ===================== */
  {
    id: "cartera-blanca",
    nombre: "Cartera Blanca",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-blanca.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-caracol-marron",
    nombre: "Cartera Caracol Marrón",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-caracol-marron.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-celeste-blanco",
    nombre: "Cartera Celeste y Blanco",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-celeste-blanco.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-guinda",
    nombre: "Cartera Guinda",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-guinda.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-mostaza",
    nombre: "Cartera Mostaza",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-mostaza.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-naranja-roja",
    nombre: "Cartera Naranja Roja",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-narajaroja.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-negra",
    nombre: "Cartera Negra",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-negra.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-rayada-rojo-naranja",
    nombre: "Cartera Rayada Rojo y Naranja",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-rayada-rojo-naranja.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-rayas-blanca-amarilla",
    nombre: "Cartera Rayas Blanco y Amarillo",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-rayas-blanca-amarilla.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-rayas-blanco-verde-rojo-guinda",
    nombre: "Cartera Rayas Blanco, Verde, Rojo y Guinda",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-rayas-blanco-verde-rojo-guinda.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-verde",
    nombre: "Cartera Verde",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-verde-1.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "cartera-verde-asas-pulseras",
    nombre: "Cartera Verde con Asas Pulsera",
    categoria: "carteras",
    precio: 0,
    imagen: "carteras/cartera-verde-azas-pulceras.jpeg",
    descripcion: "Cartera tejida a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },

  /* ===================== AMIGURUMIS ===================== */
  {
    id: "amigurumi-llama-blanca",
    nombre: "Amigurumi Llama Blanca",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-llama-blanca.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-llama-marron",
    nombre: "Amigurumi Llama Marrón",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-llama-marron.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-oso-de-anteojos",
    nombre: "Amigurumi Oso de Anteojos",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-oso-de-anteojos.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-winnie-the-pooh",
    nombre: "Amigurumi Personaje de Winnie the Pooh",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-personajede-winie-de-poo.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-pikachu",
    nombre: "Amigurumi Pikachu",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-pikachu.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-planta-girasol-hada",
    nombre: "Amigurumi Planta Girasol y Hada",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-planta-girasol-amigurumi-hada.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-snoopy-coleccion",
    nombre: "Amigurumi Colección Snoopy",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-snoppy-coleccion.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-vaca-escocesa-cuy-alf",
    nombre: "Amigurumi Vaca Escocesa, Cuy y Alf",
    categoria: "amigurumis",
    precio: 0,
    imagen: "amigurumis/amigurumi-vaca-escosesa-cuy-alf.jpeg",
    descripcion: "Amigurumi tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "osito-paddintong",
    nombre: "osito Paddintong",
    categoria: "amigurumis",
    precio: 180,
    imagen: "amigurumis/osito-paddintong.jpeg",
    descripcion: "Osisto hecho a mano, tejido a mano con estilo amigurumi, con todos los detalles característicos del personaje. Clásico sombrero rojo y un abrigo azul con cierres en botones y cordones en color crema, botas rojas y un pequeño maletín.",
    medidas: "20 cm de alto",
    materiales: "algodón",
    destacado: true,
    disponible: true,
  },
  {
    id: "amigurumi-hello-kitty",
    nombre: "Amigurumi Hello Kitty",
    categoria: "amigurumis",
    precio: 150,
    imagen: "amigurumis/amigurumi-hello-kitty.jpeg",
    descripcion: "colección Hello Kitty + My Melody. Amigurumis hecho a mano en Perú por Rosa Miriam Tello",
    medidas: "12cm de alto",
    materiales: "algodón",
    destacado: true,
    disponible: true,
  },
  {
    id: "angelica",
    nombre: "Angelica",
    categoria: "amigurumis",
    precio: 180,
    imagen: "amigurumis/angelica-mvgc5zex0.jpeg",
    descripcion: "Tejido a mano. Pieza única.",
    destacado: false,
    disponible: true,
  },
  {
    id: "ranas",
    nombre: "Ranas",
    categoria: "ranitas",
    precio: 200,
    imagen: "ranitas/ranas-mvh6ru150.jpeg",
    imagenes: ["ranitas/ranas-mvh6ru150.jpeg","ranitas/ranas-mvh6ru151.jpeg","ranitas/ranas-mvh6ru152.jpeg"],
    descripcion: "Rana verde con traje de bruja y rana Potter incluye escoba",
    medidas: "10cm",
    materiales: "Algodón",
    edicion: "Halloween 2026",
    destacado: true,
    disponible: true,
  },
  {
    id: "rana-bailarina",
    nombre: "Rana bailarina",
    categoria: "ranitas",
    precio: 100,
    imagen: "ranitas/rana-bailarina-mvh80zal0.jpeg",
    descripcion: "Tejido a mano. Pieza única.",
    medidas: "15cm",
    materiales: "Algodón y otros",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-rana-vestido-rosado",
    nombre: "Amigurumi Rana vestido rosado",
    categoria: "ranitas",
    precio: 100,
    imagen: "ranitas/amigurumi-rana-vestido-rosado-mvh8d7qg0.jpeg",
    descripcion: "Tejido a mano. Pieza única.",
    medidas: "10 cm",
    materiales: "algodón",
    destacado: false,
    disponible: true,
  },
];


/* ------------------------------------------------------------
   4) COMIDAS (página aparte: comidas.html)
   Pasteles salados, turrones y lo que quieras agregar. Se prepara
   por encargo. Copia un bloque, cambia los datos y listo.
   Las fotos van en la carpeta "fotos/comidas/".

   Campos:
     id           -> texto único, sin espacios
     nombre       -> nombre de la comida
     categoria    -> un "id" de CATEGORIAS_COMIDAS
     precio       -> solo el número (con 0 se muestra "Consultar precio")
     presentacion -> ej: "Pastel entero", "Porción en caja"
     porciones    -> OPCIONAL, ej: "8 porciones"
     anticipacion -> OPCIONAL, ej: "Pedir con 2 días de anticipación"
     ingredientes -> OPCIONAL, ej: "Acelgas, queso, huevo"
     imagen       -> "comidas/" + nombre del archivo
     descripcion  -> texto corto
     disponible   -> true / false
   ------------------------------------------------------------ */
const CATEGORIAS_COMIDAS = [
  { id: "pasteles", nombre: "Pasteles salados" },
  { id: "pasteles-dulces", nombre: "Pasteles dulces" },
  { id: "turrones", nombre: "Turrones" },
];

const COMIDAS = [
  {
    id: "pastel-acelgas-ejemplo",
    nombre: "Pastel de acelgas",
    categoria: "pasteles",
    precio: 0,
    presentacion: "Pastel entero",
    porciones: "8 porciones",
    anticipacion: "Pedir con 2 días de anticipación",
    ingredientes: "Acelgas, queso, huevo",
    imagen: "placeholder.jpg",
    descripcion: "EJEMPLO: cambia este texto, el precio y la foto por los reales.",
    disponible: true,
  },
  {
    id: "turron-ejemplo-01",
    nombre: "Turrón de 400 gr",
    categoria: "turrones",
    precio: 27,
    presentacion: "Porción en caja",
    imagen: "comidas/turron.jpeg",
    descripcion: "Cambia este texto por la descripción real de tu turrón.",
    disponible: true,
  },
  {
    id: "torta-de-masapan",
    nombre: "Torta de Masapan",
    categoria: "pasteles-dulces",
    precio: 160,
    imagen: "comidas/torta-de-masapan-mvgc8y640.jpeg",
    descripcion: "Preparado por encargo.",
    porciones: "15",
    anticipacion: "4 días",
    ingredientes: "zanahoria, huevos, castaña",
    disponible: true,
  },
];
