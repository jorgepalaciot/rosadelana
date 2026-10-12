/* ============================================================
   ROSA DE LANA — Página de turrones
   Los turrones se editan en productos.js (sección TURRONES).
   ============================================================ */
(function () {
  "use strict";

  const RUTA_IMAGENES = "fotos/";

  function formatearPrecio(numero) {
    return "S/ " + numero.toFixed(2).replace(/\.00$/, "");
  }
  function urlWhatsapp(mensaje) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  }
  function mensajeTurron(t) {
    return CONFIG.mensajeWhatsappTurron
      .replace("{producto}", t.nombre)
      .replace("{precio}", formatearPrecio(t.precio));
  }

  function tarjetaHTML(t) {
    const disponible = t.disponible !== false;
    const boton = disponible
      ? `<a class="boton boton-primario" href="${urlWhatsapp(mensajeTurron(t))}" target="_blank" rel="noopener">Pedir por WhatsApp</a>`
      : `<a class="boton boton-primario" aria-disabled="true">Agotado</a>`;
    return `
      <article class="tarjeta-producto tarjeta-turron">
        <div class="tarjeta-imagen">
          <img src="${RUTA_IMAGENES}${t.imagen}" alt="${t.nombre}" loading="lazy">
          ${!disponible ? '<span class="etiqueta-vendido">Agotado</span>' : ""}
        </div>
        ${t.presentacion ? `<p class="tarjeta-categoria">${t.presentacion}</p>` : ""}
        <h3 class="tarjeta-nombre">${t.nombre}</h3>
        <p class="tarjeta-descripcion">${t.descripcion || ""}</p>
        <p class="tarjeta-precio">${formatearPrecio(t.precio)}</p>
        ${boton}
      </article>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gridTurrones");
    const aviso = document.getElementById("avisoTurrones");

    if (CONFIG.turronesActivo === false) {
      grid.innerHTML = '<p class="sin-resultados">Por ahora no tenemos turrones. Vuelve en la próxima temporada.</p>';
      grid.style.display = "block";
      aviso.hidden = true;
    } else {
      aviso.textContent = CONFIG.avisoTurrones || "";
      aviso.hidden = !CONFIG.avisoTurrones;
      grid.innerHTML = TURRONES.map(tarjetaHTML).join("");
    }

    const g = document.getElementById("whatsappGeneral");
    if (g) g.href = urlWhatsapp(CONFIG.mensajeWhatsappGeneral);
    const ig = document.getElementById("linkInstagram");
    if (ig) { ig.href = CONFIG.instagramUrl; ig.textContent = CONFIG.instagram; }
    const em = document.getElementById("linkEmail");
    if (em) { em.href = `mailto:${CONFIG.email}`; em.textContent = CONFIG.email; }
    document.getElementById("anioActual").textContent = new Date().getFullYear();

    const boton = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");
    boton.addEventListener("click", () => {
      boton.setAttribute("aria-expanded", nav.classList.toggle("abierto"));
    });
  });
})();
