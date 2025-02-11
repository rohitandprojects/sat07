"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  
gsap.registerPlugin(ScrollTrigger);
  const ListingLoading = () => {
  const initializedLoding = useRef(false);
  const renctangleRef = useRef(null);
  const seeToScrollRef = useRef(null);
  const loadingRef = useRef(null);  

  useEffect(() => {
    if(!initializedLoding.current){
      initializedLoding.current = true;
      setTimeout(function(){
        let proLoadDiv = document.querySelector('.product-loader');
        if(proLoadDiv){
          let compStyles = window.getComputedStyle(proLoadDiv);
          let mypadding = compStyles.getPropertyValue('padding-top');
          //console.log('mypadding : ', mypadding);
          var bottom_centered = '"top '  + mypadding +'px"';
        
          gsap.timeline({
            scrollTrigger: {
              trigger: renctangleRef.current,
              start: "top 50%",
              end: bottom_centered,
              scrub: 1,
              markers:false,
            /* onEnter: function() {
                if(!section.classList.contains('background-change')) {
                  section.classList.add('background-change')
                }
              }*/
              onEnter: () => {
                // if(productLoader) {
                //   productLoader.classList.remove('active')
                // }
                //console.log('onEnter');
              },
              onLeave: () => {
                // if(productLoader) {
                //   productLoader.classList.add('active')
                // }
                //console.log('onLeave');
              },
              onEnterBack: () => {         
              //console.log('onEnterBack');
              },
              onLeaveBack: () => {         
                //console.log('onLeaveBack');
              },
              //onEnter, onLeave, onEnterBack, onLeaveBack
              toggleActions: "play pause reverse reset",
              //toggleClass: { targets: ".seeToScroll", className: "active" },
              /*onUpdate:foo,
              onUpdate: ({ progress }) => {
                console.log(progress*100);
                setCountPercentage(renctangleRef.current.style.height);
                console.log("Height: " + percentageHeight.offsetHeight + "%");
              }*/
          },
          }).fromTo(
            renctangleRef.current,
          { height: '0%' },
          { height: '100%', duration:2, ease: "power1.out" }
          );
        } 
      },1000);
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
  },[]);  
  return (<div>
    <div className="product-loader_bar">
      <div><span className="loader-height" ref={renctangleRef}></span></div>
    </div>    
    <ul>
      <li className="seeToScroll" ref={seeToScrollRef}>
        <span>S</span><span>c</span><span>r</span><span>o</span><span>l</span><span>l</span><span className="spacing"> </span><span>t</span><span>o</span><span className="spacing"> </span><span>s</span><span>e</span><span>e</span>
      </li>
      <li className="loadingScroll" ref={loadingRef}>
        <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span>
      </li>
    </ul>
    {/* <p className="p-0">Scroll to see</p> */}
  </div>
  )
}
export default ListingLoading