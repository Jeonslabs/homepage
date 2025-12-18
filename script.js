// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    lastScroll = currentScroll;
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and service cards
document.querySelectorAll('.feature-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// CTA button actions
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Scroll to contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth reveal animation for elements
const revealElements = document.querySelectorAll('.section-title');
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Add hover effect to tech badges
document.querySelectorAll('.tech-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    badge.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Portfolio Screenshot Carousel
let carouselIndices = {};

function moveCarousel(appName, direction) {
    if (!carouselIndices[appName]) {
        carouselIndices[appName] = 0;
    }

    const slides = document.querySelectorAll(`#carousel-${appName} .carousel-slide`);
    const dots = document.querySelectorAll(`#dots-${appName} .dot`);

    // Remove active class from current slide and dot
    slides[carouselIndices[appName]].classList.remove('active');
    dots[carouselIndices[appName]].classList.remove('active');

    // Update index
    carouselIndices[appName] += direction;

    // Loop around
    if (carouselIndices[appName] >= slides.length) {
        carouselIndices[appName] = 0;
    } else if (carouselIndices[appName] < 0) {
        carouselIndices[appName] = slides.length - 1;
    }

    // Add active class to new slide and dot
    slides[carouselIndices[appName]].classList.add('active');
    dots[carouselIndices[appName]].classList.add('active');
}

function currentSlide(appName, index) {
    if (!carouselIndices[appName]) {
        carouselIndices[appName] = 0;
    }

    const slides = document.querySelectorAll(`#carousel-${appName} .carousel-slide`);
    const dots = document.querySelectorAll(`#dots-${appName} .dot`);

    // Remove active class from current
    slides[carouselIndices[appName]].classList.remove('active');
    dots[carouselIndices[appName]].classList.remove('active');

    // Set new index
    carouselIndices[appName] = index;

    // Add active class to new
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('[id^="carousel-"]');
    carousels.forEach(carousel => {
        const appName = carousel.id.replace('carousel-', '');
        carouselIndices[appName] = 0;
    });
});

// Console message for developers
console.log('%c🚀 JNS Labs - 혁신적인 디지털 솔루션', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%c웹 어플리케이션과 안드로이드 앱 개발에 관심이 있으신가요?', 'color: #8b5cf6; font-size: 14px;');
console.log('%cjns@jeons.kr으로 문의해주세요!', 'color: #a78bfa; font-size: 14px;');
