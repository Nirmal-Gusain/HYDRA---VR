let tl = gsap.timeline()
tl.from(".logo", {
    y: -30,
    duration: 0.7,
    delay: 1,
    opacity: 0,
})
tl.from("li", {
    y: -30,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2
})
tl.from(".nav-buttons", {
    y: -30,
    duration: 0.7,
    opacity: 0,
})
// tl.from(".vector", {
//     opacity: 0
// })

tl.from(".hero-left", {
    // x: -100,
    duration: 2,
    opacity: 0
})

tl.from(".hero-right", {
        // x: 100,
        duration: 2,
        opacity: 0
    },"-=100%")