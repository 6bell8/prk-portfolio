const mainSlider = new Swiper("#main", {
  direction: "vertical",
  speed: 1000,
  parallax: true,
  mousewheel: {
    //invert: true,
  },
});

gsap.defaults({
  duration: 1,
  ease: "power4",
});
