 // ============ MOBILE MENU ============
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ============ SCROLL ANIMATIONS ============
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe skill cards, project cards, education items
        document.querySelectorAll('.skill-category, .project-card, .education-item, .cert-card, .about-stats').forEach(el => {
            el.classList.add('scroll-animate');
            observer.observe(el);
        });

        // ============ SKILL PROGRESS ANIMATION ============
        const skillProgressBars = document.querySelectorAll('.skill-progress');

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                    
                    skillObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillProgressBars.forEach(bar => {
            skillObserver.observe(bar);
        });

        // ============ PARTICLES ANIMATION ============
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 4 + 2;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const duration = Math.random() * 4 + 4;

                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = left + '%';
                particle.style.top = top + '%';
                particle.style.animationDuration = duration + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';

                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // ============ SMOOTH SCROLL NAVIGATION ============
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // ============ ACTIVE NAV LINK ============
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.style.color = '';
                if (item.getAttribute('href').slice(1) === current) {
                    item.style.color = 'var(--primary)';
                }
            });
        });

        // ============ PARALLAX EFFECT ============
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const particles = document.getElementById('particles');
            if (particles) {
                particles.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // ============ TYPEWRITER EFFECT (Optional) ============
        function typeWriter(element, text, speed = 100) {
            let index = 0;
            element.innerHTML = '';
            
            function type() {
                if (index < text.length) {
                    element.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Optional: Uncomment to add typewriter effect to subtitle
        // setTimeout(() => {
        //     const subtitle = document.querySelector('.subtitle');
        //     typeWriter(subtitle, 'AI/ML & Web Developer', 50);
        // }, 500);

        // ============ PREVENT BODY SCROLL WHEN MENU IS OPEN ============
        menuToggle.addEventListener('click', () => {
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        console.log('Portfolio loaded successfully! 🚀');