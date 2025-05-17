function moverCarrusel(btn, dir) {
  const carrusel = btn.closest('.carrusel');
  const slides = carrusel.querySelectorAll('.slide');
  let index = [...slides].findIndex(slide => slide.classList.contains('active'));

  slides[index].classList.remove('active');
  index = (index + dir + slides.length) % slides.length;
  slides[index].classList.add('active');
}
