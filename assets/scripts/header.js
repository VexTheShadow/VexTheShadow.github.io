document.addEventListener("DOMContentLoaded", function () {
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
});
document.addEventListener("DOMContentLoaded", function () {
    // Esconder el modal al hacer click en algún ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function() {
        const modal = bootstrap.Modal.getInstance(document.querySelector('.modal'));
        if (modal) modal.hide();
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Añadir clase 'clicked' al hacer clic en el botón
    document.getElementById('menu-trigger').addEventListener('click', function() {
        this.classList.add('clicked');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Eliminar la clase 'clicked' cuando el modal se cierre
    const modal = document.getElementById('anchorModal');
    modal.addEventListener('hidden.bs.modal', function () {
        document.getElementById('menu-trigger').classList.remove('clicked');
    });
});
