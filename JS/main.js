const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  observeParents: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
