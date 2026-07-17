// ============================================
// PULILUJOS — script.js
// ============================================

const NUMERO_WHATSAPP = "593988905662";

document.getElementById('anio').textContent = new Date().getFullYear();

/* ----- Menú móvil ----- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('menu-abierto');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

/* ----- Calculadora de metros cuadrados (varias áreas) ----- */
const calcFilas = document.getElementById('calcFilas');
const btnAgregarArea = document.getElementById('btnAgregarArea');
const resultadoM2 = document.querySelector('.calc-resultado .m2');
const calcTexto = document.getElementById('calcTexto');
const btnCotizarCalc = document.getElementById('btnCotizarCalc');

function crearFilaArea() {
  const total = calcFilas.querySelectorAll('.calc-fila-area').length + 1;
  const fila = document.createElement('div');
  fila.className = 'calc-fila-area';
  fila.innerHTML = `
    <span class="calc-area-nombre">Área ${total}</span>
    <div class="calc-fila">
      <div class="calc-campo">
        <label>Largo (m)</label>
        <input type="number" class="calc-largo" placeholder="Ej: 3" min="0" step="0.01">
      </div>
      <div class="calc-campo">
        <label>Ancho (m)</label>
        <input type="number" class="calc-ancho" placeholder="Ej: 2" min="0" step="0.01">
      </div>
      <button type="button" class="calc-quitar" aria-label="Quitar esta área" title="Quitar esta área">✕</button>
    </div>`;
  calcFilas.appendChild(fila);
  fila.querySelectorAll('input').forEach(inp => inp.addEventListener('input', actualizarCalculo));
  fila.querySelector('.calc-quitar').addEventListener('click', () => {
    fila.remove();
    renombrarAreas();
    actualizarCalculo();
  });
}

function renombrarAreas() {
  calcFilas.querySelectorAll('.calc-fila-area').forEach((fila, i) => {
    fila.querySelector('.calc-area-nombre').textContent = `Área ${i + 1}`;
  });
}

if (btnAgregarArea) {
  btnAgregarArea.addEventListener('click', crearFilaArea);
}

function actualizarCalculo() {
  const filas = calcFilas.querySelectorAll('.calc-fila-area');
  let totalM2 = 0;
  const detalle = [];

  filas.forEach((fila, i) => {
    const largo = parseFloat(fila.querySelector('.calc-largo').value) || 0;
    const ancho = parseFloat(fila.querySelector('.calc-ancho').value) || 0;
    if (largo > 0 && ancho > 0) {
      const m2 = largo * ancho;
      totalM2 += m2;
      detalle.push(`Área ${i + 1}: ${largo}m x ${ancho}m = ${m2.toFixed(2)}m²`);
    }
  });

  // Habilitar/deshabilitar botones de quitar según haya más de 1 área
  const quitarBtns = calcFilas.querySelectorAll('.calc-quitar');
  quitarBtns.forEach(b => b.style.display = filas.length > 1 ? 'block' : 'none');

  if (detalle.length > 0) {
    resultadoM2.innerHTML = totalM2.toFixed(2) + ' <span>m²</span>';
    calcTexto.textContent = detalle.length > 1
      ? `Suma de ${detalle.length} áreas. Envíe el detalle y le cotizamos.`
      : 'Área aproximada de su piso. Envíenos el dato y le cotizamos.';

    const mensaje = `Hola, quisiera cotizar el pulido de un piso con las siguientes medidas:\n${detalle.join('\n')}\nTotal aproximado: ${totalM2.toFixed(2)} m²`;
    btnCotizarCalc.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  } else {
    resultadoM2.innerHTML = '0 <span>m²</span>';
    calcTexto.textContent = 'Ingrese las medidas de cada área de su piso.';
    btnCotizarCalc.href = `https://wa.me/${NUMERO_WHATSAPP}`;
  }
}

// Enlazar la primera fila que ya viene en el HTML
calcFilas.querySelectorAll('input').forEach(inp => inp.addEventListener('input', actualizarCalculo));
calcFilas.querySelectorAll('.calc-quitar').forEach(btn => {
  btn.style.display = 'none';
  btn.addEventListener('click', function () {
    this.closest('.calc-fila-area').remove();
    renombrarAreas();
    actualizarCalculo();
  });
});

/* ----- Formulario de contacto -> WhatsApp ----- */
const formContacto = document.getElementById('formContacto');
if (formContacto) {
  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `Hola, soy ${nombre} (Tel: ${telefono}). ${mensaje}`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}

/* ----- Cerrar menú móvil al hacer clic en un enlace ----- */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navLinks.style.display = 'none';
    }
  });
});

/* ----- Galería: carga automática de fotos, sin límite -----
   Para cada categoría, busca fotos/CARPETA/1.jpg, 2.jpg, 3.jpg...
   y va agregando todas las que existan hasta que falte una. */
function cargarFoto(folder, numero) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = `fotos/${folder}/${numero}.jpg`;
  });
}

async function cargarCategoria(contenedor) {
  const folder = contenedor.dataset.folder;
  const etiqueta = contenedor.dataset.label;
  let numero = 1;
  while (true) {
    const img = await cargarFoto(folder, numero);
    if (!img) break;
    const item = document.createElement('div');
    item.className = 'item-galeria';
    img.alt = `${etiqueta} - foto ${numero}`;
    img.loading = 'lazy';
    item.appendChild(img);
    const span = document.createElement('span');
    span.className = 'etiqueta-foto';
    span.textContent = etiqueta;
    item.appendChild(span);
    contenedor.parentNode.insertBefore(item, contenedor);
    numero++;
  }
  contenedor.remove();
}

document.querySelectorAll('.fotos-categoria').forEach(cargarCategoria);
