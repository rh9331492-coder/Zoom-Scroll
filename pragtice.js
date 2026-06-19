gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.wrapper',
        start: 'top top',
        end : '+=100%',
        scrub: 1,
        pin: true,
        markers: true
    }
})
tl.to('img',{
    z: 320,
    scale: 2
})