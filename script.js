gsap.registerPlugin(ScrollTrigger);
let items = document.querySelectorAll('.competences__item');
let text = document.querySelector('.competences'); 
let button = document.querySelector('.btn');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    initialSlide: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".myProjet", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





gsap.fromTo(text, {
y: 500,
},
{
    y: 200, 
    ease: "none",
    scrollTrigger: {
        trigger: '.hidden-competences',
        start: "top bottom",
        end: "bottom top",
        scrub: 1         
    }
});





items.forEach((item, index) => {
  gsap.to(item, {
    y: -(index + 1) * 10, 
    x: (index % 2 === 0 ? -1 : 1) * 60,
    ease: "none",
    scrollTrigger: {
      trigger: '.competences', 
    toggleActions: 'restart complete reverse reset',
      start: "top bottom", 
      end: "bottom top",   
      scrub: 1         
}});
});

button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  button.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
});

button.addEventListener('mouseleave', () => {
  button.style.transform = 'translate(0, 0)';
});

    
    