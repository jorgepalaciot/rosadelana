# Rosa de Lana

`index.html`, `styles.css`, `main.js` y `productos.js` van sueltos en la
raíz del repositorio (como ya los tienes). Las fotos de los productos van
aparte, dentro de una carpeta llamada **`fotos/`**.

```
rosadelana/            (raíz de tu repo)
├── index.html
├── styles.css
├── main.js
├── productos.js
└── fotos/
    ├── placeholder.jpg
    ├── cartera-negra-01.jpg
    └── ...
```

## Cómo actualizar tu repo actual (una sola vez)

1. Entra a `github.com/jorgepalaciot/rosadelana`
2. **"Add file → Upload files"** y sube sueltos: `index.html`, `main.js`,
   `productos.js` (reemplazan a los actuales — di que sí cuando pregunte).
3. Ahora, para crear la carpeta `fotos/` con la foto de ejemplo adentro:
   en tu computadora, ubica la carpeta `fotos` que viene en este paquete
   (contiene `placeholder.jpg`) y **arrastra la carpeta completa** (no los
   archivos de adentro) al área de "Upload files" de GitHub. GitHub
   reconoce que es una carpeta y la crea automáticamente con su contenido
   dentro.
   - Importante: tiene que ser la carpeta arrastrada tal cual, no
     "seleccionar y arrastrar el archivo placeholder.jpg suelto" — eso
     lo dejaría de nuevo en la raíz.
4. Commit changes y espera 1-2 minutos.

## De ahora en adelante: cómo agregar la foto de un producto nuevo

**Opción A — la más simple, directo desde el navegador:**
1. Entra a tu repo → entra a la carpeta `fotos/`
2. Click **"Add file → Upload files"**
3. Arrastra la foto (ya con su nombre final, ej. `cartera-negra-01.jpg`)
4. Commit changes

Como ya estás *dentro* de la carpeta `fotos/`, GitHub la sube ahí directo,
sin necesidad de arrastrar carpetas completas.

**Luego**, en `productos.js`, usa ese mismo nombre en el campo `imagen`:

```js
{
  ...
  imagen: "cartera-negra-01.jpg",
  ...
}
```

(No hace falta escribir "fotos/" delante del nombre — el sitio ya sabe
que las fotos están ahí.)
