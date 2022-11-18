 const tl = gsap.timeline({ dafault: {} });
 
// tl.from(".imgss", {
//   y: "-50",
//   ease: "elastic(1,0.3)",
//   duration: 1.5,
//   opacity: 0,
// }).from(".gt", {
//   y: "50",
//   ease: "power4.inOut",
//   duration: 1,
//   stagger: 1,
//   opacity: 0,
// }).from(".sesecs", {
//   y: "50",
//   ease: "power4.inOut",
//   duration: 1,
//   stagger: 1,
//   opacity: 0,
// })
// .from(".s", {
//   x: "-50",
//   ease: "power4.inOut",
//   duration: 1.5,
//   stagger: 1,
//   opacity: 0,
// });

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".dos", {
//   scrollTrigger: {
//     trigger: ".imgtexs",
//     toggleActions: "restart reverse restart reverse",
//     start: "10% 40%",
//     end: "40% top",
//     //  markers: true,
//   },
//   x: "-100vw",
//   ease: "power4.inOut",
//   opacity: 1,
//   duration: 2,
// });
// gsap.from(".rr", {
//   scrollTrigger: {
//     trigger: ".rr",
//     toggleActions: "restart reverse restart reverse",
//     start: "10% 40%",
//     end: "40% top",
//     // markers: true,
//   },
//   y: "-50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity:0,
//   duration: 2,
// });

gsap.from(".y", {
  scrollTrigger: {
    trigger: ".y",
    toggleActions: "restart reverse restart reverse",
    start: "10% 40%",
    end: "250% top",
    //  markers: true,
  },
  x: "-50",
  ease: "power4.inOut",
  stagger: 1,
  opacity: 0,
  duration: 2,
});
gsap.from(".x", {
  scrollTrigger: {
    trigger: ".x",
    toggleActions: "restart reverse restart reverse",
    start: "10% 40%",
    end: "250% top",
    // markers: true,
  },
  y: "-50",
  ease: "power4.inOut",
  stagger: 1,
  opacity: 0,
  duration: 2,
});
// gsap.from(".z", {
//   scrollTrigger: {
//     trigger: ".z",
//     toggleActions: "restart reverse restart reverse",
//     start: "10% 40%",
//     end: "250% top",
//     // markers: true,
//   },
//   y: "50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 2,
// });


// gsap.from(".yy", {
//   scrollTrigger: {
//     trigger: ".y",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "600% top",
//     // markers: true,
//   },
//   x: "-50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 2,
// });
// gsap.from(".xx", {
//   scrollTrigger: {
//     trigger: ".y",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "600% top",
//     // markers: true,
//   },
//   y: "50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 2,
// });
// gsap.from(".zz", {
//   scrollTrigger: {
//     trigger: ".y",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "600% top",
//     // markers: true,
//   },
//   y: "-50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 2,
// });
gsap.from(".dd", {
  scrollTrigger: {
    trigger: ".y",
    toggleActions: "restart reverse restart reverse",
    start: "750% center",
    end: "800% top",
    // markers: true,
  },
  x: "-100",
  ease: "power4.inOut",

  opacity: 0,
  duration: 3,
});

// gsap.from(".omm", {
//   scrollTrigger: {
//     trigger: ".y",
//     toggleActions: "restart reverse restart reverse",
//     start: "1000% center",
//     end: "1050% top",
//     //  markers: true,
//   },
//   y: "50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 2,
// });
// gsap.from(".myca", {
//   scrollTrigger: {
//     trigger: ".y",
//     toggleActions: "restart reverse restart reverse",
//     start: "1350% center",
//     end: "1400% top",
//     // markers: true,
//   },
//   x: "-100",
//   ease: "power4.inOut",
//   stagger: 1,

//   opacity: 0,
//   duration: 1,
// });
gsap.from(".aa", {
  scrollTrigger: {
    trigger: ".aa",
    toggleActions: "restart reverse restart reverse",
    start: "-20% center",
    end: "10% top",
    // markers: true,
  },
  x: "-100",
  ease: "power4.inOut",
  stagger: 1,

  opacity: 0,
  duration: 1,
});
gsap.from(".bb", {
  scrollTrigger: {
    trigger: ".bb",
    toggleActions: "restart reverse restart reverse",
    start: "-20% center",
    end: "10% top",
    // markers: true,
  },
  y: "50",
  ease: "power4.inOut",
  stagger: 1,

  opacity: 0,
  duration: 1,
});
gsap.from(".cc", {
  scrollTrigger: {
    trigger: ".cc",
    toggleActions: "restart reverse restart reverse",
    start: "-20% center",
    end: "10% top",
    // markers: true,
  },
  y: "-50",
  ease: "power4.inOut",
  stagger: 1,
  opacity: 0,
  duration: 1,
});

// gsap.from(".dd", {
//   scrollTrigger: {
//     trigger: ".dd",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "650% top",
//     markers: true,
//   },
//   y: "50",
//   ease: "power4.inOut",
//   stagger: 1,
//   opacity: 0,
//   duration: 1,
// });

// gsap.from(".ee", {
//   scrollTrigger: {
//     trigger: ".ee",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "650% top",
//     // markers: true,
//   },
//   y: "-50",
//   ease: "power4.inOut",
//   stagger: 1,

//   opacity: 0,
//   duration: 1,
// });
// gsap.from(".ff", {
//   scrollTrigger: {
//     trigger: ".ff",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "650% top",
//     // markers: true,
//   },
//   y: "50",
//   ease: "power4.inOut",
//   stagger: 1,

//   opacity: 0,
//   duration: 1,
// });
// gsap.from(".gg", {
//   scrollTrigger: {
//     trigger: ".cc",
//     toggleActions: "restart reverse restart reverse",
//     start: "550% center",
//     end: "650% top",
//     // markers: true,
//   },
//   x: "-50",
//   ease: "power4.inOut",
//   stagger: 1,

//   opacity: 0,
//   duration: 1,
// });

