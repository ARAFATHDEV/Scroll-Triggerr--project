var blur = document.querySelector("#cursor_blr")
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+25+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x- 200 +"px"
    blur.style.top = dets.y- 200 +"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:3
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start: "top -30%",
        end:"top -70%",
        scrub:2
    }
})

var h4all = document.querySelectorAll("#nav h4")
var card = document.querySelectorAll("#card_container .card")
var button = document.querySelectorAll("#nav button")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })

})

card.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "0.1s"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })

})

button.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "0.1s"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })

})

gsap.from("#aboutus img,#aboutus_in",{
    y:50,
    opacity:0,
    duration:1.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end: "top 58%",
        scrub:3
    }
})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end: "top 65%",
        scrub:2
        }
})

gsap.from("#colon_1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon_1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon_2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon_1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });