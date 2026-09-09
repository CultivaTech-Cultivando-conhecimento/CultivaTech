document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], main > div[id]');

    const handleHeaderScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    function openMobileMenu() {
        navMenu.classList.add('active');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    });

    const handleScrollspy = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-list a[href*="${sectionId}"]`);

            if (correspondingNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingNavLink.classList.add('active');
                } else {
                    correspondingNavLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScrollspy);
});
