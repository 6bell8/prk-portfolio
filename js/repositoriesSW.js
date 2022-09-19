const swiperTopNum = $("#repositories .repositoriesBox").find(".swiper-slide");
const swiperSubNum = $("#repositories .projectsBox").find(".swiper-slide");

const repositories = new Swiper("#repositories .contents .repositoriesBox", {
  slidesPerView: "auto",
  spaceBetween: 170,
  direction: "vertical",
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  speed: 1000,
});

const project = new Swiper("#repositories .contents .projectsBox", {
  slidesPerView: "auto",
  spaceBetween: 330,
  direction: "vertical",
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  speed: 1000,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: "#repositories .pagniation",
    type: "bullets",
    clickable: true,
  },
  loopedSlides: swiperSubNum.length,
});

repositories.controller.control = project;
project.controller.control = repositories;

// new Swiper("#repositories .contents .swiper-container", {
//   slidesPerView: "auto",
//   spaceBetween: 170,
//   direction: "vertical",
//   centeredSlides: true,
//   allowTouchMove: false,
//   speed: 1000,
//   loop: true,
//   // mousewheel: true,

//   pagination: {
//     el: "#repositories .pagniation",
//     type: "bullets",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".next",
//     prevEl: ".prev",
//   },
// });
