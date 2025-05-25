// products.js
const products = [
  {
    id: 1,
    name: "Alebrije Pez Multicolor",
    category: "madera",
    price: 850,
    description:
      "Figura de pez, tallada y pintada a mano con diseños únicos y colores vibrantes.",
    images: ["assets/alebrijes/alebrijepez.jpeg"],
    details: {
      medidas: "20cm x 10cm x 8cm",
      material: "Madera de copal",
      tecnica: "Tallado y pintado a mano",
      origen: "San Martín Tilcajete, Oaxaca",
    },
  },
  {
    id: 2,
    name: "Rebozo Tradicional",
    category: "textiles",
    price: 1200,
    description:
      "Tejido a mano en telar con técnicas ancestrales y tintes naturales.",
    images: ["assets/textiles/rebozo.png"],
    details: {
      medidas: "180cm x 60cm",
      material: "Algodón y seda",
      tecnica: "Tejido en telar de cintura",
      origen: "Santa María del Río, San Luis Potosí",
    },
  },
  {
    id: 3,
    name: "Talavera Decorativa",
    category: "ceramica",
    price: 650,
    description:
      "Pieza de cerámica pintada a mano con diseños tradicionales de Puebla.",
    images: ["assets/ceramica/talavera1.png"],
    details: {
      medidas: "15cm x 15cm x 10cm",
      material: "Barro y esmaltes minerales",
      tecnica: "Moldeado y pintado a mano",
      origen: "Puebla, Puebla",
    },
  },
  {
    id: 4,
    name: "Collar de Plata",
    category: "joyeria",
    price: 1500,
    description:
      "Joyería fina de plata trabajada a mano por artesanos de Taxco.",
    images: ["assets/joyerias/collardeplata.jpg"],
    details: {
      medidas: "40cm de largo",
      material: "Plata esterlina 925",
      tecnica: "Repujado y cincelado",
      origen: "Taxco, Guerrero",
    },
  },
  {
    id: 5,
    name: "Máscara Ceremonial",
    category: "madera",
    price: 950,
    description:
      "Máscara tallada en madera inspirada en tradiciones prehispánicas.",
    images: ["assets/madera/images.jpeg"],
    details: {
      medidas: "25cm x 18cm x 10cm",
      material: "Madera de cedro",
      tecnica: "Tallado y policromado",
      origen: "Michoacán",
    },
  },
  {
    id: 6,
    name: "Huipil Bordado",
    category: "textiles",
    price: 1800,
    description: "Prenda tradicional con bordados a mano de Chiapas.",
    images: ["assets/textiles/huipil1.jpg"],
    details: {
      medidas: "Talla única (ajustable)",
      material: "Algodón y lana",
      tecnica: "Bordado a mano con punto de cruz",
      origen: "San Juan Chamula, Chiapas",
    },
  },
  {
    id: 7,
    name: "Árbol de la Vida",
    category: "ceramica",
    price: 1100,
    description:
      "Bonito arbol de vida de cerámica, decorada, elaborada y pintada a mano en Metepec.",
    images: ["assets/ceramica/arboldevida.jpg"],
    details: {
      medidas: "30cm de altura",
      material: "Barro rojo y esmaltes",
      tecnica: "Modelado y pintura a mano",
      origen: "Metepec, Estado de México",
    },
  },
  {
    id: 8,
    name: "Aretes de Ámbar",
    category: "joyeria",
    price: 780,
    description: "Aretes de plata con ámbar natural de Chiapas montado a mano.",
    images: ["assets/joyerias/aretesambar.jpg"],
    details: {
      medidas: "3cm de diámetro",
      material: "Ámbar natural y plata",
      tecnica: "Engaste tradicional",
      origen: "Simojovel, Chiapas",
    },
  },
  {
    id: 9,
    name: "Florero Cerámico",
    category: "ceramica",
    price: 1150,
    description:
      "Florero pintado a mano con escenas coloridas que representan la cultura popular mexicana.",
    images: ["assets/ceramica/florero-ceramico.jpg"],
    details: {
      medidas: "25cm de altura x 15cm diámetro",
      material: "Barro de alta temperatura",
      tecnica: "Torneado y pintura a mano",
      origen: "Dolores Hidalgo, Guanajuato",
    },
  },
  {
    id: 10,
    name: "Jarrón Decorativo",
    category: "ceramica",
    price: 2250,
    description:
      "Pieza de cerámica artesanal con patrones geométricos tradicionales de estilo indígena.",
    images: ["assets/ceramica/jarron-decorativo.jpeg"],
    details: {
      medidas: "35cm de altura x 20cm diámetro",
      material: "Barro bruñido",
      tecnica: "Técnica de reducción de oxígeno",
      origen: "Mata Ortiz, Chihuahua",
    },
  },
  {
    id: 11,
    name: "Sapo Decorativo",
    category: "ceramica",
    price: 2300,
    description:
      "Figura de sapo elaborada en cerámica con acabados artesanales. Decorada con motivos florales en tonos ocres, azules y negros que reflejan el arte popular mexicano. Ideal como pieza ornamental o de colección.",
    images: ["assets/ceramica/sapoceramica.jpg"],
    details: {
      medidas: "18cm x 12cm x 10cm",
      material: "Barro vidriado",
      tecnica: "Modelado y esgrafiado",
      origen: "Tonalá, Jalisco",
    },
  },
  {
    id: 12,
    name: "Armadillo Alebrije",
    category: "madera",
    price: 1350,
    description:
      "Figura tallada y pintada a mano con vivos colores y patrones fantásticos típicos del arte oaxaqueño.",
    images: ["assets/alebrijes/armadillo-alebrije.jpg"],
    details: {
      medidas: "15cm x 8cm x 6cm",
      material: "Madera de copal",
      tecnica: "Tallado y pintura a mano",
      origen: "San Martín Tilcajete, Oaxaca",
    },
  },
  {
    id: 13,
    name: "Búho Artesanal",
    category: "madera",
    price: 2050,
    description:
      "Escultura de búho con alas extendidas, decorada con detalles minuciosos en colores brillantes.",
    images: ["assets/alebrijes/buo-artesanal-alebrije.jpg"],
    details: {
      medidas: "25cm x 15cm x 10cm",
      material: "Madera de zompantle",
      tecnica: "Tallado y laqueado",
      origen: "Arrazola, Oaxaca",
    },
  },
  {
    id: 14,
    name: "Gato Alebrije",
    category: "madera",
    price: 2550,
    description:
      "Colorida figura felina con diseños psicodélicos que combinan tradición y creatividad mexicana.",
    images: ["assets/alebrijes/gato-alejibres.jpg"],
    details: {
      medidas: "20cm x 12cm x 8cm",
      material: "Madera de copal",
      tecnica: "Tallado y pintura acrílica",
      origen: "La Unión Tejalapan, Oaxaca",
    },
  },
  {
    id: 15,
    name: "Brazalete Mexicano",
    category: "joyeria",
    price: 3050,
    description:
      "Brazalete elaborado con detalles ornamentales y acabado vintage que refleja la riqueza cultural mexicana.",
    images: ["assets/joyerias/brazalete-mexicano.jpg"],
    details: {
      medidas: "Ajustable hasta 18cm",
      material: "Plata y cobre",
      tecnica: "Filigrana y repujado",
      origen: "Taxco, Guerrero",
    },
  },
  {
    id: 16,
    name: "Broche Antiguo",
    category: "joyeria",
    price: 3350,
    description:
      "Elegantes broches florales con incrustaciones artesanales, inspirados en el estilo clásico de la joyería tradicional.",
    images: ["assets/joyerias/broche-antiguo.jpg"],
    details: {
      medidas: "5cm x 3cm",
      material: "Plata y piedras semipreciosas",
      tecnica: "Cincelado y engaste",
      origen: "Guadalajara, Jalisco",
    },
  },
  {
    id: 17,
    name: "Reloj Mexicano",
    category: "joyeria",
    price: 3900,
    description:
      "Reloj de diseño único que integra elementos artesanales mexicanos en una pieza moderna y sofisticada.",
    images: ["assets/joyerias/reloj-mexicanos.png"],
    details: {
      medidas: "3cm de diámetro",
      material: "Plata y obsidiana",
      tecnica: "Engaste y esmalte",
      origen: "Taxco, Guerrero",
    },
  },
  {
    id: 18,
    name: "Figura Contemplativa en Madera",
    category: "madera",
    price: 3000,
    description:
      "Escultura artesanal tallada en madera que representa una figura humana en postura reflexiva. Su diseño abstracto y suave acabado natural evocan tranquilidad y conexión interior. Ideal para decoración de interiores con un estilo artístico y orgánico.",
    images: ["assets/madera/esculturamadera.JPG"],
    details: {
      medidas: "30cm x 15cm x 10cm",
      material: "Madera de mezquite",
      tecnica: "Tallado directo",
      origen: "Oaxaca",
    },
  },
  {
    id: 19,
    name: "Gato de Madera",
    category: "madera",
    price: 3600,
    description:
      "Escultura de gato elaborada con detalles finos y acabados tradicionales, representando la fauna mexicana.",
    images: ["assets/madera/gato-madera.jpg"],
    details: {
      medidas: "25cm x 12cm x 8cm",
      material: "Madera de nogal",
      tecnica: "Tallado y pulido",
      origen: "Michoacán",
    },
  },
  {
    id: 20,
    name: "Máscara de Jaguar Tradicional",
    category: "madera",
    price: 2900,
    description:
      "Máscara de madera pintada a mano, inspirada en el jaguar, usada en danzas y tradiciones mexicanas.",
    images: ["assets/madera/mascaramadera.jpg"],
    details: {
      medidas: "22cm x 18cm x 8cm",
      material: "Madera de ayacahuite",
      tecnica: "Tallado y policromado",
      origen: "Guerrero",
    },
  },
  {
    id: 21,
    name: "Sarape mexicano",
    category: "textiles",
    price: 3400,
    description:
      "Textil tradicional con franjas de colores, ideal como cobija o decoración.",
    images: ["assets/textiles/mantatextil.JPG"],
    details: {
      medidas: "200cm x 120cm",
      material: "Lana virgen",
      tecnica: "Tejido en telar de pedal",
      origen: "Saltillo, Coahuila",
    },
  },
  {
    id: 22,
    name: "Almohadones Bordados",
    category: "textiles",
    price: 3100,
    description:
      "Cojines decorativos con bordados florales hechos a mano, típicos del arte textil indígena.",
    images: ["assets/textiles/almohadones-bordados.jpg"],
    details: {
      medidas: "40cm x 40cm",
      material: "Algodón y lana",
      tecnica: "Bordado tenango",
      origen: "Tenango de Doria, Hidalgo",
    },
  },
  {
    id: 23,
    name: "Hamaca Mexicana",
    category: "textiles",
    price: 3000,
    description:
      "Hamaca tejida con hilos multicolores, ideal para el descanso y elaborada con técnicas tradicionales del sureste de México.",
    images: ["assets/textiles/hamaca-mexicana.jpg"],
    details: {
      medidas: "250cm x 150cm",
      material: "Hilo de algodón",
      tecnica: "Tejido de urdimbre",
      origen: "Yucatán",
    },
  },
];

// Función para obtener el nombre de categoría formateado
function getCategoryName(category) {
  const names = {
    madera: "Madera",
    textiles: "Textiles",
    ceramica: "Cerámica",
    joyeria: "Joyería",
  };
  return names[category] || category;
}

// Función para renderizar productos
function renderProducts(productsToRender) {
  const productsContainer = document.querySelector("#products-page .row#todos");
  productsContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = `col-md-4 col-lg-3 mb-4 producto ${product.category}`;
    productCard.innerHTML = `
      <div class="card product-card h-100">
        <div class="flex-image">
          <div class="flex-card"><img src="${
            product.images[0]
          }" class="img-fluid" alt="${product.name}"></div>
          ${
            product.images.length > 1
              ? `<div class="flex-card"><img src="${product.images[1]}" class="img-fluid" alt="${product.name}"></div>`
              : ""
          }
          ${
            product.images.length > 2
              ? `<div class="flex-card"><img src="${product.images[2]}" class="img-fluid" alt="${product.name}"></div>`
              : ""
          }
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="text-muted">${getCategoryName(product.category)}</p>
          <p class="card-text">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="h5 mb-0">$${product.price.toLocaleString()}</span>
            <button class="btn btn-sm btn-outline-primary view-details" data-id="${
              product.id
            }">Ver detalles</button>
          </div>
        </div>
      </div>
    `;
    productsContainer.appendChild(productCard);
  });

  setupDetailButtons();
}

// Función para configurar botones de ver detalles
function setupDetailButtons() {
  document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.dataset.id);
      showProductDetails(productId);
    });
  });
}

// Función para mostrar detalles del producto
function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  const existingModal = document.getElementById("productModal");
  if (existingModal) {
    existingModal.remove();
  }

 const modalHTML = `
  <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${product.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <img src="${product.images[0]}" class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
              <h4 class="text-primary">$${product.price.toLocaleString()}</h4>
              <p class="text-muted">${getCategoryName(product.category)}</p>
              <p>${product.description}</p>

              <div class="product-details mt-4">
                <h5>Detalles del Producto</h5>
                <ul class="list-unstyled">
                  <li><strong>Medidas:</strong> ${product.details.medidas}</li>
                  <li><strong>Material:</strong> ${product.details.material}</li>
                  <li><strong>Técnica:</strong> ${product.details.tecnica}</li>
                  <li><strong>Origen:</strong> ${product.details.origen}</li>
                </ul>
              </div>

              <div class="d-flex align-items-center gap-2 mb-2">
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidadProducto(${product.id}, -1)">-</button>
                <input type="number" id="cantidad-${product.id}" value="1" min="1" max="99" style="width: 60px; text-align: center;" />
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidadProducto(${product.id}, 1)">+</button>
              </div>

              <button class="btn btn-sm btn-primary" onclick="agregarAlCarritoConCantidad(${product.id}, '${product.name}', ${product.price})">
                <i class="fas fa-cart-plus"></i> Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;


  document.body.insertAdjacentHTML("beforeend", modalHTML);
  const modalElement = document.getElementById("productModal");

  modalElement.addEventListener("hidden.bs.modal", function () {
    this.remove();
  });

  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

// Función para filtrar productos por categoría
function filterProducts(category) {
  if (category === "todos") {
    renderProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    renderProducts(filteredProducts);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);

  const setupCategoryButton = (btnId, category) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => {
        filterProducts(category);
        const navLink = document.querySelector(
          `#products-page .nav-link[href="#${category}"]`
        );
        if (navLink) {
          document
            .querySelectorAll("#products-page .nav-link")
            .forEach((link) => link.classList.remove("active"));
          navLink.classList.add("active");
        }
        document
          .querySelector("#products-page")
          .scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  setupCategoryButton("btn-todos", "todos");
  setupCategoryButton("btn-madera", "madera");
  setupCategoryButton("btn-textiles", "textiles");
  setupCategoryButton("btn-ceramica", "ceramica");

  document.querySelectorAll("#products-page .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.getAttribute("href").substring(1);
      filterProducts(category);
      document
        .querySelectorAll("#products-page .nav-link")
        .forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.querySelectorAll(".category-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.dataset.category;
      filterProducts(category);
      const navLink = document.querySelector(
        `#products-page .nav-link[href="#${category}"]`
      );
      if (navLink) {
        document
          .querySelectorAll("#products-page .nav-link")
          .forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
      document
        .querySelector("#products-page")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
