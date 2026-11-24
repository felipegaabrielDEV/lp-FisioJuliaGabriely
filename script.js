/* ==========================================================================
   Júlia Gabriely · Fisioterapeuta — interações da página
   Menu, links do WhatsApp, perguntas frequentes, revelar ao rolar e o botão da
   prévia que esconde os marcadores. Formulário antes do WhatsApp, origem por UTM,
   eventos e aviso de cookies entram na prévia 2 (engenharia da lp-nayane-moreno).
   ========================================================================== */
(function () {
    "use strict";
    document.documentElement.classList.add("js");
    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- WhatsApp ----------
       O número vem da meta tag "whatsapp-number" no <head>.
       Para mudar o texto de um botão, mexa em "mensagens" pela origem (data-wa-origin). */
    const numero = (document.querySelector('meta[name="whatsapp-number"]')?.content || "").replace(/\D/g, "");
    const base = "Olá, Dra. Júlia! Vim pelo site e quero agendar uma avaliação de fisioterapia em casa.";
    const mensagens = {
        plano: "Olá, Dra. Júlia! Vim pelo site e quero confirmar se o meu plano de saúde cobre a fisioterapia em casa.",
        particular: "Olá, Dra. Júlia! Vim pelo site e quero saber sobre o atendimento particular de fisioterapia em casa.",
        regiao: "Olá, Dra. Júlia! Vim pelo site e quero saber se você atende no meu bairro.",
        faq: "Olá, Dra. Júlia! Vim pelo site e tenho uma dúvida sobre a fisioterapia em casa.",
        cuidados: "Olá, Dra. Júlia! Vim pelo site e tenho uma dúvida sobre o tratamento."
    };
    const linkWhats = origem => {
        const texto = encodeURIComponent(mensagens[origem] || base);
        return numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`;
    };
    document.querySelectorAll("[data-wa]").forEach(el => {
        el.href = linkWhats(el.dataset.waOrigin);
        el.target = "_blank";
        el.rel = "noopener";
    });

    /* ---------- Menu ---------- */
    const topo = document.getElementById("topo");
    const botaoMenu = document.querySelector(".menu-botao");
    const menuMovel = document.getElementById("menu-movel");
    const abrirMenu = abrir => {
        botaoMenu.setAttribute("aria-expanded", String(abrir));
        botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
        menuMovel.hidden = !abrir;
        document.body.classList.toggle("menu-aberto", abrir);
    };
    botaoMenu.addEventListener("click", () => abrirMenu(menuMovel.hidden));
    menuMovel.addEventListener("click", e => { if (e.target.closest("a")) abrirMenu(false); });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !menuMovel.hidden) { abrirMenu(false); botaoMenu.focus(); }
    });
    const aoRolar = () => topo.classList.toggle("rolou", window.scrollY > 10);
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();

    // Destaca no menu a seção que está na tela.
    const linksMenu = [...document.querySelectorAll(".menu a")];
    if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver(entradas => {
            entradas.forEach(en => {
                if (!en.isIntersecting) return;
                linksMenu.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + en.target.id));
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        linksMenu.forEach(a => { const s = document.querySelector(a.getAttribute("href")); if (s) obs.observe(s); });
    }

    /* ---------- Perguntas frequentes: só uma aberta por vez ---------- */
    const botoesFaq = document.querySelectorAll(".faq-item button");
    botoesFaq.forEach(botao => {
        botao.addEventListener("click", () => {
            const abrir = botao.getAttribute("aria-expanded") !== "true";
            botoesFaq.forEach(outro => {
                outro.setAttribute("aria-expanded", "false");
                outro.closest(".faq-item").classList.remove("aberto");
            });
            botao.setAttribute("aria-expanded", String(abrir));
            botao.closest(".faq-item").classList.toggle("aberto", abrir);
        });
    });

    /* ---------- Revelar ao rolar ---------- */
    const revelar = document.querySelectorAll(".revelar");
    if (reduzMovimento || !("IntersectionObserver" in window)) {
        revelar.forEach(el => el.classList.add("visivel"));
    } else {
        const obs = new IntersectionObserver(entradas => {
            entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); } });
        }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
        revelar.forEach(el => obs.observe(el));
    }

    /* ---------- Prévia: mostrar/ocultar marcadores de rascunho e pendência ---------- */
    const alternar = document.querySelector(".previa-alternar");
    if (alternar) {
        alternar.addEventListener("click", () => {
            const ocultar = document.body.classList.toggle("sem-marcadores");
            alternar.setAttribute("aria-pressed", String(!ocultar));
            alternar.querySelector("span").textContent = ocultar ? "mostrar marcadores" : "ocultar marcadores";
        });
    }

    const ano = document.querySelector("[data-ano]");
    if (ano) ano.textContent = new Date().getFullYear();
})();
