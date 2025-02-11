"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import ExportedImage from "next-image-export-optimizer";
import { hyphenToSpace } from "@/utils/transformName";
import Modal from 'react-bootstrap/Modal';
import B2bForm from "@/app/b2b/components/b2b-form";
import CertificationLogos from "@/app/components/certification-logos";
import ListingLoading from "../../listing-loading";
//import B2bForm from "@/b2b/components/B2bForm";
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedClientComponentInter = ({ post, matchCateName, getAllPost }) => {
    const [b2bShow, setB2bShow] = useState(false);
    const titleMainRef = useRef(null);
    const productMainRef = useRef(null);
    const productImgRef = useRef(null);
    const productContainerRef = useRef(null);
    const routers = useRouter();
    const scrolling = useRef(false);
    const iniFlag = useRef(false);
    //const activeIndexRef = useRef(0); // Reference to track the active index
    //const [isActive, setIsActive] = useState();
    var nextIndex = 0;
    var nextProductName = 0;
    useEffect(() => {
        window.scrollTo(0, 0);
        //setTimeout(() => window.scrollTo(0, 0), 100);
       // console.log('detail page');
       gsap.fromTo(titleMainRef.current, 
        { opacity: 0, y: -150 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(productMainRef.current, 
        { opacity: 0, y: -150 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: .1 }
      );
        /* s Product Main Image & Title */
        gsap.timeline({
          scrollTrigger: {
            trigger: productContainerRef.current,
            start:'top top',
            end:'1000 0%',
            scrub: 1,
            invalidateOnRefresh: true,
             markers:false,
        },
        }).fromTo(
          productImgRef.current,
          {y: 0 },
          {y: -200, duration:2, ease: "power3.out" }
        );
        /*gsap.utils.toArray('.product-large-img img').forEach(pli => {
            gsap.to(pli,{
                scrollTrigger:{
                    trigger:pli,
                    start:'top 54%',
                    end:'0% top',
                    toggleActions:'play none none none',
                    scrub:true,
                    markers:false,
                },
                y:-200,ease:"sine.out",
            });
        });*/
         /* e Product Main Image & Title */
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
        // pin each box for 300px when they hit the top
        gsap.utils.toArray(".box ").forEach(box => {
            ScrollTrigger.create({
                trigger: box,
                pin: true,
                start: "top top",
                end: "+=300"
            });
        });
        /* e Horizontal Panels */
      /* gsap.utils.toArray('.btmToTp').forEach(btmToTp => {
            gsap.from(btmToTp,{
              scrollTrigger:{
                  trigger:btmToTp,
                  start:'top bottom',
                  end:'bottom 15%',
                  toggleActions:'play none play reverse',
                  scrub: true,
                  markers:true,
              },
              y:100,
              opacity:1,
              ease:"power3.inOut",
              duration:1.5
            });
          }); */
      const elements = document.querySelectorAll(".btmToTp");
  
      elements.forEach((element, index) => {
        const animationProps = {
          opacity:1,
          y: 150,
          duration: 1.5,opacity:0
        };
  
        const scrollTriggerProps = {
          trigger: element,
          start:'top bottom',
        end:'bottom 80%',
          scrub: true,
          markers:false,
        };
  
        // Apply different animations based on index (index % 6)
        switch (index % 12) {
          case 0:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
          case 1:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
          case 2:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
          case 3:
            gsap.fromTo(
              element,
              { ...animationProps, y: 175},
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps}
            );
            break;
            case 4:
            gsap.fromTo(
              element,
              { ...animationProps, y: 200 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 5:
            gsap.fromTo(
              element,
              { ...animationProps, y: 225 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 6:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 7:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 8:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 9:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, delay:.15, scrollTrigger: scrollTriggerProps }
            );
            break;
            case 10:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, delay:.15, scrollTrigger: scrollTriggerProps }
            );
            break;
          default:
            gsap.fromTo(
              element,
              { ...animationProps, y: 150 },
              { ...animationProps, y: 0,opacity:1, scrollTrigger: scrollTriggerProps }
            );
        }
      });
      if(!scrolling.current){
        scrolling.current = true;
        const timerFlag = setTimeout(() => { 
        if(!iniFlag.current){
          iniFlag.current = true; 
          // console.log('iniFlag:- true true');
          return () => clearTimeout(timerFlag);
        }
      }, 3000);
    }
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      // If scrolled to the bottom, trigger your callback function     

      if (scrolledToBottom) {
        if(iniFlag.current){
          iniFlag.current = false;
          //console.log('Product Detail');
          const productLoader = document.querySelector('.product-loader');
          if(productLoader){
            productLoader.classList.add('active');
          }
          handleScrollToBottom();
        }
      }
      //console.log("scroll");
    };
    
    //var nextIndex = "";
      var productId = post?.id;

      {getAllPost.map((product, index) =>{
        if(product?.id == productId){
            //console.log('--------------------------------index----', index, product?.id);
            nextIndex = index + 1;
            nextProductName = nextIndex;
            //console.log('----------------------------------nextProductName--', nextProductName);
          }
        }
      )};

    const handleScrollToBottom = () => {
      if (nextIndex < getAllPost.length) {
        routers.push(`/product/international-detail/${getAllPost[nextIndex]?.id}`);
        const timer3 = setTimeout(() => {
          if(!iniFlag.current){
            iniFlag.current = true; 
            //console.log('iniFlag:- timer3 true');
            return () => clearTimeout(timer3);
          }
        }, 4500);
      }
      else{
        routers.push(`/product/international-detail/${getAllPost[0]?.id}`);
        nextIndex = 0;
        const timer4 = setTimeout(() => {
          if(!iniFlag.current){
            iniFlag.current = true; 
            //console.log('iniFlag:- timer4 true');
            return () => clearTimeout(timer4);
          }
        }, 4500);
      }
      
      //console.log(nextCategory);
      //debugger;
      /*if(nextCategory){
        console.log(nextCategory);
        router.push(nextCategory);
      }*/
      
      // Perform actions you want here, e.g., fetching more data, etc.
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
      // Cleanup function to kill scroll triggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [post]);
  
    return (
      <>

{matchCateName?.map((cateName, key) => {
  return <div key={key} className="learn-more-div position-fixed pf-left">{(cateName?.id == post?.categoryId) && <Link className="view-job-offers-link position-relative" href={`/product/international/${post?.categoryId}`}>Back to {cateName?.name}</Link>}</div>
})}
    {/* <div className={'learn-more-div position-fixed pf-left'}> 
      <Link className="view-job-offers-link position-relative" href={`/product/international/${post?.categoryId}`}>Back to {hyphenToSpace(post?.categoryId)}</Link>
    </div> */}
    <div className="learn-more-div position-fixed pf-right">
      <div className="view-job-offers-link position-relative" role="button" onClick={() => setB2bShow(true)}>Inquire Now</div>
      {/* {post?.buyNow && <Link className="view-job-offers-link position-relative" href={post?.buyNow} target="_blank">Buy Now</Link>} */}
    </div>
    <Modal
          size="fullscreen"
          show={b2bShow}
          onHide={() => setB2bShow(false)}
          className='B2BModal'
        >
          <Modal.Header closeButton>
             
          </Modal.Header>
          <Modal.Body className='form-white'>
          	<div className="container">
              <B2bForm></B2bForm>
          </div>
          </Modal.Body>
    </Modal>
    {(!post?.content4) &&
    <section className="section product-detail-banner" ref={productContainerRef}>
      <div className="product-detail-title pageLoad">
        <h1 className="text-center" ref={titleMainRef} data-text={'detail'}>{post?.name}</h1>
      </div>
      <div className="product-large-img" ref={productMainRef}><ExportedImage ref={productImgRef} src={post?.productURL} className="w-100 h-auto" width={619} height={740} alt={post?.name}/></div>
      {/* <Link href={`/product/domestic/${post?.categoryId}`}>{post?.categoryId}</Link> */}
    </section>
    }
    {(post?.slogan1 || post?.slogan2) &&
    <section className="section teekha-kamal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="btmToTp"><span>{post?.slogan1}</span> <span>{post?.slogan2}</span></h2>
            {/* <h2 className="btmToTp">
            Teekha Kamal
            <span>Laal Bemisaal</span>
            </h2> */}
            {post?.content && <div dangerouslySetInnerHTML={{__html: post?.content}} className="dishes-memorable btmToTp"></div>}
            {/* <div dangerouslySetInnerHTML={{__html: post?.content}} className="dishes-memorable btmToTp"></div> */}          
            {/* <div className="dishes-memorable btmToTp"><p>Make your dishes
            memorable with the
            vibrant colour and
            spicy flavour of <strong>Satvam Chilli Powder</strong>.</p></div> */}
          </div>
        </div>
      </div>
    </section>
    }
    {(post?.redIconOneURL || post?.redIconTwoURL || post?.redIconThreeURL || post?.redIconFourURL) &&
    <section className="section features">
      <div className="container">
        <div className="row">      
          <div className="col-12">
            <div className="row justify-content-center">
            {post?.redIconOneText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp">
                  <div className="teekha-icon">
                    <img src={post?.redIconOneURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconOneText}/>
                    {/* <img src="/images/icon-thermometere.svg" alt="Moderately Pungent"/> */}
                  </div>
                  <p>{post?.redIconOneText}</p>
                  {/* <p>Moderately<br/>Pungent</p> */}
                </div>
              </div>
              }
              {post?.redIconTwoText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp">
                  <div className="teekha-icon">
                    <img src={post?.redIconTwoURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconTwoText}/>
                    {/* <img src="/images/icon-quality.svg" alt="Top-Quality"/> */}
                  </div>
                  <p>{post?.redIconTwoText}</p>
                  {/* <p>Made from Top-Quality<br/>Guntur Chillies</p> */}
                </div>
              </div>
              }
              {post?.redIconThreeText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp">
                  <div className="teekha-icon">
                    <img src={post?.redIconThreeURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconThreeText}/>
                    {/* <img src="/images/icon-dark.svg" alt="Naturally Dark"/> */}
                  </div>
                  <p>{post?.redIconThreeText}</p>
                  {/* <p>Naturally Dark<br/> Red in Colour</p> */}
                </div>
              </div>
              }
              {post?.redIconFourText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp">
                  <div className="teekha-icon">
                      <img src={post?.redIconFourURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconFourText}/>
                      {/* <img src="/images/icon-cryogenic.svg" alt="cryogenic"/> */}
                  </div>
                  <p>{post?.redIconFourText}</p>
                  {/* <p>Ground Using Cryogenic <br/> Technology</p> */}
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    }
    {(post?.pouch?.length || post?.box?.length || post?.jar?.length || post?.container?.length) &&
    <section className="section sku" id="panels">
      <div id="panels-container" className="sku-section">
        <div className="container">
          <div className="row">
            <div className="col-12 btmToTp">
              <h2>SKU</h2>
              <ul className="sku-list">
                {/* <li className={post?.pouch.length > 0 ? 'active' : ''}>Pouch</li> */}
                <li className={post?.pouch && post?.pouch.length > 0 ? 'active' : ''}>Pouch</li>
                <li className={post?.box && post?.box.length > 0 ? 'active' : ''}>Box</li>                
                <li className={post?.jar && post?.jar.length > 0 ? 'active' : ''}>Jar</li>
                <li className={post?.smallJar && post?.smallJar.length > 0 ? 'active' : ''}>Small Jar</li>
                {/* <li className={post?.container && post?.container.length > 0 ? 'active' : ''}>Container</li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <div className="cards-wrapper flex-wrap">
            </div>
        </div> */}
         
        <div className="panel-main sku-pouch btmToTp2">
          <article id="panel-2" className="panel gray">
            <div className="cards-wrapper">
              {post?.pouch && post?.pouch.length > 0 && post?.pouch.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><div className="sku-holder"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div></div>
              })}
              {post?.box && post?.box.length > 0 && post?.box.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'box ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><div className="sku-holder"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div></div>
              })}
              {post?.jar && post?.jar.length > 0 && post?.jar.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'jar ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><div className="sku-holder"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div></div>
              })}
              {post?.smallJar && post?.smallJar.length > 0 && post?.smallJar.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'Small Jar ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><div className="sku-holder"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div></div>
              })}
              
            </div>
          </article>
        </div>
      </div>
    </section>}
    {post?.container &&
    <section className="section cs-section min-height100 d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div className="col-12 btmToTp">
								<h2>Container Specification</h2>
							</div>
						</div>
             
						<div className="row c-specification justify-content-center">
              {post?.pallet && post?.pallet.length > 0 &&
                <div className="col-lg-6 col-md-6 col-sm-6 btmToTp2 pallet-specification">
                    <div className="row btmToTp">
                      <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="c-specification-icon"><img src={`/images/sku/${post?.pallet[0]}`} className="w-100 h-auto" alt="pallet"/></div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="c-specification-dtl">
                          <h3>Pallet</h3>
                          {/* <p className="mb-3">16-18 Metric Tonne</p>
                          <h3>Pallet Size:</h3>
                          <p>1000 x 1200 mm</p> */}
                        </div>
                      </div>
                    </div>
                </div>
              }
              {post?.container[0] &&
                <div className="col-lg-6 col-md-6 col-sm-6 btmToTp2">
                  <div className="row btmToTp">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <div className="c-specification-icon"><img src={`/images/sku/${post?.container[0]}`} className="w-100 h-auto" alt="container"/></div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                      <div className="c-specification-dtl">
                        <h3>Quantity:</h3>
                        <p className="mb-3">16-18 Metric Tonne</p>
                        <h3>Pallet Size:</h3>
                        <p>1000 x 1200 mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {post?.container[1] &&
                <div className="col-lg-6 col-md-6 col-sm-6 btmToTp2">
                  <div className="row btmToTp">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <div className="c-specification-icon"><img src={`/images/sku/${post?.container[1]}`} className="w-100 h-auto" alt="container"/></div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                      <div className="c-specification-dtl">
                        <h3>Quantity:</h3>
                        <p className="mb-3">26 Metric Tonne</p>
                        <h3>Pallet Size:</h3>
                        <p>1000 x 1200 mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
						</div>
					</div>
		</section>
    }
    {post?.content2 &&
    <section className="section ingredients">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ingredients-watermark">Ingredients</div>
              <h2 className="btmToTp">These are my parts</h2>
              {post?.content2 && <div dangerouslySetInnerHTML={{__html: post?.content2}} className="btmToTp max-width815 ms-auto me-auto"></div>}
            </div>
        </div>
      </div>
    </section>
    }
    {(!post?.content4) &&
    <section className="section standardize">
      <div className="standard btmToTp">
        <CertificationLogos></CertificationLogos>
      </div>
  </section>
    }
    {post?.expiry &&
    <section className="section best-before">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ingredients-watermark">Best Before</div>
            <h2 className="btmToTp">{post?.expiry} Months</h2>
            <p className="btmToTp">From the date of packaging</p>
          </div>
        </div>
      </div>
    </section>
    }
    {post?.SpiceItUpTitle &&
    <section className="section spice-it-up">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className="btmToTp">{post?.SpiceItUpTitle}</h1>
          {post?.content3 && <div dangerouslySetInnerHTML={{__html: post?.content3}} className="max-width590 ms-auto me-auto btmToTp"></div>}
            {/* <h1 className="btmToTp">Spice it Up</h1>
            <p className="btmToTp2">Enjoy an array of dishes ranging from<br/>
              chutney, gravy and sauces,<br/>
              that are irresistible with the authentic taste of chilli powder<br/>
              sourced from the best farms.</p> */}
          </div>
        </div>
      </div>
    </section>
    }
    {post?.content4 &&
      <section className="section international-product-detail2">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title">
              <h1 className="text-center">{post?.name}</h1>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 whole-spices-col">
              <div className="whole-spices-img-holder">
                <ExportedImage src={post?.productURL} className="w-100 h-auto" width={975} height={668} alt={post?.name}/>
                {/* <img src="/images/whole-spices.webp" width="975" height="668" className="w-100 h-auto" alt="Whole Spices"/> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              {post?.content4 && <div dangerouslySetInnerHTML={{__html: post?.content4}} className="whole-spices-ul btmToTp2"></div>}
              {/* <ul className="whole-spices-ul row">
                <li>Chilli</li><li>Ajwain seeds</li>
                <li>Turmeric</li><li>Dry red chilli whole</li>
                <li>Cumin</li><li>Garam masala whole</li>
                <li>Black cumin spices</li><li>Black cardamon</li>
                <li>Coriander seeds</li> <li>Char magaz</li>
                <li>Cumin seeds</li><li>Quinoa seeds</li>
                <li>Fennel seeds</li><li>Nutmeg seeds</li>
                <li>Black pepper whole</li><li>Cinnamon stick flat</li>
                <li>Kalonji</li><li>Clove</li>
                <li>Star anise</li><li>Brown flax seeds</li>
                <li>Mace</li><li>Black mustard small</li>
                <li>Dill seeds</li><li>Sesame seeds white</li>
                <li>Fenugreek seeds</li><li>Sesame seeds black</li>
              </ul> */}
            </div>
          </div>
        </div>        
      </section>      
    }
    <div className="product-loader min-height100 text-center">
        <ListingLoading></ListingLoading>
        {getAllPost.map((productName, index) =>{
          if(productName?.id == post?.id){              
              nextIndex = index + 1;
              nextProductName = nextIndex;
              //console.log('getAllPost:', getAllPost.length);
              if(nextProductName == getAllPost.length)
              {
                nextIndex = 0;
                nextProductName = nextIndex;
              }
              // <h2>{getAllPost[nextProductName]?.id}</h2>
            }
          }
        )}
        <h2>{getAllPost[nextProductName]?.name}</h2>
      </div>
      </>
    );
};
  
  export default AnimatedClientComponentInter;