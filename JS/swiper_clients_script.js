const swiper = new Swiper(".mySwiperLogo", {
  loop: true,

  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3.5 },
  },

  autoplay: { delay: 2000 },

  centeredSlides: true,

  spaceBetween: 60,
});