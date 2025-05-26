<?php
if (!isset($GLOBALS['productos_cache'])) {
  $GLOBALS['productos_cache'] = json_decode(file_get_contents('data/productos.json'), true);
}
$productos = $GLOBALS['productos_cache'];
// Configuración inicial
error_reporting(E_ALL);
ini_set('display_errors', 1);

//Datos de productos 
$productos = json_decode(file_get_contents('data/productos.json'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
  die("Error al leer productos.json: " . json_last_error_msg());
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Productos - ArtesaMex</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css " rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css " rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../Frontend/style.css" />
</head>

<body>
  <!-- Barra de navegación -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#home-page">
          <img src="../Frontend/assets/barra de navegacion logo/logoartesamex1.png" alt="Logo de ArtesaMex"
            class="logonavbar me-2" />
          ArtesaMex
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#home-page">&#x1F3E0;Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-page">&#10024;Acerca de</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products-page">&#x1F4E6;Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#carrito-page">&#128722;Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section id="products-page" class="py-5 producto-fondo">
    <div class="container">
      <h2 class="section-title mb-5">Nuestros Productos</h2>
      <p>En <strong>ArtesaMex</strong> celebramos la riqueza del arte mexicano con una colección cuidadosamente
        seleccionada de
        productos hechos a mano.
        Descubre la pasión de nuestros artesanos a través de cada pieza:
        textiles, cerámica, madera y joyería, elaborados con tradición, detalle y corazón.

        🌿 Autenticidad garantizada. 100% hecho en México.
      </p>
      <!-- Filtros por categoría -->
      <ul class="nav nav-pills mb-4 justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#todos">Todos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#madera">Madera</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#textiles">Textiles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ceramica">Cerámica</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#joyeria">Joyería</a>
        </li>
      </ul>
      <div class="row" id="todos">
        <!-- PRODUCTOS SE CARGAN DINÁMICAMENTE -->
        <?php
        foreach ($productos as $producto) {
          echo "<div class='col-md-4 col-lg-3 mb-4 producto {$producto["categoria"]}'>
                  <div class='card product-card h-100'>
                    <div class='flex-image'>
                      <div class='flex-card'><img src='../Frontend/{$producto["imagen"]}' class='img-fluid' alt='{$producto["nombre"]}'></div>
                    </div>
                  <div class='card-body'>
                    <h5 class='card-title'>{$producto["nombre"]}</h5>
                    <p class='text-muted'>{$producto["categoria"]}</p>
                    <p class='card-text'>{$producto["descripcion"]}</p>
                    <div class='d-flex justify-content-between align-items-center'>
                      <span class='h5 mb-0'>\${$producto["precio"]}</span>
                      <button class='btn btn-sm btn-outline-primary view-details' data-id='{$producto["id"]}'>Ver detalles</button>
                    </div>
                  </div>
                  </div>
                </div>";
        }
        ?>
      </div>
    </div>
  </section>

  <!-- Pie de página -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <h5>ArtesaMex</h5>
          <p>
            Conectando el talento artesanal mexicano con el mundo desde 2015.
          </p>
          <div class="mt-3">
            <a href="https://www.facebook.com/artesamex.artesamex/" class="social-icon" target="_blank">
              <i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/artesamexbylili/" class="social-icon" target="_blank">
              <i class="fab fa-instagram"></i></a>
            <a href="https://x.com/leomessisite" class="social-icon" target="_blank">
              <i class="bi bi-twitter-x"></i></a>
          </div>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <h5>Enlaces Rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="#home-page" class="footer-link">Inicio</a></li>
            <li>
              <a href="#about-page" class="footer-link">Acerca de Nosotros</a>
            </li>
            <li>
              <a href="#products-page" class="footer-link">Productos</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Contáctanos</h5>
          <ul class="list-unstyled">
            <li>
              <i class="fas fa-map-marker-alt me-2"></i>
              <a href="https://maps.app.goo.gl/QGepxT25rpnJ3uPM6" target="_blank">Av. Artesanos 123, Colonia Centro,
                Ciudad de México</a>
            </li>
            <li>
              <i class="fas fa-phone me-2"></i><a href="tel:+54 9 370 472-3475">+54 9 370 472-3475</a>
            </li>
            <li>
              <i class="fas fa-envelope me-2"></i>
              <a href="mailto:contacto@artesamex.com">contacto@artesamex.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 mb-3 bg-light" />
      <div class="text-center">
        <p class="mb-0">
          &copy; 2025 ArtesaMex. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>

</html>