import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function accordions(container) {
    const SPEED = 0.7;

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };

    const elements = Array.from(container.querySelectorAll('.js-accordion'));

    function enableAccordions() {
        elements.forEach(element => {
            const content = element.querySelector('.js-accordion-content');

            // Сразу закрываем все аккордионы
            closeAccordion(content);
        })
    }

    window.enableAccordions = enableAccordions;
    window.disableAccordion = openAccordion;

    elements.forEach(element => {
        const btn = element.querySelector('.js-accordion-btn');
        const content = element.querySelector('.js-accordion-content');

        // Сразу закрываем все аккордионы
        closeAccordion(content);

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (element.hasAttribute('data-close-other')) {
                elements.forEach(otherElement => {
                    if (otherElement !== element) {
                        if (otherElement.classList.contains('active')) {
                            const content = otherElement.querySelector('.js-accordion-content');
                            closeAccordion(content);
                            otherElement.classList.remove('active');
                        }
                    }
                });
            }

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        });
    });
}
