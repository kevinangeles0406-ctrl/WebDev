// ============================================
// NAVIGATION & HAMBURGER MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================

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

// ============================================
// CTA BUTTON INTERACTION
// ============================================

const ctaButton = document.querySelector('.cta-button');
const learnMoreBtn = document.querySelector('.learn-more-btn');

ctaButton.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    showNotification('Loading more information...');
});

learnMoreBtn.addEventListener('click', () => {
    showNotification('More information coming soon!');
});

// ============================================
// INTERACTIVE LOGO
// ============================================

const logo = document.querySelector('.logo');
const logoText = document.querySelector('.logo-text');

logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification('Welcome back to the top!');
});

logo.addEventListener('mouseenter', () => {
    logo.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))';
});

logo.addEventListener('mouseleave', () => {
    logo.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))';
});

// ============================================
// MOVIE MODAL FUNCTIONALITY
// ============================================

const movieModal = document.getElementById('movieModal');
const movieButtons = document.querySelectorAll('.movie-btn');
const closeButtons = document.querySelectorAll('.close');

const movieData = {
    'Spider-Man': {
        title: 'Spider-Man',
        year: 2002,
        director: 'Sam Raimi',
        cast: 'Tobey Maguire, Kirsten Dunst, Willem Dafoe',
        plot: 'When bitten by a genetically modified spider, a nerdy teenager gains spider-like abilities and must learn to use them wisely to fight crime.',
        rating: '8.2/10'
    },
    'Spider-Man 2': {
        title: 'Spider-Man 2',
        year: 2004,
        director: 'Sam Raimi',
        cast: 'Tobey Maguire, Kirsten Dunst, Alfred Molina',
        plot: 'Peter Parker struggles with his double life as a student and superhero, while facing the mechanical menace of Doctor Octopus.',
        rating: '7.3/10'
    },
    'The Amazing Spider-Man': {
        title: 'The Amazing Spider-Man',
        year: 2012,
        director: 'Marc Webb',
        cast: 'Andrew Garfield, Emma Stone, Rhys Ifans',
        plot: 'A fresh origin story featuring Peter Parker discovering his superhuman abilities and fighting against The Lizard.',
        rating: '6.9/10'
    },
    'Spider-Man: Homecoming': {
        title: 'Spider-Man: Homecoming',
        year: 2017,
        director: 'Jon Watts',
        cast: 'Tom Holland, Michael Keaton, Zendaya',
        plot: 'Peter Parker balances high school life with his role as the friendly neighborhood Spider-Man, facing the Vulture.',
        rating: '7.4/10'
    },
    'Spider-Man: No Way Home': {
        title: 'Spider-Man: No Way Home',
        year: 2021,
        director: 'Jon Watts',
        cast: 'Tom Holland, Benedict Cumberbatch, Zendaya',
        plot: 'Peter\'s identity is revealed, leading to a multiverse adventure with villains from across dimensions.',
        rating: '8.2/10'
    },
    'Spider-Man: Beyond the Spider-Verse': {
        title: 'Spider-Man: Beyond the Spider-Verse',
        year: 2024,
        director: 'TBA',
        cast: 'TBA',
        plot: 'Miles Morales continues his journey across the Spider-Verse in this upcoming adventure.',
        rating: 'TBA'
    }
};

movieButtons.forEach(button => {
    button.addEventListener('click', function() {
        const movieCard = this.closest('.movie-card');
        const movieTitle = movieCard.querySelector('h3').textContent;
        const movieInfo = movieData[movieTitle];
        
        if (movieInfo) {
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <div style="animation: slideDown 0.3s ease;">
                    <h2 style="color: #d32f2f; margin-bottom: 1rem;">${movieInfo.title}</h2>
                    <p><strong>Year:</strong> ${movieInfo.year}</p>
                    <p><strong>Director:</strong> ${movieInfo.director}</p>
                    <p><strong>Cast:</strong> ${movieInfo.cast}</p>
                    <p><strong>Rating:</strong> ${movieInfo.rating}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;"><strong>Plot:</strong> ${movieInfo.plot}</p>
                </div>
            `;
            movieModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// ============================================
// GALLERY MODAL FUNCTIONALITY
// ============================================

const galleryModal = document.getElementById('galleryModal');
const galleryImages = document.querySelectorAll('.gallery-img');
const modalImage = document.getElementById('modalImage');

galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        galleryModal.style.display = 'block';
        modalImage.src = this.src;
        modalImage.alt = this.alt;
        document.body.style.overflow = 'hidden';
    });
});

// ============================================
// CLOSE MODAL FUNCTIONALITY
// ============================================

closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        movieModal.style.display = 'none';
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === movieModal) {
        movieModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === galleryModal) {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        movieModal.style.display = 'none';
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ============================================
// ABILITY CARDS INTERACTION
// ============================================

const abilityCards = document.querySelectorAll('.ability-card');

abilityCards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        showNotification(🕷️ ${title} activated!);
    });

    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f0f0';
    });

    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});

// ============================================
// VILLAIN CARDS INTERACTION
// ============================================

const villainCards = document.querySelectorAll('.villain-card');

villainCards.forEach(card => {
    card.addEventListener('click', function() {
        const villainName = this.querySelector('h3').textContent;
        showNotification(⚠️ ${villainName} spotted! Initiating battle mode...);
    });

    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formInputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    formInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderBottom = '2px solid #d32f2f';
        } else {
            input.style.borderBottom = '2px solid #ffeb3b';
        }
    });
    
    if (isValid) {
        showNotification('✅ Message sent successfully! Thank you for reaching out!');
        this.reset();
        formInputs.forEach(input => {
            input.style.borderBottom = 'none';
        });
    } else {
        showNotification('❌ Please fill in all fields');
    }
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #d32f2f, #1a1a1a);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove notification
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for scroll animation
document.querySelectorAll('.ability-card, .movie-card, .villain-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// DARK MODE TOGGLE (Optional Enhancement)
// ============================================

// Add this for extra interactivity - you can uncomment if needed
// const body = document.body;
// const darkModeToggle = document.createElement('button');
// darkModeToggle.innerHTML = '🌙';
// darkModeToggle.style.cssText = `
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     background: #d32f2f;
//     color: white;
//     border: none;
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     font-size: 1.5rem;
//     cursor: pointer;
//     z-index: 999;
//     transition: all 0.3s ease;
// `;
// document.body.appendChild(darkModeToggle);

// ============================================
// HERO IMAGE PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        const scrollPosition = window.scrollY;
        heroImg.style.transform = translateY(${scrollPosition * 0.5}px);
    }
});

// ============================================
// INTERACTIVE BUTTON RIPPLE EFFECT
// ============================================

function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        if (this.style.position !== 'relative' && this.style.position !== 'absolute') {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        }
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => addRippleEffect(button));

// ============================================
// ADD RIPPLE ANIMATION KEYFRAME
// ============================================

const style = document.createElement('style');
style.innerHTML = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideOutRight {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    showNotification('🕷️ Welcome to Spider-Man\'s world!');
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ============================================
// BONUS: KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification('🏠 Going home...');
    }
    
    // Press 'A' to go to abilities
    if (e.key === 'a' || e.key === 'A') {
        document.querySelector('#abilities').scrollIntoView({ behavior: 'smooth' });
        showNotification('⚡ Loading powers & abilities...');
    }
    
    // Press 'G' to go to gallery
    if (e.key === 'g' || e.key === 'G') {
        document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
        showNotification('🖼️ Opening gallery...');
    }
});

console.log('Spider-Man website loaded! Press H, A, or G for keyboard shortcuts.');