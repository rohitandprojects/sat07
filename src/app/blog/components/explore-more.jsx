'use client';
import { useEffect, useRef } from "react";
import ExportedImage from "next-image-export-optimizer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import FirstDomesticCategory from "./first-domestic-category";
 

gsap.registerPlugin(ScrollTrigger);
const ExploreMore = () => {

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
                <div className="satvam-circle"><h1><span>Explore </span>More</h1></div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="dome-int position-relative d-block">
                      <ExportedImage src="/images/media/B2B-enquiry.webp" width={960} height={670} className="w-auto h-auto" alt="Our Product Range"/>
                      <FirstDomesticCategory linkName={'Our Product Range'} className={`position-absolute`}></FirstDomesticCategory>
                      {/* <div className="domestic-international-title position-absolute">
                          <h2 className="btmToTp">Our Product Range</h2>
                          
                           
                      </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <Link href={"https://shop.satvam.in/"} target="_blank" className="dome-int position-relative d-block">
                        <ExportedImage src="/images/media/dealer_equiry.webp" width={960} height={670} className="w-auto h-auto" alt="Shop Satvam Products Online"/>
                        <div className="domestic-international-title position-absolute">
                            <h2 className="btmToTp">Shop Satvam Products Online</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>	
    </section>
  )
}

export default ExploreMore