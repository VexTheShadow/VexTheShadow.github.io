document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const headerOffset = document.querySelector('.sticky-top').offsetHeight; // Altura del header
        const target = document.querySelector(this.getAttribute('href')); // Selecciona la sección

        const elementPosition = target.getBoundingClientRect().top; // Posición de la sección
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 46; // Ajusta la posición

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});