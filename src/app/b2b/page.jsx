"use client"
// import Swiper core and required modules
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Grid, A11y } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from 'react-bootstrap/Form';
import ModelComponent from './components/model';

//import DomesticeModel from './components/domesticeModel';

gsap.registerPlugin(ScrollTrigger);

export default function B2bBulk() {
	const initialized = useRef(false);
	const collageRef = useRef(null);
	const clientTitleRef = useRef(null);
	const clientSliderRef = useRef(null);
	const letsConnectRef = useRef(null);
	
	useEffect(() => {
	// if(!initialized.current){
	//   	initialized.current = true;  
		window.scrollTo(0, 0);
		setTimeout(function(){
		
		let ww = window.innerWidth;
		let wh = window.innerHeight;

		if(!initialized.current){
			initialized.current = true;  
		/* Start about We Serve*/
		const serve = document.getElementById('movement');
		//const serve = document.querySelectorAll('.movement');
		// const tooltip = document.getElementById('coordinates');
		// const toggle = document.getElementById('display-coordinates');
		if(serve){
		  serve.addEventListener('mousemove', function(e) {
			// Get dimensions of serve element
			const r = this.getBoundingClientRect()
	
			// Set x and y values prop values based on center of serve element
			this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
			this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
		  })
	
		  serve.addEventListener('mouseleave', function() {
			// Reset x and y prop values when no longer hovering
			this.style.setProperty('--x', 0)
			this.style.setProperty('--y', 0) 
		  })
		}
		}
		// Trigger animation on scroll
		gsap.timeline({
			scrollTrigger: {
			  trigger: collageRef.current,
			  start: "top bottom",
			  end: "bottom 75%",
			  scrub: 1,
		},
		}).fromTo(
			collageRef.current,
			{ opacity: 0, y: 150 },
			{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
		);

		// Trigger animation on scroll
		gsap.timeline({
			scrollTrigger: {
			  trigger: clientTitleRef.current,
			  start: "top bottom",
			  end: "50% 75%",
			  scrub: 1,
		},
		}).fromTo(
			clientTitleRef.current,
			{ opacity: 0, y: 150 },
			{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
		);
		// Trigger animation on scroll
		gsap.timeline({
			scrollTrigger: {
			trigger: clientSliderRef.current,
			start: "top bottom",
			end: "bottom 75%",
			markers:false,
			scrub: 1,
		},
		}).fromTo(
			clientSliderRef.current,
			{ opacity: 0, y: 150 },
			{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
		);
		
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
	},1000)
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
	},[]);
  return (<>  
			<section className="section we_serve marquee__main min-height100">
				<div className="serve_sub">
					<div id="movement" className="serve movement">
					<div className="serve__image-wrapper">
						<ExportedImage className="serve__image" width={1223} height={793} src="/images/masala-img.webp" alt=""/>
					</div>
					</div>
				</div>
					<div className="marquee"> {/*style={"--duration: 50s"} */}
					<div className="marquee__group">
						<p><span>We Serve *</span></p>
						<p aria-hidden="true"><span>We Serve *</span></p>
						<p aria-hidden="true"><span>We Serve *</span></p>
					</div>			  
					<div aria-hidden="true" className="marquee__group">
						<p><span>We Serve *</span></p>
						<p><span>We Serve *</span></p>
						<p><span>We Serve *</span></p>
					</div>
				</div>
				<div className="marquee marquee--reverse">{/* style={"--duration: 40s"}*/}
					<div className="marquee__group">
						<p><span>Hotels</span></p>
						<p aria-hidden="true"><span>Restaurants</span></p>
						<p aria-hidden="true"><span>Caterers</span></p>
					</div>			  
					<div aria-hidden="true" className="marquee__group">
						<p><span>Hotels</span></p>
						<p><span>Restaurants</span></p>
						<p><span>Caterers</span></p>
					</div>
				</div>
				<div className="marquee">{/*style={"--duration: 35s"}*/}
					<div className="marquee__group">
						<p><span>College</span></p>
						<p aria-hidden="true"><span>Company</span></p>
						<p aria-hidden="true"><span>Hospitals</span></p>
					</div>			  
					<div aria-hidden="true" className="marquee__group">
						<p><span>College</span></p>
						<p><span>Company</span></p>
						<p><span>Hospitals</span></p>
					</div>
				</div>
			</section>
			<section className="section question form-white min-height100 d-flex justify-content-center" ref={collageRef}>
				<ExportedImage src="/images/photo collage 1.webp" width={1920} height={1000} className="w-100 h-auto" alt="photo collage"/>
			</section>
        	<section className="section clients min-height100 d-flex align-items-center justify-content-center">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="text-center" ref={clientTitleRef}>Our Clients</h1>
							<div className="clients-carousel position-relative" ref={clientSliderRef}>
								<div className='clients-container'>
									<Swiper
										breakpoints={{
											// when window width is <= 499px
											300: {
											slidesPerView:3,
											spaceBetween:15,
										},
											575: {
												slidesPerView:4,
												spaceBetween:15,
											},
											768: {
												slidesPerView:4,
												spaceBetween:15,
											},
											// when window width is <= 999px
											992: {
												slidesPerView:4,
												spaceBetween:25,
											},
											1024:{
											slidesPerView:5,
											spaceBetween:25,
										}
										}}
											// install Swiper modules
											modules={[Grid, Pagination, A11y]}
											spaceBetween={0}
											slidesPerView={5}
											
											grid={{
												rows: 3,
												fill: "row",
											}}
											pagination={{ 
												clickable: true, 
												el: '.swiper-pagination',
												type:'bullets'
											}}
											onSwiper={(swiper) => console.log(swiper)}
											onSlideChange={() => console.log('slide change')}
									>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo1.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo2.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo3.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo4.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo5.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo6.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo7.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo8.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo9.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo10.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo11.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo12.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo13.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo14.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo15.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo1.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo2.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo3.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo4.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo5.webp" width={201} height={110} alt=""/></div></SwiperSlide>
										<SwiperSlide><div className="logo-slide"><ExportedImage src="/images/logo6.webp" width={201} height={110} alt=""/></div></SwiperSlide>
									</Swiper>  
								</div>
								<div className='button-Atrrangment'>
									<div className='button-swiper'>
									<div className='swiper-pagination clients-pagination'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
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
  </>)
}

//export default B2bBulk