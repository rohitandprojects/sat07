"use client";
//import { useCategories } from "@/app/lib/firebase/category/read";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import CategoryFirstDomestic from "./@category_first_domestic/page";
import CategoryFirstInternational from "./@category_first_international/page";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
const Product = () => {
  const initialized = useRef(false);
  //const { data, error, isLoading } = useCategories();

  useEffect(()=>{
      if(!initialized.current){
          initialized.current = true;  
    //console.log('hello');
    function isTouchDevice() {
      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }
    //https://stackoverflow.com/questions/59494037/how-to-detect-the-device-on-react-ssr-app-with-next-js
    const BAcontainer = document.querySelector('.before-after-container');
    const sliderRange = document.querySelector('.slider');
    var xPercent, yPercent,flag=1,firstTime=1;
    if(isTouchDevice() === true){     
      if(BAcontainer){
        BAcontainer.querySelector('.slider').classList.add('show');
        BAcontainer.querySelector('.slider').addEventListener('input', (e) => {
        BAcontainer.style.setProperty('--position', `${e.target.value}%`);
      });
      }
      if(firstTime == 1){
        SliderVal();
        firstTime = 2;
      }
      
    }else{
      if(BAcontainer){
          BAcontainer.addEventListener('mousemove', (evt) => {
            xPercent = parseInt(evt.pageX / window.innerWidth * 100);
            yPercent = parseInt(evt.pageY / window.innerHeight * 100);
            flag = xPercent;
            if (flag > 30){
              if(flag < 70){
                BAcontainer.style.setProperty('--position', `${(100 - xPercent)}%`);
              }
            }
            else{
            }  
          });  
      }
    }
    function SliderVal(){
      if(BAcontainer){
        if(window.innerWidth < 767){
          setTimeout(function(){
            BAcontainer.style.setProperty('--position', '100%');
          },3000)
        }
      }
    }
  }
  },[])
  // if (isLoading){
  //   return <p className="loading">Loading...</p>
  // }
  // if (error){
  //     return <p className="loading error">Loading...</p>
  // }
  // if (!data){
  //     return <p className="loading error">Data not found!</p>
  // }

  return (
    <section className="section banner-before-after">
        <div className="before-after-container">
						<div className="image-container position-relative z-index9">
							<div className="image-before overflow-hidden">
								<div className="width100 height-100 position-relative">							
									<div className="before-after-detail position-absolute">
										<div className="before-after-detail--sub">
											<h2>Domestic Range</h2>
                      {/* {
                        data?.map((item, key) => {
                          return <> <ul key={item.name}>                  
                            { item.name && key==0 && <li><Link href={`/product/domestic/${item?.id}`} className="btn">{item?.slug}</Link></li>}                  
                          </ul>
                          </>
                        })
                      }  
                      srcset="/_next/image?url=%2Fimages%2Felement-1.webp&w=64&q=75 1x, /_next/image?url=%2Fimages%2Felement-1.webp&w=128&q=75 2x"
                      */}
											<p>Add the taste of purity to all your<br/> exquisite cuisines. Because life me<br/> “FEEKA MANA HAI”</p>
                      <div className="learn-more-div">
                          <CategoryFirstDomestic linkName={'Learn More'} className={`view-job-offers-link position-relative`}></CategoryFirstDomestic>
                      </div>
										</div>
									</div>
									<div className="ba-img position-absolute z-index0"><ExportedImage width={905} height={892} className="w-100 h-auto" src="/images/product-before.webp" alt="Satvam"/></div>
									<div className="element element1 position-absolute z-index1"><ExportedImage width={126} height={149} className="w-100 h-auto" src="/images/element-1.webp" alt="Satvam"/></div>
									<div className="element element2 position-absolute z-index1"><ExportedImage width={233} height={227} className="w-100 h-auto" src="/images/element-2.webp" alt="Satvam"/></div>
									<div className="element element3 position-absolute z-index1"><ExportedImage width={90} height={66} className="w-100 h-auto" src="/images/element-3.webp" alt="Satvam"/></div>
									<div className="element element4 position-absolute z-index1"><ExportedImage width={41} height={45} className="w-100 h-auto" src="/images/element-4.webp" alt="Satvam"/></div>
									<div className="element element5 position-absolute z-index9"><ExportedImage width={207} height={241} className="w-100 h-auto" src="/images/element-5.webp" alt="Satvam"/></div>
									<div className="element element6 position-absolute z-index-1"><ExportedImage width={150} height={166} className="w-100 h-auto" src="/images/element-6.webp" alt="Satvam"/></div>
								</div>
							</div>
							<div className="image-after overflow-hidden">
								<div className="width100 height-100 position-relative">
									<div className="element element2 position-absolute "><ExportedImage width={195} height={189} className="w-100 h-auto" src="/images/element-2.webp" alt="Satvam"/></div>
									<div className="before-after-detail position-absolute">
										<div className="before-after-detail--sub">
											<h2>International Range</h2>
											<p>Gracing people world-wide with<br/> our spices and associated<br/> products.</p>
											<div className="learn-more-div">
                          <CategoryFirstInternational linkName={'Learn More'} className={`view-job-offers-link position-relative`}></CategoryFirstInternational>                        
                          {/* <Link href={'/product/international'}  className="view-job-offers-link position-relative">Learn More</Link> */}
                          {/* <a href="products/international" className="view-job-offers-link position-relative">Learn More</a> */}
                      </div>
										</div>
									</div>
									<div className="ba-img position-absolute"><ExportedImage width={905} height={875} className="w-100 h-auto" src="/images/product-after.webp" alt="Satvam"/></div>
									<div className="element element1 position-absolute z-index1"><ExportedImage width={183} height={217} className="w-100 h-auto" src="/images/element-1.webp" alt="Satvam"/></div>
									<div className="element element7 position-absolute z-index1"><ExportedImage width={148} height={120} className="w-100 h-auto" src="/images/element-7.webp" alt="Satvam"/></div>
									<div className="element element8 position-absolute z-index1"><ExportedImage width={45} height={38} className="w-100 h-auto" src="/images/element-8.webp" alt="Satvam"/></div>
									<div className="element element9 position-absolute z-index1"><ExportedImage width={81} height={102} className="w-100 h-auto" src="/images/element-9.webp" alt="Satvam"/></div>
									<div className="element element11 position-absolute z-index1"><ExportedImage width={42} height={39} className="w-100 h-auto" src="/images/element-11.webp" alt="Satvam"/></div>
								</div>
							</div>
						</div>
						<input type="range" min="0" max="100" value="50" readOnly aria-label="Percentage of before photo shown" className="slider"/>
						<div className="slider-line" aria-hidden="true"></div>
						<div className="slider-button" aria-hidden="true">
							<img src="/images/left-right-arrow.svg" className="w-100" alt="arrow"/>
						</div>
				</div>
    </section>
  )
}

export default Product