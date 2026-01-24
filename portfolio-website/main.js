// Professional Experience Modal Functions
function openExperiencePage() {
    const modal = document.getElementById('experienceModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeExperiencePage() {
    const modal = document.getElementById('experienceModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the modal-content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('experienceModal');
    if (e.target === modal) {
        closeExperiencePage();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeExperiencePage();
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hamburger menu toggle - Removed (no longer needed)

// Typing animation for hero section
const roles = [
    "Software Engineer",
    ".NET Developer",
    "SQL Developer",
    "Backend Developer",
    "Flutter Developer",
    "NodeJS Developer",
    "Data Science and AI Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTextElement;

function typeRole() {
    if (!typedTextElement) {
        typedTextElement = document.getElementById('typed-text');
        if (!typedTextElement) {
            setTimeout(typeRole, 100);
            return;
        }
    }

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next role
    }

    setTimeout(typeRole, typeSpeed);
}

// Start typing animation when content is visible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeRole);
} else {
    typeRole();
}
