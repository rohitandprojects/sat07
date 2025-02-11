"use client";
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Pagination, Mousewheel,FreeMode,Navigation,A11y } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelComponent from '../b2b/components/model';
import SocialMedia from '@/app/components/social';

gsap.registerPlugin(ScrollTrigger);

const Media = () => {
  const mediaReveal = useRef(false);
  const letsConnectRef = useRef(null);
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
		<section className="section cust-pad-left-right" id="section1">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm-8 blog-col">
						<div className="blog-carousel position-relative btmToTp2">
							<Swiper
									// install Swiper modules
									modules={[Pagination,Mousewheel,Navigation,FreeMode,A11y]}
									spaceBetween={0}
									slidesPerView={1}
									mousewheel={false}
									freeMode={false}
									navigation={{
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev',
									}}
									onSwiper={(swiper) => console.log(swiper)}
									onSlideChange={() => console.log('slide change')}
									className='blog-swiper position-relative'
							>
								<SwiperSlide>
									<Link href={"#"} className="blog-card position-relative">
										<ExportedImage src="/images/blog/blog-1.webp" width={1084} height={520} loading="lazy" alt="blog"/>
										<div className="blog-detail position-absolute">
											<h3>Taste the Luxury Instant Mix Kesar Basundi Delivered to Your Doorstep</h3>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href={"#"} className="blog-card position-relative">
										<ExportedImage src="/images/blog/blog-1.webp" width={1084} height={520} loading="lazy" alt="blog"/>
										<div className="blog-detail position-absolute">
											<h3>Taste the Luxury Instant Mix Kesar Basundi Delivered to Your Doorstep</h3>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href={"#"} className="blog-card position-relative">
										<ExportedImage src="/images/blog/blog-1.webp" width={1084} height={520} loading="lazy" alt="blog"/>
										<div className="blog-detail position-absolute">
											<h3>Taste the Luxury Instant Mix Kesar Basundi Delivered to Your Doorstep</h3>
										</div>
									</Link>
								</SwiperSlide>
							</Swiper>
							<div className="blog-navigation position-absolute"> 
								<div className="swiper-button-prev"><img src="/images/right-arrow.svg" width={34} height={22} alt='prev'/></div>
								<div className="swiper-button-next"><img src="/images/right-arrow.svg" width={34} height={22} alt='next'/></div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-2.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Perfect diet plan Enjoy Delicious Multi Millet Masala Khichdi Mix in a moment</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-3.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Festive Season is Here! Make Gulab Jamun Instant Mix in minutes – Shop Online Now</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-4.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Bring the taste of Gujarat at home with health. Buy Multi Millet Handvo Mix Now.</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-5.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Monsoon Masala Tea A Taste of Comfort for the Rainy Days</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-6.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Don’t Let the Rain Stop You! Order Your Favorite Gota Instant Mix Online This Monsoon</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-7.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Rainy Day Delights: Buy Methi Gota Instant Mix for a Unique Twist</h3>
						</Link>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 blog-col">
						<Link href={"#"} className="blog-box">
							<div className="blog-holder position-relative"><ExportedImage src="/images/blog/blog-8.webp" className="position-absolute" width={525} height={350} loading="lazy" alt="blog"/></div>
							<h3>Monsoon Munchies: Buy Delicious Dalwada Instant Mix Online Today !</h3>
						</Link>
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
    </>
  )
}

export default Media