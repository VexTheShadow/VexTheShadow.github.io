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
// Esconder el modal al hacer click en algún ancla
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function() {
      const modal = bootstrap.Modal.getInstance(document.querySelector('.modal'));
      if (modal) modal.hide();
    });
  });

// Añadir clase 'clicked' al hacer clic en el botón
document.getElementById('menu-trigger').addEventListener('click', function() {
    this.classList.add('clicked');
});

// Eliminar la clase 'clicked' cuando el modal se cierre
const modal = document.getElementById('anchorModal');
modal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('menu-trigger').classList.remove('clicked');
});





const scrollContainers = document.querySelectorAll('.nav-tabs');
const progressContainers = document.querySelectorAll('.progress-container');

scrollContainers.forEach((scrollContainer, index) => {
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  // Seleccionar la barra de progreso correspondiente al contenedor
  const progressBar = progressContainers[index].querySelector('.progress-bar');

  // Actualizar la barra de progreso
  function updateProgressBar() {
    // Calcular el porcentaje de desplazamiento
    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
    
    // Actualizar el ancho de la barra de progreso
    progressBar.style.width = `${scrollPercentage}%`;
  }

  scrollContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  scrollContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.clientX - scrollContainer.offsetLeft;
    const walk = x - startX;
    scrollContainer.scrollLeft = scrollLeft - walk;

    // Actualizar la barra de progreso
    updateProgressBar();
  });

  // Establecer el valor inicial
  updateProgressBar();

});



