<?php
require 'modules/Carrito.php';
$carrito = new Carrito();
$items = $carrito->obtener_items();
$total = $carrito->calcular_total();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de Compras - ArtesaMex</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .producto-img {
            max-width: 80px;
            height: auto;
        }

        .quantity-input {
            width: 70px;
        }
    </style>
</head>

<body>
    <div class="container py-5">
        <h1 class="mb-4">Tu Carrito de Compras</h1>

        <?php if (empty($items)): ?>
            <div class="alert alert-info">Tu carrito está vacío</div>
            <a href="productos.php" class="btn btn-primary">Ver Productos</a>
        <?php else: ?>
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th>Producto</th>
                            <th>Precio Unitario</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($items as $item): ?>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="<?= htmlspecialchars($item['imagen']) ?>" alt="<?= htmlspecialchars($item['nombre']) ?>"
                                            class="producto-img me-3">
                                        <div>
                                            <h5 class="mb-0"><?= htmlspecialchars($item['nombre']) ?></h5>
                                            <?php if (isset($item['stock'])): ?>
                                                <small class="text-muted">Disponibles: <?= $item['stock'] ?></small>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </td>
                                <td>$<?= number_format($item['precio'], 2) ?></td>
                                <td>
                                    <form class="update-form" method="post" action="procesar_carrito.php">
                                        <input type="hidden" name="accion" value="actualizar">
                                        <input type="hidden" name="id" value="<?= $item['id'] ?>">
                                        <div class="input-group">
                                            <input type="number" name="cantidad" value="<?= $item['cantidad'] ?>" min="1"
                                                max="<?= $item['stock'] ?? '' ?>" class="form-control quantity-input">
                                            <button type="submit" class="btn btn-outline-secondary">
                                                <i class="fas fa-sync-alt"></i>
                                            </button>
                                        </div>
                                    </form>
                                </td>
                                <td>$<?= number_format($item['precio'] * $item['cantidad'], 2) ?></td>
                                <td>
                                    <form method="post" action="procesar_carrito.php">
                                        <input type="hidden" name="accion" value="eliminar">
                                        <input type="hidden" name="id" value="<?= $item['id'] ?>">
                                        <button type="submit" class="btn btn-danger btn-sm">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-end fw-bold">Total:</td>
                            <td colspan="2" class="fw-bold">$<?= number_format($total, 2) ?></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="d-flex justify-content-between mt-4">
                <form method="post" action="procesar_carrito.php">
                    <input type="hidden" name="accion" value="vaciar">
                    <button type="submit" class="btn btn-outline-danger">
                        <i class="fas fa-trash me-1"></i> Vaciar Carrito
                    </button>
                </form>

                <a href="checkout.php" class="btn btn-primary btn-lg">
                    <i class="fas fa-credit-card me-1"></i> Proceder al Pago
                </a>
            </div>
        <?php endif; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <script>
        // Manejar actualizaciones con AJAX
        document.querySelectorAll('.update-form').forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                try {
                    const response = await fetch('procesar_carrito.php', {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();

                    if (data.success) {
                        location.reload(); // Recargar para ver cambios
                    } else {
                        alert(data.message || 'Error al actualizar');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error de conexión');
                }
            });
        });
    </script>
</body>

</html>