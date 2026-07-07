document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Mobile Navigation Toggle
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('nav-active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('nav-active');
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('nav-active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('nav-active');
                navToggle.focus();
            }
        });
    }

    /* ==========================================================================
       Rotating Hero Card
       ========================================================================== */
    const carImage = document.getElementById('hero-car-image');
    const carName = document.getElementById('hero-car-name');
    const carPR = document.getElementById('hero-car-pr');
    const carRarity = document.getElementById('hero-car-rarity');
    const carPrice = document.getElementById('hero-car-price');
    
    // Check if we are on the page with the hero card
    if (carImage && carName && carPR && carRarity) {
        const cars = [
            {
                image: 'assets/images/revuelto.png',
                name: 'Lamborghini Revuelto',
                pr: '600',
                rarity: 'Mythic',
                rarityClass: 'rarity-mythic',
                price: '$48,000,000'
            },
            {
                image: 'assets/images/ferrari.png',
                name: 'Ferrari SF90 Stradale',
                pr: '490',
                rarity: 'Legendary',
                rarityClass: 'rarity-legendary',
                price: '$13,000,000'
            },
            {
                image: 'assets/images/porsche.png',
                name: 'Porsche 911 GT3 RS',
                pr: '345',
                rarity: 'Epic',
                rarityClass: 'rarity-epic',
                price: '$3,000,000'
            }
        ];

        let currentIndex = 0;
        const container = document.getElementById('stat-details-container');
        const imgContainer = document.getElementById('car-image-container');

        setInterval(() => {
            // Trigger fade out
            container.classList.add('fade-out');
            imgContainer.classList.add('fade-out');

            setTimeout(() => {
                // Update data
                currentIndex = (currentIndex + 1) % cars.length;
                const car = cars[currentIndex];
                
                carImage.src = car.image;
                carImage.alt = car.name;
                carName.textContent = car.name;
                carPR.textContent = car.pr;
                carPrice.textContent = car.price;
                
                // Update rarity text and class
                carRarity.textContent = car.rarity;
                carRarity.className = `stat-value ${car.rarityClass}`;

                // Trigger fade in
                container.classList.remove('fade-out');
                imgContainer.classList.remove('fade-out');
            }, 300); // Wait for CSS transition (0.3s)
        }, 4500); // Rotate every 4.5 seconds
    }
});
