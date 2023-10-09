let cards = document.querySelectorAll(".carousel-item");

cards.forEach((card) => {
    gsap.from(card, {
        duration:2,
        ease:Expo.easeInOut,
        opacity:0,
        stagger:{ // wrap advanced options in an object
            each: 0.1,
            from: "center",
            grid: "auto",
            ease: "power2.inOut",
         // Repeats immediately, not waiting for the other staggered animations to finish
          },
    });
});
