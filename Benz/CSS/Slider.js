let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
const textBox = document.querySelector('.text');

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  textBox.textContent = slides[index].getAttribute('data-text');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
}

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    if (index === currentIndex) {
      nextSlide();
    } else {
      currentIndex = index;
      showSlide(currentIndex);
    }
  });
});

setInterval(nextSlide, 10000); // Change slide every 10 seconds

// Initial display
showSlide(currentIndex);
