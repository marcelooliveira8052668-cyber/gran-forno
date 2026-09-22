/* ============================================================
   GRAN FORNO — JAVASCRIPT
   Galeria de 50 fotos, modal de ingredientes, pedidos e menu mobile.
   ============================================================ */

/* Guarda o número do WhatsApp do restaurante. */
const whatsappNumber = "5511920676006";

/* Guarda a mensagem padrão do pedido. */
const defaultMessage = "Olá Gran Forno! Gostaria de fazer um pedido.";

/* Localiza o elemento que mostra o ano no rodapé. */
const yearElement = document.getElementById("year");

/* Coloca automaticamente o ano atual no rodapé. */
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* Localiza o botão do menu mobile. */
const menuButton = document.getElementById("menuButton");

/* Localiza o menu mobile. */
const nav = document.getElementById("nav");

/* Abre e fecha o menu quando o botão é clicado. */
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  /* Fecha o menu depois que o visitante escolhe uma seção. */
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* Cria a mensagem do WhatsApp para um produto. */
function createWhatsAppLink(itemName) {
  const message = `Olá Gran Forno! Gostaria de pedir: ${itemName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* Liga todos os botões "Pedir" do cardápio ao WhatsApp. */
document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.dataset.item || "um produto do cardápio";
    window.open(createWhatsAppLink(item), "_blank", "noopener,noreferrer");
  });
});

/* Lista das 50 fotos da galeria. */
const galleryItems = [
  { name: "Foto 01", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-01.jpg" },
  { name: "Foto 02", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-02.jpg" },
  { name: "Foto 03", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-03.jpg" },
  { name: "Foto 04", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-04.jpg" },
  { name: "Foto 05", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-05.jpg" },
  { name: "Foto 06", category: "PADARIA", description: "Espaço reservado para uma foto do produto ou estabelecimento.", ingredients: "Preencha os ingredientes reais deste item.", image: "images/galeria-06.jpg" },
  { name: "Foto 07", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-07.jpg" },
  { name: "Foto 08", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-08.jpg" },
  { name: "Foto 09", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-09.jpg" },
  { name: "Foto 10", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-10.jpg" },
  { name: "Foto 11", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-11.jpg" },
  { name: "Foto 12", category: "LANCHES", description: "Espaço reservado para uma foto do lanche.", ingredients: "Preencha os ingredientes reais deste lanche.", image: "images/galeria-12.jpg" },
  { name: "Foto 13", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-13.jpg" },
  { name: "Foto 14", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-14.jpg" },
  { name: "Foto 15", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-15.jpg" },
  { name: "Foto 16", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-16.jpg" },
  { name: "Foto 17", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-17.jpg" },
  { name: "Foto 18", category: "PIZZAS", description: "Espaço reservado para uma foto de pizza.", ingredients: "Preencha os ingredientes reais desta pizza.", image: "images/galeria-18.jpg" },
  { name: "Foto 19", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-19.jpg" },
  { name: "Foto 20", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-20.jpg" },
  { name: "Foto 21", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-21.jpg" },
  { name: "Foto 22", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-22.jpg" },
  { name: "Foto 23", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-23.jpg" },
  { name: "Foto 24", category: "DOCES", description: "Espaço reservado para uma foto de doce.", ingredients: "Preencha os ingredientes reais deste doce.", image: "images/galeria-24.jpg" },
  { name: "Foto 25", category: "CAFÉ", description: "Espaço reservado para uma foto de café ou bebida.", ingredients: "Preencha os ingredientes reais desta bebida.", image: "images/galeria-25.jpg" },
  { name: "Foto 26", category: "CAFÉ", description: "Espaço reservado para uma foto de café ou bebida.", ingredients: "Preencha os ingredientes reais desta bebida.", image: "images/galeria-26.jpg" },
  { name: "Foto 27", category: "CAFÉ", description: "Espaço reservado para uma foto de café ou bebida.", ingredients: "Preencha os ingredientes reais desta bebida.", image: "images/galeria-27.jpg" },
  { name: "Foto 28", category: "CAFÉ", description: "Espaço reservado para uma foto de café ou bebida.", ingredients: "Preencha os ingredientes reais desta bebida.", image: "images/galeria-28.jpg" },
  { name: "Foto 29", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-29.jpg" },
  { name: "Foto 30", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-30.jpg" },
  { name: "Foto 31", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-31.jpg" },
  { name: "Foto 32", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-32.jpg" },
  { name: "Foto 33", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-33.jpg" },
  { name: "Foto 34", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-34.jpg" },
  { name: "Foto 35", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-35.jpg" },
  { name: "Foto 36", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-36.jpg" },
  { name: "Foto 37", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-37.jpg" },
  { name: "Foto 38", category: "ESTABELECIMENTO", description: "Espaço reservado para uma foto do ambiente.", ingredients: "Não se aplica.", image: "images/galeria-38.jpg" },
  { name: "Foto 39", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-39.jpg" },
  { name: "Foto 40", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-40.jpg" },
  { name: "Foto 41", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-41.jpg" },
  { name: "Foto 42", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-42.jpg" },
  { name: "Foto 43", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-43.jpg" },
  { name: "Foto 44", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-44.jpg" },
  { name: "Foto 45", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-45.jpg" },
  { name: "Foto 46", category: "PRODUÇÃO", description: "Espaço reservado para mostrar a produção.", ingredients: "Não se aplica.", image: "images/galeria-46.jpg" },
  { name: "Foto 47", category: "OUTROS", description: "Espaço reservado para uma foto especial.", ingredients: "Preencha os dados reais se for um produto.", image: "images/galeria-47.jpg" },
  { name: "Foto 48", category: "OUTROS", description: "Espaço reservado para uma foto especial.", ingredients: "Preencha os dados reais se for um produto.", image: "images/galeria-48.jpg" },
  { name: "Foto 49", category: "OUTROS", description: "Espaço reservado para uma foto especial.", ingredients: "Preencha os dados reais se for um produto.", image: "images/galeria-49.jpg" },
  { name: "Foto 50", category: "OUTROS", description: "Espaço reservado para uma foto especial.", ingredients: "Preencha os dados reais se for um produto.", image: "images/galeria-50.jpg" }
];

/* Localiza a grade de 50 fotos. */
const galleryGrid = document.getElementById("galleryGrid");

/* Localiza o modal. */
const galleryModal = document.getElementById("galleryModal");

/* Localiza o espaço da foto ampliada. */
const modalPhoto = document.getElementById("modalPhoto");

/* Localiza o título do modal. */
const modalTitle = document.getElementById("modalTitle");

/* Localiza a categoria do modal. */
const modalTag = document.getElementById("modalTag");

/* Localiza a descrição do modal. */
const modalDescription = document.getElementById("modalDescription");

/* Localiza os ingredientes do modal. */
const modalIngredients = document.getElementById("modalIngredients");

/* Localiza o botão de pedido do modal. */
const modalOrder = document.getElementById("modalOrder");

/* Localiza o botão de fechar. */
const modalClose = document.getElementById("modalClose");

/* Cria visualmente as 50 fotos. */
galleryItems.forEach((item, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "gallery-item";
  card.style.backgroundImage = `url("${item.image}")`;
  card.setAttribute("aria-label", `Abrir ${item.name}`);

  card.innerHTML = `
    <span class="gallery-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="gallery-label">${item.name}</span>
    <span class="gallery-category">${item.category}</span>
  `;

  card.addEventListener("click", () => openGalleryItem(item));
  galleryGrid.appendChild(card);
});

/* Abre o modal com os dados da foto selecionada. */
function openGalleryItem(item) {
  modalTag.textContent = item.category;
  modalTitle.textContent = item.name;
  modalDescription.textContent = item.description;
  modalIngredients.textContent = item.ingredients;
  modalPhoto.style.backgroundImage = `url("${item.image}")`;
  modalOrder.href = createWhatsAppLink(item.name);
  galleryModal.classList.add("show");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

/* Fecha o modal. */
function closeGalleryModal() {
  galleryModal.classList.remove("show");
  galleryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

/* Fecha pelo botão X. */
modalClose.addEventListener("click", closeGalleryModal);

/* Fecha clicando no fundo escuro. */
galleryModal.querySelector("[data-close-modal]").addEventListener("click", closeGalleryModal);

/* Fecha o modal apertando ESC. */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGalleryModal();
  }
});

/* ============================================================
   VÍDEOS
   ============================================================ */

/* Localiza todos os players de vídeo. */
document.querySelectorAll(".video-card video").forEach((video) => {
  /* Esconde o placeholder quando o vídeo realmente carregar. */
  video.addEventListener("loadeddata", () => {
    const placeholder = video.parentElement.querySelector(".video-placeholder");
    if (placeholder) {
      placeholder.style.display = "none";
    }
  });
});
