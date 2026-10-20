/* ROSA DE LANA — Página de comidas (se edita en productos.js, sección COMIDAS) */
(function () {
  "use strict";
  const RUTA = "fotos/";
  let categoria = "todas";

  const precio = (n) => (n > 0 ? "S/ " + n.toFixed(2).replace(/\.00$/, "") : "Consultar precio");
  const wa = (m) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;
  const mensaje = (c) => CONFIG.mensajeWhatsappComida.replace("{producto}", c.nombre).replace("{precio}", precio(c.precio));
  const nombreCat = (id) => (CATEGORIAS_COMIDAS.find((x) => x.id === id) || {}).nombre || "";
  const fila = (et, v) => (v ? `<li><strong>${et}</strong>${v}</li>` : "");

  function tarjeta(c) {
    const ok = c.disponible !== false;
    const cinta = ok && c.categoria === "turrones" && CONFIG.turronesTemporada ? '<span class="cinta-destacado">De temporada</span>' : "";
    const boton = ok
      ? `<a class="boton boton-primario" href="${wa(mensaje(c))}" target="_blank" rel="noopener">Pedir por WhatsApp</a>`
      : `<a class="boton boton-primario" aria-disabled="true">No disponible</a>`;
    return `
      <article class="tarjeta-producto tarjeta-turron">
        <div class="tarjeta-imagen">
          ${cinta}<img src="${RUTA}${c.imagen}" alt="${c.nombre}" loading="lazy">
          ${ok ? "" : '<span class="etiqueta-vendido">No disponible</span>'}
        </div>
        <p class="tarjeta-categoria">${nombreCat(c.categoria)}</p>
        <h3 class="tarjeta-nombre">${c.nombre}</h3>
        <p class="tarjeta-descripcion">${c.descripcion || ""}</p>
        <ul class="tarjeta-meta">${fila("Presentación", c.presentacion)}${fila("Rinde", c.porciones)}${fila("Anticipación", c.anticipacion)}${fila("Lleva", c.ingredientes)}</ul>
        <p class="tarjeta-precio">${precio(c.precio)}</p>
        ${boton}
      </article>`;
  }

  function pintar() {
    const lista = COMIDAS.filter((c) => categoria === "todas" || c.categoria === categoria);
    if (CONFIG.turronesTemporada) lista.sort((a, b) => (b.categoria === "turrones") - (a.categoria === "turrones"));
    document.getElementById("gridComidas").innerHTML = lista.map(tarjeta).join("");

    const f = document.getElementById("filtrosComidas");
    f.hidden = CATEGORIAS_COMIDAS.length < 2;
    f.innerHTML = [{ id: "todas", nombre: "Todo" }, ...CATEGORIAS_COMIDAS]
      .map((x) => `<button class="filtro-boton${x.id === categoria ? " activo" : ""}" data-cat="${x.id}">${x.nombre}</button>`)
      .join("");
    f.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { categoria = b.dataset.cat; pintar(); }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gridComidas");
    const aviso = document.getElementById("avisoComidas");

    if (CONFIG.comidasActivo === false) {
      grid.innerHTML = '<p class="sin-resultados">Por ahora no tenemos comidas disponibles. Vuelve pronto.</p>';
      grid.style.display = "block";
      aviso.hidden = true;
      document.getElementById("filtrosComidas").hidden = true;
    } else {
      aviso.textContent = (CONFIG.avisoComidas || "") + (CONFIG.turronesTemporada && CONFIG.turronesFechaLimite ? ` Turrones: pedidos hasta el ${CONFIG.turronesFechaLimite}.` : "");
      aviso.hidden = !aviso.textContent;
      pintar();
    }

    const g = document.getElementById("whatsappGeneral");
    if (g) g.href = wa(CONFIG.mensajeWhatsappGeneral);
    const ig = document.getElementById("linkInstagram");
    if (ig) { ig.href = CONFIG.instagramUrl; ig.textContent = CONFIG.instagram; }
    const em = document.getElementById("linkEmail");
    if (em) { em.href = `mailto:${CONFIG.email}`; em.textContent = CONFIG.email; }
    document.getElementById("anioActual").textContent = new Date().getFullYear();

    const boton = document.getElementById("menuToggle"), nav = document.getElementById("navMenu");
    boton.addEventListener("click", () => boton.setAttribute("aria-expanded", nav.classList.toggle("abierto")));
  });
})();
