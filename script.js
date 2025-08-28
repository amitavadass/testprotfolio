document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Text and Image Slider
    const textElements = document.querySelectorAll('.slide-text');
    const imageElements = document.querySelectorAll('.hero-image');
    let currentIndex = 0;

    // Show the first text and image initially
    if (textElements.length > 0 && imageElements.length > 0) {
        textElements[0].classList.add('active-text');
        imageElements[0].classList.add('active-image');

        function swapContent() {
            const currentText = textElements[currentIndex];
            const currentImage = imageElements[currentIndex];

            currentText.classList.remove('active-text');
            currentImage.classList.remove('active-image');

            currentIndex = (currentIndex + 1) % textElements.length;

            const nextText = textElements[currentIndex];
            const nextImage = imageElements[currentIndex];

            nextText.classList.add('active-text');
            nextImage.classList.add('active-image');
        }

        setInterval(swapContent, 2000);
    }


    // Service Wrapper Click Handler
    const serviceWrappers = document.querySelectorAll('.service-wrapper');
    serviceWrappers.forEach(wrapper => {
        const whatsappBtn = wrapper.querySelector('.whatsapp-btn');
        whatsappBtn.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });

    // Reviews Carousel Animation Control
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    if (reviewsCarousel) {
        reviewsCarousel.addEventListener('mouseenter', () => {
            reviewsCarousel.style.animationPlayState = 'paused';
        });

        reviewsCarousel.addEventListener('mouseleave', () => {
            reviewsCarousel.style.animationPlayState = 'running';
        });
    }
  
    // --- NEW MOBILE MENU SCRIPT ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const isActive = mobileMenu.classList.contains('active');

        if (isActive) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a menu item
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
});
