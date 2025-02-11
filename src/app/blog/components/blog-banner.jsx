"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogBanner = () => {
  const mediaReveal = useRef(false);
  const scrollToSection = (id) => {
	const element = document.getElementById(id)
	element?.scrollIntoView({ behavior: "smooth"});
 };
  useEffect(() => {
    	// Trigger a class name change on scro
		window.scrollTo(0, 0);
		ScrollTrigger.create({
			trigger: mediaReveal.current,
			start:'top center',
			end:'bottom top',
			onEnter() {
				mediaReveal.current.classList.add('transition_media');				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const transition_media_class = document.querySelector(".transition_media");
					if(transition_media_class){
						mediaReveal.current.classList.remove('transition_media');
					}		
				}
		});
   		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	},[]);
  return (
    <>
        <section className="section min-height100 d-flex align-items-center justify-content-center banner-main media-banner cust-pad-left-right" ref={mediaReveal}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="d-flex"><div className="m-title">B</div><div className="m-title">l</div><div className="m-title">o</div><div className="m-title">g</div><span className="m-title">.</span></h1>
					</div>
				</div>
			</div>
			<button onClick={()=>scrollToSection("section1")} className="anchor scroll-link scroll-link-right d-block position-absolute"><img src="/images/down.svg" className="w-100 h-auto" width={66} height={66} alt="down"/></button>
		</section>
    </>
  )
}

export default BlogBanner