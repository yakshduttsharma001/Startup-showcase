// Search functionality
const search = document.getElementById('search');
const cards = document.querySelectorAll('.card');

search.addEventListener('keyup', () => {
  const value = search.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.dataset.name.toLowerCase().includes(value) ? 'block' : 'none';
  });
});

// Form submission (just alert for now)
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your idea has been submitted.");
  form.reset();
});
