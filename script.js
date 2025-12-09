function page1Annimation(){
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y:-40,
    opacity:0,
    delay:1,
    duarion:0.7,
    stagger:0.15,
})


tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duarion:0.4,
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duarion:0.4,
})

tl.from(".center-part1 button",{
    opacity:0,
    duarion:0.4,
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
},"-=1")





}

function page2Annimation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
}) 
tl2.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})

tl2.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tl2.from(".services p",{
    y:-100,
    opacity:0,
    duration:0.5,
})

tl2.from(".elem.first.left",{
    x:-1000,
    duration:1,
    oapcity:0,
})
tl2.from(".elem.first.right",{
    x:1000,
    duration:1,
    oapcity:0,
},"-=1")

tl2.from(".elem.second.left",{
    x:-1000,
    duration:1,
    oapcity:0,
},"-=1")

tl2.from(".elem.second.right",{
    x:1000,
    duration:1,
    oapcity:0,
},"-=1")
}

page1Annimation();
page2Annimation();





