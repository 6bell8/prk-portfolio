// const readMeTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#mainTitle",
//     scrub: 1,
//     start: "top +150 top",
//     end: "bottom +1000 bottom",
//     markers: {
//       startColor: "#ff0000",
//       endColor: "#0000ff",
//       fontSize: "20px",
//       indent: 50,
//     },
//   },
// });

const readMeTL = gsap.timeline({});

const desc = $("#readMe .readMeList .desc");
const edu = $("#readMe .readMeList .edu");
const exp = $("#readMe .readMeList .exp");

readMeTL.to("#readMe .profile .name", {
  opacity: 1,
  ease: "power4",
  delay: 0.1,
}),
  readMeTL.to("#readMe .readMeList .title", {
    opacity: 1,
    ease: "power4",
    delay: 0.1,
  }),
  readMeTL.to(exp, {
    opacity: 1,
    ease: "power4",
    delay: 0.1,
  }),
  readMeTL.to(edu, {
    opacity: 1,
    ease: "power4",
    delay: 0.1,
  }),
  readMeTL.to(desc, {
    opacity: 1,
    ease: "power4",
    delay: 0.1,
  });
