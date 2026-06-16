// custom cursor + the initial loading screen

document.addEventListener('DOMContentLoaded', () => {

    const loader = document.getElementById('page-loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1600);
    });

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    // ring lags behind the dot a bit, gives it that trailing feel
    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverEls = document.querySelectorAll('a, button, .feature-item, .plan-card, .testimonial-card');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(2.5)';
            dot.style.opacity = '0.5';
            ring.style.width = '54px';
            ring.style.height = '54px';
            ring.style.opacity = '0.3';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.opacity = '1';
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.opacity = '0.7';
        });
    });

    // no point showing a fake cursor on touch screens
    if ('ontouchstart' in window) {
        dot.style.display = 'none';
        ring.style.display = 'none';
    }

    // let the real text cursor show up in inputs instead of our dot
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.opacity = '1';
            ring.style.opacity = '0.7';
        });
    });

});
