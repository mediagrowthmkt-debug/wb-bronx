# BRONX ENGENHARIA

> Website premium industrial — Construção de galpões de alto padrão

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 VISÃO GERAL

Site desenvolvido com design premium industrial inspirado em Tesla, Linear, Vercel e Apple.

**Personalidade:** "A Tesla dealership that builds warehouses — serious, precise, modern, no fluff."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📁 ESTRUTURA DO PROJETO

```
wb-bronx/
├── index.html                      # Página principal (premium redesign)
├── css/
│   └── style.css                   # Design system completo
├── js/
│   └── main.js                     # Interações e animações
├── 01_HOME/                        # Assets da home
├── 02_SOBRE/                       # Assets sobre
├── 03_SERVICOS/                    # Assets serviços
├── 04_PROJETOS/                    # Fotos dos projetos
│   ├── galpao-forte-logistica-itajai-sc/
│   ├── galpao-industrial-interior-sc/
│   ├── projeto-comercial-moderno/
│   └── residencial-condominio-luxo/
└── PREMIUM-REDESIGN-FINAL.md       # Documentação completa do design
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎨 DESIGN SYSTEM

### Cores
```css
--color-bg:        #080808   /* Background principal */
--color-surface:   #0F0F0F   /* Camada elevada */
--color-card:      #141414   /* Cards */
--color-border:    #1F1F1F   /* Divisores */
--color-teal:      #2ABFAA   /* Accent (uso estratégico) */
--color-white:     #FFFFFF   /* Texto principal */
--color-muted:     #555555   /* Texto secundário */
```

### Tipografia
- **Font:** Montserrat (Google Fonts)
- **Weights:** 300 (light), 400 (regular), 700 (bold), 900 (black)
- **Tamanhos:** 10px (labels) → 96px (hero headlines)

### Princípios
1. **Monocromático** — 95% cinzas, 5% teal
2. **Tipografia oversized** — Headlines 56-96px
3. **Espaço é luxo** — 120px+ entre seções
4. **Flat design** — Sem sombras pesadas ou gradientes decorativos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🚀 COMO USAR

### Abrir localmente
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Servir com Python
python3 -m http.server 8000
# Acessar: http://localhost:8000
```

### Personalizar conteúdo

1. **Substituir imagens:**
   - Adicionar fotos reais dos projetos em `04_PROJETOS/`
   - Atualizar `src` das imagens no `index.html`

2. **Editar textos:**
   - Stats hero: atributos `data-target` nos `.stat-number`
   - Serviços: editar conteúdo em `.servico-item`
   - Projetos: atualizar `.projeto-card`
   - Depoimentos: editar array em `js/main.js` (classe `DepoimentosCarousel`)

3. **Configurar WhatsApp:**
   - Atualizar `href` do `.whatsapp-float` com número real

4. **Integrar analytics:**
   - Adicionar Google Analytics no `<head>`
   - Tracking de conversões nos CTAs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ✨ FEATURES

### Interações Premium
- ✅ Navbar glassmorphism ao scrollar
- ✅ Stats counter animation (0 → valor final)
- ✅ Hero underline teal animado
- ✅ Scroll reveal com Intersection Observer
- ✅ Hover effects sutis em serviços e projetos
- ✅ Carousel de depoimentos com auto-play
- ✅ WhatsApp float button
- ✅ Smooth scroll para âncoras
- ✅ Lazy loading de imagens

### Seções
1. **Hero** — Grid pattern, tipografia oversized, stats animados
2. **Sobre** — Layout assimétrico 55/45, imagem com gradient
3. **Serviços** — Lista timeline, números gigantes, hover teal
4. **Projetos** — Grid assimétrico (1 grande + 2 pequenos)
5. **Diferenciais** — Clip-path diagonal, grid 2x3
6. **Depoimentos** — Aspas 200px, auto-play 6s
7. **CTA Final** — Único bloco teal sólido
8. **Footer** — Flat, 4 colunas, ícones minimalistas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📱 RESPONSIVO

### Breakpoints
- **1200px** — Tablets landscape
- **768px** — Mobile

### Ajustes Mobile
- Tipografia reduz 30%
- Grids viram stack vertical
- Navbar links escondidos (implementar menu hamburger)
- Stats layout flex wrap
- Footer single column

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📚 DOCUMENTAÇÃO

Para detalhes completos do design system, microinterações e filosofia do projeto:

👉 **[PREMIUM-REDESIGN-FINAL.md](PREMIUM-REDESIGN-FINAL.md)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔧 SUPORTE

### Browsers
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Performance
- Lazy loading de imagens
- CSS otimizado (~850 linhas)
- JavaScript modular (~450 linhas)
- Web fonts preconnect

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📝 CHANGELOG

### v2.0.0 — Premium Industrial Redesign (08/03/2026)
- ✨ Redesign completo com personalidade única
- 🎨 Design system monocromático + teal estratégico
- 📝 Tipografia oversized como elemento principal
- 🏗️ Layouts assimétricos intencionais
- ⚡ Microinterações premium com cubic-bezier suave
- 📱 Responsivo mobile-first

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**BRONX ENGENHARIA** — Construindo o futuro da engenharia industrial
