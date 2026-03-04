// Initialisation AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scroll pour les ancres (si besoin)
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
