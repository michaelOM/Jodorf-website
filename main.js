document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.about');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight / 1.2) {
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('about', revealOnScroll);
    revealOnScroll(); // Check for initial reveal when the page loads
});
