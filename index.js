gsap.registerPlugin('ScrollTrigger');

gsap.from('.display-1',{
    y:-100,opacity:-1,duration:3,delay:1.5,
    scrollTrigger:{
        trigger:'.mainbody-1',
        start: 'top 101%',
        end: 'bottom 90%',
        scrub:false,
        markers:false,
        scrollActions:'play reverse play reverse'
    }
})
gsap.from('.display-2',{
    x:-100,opacity:-1,duration:2.5,delay:1.5,
})
gsap.from('.display-3',{
    x:100,opacity:-1,duration:2.5,delay:1.5,
})

gsap.from('.box-1',{
    x:-100,
    y:100,
    opacity:-1,
    
    scrollTrigger:{
        trigger:'.box-1',
        start:'top 101%',
        end:'bottom 90%',
        scrub:true,
        markers:false,
        scrollActions:'play reverse play reverse'
        ,duration:2.5,
    }

})
gsap.from('.box-2',{
    x:100,
    y:100,
    opacity:-1,
    
    scrollTrigger:{
        trigger:'.box-2',
        start:'top 101%',
        end:'bottom 90%',
        scrub:true,
        markers:false,
        scrollActions:'play reverse play reverse'
        ,duration:2.5,
    }

})

 
    gsap.from('.for-employee',{
        x:-100,
        duration:2,opacity:-1,
        scrollTrigger:{
            trigger:'.features',
            start:'top 120%',
            end:'bottom 120%',
            scrub:false,
            markers:false,
            scrollActions:'play reverse play reverse'
        }   

    })
    gsap.from('.for-company',{
        x:100,
        duration:2,opacity:-1,
        scrollTrigger:{
            trigger:'.features',
            start:'top 120%',
            end:'bottom 120%',
            scrub:false,
            markers:false,
            scrollActions:'play reverse play reverse'
        }

    })
gsap.from('.about-2',{
    y:100,
    opacity:0,
    
    scrollTrigger:{
        trigger:'.about-2',
        start:'top 100%',
        end:'bottom 90%',
        scrub:true,
        markers:false,
        scrollActions:'play reverse play reverse'
        ,duration:1,
    }

})
gsap.from('.features',{
    y:100,
    opacity:0,
    
    scrollTrigger:{
        trigger:'.features',
        start:'top 120%',
        end:'bottom 120%',
        scrub:true,
        markers:false,
        scrollActions:'play reverse play reverse'
        ,duration:2.5,
    }

})
gsap.from('#feat-head',{
   y:50,
    duration:1.5,opacity:-1,
    scrollTrigger:{
        trigger:'.benefits',
        start:'top bottom',
        end:'bottom 20%',
        scrub:false,
        markers:false,
        scrollActions:'play reverse play reverse'
    } 
})

gsap.from('.googleForm',{
    y:70,
    opacity:0,duration:2.5,
    
    scrollTrigger:{
        trigger:'.googleForm',
        start:'top 101%',
        end:'bottom 90%',
        scrub:false,
        markers:false,
        scrollActions:'play reverse play reverse'
        
    }
    
})