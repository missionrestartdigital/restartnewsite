// Video Source Handling
        const videoEl = document.getElementById('heroVideo');
        // Using a dark, abstract technology network video to match the premium dark theme.
        // Visual cues: Dark background, glowing blue/purple lines, network nodes, data flow.
        // REPLACED UNRELIABLE MIXKIT URL WITH A STABLE, DARK 3D ABSTRACT PARTICLE VIDEO.
        const placeholderVideo = 'https://cdn.pixabay.com/video/2023/05/07/162067-824884075_large.mp4';
        
        if (window.__VIDEO_DATA_URL) {
            videoEl.src = window.__VIDEO_DATA_URL;
        } else {
            videoEl.src = placeholderVideo;
            // Ensure video plays even if it's the fallback
            videoEl.play().catch(e => console.log("Autoplay blocked:", e));
        }

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Hero Content Fade Out on Scroll
        const heroContent = document.getElementById('heroContent');
        const heroSection = document.querySelector('.hero-section');

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            
            // Calculate opacity based on scroll percentage of hero height
            // Start fading immediately, fully faded by 70% of hero height
            let opacity = 1 - (scrollPosition / (heroHeight * 0.7));
            
            // Calculate slight upward movement
            let translateY = scrollPosition * -0.2;

            if (opacity < 0) opacity = 0;

            heroContent.style.opacity = opacity;
            heroContent.style.transform = `translateY(${translateY}px)`;
        });

        // Simple mouse tracking for subtle light effect on dark glass cards
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.glass-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Design Update Notification Logic
        document.addEventListener('DOMContentLoaded', () => {
            const notificationBar = document.getElementById('design-update-notification');
            const dismissBtn = document.getElementById('dismiss-notification');
            // Incrementing version to force show the notification for this update
            const currentDesignVersion = '1.2-dark-revert'; 
            const viewedVersion = localStorage.getItem('viewedDesignVersion');

            if (viewedVersion !== currentDesignVersion) {
                // Show notification with a slight delay for better UX
                setTimeout(() => {
                    notificationBar.classList.add('show');
                }, 500);
            }

            if (dismissBtn) {
                dismissBtn.addEventListener('click', () => {
                    notificationBar.classList.remove('show');
                    localStorage.setItem('viewedDesignVersion', currentDesignVersion);
                });
            }
        });
