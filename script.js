document.addEventListener('DOMContentLoaded', () => {
    // ===== HERO SLIDER =====
    const textElements = document.querySelectorAll('.slide-text');
    const imageElements = document.querySelectorAll('.hero-image');
    let currentIndex = 0;

    // Show the first text and image initially
    if (textElements.length > 0 && imageElements.length > 0) {
        textElements[0].classList.add('active-text');
        imageElements[0].classList.add('active-image');
    }

    function swapContent() {
        textElements[currentIndex].classList.remove('active-text');
        imageElements[currentIndex].classList.remove('active-image');

        currentIndex = (currentIndex + 1) % textElements.length;

        textElements[currentIndex].classList.add('active-text');
        imageElements[currentIndex].classList.add('active-image');
    }

    setInterval(swapContent, 2000);

    // ===== SERVICE CARDS =====
    const serviceWrappers = document.querySelectorAll('.service-wrapper');
    serviceWrappers.forEach(wrapper => {
        const whatsappBtn = wrapper.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // prevent hover effect from interfering
            });
        }
    });

    // ===== REVIEWS CAROUSEL =====
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    if (reviewsCarousel) {
        reviewsCarousel.addEventListener('mouseenter', () => {
            reviewsCarousel.style.animationPlayState = 'paused';
        });
        reviewsCarousel.addEventListener('mouseleave', () => {
            reviewsCarousel.style.animationPlayState = 'running';
        });
    }

    // ===== MOBILE MENU =====
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("open"); 
            // CSS handles the "display:flex / none"
        });
    }
});
