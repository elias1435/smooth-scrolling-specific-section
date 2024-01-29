document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to section with a top offset for all links with the specified selector
    const links = document.querySelectorAll('a[href="#become-introducer"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const section = document.getElementById('become-introducer');

            // Get the top position of the section
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            // Scroll options - smooth behavior with a top offset of 100 pixels
            window.scrollTo({
                top: sectionTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
