// stuff happening in/around the hero section: stat counters,
// the fake typing animation in the terminal mockup, gallery loop,
// and the scroll progress bar at the top of the page

document.addEventListener('DOMContentLoaded', () => {

    // --- stat counters, triggered once hero stats come into view ---
    const statNums = document.querySelectorAll('.stat-num');
    let countersStarted = false;

    function startCounters() {
        statNums.forEach(el => {
            const target = parseInt(el.dataset.target, 10);
            const duration = 1800;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current);
            }, 16);
        });
    }

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countersStarted) {
                countersStarted = true;
                startCounters();
            }
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // --- typing animation for the fake code terminal in the mockup ---
    const loader = document.getElementById('page-loader');
    const codeLines = document.querySelectorAll('.code-line');
    if (codeLines.length) {
        const startTyping = () => {
            codeLines.forEach((line) => {
                const delay = parseInt(line.dataset.delay, 10) || 0;
                setTimeout(() => {
                    line.classList.add('visible');
                }, delay + 800); // small buffer after the loader fades
            });
        };

        if (loader.classList.contains('hidden')) {
            startTyping();
        } else {
            window.addEventListener('load', () => {
                setTimeout(startTyping, 1600);
            });
        }

        // restart the whole thing every 8s so it doesn't just sit there typed out
        setInterval(() => {
            codeLines.forEach(line => line.classList.remove('visible'));
            setTimeout(() => {
                codeLines.forEach((line) => {
                    const delay = parseInt(line.dataset.delay, 10) || 0;
                    setTimeout(() => {
                        line.classList.add('visible');
                    }, delay);
                });
            }, 600);
        }, 8000);
    }

    // --- duplicate the portfolio gallery items so the scroll loop looks seamless ---
    const galleryTrack = document.getElementById('gallery-track');
    if (galleryTrack) {
        const items = galleryTrack.innerHTML;
        galleryTrack.innerHTML = items + items;
    }

    // --- thin progress bar across the top that fills as you scroll the page ---
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed; top: 0; left: 0; height: 3px; width: 0%;
        background: linear-gradient(90deg, #e85d26, #f7a438);
        z-index: 99999; transition: width 0.1s linear;
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = Math.min(progress, 100) + '%';
    });

});
