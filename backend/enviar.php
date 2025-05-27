<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Función para limpiar datos
    function limpiar($dato) {
        return htmlspecialchars(trim($dato));
    }

    $nombre = limpiar($_POST["nombre"] ?? '');
    $correo = limpiar($_POST["correo"] ?? '');
    $mensaje = limpiar($_POST["mensaje"] ?? '');
    $motivo = limpiar($_POST["motivo"] ?? '');

    // Validaciones
    $errores = [];

    if (empty($nombre)) {
        $errores[] = "El nombre es obligatorio.";
    }

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo electrónico no es válido.";
    }

    if (strlen($mensaje) < 10) {
        $errores[] = "El mensaje debe tener al menos 10 caracteres.";
    }

    $motivosPermitidos = ["reclamo", "consulta", "seguimiento"];
    if (!in_array($motivo, $motivosPermitidos)) {
        $errores[] = "Motivo de contacto inválido.";
    }

    if (!empty($errores)) {
        echo "<h2>Ocurrieron errores:</h2><ul>";
        foreach ($errores as $e) {
            echo "<li>$e</li>";
        }
        echo "</ul><a href='javascript:history.back()'>Volver</a>";
        exit;
    }

    // Si no hay errores, guardar el mensaje
    $nuevoMensaje = [
        "motivo" => $motivo,
        "nombre" => $nombre,
        "correo" => $correo,
        "mensaje" => $mensaje,
        "fecha" => date("Y-m-d H:i:s")
    ];

    $archivo = 'mensajes.json';
    if (file_exists($archivo)) {
        $contenido = file_get_contents($archivo);
        $mensajes = json_decode($contenido, true);
    } else {
        $mensajes = [];
    }

    $mensajes[] = $nuevoMensaje;

    file_put_contents($archivo, json_encode($mensajes, JSON_PRETTY_PRINT));

    echo "<h2>Gracias por tu $motivo, $nombre. Tu mensaje fue guardado correctamente.</h2>";
} else {
    echo "Acceso no permitido.";
}
?>


