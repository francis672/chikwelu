const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuButton.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
}
const tripForm = document.querySelector('#trip-form');
if (tripForm) {
  tripForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    document.querySelector('#form-message').textContent =
      `Thanks, ${name}! Your trip idea is ready to be connected to a real booking system.`;
    tripForm.reset();
  });
}
