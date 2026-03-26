/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BRONX ENGENHARIA — PREMIUM INTERACTIONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THEME TOGGLE (LIGHT/DARK MODE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.init();
    }

    init() {
        // Carrega tema salvo
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.body.classList.add('light-mode');
        }

        // Event listener
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.body.classList.toggle('light-mode');
        
        // Salva preferência
        if (this.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVBAR SCROLL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class NavbarScroll {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.scrollThreshold = 50;
        if (!this.navbar) return;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STATS COUNTER ANIMATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.duration = 2000;
        this.hasAnimated = false;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.animateStats();
                        this.hasAnimated = true;
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.stats.forEach(stat => observer.observe(stat));
    }

    animateStats() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / (this.duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INTERSECTION OBSERVER FOR FADE-IN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ScrollReveal {
    constructor() {
        this.elements = [
            '.sobre',
            '.servicos',
            '.projetos',
            '.diferenciais',
            '.depoimentos'
        ];
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100);
                    }
                });
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        this.elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.add('fade-in');
                observer.observe(element);
            }
        });

        // Animate children with delay
        this.animateChildren();
    }

    animateChildren() {
        const childrenSelectors = [
            '.servico-item',
            '.projeto-card',
            '.diferencial-item'
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.1 }
        );

        childrenSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(el);
            });
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SMOOTH SCROLL FOR ANCHOR LINKS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SERVICO HOVER EFFECTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ServicoHover {
    constructor() {
        this.items = document.querySelectorAll('.servico-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.resetItems();
                item.style.opacity = '1';
            });

            item.addEventListener('mouseleave', () => {
                this.resetItems();
            });
        });
    }

    resetItems() {
        this.items.forEach(item => {
            item.style.opacity = '1';
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROJETO CARD EFFECTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ProjetoCardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.projeto-card');
        this.init();
    }

    init() {
        this.cards.forEach((card, index) => {
            const video = card.querySelector('.projeto-video');
            
            // Adiciona efeito de vídeo se existir
            if (video) {
                console.log(`✓ Video found in card ${index + 1}`);
                
                card.addEventListener('mouseenter', () => {
                    console.log(`Playing video ${index + 1}`);
                    video.play().catch(err => console.log('Video play error:', err));
                });
                
                card.addEventListener('mouseleave', () => {
                    console.log(`Pausing video ${index + 1}`);
                    video.pause();
                    video.currentTime = 0;
                });
            }
            
            // Click handler
            card.addEventListener('click', () => {
                console.log('Projeto clicado:', card.querySelector('.projeto-title').textContent);
            });
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DEPOIMENTOS CAROUSEL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class DepoimentosCarousel {
    constructor() {
        this.textElement = document.querySelector('.depoimento-text');
        this.nameElement = document.querySelector('.author-name');
        this.companyElement = document.querySelector('.author-company');
        this.dots = document.querySelectorAll('.nav-dot');

        // Só inicializa se os elementos existirem na página
        if (!this.textElement || !this.nameElement || !this.companyElement) return;

        this.depoimentos = [
            {
                text: 'A Bronx Engenharia entregou nosso galpão logístico com segurança na execução e clareza em todas as etapas. A qualidade da construção e o comprometimento com prazos foram fundamentais para o sucesso do projeto.',
                author: 'João Silva',
                company: 'Diretor, Forte Logística'
            },
            {
                text: 'O profissionalismo da equipe Bronx se destacou do início ao fim. Tivemos transparência total no processo, gestão eficiente da obra e uma entrega que superou nossas expectativas técnicas.',
                author: 'Maria Santos',
                company: 'Proprietária, Industrial SC'
            },
            {
                text: 'Investir com a Bronx foi a decisão certa. A centralização de responsabilidades e a previsibilidade financeira nos deram segurança em cada etapa do projeto do nosso centro de distribuição.',
                author: 'Carlos Oliveira',
                company: 'Diretor Comercial, Logística Sul'
            }
        ];

        this.currentIndex = 0;
        this.autoPlayInterval = 6000;
        this.init();
    }

    init() {
        // Set up dot click handlers
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoPlay();
            });
        });

        // Start auto-play
        this.startAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateContent();
        this.updateDots();
    }

    updateContent() {
        const depoimento = this.depoimentos[this.currentIndex];
        
        // Fade out
        this.textElement.style.opacity = '0';
        this.nameElement.style.opacity = '0';
        this.companyElement.style.opacity = '0';
        
        setTimeout(() => {
            this.textElement.textContent = depoimento.text;
            this.nameElement.textContent = depoimento.author;
            this.companyElement.textContent = depoimento.company;
            
            // Fade in
            this.textElement.style.opacity = '1';
            this.nameElement.style.opacity = '1';
            this.companyElement.style.opacity = '1';
        }, 300);
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.depoimentos.length;
            this.updateContent();
            this.updateDots();
        }, this.autoPlayInterval);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayTimer);
        this.startAutoPlay();
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CTA BUTTON HANDLERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class CTAHandlers {
    constructor() {
        this.init();
    }

    init() {
        // Nav CTA
        const navCTA = document.querySelector('.nav-cta');
        if (navCTA) {
            navCTA.addEventListener('click', () => this.handleCTA('Header'));
        }

        // Hero Primary Button
        const heroPrimary = document.querySelector('.hero-buttons .btn-primary');
        if (heroPrimary) {
            heroPrimary.addEventListener('click', () => this.handleCTA('Hero'));
        }

        // Servicos CTA
        const servicoCTA = document.querySelector('.servicos-cta-card .btn-outline');
        if (servicoCTA) {
            servicoCTA.addEventListener('click', () => this.handleCTA('Serviços'));
        }

        // Diferenciais CTA
        const diferencialCTA = document.querySelector('.diferenciais-content .btn-primary');
        if (diferencialCTA) {
            diferencialCTA.addEventListener('click', () => this.handleCTA('Diferenciais'));
        }

        // CTA Final Buttons
        const ctaFinalButtons = document.querySelectorAll('.cta-final button');
        ctaFinalButtons.forEach(btn => {
            btn.addEventListener('click', () => this.handleCTA('CTA Final'));
        });
    }

    handleCTA(source) {
        console.log(`CTA clicado em: ${source}`);
        // Aqui você pode adicionar:
        // - Scroll para formulário de contato
        // - Abrir modal
        // - Redirecionar para página de orçamento
        // - Integrar com WhatsApp
        // Exemplo:
        // window.location.href = 'orcamento.html';
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PERFORMANCE MONITORING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('BRONX ENGENHARIA — Performance Metrics');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            console.log(`Connect Time: ${connectTime}ms`);
            console.log(`Render Time: ${renderTime}ms`);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// IMAGE LAZY LOADING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// WHATSAPP FLOAT HANDLER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class WhatsAppHandler {
    constructor() {
        this.button = document.querySelector('.whatsapp-float');
        this.init();
    }

    init() {
        if (this.button) {
            this.button.addEventListener('click', (e) => {
                // Track WhatsApp click
                console.log('WhatsApp button clicked');
                
                // O link já está no href, mas você pode adicionar tracking aqui
                // Exemplo com Google Analytics:
                // gtag('event', 'click', {
                //     'event_category': 'WhatsApp',
                //     'event_label': 'Float Button'
                // });
            });
        }
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VIDEO CARDS REVEAL (VÍDEOS DAS OBRAS)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class VideoReveal {
    constructor() {
        this.cards = document.querySelectorAll('.reveal-up');
        if (!this.cards.length) return;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        this.cards.forEach(card => observer.observe(card));
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MOBILE MENU
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class MobileMenu {
    constructor() {
        this.btn      = document.getElementById('mobileMenuBtn');
        this.panel    = document.getElementById('mobileMenuPanel');
        this.overlay  = document.getElementById('mobileMenuOverlay');
        this.closeBtn = document.getElementById('mobileMenuClose');
        this.isOpen   = false;

        if (!this.btn || !this.panel) return;
        this.init();
    }

    init() {
        this.btn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        // Fecha com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });
    }

    open() {
        this.isOpen = true;
        this.btn.classList.add('open');
        this.btn.setAttribute('aria-expanded', 'true');
        this.panel.classList.add('open');
        this.overlay.style.display = 'block';
        // Força reflow para transição funcionar
        this.overlay.offsetHeight;
        this.overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.isOpen = false;
        this.btn.classList.remove('open');
        this.btn.setAttribute('aria-expanded', 'false');
        this.panel.classList.remove('open');
        this.overlay.classList.remove('visible');
        document.body.style.overflow = '';
        // Aguarda transição para ocultar overlay
        this.overlay.addEventListener('transitionend', () => {
            if (!this.isOpen) this.overlay.style.display = 'none';
        }, { once: true });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INIT ALL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INITIALIZE ALL MODULES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('BRONX ENGENHARIA — Premium Industrial');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    const modules = [
        ThemeToggle,
        NavbarScroll,
        StatsCounter,
        ScrollReveal,
        SmoothScroll,
        ServicoHover,
        ProjetoCardEffects,
        DepoimentosCarousel,
        CTAHandlers,
        PerformanceMonitor,
        LazyLoadImages,
        WhatsAppHandler,
        MobileMenu,
        VideoReveal,
    ];

    modules.forEach(Module => {
        try {
            new Module();
        } catch (e) {
            console.warn(`[Bronx] Erro ao inicializar ${Module.name}:`, e.message);
        }
    });
    
    console.log('✓ All modules initialized');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UTILITY: Detect reduced motion preference
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--transition', 'none');
    console.log('⚠ Reduced motion preference detected - animations disabled');
}
