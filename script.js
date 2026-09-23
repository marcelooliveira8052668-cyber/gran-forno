/* ============================================================
   GRAN PADARIA — JavaScript
   ------------------------------------------------------------
   COLOQUE AQUI seus links REAIS (é só o que precisa editar).

   WhatsApp: número com país + DDD (55 Brasil) e sem espaços.
   11 92067-6006  =>  5511920676006
   ============================================================ */

const CONFIG = {
    /* NÚMERO DO WHATSAPP (país + DDD + número, só dígitos) */
    whatsapp: "5511920676006",

    /* MENSAGEM inicial do WhatsApp */
    whatsappMessage:
        "Olá Gran Padaria! Gostaria de fazer um pedido.",

    /* LINK DO IFOOD (cole a URL inteira do seu restaurante) */
    ifood: "COLOQUE_AQUI_O_LINK_DO_IFOOD",

    /* LINK DO KEETA (cole a URL inteira do seu restaurante) */
    keeta: "COLOQUE_AQUI_O_LINK_DO_KEETA",

    /* LINK DO 99 (cole a URL inteira do seu restaurante) */
    n99: "COLOQUE_AQUI_O_LINK_DO_99",

    /* TEXTO do pedido criado a partir do cardápio.
       Você pode personalizar a mensagem inteira aqui. */
    pedidoMensagem:
        "Olá Gran Padaria! Gostaria de pedir: "
};

/* ------------------------------------------------------------
   NÃO PRECISA MEXER DAQUI PARA BAIXO
   ------------------------------------------------------------ */

/* Link do WhatsApp com a mensagem pronta */
const linkWhats = [
    "https://wa.me/", CONFIG.whatsapp,
    "?text=", encodeURIComponent(CONFIG.whatsappMessage)
].join("");

/* Mapa dos canais de pedido -> link real */
const ORDER_LINKS = {
    whatsapp: linkWhats,
    ifood: CONFIG.ifood,
    keeta: CONFIG.keeta,
    n99: CONFIG.n99
};

/* Aplica os links em todo elemento com [data-order] */
document.querySelectorAll("[data-order]").forEach(function (a) {
    const canal = a.getAttribute("data-order");
    if (ORDER_LINKS[canal]) {
        a.href = ORDER_LINKS[canal];
        a.target = "_blank";
        a.rel = "noopener";
    }
});

/* ------------------------------------------------------------
   CARDÁPIO: clicar num item abre o WhatsApp com o produto.
   O nome vem do atributo data-produto do card no index.html.
   ------------------------------------------------------------ */

document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
        const produto = item.getAttribute("data-produto") || "um produto";
        const mensagem = encodeURIComponent(
            CONFIG.pedidoMensagem + produto + "."
        );
        window.open(
            "https://wa.me/" + CONFIG.whatsapp + "?text=" + mensagem,
            "_blank",
            "noopener"
        );
    });
});

/* ------------------------------------------------------------
   MENU MOBILE (abre e fecha no celular)
   ------------------------------------------------------------ */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* ------------------------------------------------------------
   ANO AUTOMÁTICO NO RODAPÉ
   ------------------------------------------------------------ */

document.getElementById("year").textContent = new Date().getFullYear();