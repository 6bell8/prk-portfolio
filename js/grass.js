const mainTL = gsap.timeline();
const mainBoxTL = gsap.timeline();

mainBoxTL.to("#mainTitle .titleBox ", {
  opacity: 1,
  ease: "power4",
  delay: 0.5,
});

const grass = $("#mainTitle .titleBox .grass");
const grassColor01 = $("#mainTitle .titleBox #grassColor01");

mainTL
  .to(grass, {
    opacity: 1,
    ease: "power4",
    delay: 1,
    rotation: 360,
    stagger: {
      from: "random",
      each: 0.005,
      rotation: 360,
    },
  })
  .to("#mainTitle .iconScroll", {
    opacity: 1,
  });

grassColor01.hover(function () {
  $(this).css("background-color", "#216e39");
  $(this).css("border", "#216e39");
});
