gsap.registerPlugin(ScrollTrigger);
let items = document.querySelectorAll(".competences__item");
let text = document.querySelector(".competences");
let button = document.querySelector(".btn");
let icons = document.querySelectorAll(".icon-move");

var swiper4 = new Swiper(".mySwiper", {
  initialSlide: 1,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }},
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

let swiperHero = new Swiper(".swiperHero", {
  autoplay: {
    delay: 2500,
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
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.fromTo(
  text,
  {
    y: 500,
  },
  {
    y: 200,
    ease: "none",
    scrollTrigger: {
      trigger: ".hidden-competences",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  }
);

function animateItems() {
  if (window.innerWidth >= 992) {
    items.forEach((item, index) => {
      gsap.to(item, {
        x: (index % 2 === 0 ? -1 : 1) * 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".competences",
          toggleActions: "restart complete reverse reset",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }
}

animateItems();

window.addEventListener('resize', animateItems);



button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  button.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "translate(0, 0)";
});

icons.forEach(function (icon) {
  icon.addEventListener("mousemove", (e) => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    icon.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
  });
  
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translate(0, 0)";
  });
});

