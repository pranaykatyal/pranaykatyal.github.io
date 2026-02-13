// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add particle effect to hero section (subtle)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 100;
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 1;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.speedY = Math.random() * 0.6 - 0.3;
            this.opacity = Math.random() * 0.6 + 0.3;
            this.color = Math.random() > 0.5 ? 'rgba(157, 78, 221,' : 'rgba(192, 192, 192,';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color + this.opacity + ')';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        particles.forEach((particleA, indexA) => {
            particles.slice(indexA + 1).forEach(particleB => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.strokeStyle = `rgba(157, 78, 221, ${0.15 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    });
}

createParticles();

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(42, 42, 42, 1) 0%, rgba(157, 78, 221, 0.1) 100%)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--color-bg-tertiary)';
    });
});

window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }
});

console.log('%c👋 Welcome to Pranay Katyal\'s Portfolio!', 'color: #9d4edd; font-size: 16px; font-weight: bold;');
console.log('%cInterested in collaboration? Reach out at pranaykatyal2@gmail.com', 'color: #c0c0c0; font-size: 12px;');

// ========================================
// BLACK HOLE CANVAS ANIMATIONS
// ========================================

function initBlackHoleAnimations() {
    console.log("BLACK HOLE ANIMATION: Starting initialization...");
    const canvas = document.getElementById('animationCanvas');
    console.log("BLACK HOLE ANIMATION: Canvas element:", canvas);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    console.log("BLACK HOLE ANIMATION: Canvas context:", ctx);

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log("BLACK HOLE ANIMATION: Canvas resized to", canvas.width, "x", canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    window.addEventListener('resize', () => {
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
    });

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = 1 + Math.random() * 2;
            this.baseOpacity = 0.6 + Math.random() * 0.4;
            this.twinkleSpeed = 0.01 + Math.random() * 0.02;
            this.twinklePhase = Math.random() * Math.PI * 2;
        }

        update() {
            this.twinklePhase += this.twinkleSpeed;
        }

        draw() {
            const twinkle = (Math.sin(this.twinklePhase) + 1) / 2;
            const opacity = this.baseOpacity * (0.5 + 0.5 * twinkle);
            
            ctx.shadowBlur = 3;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            const angle = Math.random() * Math.PI * 2;
            const distance = 300 + Math.random() * 400;
            this.angle = angle;
            this.distance = distance;
            this.x = centerX + Math.cos(angle) * distance;
            this.y = centerY + Math.sin(angle) * distance;
            this.size = 1.5 + Math.random() * 1;
            this.opacity = 0.9 + Math.random() * 0.1;
            this.spiralSpeed = 0.008 + Math.random() * 0.006;
            this.fallSpeed = 0.6 + Math.random() * 0.5;
        }

        update() {
            this.angle += this.spiralSpeed;
            this.distance -= this.fallSpeed;
            
            if (this.distance < 30) {
                this.reset();
                return;
            }

            this.x = centerX + Math.cos(this.angle) * this.distance;
            this.y = centerY + Math.sin(this.angle) * this.distance;
        }

        draw() {
            const distanceFade = Math.min(1.0, this.distance / 200);
            const finalOpacity = this.opacity * distanceFade * 0.8;
            
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(157, 78, 221, 0.8)';
            ctx.fillStyle = `rgba(200, 180, 255, ${finalOpacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    class CloudyRing {
        constructor(radius, width, speed, upperHalfOnly = false, baseOpacity = 0.015) {
            this.radius = radius;
            this.width = width;
            this.speed = speed;
            this.angle = 0;
            this.segments = 60;
            this.upperHalfOnly = upperHalfOnly;
            this.baseOpacity = baseOpacity;
            
            this.dustRings = [];
            for (let i = 0; i < 5; i++) {
                this.dustRings.push({
                    radiusOffset: -width/2 + (i / 4) * width,
                    opacity: (baseOpacity * 0.5) + Math.random() * (baseOpacity * 0.8),
                    phaseOffset: Math.random() * Math.PI * 2
                });
            }
        }

        update() {
            this.angle += this.speed;
        }

        draw() {
            ctx.save();
            ctx.translate(centerX, centerY);
            
            if (this.upperHalfOnly) {
                ctx.beginPath();
                ctx.rect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height);
                ctx.clip();
            }
            
            this.dustRings.forEach(dust => {
                const dustRadius = this.radius + dust.radiusOffset;
                
                for (let i = 0; i < 40; i++) {
                    const segmentAngle = (i / 40) * Math.PI * 2 + this.angle + dust.phaseOffset;
                    const nextAngle = ((i + 1) / 40) * Math.PI * 2 + this.angle + dust.phaseOffset;
                    
                    const opacityVariation = (Math.sin(i / 40 * Math.PI * 3 + this.angle * 2) + 1) / 2;
                    const finalOpacity = dust.opacity * (0.5 + 0.5 * opacityVariation);
                    
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = `rgba(200, 180, 255, ${finalOpacity * 0.3})`;
                    ctx.strokeStyle = `rgba(200, 180, 255, ${finalOpacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.arc(0, 0, dustRadius, segmentAngle, nextAngle);
                    ctx.stroke();
                }
            });
            
            for (let i = 0; i < this.segments; i++) {
                const segmentAngle = (i / this.segments) * Math.PI * 2 + this.angle;
                const nextAngle = ((i + 1) / this.segments) * Math.PI * 2 + this.angle;
                
                const opacityVariation = (Math.sin(i / this.segments * Math.PI * 5 + this.angle * 3) + 1) / 2;
                const finalOpacity = this.baseOpacity + (this.baseOpacity * 1.5) * opacityVariation;
                
                ctx.shadowBlur = 20;
                ctx.shadowColor = `rgba(200, 180, 255, ${finalOpacity * 0.4})`;
                ctx.strokeStyle = `rgba(200, 180, 255, ${finalOpacity})`;
                ctx.lineWidth = this.width;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, segmentAngle, nextAngle);
                ctx.stroke();
            }
            
            ctx.shadowBlur = 0;
            ctx.restore();
        }
    }

    const stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push(new Star());
    }

    const particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
    }

    const rings = [];

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        centerX = canvas.width / 2;
        centerY = canvas.height / 2;

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    console.log("BLACK HOLE ANIMATION: Starting animation loop...");
    animate();
}

// Call immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log("DOM LOADED - calling initBlackHoleAnimations");
        initBlackHoleAnimations();
    });
} else {
    // DOM already loaded, call immediately
    console.log("DOM ALREADY LOADED - calling initBlackHoleAnimations immediately");
    initBlackHoleAnimations();
}
