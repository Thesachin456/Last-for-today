// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    initThemeToggle();
    initMobileNavigation();
    initSmoothScrolling();
    initGradeTabSwitching();
    initAnimationsOnScroll();
    initContactForm();
    initLiveClassSchedule();
    initSubjectCards();
    initNavbarScroll();
    initParallaxEffects();
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    // Update icon based on current theme
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add transition effect
        body.style.transition = 'all 0.3s ease-in-out';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Grade Tab Switching
function initGradeTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const subjectCards = document.querySelectorAll('.subject-card');
    
    // Subject data for different grades
    const subjectData = {
        '9': [
            { name: 'Mathematics', desc: 'Algebra, Geometry, Statistics and more', videos: '150+', notes: '50+', icon: 'fas fa-calculator' },
            { name: 'Science', desc: 'Physics, Chemistry, Biology concepts', videos: '200+', notes: '75+', icon: 'fas fa-atom' },
            { name: 'Social Science', desc: 'History, Geography, Civics, Economics', videos: '120+', notes: '60+', icon: 'fas fa-globe' },
            { name: 'English', desc: 'Grammar, Literature, Communication Skills', videos: '100+', notes: '40+', icon: 'fas fa-language' },
            { name: 'Hindi', desc: 'व्याकरण, साहित्य, लेखन कौशल', videos: '80+', notes: '35+', icon: 'fas fa-om' },
            { name: 'Computer Science', desc: 'Programming, IT Skills, Digital Literacy', videos: '90+', notes: '30+', icon: 'fas fa-laptop-code' }
        ],
        '10': [
            { name: 'Mathematics', desc: 'Trigonometry, Coordinate Geometry, Probability', videos: '180+', notes: '65+', icon: 'fas fa-calculator' },
            { name: 'Science', desc: 'Advanced Physics, Chemistry, Biology', videos: '250+', notes: '90+', icon: 'fas fa-atom' },
            { name: 'Social Science', desc: 'Democratic Politics, Economics, Geography', videos: '140+', notes: '70+', icon: 'fas fa-globe' },
            { name: 'English', desc: 'Literature, Writing Skills, Grammar', videos: '120+', notes: '50+', icon: 'fas fa-language' },
            { name: 'Hindi', desc: 'उच्च स्तरीय व्याकरण और साहित्य', videos: '100+', notes: '45+', icon: 'fas fa-om' },
            { name: 'Computer Applications', desc: 'Advanced Programming, Database Management', videos: '110+', notes: '40+', icon: 'fas fa-laptop-code' }
        ],
        '11': [
            { name: 'Mathematics', desc: 'Calculus, Probability, Statistics', videos: '220+', notes: '80+', icon: 'fas fa-calculator' },
            { name: 'Physics', desc: 'Mechanics, Thermodynamics, Waves', videos: '200+', notes: '75+', icon: 'fas fa-atom' },
            { name: 'Chemistry', desc: 'Organic, Inorganic, Physical Chemistry', videos: '190+', notes: '70+', icon: 'fas fa-flask' },
            { name: 'Biology', desc: 'Cell Biology, Genetics, Ecology', videos: '180+', notes: '65+', icon: 'fas fa-dna' },
            { name: 'English', desc: 'Advanced Literature and Communication', videos: '140+', notes: '55+', icon: 'fas fa-language' },
            { name: 'Computer Science', desc: 'Data Structures, Algorithms, OOP', videos: '160+', notes: '60+', icon: 'fas fa-laptop-code' }
        ]
    };
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const grade = this.getAttribute('data-grade');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update subject cards
            updateSubjectCards(grade, subjectData[grade]);
        });
    });
}

function updateSubjectCards(grade, subjects) {
    const subjectsGrid = document.getElementById('subjects-grid');
    
    // Add fade out animation
    subjectsGrid.style.opacity = '0';
    subjectsGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Clear existing cards
        subjectsGrid.innerHTML = '';
        
        // Create new cards
        subjects.forEach((subject, index) => {
            const card = createSubjectCard(subject, grade);
            card.style.animationDelay = `${index * 0.1}s`;
            subjectsGrid.appendChild(card);
        });
        
        // Add fade in animation
        subjectsGrid.style.opacity = '1';
        subjectsGrid.style.transform = 'translateY(0)';
    }, 200);
}

function createSubjectCard(subject, grade) {
    const card = document.createElement('div');
    card.className = 'subject-card fade-in';
    card.setAttribute('data-grade', grade);
    
    card.innerHTML = `
        <div class="card-icon">
            <i class="${subject.icon}"></i>
        </div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
        <div class="card-stats">
            <span><i class="fas fa-video"></i> ${subject.videos} Videos</span>
            <span><i class="fas fa-file-alt"></i> ${subject.notes} Notes</span>
        </div>
        <button class="card-btn">Explore Now</button>
    `;
    
    // Add click event to explore button
    const exploreBtn = card.querySelector('.card-btn');
    exploreBtn.addEventListener('click', function() {
        showSubjectModal(subject, grade);
    });
    
    return card;
}

function showSubjectModal(subject, grade) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${subject.name} - Class ${grade}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Explore comprehensive ${subject.name} content for Class ${grade}.</p>
                <div class="modal-stats">
                    <div class="stat-item">
                        <i class="fas fa-video"></i>
                        <span>${subject.videos} Video Lectures</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-file-alt"></i>
                        <span>${subject.notes} Study Notes</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-tasks"></i>
                        <span>Practice Tests</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary">Start Learning</button>
                    <button class="btn btn-secondary">View Syllabus</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add modal styles if not already added
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            }
            
            .modal-content {
                background: var(--bg-card);
                border-radius: var(--radius-xl);
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                animation: slideInUp 0.3s ease-out;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-xl);
                border-bottom: 1px solid var(--border-light);
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-muted);
                transition: color 0.3s ease;
            }
            
            .modal-close:hover {
                color: var(--text-primary);
            }
            
            .modal-body {
                padding: var(--space-xl);
            }
            
            .modal-stats {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
                margin: var(--space-xl) 0;
            }
            
            .stat-item {
                display: flex;
                align-items: center;
                gap: var(--space-md);
                padding: var(--space-md);
                background: var(--bg-secondary);
                border-radius: var(--radius-md);
            }
            
            .modal-actions {
                display: flex;
                gap: var(--space-md);
                margin-top: var(--space-xl);
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

// Animations on Scroll
function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.subject-card, .feature-card, .schedule-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation styles
    if (!document.querySelector('#scroll-animations')) {
        const animationStyles = document.createElement('style');
        animationStyles.id = 'scroll-animations';
        animationStyles.textContent = `
            .subject-card, .feature-card, .schedule-card, .contact-item {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(animationStyles);
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-card);
                color: var(--text-primary);
                padding: var(--space-md) var(--space-lg);
                border-radius: var(--radius-md);
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease-out;
                border-left: 4px solid var(--primary-color);
            }
            
            .notification.notification-success {
                border-left-color: var(--success-color);
            }
            
            .notification.notification-error {
                border-left-color: var(--error-color);
            }
            
            .notification.show {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(notificationStyles);
    }
}

// Live Class Schedule
function initLiveClassSchedule() {
    updateLiveClassTimes();
    
    // Update times every minute
    setInterval(updateLiveClassTimes, 60000);
    
    // Add click handlers for join/notify buttons
    const joinBtns = document.querySelectorAll('.join-btn');
    const notifyBtns = document.querySelectorAll('.notify-btn');
    
    joinBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Joining live class...', 'info');
            // In a real app, this would redirect to the live class
        });
    });
    
    notifyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = 'Reminder Set ✓';
            this.disabled = true;
            showNotification('Reminder set! We\'ll notify you before the class starts.', 'success');
        });
    });
}

function updateLiveClassTimes() {
    const scheduleCards = document.querySelectorAll('.schedule-card');
    const now = new Date();
    
    scheduleCards.forEach(card => {
        const timeElement = card.querySelector('.schedule-time');
        if (timeElement) {
            // This would typically fetch real schedule data from an API
            // For demo purposes, we'll just update the display
        }
    });
}

// Subject Cards Interaction
function initSubjectCards() {
    const subjectCards = document.querySelectorAll('.subject-card');
    
    subjectCards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click event to card (not just button)
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('card-btn')) {
                const btn = this.querySelector('.card-btn');
                if (btn) btn.click();
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add scrolled navbar styles
    if (!document.querySelector('#navbar-scroll-styles')) {
        const navbarStyles = document.createElement('style');
        navbarStyles.id = 'navbar-scroll-styles';
        navbarStyles.textContent = `
            .navbar {
                transition: all 0.3s ease-in-out;
            }
            
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                box-shadow: var(--shadow-md);
            }
            
            [data-theme="dark"] .navbar.scrolled {
                background: rgba(15, 23, 42, 0.95);
            }
        `;
        document.head.appendChild(navbarStyles);
    }
}

// Parallax Effects
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add mobile-specific styles
if (!document.querySelector('#mobile-styles')) {
    const mobileStyles = document.createElement('style');
    mobileStyles.id = 'mobile-styles';
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: var(--bg-primary);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: var(--space-2xl);
                transition: left 0.3s ease-in-out;
                border-top: 1px solid var(--border-light);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-link {
                padding: var(--space-lg) var(--space-xl);
                font-size: 1.125rem;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid var(--border-light);
            }
            
            .hero-stats {
                flex-wrap: wrap;
                gap: var(--space-lg);
            }
            
            .modal-content {
                width: 95%;
                margin: var(--space-md);
            }
            
            .modal-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(mobileStyles);
}

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add error handling for failed resource loads
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="%23999">Image</text></svg>';
    }
}, true);

// Console welcome message
console.log('%c🎓 Welcome to Rangreja! 🎓', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ for students', 'color: #ec4899; font-size: 14px;');