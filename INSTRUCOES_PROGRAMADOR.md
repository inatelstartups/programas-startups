# Apoio ao Empreendedorismo — Inatel Startups (Guia do Programador)

Este módulo contém a seção **Apoio ao Empreendedorismo (Ideação, Pré-Incubação e Incubação)** do Inatel Startups, exatamente idêntica à versão de produção no ar em `inatel.br/startups/plataforma-hubfigital`, mas com **solução definitiva para a sobreposição de cabeçalhos institucionais**.

---

## 🎯 Melhorias e Correções Implementadas

1. **Compatibilidade com o Menu Fixo Institucional:**
   - O pop-up modal abre com posicionamento superior de segurança (`padding-top: 155px` no desktop e `110px` no mobile).
   - O título do modal e o botão de fechar (`&times;`) ficam **estritamente abaixo dos menus fixos do topo (~140px)**, nunca mais ficando escondidos.
   - O modal possui `max-height: calc(100vh - 190px)` e barra de rolagem interna quando necessário.

2. **Barra Lateral de Rolagem (Scrollbar) Institucional:**
   - Estilizada em tom **azul cobalto oficial** (`#065dc4` com borda `#066ce2`), exatamente como na folha de estilos do portal Inatel.

3. **Textos, Botões e CTAs Verbatim da Produção:**
   - Subtítulo oficial: *"Nosso programa de incubação apoia todas as etapas de desenvolvimento de uma startup."*
   - Botão inferior oficial: `Inscreva-se ➔` direcionando ao Airtable oficial (`shr8gDPju26PFirSf`).
   - Cards com ação `Ver detalhes e benefícios ➔`.

---

## 🔗 Links Oficiais

- **URL do Frame Direto (GitHub Pages):** [https://inatelstartups.github.io/programas-startups/](https://inatelstartups.github.io/programas-startups/)
- **Repositório GitHub:** [https://github.com/inatelstartups/programas-startups](https://github.com/inatelstartups/programas-startups)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local exato onde o bloco deve aparecer:

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

        // Auto-redimensionamento dinâmico
        if (event.data.type === 'inatel-programas-resize' && event.data.height) {
            iframe.style.height = event.data.height + 'px';
        }
        // Expansão ao abrir o modal
        if (event.data.type === 'inatel-programas-modal-opened') {
            iframe.style.height = Math.max(850, event.data.height || 850) + 'px';
        }
        // Retorno da altura normal ao fechar
        if (event.data.type === 'inatel-programas-modal-closed') {
            iframe.style.height = '520px';
        }
    });
</script>
```

---

## 🧩 Opção 2: Inclusão Direta no Código-Fonte

Caso prefira mesclar diretamente nos arquivos do site:
1. **HTML:** Copie a tag `<main class="hub-main">` com a `<section id="jornada">` e o `<div id="track-modal">` de `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **JS:** Adicione `programas.js` antes do fechamento de `</body>`.
