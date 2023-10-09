var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets) {
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
})


gsap.to (".nav", {
    backgroundColor :"#D0C5BF",
    height: "90px",
    duration:0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11% ",
        scrub: 1
    }
})

gsap.to (".main", {
    backgroundColor :"#C38B7F",
    scrollTrigger: {
        trigger: ".main",
        scroller:"body",
        start: "top -80%",
        end: "top -40% ",
        scrub:5
    }
})

gsap.from ("#img,#p",{
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger: {
        trigger:"#img,#p",
        scroller:"body",   
        start: "top 60%",
        end: "top 58%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:1
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
