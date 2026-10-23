# Apoio ao Empreendedorismo — Inatel Startups (Guia de Implementação)

Este módulo contém a seção **Apoio ao Empreendedorismo (Ideação, Pré-Incubação e Incubação)** do Inatel Startups, desenvolvida com **layout expansível inline (in-place drawer)**.

> **Por que este layout resolve os problemas anteriores:** Em vez de abrir pop-ups modais que entravam atrás dos cabeçalhos fixos do site, ao clicar em qualquer card os detalhes se expandem suavemente **dentro da própria seção**. O script avisa a página mãe via `postMessage` para aumentar a altura do frame em tempo real, sem jamais colidir com os menus fixos.

---

## 🔗 Links Oficiais do Projeto

- **URL do Frame (GitHub Pages):** [https://inatelstartups.github.io/programas-startups/](https://inatelstartups.github.io/programas-startups/)
- **Repositório GitHub:** [https://github.com/inatelstartups/programas-startups](https://github.com/inatelstartups/programas-startups)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local onde a seção deve ser exibida:

```html
<!-- APOIO AO EMPREENDEDORISMO — INATEL STARTUPS -->
<div id="inatel-programas-embed-wrapper" style="width: 100%; overflow: hidden;">
    <iframe
        id="inatel-programas-iframe"
        src="https://inatelstartups.github.io/programas-startups/"
        title="Apoio ao Empreendedorismo - Inatel Startups"
        style="width: 100%; min-height: 520px; border: none; display: block; background: transparent;"
        scrolling="no"
        loading="lazy"
        allowtransparency="true"
    ></iframe>
</div>

<script>
    // Ajusta automaticamente a altura do frame em tempo real
    window.addEventListener('message', function (event) {
        if (event.data && event.data.type === 'inatel-programas-resize' && event.data.height) {
            var iframe = document.getElementById('inatel-programas-iframe');
            if (iframe) {
                iframe.style.height = event.data.height + 'px';
            }
        }
    });
</script>
```

---

## 🧩 Opção 2: Integração Direta no Código-Fonte

Caso prefira incorporar diretamente no código da página sem `<iframe>`:
1. **HTML:** Copie a `<section id="jornada" class="section">...</section>` do arquivo `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **JS:** Inclua o script `programas.js` antes do fechamento do `</body>`.
