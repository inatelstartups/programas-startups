/* ======================================================================
   INATEL STARTUPS — PROGRAMAS (APOIO AO EMPREENDEDORISMO)
   Lógica do Painel Expansível Inline e Auto-Resize via postMessage
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const trackData = {
        ideacao: {
            title: "Ideação",
            stage: "Estágio Inicial",
            subtitle: "Valide seu problema, estruture uma proposta de valor clara e defina o modelo de negócios da sua startup com o apoio de nossa equipe e time de mentores.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Ideação",
            items: [
                {
                    title: "Comunidade ativa",
                    description: "Faça parte da comunidade do Inatel Startups, com acesso direto a empreendedores, mentores, investidores, parceiros e clientes.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Método próprio",
                    description: "Aplique nosso método de validação de problema e criação de proposta de valor, testado e lapidado com centenas de startups.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
                },
                {
                    title: "Infraestrutura física e digital",
                    description: "Utilize nosso coworking, salas modulares, Laboratório de Ideação, além de toda a infraestrutura compartilhada do Inatel.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
                },
                {
                    title: "Trilhas de conteúdos",
                    description: "Tenha acesso a trilhas de conhecimento exclusivas, construídas para atender startups em estágio inicial de maturidade comercial.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
                }
            ]
        },
        preincubacao: {
            title: "Pré-Incubação",
            stage: "Prototipagem & Validação",
            subtitle: "É hora de prototipar, definir, construir o MVP e modelar o seu negócio com tração direta de mercado.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Pré-Incubação",
            items: [
                {
                    title: "Comunidade",
                    description: "Faça parte da comunidade do Inatel Startups, com acesso a empreendedores, mentores, investidores, parceiros e clientes.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Benefícios de nuvem e ferramentas",
                    description: "Receba benefícios exclusivos de parceiros globais para utilização de serviços de nuvem e soluções corporativas com custos reduzidos.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
                },
                {
                    title: "Infraestrutura avançada",
                    description: "Utilize nosso coworking, FabLab (padrão MIT) e equipamentos de P&D avançados, além da infraestrutura compartilhada do Hub.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`
                },
                {
                    title: "Acompanhamento especializado",
                    description: "Receba mentoria focada para desenvolvimento do seu MVP (Produto Mínimo Viável), teste de mercado e modelagem de negócios.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
                }
            ]
        },
        incubacao: {
            title: "Incubação",
            stage: "Escala & Mercado",
            subtitle: "Estruture seu negócio, desde as primeiras vendas até a escala de mercado, governança e captação de investimento.",
            link: "https://airtable.com/appMBITuDbmvqHb66/shr8gDPju26PFirSf",
            ctaText: "Inscreva-se na Incubação",
            items: [
                {
                    title: "Comunidade",
                    description: "Faça parte da comunidade do Inatel Startups, com acesso a empreendedores, mentores, investidores, parceiros e clientes.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
                },
                {
                    title: "Benefícios corporativos",
                    description: "Receba benefícios de parceiros para utilização de serviços de nuvem e soluções corporativas com créditos e custos reduzidos.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
                },
                {
                    title: "Infraestrutura completa",
                    description: "Utilize nosso coworking, salas de reuniões, Laboratório de Ideação, FabLab e equipamentos avançados de telecom e hardware.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
                },
                {
                    title: "Acompanhamento e governança",
                    description: "Acompanhamento especializado para estruturação da startup, utilizando técnicas tradicionais e ágeis de gestão e governança corporativa.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
                },
                {
                    title: "Fundraising e conexões financeiras",
                    description: "Conecte-se com anjos, fundos de VC e receba assessoria para preparar sua startup para rodadas de investimento qualificadas.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
                },
                {
                    title: "Recursos de fomento",
                    description: "Identifique editais públicos e privados para captação de recursos de fomento (FINEP, FAPEMIG, CNPq) com apoio de especialistas.",
                    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
                }
            ]
        }
    };

    const drawer = document.getElementById('programas-drawer');
    const panelTitle = document.getElementById('panel-title');
    const panelStage = document.getElementById('panel-stage');
    const panelSubtitle = document.getElementById('panel-subtitle');
    const panelBenefitsGrid = document.getElementById('panel-benefits-grid');
    const panelCtaBtn = document.getElementById('panel-cta-btn');
    const panelCloseBtn = document.getElementById('panel-close-btn');
    const cards = document.querySelectorAll('.programa-card');

    let currentTrack = null;

    function renderTrack(trackKey) {
        const data = trackData[trackKey];
        if (!data) return;

        panelTitle.textContent = data.title;
        panelStage.textContent = data.stage;
        panelSubtitle.textContent = data.subtitle;
        panelCtaBtn.href = data.link;
        panelCtaBtn.querySelector('span').textContent = data.ctaText;

        panelBenefitsGrid.innerHTML = '';
        data.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'benefit-card';
            card.innerHTML = `
                <div class="benefit-icon-box">${item.icon}</div>
                <div class="benefit-content">
                    <span class="benefit-title">${item.title}</span>
                    <p class="benefit-desc">${item.description}</p>
                </div>
            `;
            panelBenefitsGrid.appendChild(card);
        });
    }

    function openDrawer(trackKey) {
        cards.forEach(c => {
            if (c.getAttribute('data-track') === trackKey) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });

        renderTrack(trackKey);
        currentTrack = trackKey;
        drawer.classList.add('open');

        // Notifica o pai sobre nova altura
        setTimeout(notifyParentHeight, 50);
        setTimeout(notifyParentHeight, 400);
    }

    function closeDrawer() {
        cards.forEach(c => c.classList.remove('active'));
        drawer.classList.remove('open');
        currentTrack = null;

        setTimeout(notifyParentHeight, 50);
        setTimeout(notifyParentHeight, 400);
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const trackKey = card.getAttribute('data-track');
            if (currentTrack === trackKey && drawer.classList.contains('open')) {
                closeDrawer();
            } else {
                openDrawer(trackKey);
            }
        });
    });

    if (panelCloseBtn) {
        panelCloseBtn.addEventListener('click', closeDrawer);
    }

    // ================= NOTIFICAÇÃO DE AUTO-RESIZE VIA POSTMESSAGE =================
    function notifyParentHeight() {
        if (window.parent && window.parent !== window) {
            const sectionEl = document.getElementById('jornada') || document.body;
            const height = Math.ceil(sectionEl.getBoundingClientRect().height);
            window.parent.postMessage({ type: 'inatel-programas-resize', height: height }, '*');
        }
    }

    if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(() => notifyParentHeight());
        ro.observe(document.body);
    }

    window.addEventListener('load', notifyParentHeight);
    window.addEventListener('resize', notifyParentHeight);
    setTimeout(notifyParentHeight, 150);
});
