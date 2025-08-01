function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'Annie LeBlanc - Contemporary Artist',
            text: 'Check out this amazing contemporary art collection',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

function openSocial(platform) {
    const urls = {
        instagram: '#' // Placeholder - update with actual Instagram URL
    };
    
    if (urls[platform]) {
        if (urls[platform] === '#') {
            alert('Instagram link coming soon!');
        } else {
            window.open(urls[platform], '_blank');
        }
    }
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }
});

// Add subtle scroll effects
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});