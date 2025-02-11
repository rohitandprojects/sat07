"use client";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { Controller, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
const Carousel = ({ interCarousel }) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    const handleSlide = (activeIndex) => {
        setActiveCategory(activeIndex);        
    }
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[interCarousel]);

  return (<section className="section product_all min-height100">
  <div className="export-contents position-absolute">
        <div className="slider-two-main">
            {/* <div className="slider-two-container"> */}
            <Swiper
                initialSlide={1}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                /*autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}*/
                pagination={{
                    el: ".sliderTwo-pagination",
                    clickable: true
                }}
                modules={[Controller,EffectFade]}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                //onSlideChange={() => console.log('slide change')}                
                onSlideChange={(swiperCore) => {
                    const {
                      activeIndex,
                      snapIndex,
                      previousIndex,
                      realIndex,
                    } = swiperCore;
                    // console.log({ activeIndex, snapIndex, previousIndex, realIndex });
                    handleSlide(activeIndex)
                }}
                effect="fade"
                className="slider-two-container"
                //onSwiper={(swiper) => console.log(swiper)}
                >
                <div className="swiper-wrapper">
                  {interCarousel?.map((item, key) => {
                    return <SwiperSlide key={key}>
                      <div className="int-pro-holder"><div className="square-holder"><ExportedImage src={item?.iconURL} width={800} height={800} alt={item?.name} loading="lazy"/></div>{/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}</div>
                  </SwiperSlide>               
                  })}

                    {/* <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide> */}
                </div>
            </Swiper>     
            <div className="export-pagination">
                <div className="swiper-pagination sliderOne-pagination"></div>
            </div>
        </div>
      {/* <div className="slider-one-container"> */}
            <Swiper
              direction={isMobile ? 'horizontal' : 'vertical'}
                initialSlide={1}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides ={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    el: ".sliderOne-pagination",
                    clickable: true,
                    type:'bullets'
                }}
                modules={[Controller, Pagination, Autoplay]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                className="slider-one-container"                
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
            >
            <div className="swiper-wrapper">
                {interCarousel?.map((item, key) => {
                    return <SwiperSlide key={key}>
                      <div className="vert-slide w-100"><div className="square-holder"><ExportedImage src={item?.iconURL} width={200} height={200} alt={item?.name} loading="lazy"/></div></div>
                  </SwiperSlide>               
                  })}

              {/* <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide> */}
          </div>
      </Swiper>
  </div>
  <div className="banner-contents position-absolute">
      <div className="container">
          <div className="row">
              <div className="col-12 export-title position-relative">
                  {interCarousel?.map((item, key) => {
                    return <div key={key} className={activeCategory === key ? 'active slide-content' : 'slide-content'}>
                      <h3>{item?.name}</h3>
                      {item?.content && <div dangerouslySetInnerHTML={{__html: item?.content}}></div>}
                      <div><Link href={item?.link} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>               
                  })}
 
              </div>
          </div>
      </div>
  </div>
</section>
  )
}

export default Carousel