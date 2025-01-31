// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                    loadPageContent(targetId);
                }
            });
        });
    });

    // Load initial page
    loadPageContent('home');
});

function loadPageContent(pageId) {
    const pageElement = document.getElementById(pageId);
    if (!pageElement) return;

    switch(pageId) {
        case 'home':
            pageElement.innerHTML = generateHomePage();
            break;
        case 'jokes':
            pageElement.innerHTML = generateJokesPage();
            break;
        case 'sayings':
            pageElement.innerHTML = generateSayingsPage();
            break;
        case 'social':
            pageElement.innerHTML = generateSocialPage();
            break;
    }
}

function generateHomePage() {
    return `
        <div class="home-container">
            <header class="text-center space-y-4">
                <h1 class="text-4xl">There's a New Sheriff in Town</h1>
                <p class="text-lg">Exploring the rich history and cultural impact of this iconic phrase</p>
            </header>
            <div class="cards-container">
                ${historicalContent.map(content => `
                    <div class="card">
                        <span class="badge-small">${content.category}</span>
                        <h2 class="card-title">${content.title}</h2>
                        <p>${content.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateJokesPage() {
    return `
        <div class="jokes-container">
            <header class="text-center space-y-4">
                <h1 class="text-4xl">Sheriff Humor Corner</h1>
                <p class="text-lg">A collection of witty jokes about new leadership and change</p>
            </header>
            <div class="cards-container">
                ${jokes.map((joke, index) => `
                    <div class="card">
                        <span class="badge-small">Joke #${index + 1}</span>
                        <p class="joke-setup">${joke.setup}</p>
                        <p class="joke-punchline">${joke.punchline}</p>
                        <div class="tags">
                            ${joke.tags.map(tag => `<span class="badge-small">#${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateSayingsPage() {
    return `
        <div class="sayings-container">
            ${sayings.map(saying => `
                <div class="card">
                    <p class="saying-quote">"${saying.quote}"</p>
                    <span class="badge-small">${saying.origin}</span>
                    <p>${saying.meaning}</p>
                    <p>${saying.context}</p>
                    <div class="tags">
                        ${saying.variants.map(variant => `<span class="badge-small">${variant}</span>`).join('')}
                    </div>
                    <div class="regions">
                        ${saying.regions.map(region => `<span class="badge-small">${region}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateSocialPage() {
    return `
        <div class="social-container">
            ${socialPosts.map(platform => `
                <div class="card">
                    <div class="platform-header">
                        <span class="badge-small">${platform.platform}</span>
                    </div>
                    <div class="posts">
                        ${platform.posts.map(post => `
                            <div class="post">
                                <p class="author">${post.author}</p>
                                <p class="content">${post.content}</p>
                                <div class="post-meta">
                                    <span>${post.date}</span>
                                    ${post.likes ? `<span>❤️ ${post.likes}</span>` : ''}
                                    ${post.reactions ? `<span>👍 ${post.reactions}</span>` : ''}
                                    ${post.upvotes ? `<span>⬆️ ${post.upvotes}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
