gsap.registerPlugin(ScrollTrigger);
let ww = window.innerWidth;
let wh = window.innerHeight;
let wordmark = document.querySelector('.header-bg');
let header = document.querySelector('header');
let searchBg = document.querySelector('.search-bg');
let di_range = document.querySelector('.product-range-links');
let satvambrand = document.querySelector('.satvam-brand span');
let bar1 = document.querySelector('.hamburger .bar1');
let bar2 = document.querySelector('.hamburger .bar2');
let bar3 = document.querySelector('.hamburger .bar3');
let searchBtn = document.querySelector('.search-btn span');
let searchverlay= document.querySelectorAll('.search-overlay');
let searchbarsclose = document.querySelector('.searchbars-close-overlay');

/* Horizontal Panels */
const panelcont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");
if(window.innerWidth > 767){
    if(panelcont)
    {
        tween = gsap.to(panels, {
        x: () => -1 * (panelcont.scrollWidth - innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#panels-container",
            pin: true,
            start: "top top",
            scrub: 1,
            end: () => "+=" + (panelcont.scrollWidth - innerWidth),
            onUpdate: (self) => {
            //console.log(self.progress)
            }
        }
        });
    }	
}