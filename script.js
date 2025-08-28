document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.slide-text');
    const imageElements = document.querySelectorAll('.hero-image');
    let currentIndex = 0;

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        navbar.classList.toggle('nav-active');
    });

    // Show the first text and image initially
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

    const serviceWrappers = document.querySelectorAll('.service-wrapper');
    serviceWrappers.forEach(wrapper => {
        const whatsappBtn = wrapper.querySelector('.whatsapp-btn');
        whatsappBtn.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewsCarousel = document.querySelector('.reviews-carousel');

    reviewsCarousel.addEventListener('mouseenter', () => {
        reviewsCarousel.style.animationPlayState = 'paused';
    });

    reviewsCarousel.addEventListener('mouseleave', () => {
        reviewsCarousel.style.animationPlayState = 'running';
    });
});
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });