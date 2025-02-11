'use client';
import { useEffect, useRef } from "react";
import ModelComponent from '@/app/b2b/components/model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LetsConnect = () => {
  const letsConnectRef = useRef(null);
  useEffect(() => {
    // Trigger a class name change on scro
  window.scrollTo(0, 0);
  setTimeout(function(){
  // Trigger a class name change on scroll
  ScrollTrigger.create({
    trigger:letsConnectRef.current,
    start: 'top 68%', 
      end: 'bottom top',
    onEnter() {
      letsConnectRef.current.classList.add('reveal');
      },
      onLeave() {
        //worldMapRef.classList.add('dropping_leave');
      },
      onEnterBack() {
        //worldMapRef.classList.remove('dropping_leave');
      },
      onLeaveBack() {
        const domestic_international_class = document.querySelector(".domestic-international");
        if(domestic_international_class){
          letsConnectRef.current.classList.remove('reveal');
        }		
      }
  });
},500);
     return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
},[]);
  return (
    <section className="domestic-international position-relative">
        <div className="container-fluid position-relative" ref={letsConnectRef}>
            <div className="lets-connect position-absolute">
                <div className="satvam-circle"><h1><span>Let's</span>Connect.</h1></div>
            </div>
            <div className="row">
                <ModelComponent></ModelComponent>
            </div>
        </div>	
    </section>
  )
}

export default LetsConnect