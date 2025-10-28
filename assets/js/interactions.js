// AI Technology Site Interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Technology Site Loaded');
    
    // Initialize carousel with AI theme
    if (typeof $ !== 'undefined') {
        $("#myCarousel").carousel({
            interval: 5000,
            pause: "hover"
        });
    }

    // Cyberpunk cursor effect
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: #00f3ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 15px #00f3ff;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', function(e) {
        cursorGlow.style.left = (e.clientX - 3) + 'px';
        cursorGlow.style.top = (e.clientY - 3) + 'px';
    });

    // AI tool card enhancements
    const toolCards = document.querySelectorAll('.price-box__wrap');
    toolCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 243, 255, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 243, 255, 0.15)';
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Affiliate link tracking
    document.querySelectorAll('a[href*="listnr.ai"], a[href*="getreditus.com"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            console.log('Affiliate link clicked:', this.href);
            // Add your affiliate tracking code here
            if (window.gtag) {
                gtag('event', 'affiliate_click', {
                    'event_category': 'affiliate',
                    'event_label': this.href
                });
            }
        });
    });

    // Newsletter signup enhancement
    const newsletterBtn = document.querySelector('a[href="#newsletter"]');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to contact section or show modal
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(function() {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Add some cyberpunk flair
function addParticleEffects() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    // Create some floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomOpacity = Math.random() * 0.5;
        const randomDuration = 10 + Math.random() * 20;
        const randomDelay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00f3ff;
            border-radius: 50%;
            opacity: ${randomOpacity};
            animation: floatParticle ${randomDuration}s linear infinite;
            left: ${randomX}%;
            top: ${randomY}%;
            animation-delay: ${randomDelay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particle effects after page load
window.addEventListener('load', addParticleEffects);

// Additional AI-themed animations
function addAIGlitchEffects() {
    const glitchElements = document.querySelectorAll('.site__title, .row__title');
    
    glitchElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 30px rgba(138, 58, 255, 0.5)';
        });
    });
}

// Initialize glitch effects
document.addEventListener('DOMContentLoaded', addAIGlitchEffects);