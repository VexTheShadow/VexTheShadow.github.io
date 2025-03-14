document.addEventListener("DOMContentLoaded", function () {
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
      const scrollPercentage = (scrollContainer.scrollWidth === scrollContainer.clientWidth) 
        ? 100 
        : (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
      
      // Actualizar el ancho de la barra de progreso
      progressBar.style.width = `${scrollPercentage}%`;
    }

    // Eventos de toque
    scrollContainer.addEventListener('touchstart', (e) => {
      isMouseDown = true;
      startX = e.touches[0].clientX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('touchend', () => {
      isMouseDown = false;
    });

    scrollContainer.addEventListener('touchmove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();  // Prevenir el comportamiento por defecto

      const x = e.touches[0].clientX - scrollContainer.offsetLeft;
      const walk = x - startX;
      scrollContainer.scrollLeft = scrollLeft - walk;

      // Actualizar la barra de progreso
      updateProgressBar();
    });

    // Eventos de mouse
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
});

// Sombras para indicar scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainers = document.querySelectorAll(".nav-tabs");

  scrollContainers.forEach((container) => {
    function updateMask() {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      if (scrollLeft === 0) {
        // Está al inicio
        container.classList.remove("scroll-left", "scroll-both");
        container.classList.add("scroll-right");
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        // Está al final
        container.classList.remove("scroll-right", "scroll-both");
        container.classList.add("scroll-left");
      } else {
        // Hay scroll en ambos lados
        container.classList.remove("scroll-left", "scroll-right");
        container.classList.add("scroll-both");
      }
    }
    // Verificar en carga, redimensionar y hacer scroll
    updateMask();
    window.addEventListener("resize", updateMask);
    container.addEventListener("scroll", updateMask);
  });
});

