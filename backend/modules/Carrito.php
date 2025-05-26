<?php
session_start();
if (!isset($GLOBALS['productos_cache'])) {
  $GLOBALS['productos_cache'] = json_decode(file_get_contents('data/productos.json'), true);
}
$productos = $GLOBALS['productos_cache'];

//Configuracion
define('CARRITOS_DIR', 'data/carritos/');

//Crear directorio si no existe
if (!file_exists(CARRITOS_DIR)) {
  mkdir(CARRITOS_DIR, 0777, true);
}

class Carrito
{
  private $usuario_id;

  public function __construct($usuario_id = null)
  {
    $this->usuario_id = $usuario_id ?: session_id();
  }

  public function obtener()
  {
    $archivo = CARRITOS_DIR . $this->usuario_id . '.json';

    if (file_exists($archivo)) {
      return json_decode(file_get_contents($archivo), true) ?: [];
    }

    return [];
  }

  public function guardar($carrito)
  {
    $archivo = CARRITOS_DIR . $this->usuario_id . '.json';
    file_put_contents($archivo, json_encode($carrito, JSON_PRETTY_PRINT));
  }

  public function agregar_producto($producto_id, $cantidad = 1)
  {
    $productos = json_decode(file_get_contents('data/productos.json'), true);
    $producto = null;

    foreach ($productos as $p) {
      if ($p['id'] == $producto_id) {
        $producto = $p;
        break;
      }
    }

    if (!$producto) return false;

    $carrito = $this->obtener();

    if (isset($carrito[$producto_id])) {
      $carrito[$producto_id]['cantidad'] += $cantidad;
    } else {
      $carrito[$producto_id] = [
        'id' => $producto['id'],
        'nombre' => $producto['nombre'],
        'precio' => $producto['precio'],
        'imagen' => $producto['imagen'],
        'cantidad' => $cantidad,
        'stock' => $producto['stock'] ?? null
      ];
    }

    $this->guardar($carrito);
    return true;
  }

  public function eliminar_producto($producto_id)
  {
    $carrito = $this->obtener();

    if (isset($carrito[$producto_id])) {
      unset($carrito[$producto_id]);
      $this->guardar($carrito);
      return true;
    }

    return false;
  }

  public function actualizar_cantidad($producto_id, $cantidad)
  {
    if ($cantidad < 1) return false;

    $carrito = $this->obtener();

    if (isset($carrito[$producto_id])) {
      $carrito[$producto_id]['cantidad'] = $cantidad;
      $this->guardar($carrito);
      return true;
    }

    return false;
  }

  public function calcular_total()
  {
    $carrito = $this->obtener();
    $total = 0;

    foreach ($carrito as $item) {
      $total += $item['precio'] * $item['cantidad'];
    }

    return $total;
  }

  public function vaciar()
  {
    $this->guardar([]);
  }

  public function contar_productos()
  {
    return count($this->obtener());
  }

  public function obtener_items()
  {
    return $this->obtener();
  }
}