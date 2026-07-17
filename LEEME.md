# Página web de Pulilujos — Guía rápida

## 1. Estructura de archivos

```
pulilujos/
├── index.html          ← el contenido de la página (textos, secciones)
├── css/style.css        ← colores, tamaños, diseño
├── js/script.js         ← calculadora, menú, formulario
├── images/logo.jpg       ← tu logo
└── fotos/
    ├── entablados/           ← Entablados
    ├── canchas-deportivas/   ← Canchas deportivas
    ├── gradas/               ← Gradas de madera
    ├── eucalipto/            ← Piso de eucalipto natural brillante
    ├── chanul/               ← Piso de chanul
    ├── yumbingue/            ← Piso de yumbingue
    ├── romerillo/            ← Piso de romerillo
    ├── teca/                 ← Piso de teca
    ├── pino/                 ← Piso de pino
    ├── tinte-cedro/          ← Piso con tinte cedro
    ├── tinte-wengue/         ← Piso con tinte wengue
    ├── tinte-miel/           ← Piso con tinte miel
    ├── tinte-maple/          ← Piso con tinte maple
    ├── tinte-nogal/          ← Piso con tinte nogal
    ├── tinte-vino/           ← Piso con tinte vino
    ├── baldosa/              ← Piso de baldosa
    ├── ladrillo/             ← Piso de ladrillo
    ├── marmol/               ← Piso de mármol
    ├── concreto/             ← Piso de hormigón
    └── hero/                 ← foto para la sección "Nosotros"
```

## 2. Cómo agregar tus fotos (lo más importante)

**El cliente ya NO necesita tocar ningún código, y puede agregar todas las fotos que quiera, sin límite.**

Cada categoría busca automáticamente sus fotos numeradas: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`... y así sucesivamente. Para agregar fotos:

1. Abre la carpeta de la categoría que quieras, por ejemplo `fotos/gradas/`.
2. Guarda tu primera foto como `1.jpg`, la segunda como `2.jpg`, la tercera como `3.jpg`, y así en orden, sin saltarte ningún número.
3. ¡Listo! La página las detecta y las muestra solas, no importa cuántas sean.

**Importante:**
- Los números deben ir en orden, sin saltos. Si tienes `1.jpg` y `2.jpg` pero pones la siguiente como `4.jpg`, esa no va a aparecer (falta el `3.jpg`).
- El nombre debe ser exactamente `1.jpg`, `2.jpg`, etc. (en minúsculas, sin espacios). Si tu foto es `.png` o `.jpeg`, avísame para ajustar el código a esa extensión.
- Si una categoría todavía no tiene fotos, simplemente no se muestra nada ahí (no salen recuadros rotos ni vacíos).
- La foto de la sección "Nosotros" va en `fotos/hero/equipo.jpg` (esta sí es una sola foto fija).
- **Recuerda:** como el sitio es estático, después de agregar fotos hay que volver a publicarlo (ver sección 5) para que se vean en el link público. Si guardas la foto solo en tu computadora, el sitio en línea no se actualiza solo.

## 3. Cómo cambiar textos

Todo el texto está directamente en `index.html`, en español normal, dentro de etiquetas como `<h2>`, `<p>`, `<h3>`. Solo edita el texto entre las etiquetas, sin tocar las palabras en inglés (esas son código).

## 4. Cómo cambiar el número de WhatsApp

Busca y reemplaza en TODOS los archivos (`index.html` y `js/script.js`) el número:
```
593988905662
```
por el número nuevo, siempre con el código de país (593) y sin el 0 inicial ni espacios.

## 5. Cómo publicar el sitio GRATIS (elige una opción)

### Opción A — Netlify (la más fácil, recomendada)
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta completa `pulilujos` a la página.
3. Netlify te da un link público al instante (ej: `pulilujos.netlify.app`).
4. Cada vez que quieras actualizar fotos/textos, vuelve a arrastrar la carpeta.

### Opción B — GitHub Pages
1. Crea una cuenta en https://github.com si no tienes.
2. Crea un repositorio nuevo, por ejemplo `pulilujos`.
3. Sube todos los archivos de esta carpeta al repositorio.
4. Ve a Settings → Pages → selecciona la rama `main` y guarda.
5. En unos minutos tu sitio estará en `tu-usuario.github.io/pulilujos`.

### Opción C — Vercel
1. Ve a https://vercel.com y crea una cuenta.
2. Sube la carpeta como un nuevo proyecto (arrastrar y soltar también funciona).
3. Vercel te da el link público.

## 6. Antes de publicar — revisa esto

- [ ] Reemplazar todas las fotos placeholder por fotos reales
- [ ] Confirmar que el número de WhatsApp es correcto
- [ ] Revisar los links de Facebook, Instagram, TikTok y Telegram
- [ ] Probar la calculadora de metros
- [ ] Probar el formulario de contacto (debe abrir WhatsApp)
- [ ] Revisar el sitio en el celular (la mayoría de tus clientes lo verán ahí)

## 7. Ver el sitio en tu computadora antes de publicar

Simplemente haz doble clic en `index.html` y se abrirá en tu navegador. Cada vez que edites y guardes el archivo, solo recarga la página del navegador para ver los cambios.

---
Cualquier duda sobre cómo editar algo específico, puedes preguntarle a Claude mostrando la parte del código que quieres cambiar.
