"use client";
import { useCategoriesAbout } from "@/app/lib/firebase/categoryAbout/read";
//import { useCategories } from "@/app/lib/firebase/event-exhibition/read";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CategoryFirstDomestic from "../product/@category_first_domestic/page";
import CategoryFirstInternational from "../product/@category_first_international/page";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import VideoAbout from "./video";
import Job from "./job";
import CertificationLogos from "../components/certification-logos";
import WorldMap from "../components/world-map";
//import Exhibition from "../components/exhibition";
gsap.registerPlugin(ScrollTrigger);

const AboutPage = ({ post }) => {
  
  const elementRef = useRef(null);
  const boxRef = useRef(null);
  const abtTitleRef1 = useRef(null);
  const abtTitleRef2 = useRef(null);
  const abtTitleRef3 = useRef(null);
  const titleTextRef = useRef(null);
  const aboutVideoWrapRef = useRef(null);
  const aboutVideoImgRef = useRef(null);
  const spoon1Ref = useRef(null);
  const spoon2Ref = useRef(null);
  const spoon3Ref = useRef(null);
  const worldMapRef = useRef(null);
  const certifiedLogosRef = useRef(null);
  const people_make_eleRef = useRef(null);
  const people_make_textRef = useRef(null);
  const jobTitleRef = useRef(null);
  const jobTextRef = useRef(null);
  const jobLogosRef = useRef(null);
  const jobOfferRef = useRef(null);
  const scrollToSection = (id) => {
	const element = document.getElementById(id)
	element?.scrollIntoView({ behavior: "smooth"});
 };
 const { data, error, isLoading } = useCategoriesAbout();
  useEffect(() => {
	  	window.scrollTo(0, 0);
		let ww = window.innerWidth;
		let wh = window.innerHeight;
		
		gsap.fromTo(
			elementRef.current,
			{ filter: 'blur(1rem)' },
			{ filter: 'blur(0rem)', duration: 1 } 
		);

		gsap.fromTo(abtTitleRef1.current, 
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }
		);
		gsap.fromTo(abtTitleRef2.current, 
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: .1 }
		);
		gsap.fromTo(abtTitleRef3.current, 
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: .2 }
		);
	  
		  gsap.timeline({
			scrollTrigger: {
			  trigger: boxRef.current,
			  start: "bottom bottom",
			  end: "bottom 60%",
			  scrub: 1,
			},
		  }).fromTo(
			boxRef.current,
			{ opacity: 0, y: -150 },
			{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
		  );
		  
		gsap.timeline({
			scrollTrigger: {
			  trigger: titleTextRef.current,
			  start: "top bottom",
			  end: "50% 65%",
			  scrub:2,
			},
		  }).fromTo(
			titleTextRef.current,
			{ opacity: 0, x: 150 },
			{ opacity: 1, x: 0, duration:2, ease: "power3.out" }
		  );
		gsap.timeline({
			scrollTrigger: {
			  trigger: aboutVideoWrapRef.current,
			  start:'top bottom',
			end:'bottom top',
			  scrub:1,
			},
		  }).fromTo(
			aboutVideoImgRef.current,
			{ y:'-30%' },
			{ y:'5%', duration:1.5, ease: "sine.out"}
		  );
		gsap.timeline({
			scrollTrigger: {
			  trigger: spoon1Ref.current,
			  start:'top 85%',
				end:'top 50%',
			  scrub:2,
			},
		  }).fromTo(
			spoon1Ref.current,
			{ rotation:70 },
			{ rotation:0, duration:1.5, ease: "sine.out"}
		  );
		gsap.timeline({
			scrollTrigger: {
			  trigger: spoon2Ref.current,
			  start:'top 90%',
			end:'top 45%',
			  scrub:2,
			},
		  }).fromTo(
			spoon2Ref.current,
			{ rotation:70 },
			{ rotation:0, duration:1.5, ease: "sine.out"}
		  );
		gsap.timeline({
			scrollTrigger: {
			  trigger: spoon3Ref.current,
			  start:'top 95%',
			end:'top 40%',
			  scrub:2,
			},
		  }).fromTo(
			spoon3Ref.current,
			{ rotation:70 },
			{ rotation:0, duration:1.5, ease: "sine.out"}
		  );
		   ScrollTrigger.create({
			trigger: worldMapRef.current,
			start:'top center', 
			end:'bottom top', 
			onEnter() {
				worldMapRef.current.classList.add('dropping');
				setTimeout(function() {worldMapRef.current.classList.add('transition_mapname');}, 1000);
				
				},
				onLeave() {
					
				},
				onEnterBack() {
					
				},
				onLeaveBack() {
					const transition_mapname_class = document.querySelector(".transition_mapname");
					if(transition_mapname_class){
						worldMapRef.current.classList.remove('transition_mapname');
						setTimeout(function(){worldMapRef.current.classList.remove('dropping');}, 100);
					}		
				}
		  });
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
						
						}
					}
					});
				}	
			} 
			
			gsap.timeline({
				scrollTrigger: {
				  trigger: people_make_eleRef.current,
				  start: "bottom bottom",
				  end: "bottom 60%",
				  scrub: 1,
				},
			  }).fromTo(
				people_make_eleRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			  );
			gsap.timeline({
				scrollTrigger: {
				  trigger: people_make_textRef.current,
				  start: "bottom bottom",
				  end: "bottom 60%",
				  scrub: 1,
				},
			  }).fromTo(
				people_make_textRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			  );
			gsap.timeline({
				scrollTrigger: {
				  trigger: certifiedLogosRef.current,
				  start: "bottom bottom",
				  end: "bottom 60%",
				  scrub: 1,
				},
			  }).fromTo(
				certifiedLogosRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			  ); 
			  
		
			  	const crptVid = document.getElementById('people_make');
				var CVidHeight,pmeHeight;
				function corporate_WindowSize() {
					if(window.innerWidth > 991 && window.innerWidth > 1024){
						CVidHeight = corporateVideoHeight/2;
					}
					else if(window.innerWidth > 767 && window.innerWidth < 991){
						CVidHeight = corporateVideoHeight/2.85;
					}
					else{
						CVidHeight = corporateVideoHeight/2.75;
					}
				}
				if(crptVid){
					var people_makeHeight = document.getElementById('people_make').clientHeight;
					var corporateVideoHeight = document.getElementById('corporate_video').clientHeight;
					pmeHeight = (corporateVideoHeight/2) - (people_makeHeight/2);
					corporate_WindowSize();
				}
				const pms_img = gsap.timeline({
					scrollTrigger: {        
					trigger: '.corporate_video', 
					start:'top 90%',
						end:'40% 70%',
					pin: false,
					scrub: true,
					markers:false,
					}
				});
				if(ww > 767){
						pms_img.to('.corporate_video .corporate_video_sub',{duration:6,y:-corporateVideoHeight/2})
						.to('.corporate_video_sub img',{duration:5,opacity:0.5,delay:-6});
				}
				else{}
				
				if(ww > 1499){
					pms_img.to('.people_make',{duration:5,y:pmeHeight-95,delay:-5});
				}
				else if(ww > 1399 && ww < 1500){
					pms_img.to('.people_make',{duration:5,y:pmeHeight,delay:-5});
				}
				else if(ww > 1299 && ww < 1400){
					pms_img.to('.people_make',{duration:5,y:pmeHeight,delay:-5});
				}
				else if(ww > 1279 && ww < 1300){
					pms_img.to('.people_make',{duration:5,y:pmeHeight-32,delay:-5});
				}
				else if(ww > 1023 && ww < 1280){
					pms_img.to('.people_make',{duration:5,y:pmeHeight+33,delay:-5});
				}
				else if(ww > 767 && ww < 1024){
					pms_img.to('.people_make',{duration:5,y:pmeHeight+35,delay:-5});
				}
				else if(ww > 575 && ww < 768){
					pms_img.to('.people_make',{duration:5,y:pmeHeight+35,delay:-5});
				}
				else{
					
				}
			gsap.timeline({
				scrollTrigger: {
					trigger:jobTitleRef.current,
					start: "bottom bottom",
					end: "bottom 60%",
					scrub: 1,
				},
			}).fromTo(
				jobTitleRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			);
			gsap.timeline({
				scrollTrigger: {
					trigger:jobTextRef.current,
					start: "bottom bottom",
					end: "bottom 60%",
					scrub: 1,
				},
			}).fromTo(
				jobTextRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			);
			gsap.timeline({
				scrollTrigger: {
					trigger:jobLogosRef.current,
					start: "bottom bottom",
					end: "bottom 60%",
					scrub: 1,
				},
			}).fromTo(
				jobLogosRef.current,
				{ opacity: 0, y: 150 },
				{ opacity: 1, y: 0, duration:2, ease: "power3.out" }
			);
			gsap.timeline({
				scrollTrigger: {
					trigger:jobOfferRef.current,
					start: "bottom bottom",
					end: "bottom 60%",
					scrub: 1,
				},
			}).fromTo(
				jobOfferRef.current,
				{ opacity:0},
				{ opacity:1,duration:2, ease: "power3.out" }
			);
			
	return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },[post]);
  return (<>
       <section className="section banner-main">
			<div className="about-banner blur1"><div className="about-banner-sub position-relative w-100"><ExportedImage ref={elementRef} src="/images/about-banner.webp" width={1062} height={869} alt="about"/></div></div>
			<div className="banner-contents position-absolute">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="lines overflow-hidden"><h1 ref={abtTitleRef1}>Satvam Making</h1></div>
                  <div className="lines overflow-hidden"><h1 ref={abtTitleRef2}>delicious food</h1></div>
                  <div className="lines overflow-hidden"><h1 ref={abtTitleRef3}>for the family</h1></div>
                </div>
              </div>
            </div>
          </div>
		  <button onClick={()=>scrollToSection("section1")} className="anchor scroll-link d-block position-absolute"><img src="/images/down.svg" className="w-100 h-auto" width={66} height={66} alt="down"/></button>
		</section>
        <section className="section about_products" id="section1">
        <div className="about_sub">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h2 className="rightToLeft" ref={boxRef}>Providing real and natural food products & ingredients is PASSION of SATVAM.</h2>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div ref={titleTextRef}>
                  <p>The name Satvam means purity and inherent power. And true to our name we are focused on delivering products that retain all of their purity and authenticity. At Satvam we are in the business of creating spices and associated products that adhere to the highest standards of quality and hygiene.</p>
                  <p>For that sake we get our raw materials from the fields of different parts of India so that we can make sure the authenticity of that particular region. That is the reason we are able to deliver best quality products to our consumers. At Satvam, we aim to everything right and true to our own roots and values.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	  <VideoAbout></VideoAbout>
	  {/* {data?.map((link, key) => {
			return <VideoAbout videoLink={link} key={key} />
		})} */}
      {/* <section className="about-video position-relative">
			<div className="about-video-div position-relative">
				<div className="about-video-sub position-absolute">
					<Link href={'#'} className="video-link position-absolute"><img src="/images/polygon.svg" width={100} height={100} alt="about" /></Link>
					<div className="about-video-img overflow-hidden" ref={aboutVideoWrapRef}><ExportedImage src="/images/about-video.webp" ref={aboutVideoImgRef} width={1450} height={700} alt="about" className="imgReveal w-100 h-auto"/></div>
				</div>
			</div>
		</section> */}
        <section className="section cryogenic">
			<div className="cryogenic-div">
				<div className="spoon spoon1 position-absolute"><ExportedImage ref={spoon1Ref} src="/images/spoon1.webp" width={880} height={864} alt="cryogenic" className="w-100 h-auto"/></div>
				<div className="spoon spoon2 position-absolute"><ExportedImage ref={spoon2Ref} src="/images/spoon2.webp" width={880} height={864} alt="cryogenic" className="w-100 h-auto"/></div>
				<div className="spoon spoon3 position-absolute"><ExportedImage ref={spoon3Ref} src="/images/spoon3.webp" width={880} height={864} alt="cryogenic" className="w-100 h-auto"/></div>
				
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-5 col-sm-6 offset-lg-5 offset-md-5 offset-sm-4">
							<div className="cryogenic-cont position-relative">
								<div className="cryogenic-wheel position-absolute">
									<div className="wheel">
										<img src="/images/wheel.svg" width={115} height={115} alt="wheel" className="w-100 h-auto"/>
									</div>
									<div className="wheel-stroke position-absolute"><img src="/images/wheel-stroke.svg" width={115} height={115} alt="wheel" className="w-100 h-auto"/></div>
									<div className="wheel-cold position-absolute"><div><img src="/images/wheel-cold.svg"width={40} height={40} alt="wheel"/></div></div>
								</div>
								<div className="cryogenic-percentage d-flex align-items-center justify-content-center">
									<div className="percentage">100%</div>
									<div className="percentage-grinding"><div className="cryogenic-txt text-uppercase">Cryogenic</div><div className="grinding-txt text-uppercase">Grinding</div></div>
								</div>
								<ul>
									<li><img src="/images/aroma_icon.svg" width={80} height={80} alt="aroma"/><div>Preserves Natural <strong>Colour</strong>, <strong>Flavour</strong> and <strong>Aroma</strong> of the Spices.</div></li>
									<li><img src="/images/oil_icon.svg" width={80} height={80} alt="aroma"/><div>Reduce loss of <strong>Volatile Oils</strong>, <strong>Etheric Oils</strong> and <strong>Oleoresins</strong>.</div></li>
								</ul>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="section world-map" ref={worldMapRef}>
			<WorldMap></WorldMap>
			{/* <div className="world-map-div position-relative">
				<img src="/images/world-map-top-bg.svg" width={1901} height={95} alt="wheel" className="world-map-strip w-100"/>
				<div className="world-map-sub position-relative">
					<img src="/images/world-map.svg" width={1901} height={839} alt="wheel" className="w-100"/>
					<div className="world-map-toolteep position-absolute">
					<div className="position-absolute toolteep canada"><div className="position-absolute"><span>CANADA</span></div></div>
					<div className="position-absolute toolteep usa"><div className="position-absolute"><span>USA</span></div></div>
					<div className="position-absolute toolteep brazil"><div className="position-absolute"><span>BRAZIL</span></div></div>
					<div className="position-absolute toolteep european"><div className="position-absolute"><span>EUROPEAN COUNTRIES</span></div></div>
					<div className="position-absolute toolteep africa"><div className="position-absolute"><span>SOUTH AFRICA</span></div></div>
					<div className="position-absolute toolteep uganda"><div className="position-absolute"><span>UGANDA</span></div></div>
					<div className="position-absolute toolteep saudi"><div className="position-absolute"><span>SAUDI ARABIA</span></div></div>
					<div className="position-absolute toolteep uae"><div className="position-absolute"><span>UAE</span></div></div>
					<div className="position-absolute toolteep india"><div className="position-absolute"><span>INDIA</span></div></div>
					<div className="position-absolute toolteep thailand"><div className="position-absolute"><span>THAILAND</span></div></div>
					<div className="position-absolute toolteep malaysia"><div className="position-absolute"><span>MALAYSIA</span></div></div>
					<div className="position-absolute toolteep singapore"><div className="position-absolute"><span>SINGAPORE</span></div></div>
					<div className="position-absolute toolteep australia"><div className="position-absolute"><span>AUSTRALIA</span></div></div>
					</div>
				</div>
				<img src="/images/world-map-btm-bg.svg" width={1901} height={91} alt="wheel" className="world-map-strip w-100"/>
			</div> */}
		</section>
		{/* <Exhibition></Exhibition> */}
    	<section className="section advertising" id="panels">
			<div id="panels-container" className="event-exhibition">
				<article id="panel-2" className="panel gray">
					<div className="cards-wrapper">
						{post?.map((item, key) => {
							return <div key={key} className="card">                
								{(key != 1) && <div className="card-holder position-relative"><ExportedImage className="position-absolute" src={item?.iconURL} width={724} height={457} alt={item?.name} /></div>}
								{key === 1 && <div className="card-title w-100"><h2 className="top-btm-bdr position-relative text-center">Advertising</h2><img src="/images/advertising_icon.svg" width={100} height={86} className="advertising_icon position-absolute" alt="advertisiment" /></div>}
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
							<img src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" />
						</div>
						<div className="card">
							<div className="card-title w-100">
								<h2 className="top-btm-bdr position-relative text-center">Event &<br/> Exhibition</h2>
							</div>
						</div>
						<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={457} alt="advertisiment" /><img src="/images/advertising_icon.svg" width={100} height={86} className="advertising_icon position-absolute" alt="advertisiment" /></div>
						<div className="card"><ExportedImage src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" /></div>
						<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={457} alt="advertisiment" /></div>
						<div className="card"><ExportedImage src="/images/adv-01.webp" width={771} height={737} alt="advertisiment" /></div>
						<div className="card"><ExportedImage src="/images/adv-02.webp" width={724} height={457} alt="advertisiment" /></div>
					</div>
				</article>
			</div>
		</section>  */}
        <section className="certified">
			<div className="standard" ref={certifiedLogosRef}>
				<CertificationLogos></CertificationLogos>
			</div>
			<div className="container position-relative certified-pms">
				<div className="row">
					<div className="col-12">
						{/* <ul className="w-100 people_make_ele justify-content-between align-items-center" ref={certifiedLogosRef}>
							<li><ExportedImage src="/images/fssai.webp" width={187} height={107} alt="fssai" className="w-100 h-auto"/></li>
							<li><ExportedImage src="/images/ISO.webp" width={103} height={106} alt="ISO" className="w-100 h-auto"/></li>
							<li><ExportedImage src="/images/export-quality-product.webp" width={148} height={95} alt="export quality product" className="w-100 h-auto"/></li>
							<li><ExportedImage src="/images/BRC-Food.webp" width={92} height={149} alt="BRC-Food" className="w-100 h-auto"/></li>
							<li><ExportedImage src="/images/FDA.webp" width={181} height={79} alt="FDA" className="w-100 h-auto"/></li>
							<li><ExportedImage src="/images/HALAL.webp" width={97} height={149} alt="HALAL" className="w-100 h-auto"/></li>
						</ul> */}
						<div className="people-make-satvam people_make mx-auto text-center" id="people_make">
							<h2 className="people_make_ele" ref={people_make_eleRef}>People Make Satvam</h2>
							<p className="people_make_ele" ref={people_make_textRef}>Satvam is a story woven by people - our dedicated team, our loyal customers, and
								our cherished partners. Together, we craft exceptional spices that bring joy to
								kitchens around the world.</p>
							{/* <div className="people_make_ele view-job-offers text-center"><Link href={'#'} className="view-job-offers-link position-relative" data-bs-toggle="modal" data-bs-target="#careersModal">View Job Offers</Link></div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="job-openings">
				<div className="corporate_video position-relative z-0" id="corporate_video_div">
					<div className="corporate_video_sub" id="corporate_video"><ExportedImage src="/images/corporate_video.webp" width="1920" height="992" alt="corporate" className="pms w-100"/></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="people-make-satvam mx-auto text-center">
								<h2 ref={jobTitleRef}>Current Job Openings</h2>
								<p ref={jobTextRef}>At Satvam, we believe in the power of people to uphold our commitment to purity
									and excellence. Our team is at the heart of our brand's success, ensuring that every
									detail is cared for and that authenticity shines through in every product. <strong>Join us!! </strong> 
									where People Make Satvam, where you can contribute to delivering the best and
									upholding our deep-rooted values.</p>
							</div>							
							<ul className="job-logos-ul justify-content-center align-items-center" ref={jobLogosRef}>
								<Job></Job>
								{/* <li><ExportedImage src="/images/naukri.webp" width={359} height={52} alt="naukri" className="mw-100 h-auto"/></li>
								<li><ExportedImage src="/images/indeed.webp" width={223} height={60} alt="indeed" className="mw-100 h-auto"/></li>
								<li><ExportedImage src="/images/linkedIn.webp" width={241} height={60} alt="linkedIn" className="mw-100 h-auto"/></li> */}
							</ul>
							<div className="view-job-offers text-center" ref={jobOfferRef}>
								{data?.map((post, key) => {
									return <Link key={key} href={post.id === 'apply-now' ? post.link : "#" } className={post.id === 'apply-now' ? "view-job-offers-link position-relative" : "d-none"} target="_blank">{post.id === 'apply-now' && post.name}</Link>               
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="domestic-international">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="dome-int position-relative d-block">
									<ExportedImage src="/images/domestic.webp" width={960} height={670} className="w-100 h-auto" alt="domestic"/>
									<div className="domestic-international-title position-absolute">
										<p>Explore Our</p>
										<h2>Domestic Range</h2>
									</div>
                  <CategoryFirstDomestic className={`position-absolute`}></CategoryFirstDomestic>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="dome-int position-relative">
									<ExportedImage src="/images/international.webp" width={960} height={670} className="w-100 h-auto" alt="international"/>
									<div className="domestic-international-title position-absolute">
										<p>Explore Our</p>
										<h2>International Range</h2>
									</div>
                  <CategoryFirstInternational className={`position-absolute`}></CategoryFirstInternational>
								</div>
							</div>
						</div>
					</div>	
				</section>
      </>
  )
};
  
  export default AboutPage;