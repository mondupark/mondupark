// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');

    if (!hamburger || !mobileSidebar || !mobileOverlay) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Toggle menu
    function toggleMenu(e) {
        if (e) e.preventDefault();
        hamburger.classList.toggle('active');
        mobileSidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        if (mobileSidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Open/close menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu(e);
    });

    mobileOverlay.addEventListener('click', toggleMenu);

    // Close button in sidebar
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu(e);
        });
    }

    // Close menu when clicking a link
    const mobileLinks = mobileSidebar.querySelectorAll('.nav-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
});
