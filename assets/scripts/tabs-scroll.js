
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
