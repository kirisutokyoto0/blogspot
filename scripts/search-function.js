document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.custom-search-input');
  const cards = document.querySelectorAll('.custom-card');

  searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase().trim();
    filterCards(searchValue);
  });

  document.querySelector('.button-50').addEventListener('click', function () {
    filterCards(searchInput.value.toLowerCase().trim());
  });

  function filterCards(searchValue) {
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const author = card.querySelector('.author').textContent.toLowerCase();
      
      if (title.includes(searchValue) || author.includes(searchValue)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.custom-search-input');
  const aboutSection = document.querySelector('.about');

  // Function to check and toggle visibility
  function toggleAboutVisibility() {
    if (searchInput.value.trim() !== '') {
      aboutSection.style.display = 'none'; // Hide the About section
    } else {
      aboutSection.style.display = 'block'; // Show the About section
    }
  }

  // Add event listeners to the search input
  searchInput.addEventListener('input', toggleAboutVisibility);
  
  // Initially check the visibility when the page loads
  toggleAboutVisibility();
});
