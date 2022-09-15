const message = $("#making .message");
const message01 = $("#making .message01");
const message02 = $("#making .message02");
const message03 = $("#making .message03");

message01.hover(
  function () {
    gsap.to("#making .messageTitle01", {
      opacity: 1,
    }),
      gsap.to("#making .messageDesc01", {
        opacity: 1,
      });
  },
  function () {
    gsap.to("#making .messageTitle01", {
      opacity: 0.5,
    }),
      gsap.to("#making .messageDesc01", {
        opacity: 0.5,
      });
  }
);

message02.hover(
  function () {
    gsap.to("#making .messageTitle02", {
      opacity: 1,
    }),
      gsap.to("#making .messageDesc02", {
        opacity: 1,
      });
  },
  function () {
    gsap.to("#making .messageTitle02", {
      opacity: 0.5,
    }),
      gsap.to("#making .messageDesc02", {
        opacity: 0.5,
      });
  }
);

message03.hover(
  function () {
    gsap.to("#making .messageTitle03", {
      opacity: 1,
    }),
      gsap.to("#making .messageDesc03", {
        opacity: 1,
      });
  },
  function () {
    gsap.to("#making .messageTitle03", {
      opacity: 0.5,
    }),
      gsap.to("#making .messageDesc03", {
        opacity: 0.5,
      });
  }
);

message01.hover(
  function () {
    gsap.to("#making .messageDetail01", {
      opacity: 0,
    });
  },
  function () {
    gsap.to("#making .messageDetail01", {
      opacity: 1,
    });
  }
);

message02.hover(
  function () {
    gsap.to("#making .messageDetail02", {
      opacity: 0,
    });
  },
  function () {
    gsap.to("#making .messageDetail02", {
      opacity: 1,
    });
  }
);

message03.hover(
  function () {
    gsap.to("#making .messageDetail03", {
      opacity: 0,
    });
  },
  function () {
    gsap.to("#making .messageDetail03", {
      opacity: 1,
    });
  }
);
