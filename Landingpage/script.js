 gsap.fromTo("#title", {
      scale : 4.2,
      y : -190
 },{
     scale : 1.2,
      y: 0 ,
     duration: 1,
     scrollTrigger : {
            trigger : "#title",
            end : "bottom top",
            invalidateOnRefresh : true,
            scrub : 2,
            ease : "expoScale(0.5,7,none)",
      }
})                        
 