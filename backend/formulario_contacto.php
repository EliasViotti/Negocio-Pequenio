<?php
$motivo = $_GET['motivo'] ?? null;
$motivoTexto = [
    'reclamo' => 'Reclamo',
    'consulta' => 'Consulta',
    'seguimiento' => 'Seguimiento de trámite'
];

if (!$motivo || !array_key_exists($motivo, $motivoTexto)) {
    echo "Motivo no válido. <a href='contacto.php'>Volver</a>";
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title><?php echo $motivoTexto[$motivo]; ?></title>
</head>
<body>
  <h2>Formulario de <?php echo $motivoTexto[$motivo]; ?></h2>
  <form action="enviar.php" method="POST">
    <input type="hidden" name="motivo" value="<?php echo htmlspecialchars($motivo); ?>">

    <label for="nombre">Nombre:</label><br>
    <input type="text" name="nombre" required><br><br>

    <label for="correo">Correo:</label><br>
    <input type="email" name="correo" required><br><br>

    <label for="mensaje">Mensaje:</label><br>
    <textarea name="mensaje" rows="5" required></textarea><br><br>

    <input type="submit" value="Enviar mensaje">
  </form>
</body>
</html>
