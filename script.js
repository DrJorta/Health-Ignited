// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('open');
    
    if (mobileMenu.classList.contains('open')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Form submissions
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('contact-firstName').value;
            const lastName = document.getElementById('contact-lastName').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            if (firstName && lastName && email && message) {
                // Show success message
                const button = this.querySelector('button[type="submit"]');
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i data-feather="check"></i><span>Message Sent!</span>';
                feather.replace();
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    this.reset();
                    button.innerHTML = originalHTML;
                    feather.replace();
                }, 3000);
            }
        });
    }
}

function initializeBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('booking-firstName').value;
            const lastName = document.getElementById('booking-lastName').value;
            const email = document.getElementById('booking-email').value;
            const service = document.getElementById('booking-service').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            
            if (firstName && lastName && email && service && date && time) {
                // Show success message
                const button = this.querySelector('button[type="submit"]');
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i data-feather="check"></i><span>Booking Confirmed!</span>';
                feather.replace();
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    this.reset();
                    button.innerHTML = originalHTML;
                    feather.replace();
                }, 3000);
            }
        });
    }
}

// Initialize Feather icons and forms when page loads
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    initializeContactForm();
    initializeBookingForm();
});