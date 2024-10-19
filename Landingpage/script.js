// Parallax Effect ---
gsap.fromTo("#title", {
      scale: 4.2,
      y: -190
}, {
      scale: 1.2,
      y: 0,
      duration: 1,
      scrollTrigger: {
            trigger: "#title",
            end: "bottom top",
            invalidateOnRefresh: true,
            scrub: 2,
            ease: "expoScale(0.5,7,none)",
      }
})

const discover_t1 = gsap.timeline({
      scrollTrigger: {
            trigger: ".slide",
            start: "top 50%",
            scrub: 2,
            ease: "ease"
      }
})

// Discover Section

discover_t1.to(".slide1", {
      y: 290
});
discover_t1.to(".slide2", {
      y: 290
});
discover_t1.to(".slide3", {
      y: 290
});
discover_t1.to(".slide4", {
      y: 290
});
// zoom In effect 
gsap.to("#temple", {
      clipPath: "circle(100% at 50% 50%)",
      scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            pin: true,
            onEnter: () => {
                  document.body.classList.add("dark-theme");
            },
            onLeaveBack: () => {
                  document.body.classList.remove("dark-theme");
            }
      },
})

const gridwrapper = gsap.utils.toArray(".grid-items");

gridwrapper.forEach(wrapper => {
      const boxes = wrapper.querySelectorAll('.box');

      boxes.forEach(box => {
            gsap.from(box, {
                  y: 500,
                  duration: 0.5,
                  scrollTrigger: {
                        trigger: box,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 4
                  }
            })
      })
});

// The fluid effect and the text transition at the end 

const heading = document.querySelector(".hotel-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");


let  text_h2 = gsap.timeline({
      scrollTrigger:{
            trigger: "#hotel-section .container",
            start: "top 50%",
            end : "top 50%",
            scrub: 2,
            ease:"ease",
            onEnter : () => {
                  
                 gsap.set(heading,{position : "fixed", bottom : 0 , zIndex:-1000 })
            },
            onEnterBack : () => {
                  
                  gsap.set(heading,{position:"relative", bottom :"0"})
            }
      }
})

sections.forEach((section,i)=>{
    ScrollTrigger.create({
      trigger: section,
      start: "bottom-=20% bottom",
      end:"bottom top",
      onEnter : () => {
            updateHeading(i)
            if(i===0){
                  document.body.classList.remove("dark-theme")
            }
      },
      onEnterBack : () => {
            updateHeading(i)
            if(i===0){
                  document.body.classList.add("dark-theme")
            }
      }
    })
})

function updateHeading(index) {
      const headingText = ["Hotels","Flights","Tourist Spots","Packages"];
      heading.textContent = headingText[index]
      
}
updateHeading(0)