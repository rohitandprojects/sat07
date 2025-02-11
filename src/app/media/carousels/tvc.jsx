"use client";
import { useCategories } from "@/app/lib/firebase/tvc/read";
import { useEffect } from "react";
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, A11y } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";  // Import the Fancybox styles
import Loading from "@/app/components/Loader";
/*import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";*/

export default function TvcFilm() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Fancybox configuration can be added here if needed
        });
        return () => {
            //ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            Fancybox.destroy();
          };
    },[])
  const { data, error, isLoading } = useCategories();
  if (isLoading) return <div className="loadidng-media"><Loading></Loading></div>
  if (data?.length){
      return <div className="mediatvc-carousel btmToTp2">
      <Swiper
          breakpoints={{
              // when window width is <= 499px
              300: {
                spaceBetween:15,
                },
                575: {
                  spaceBetween:20,
                },
              768: {
              spaceBetween:35,
              },
              // when window width is <= 999px
              992: {
              spaceBetween:50,
              }
          }}
          // install Swiper modules
          modules={[Mousewheel,A11y,Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          freeMode={false}
          pagination={{ 
              clickable: true, 
              el: '.mediatvc-pagination',
              type:'bullets'
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          className='mediaTVCswiper media-carousel position-relative'
      data-lenis-prevent>
          {data?.map((category, index) =>{
                  return (                    
                      <SwiperSlide key={index}><Link href={category?.filmLink} data-fancybox="tvc" data-custom-class="my-youtube">
                          <div className="media-card"><ExportedImage src={category?.iconURL} width={800} height={560} loading="lazy" alt="Events"/></div>
                          <div className="media-dtl">
                            <h2>{category?.name}</h2>
                          </div>
                          </Link>
                      </SwiperSlide>
                  )
              }
          )}
          {/* <SwiperSlide><div className="media-card"><ExportedImage src="/images/media/tvc/tvc1.webp" width={800} height={500} loading="lazy" alt="tvc"/></div></SwiperSlide>
			<SwiperSlide><div className="media-card"><ExportedImage src="/images/media/tvc/tvc2.webp" width={800} height={500} loading="lazy" alt="tvc"/></div></SwiperSlide> */}
      </Swiper>
      <div className="mediatvc-pagination"></div>
  </div>
  }
}