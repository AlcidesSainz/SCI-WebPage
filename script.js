  // Umbral en píxeles a partir del cual aparece el botón
  const scrollThreshold = 300;

  const btnScrollTop = document.getElementById('btnScrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      // Mostrar el botón
      btnScrollTop.classList.add('show');
    } else {
      // Ocultar el botón
      btnScrollTop.classList.remove('show');
    }
  });

  // Al hacer clic, regresar al tope de la página con un scroll suave
  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
