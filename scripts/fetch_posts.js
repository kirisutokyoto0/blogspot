document.addEventListener('DOMContentLoaded', () => {
    fetch('fetch_posts.php')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('card-container');
            posts.forEach(post => {
                const cardHTML = `
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <div class="card-header">
                                ${post.author}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.summary}</p>
                                <a href="${post.url}" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div class="card-footer text-body-secondary">
                                ${new Date(post.date_posted).toDateString()}
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error:', error));
});
