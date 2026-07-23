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
  whatsapp: "51987654321",

  // Usuario de Instagram (con o sin @, se muestra tal cual lo escribas)
  instagram: "@rosadelana",
  instagramUrl: "https://instagram.com/rosadelana",

  // Correo de contacto
  email: "hola@rosadelana.com",

  // Mensaje que se abre en WhatsApp cuando alguien pregunta por un producto
  // Puedes usar {producto} y {precio}, se reemplazan automáticamente
  mensajeWhatsappProducto: "¡Hola! Vi «{producto}» ({precio}) en la web de Rosa de Lana y quisiera más información 🌸",

  // Mensaje del botón general "Escribir por WhatsApp"
  mensajeWhatsappGeneral: "¡Hola! Vi la web de Rosa de Lana y quisiera hacer una consulta 🌸",
};


/* ------------------------------------------------------------
   2) CATEGORÍAS
   Si agregas una categoría nueva a un producto (paso 3), agrégala
   también aquí para que aparezca como filtro. El "id" debe escribirse
   IGUAL en ambos lugares (sin tildes, en minúscula).
   ------------------------------------------------------------ */
const CATEGORIAS = [
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
     imagen       -> nombre del archivo dentro de la carpeta images/productos/
     descripcion  -> texto corto describiendo la pieza
     destacado    -> true / false — true lo resalta con una cinta "Destacado"
     disponible   -> true / false — false lo muestra como "Vendido" y no se puede consultar

   TIP: si aún no tienes la foto lista, usa "placeholder.jpg" (ya está
   incluida en la carpeta images/productos/) y cámbiala después.
   ------------------------------------------------------------ */
const PRODUCTOS = [
  {
    id: "cartera-crochet-terracota",
    nombre: "Cartera Crochet Terracota",
    categoria: "carteras",
    precio: 89,
    imagen: "placeholder.jpg",
    descripcion: "Cartera tejida a crochet en tonos terracota, con forro interno y cierre de madera. Pieza única, tejida punto por punto.",
    destacado: true,
    disponible: true,
  },
  {
    id: "amigurumi-pulpo-lila",
    nombre: "Amigurumi Pulpo Lila",
    categoria: "amigurumis",
    precio: 45,
    imagen: "placeholder.jpg",
    descripcion: "Pulpito tejido a mano en lana suave, ideal para regalar o decorar. Relleno hipoalergénico.",
    destacado: true,
    disponible: true,
  },
  {
    id: "cartera-mini-beige",
    nombre: "Mini Cartera Beige",
    categoria: "carteras",
    precio: 65,
    imagen: "placeholder.jpg",
    descripcion: "Cartera pequeña tipo bolso de mano, tejida en punto alto con asa trenzada.",
    destacado: false,
    disponible: true,
  },
  {
    id: "amigurumi-oso-miel",
    nombre: "Amigurumi Oso Miel",
    categoria: "amigurumis",
    precio: 40,
    imagen: "placeholder.jpg",
    descripcion: "Osito tejido en lana color miel con detalles bordados a mano. Tamaño mediano.",
    destacado: false,
    disponible: true,
  },
  {
    id: "chalina-ondas-verde",
    nombre: "Chalina Ondas Verde Bosque",
    categoria: "accesorios",
    precio: 55,
    imagen: "placeholder.jpg",
    descripcion: "Chalina tejida en punto ondas, lana 100% suave, ideal para las noches limeñas.",
    destacado: false,
    disponible: true,
  },
  {
    id: "posavasos-set-flores",
    nombre: "Set de Posavasos Flores",
    categoria: "otros",
    precio: 30,
    imagen: "placeholder.jpg",
    descripcion: "Set de 4 posavasos tejidos a crochet en forma de flor, distintos colores.",
    destacado: false,
    disponible: false,
  },
];
