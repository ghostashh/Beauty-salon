/* ============================================
   JASH BEAUTY - JavaScript Functionality
   ============================================ */

// Services Data
const servicesData = [
    {
        category: 'hair',
        name: 'Hair Cutting',
        price: '₹349',
        duration: '30 mins',
        description: 'Professional haircut with expert styling'
    },
    {
        category: 'hair',
        name: 'Hair Coloring',
        price: '₹2,499',
        duration: '2 hours',
        description: 'Premium color treatment with professional finish'
    },
    {
        category: 'hair',
        name: 'Hair Smoothening',
        price: '₹4,999',
        duration: '3 hours',
        description: 'Keratin treatment for smooth, silky hair'
    },
    {
        category: 'hair',
        name: 'Hair Spa',
        price: '₹1,499',
        duration: '1.5 hours',
        description: 'Intensive moisture treatment and massage'
    },
    {
        category: 'skin',
        name: 'Facial',
        price: '₹1,199',
        duration: '1 hour',
        description: 'Deep cleansing and rejuvenating facial'
    },
    {
        category: 'skin',
        name: 'Chemical Peel',
        price: '₹2,499',
        duration: '1.5 hours',
        description: 'Advanced skin renewal treatment'
    },
    {
        category: 'skin',
        name: 'HydraFacial',
        price: '₹3,499',
        duration: '1 hour',
        description: 'Hydrating and brightening facial'
    },
    {
        category: 'skin',
        name: 'Threading',
        price: '₹299',
        duration: '20 mins',
        description: 'Precise and gentle hair removal'
    },
    {
        category: 'nails',
        name: 'Manicure',
        price: '₹499',
        duration: '45 mins',
        description: 'Complete nail care and polish'
    },
    {
        category: 'nails',
        name: 'Pedicure',
        price: '₹599',
        duration: '1 hour',
        description: 'Relaxing foot care treatment'
    },
    {
        category: 'nails',
        name: 'Gel Nails',
        price: '₹1,299',
        duration: '1 hour',
        description: 'Long-lasting gel manicure'
    },
    {
        category: 'nails',
        name: 'Nail Art',
        price: '₹799',
        duration: '30 mins',
        description: 'Creative custom nail design'
    },
    {
        category: 'bridal',
        name: 'Bridal Makeup',
        price: '₹4,999',
        duration: '2 hours',
        description: 'Complete bridal look with HD makeup'
    },
    {
        category: 'bridal',
        name: 'Bridal Hair',
        price: '₹3,499',
        duration: '1.5 hours',
        description: 'Elegant bridal hairstyle'
    },
    {
        category: 'bridal',
        name: 'Pre-Wedding Glow',
        price: '₹6,999',
        duration: '3 hours',
        description: 'Complete facial and skin preparation'
    }
];

// Gallery Data
const galleryData = [
    { url: 'https://images.unsplash.com/photo-1552520514-dba8b36ea6a7?w=400&h=400&fit=crop', title: 'Hair Styling', category: 'Hair Transformation' },
    { url: 'https://images.unsplash.com/photo-1596524430413-183e170e8643?w=400&h=400&fit=crop', title: 'Bridal Look', category: 'Complete Makeover' },
    { url: 'https://images.unsplash.com/photo-1570545886519-45ec66dd5eda?w=400&h=400&fit=crop', title: 'Nail Art', category: 'Creative Design' },
    { url: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=400&fit=crop', title: 'Skincare', category: 'Radiant Glow' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', title: 'Professional Styling', category: 'Expert Care' },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop', title: 'Color Treatment', category: 'Vibrant Shades' },
    { url: 'https://images.unsplash.com/photo-1539003436989-61a20db68210?w=400&h=400&fit=crop', title: 'Facial Treatment', category: 'Skin Perfection' },
    { url: 'https://images.unsplash.com/photo-1578926078328-123643504340?w=400&h=400&fit=crop', title: 'Makeup Artistry', category: 'Beautiful You' },
    { url: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&h=400&fit=crop', title: 'Hair Care', category: 'Healthy Locks' }
];

// Testimonials Data
const testimonialsData = [
    {
        name: 'Priya Kapoor',
        text: 'Amazing transformation! The team is so professional and caring. I felt like royalty in their salon. Highly recommended!',
        rating: 5
    },
    {
        name: 'Anjali Verma',
        text: 'Best bridal makeover ever! My wedding day was absolutely perfect thanks to their expertise and attention to detail.',
        rating: 5
    },
    {
        name: 'Neha Desai',
        text: 'The hair spa treatment was incredibly relaxing. My hair has never felt better. Will definitely be coming back!',
        rating: 5
    },
    {
        name: 'Meera Singh',
        text: 'Professional, talented, and so welcoming. The salon ambiance is truly luxurious. Worth every penny!',
        rating: 5
    },
    {
        name: 'Kavya Reddy',
        text: 'Changed my entire look with their expert styling. The results exceeded my expectations. Thank you Jash Beauty!',
        rating: 5
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const floatingBtn = document.getElementById('floatingBtn');
const bookBtn = document.getElementById('bookBtn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const tabBtns = document.querySelectorAll('.tab-btn');
const servicesGrid = document.getElementById('servicesGrid');
const galleryGrid = document.getElementById('galleryGrid');
const testimonialsCarousel = document.getElementById('testimonialsCarousel');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');

// ============ MOBILE MENU ============
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============ BOOKING MODAL ============
function openBooking() {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

bookBtn.addEventListener('click', openBooking);
floatingBtn.addEventListener('click', openBooking);
closeModal.addEventListener('click', closeBooking);

bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBooking();
    }
});

// ============ SCROLL TO BOOKING ============
function scrollToBooking() {
    openBooking();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ RENDER SERVICES ============
function renderServices(category = 'all') {
    servicesGrid.innerHTML = '';
    
    const filteredServices = category === 'all' 
        ? servicesData 
        : servicesData.filter(service => service.category === category);
    
    filteredServices.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;
        serviceCard.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-price">${service.price}</div>
            <span class="service-duration">⏱️ ${service.duration}</span>
            <div style="margin-top: 1.5rem;">
                <button class="btn btn-primary" onclick="scrollToBooking()">Book Now</button>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// ============ SERVICE FILTER TABS ============
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderServices(category);
    });
});

// ============ RENDER GALLERY ============
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        galleryItem.innerHTML = `
            <img src="${item.url}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="overlay-text">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// ============ RENDER TESTIMONIALS ============
function renderTestimonials() {
    testimonialsCarousel.innerHTML = '';
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card' + (index === 0 ? ' active-slide' : '');
        testimonialCard.style.animationDelay = `${index * 0.1}s`;
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialCard.innerHTML = `
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">${testimonial.name}</p>
            <p class="testimonial-role">Verified Client</p>
        `;
        testimonialsCarousel.appendChild(testimonialCard);
    });
}

// ============ TESTIMONIALS CAROUSEL ============
let currentTestimonial = 0;

prevTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
    updateTestimonialSlide();
});

nextTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
    updateTestimonialSlide();
});

function updateTestimonialSlide() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        if (index === currentTestimonial) {
            card.classList.add('active-slide');
        } else {
            card.classList.remove('active-slide');
        }
    });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    renderServices('all');
    renderGallery();
    renderTestimonials();
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ============ ANIMATION ON SCROLL ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, testimonial cards, etc.
window.addEventListener('load', () => {
    document.querySelectorAll('.service-card, .gallery-item, .highlight-card').forEach(el => {
        observer.observe(el);
    });
});

// ============ LAZY LOADING IMAGES ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ============ PRINT CURRENT YEAR IN FOOTER ============
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footers = document.querySelectorAll('.footer-bottom p');
    footers.forEach(footer => {
        footer.textContent = footer.textContent.replace('2024', year);
    });
});

// ============ FORM VALIDATION & SUBMISSION ============
// (Optional: if you add a contact form later)

// ============ WHATSAPP INTEGRATION ============
function openWhatsApp() {
    const message = "Hi! I'm interested in booking a service at Jash Beauty.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
}

// ============ ACCESSIBILITY ============
// Add skip to main content link functionality
const skipLink = document.querySelector('[href="#main"]');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView();
        }
    });
}

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape') {
        closeBooking();
    }
});

console.log('✨ Jash Beauty website loaded successfully!');
