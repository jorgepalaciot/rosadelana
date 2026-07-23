/* ============================================================
   ROSA DE LANA — Lógica del sitio
   No necesitas editar este archivo para agregar productos:
   eso se hace en productos.js
   ============================================================ */

(function () {
  "use strict";

  const RUTA_IMAGENES = "fotos/";

  let categoriaActiva = "todas";
  let textoBusqueda = "";

  /* ---------- Utilidades ---------- */
  function formatearPrecio(numero) {
    return "S/ " + numero.toFixed(2).replace(/\.00$/, "");
  }

  function urlWhatsapp(mensaje) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  }

  function mensajeProducto(producto) {
    return CONFIG.mensajeWhatsappProducto
      .replace("{producto}", producto.nombre)
      .replace("{precio}", formatearPrecio(producto.precio));
  }

  /* ---------- Configuración general en la página ---------- */
  function pintarConfiguracionGeneral() {
    const btnGeneral = document.getElementById("whatsappGeneral");
    if (btnGeneral) btnGeneral.href = urlWhatsapp(CONFIG.mensajeWhatsappGeneral);

    const linkInstagram = document.getElementById("linkInstagram");
    if (linkInstagram) {
      linkInstagram.href = CONFIG.instagramUrl;
      linkInstagram.textContent = CONFIG.instagram;
    }

    const linkEmail = document.getElementById("linkEmail");
    if (linkEmail) {
      linkEmail.href = `mailto:${CONFIG.email}`;
      linkEmail.textContent = CONFIG.email;
    }

    const anio = document.getElementById("anioActual");
    if (anio) anio.textContent = new Date().getFullYear();

    const statPiezas = document.getElementById("statPiezas");
    if (statPiezas) statPiezas.textContent = PRODUCTOS.length;
  }

  /* ---------- Filtros de categoría ---------- */
  function construirFiltros() {
    const contenedor = document.getElementById("filtros");
    if (!contenedor) return;

    const todas = { id: "todas", nombre: "Todo" };
    const listado = [todas, ...CATEGORIAS];

    contenedor.innerHTML = listado
      .map(
        (cat) => `
        <button class="filtro-boton${cat.id === categoriaActiva ? " activo" : ""}"
                data-categoria="${cat.id}"
                role="tab"
                aria-selected="${cat.id === categoriaActiva}">
          ${cat.nombre}
        </button>`
      )
      .join("");

    contenedor.querySelectorAll(".filtro-boton").forEach((boton) => {
      boton.addEventListener("click", () => {
        categoriaActiva = boton.dataset.categoria;
        construirFiltros();
        pintarProductos();
      });
    });
  }

  /* ---------- Tarjetas de producto ---------- */
  function productosFiltrados() {
    return PRODUCTOS.filter((p) => {
      const coincideCategoria = categoriaActiva === "todas" || p.categoria === categoriaActiva;
      const coincideBusqueda = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }

  function nombreCategoria(id) {
    const cat = CATEGORIAS.find((c) => c.id === id);
    return cat ? cat.nombre : id;
  }

  function tarjetaHTML(producto) {
    const disponible = producto.disponible !== false;
    return `
      <article class="tarjeta-producto" data-id="${producto.id}" tabindex="0" role="button"
                aria-label="Consultar ${producto.nombre} por WhatsApp">
        <span class="tarjeta-agujero" aria-hidden="true"></span>
        <div class="tarjeta-imagen">
          ${producto.destacado && disponible ? '<span class="cinta-destacado">Destacado</span>' : ""}
          <img src="${RUTA_IMAGENES}${producto.imagen}" alt="${producto.nombre}" loading="lazy">
          ${!disponible ? '<span class="etiqueta-vendido">Vendido</span>' : ""}
        </div>
        <p class="tarjeta-categoria">${nombreCategoria(producto.categoria)}</p>
        <h3 class="tarjeta-nombre">${producto.nombre}</h3>
        <p class="tarjeta-precio">${formatearPrecio(producto.precio)}</p>
      </article>`;
  }

  function pintarProductos() {
    const grid = document.getElementById("gridProductos");
    const sinResultados = document.getElementById("sinResultados");
    if (!grid) return;

    const lista = productosFiltrados();

    grid.innerHTML = lista.map(tarjetaHTML).join("");
    sinResultados.hidden = lista.length !== 0;

    grid.querySelectorAll(".tarjeta-producto").forEach((tarjeta) => {
      const producto = PRODUCTOS.find((p) => p.id === tarjeta.dataset.id);
      const disponible = producto.disponible !== false;

      const consultar = () => {
        if (!disponible) return;
        window.open(urlWhatsapp(mensajeProducto(producto)), "_blank", "noopener");
      };

      tarjeta.addEventListener("click", consultar);
      tarjeta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          consultar();
        }
      });
    });
  }

  /* ---------- Búsqueda ---------- */
  function activarBusqueda() {
    const input = document.getElementById("buscador");
    if (!input) return;
    input.addEventListener("input", () => {
      textoBusqueda = input.value.trim();
      pintarProductos();
    });
  }

  /* ---------- Menú móvil ---------- */
  function activarMenuMovil() {
    const boton = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");
    if (!boton || !nav) return;

    boton.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto);
    });

    nav.querySelectorAll("a").forEach((enlace) =>
      enlace.addEventListener("click", () => {
        nav.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Inicio ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    pintarConfiguracionGeneral();
    construirFiltros();
    pintarProductos();
    activarBusqueda();
    activarMenuMovil();
  });
})();
