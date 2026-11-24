/* ==========================================================================
   Júlia Gabriely · Fisioterapeuta — interações da página
   Menu, links do WhatsApp, perguntas frequentes, revelar ao rolar e o botão da
   prévia que esconde os marcadores. O formulário antes do WhatsApp fica em lead-form.js,
   os eventos em eventos.js e o aviso de cookies em consent.js.
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
        atendimentos: "Olá, Dra. Júlia! Vim pelo site e quero saber mais sobre os atendimentos em casa.",
        celebrar: "Olá, Dra. Júlia! Vim pelo site e quero conhecer o atendimento em casa.",
        para_quem: "Olá, Dra. Júlia! Vim pelo site e quero conversar sobre a fisioterapia em casa para um familiar.",
        cuidados: "Olá, Dra. Júlia! Vim pelo site e tenho uma dúvida sobre o tratamento."
    };
    const linkWhats = origem => {
        const texto = encodeURIComponent(mensagens[origem] || base);
        return numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`;
    };
    // O formulário (lead-form.js) usa o mesmo número e as mesmas mensagens por origem.
    window.jgWhats = { numero, mensagem: origem => mensagens[origem] || base };
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


    /* ---------- No dia a dia: vídeos (sem som, em repetição) e fotos ampliadas ----------
       O vídeo só toca quando a pessoa toca no botão; um vídeo por vez. As fotos abrem em um <dialog> nativo
       (Esc fecha, setas e deslize trocam de foto). */
    const cartoesVideo = [...document.querySelectorAll(".video-cartao")];
    const pararVideos = menos => cartoesVideo.forEach(c => { if (c !== menos) { c.querySelector("video").pause(); c.classList.remove("tocando"); } });
    cartoesVideo.forEach(c => {
        const v = c.querySelector("video"), b = c.querySelector(".video-botao");
        const alternarVideo = () => {
            if (v.paused) { pararVideos(c); v.play().then(() => { c.classList.add("tocando"); b.setAttribute("aria-label", b.getAttribute("aria-label").replace("Reproduzir", "Pausar")); }).catch(() => {}); }
            else { v.pause(); c.classList.remove("tocando"); b.setAttribute("aria-label", b.getAttribute("aria-label").replace("Pausar", "Reproduzir")); }
        };
        b.addEventListener("click", alternarVideo);
        v.addEventListener("click", alternarVideo);
    });
    if ("IntersectionObserver" in window) {
        const obsV = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) { const v = en.target.querySelector("video"); v.pause(); en.target.classList.remove("tocando"); } }), { threshold: .2 });
        cartoesVideo.forEach(c => obsV.observe(c));
    }
    const fotosItens = [...document.querySelectorAll(".foto-item")];
    if (fotosItens.length && typeof HTMLDialogElement === "function") {
        const dlg = document.createElement("dialog");
        dlg.className = "foto-ampliada"; dlg.setAttribute("aria-label", "Foto ampliada");
        dlg.innerHTML = '<button type="button" class="foto-fechar" aria-label="Fechar foto">&times;</button>' +
            '<button type="button" class="foto-seta foto-ant" aria-label="Foto anterior">&#8249;</button>' +
            '<figure><img alt=""><figcaption></figcaption></figure>' +
            '<button type="button" class="foto-seta foto-prox" aria-label="Próxima foto">&#8250;</button>';
        document.body.appendChild(dlg);
        const img = dlg.querySelector("img"), leg = dlg.querySelector("figcaption");
        let atual = 0, origem = null;
        const mostrar = i => {
            atual = (i + fotosItens.length) % fotosItens.length;
            const f = fotosItens[atual], im = f.querySelector("img");
            img.src = im.currentSrc || im.src; img.alt = im.alt;
            leg.textContent = (f.dataset.legenda || "") + "  ·  " + (atual + 1) + " de " + fotosItens.length;
        };
        const fechar = () => { if (dlg.open) dlg.close(); };
        fotosItens.forEach((f, i) => f.addEventListener("click", () => { origem = f; mostrar(i); dlg.showModal(); document.documentElement.classList.add("foto-aberta"); }));
        dlg.addEventListener("close", () => { document.documentElement.classList.remove("foto-aberta"); origem?.focus({ preventScroll: true }); });
        dlg.querySelector(".foto-fechar").addEventListener("click", fechar);
        dlg.querySelector(".foto-ant").addEventListener("click", () => mostrar(atual - 1));
        dlg.querySelector(".foto-prox").addEventListener("click", () => mostrar(atual + 1));
        dlg.addEventListener("click", e => { if (e.target === dlg || e.target.tagName === "FIGURE") fechar(); });
        dlg.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft") { e.preventDefault(); mostrar(atual - 1); }
            if (e.key === "ArrowRight") { e.preventDefault(); mostrar(atual + 1); }
        });
        let x0 = null;
        dlg.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
        dlg.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 60) mostrar(atual + (dx < 0 ? 1 : -1)); }, { passive: true });
    }


    /* ---------- Topo: o título aparece palavra por palavra e depois o resto da dobra ----------
       Cada palavra do título (data-palavras) vira um <span class="palavra"> com atraso próprio (--k).
       A classe .pronto na seção dispara a entrada de tudo (o CSS cuida do movimento). */
    const hero = document.querySelector(".hero");
    const titulo = document.querySelector("[data-palavras]");
    if (titulo && !reduzMovimento) {
        let k = 0;
        const quebrar = no => [...no.childNodes].forEach(filho => {
            if (filho.nodeType === 3) {
                const frag = document.createDocumentFragment();
                filho.textContent.split(/(\s+)/).forEach(parte => {
                    if (!parte.trim()) { frag.appendChild(document.createTextNode(parte)); return; }
                    const sp = document.createElement("span"); sp.className = "palavra"; sp.style.setProperty("--k", k++); sp.textContent = parte; frag.appendChild(sp);
                });
                no.replaceChild(frag, filho);
            } else if (filho.nodeType === 1) quebrar(filho);
        });
        quebrar(titulo);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => hero && hero.classList.add("pronto")));

    /* ---------- Barra de progresso da leitura ---------- */
    const barra = document.querySelector(".progresso");
    if (barra) {
        const atualizarBarra = () => {
            const alto = document.documentElement.scrollHeight - window.innerHeight;
            barra.style.setProperty("--p", alto > 0 ? Math.min(1, window.scrollY / alto).toFixed(4) : 0);
        };
        window.addEventListener("scroll", atualizarBarra, { passive: true });
        window.addEventListener("resize", atualizarBarra);
        atualizarBarra();
    }

    /* ---------- Como funciona: a linha enche conforme a pessoa rola e o passo no meio da tela "acende" ---------- */
    const listaPassos = document.querySelector(".passos");
    if (listaPassos) {
        const passos = [...listaPassos.querySelectorAll(".passo")];
        const quadro = () => {
            const r = listaPassos.getBoundingClientRect();
            const alvo = window.innerHeight * 0.55;
            const p = Math.max(0, Math.min(1, (alvo - r.top) / r.height));
            listaPassos.style.setProperty("--prog", p.toFixed(3));
            passos.forEach(pa => { const b = pa.getBoundingClientRect(); pa.classList.toggle("em-foco", b.top < alvo && b.bottom > alvo - 40 || b.bottom < alvo); });
        };
        window.addEventListener("scroll", quadro, { passive: true });
        window.addEventListener("resize", quadro);
        quadro();
    }

    /* ---------- Em números: o valor conta de zero até o final quando a seção entra na tela ----------
       O número final já está escrito no HTML (vale para quem reduz animações ou está sem JavaScript). */
    const contadores = document.querySelectorAll("[data-contar]");
    if (contadores.length && !reduzMovimento && "IntersectionObserver" in window) {
        const formatar = (valor, casas, sufixo) => valor.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas }) + (sufixo || "");
        const contar = el => {
            const alvo = parseFloat(el.dataset.contar), casas = parseInt(el.dataset.casas || "0", 10), sufixo = el.dataset.sufixo || "";
            const inicio = performance.now(), duracao = 1500;
            const quadro = agora => {
                const t = Math.min(1, (agora - inicio) / duracao);
                el.textContent = formatar(alvo * (1 - Math.pow(1 - t, 3)), casas, sufixo);
                if (t < 1) requestAnimationFrame(quadro);
            };
            requestAnimationFrame(quadro);
        };
        const obsContar = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { contar(en.target); obsContar.unobserve(en.target); } }), { threshold: .6 });
        contadores.forEach(el => obsContar.observe(el));
    }

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
