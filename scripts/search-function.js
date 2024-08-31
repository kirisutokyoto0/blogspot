document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.custom-search-input');
    const suggestionBox = document.getElementById('suggestion-box');
    const cards = document.querySelectorAll('.custom-card');

    // Create an array of titles
    const titles = Array.from(cards).map(card => card.getAttribute('data-title'));

    // Show suggestions as user types
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionBox.innerHTML = '';
        if (query) {
            const suggestions = titles.filter(title => title.toLowerCase().includes(query));
            suggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('a');
                suggestionItem.href = '#';
                suggestionItem.classList.add('list-group-item', 'list-group-item-action');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionBox.innerHTML = '';
                    filterCards(query);
                });
                suggestionBox.appendChild(suggestionItem);
            });
        }
    });

    // Filter cards based on search input
    const filterCards = (query) => {
        cards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const author = card.getAttribute('data-author').toLowerCase();
            if (title.includes(query) || author.includes(query)) {
                card.style.display = 'block';  // Show the card
            } else {
                card.style.display = 'none';  // Hide the card
            }
        });
    };
});
