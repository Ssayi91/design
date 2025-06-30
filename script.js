// Tailwind

        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a365d',
                        secondary: '#2a4365',
                        accent: '#c05621',
                        light: '#f7fafc',
                        dark: '#1a202c'
                    }
                }
            }
        }    
        
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
        
        // Property card hover effect
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('.property-overlay').classList.add('opacity-100', 'translate-y-0');
            });
            card.addEventListener('mouseleave', () => {
                card.querySelector('.property-overlay').classList.remove('opacity-100', 'translate-y-0');
            });
        });
        
        // Reel hover effect
        const reelContainers = document.querySelectorAll('.reel-container');
        reelContainers.forEach(container => {
            container.addEventListener('mouseenter', () => {
                container.querySelector('.play-icon').classList.add('opacity-100', 'scale-110');
            });
            container.addEventListener('mouseleave', () => {
                container.querySelector('.play-icon').classList.remove('opacity-100', 'scale-110');
            });
        });
    