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

**Cambios en la version 2.1**
🖼 Contenido y Diseño
1. 🔍 Búsqueda de recursos: Se buscaron imágenes y títulos para nuevos productos (recursos pendientes).
2. 🎨 Banner renovado: Reemplazamos el banner por una imagen más atractiva y moderna.
3. 🌈 Nueva paleta de colores: Actualizamos el esquema de colores para mejorar la experiencia visual.
4. 🛒 Funcionalidades Mejoradas
5. 📂 Barra de categorías reparada: Ahora los productos están correctamente organizados.
6. 🔗 Enlaces de redes sociales: Corregidos para que funcionen correctamente.
7. 📞 Contacto directo: Habilitados los enlaces de correo y teléfono para una interacción más rápida.