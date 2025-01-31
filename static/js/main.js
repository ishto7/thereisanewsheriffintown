document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function switchSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active-section');
            section.classList.add('hidden-section');
        });

        // Show selected section
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.remove('hidden-section');
        activeSection.classList.add('active-section');

        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Add click handlers to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            switchSection(sectionId);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${sectionId}`);
        });
    });

    // Handle initial load and browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'home';
        switchSection(hash);
    });

    // Initialize correct section based on URL hash
    const initialSection = window.location.hash.slice(1) || 'home';
    switchSection(initialSection);

    // Mobile menu collapse after click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
});
