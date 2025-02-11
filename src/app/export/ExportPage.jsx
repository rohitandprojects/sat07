"use client";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import { Pagination, Grid, A11y } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from './components/carousel';
import Catalogue from './components/model';
import CertificationLogos from "../components/certification-logos";
import WorldMap from "../components/world-map";
gsap.registerPlugin(ScrollTrigger);

const ExportPage = ({ post, interCarousel }) => {
	//const initialized = useRef(false);
	const cargoRef = useRef(false);
	const cargoShipRef = useRef(false);
	const cargoTitleRef = useRef(false);
	const worldMapRef = useRef(false);
	const interestedRef = useRef(false);
	const interestedCatelogueRef = useRef(false);
	useLayoutEffect(() => {

		if (typeof window !== "undefined") {
			gsap.timeline({
				scrollTrigger: {
				trigger: cargoRef.current,
				start: 'top top',
					end: '+=700', 
					pin: true,
					scrub: true,
					markers:false,
			},
			}).fromTo(
				cargoShipRef.current,
				{ marginLeft:'-15%' },
				{ marginLeft:'0%', duration:5}
			).fromTo(
				cargoTitleRef.current,
				{ marginLeft:'-10%', opacity:0 },
				{ marginLeft:'0%', duration:5,opacity:1,delay:-3}
			);
		}
		
	  }, []);
	useEffect(() => {
		window.scrollTo(0, 0);
		
		// Trigger a class name change on scroll
		ScrollTrigger.create({
			trigger: worldMapRef.current,
			start:'top center',
			end:'bottom top',
			onEnter() {
				worldMapRef.current.classList.add('dropping');
				setTimeout(function() {worldMapRef.current.classList.add('transition_mapname');}, 1000);				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const transition_mapname_class = document.querySelector(".transition_mapname");
					if(transition_mapname_class){
						worldMapRef.current.classList.remove('transition_mapname');
						setTimeout(function(){worldMapRef.current.classList.remove('dropping');}, 100);
					}		
				}
		});
		const elements = document.querySelectorAll(".btmToTp");
		elements.forEach((element, index) => {
        const animationProps = {
          opacity:0,
          duration:2,		  
        };
  
        const scrollTriggerProps = {
          trigger: element,
          start:'top 90%',
        end:'bottom 75%',
          scrub: true,
          markers:false,
        };
		const scrollTriggerProps1 = {
			trigger: element,
			start:'top 84%',
		  end:'bottom 67%',
			scrub: true,
			markers:false,
		  };
		const scrollTriggerProps2 = {
			trigger: element,
			start:'top 95%',
		  end:'bottom 77%',
			scrub: true,
			markers:false,
		  };
        // Apply different animations based on index (index % 6)
        switch (index % 6) {
          case 0:
            gsap.fromTo(
              element,
              { ...animationProps, y: -100 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
          case 1:
            gsap.fromTo(
              element,
              { ...animationProps, y: 100 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
          case 2:
            gsap.fromTo(
              element,
              { ...animationProps, x: -150},
              { ...animationProps, x: 0,opacity:1, scrollTrigger: scrollTriggerProps1 }
            );
            break;
          case 3:
            gsap.fromTo(
              element,
              { ...animationProps, x: 150},
              { ...animationProps, x: 0,opacity:1, scrollTrigger: scrollTriggerProps2}
            );
            break;
            case 4:
            gsap.fromTo(
              element,
              { ...animationProps, y: 175},
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 5:
            gsap.fromTo(
              element,
              { ...animationProps, y: -125 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
        }
      });
	  /* s Horizontal Panels */
	  const panelcont = document.querySelector("#panels-container");
	  const panels = gsap.utils.toArray("#panels-container .panel");
	  if(window.innerWidth > 767){
		  if(panelcont)
		  {
			  const tween = gsap.to(panels, {
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
	  /* e Horizontal Panels */
	  // Trigger animation on scroll
	  gsap.timeline({
		scrollTrigger: {
			trigger:interestedRef.current,
			start: "bottom bottom",
			end: "bottom 60%",
			scrub: 1,
		},
		}).fromTo(
			interestedRef.current,
			{ opacity: 0, y: 150 },
			{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
		);
		// Trigger animation on scroll
		gsap.timeline({
			scrollTrigger: {
				trigger:interestedCatelogueRef.current,
				start: "bottom bottom",
				end: "bottom 60%",
				scrub: 1,
			},
			}).fromTo(
				interestedCatelogueRef.current,
				{ opacity:0},
				{ opacity:1,duration:2, ease: "power3.out" }
			);
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
	},[post,interCarousel]);
  return (
    <>
    <section className="section banner-main export-banner" ref={cargoRef}>
		<div className="cardgo-main">
			<div className="cardgo"><ExportedImage src="/images/cardgo.webp" ref={cargoShipRef} width={1435} height={349} className="w-100 h-auto" alt="cargo"/></div>
			<h1 ref={cargoTitleRef}>Export in 20+ Countries</h1>
		</div>
	</section>
	<section className="section world-map" ref={worldMapRef}>
		<WorldMap></WorldMap>
	</section>
	<Carousel interCarousel={interCarousel}></Carousel>
	<section className="we-serve we-serve-certification align-content-around flex-wrap min-height100">
		<div className="w-100 text-center">
			<h2 className='btmToTp'>We Serve</h2>
			<div className="marquee__main hrc btmToTp">
				<div className="marquee">{/* style="--duration: 25s" */}
					<div className="marquee__group">
						<p><span>Hotels.</span></p>
						<p><span>Restaurants.</span></p>
						<p><span>Caterers.</span></p>
					</div>			  
					<div className="marquee__group">
						<p><span>Hotels.</span></p>
						<p><span>Restaurants.</span></p>
						<p><span>Caterers.</span></p>
					</div>
				</div>
			</div>
		</div>
		<div className="w-100 text-center">	
			<div className="weserve-certification">
				<h2 className='btmToTp'>Certification</h2>
				<div className="standard btmToTp">
					<CertificationLogos></CertificationLogos>
				</div>
			</div>
		</div>
		{/* <div className="w-100 text-center">	
			<div className="weserve-certification">
				<h2 className='btmToTp'>Certification</h2>
				<ul className="w-100 d-flex justify-content-between align-items-center btmToTp">
					<li><div><ExportedImage src="/images/fssai.webp" width={187} height={107} alt="fssai" /></div></li>
					<li><div><ExportedImage src="/images/ISO.webp" width={103} height={106} alt="ISO" /></div></li>
					<li><div><ExportedImage src="/images/FDA.webp" width={181} height={110} alt="FDA" /></div></li>
					<li><div><ExportedImage src="/images/BRC-Food.webp" width={92} height={149} alt="BRC-Food" /></div></li>
					<li><div><ExportedImage src="/images/kosher-certification.webp" width={292} height={100} alt="Kosher" /></div></li>
					<li><div><ExportedImage src="/images/haccp.webp" width={112} height={106} alt="HACCP" /></div></li>
					<li><div><ExportedImage src="/images/HALAL.webp" width={97} height={149} alt="HALAL" /></div></li>
					<li><div><ExportedImage src="/images/spices_board.webp" width={121} height={160} alt="Spice Board" /></div></li>
					<li><div><ExportedImage src="/images/apeda.webp" width={222} height={160} alt="APEDA" /></div></li>
				</ul>
			</div>
		</div> */}
	</section>
	<section className="section advertising" id="panels">
		<div id="panels-container" className="event-exhibition">
			<article id="panel-2" className="panel gray">
				<div className="cards-wrapper">
					{post?.map((item, key) => {
						return <div key={key} className="card">                
							{(key != 1) && <div className="card-holder position-relative"><ExportedImage className="position-absolute" src={item?.iconURL} width={724} height={457} alt={item?.name} /></div>}
							{key === 1 && <div className="card-title w-100"><h2 className="top-btm-bdr position-relative text-center">Event &<br/> Exhibition</h2><img src="/images/advertising_icon.svg" width={100} height={86} className="advertising_icon position-absolute" alt="advertisiment" /></div>}
						</div>
					})}
					
				</div>
			</article>
		</div>
	</section>
	{/* <section className="section advertising" id="panels">
		<div id="panels-container" className="event-exhibition">
		<article id="panel-2" className="panel gray">
			<div className="cards-wrapper">
				<div className="card">
					<ExportedImage src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" />
				</div>
				<div className="card">
					<div className="card-title w-100">
						<h2 className="top-btm-bdr position-relative text-center">Event &<br/> Exhibition</h2>
					</div>
				</div>
				<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={724} alt="advertisiment" /><img src="/images/advertising_icon.svg" width={724} height={724} className="advertising_icon position-absolute" alt="advertisiment" /></div>
				<div className="card"><ExportedImage src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" /></div>
				<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={724} alt="advertisiment" /></div>
				<div className="card"><ExportedImage src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" /></div>
				<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={724} alt="advertisiment" /></div>
			</div>
		</article>
		</div>
	</section> */}
	<section className="min-height100 d-flex align-items-center justify-content-center export-watermark">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
				<div className="joining-watermark" ref={interestedRef}>INTERESTED IN<br/>JOINING US?</div>
					<div ref={interestedCatelogueRef}>
						<Catalogue></Catalogue>
					</div>
					{/* <div className="lines overflow-hidden"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal" className="view-job-offers-link position-relative btmToTp2">Download E-Catalogue</a></div> */}
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default ExportPage