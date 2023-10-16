const swiper = new Swiper(".mySwiperLogo", {
  loop: true,

  slidesPerView: 1,

  breakpoints: {
    1024: { slidesPerView: 3.1 },
  },

  autoplay: { delay: 2000 },

  centeredSlides: true,

  spaceBetween: 70,
});

