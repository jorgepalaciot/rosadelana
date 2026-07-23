# Rosa de Lana 🌸🧶

Sitio web para mostrar y vender tejidos hechos a mano (carteras, amigurumis,
accesorios). Es un sitio 100% estático: no necesita servidor ni base de
datos, así que se puede publicar **gratis en GitHub Pages**.

Las compras se coordinan por **WhatsApp**: cada producto tiene un botón que
abre WhatsApp con un mensaje ya escrito preguntando por esa pieza.

---

## 1. Cómo agregar, quitar o modificar productos

Todo se edita en **un solo archivo**: `js/productos.js`.

1. Abre `js/productos.js` con cualquier editor de texto (o directo en GitHub,
   ver más abajo).
2. Para **agregar** un producto, copia uno de los bloques `{ ... }` dentro de
   `PRODUCTOS`, pégalo antes del `];` final, y cambia los datos:

   ```js
   {
     id: "cartera-negra-01",       // único, sin espacios ni tildes
     nombre: "Cartera Negra Clásica",
     categoria: "carteras",        // debe existir en CATEGORIAS
     precio: 95,                   // solo el número, en soles
     imagen: "cartera-negra-01.jpg", // archivo dentro de images/productos/
     descripcion: "Cartera tejida en lana negra, forro interno...",
     destacado: false,             // true = le pone cinta "Destacado"
     disponible: true,             // false = se muestra como "Vendido"
   },
   ```

3. Para **quitar** un producto, borra su bloque completo (desde la `{` hasta
   la `},`).
4. Para **modificar** algo (precio, nombre, foto), simplemente edita el valor
   dentro del bloque de ese producto.
5. Guarda el archivo y sube el cambio a GitHub (ver sección 3). El sitio se
   actualiza solo.

No necesitas tocar ningún otro archivo para manejar el catálogo.

### Categorías

Las categorías del filtro están en el mismo archivo, en `CATEGORIAS`. Si
quieres agregar una categoría nueva (por ejemplo "Chompas"), agrégala ahí:

```js
{ id: "chompas", nombre: "Chompas" },
```

y usa `categoria: "chompas"` en los productos que correspondan.

### Tus datos de contacto

Arriba del todo, en `CONFIG`, cambia:

- `whatsapp`: tu número, sin "+" y sin espacios (ej: `"51987654321"`)
- `instagram` / `instagramUrl`: tu usuario de Instagram
- `email`: tu correo de contacto

---

## 2. Cómo agregar las fotos de los productos

1. Guarda la foto del producto (cuadrada de preferencia, o cualquier
   proporción, se recorta automáticamente) dentro de la carpeta
   `images/productos/`.
2. Ponle un nombre simple, sin espacios ni tildes, por ejemplo
   `cartera-negra-01.jpg`.
3. En `js/productos.js`, en el campo `imagen` de ese producto, escribe
   exactamente ese nombre de archivo.
4. Si todavía no tienes la foto, deja `imagen: "placeholder.jpg"` — ya viene
   incluida una imagen de "foto pendiente".

**Tip:** para que la web cargue rápido, comprime tus fotos antes de subirlas
(por ejemplo con [squoosh.app](https://squoosh.app), gratis). Un tamaño de
800×800px suele ser más que suficiente.

---

## 3. Cómo publicar el sitio gratis en GitHub Pages

### Opción A — Sin instalar nada (desde el navegador)

1. Crea una cuenta en [github.com](https://github.com) si no tienes.
2. Crea un repositorio nuevo, por ejemplo `rosa-de-lana` (puede ser público).
3. Dentro del repositorio, usa el botón **"Add file" → "Upload files"** y
   arrastra todos los archivos y carpetas de este proyecto
   (`index.html`, la carpeta `css`, la carpeta `js`, la carpeta `images`).
4. Click en **"Commit changes"**.
5. Ve a **Settings → Pages** (menú de la izquierda).
6. En "Branch", selecciona `main` y la carpeta `/ (root)`, luego **Save**.
7. Espera 1-2 minutos y GitHub te dará un link como:
   `https://tu-usuario.github.io/rosa-de-lana/`

Ese link ya es tu web pública, gratis, y se actualiza cada vez que subas
cambios al repositorio.

### Opción B — Con Git instalado

```bash
git init
git add .
git commit -m "Primera versión de Rosa de Lana"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/rosa-de-lana.git
git push -u origin main
```

Luego activa GitHub Pages igual que en el paso 5-6 de la Opción A.

### Para actualizar el sitio después (agregar productos nuevos)

- **Desde el navegador:** entra al archivo `js/productos.js` en GitHub,
  click en el ícono de lápiz (editar), haz tus cambios, y click en
  "Commit changes". El sitio se actualiza solo en un par de minutos.
- **Desde tu computadora:** edita el archivo, y luego:
  ```bash
  git add .
  git commit -m "Nuevos productos"
  git push
  ```

---

## 4. Estructura del proyecto

```
rosa-de-lana/
├── index.html              ← estructura de la página (no hace falta tocarla)
├── css/
│   └── styles.css          ← estilos visuales
├── js/
│   ├── productos.js        ← 🌟 AQUÍ editas productos, precios y contacto
│   └── main.js              ← lógica del sitio (no hace falta tocarla)
├── images/
│   └── productos/           ← 🌟 AQUÍ subes las fotos de tus productos
└── README.md                ← este archivo
```

---

## 5. Probar el sitio en tu computadora antes de publicar

Puedes simplemente abrir `index.html` haciendo doble click. Si tu navegador
bloquea la carga de imágenes por seguridad, usa un servidor local rápido:

```bash
# Con Python instalado, dentro de la carpeta del proyecto:
python3 -m http.server 8000
```

y abre `http://localhost:8000` en tu navegador.

---

Hecho con 🧶 para Rosa de Lana.
