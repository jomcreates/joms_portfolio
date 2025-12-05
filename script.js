    // Smooth scrolling for navigation links
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Use scrollIntoView for better browser compatibility
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        // Select all navigation links including buttons
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            // Check if it's one of our navigation links
            if (link.classList.contains('nav-link') || 
                link.classList.contains('nav-button') || 
                link.classList.contains('about-nav-link') || 
                link.classList.contains('about-nav-button') ||
                link.classList.contains('read-more') ||
                link.classList.contains('explore-button')) {
                
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        // Small delay to ensure DOM is ready
                        setTimeout(() => {
                            smoothScrollTo(targetId);
                        }, 10);
                    }
                });
            }
        });
        
        // Also handle direct hash navigation on page load
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            setTimeout(() => smoothScrollTo(hash), 100);
        }
    
    // Add scroll effect to navigation
    let lastScroll = 0;
    const aboutHeader = document.querySelector('.about-header');
    const aboutSection = document.getElementById('about');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const navigation = document.querySelector('.navigation');
        
        if (navigation) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                navigation.style.opacity = '0.9';
            } else {
                navigation.style.opacity = '1';
            }
        }
        
        // Make about header sticky/fixed when scrolling past hero section
        if (aboutHeader && aboutSection && heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            
            // Show about header sticky when past hero section
            if (currentScroll >= heroBottom - 100) {
                aboutHeader.classList.add('sticky-nav');
                aboutSection.classList.add('has-sticky-nav');
            } else {
                aboutHeader.classList.remove('sticky-nav');
                aboutSection.classList.remove('has-sticky-nav');
            }
        }
        
        lastScroll = currentScroll;
    });
    
    // Binary Rain Effect for Hero Section
    const binaryRain = document.getElementById('binaryRain');
    if (binaryRain) {
        const binaryChars = '01';
        const columns = 25;
        const containerWidth = 400;
        const columnWidth = containerWidth / columns;
        
        // Create binary columns
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = (i * columnWidth + Math.random() * 5) + 'px';
            const duration = Math.random() * 2 + 2.5;
            column.style.animationDuration = duration + 's';
            column.style.animationDelay = (Math.random() * 2) + 's';
            
            // Generate binary characters for this column
            let binaryText = '';
            const charCount = Math.floor(Math.random() * 20) + 15;
            for (let j = 0; j < charCount; j++) {
                binaryText += binaryChars[Math.floor(Math.random() * binaryChars.length)] + '<br>';
            }
            column.innerHTML = binaryText;
            
            binaryRain.appendChild(column);
        }
    }
    
    // Binary Rain Effect for Contact Section
    const contactBinaryRain = document.getElementById('contactBinaryRain');
    if (contactBinaryRain) {
        const binaryChars = '01';
        const columns = 40;
        const containerWidth = contactBinaryRain.offsetWidth || window.innerWidth;
        const columnWidth = containerWidth / columns;
        
        // Create binary columns
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = (i * columnWidth + Math.random() * 10) + 'px';
            const duration = Math.random() * 3 + 3;
            column.style.animationDuration = duration + 's';
            column.style.animationDelay = (Math.random() * 2) + 's';
            
            // Generate binary characters for this column
            let binaryText = '';
            const charCount = Math.floor(Math.random() * 25) + 20;
            for (let j = 0; j < charCount; j++) {
                binaryText += binaryChars[Math.floor(Math.random() * binaryChars.length)] + '<br>';
            }
            column.innerHTML = binaryText;
            
            contactBinaryRain.appendChild(column);
        }
    }
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // About logo click to scroll to top
    const aboutLogoLink = document.querySelector('.about-logo-link');
    if (aboutLogoLink) {
        aboutLogoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Explore button smooth scroll
    const exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    // READ MORE link smooth scroll
    const readMoreLink = document.querySelector('.read-more');
    if (readMoreLink) {
        readMoreLink.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    // Created Section - Tab Switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
    
    // Modal Functionality
    const modalTriggers = document.querySelectorAll('.clickable-image');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Design Project Navigation
    const designProjects = document.querySelectorAll('.design-project');
    const prevButtons = document.querySelectorAll('.prev-arrow');
    const nextButtons = document.querySelectorAll('.next-arrow');
    let currentProjectIndex = 0;
    
    function showProject(index) {
        // Remove active class from all projects
        designProjects.forEach((project, i) => {
            if (i === index) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    }
    
    function navigateProject(direction) {
        if (direction === 'prev') {
            currentProjectIndex = (currentProjectIndex - 1 + designProjects.length) % designProjects.length;
        } else {
            currentProjectIndex = (currentProjectIndex + 1) % designProjects.length;
        }
        showProject(currentProjectIndex);
    }
    
    if (prevButtons.length > 0 && nextButtons.length > 0 && designProjects.length > 0) {
        // Add event listeners to all prev buttons
        prevButtons.forEach(button => {
            button.addEventListener('click', function() {
                navigateProject('prev');
            });
        });
        
        // Add event listeners to all next buttons
        nextButtons.forEach(button => {
            button.addEventListener('click', function() {
                navigateProject('next');
            });
        });
        
        // Initialize first project
        showProject(0);
    }
    
    // Infinite Loop Scrolling for Design Images (Mobile Only)
    function setupInfiniteScroll(container) {
        if (!container) return;
        
        // Only enable infinite scroll on mobile devices (768px and below)
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return;
        
        const images = Array.from(container.querySelectorAll('.design-screenshot:not(.clone)'));
        if (images.length === 0) return;
        
        // Wait for images to load to get accurate dimensions
        const checkAndSetup = () => {
            if (images[0].offsetWidth === 0) {
                setTimeout(checkAndSetup, 100);
                return;
            }
            
            // Clone images for seamless loop (clone all 4 images)
            images.forEach(img => {
                const clone = img.cloneNode(true);
                clone.classList.add('clone');
                container.appendChild(clone);
            });
            
            // Calculate single image width including gap
            const gap = parseInt(getComputedStyle(container).gap) || 8;
            const imageWidth = images[0].offsetWidth + gap;
            const totalWidth = images.length * imageWidth;
            
            let isScrolling = false;
            let scrollTimeout;
            
            container.addEventListener('scroll', function() {
                if (isScrolling) return;
                
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrollLeft = container.scrollLeft;
                    const scrollWidth = container.scrollWidth;
                    const clientWidth = container.clientWidth;
                    
                    // If scrolled past the original images (into clones), reset to beginning
                    if (scrollLeft >= totalWidth - 5) {
                        isScrolling = true;
                        container.scrollLeft = scrollLeft - totalWidth;
                        setTimeout(() => { isScrolling = false; }, 50);
                    }
                    // If scrolled before the start, jump to end of originals
                    else if (scrollLeft <= 5) {
                        isScrolling = true;
                        container.scrollLeft = totalWidth;
                        setTimeout(() => { isScrolling = false; }, 50);
                    }
                }, 10);
            });
            
            // Initialize scroll position to start of originals (after clones)
            container.scrollLeft = 0;
        };
        
        checkAndSetup();
    }
    
    // Setup infinite scroll for all design preview rows after a short delay (mobile only)
    function initInfiniteScroll() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            document.querySelectorAll('.design-preview-row').forEach(row => {
                setupInfiniteScroll(row);
            });
        }
    }
    
    setTimeout(initInfiniteScroll, 500);
    
    // Re-check on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initInfiniteScroll, 300);
    });
    
    
});

