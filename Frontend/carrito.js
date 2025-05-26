// cart.js - Funcionalidad del carrito

let carrito = [];
let contadorItems = 0;

// === Funciones principales ===

function mostrarSeccion(seccion) {
  // Ocultar todas las secciones
  document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));

  // Mostrar la sección seleccionada y marcar nav como activa
  document.getElementById(seccion).classList.add("active");
  const link = document.querySelector(`.nav-link[href="#${seccion}"]`);
  if (link) link.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cambiarCantidadProducto(id, cambio) {
  const input = document.getElementById(`cantidad-${id}`);
  let nuevaCantidad = parseInt(input.value) + cambio;
  if (nuevaCantidad < 1) nuevaCantidad = 1;
  if (nuevaCantidad > 99) nuevaCantidad = 99;
  input.value = nuevaCantidad;
}

function agregarAlCarritoConCantidad(id, nombre, precio) {
  const cantidadInput = document.getElementById(`cantidad-${id}`);
  const cantidad = parseInt(cantidadInput.value);
  const itemExistente = carrito.find((item) => item.id === id);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    });
  }

  actualizarCarrito();
  actualizarContador();

  alert(`${cantidad} x ${nombre} agregado(s) al carrito`);
  cantidadInput.value = 1;
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  actualizarCarrito();
  actualizarContador();
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find((item) => item.id === id);
  if (item) {
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
      eliminarDelCarrito(id);
    } else {
      actualizarCarrito();
      actualizarContador();
    }
  }
}

function actualizarCarrito() {
  const contenedor = document.getElementById("items-carrito");
  const totalElement = document.getElementById("total-carrito");

  if (!contenedor) return; // Salir si no existe aún

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12 text-center">
        <p>Tu carrito está vacío</p>
      </div>
    `;
    totalElement.style.display = "none";
    document.getElementById("formulario-checkout").style.display = "none";
  } else {
    let html = "";
    let total = 0;

    carrito.forEach((item) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      html += `
        <div class="col-12 d-flex justify-content-between align-items-center border-bottom py-3">
          <div>
            <h6 class="mb-1">${item.nombre}</h6>
            <small class="text-muted">Cantidad: ${item.cantidad}</small><br>
            <small class="text-muted">Precio unitario: $${item.precio.toFixed(2)}</small>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary me-2" onclick="cambiarCantidad(${item.id}, -1)">-</button>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
          </div>
          <strong>$${subtotal.toFixed(2)}</strong>
        </div>
      `;
    });

    contenedor.innerHTML = html;
    document.getElementById("precio-total").textContent = `$${total.toFixed(2)}`;
    totalElement.style.display = "block";
  }
}

function actualizarContador() {
  contadorItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const cartLink = document.querySelector('.nav-link[href="#carrito-page"]');
  if (cartLink) {
    let badge = cartLink.querySelector(".contador-carrito");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "contador-carrito ms-1 badge bg-danger rounded-pill";
      cartLink.appendChild(badge);
    }
    badge.textContent = contadorItems;
  }
}

function mostrarFormulario() {
  document.getElementById("formulario-checkout").style.display = "block";
  document.getElementById("formulario-checkout").scrollIntoView({ behavior: "smooth" });
}

function procesarCompra(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("form-compra"));
  const datosCompra = {
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    direccion: formData.get("direccion"),
    metodoPago: formData.get("metodo-pago"),
    productos: [...carrito],
    total: carrito.reduce((t, i) => t + i.precio * i.cantidad, 0),
  };

  // Mostrar resumen en alerta
  let resumen = `🎉 ¡Compra Confirmada! 🎉\n\n`;
  resumen += `👤 Cliente: ${datosCompra.nombre} ${datosCompra.apellido}\n`;
  resumen += `📍 Dirección: ${datosCompra.direccion}\n`;
  resumen += `💳 Método de pago: ${datosCompra.metodoPago}\n\n`;
  resumen += `🛍️ Productos:\n`;

  datosCompra.productos.forEach((item) => {
    resumen += `• ${item.nombre} x ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}\n`;
  });

  resumen += `\n💰 Total: $${datosCompra.total.toFixed(2)}`;

  alert(resumen);

  // Limpiar carrito y formulario
  carrito = [];
  actualizarCarrito();
  actualizarContador();
  document.getElementById("form-compra").reset();
  document.getElementById("formulario-checkout").style.display = "none";

  // Volver a productos
  mostrarSeccion("products-page");
}

// === Inicialización ===
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si existe el carrito en localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    carrito = JSON.parse(storedCart);
  }
  actualizarContador();
});