# Apoio ao Empreendedorismo — Inatel Startups (Guia do Programador)

Este módulo contém a seção **Apoio ao Empreendedorismo (Ideação, Pré-Incubação e Incubação)** do Inatel Startups, com pop-up modal projetado especificamente para **funcionar em harmonia com os menus e cabeçalhos fixos institucionais do Inatel**.

> **Compatibilidade com o Menu Fixo:** O pop-up modal foi ajustado com posicionamento superior seguro (`padding-top: 155px`), abrindo **estritamente abaixo dos menus fixos do topo da página (~140px)**. Isso garante que o título do pop-up e o botão de fechar (`&times;`) fiquem 100% visíveis, sem jamais ficarem escondidos sob os cabeçalhos.

---

## 🔗 Links Oficiais

- **URL do Frame (GitHub Pages):** [https://inatelstartups.github.io/programas-startups/](https://inatelstartups.github.io/programas-startups/)
- **Repositório GitHub:** [https://github.com/inatelstartups/programas-startups](https://github.com/inatelstartups/programas-startups)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local onde a faixa deve aparecer:

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
    window.addEventListener('message', function (event) {
        if (!event.data) return;
        var iframe = document.getElementById('inatel-programas-iframe');
        if (!iframe) return;

        if (event.data.type === 'inatel-programas-resize' && event.data.height) {
            iframe.style.height = event.data.height + 'px';
        }
        if (event.data.type === 'inatel-programas-modal-opened') {
            iframe.style.height = Math.max(820, event.data.height || 820) + 'px';
        }
        if (event.data.type === 'inatel-programas-modal-closed') {
            iframe.style.height = '520px';
        }
    });
</script>
```

---

## 🧩 Opção 2: Inclusão Direta no Código-Fonte

Caso prefira colar o código diretamente no tema/página:
1. **HTML:** Copie a `<section id="jornada" class="section">...</section>` e o `<div id="track-modal" class="modal-overlay">...</div>` do arquivo `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **JS:** Adicione `programas.js` antes do fechamento da tag `</body>`.
