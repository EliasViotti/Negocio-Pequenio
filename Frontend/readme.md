# 📄 Análisis del Proyecto: ArtesaMex - Artesanías Mexicanas

Este documento presenta un análisis técnico del código HTML y CSS del proyecto **ArtesaMex**, evaluando buenas y malas prácticas de desarrollo web moderno, enfocado en:

- ✅ Buenas prácticas implementadas
- ❌ Malas prácticas detectadas
- ⚠️ Problemas semánticos y de accesibilidad
- 🧹 Código innecesario o redundante
- 💡 Recomendaciones para mejorar el sitio

---

## 🎨 Tecnologías Usadas

- **HTML5**
- **CSS3**
- **Bootstrap 5.3 (CDN)**
- **Font Awesome 6.4 (Iconos)**
- **JavaScript nativo** para navegación básica

---

## ✅ Buenas Prácticas Detectadas

| Categoría | Descripción |
|----------|-------------|
| ✅ Frameworks | Uso correcto de Bootstrap para diseño responsivo y maquetación rápida. |
| ✅ Variables CSS | Se define una paleta de colores con variables personalizadas (`:root`). |
| ✅ Iconografía | Uso coherente de Font Awesome para representar redes sociales e iconos temáticos. |
| ✅ Diseño Responsivo | Estructura basada en grid (`col-md`, `col-lg`) y uso de imágenes responsivas (`img-fluid`). |
| ✅ Modularidad Visual | Estilos organizados por secciones (features, cards, footer). |

---

## ❌ Malas Prácticas en el HTML

| Problema | Ubicación | Detalle |
|--------|-----------|---------|
| 🔤 Falta de semántica | `<div id="home-page">`, `<div id="about-page">`, etc. | Deberían ser `<section>` o `<main>`. |
| 🧩 JavaScript manipulador del DOM | `<script>` al final del body | Se usa `style.display = 'none/block'` para navegar entre secciones → no es recomendado. |
| 🖼️ Imágenes placeholder | Todas las `<img src="/api/placeholder/...">` | En producción deben reemplazarse. Además, alt text genérico ("Producto X") no cumple con estándares de accesibilidad. |
| 🔗 Enlaces vacíos | Redes sociales: `<a href="#">` | No son funcionales ni accesibles. Reemplazar por URLs reales. |
| 🏗️ Estructura plana | Todo dentro de `<body>` sin jerarquía clara | No hay uso de `<header>`, `<main>`, `<footer>` con roles claros. |

---

## ⚠️ Problemas Semánticos y Accesibilidad

| Elemento | Mejora Sugerida |
|---------|------------------|
| `<div id="home-page">` | Cambiar a `<section id="home">` |
| `<div class="card product-card">` | Usar `<article>` ya que representa un producto independiente |
| `<nav class="navbar navbar-expand-lg...">` | Incluir `aria-label="Menú de navegación"` |
| `<ul class="nav nav-pills mb-4 justify-content-center">` | Envolver en `<nav aria-label="Categorías de productos">` |
| Footer general | Dividir en `<address>`, `<nav>`, información legal, etc., para mejor comprensión semántica |

---

## 🧾 Malas Prácticas en el CSS

| Problema | Ubicación | Detalle |
|--------|-----------|---------|
| 🎯 Contraste pobre | Footer (`var(--light-color)` sobre fondo oscuro) | Puede incumplir WCAG AA/AAA. Probar con color #fff o contrastes más fuertes. |
| 🧱 Estilos inline desde JS | `style.display = 'none'` | Mejor usar clase `.hidden { display: none; }` definida en CSS. |
| 📦 Selectores repetidos | Botones, cards, features | Duplicación de estilos |
| 📏 Unidades absolutas | Algunos padding/margin en px | Mejor usar `rem`, `%` u `em` para escalabilidad. |
| 🧷 CSS mezclado | Todos los estilos en un solo bloque | Organizar por secciones: reset, layout, componentes, utilidades. |

---

## 🧹 Código Innecesario o que no hace nada

| Archivo | Fragmento | Justificación |
|-------|------------|----------------|
| `index.html` | Navegación manual con JS | Simula SPA sin beneficios reales. Complica SEO y accesibilidad. |
| `index.html` | `<img src="/api/placeholder/...">` | Solo sirven como marcadores durante el diseño. Eliminar en producción. |
| `style.css` | `.hero-section` background con imagen API placeholder | Este estilo solo funciona en desarrollo. |

---

## 💡 Recomendaciones Generales

1. **Usar elementos semánticos apropiados**  
   ```html
   <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>


#===============================================================================================

**Los cambios que se hicieron fueron v1 .. 5 de mayo:**

1. Agregar imagenes a los 8 productos
2. En productos destacados, se colocaron imagenes, css, entre otros
3. Se modificaron solo algunos titulos y descripciones de los 8 produtos
4. Se arreglo la barra de navegacion para que sea un poco mas semantico , se puso el nav dentro del header.
5. Se modifico el "acerca de nosotros" , se le agrego imagenes de la historia y mision

#===============================================================================================
**Cambios en la version 2.1 🖼 Contenido y Diseño**

1. 🔍 Búsqueda de recursos: Se buscaron imágenes y títulos para nuevos productos (recursos pendientes).
2. 🎨 Banner renovado: Reemplazamos el banner por una imagen más atractiva y moderna.
3. 🌈 Nueva paleta de colores: Actualizamos el esquema de colores para mejorar la experiencia visual.
4. 🛒 Funcionalidades Mejoradas
5. 📂 Barra de categorías reparada: Ahora los productos están correctamente organizados.
6. 🔗 Enlaces de redes sociales: Corregidos para que funcionen correctamente.
7. 📞 Contacto directo: Habilitados los enlaces de correo y teléfono para una interacción más rápida.

**Cambios en la versión 2.2** 
💬 Sistema de Reseñas añadido
1. ⭐ Sistema de valoración: Implementado sistema de estrellas (1-5) con interacción visual.
2. 📝 Formulario de reseñas: Añadido formulario para que los clientes dejen sus opiniones.
3. 💾 Almacenamiento local: Desarrollada funcionalidad con localStorage para guardar comentarios.
4. 👤 Soporte para usuarios anónimos: Opción para comentar sin proporcionar nombre.
5. 🗓️ Registro automático: Sistema de fecha y hora para cada comentario publicado.
6. 🔄 Carga dinámica: Visualización automática de comentarios existentes al cargar la página.
7. 📱 Diseño responsivo: Optimizado para todos los dispositivos manteniendo compatibilidad con Bootstrap.
8. ✅ Validación de datos: Control de campos obligatorios antes del envío de comentarios.

🛍️🛠️ Refactorizacion de producto
Cambios Realizados
1. 🔄 Carga Dinámica de Producto
  Antes: Los productos se mostraban estáticamente en el HTML
  Ahora: Los productos se cargan dinámicamente mediante JavaScript usando la función renderProducts()
2. 📊 Estructura de Datos Mejorada
   📌Implementación de un array products con objetos estructurados que incluyen:
   ID único para cada producto
   Información básica (nombre, categoría, precio, descripción)
   Array de imágenes
   Objeto details con especificaciones técnicas (medidas, material, técnica, origen)
3. 🏷️ Sistema de Categorización
   📌Creación de la función getCategoryName() para formatear nombres de categorías
   📌Soporte para categorías: Madera, Textiles, Cerámica, Joyería 
   📌Función filterProducts() para filtrado dinámico por categoría
4. 🖼️ Renderizado Dinámico de Tarjetas
   📌Generación automática de HTML para cada producto
   📌Soporte para múltiples imágenes por producto (hasta 3 imágenes)
   📌Cards responsivos con Bootstrap classes
   📌Botones de "Ver detalles" generados dinámicamente
5. 📋 Modal de Detalles Mejorado
   📌Función showProductDetails() que crea modales dinámicamente
   📌Modal responsive con información completa del producto
   📌Especificaciones técnicas organizadas en lista
   📌Control de cantidad integrado
   📌Botón de agregar al carrito
6. 🔘 Sistema de Navegación por Categorías
   📌Event listeners para botones de categoría
   📌Activación/desactivación de estados activos en navegación
   📌Scroll automático a la sección de productos
   📌Soporte para enlaces de categoría desde otras secciones
7. ⚙️ Funciones de Utilidad
   📌setupDetailButtons(): Configura event listeners para botones de detalles
   📌setupCategoryButton(): Función helper para configurar botones de categoría
   📌Manejo de eventos DOMContentLoaded para inicialización
8. 🛒 Integración con Carrito
   📌Preparación para funciones de carrito (agregarAlCarritoConCantidad(), cambiarCantidadProducto())
   control de cantidad en modal de detalles

🛒 Sistema de carritos añadida
1. 📄 Estructura HTML Implementada
      Nueva Sección de Carrito

      📌Creación de la sección #carrito-page con diseño responsivo
         Mensaje de bienvenida temático mexicano con emojis
         Contenedor dinámico #items-carrito para mostrar productos
         Estado inicial: "Tu carrito está vacío"

      📌Sistema de Total y Checkout
         Elemento #total-carrito con precio total dinámico
         Botón "Proceder al Checkout" que aparece solo con items
         Inicialmente oculto hasta que se agreguen productos

      📌Formulario de Checkout Completo

         Formulario #form-compra con validación HTML5
         Campos implementados:
         Nombre (requerido)
         Apellido (requerido)
         Dirección (textarea, requerido)
         Método de pago (select con 5 opciones)
         Botón "Confirmar Compra" para finalizar
2. 🔧 Funcionalidades JavaScript
      📌Variables Globales
         carrito = []: Array para almacenar productos
         contadorItems = 0: Contador de items totales

      📌Gestión de Productos en Carrito
         agregarAlCarritoConCantidad(): Añade productos con cantidad específica
         Maneja productos existentes (suma cantidades)
         Crea nuevos items con estructura: id, nombre, precio, cantidad
         Muestra confirmación por alert
         Resetea cantidad a 1 después de agregar
         eliminarDelCarrito(): Remueve productos completamente
         cambiarCantidad(): Modifica cantidad de productos existentes
         Auto-elimina si cantidad llega a 0



       📌Control de Cantidad
         cambiarCantidadProducto(): Para modales de productos

         Límites: mínimo 1, máximo 99
         Controles + y - funcionales



       📌Renderizado Dinámico
         actualizarCarrito(): Genera HTML dinámicamente
         Estado vacío vs. con productos
         Muestra: nombre, cantidad, precio unitario, subtotal
         Botones de modificar cantidad y eliminar
         Cálculo automático de total
         Control de visibilidad de elementos



       📌Sistema de Contador Visual

         actualizarContador(): Badge en navegación

         Suma total de cantidades de todos los productos
         Badge rojo con número de items
         Se crea dinámicamente si no existe



       📌Proceso de Compra

         mostrarFormulario(): Revela formulario de checkout

         Scroll automático al formulario

         procesarCompra(): Maneja envío del formulario

         Recopila todos los datos del formulario
         Genera resumen completo de compra
         Muestra confirmación detallada
         Limpia carrito y formulario
         Redirige a página de productos



       📌Navegación Mejorada

         mostrarSeccion(): Control de secciones activas

         Manejo de clases CSS active
         Scroll suave al cambiar secciones
3. 💾 Persistencia de Datos
         Verificación de localStorage al cargar la página
         Recuperación de carrito guardado (si existe)
         Actualización automática del contador al inicializar

