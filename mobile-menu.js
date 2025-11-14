// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');

    if (!hamburger || !mobileSidebar || !mobileOverlay) return;

    // Toggle menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileSidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
    }

    // Open/close menu
    hamburger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const mobileLinks = mobileSidebar.querySelectorAll('.nav-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
