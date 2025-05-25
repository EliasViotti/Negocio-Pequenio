// navigation.js - Versión corregida (mantiene todo el comportamiento actual)

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // === 1. Navegación entre secciones desde la barra de navegación ===
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Actualizar clase activa
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Obtener ID destino
      const targetId = this.getAttribute("href");

      // Ocultar todas las secciones
      document.querySelectorAll("#home-page, #about-page, #products-page,#carrito-page").forEach((page) => {
        page.style.display = "none";
      });

      // Mostrar sección destino
      const targetSection = document.querySelector(targetId);
      if (targetSection) targetSection.style.display = "block";

      // Scroll suave al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // === 2. Mostrar solo el home al inicio ===
  document.querySelector("#home-page").style.display = "block";
  document.querySelector("#about-page").style.display = "none";
  document.querySelector("#products-page").style.display = "none";
  document.querySelector("#carrito-page").style.display = "none";

  // === 3. Filtrado por categorías en productos ===
  const categoryLinks = document.querySelectorAll(".nav-pills .nav-link");
  const productos = document.querySelectorAll(".producto");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Marcar activo en categorías
      categoryLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const categoria = this.getAttribute("href").replace("#", "").toLowerCase();

      productos.forEach((producto) => {
        if (categoria === "todos" || producto.classList.contains(categoria)) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });

  // === 4. Soporte para todos los enlaces internos (#products-page, etc.) ===
  document.querySelectorAll('a[href^="#"]:not(.nav-link):not(.view-details)').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Ocultar todas las secciones
        document.querySelectorAll("#home-page, #about-page, #products-page,#carrito-page").forEach((page) => {
          page.style.display = "none";
        });

        // Mostrar solo la sección destino
        targetElement.style.display = "block";

        // Quitar clase activa de todos los links de navegación
        navLinks.forEach((link) => link.classList.remove("active"));

        // Agregar clase activa al link correspondiente en la barra de navegación
        const matchingLink = document.querySelector(`.navbar-nav .nav-link[href="${targetId}"]`);
        if (matchingLink) {
          matchingLink.classList.add("active");
        }

        // Scroll suave
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  });

});