new Swiper("#repositories .contents .swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 130,
  direction: "vertical",
  centeredSlides: true,
  loop: true,
  // mousewheel: true,

  pagination: {
    el: "#repositories .pagniation",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
