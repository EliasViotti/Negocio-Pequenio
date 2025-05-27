<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contáctanos</title>
</head>
<body>
  <h2>¿En qué podemos ayudarte?</h2>
  <form action="formulario_contacto.php" method="GET">
    <label for="motivo">Seleccioná un motivo:</label><br><br>
    <select name="motivo" id="motivo" required>
      <option value="">-- Elegí una opción --</option>
      <option value="reclamo">Reclamo</option>
      <option value="consulta">Consulta</option>
      <option value="seguimiento">Seguimiento de trámite</option>
    </select><br><br>
    <input type="submit" value="Continuar">
  </form>
</body>
</html>

