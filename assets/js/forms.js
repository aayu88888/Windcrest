// pricing plan buttons (scrolls to contact + preselects the dropdown)
// and the contact form submit handler

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.btn-plan').forEach(button => {
        button.addEventListener('click', function () {
            const planValue = this.dataset.plan;

            const contactSection = document.getElementById('contact');
            if (!contactSection) return;

            const offset = document.getElementById('main-header').offsetHeight;
            const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });

            setTimeout(() => {
                const select = document.getElementById('plan-interest');
                if (!select) return;

                select.value = planValue;
                select.dispatchEvent(new Event('change')); // so the floating label updates

                // quick highlight flash so the user notices it got selected
                select.style.transition = 'box-shadow 0.3s, border-color 0.3s';
                select.style.borderColor = 'var(--accent)';
                select.style.boxShadow = '0 0 0 4px rgba(232, 93, 38, 0.15)';
                setTimeout(() => {
                    select.style.borderColor = '';
                    select.style.boxShadow = '';
                }, 2000);
            }, 900);
        });
    });

    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.textContent;

            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';

            // TODO: hook this up to an actual backend / form service later
            setTimeout(() => {
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';

                formSuccess.classList.add('show');
                contactForm.reset();

                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 1400);
        });
    }

});
