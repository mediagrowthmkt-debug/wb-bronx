// ========================================
// MOBILE MENU
// ========================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// HERO SLIDESHOW
// ========================================

class HeroSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.hero__slide');
        this.indicators = document.querySelectorAll('.hero__indicator');
        this.prevBtn = document.querySelector('.hero__control--prev');
        this.nextBtn = document.querySelector('.hero__control--next');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Start autoplay
        this.startAutoplay();
        
        // Button controls
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoplay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoplay();
            });
        }
        
        // Indicator controls
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
        
        // Pause on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => this.stopAutoplay());
            heroSection.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // Play videos when slide becomes active
        this.playActiveVideo();
    }
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        this.playActiveVideo();
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    startAutoplay() {
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
    
    playActiveVideo() {
        // Pause all videos
        this.slides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
        
        // Play active video
        const activeVideo = this.slides[this.currentSlide].querySelector('video');
        if (activeVideo) {
            activeVideo.play().catch(e => console.log('Video autoplay failed:', e));
        }
    }
}

// Initialize hero slideshow
new HeroSlideshow();

// ========================================
// STATS COUNTER ANIMATION
// ========================================

class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stats__number');
        this.animated = false;
        this.init();
    }
    
    init() {
        if (this.stats.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateCounters();
                    this.animated = true;
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
    
    animateCounters() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            const duration = 2000;
            const increment = target / (duration / 16);
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

// Initialize stats counter
new StatsCounter();

// ========================================
// PORTFOLIO VIDEO PREVIEW
// ========================================

const portfolioItems = document.querySelectorAll('.portfolio__item');

portfolioItems.forEach(item => {
    const video = item.querySelector('video');
    
    if (video) {
        item.addEventListener('mouseenter', () => {
            video.play().catch(e => console.log('Video play failed:', e));
        });
        
        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

// ========================================
// DEPOIMENTOS SLIDER
// ========================================

class DepoimentosSlider {
    constructor() {
        this.slides = document.querySelectorAll('.depoimento__item');
        this.indicators = document.querySelectorAll('.depoimento__indicator');
        this.prevBtn = document.querySelector('.depoimento__control--prev');
        this.nextBtn = document.querySelector('.depoimento__control--next');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        this.startAutoplay();
        
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoplay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoplay();
            });
        }
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
    }
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    startAutoplay() {
        this.slideInterval = setInterval(() => this.nextSlide(), 6000);
    }
    
    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Initialize depoimentos slider
new DepoimentosSlider();

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ACTIVE LINK ON SCROLL
// ========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav__link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// FORM VALIDATION (for contact/budget pages)
// ========================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        let isValid = true;
        
        // Basic validation
        form.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would normally send the form data to a server
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message
            showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            form.reset();
        } else {
            showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
        }
    });
});

function showMessage(message, type) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message--${type}`;
    messageEl.textContent = message;
    
    // Insert before form
    const form = document.querySelector('form');
    if (form) {
        form.parentNode.insertBefore(messageEl, form);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

// ========================================
// ANIMATION ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section').forEach(section => {
    animateOnScroll.observe(section);
});

// ========================================
// PERFORMANCE: Preload critical resources
// ========================================

// Preload hero videos
const heroVideos = document.querySelectorAll('.hero__slide video');
heroVideos.forEach((video, index) => {
    if (index === 0) {
        video.preload = 'auto';
    } else {
        video.preload = 'metadata';
    }
});

console.log('🏗️ Bronx Engenharia - Website loaded successfully');

// ========================================
// PREMIUM EFFECTS & MICROINTERACTIONS
// ========================================

// Reveal Elements on Scroll
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal');
        this.observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, this.observerOptions);
        
        this.elements.forEach(el => observer.observe(el));
    }
}

// Spotlight Effect (Mouse Tracking)
class SpotlightEffect {
    constructor() {
        this.elements = document.querySelectorAll('.spotlight');
        this.init();
    }
    
    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100 - 50;
                const y = ((e.clientY - rect.top) / rect.height) * 100 - 50;
                el.style.setProperty('--mouse-x', `${x}%`);
                el.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }
}

// Magnetic Button Effect
class MagneticButton {
    constructor() {
        this.buttons = document.querySelectorAll('.magnetic-btn');
        this.strength = 0.3;
        this.init();
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * this.strength;
                const y = (e.clientY - rect.top - rect.height / 2) * this.strength;
                btn.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Ripple Click Effect
class RippleEffect {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .portfolio__item');
        this.init();
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
}

// Parallax Effect for Layers
class ParallaxLayers {
    constructor() {
        this.layers = document.querySelectorAll('.parallax-layer');
        this.init();
    }
    
    init() {
        if (this.layers.length === 0) return;
        
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                this.layers.forEach((layer, index) => {
                    const speed = (index + 1) * 0.5;
                    const yPos = -(scrolled * speed / 10);
                    layer.style.transform = `translateY(${yPos}px)`;
                });
            });
        });
    }
}

// 3D Card Tilt Effect
class Card3DTilt {
    constructor() {
        this.cards = document.querySelectorAll('.card-3d');
        this.maxTilt = 10;
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * this.maxTilt;
                const rotateY = ((centerX - x) / centerX) * this.maxTilt;
                
                card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale3d(1.05, 1.05, 1.05)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// Smooth Scroll with Offset
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.offset = 80;
        this.init();
    }
    
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - this.offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.checkPerformance();
    }
    
    checkPerformance() {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('⚡ Performance Metrics:');
                    console.log(`├─ DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
                    console.log(`├─ Load Complete: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
                    console.log(`└─ Total Time: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                }
            });
        }
    }
}

// Add Glass Effect Classes Dynamically
function addGlassEffects() {
    // Add glass effect to cards
    const cards = document.querySelectorAll('.service-card, .portfolio__item, .depoimento');
    cards.forEach(card => {
        if (!card.classList.contains('glass-card')) {
            card.classList.add('glass-card', 'hover-lift');
        }
    });
    
    // Add gradient text to main titles
    const mainTitles = document.querySelectorAll('.hero__title, .section__title--large');
    mainTitles.forEach(title => {
        if (!title.classList.contains('gradient-text')) {
            // Wrap text in span for gradient effect
            const text = title.textContent;
            title.innerHTML = `<span class="gradient-text">${text}</span>`;
        }
    });
    
    // Add reveal animation to sections
    const sections = document.querySelectorAll('.section, .service-card, .portfolio__item');
    sections.forEach(section => {
        if (!section.classList.contains('reveal')) {
            section.classList.add('reveal');
        }
    });
}

// Initialize all premium effects
function initPremiumEffects() {
    // Add dynamic classes
    addGlassEffects();
    
    // Initialize effects
    new ScrollReveal();
    new SpotlightEffect();
    new MagneticButton();
    new RippleEffect();
    new ParallaxLayers();
    new Card3DTilt();
    new SmoothScroll();
    new PerformanceMonitor();
    
    console.log('✨ Premium effects initialized');
}

// Wait for DOM and initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumEffects);
} else {
    initPremiumEffects();
}

// Prefetch next page on hover (Performance Enhancement)
document.querySelectorAll('a[href]').forEach(link => {
    if (link.hostname === window.location.hostname) {
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#')) {
                const linkEl = document.createElement('link');
                linkEl.rel = 'prefetch';
                linkEl.href = href;
                document.head.appendChild(linkEl);
            }
        }, { once: true });
    }
});
