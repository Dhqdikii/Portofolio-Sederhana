/**
 * Portfolio Website - Main JavaScript
 * =====================================
 */

// Default Profile Data
const defaultProfile = {
    name: '',
    title: 'Student',
    location: 'Indonesia',
    bio: 'Hello! My name is Dhicky Haryadi Supriyono, an Informatics Engineering student at Universitas Esa Unggul with a strong interest in information technology,data analyst, software development, and project management in digital systems. I am passionate about organizing ideas, managing processes, and turning complex technical concepts into efficient and practical solutions.',
    photo: 'Figure/Dhicky.jpeg'
};
const socialLinks = {
    github: 'https://github.com/Dhqdikii',
    instagram: 'https://www.instagram.com/dhs_dq?igsh=bWRsMzl5b3RzMWRt',
    linkedin: 'https://www.linkedin.com/in/dhicky-haryadi-supriyono-b504203aa?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'supriyonodhickyharyadi@com'
};

// Load Profile from localStorage or use default
function loadProfile() {
    const saved = localStorage.getItem('portfolioProfile');
    if (saved) {
        const profile = JSON.parse(saved);
        // Always use default photo
        profile.photo = 'Figure/Dhicky.jpeg';
        return profile;
    }
    return defaultProfile;
}

// Save Profile to localStorage
function saveProfile(profile) {
    localStorage.setItem('portfolioProfile', JSON.stringify(profile));
}

// Update all profile elements
function updateProfileDisplay(profile) {
    // Hero section
    document.getElementById('heroTitle').textContent = profile.title;
    document.getElementById('heroImage').src = profile.photo;
    
    // About section
    document.getElementById('aboutTitle').textContent = profile.title;
    document.getElementById('aboutLocation').textContent = profile.location;
    document.getElementById('aboutBio').textContent = profile.bio;
    document.getElementById('aboutImage').src = profile.photo;
    
    // Update document title
    document.title = `Portfolio - Student`;
}

// Theme Management
function loadTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolioTheme', theme);
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Typing Animation
const typingTexts = ['Data Analyst', 'Web Developer', 'Software Project Manager'];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById('typingText');
    const currentText = typingTexts[typingIndex];
    
    if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Navigation Scroll Effect
function handleNavScroll() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll Reveal Animation
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileToggle = document.getElementById('mobileToggle');
    
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Clear localStorage to remove old saved data
    localStorage.clear();
    
    // Load theme
    loadTheme();
    
    // Load and display profile
    const profile = loadProfile();
    updateProfileDisplay(profile);
    
    // Start typing animation
    typeEffect();
    
    // Event Listeners
    window.addEventListener('scroll', () => {
        handleNavScroll();
        handleScrollReveal();
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    document.getElementById('mobileToggle').addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
            document.getElementById('mobileToggle').classList.remove('active');
        });
    });
    
    // Initial scroll reveal check
    handleScrollReveal();
    handleNavScroll();
});

