<?php
$archivo = 'mensajes.json';

if (file_exists($archivo)) {
    $contenido = file_get_contents($archivo);
    $mensajes = json_decode($contenido, true);

    echo "<h2>Mensajes recibidos:</h2>";
    foreach ($mensajes as $m) {
        echo "<div style='margin-bottom: 15px; border-bottom: 1px solid #ccc;'>";
        echo "<strong>Nombre:</strong> " . $m['nombre'] . "<br>";
        echo "<strong>Correo:</strong> " . $m['correo'] . "<br>";
        echo "<strong>Mensaje:</strong> " . $m['mensaje'] . "<br>";
        echo "<em>Fecha:</em> " . $m['fecha'] . "<br>";
        echo "</div>";
    }
} else {
    echo "No hay mensajes aún.";
}
?>
