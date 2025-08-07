// Mobile-First JavaScript for Annie LeBlanc Portfolio

// Mobile Navigation Toggle
function initMobileNavigation() {
    // Create hamburger menu if it doesn't exist
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    if (!document.querySelector('.hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        navContainer.appendChild(hamburger);
        
        // Add click event to hamburger
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on links
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
    }
}

// Share functionality
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'Annie LeBlanc - Contemporary Artist',
            text: 'Check out this amazing contemporary art collection',
            url: window.location.href
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

function fallbackShare() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link copied to clipboard!');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Link copied to clipboard!');
        });
    }
}

function openSocial(platform) {
    const urls = {
        instagram: '#' // Placeholder - update with actual Instagram URL
    };
    
    if (urls[platform]) {
        if (urls[platform] === '#') {
            showNotification('Instagram link coming soon!');
        } else {
            window.open(urls[platform], '_blank');
        }
    }
}

// Notification system
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff0080;
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(255, 0, 128, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Enhanced form submission handler
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        const requiredFields = ['name', 'email', 'subject', 'message'];
        const emptyFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
        
        if (emptyFields.length > 0) {
            showNotification('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'SENDING...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Scroll effects for navigation
function initScrollEffects() {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navigation background based on scroll
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
            nav.style.backdropFilter = 'blur(15px)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show navigation on mobile scroll (optional enhancement)
        if (window.innerWidth < 768) {
            if (currentScroll > lastScrollTop && currentScroll > 200) {
                // Scrolling down
                nav.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                nav.style.transform = 'translateY(0)';
            }
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
}

// Image lazy loading for better performance
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
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
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Handle image loading errors
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder for failed images
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: ${this.style.height || '250px'};
                background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666;
                font-size: 0.9rem;
                letter-spacing: 1px;
                border-radius: inherit;
            `;
            placeholder.textContent = 'IMAGE UNAVAILABLE';
            
            if (this.parentNode) {
                this.parentNode.replaceChild(placeholder, this);
            }
        });
    });
}

// Touch gesture handling for mobile
function initTouchGestures() {
    let startX = null;
    let startY = null;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = startX - currentX;
        const diffY = startY - currentY;
        
        // Prevent horizontal scrolling if vertical scroll is more significant
        if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('touchend', () => {
        startX = null;
        startY = null;
    });
}

// Performance optimization: Debounce resize events
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

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Core mobile functionality
    initMobileNavigation();
    initContactForm();
    initScrollEffects();
    
    // Performance enhancements
    initLazyLoading();
    initImageErrorHandling();
    initTouchGestures();
    
    // Handle resize events with debouncing
    const debouncedResize = debounce(() => {
        // Recalculate layouts if needed
        console.log('Window resized');
    }, 250);
    
    window.addEventListener('resize', debouncedResize);
    
    // Add smooth scrolling for anchor links
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
    
    console.log('Mobile-first portfolio initialized successfully!');
});

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        shareLink,
        openSocial,
        toggleMobileMenu,
        closeMobileMenu,
        showNotification
    };
}