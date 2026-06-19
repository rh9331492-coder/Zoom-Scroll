gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
    }
})
tl.to("img", {
    scale: 2,
    // y: 350,
    z : 330
})

