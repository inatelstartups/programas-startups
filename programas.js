/* ======================================================================
   INATEL STARTUPS — PROGRAMAS (APOIO AO EMPREENDEDORISMO)
   Lógica do Modal Pop-up Compatível com Menus Fixos
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Detecta se está sendo executado dentro de um <iframe>
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
        document.body.classList.add('in-iframe');
    }

    // Dados completos das 3 trilhas de empreendedorismo
    const trackData = {
        ideacao: {
            title: "Ideação",
            badge: "Estágio Inicial",
            subtitle: "Valide seu problema, estruture uma proposta de valor clara e defina o modelo de negócios da sua startup com apoio de especialistas e mentores.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Ideação",
            items: [
                {
                    title: "Comunidade ativa",
                    description: "Faça parte da comunidade do Inatel Startups, com acesso direto a empreendedores, mentores, investidores, parceiros e clientes.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Método próprio de validação",
                    description: "Aplique nossa metodologia prática para validação de problemas reais e estruturação de propostas de valor consistentes.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
                },
                {
                    title: "Infraestrutura física e digital",
                    description: "Utilize nosso coworking, salas de reunião, Laboratório de Ideação, além de toda a infraestrutura compartilhada do Hub Fígital.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
                },
                {
                    title: "Trilhas de conhecimento",
                    description: "Tenha acesso a trilhas de conteúdos selecionados para acelerar a validação comercial de soluções em estágio embrionário.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
                }
            ]
        },
        preincubacao: {
            title: "Pré-Incubação",
            badge: "Prototipagem & Validação",
            subtitle: "É hora de prototipar, construir seu MVP e modelar o seu negócio com validação direta de mercado e feedbacks de clientes.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Pré-Incubação",
            items: [
                {
                    title: "Comunidade e networking",
                    description: "Conexões contínuas com founders, mentores seniores, investidores de risco e parceiros estratégicos do ecossistema.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Benefícios de nuvem e ferramentas",
                    description: "Créditos e descontos expressivos em servidores em nuvem (AWS, Google Cloud, Azure) e softwares corporativos essenciais.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
                },
                {
                    title: "Infraestrutura Maker de ponta",
                    description: "Acesso ao FabLab (padrão oficial MIT), equipamentos de fabricação digital e laboratórios avançados de telecomunicações.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`
                },
                {
                    title: "Mentoria de MVP e tração",
                    description: "Acompanhamento hands-on de especialistas para desenvolvimento ágil de protótipos funcionais e primeiros testes de mercado.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
                }
            ]
        },
        incubacao: {
            title: "Incubação",
            badge: "Escala & Mercado",
            subtitle: "Estruture processos comerciais previsíveis, otimize a gestão do negócio e prepare-se para rodadas qualificadas de investimento.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Incubação",
            items: [
                {
                    title: "Comunidade e ecossistema",
                    description: "Rede ativa com empreendedores graduados, fundos de venture capital, anjos e empresas corporativas em busca de inovação.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Benefícios corporativos",
                    description: "Parcerias exclusivas com provedores de nuvem, ferramentas de CRM, meios de pagamento e assessoria jurídica parceira.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
                },
                {
                    title: "Infraestrutura integral",
                    description: "Estações de trabalho exclusivas, auditórios, estúdio de podcast Inatalks, FabLab e suporte computacional de alto desempenho.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
                },
                {
                    title: "Acompanhamento e governança",
                    description: "Planejamento estratégico, métricas de crescimento (KPIs/OKRs), estruturação societária e preparação para rodadas de captação.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
                },
                {
                    title: "Captação de fomento e investimentos",
                    description: "Orientação na submissão de editais FINEP, FAPEMIG e CNPq, e aproximação qualificada com investidores anjo e VC.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
                }
            ]
        }
    };

    // Elementos DOM do Modal
    const modalOverlay = document.getElementById('track-modal');
    const modalContent = modalOverlay ? modalOverlay.querySelector('.modal-content') : null;
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalItems = document.getElementById('modal-items');
    const modalLink = document.getElementById('modal-link');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Cards clicáveis
    const cards = document.querySelectorAll('.programa-card');

    // Comunicação com página hospedeira (Auto-resize)
    function notifyParentResize() {
        if (!isInIframe) return;
        try {
            const height = document.documentElement.scrollHeight || document.body.scrollHeight;
            window.parent.postMessage({
                type: 'inatel-programas-resize',
                height: height
            }, '*');
        } catch (e) {}
    }

    // Abre o pop-up com os dados da trilha selecionada
    function openModal(trackKey) {
        const data = trackData[trackKey];
        if (!data || !modalOverlay) return;

        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalLink.href = data.link;

        // Renderiza itens
        modalItems.innerHTML = data.items.map(item => `
            <div class="modal-list-item">
                <div class="modal-item-icon">${item.icon}</div>
                <div class="modal-item-text">
                    <strong>${item.title}</strong>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        // Exibe modal
        modalOverlay.classList.add('open');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = isInIframe ? '' : 'hidden'; // Evita scroll do body se não for iframe

        // Se estiver em iframe, avisa a página mãe para acomodar o modal
        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-programas-modal-opened',
                height: 820
            }, '*');
        }
    }

    // Fecha o modal
    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('open');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-programas-modal-closed'
            }, '*');
            notifyParentResize();
        }
    }

    // Listeners nos cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const trackKey = card.getAttribute('data-track');
            openModal(trackKey);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const trackKey = card.getAttribute('data-track');
                openModal(trackKey);
            }
        });
    });

    // Fechar pelo botão X
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Fechar ao clicar no backdrop (fora da caixa de conteúdo)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
            closeModal();
        }
    });

    // Observer para redimensionamento em tempo real
    const resizeObserver = new ResizeObserver(() => {
        notifyParentResize();
    });
    resizeObserver.observe(document.body);
    window.addEventListener('resize', notifyParentResize);

    notifyParentResize();
});
