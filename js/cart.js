const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const track = document.querySelector('.carousel-track');

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: 200, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -200, behavior: 'smooth' });
});
