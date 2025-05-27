<?php
require 'modules/Carrito.php';

$carrito = new Carrito();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ['success' => false];

    try {
        if (!isset($_POST['accion'])) {
            throw new Exception('Acción no especificada');
        }

        switch ($_POST['accion']) {
            case 'agregar':
                if (!isset($_POST['id'])) {
                    throw new Exception('ID de producto no especificado');
                }
                $cantidad = isset($_POST['cantidad']) ? max(1, (int)$_POST['cantidad']) : 1;
                $success = $carrito->agregar_producto($_POST['id'], $cantidad);
                $response['message'] = $success ? 'Producto agregado' : 'Producto no encontrado';

                // Nueva lógica para redirección
                if (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'productos.php') !== false) {
                    $response['redirect'] = false;
                    $response['producto'] = $_POST['id'];
                } else {
                    $response['redirect'] = 'carrito_web.php';
                }
                break;

            case 'eliminar':
                // ... (mantener igual) ...
                $response['redirect'] = 'carrito_web.php';
                break;

            case 'actualizar':
                // ... (mantener igual) ...
                $response['redirect'] = 'carrito_web.php';
                break;

            case 'vaciar':
                // ... (mantener igual) ...
                $response['redirect'] = 'carrito_web.php';
                break;

            default:
                throw new Exception('Acción no válida');
        }

        $response['success'] = $success ?? true;
        $response['total'] = $carrito->calcular_total();
        $response['count'] = $carrito->contar_productos();
    } catch (Exception $e) {
        $response['message'] = $e->getMessage();
        $response['redirect'] = 'carrito_web.php';
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

header('Location: carrito_web.php');
