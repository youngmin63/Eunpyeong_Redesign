// Carousel functionality for services
document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.querySelector('.services-container');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (prevBtn && nextBtn && servicesContainer) {
        prevBtn.addEventListener('click', () => {
            servicesContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            servicesContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIconBtn = document.querySelector('.search-icon-btn');

    const handleSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            // 검색 기능 구현 (필요시 수정)
            console.log('검색어:', query);
            alert(`"${query}" 검색 기능은 준비 중입니다.`);
        }
    };

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    if (searchIconBtn) {
        searchIconBtn.addEventListener('click', handleSearch);
    }

    // Hamburger menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // News filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // 필터 기능 구현 (필요시 수정)
            console.log('필터 선택:', btn.textContent);
        });
    });
});

