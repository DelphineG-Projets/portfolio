gsap.registerPlugin(ScrollTrigger);
let items = document.querySelectorAll('.competences__item');
let text = document.querySelector('.competences__text'); 
let testItems = document.querySelectorAll('.test .test__item'); // Select items in the test class



items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
            x: x * 0.2,
            y: y * 0.3, 
            duration: 0.3, 
            ease: "power3.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power3.out"
        });
    });
});





gsap.fromTo(text, {
y: 900,
},
{
    y: -300, // Adjust the speed for upward movement of text
    ease: "none",
    scrollTrigger: {
        trigger: '.competences',
        start: "top bottom",
        end: "bottom top",
        scrub: 1         
    }
});

