<?php
require 'modules/Carrito.php';

$carrito = new Carrito();
$items = $carrito->obtener_items();

if (empty($items)) {
    header('Location: gracias.php');
    exit;
}

// Procesar compra si se envía el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Aquí iría la lógica para procesar el pago
    // Por ahora simplemente vaciamos el carrito
    $carrito->vaciar();

    header('Location: gracias.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Cabecera similar a carrito.php -->
    <title>Checkout - ArtesaMex</title>
</head>

<body>
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="mb-4">Información de Envío</h2>
                <form method="post" id="checkout-form">
                    <!-- Campos del formulario -->
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label">Correo Electrónico</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="tel" class="form-control" id="telefono" name="telefono" required>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="direccion" class="form-label">Dirección</label>
                        <textarea class="form-control" id="direccion" name="direccion" rows="3" required></textarea>
                    </div>

                    <h3 class="mt-5 mb-3">Método de Pago</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="metodo_pago" id="paypal" value="paypal" checked>
                        <label class="form-check-label" for="paypal">
                            PayPal
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="metodo_pago" id="transferencia" value="transferencia">
                        <label class="form-check-label" for="transferencia">
                            Transferencia Bancaria
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg mt-4 w-100">
                        Completar Compra
                    </button>
                </form>
            </div>

            <div class="col-lg-4">
                <div class="card shadow-sm mt-4 mt-lg-0">
                    <div class="card-header bg-light">
                        <h4 class="mb-0">Resumen de Pedido</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <?php foreach ($items as $item): ?>
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>
                                        <?= htmlspecialchars($item['nombre']) ?>
                                        <small class="text-muted d-block">x<?= $item['cantidad'] ?></small>
                                    </div>
                                    <span>$<?= number_format($item['precio'] * $item['cantidad'], 2) ?></span>
                                </li>
                            <?php endforeach; ?>

                            <li class="list-group-item d-flex justify-content-between fw-bold">
                                <span>Total</span>
                                <span>$<?= number_format($carrito->calcular_total(), 2) ?></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>