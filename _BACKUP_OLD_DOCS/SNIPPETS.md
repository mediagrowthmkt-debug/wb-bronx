# 🎨 SNIPPETS - Bronx Engenharia

Copie e cole estes snippets para aplicar rapidamente os efeitos premium no seu código.

---

## 📦 CARDS

### Card Premium Completo
```html
<div class="glass-card hover-lift spotlight reveal">
    <i class="fas fa-building" style="font-size: 3rem; color: var(--primary-color);"></i>
    <h3>Título do Card</h3>
    <p>Descrição do conteúdo do card com texto explicativo.</p>
</div>
```

### Card com Borda Gradiente
```html
<div class="glass-card gradient-border hover-lift reveal">
    <span class="effect-label">Destaque</span>
    <h3>Título</h3>
    <p>Conteúdo</p>
</div>
```

### Card 3D com Glow
```html
<div class="glass-card card-3d glow-pulse reveal">
    <div class="card-icon">
        <i class="fas fa-star"></i>
    </div>
    <h3>Card 3D</h3>
    <p>Move em 3D com o mouse</p>
</div>
```

---

## 🔘 BOTÕES

### Botão Primary com Ícone
```html
<button class="btn btn--primary magnetic-btn">
    <i class="fas fa-paper-plane"></i>
    Solicitar Orçamento
</button>
```

### Botão Secondary Glass
```html
<button class="btn btn--secondary magnetic-btn">
    <i class="fas fa-phone"></i>
    Entre em Contato
</button>
```

### Botão Outline
```html
<button class="btn btn--outline magnetic-btn">
    <i class="fas fa-download"></i>
    Baixar Catálogo
</button>
```

### Grupo de Botões
```html
<div class="button-group">
    <button class="btn btn--primary magnetic-btn">
        <i class="fas fa-rocket"></i>
        Ação Principal
    </button>
    <button class="btn btn--secondary magnetic-btn">
        <i class="fas fa-info-circle"></i>
        Saiba Mais
    </button>
</div>
```

---

## 📝 TÍTULOS

### Título com Gradiente
```html
<h2 class="section__title">
    <span class="gradient-text">Nossos Serviços Premium</span>
</h2>
```

### Título com Badge
```html
<div class="section__header reveal">
    <span class="section__badge">Sobre Nós</span>
    <h2 class="section__title">
        <span class="gradient-text">Quem Somos</span>
    </h2>
    <p class="section__subtitle">
        Especialistas em construção de galpões de alto padrão
    </p>
</div>
```

### Título Hero com Efeito Typing
```html
<h1 class="hero__title typing-effect">
    Engenharia de Alto Padrão
</h1>
```

### Título Neon
```html
<h2 class="neon-text" style="font-size: 3rem; text-align: center;">
    Inovação e Qualidade
</h2>
```

---

## 📑 SEÇÕES

### Seção com Background Grid
```html
<section class="section grid-bg">
    <div class="container">
        <div class="section__header reveal">
            <span class="section__badge">Serviços</span>
            <h2 class="section__title">
                <span class="gradient-text">O Que Fazemos</span>
            </h2>
        </div>
        
        <div class="content-grid reveal">
            <!-- Conteúdo aqui -->
        </div>
    </div>
</section>
```

### Seção com Background Dots
```html
<section class="section dot-bg">
    <div class="container">
        <!-- Conteúdo -->
    </div>
</section>
```

### Seção Hero Moderna
```html
<section class="hero">
    <div class="hero__overlay"></div>
    <div class="container">
        <div class="hero__content">
            <span class="hero__badge">Bronx Engenharia</span>
            <h1 class="hero__title">
                <span class="gradient-text">Construindo</span> o Futuro
            </h1>
            <p class="hero__subtitle">
                Especialistas em galpões industriais de alto padrão
            </p>
            <div class="hero__cta">
                <button class="btn btn--primary magnetic-btn">
                    <i class="fas fa-rocket"></i>
                    Solicitar Orçamento
                </button>
                <button class="btn btn--secondary magnetic-btn">
                    <i class="fas fa-play"></i>
                    Ver Projetos
                </button>
            </div>
        </div>
    </div>
    <div class="hero__scroll">
        <span>Role para baixo</span>
        <i class="fas fa-chevron-down"></i>
    </div>
</section>
```

---

## 📊 ESTATÍSTICAS

### Card de Estatística
```html
<div class="stats__item glass-card reveal">
    <div class="stats__icon">
        <i class="fas fa-check-circle"></i>
    </div>
    <div class="stats__number" data-target="150">0</div>
    <div class="stats__label">Projetos Entregues</div>
</div>
```

### Grid de Stats Completo
```html
<section class="stats section">
    <div class="container">
        <div class="stats__grid">
            <div class="stats__item glass-card reveal">
                <div class="stats__icon">
                    <i class="fas fa-building"></i>
                </div>
                <div class="stats__number" data-target="150">0</div>
                <div class="stats__label">Projetos</div>
            </div>
            
            <div class="stats__item glass-card reveal">
                <div class="stats__icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="stats__number" data-target="500">0</div>
                <div class="stats__label">Clientes</div>
            </div>
            
            <div class="stats__item glass-card reveal">
                <div class="stats__icon">
                    <i class="fas fa-award"></i>
                </div>
                <div class="stats__number" data-target="20">0</div>
                <div class="stats__label">Anos</div>
            </div>
            
            <div class="stats__item glass-card reveal">
                <div class="stats__icon">
                    <i class="fas fa-city"></i>
                </div>
                <div class="stats__number" data-target="30">0</div>
                <div class="stats__label">Cidades</div>
            </div>
        </div>
    </div>
</section>
```

---

## 🖼️ PORTFOLIO/GRID

### Item de Portfolio
```html
<div class="portfolio__item glass-card reveal" data-category="industrial">
    <div class="portfolio__image">
        <img src="caminho/imagem.jpg" alt="Projeto">
        <div class="portfolio__overlay">
            <h3>Nome do Projeto</h3>
            <p>Descrição breve</p>
            <div class="portfolio__tags">
                <span class="portfolio__tag">Industrial</span>
                <span class="portfolio__tag">500m²</span>
            </div>
        </div>
    </div>
</div>
```

### Grid de Portfolio com Filtros
```html
<section class="section">
    <div class="container">
        <div class="section__header reveal">
            <h2 class="section__title">
                <span class="gradient-text">Nossos Projetos</span>
            </h2>
        </div>
        
        <div class="portfolio__filters reveal">
            <button class="filter-btn active" data-filter="all">
                Todos
            </button>
            <button class="filter-btn" data-filter="industrial">
                Industrial
            </button>
            <button class="filter-btn" data-filter="logistico">
                Logístico
            </button>
            <button class="filter-btn" data-filter="comercial">
                Comercial
            </button>
        </div>
        
        <div class="portfolio__grid">
            <!-- Portfolio items aqui -->
        </div>
    </div>
</section>
```

---

## 💬 DEPOIMENTOS

### Card de Depoimento
```html
<div class="depoimento glass-card reveal">
    <div class="depoimento__rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="depoimento__texto">
        "Excelente trabalho! A Bronx Engenharia entregou nosso galpão 
        no prazo e com qualidade excepcional."
    </p>
    <div class="depoimento__autor">
        <img src="cliente.jpg" alt="Cliente">
        <div>
            <h4>João Silva</h4>
            <span>CEO, Empresa XYZ</span>
        </div>
    </div>
</div>
```

---

## 📋 FORMULÁRIOS

### Input com Ícone
```html
<div class="form-group">
    <label for="nome">Nome Completo *</label>
    <div class="input-with-icon">
        <i class="fas fa-user"></i>
        <input type="text" id="nome" name="nome" class="form-control" required>
    </div>
</div>
```

### Textarea
```html
<div class="form-group">
    <label for="mensagem">Mensagem *</label>
    <textarea id="mensagem" name="mensagem" class="form-control" rows="5" required></textarea>
</div>
```

### Botão de Submit
```html
<button type="submit" class="btn btn--primary magnetic-btn btn--block">
    <i class="fas fa-paper-plane"></i>
    Enviar Mensagem
</button>
```

---

## 🎯 BADGES E TAGS

### Badge Simples
```html
<span class="section__badge">Novo</span>
```

### Tag com Ícone
```html
<span class="tag">
    <i class="fas fa-check"></i>
    Concluído
</span>
```

### Grupo de Tags
```html
<div class="tags-group">
    <span class="tag">Industrial</span>
    <span class="tag">500m²</span>
    <span class="tag">SC</span>
</div>
```

---

## 🎨 ELEMENTOS DECORATIVOS

### Shape Morphing
```html
<div class="morphing-shape" style="
    width: 200px; 
    height: 200px; 
    background: var(--gradient-primary);
    box-shadow: var(--shadow-glow);
"></div>
```

### Linha de Scan
```html
<div class="scan-effect" style="
    width: 100%;
    height: 300px;
    background: rgba(0,0,0,0.5);
">
    Conteúdo com efeito de scan
</div>
```

### Elemento Flutuante
```html
<div class="float-animation">
    <img src="icone.svg" alt="Ícone">
</div>
```

---

## 🔗 LINKS E NAVEGAÇÃO

### Link com Underline Animado
```html
<a href="#" class="link-animated">
    Saiba mais sobre nossos serviços
</a>
```

### Menu de Navegação
```html
<nav class="nav">
    <ul class="nav__list">
        <li class="nav__item">
            <a href="#home" class="nav__link active">Home</a>
        </li>
        <li class="nav__item">
            <a href="#sobre" class="nav__link">Sobre</a>
        </li>
        <li class="nav__item">
            <a href="#servicos" class="nav__link">Serviços</a>
        </li>
    </ul>
</nav>
```

---

## 📱 BOTÕES FLUTUANTES

### WhatsApp Float
```html
<a href="https://wa.me/5511999999999" 
   class="whatsapp-float magnetic-btn" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-whatsapp"></i>
</a>
```

### Botão Back to Top
```html
<button class="back-to-top magnetic-btn" id="backToTop">
    <i class="fas fa-arrow-up"></i>
</button>
```

---

## 🎭 OVERLAYS

### Overlay com Gradiente
```html
<div class="image-wrapper">
    <img src="imagem.jpg" alt="Imagem">
    <div class="overlay-gradient">
        <h3>Título sobre imagem</h3>
        <p>Descrição</p>
    </div>
</div>

<style>
.image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
}

.overlay-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient-overlay);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
}

.image-wrapper:hover .overlay-gradient {
    opacity: 1;
}
</style>
```

---

## 🎨 GRADIENTES CUSTOMIZADOS

### Gradiente Teal
```css
background: linear-gradient(135deg, #2ABFAA 0%, #17a589 100%);
```

### Gradiente com 3 Cores
```css
background: linear-gradient(135deg, #2ABFAA 0%, #17a589 50%, #0D7C6F 100%);
```

### Gradiente Radial
```css
background: radial-gradient(circle at 30% 50%, rgba(42,191,170,0.3) 0%, transparent 50%);
```

### Gradiente Overlay Hero
```css
background: linear-gradient(135deg, 
    rgba(42, 191, 170, 0.9) 0%, 
    rgba(13, 13, 13, 0.95) 100%
);
```

---

## 🎯 COMBINAÇÕES RECOMENDADAS

### Card de Serviço Premium
```html
<div class="service-card glass-card hover-lift spotlight reveal">
    <div class="service-icon glow-pulse">
        <i class="fas fa-industry"></i>
    </div>
    <h3 class="gradient-text">Galpões Industriais</h3>
    <p>Construção de galpões de alto padrão com tecnologia avançada.</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Projeto personalizado</li>
        <li><i class="fas fa-check"></i> Qualidade garantida</li>
        <li><i class="fas fa-check"></i> Entrega no prazo</li>
    </ul>
    <button class="btn btn--outline magnetic-btn">
        Saiba Mais
    </button>
</div>
```

### Hero Section Completa
```html
<section class="hero">
    <div class="hero__overlay"></div>
    <video class="hero__video" autoplay muted loop playsinline>
        <source src="hero-video.mp4" type="video/mp4">
    </video>
    
    <div class="container">
        <div class="hero__content">
            <span class="hero__badge float-animation">
                ⭐ Referência em Santa Catarina
            </span>
            
            <h1 class="hero__title">
                <span class="gradient-text">Construindo</span>
                <br>
                O Futuro da
                <br>
                <span class="gradient-text">Engenharia</span>
            </h1>
            
            <p class="hero__subtitle">
                Especialistas em galpões industriais Triple A 
                com modelo chave na mão
            </p>
            
            <div class="hero__cta">
                <button class="btn btn--primary magnetic-btn">
                    <i class="fas fa-rocket"></i>
                    Solicitar Orçamento
                </button>
                <button class="btn btn--secondary magnetic-btn">
                    <i class="fas fa-play"></i>
                    Ver Portfólio
                </button>
            </div>
            
            <div class="hero__stats">
                <div class="hero__stat">
                    <span class="number gradient-text">150+</span>
                    <span class="label">Projetos</span>
                </div>
                <div class="hero__stat">
                    <span class="number gradient-text">20+</span>
                    <span class="label">Anos</span>
                </div>
                <div class="hero__stat">
                    <span class="number gradient-text">500+</span>
                    <span class="label">Clientes</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="hero__scroll">
        <span>Role para baixo</span>
        <i class="fas fa-chevron-down"></i>
    </div>
</section>
```

### CTA Section Premium
```html
<section class="cta-section section" style="
    background: var(--gradient-primary);
    position: relative;
    overflow: hidden;
">
    <div class="morphing-shape" style="
        position: absolute;
        top: -100px;
        right: -100px;
        width: 400px;
        height: 400px;
        background: rgba(255,255,255,0.1);
    "></div>
    
    <div class="container">
        <div class="cta-content reveal" style="
            text-align: center;
            color: white;
            position: relative;
            z-index: 1;
        ">
            <h2 style="font-size: 3rem; margin-bottom: 20px;">
                Pronto para Começar seu Projeto?
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 40px;">
                Entre em contato e receba um orçamento personalizado
            </p>
            <div style="display: flex; gap: 20px; justify-content: center;">
                <button class="btn btn--light magnetic-btn">
                    <i class="fas fa-phone"></i>
                    Ligar Agora
                </button>
                <button class="btn btn--outline magnetic-btn" style="
                    border-color: white;
                    color: white;
                ">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp
                </button>
            </div>
        </div>
    </div>
</section>
```

---

## 💻 JAVASCRIPT SNIPPETS

### Inicializar Contador de Stats
```javascript
const statsNumbers = document.querySelectorAll('.stats__number');
statsNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    let current = 0;
    const increment = target / 100;
    
    const updateCount = () => {
        current += increment;
        if (current < target) {
            stat.textContent = Math.ceil(current);
            requestAnimationFrame(updateCount);
        } else {
            stat.textContent = target + '+';
        }
    };
    
    updateCount();
});
```

### Smooth Scroll para Âncora
```javascript
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

### Adicionar Ripple Effect
```javascript
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
```

---

## 🎨 CSS UTILITIES

### Classes Úteis
```css
/* Espaçamentos */
.mt-1 { margin-top: 10px; }
.mt-2 { margin-top: 20px; }
.mt-3 { margin-top: 30px; }
.mt-4 { margin-top: 40px; }

.mb-1 { margin-bottom: 10px; }
.mb-2 { margin-bottom: 20px; }
.mb-3 { margin-bottom: 30px; }
.mb-4 { margin-bottom: 40px; }

/* Textos */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-primary { color: var(--primary-color); }
.text-muted { color: var(--text-muted); }

/* Display */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flex */
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
.gap-1 { gap: 10px; }
.gap-2 { gap: 20px; }
.gap-3 { gap: 30px; }
```

---

## 📖 REFERÊNCIAS RÁPIDAS

### Cores
```css
--primary-color: #2ABFAA
--primary-light: #3dd5bd
--primary-dark: #17a589
```

### Fontes
```css
--font-display: 'Montserrat', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Transições
```css
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Sombras
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.2);
--shadow-glow: 0 0 40px rgba(42, 191, 170, 0.3);
```

---

**Bronx Engenharia** - Snippets para desenvolvimento rápido e eficiente ✨
