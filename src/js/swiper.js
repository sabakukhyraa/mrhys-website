
export const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 700,

  //parallax: true,
  
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  }, 

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});