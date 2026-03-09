var isMobile = window.innerWidth <= 768;

function page1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h1", {
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
    });

    if (!isMobile) {
        tl.from(".part2 h4, .part2 button", {
            y: -40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
        }, "-=0.3");
    }

    tl.from(".center-part1 h1", {
        x: isMobile ? -80 : -300,
        opacity: 0,
        duration: 0.4,
    });
    tl.from(".center-part1 p", {
        x: isMobile ? -40 : -100,
        opacity: 0,
        duration: 0.4,
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
    }, "-=0.8");
}

function page2Animation() {
    // Services header animation
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services h3",
            scroller: "body",
            start: isMobile ? "top 85%" : "top 50%",
            end: isMobile ? "top 50%" : "top 0",
            scrub: 2,
        }
    });

    tl2.from(".services h3", {
        x: isMobile ? -40 : -100,
        opacity: 0,
        duration: 0.5,
    });
    tl2.from(".services p", {
        y: isMobile ? -30 : -100,
        opacity: 0,
        duration: 0.5,
    });

    if (isMobile) {
        // On mobile: each card gets its own scroll-triggered animation
        document.querySelectorAll(".elem").forEach(function (card) {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    scroller: "body",
                    start: "top 90%",
                    end: "top 50%",
                    scrub: 1,
                },
                y: 60,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
            });
        });
    } else {
        // On desktop: slide cards from left/right
        var slideX = 1000;

        tl2.from(".elem.first.left", {
            x: -slideX,
            duration: 1,
            opacity: 0,
        });
        tl2.from(".elem.first.right", {
            x: slideX,
            duration: 1,
            opacity: 0,
        }, "-=1");

        tl2.from(".elem.second.left", {
            x: -slideX,
            duration: 1,
            opacity: 0,
        }, "-=1");

        tl2.from(".elem.second.right", {
            x: slideX,
            duration: 1,
            opacity: 0,
        }, "-=1");
    }
}

function page3Animation() {
    gsap.from(".section3 .about", {
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: isMobile ? "top 85%" : "top 60%",
            end: isMobile ? "top 50%" : "top 20%",
            scrub: 2,
        },
        y: 60,
        opacity: 0,
        duration: 1,
    });
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var part2 = document.querySelector(".part2");
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            part2.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }
});

page1Animation();
page2Animation();
page3Animation();





