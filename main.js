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
        <div class="tarjeta-imagen">
          ${producto.destacado && disponible ? '<span class="cinta-destacado">Destacado</span>' : ""}
          ${disponible ? `<button type="button" class="tarjeta-seleccionar" data-id-seleccionar="${producto.id}" aria-pressed="false" aria-label="Agregar ${producto.nombre} a la consulta"><span class="tarjeta-seleccionar-check">✓</span></button>` : ""}
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
      const abrir = () => abrirDetalle(tarjeta.dataset.id);
      tarjeta.addEventListener("click", abrir);
      tarjeta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          abrir();
        }
      });
    });

    // Botón "agregar a la consulta" (selección múltiple)
    grid.querySelectorAll(".tarjeta-seleccionar").forEach((boton) => {
      const id = boton.dataset.idSeleccionar;
      boton.classList.toggle("activo", seleccionados.has(id));
      boton.setAttribute("aria-pressed", seleccionados.has(id));

      boton.addEventListener("click", (e) => {
        e.stopPropagation(); // no disparar la consulta individual de la tarjeta
        alternarSeleccion(id);
      });
    });
  }

  /* ---------- Modal de detalle ---------- */
  function listaImagenes(producto) {
    if (Array.isArray(producto.imagenes) && producto.imagenes.length > 0) {
      return producto.imagenes;
    }
    return [producto.imagen];
  }

  function abrirDetalle(id) {
    const producto = PRODUCTOS.find((p) => p.id === id);
    if (!producto) return;

    const imagenes = listaImagenes(producto);

    const imgPrincipal = document.getElementById("modalImagen");
    imgPrincipal.src = RUTA_IMAGENES + imagenes[0];
    imgPrincipal.alt = producto.nombre;

    // Miniaturas (solo si hay más de una foto)
    const contenedorMini = document.getElementById("modalMiniaturas");
    if (imagenes.length > 1) {
      contenedorMini.innerHTML = imagenes
        .map(
          (img, i) => `
          <button type="button" class="modal-miniatura${i === 0 ? " activa" : ""}" data-src="${RUTA_IMAGENES}${img}">
            <img src="${RUTA_IMAGENES}${img}" alt="Foto ${i + 1} de ${producto.nombre}">
          </button>`
        )
        .join("");
      contenedorMini.hidden = false;

      contenedorMini.querySelectorAll(".modal-miniatura").forEach((mini) => {
        mini.addEventListener("click", () => {
          imgPrincipal.src = mini.dataset.src;
          contenedorMini.querySelectorAll(".modal-miniatura").forEach((m) => m.classList.remove("activa"));
          mini.classList.add("activa");
        });
      });
    } else {
      contenedorMini.innerHTML = "";
      contenedorMini.hidden = true;
    }

    document.getElementById("modalCategoria").textContent = nombreCategoria(producto.categoria);
    document.getElementById("modalTitulo").textContent = producto.nombre;
    document.getElementById("modalPrecio").textContent = formatearPrecio(producto.precio);
    document.getElementById("modalDescripcion").textContent = producto.descripcion || "";

    const btnWhatsapp = document.getElementById("modalWhatsapp");
    const disponible = producto.disponible !== false;
    if (disponible) {
      btnWhatsapp.href = urlWhatsapp(mensajeProducto(producto));
      btnWhatsapp.textContent = "Consultar por WhatsApp";
      btnWhatsapp.style.pointerEvents = "auto";
      btnWhatsapp.style.opacity = "1";
    } else {
      btnWhatsapp.textContent = "Pieza vendida";
      btnWhatsapp.removeAttribute("href");
      btnWhatsapp.style.pointerEvents = "none";
      btnWhatsapp.style.opacity = "0.5";
    }

    document.getElementById("modalProducto").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function cerrarDetalle() {
    document.getElementById("modalProducto").hidden = true;
    document.body.style.overflow = "";
  }

  function activarModal() {
    document.getElementById("modalCerrar").addEventListener("click", cerrarDetalle);
    document.getElementById("modalFondo").addEventListener("click", cerrarDetalle);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") cerrarDetalle();
    });
  }

  /* ---------- Selección múltiple ---------- */
  const seleccionados = new Set();

  function alternarSeleccion(id) {
    if (seleccionados.has(id)) {
      seleccionados.delete(id);
    } else {
      seleccionados.add(id);
    }
    actualizarBotonesSeleccion();
    actualizarBarraSeleccion();
  }

  function actualizarBotonesSeleccion() {
    document.querySelectorAll(".tarjeta-seleccionar").forEach((boton) => {
      const activo = seleccionados.has(boton.dataset.idSeleccionar);
      boton.classList.toggle("activo", activo);
      boton.setAttribute("aria-pressed", activo);
    });
  }

  function actualizarBarraSeleccion() {
    const barra = document.getElementById("barraSeleccion");
    const cantidad = document.getElementById("barraSeleccionCantidad");
    const enlace = document.getElementById("barraSeleccionEnviar");
    if (!barra) return;

    barra.hidden = seleccionados.size === 0;
    if (seleccionados.size === 0) return;

    cantidad.textContent = seleccionados.size;

    const productosSeleccionados = PRODUCTOS.filter((p) => seleccionados.has(p.id));
    const lineas = productosSeleccionados
      .map((p) => `• ${p.nombre} (${formatearPrecio(p.precio)})`)
      .join("\n");
    const total = productosSeleccionados.reduce((suma, p) => suma + p.precio, 0);
    const mensaje = `¡Hola! Me interesan estas piezas de Rosa de Lana 🌸\n\n${lineas}\n\nTotal aproximado: ${formatearPrecio(total)}`;

    enlace.href = urlWhatsapp(mensaje);
  }

  function activarBarraSeleccion() {
    const vaciar = document.getElementById("barraSeleccionVaciar");
    if (!vaciar) return;
    vaciar.addEventListener("click", () => {
      seleccionados.clear();
      actualizarBotonesSeleccion();
      actualizarBarraSeleccion();
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

  /* ---------- Header transparente sobre el hero ---------- */
  function activarHeaderScroll() {
    const header = document.querySelector(".site-header");
    const hero = document.querySelector(".hero");
    if (!header || !hero) return;

    const actualizar = () => {
      const limite = hero.offsetHeight - header.offsetHeight;
      header.classList.toggle("encabezado-solido", window.scrollY > limite);
    };

    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
  }

  /* ---------- Inicio ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    pintarConfiguracionGeneral();
    construirFiltros();
    pintarProductos();
    activarBusqueda();
    activarMenuMovil();
    activarHeaderScroll();
    activarBarraSeleccion();
    activarModal();
  });
})();
