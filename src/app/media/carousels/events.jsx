"use client";
import { useCategories } from "@/app/lib/firebase/event/read";
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, A11y } from 'swiper/modules';
import Loading from "@/app/components/Loader";
/*import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";*/

export default function CategoryFirstDomestic() {
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
              el: '.mediaEvent-pagination',
              type:'bullets'
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          className='mediaEventswiper media-carousel position-relative'
      data-lenis-prevent>
          {data?.map((category, index) =>{
                  return (                    
                      <SwiperSlide key={index}>
                          <div className="media-card"><ExportedImage src={category?.iconURL} width={800} height={560} loading="lazy" alt="Events"/></div>
                          <div className="media-dtl">
                          <div className="media-date">
                            <ul className="event-date">
                                {category?.eventFromDate &&
                                    <li>
                                        {new Date(category?.eventFromDate).toUTCString().slice(4, -12)}
                                    </li>
                                }
                                {!category?.eventFromDate &&
                                    <li></li>
                                }
                                {category?.eventToDate &&
                                    <li> <strong> to </strong>
                                        {new Date(category?.eventToDate).toUTCString().slice(4, -12)}
                                    </li>
                                }
                                {!category?.eventToDate &&
                                    <li></li>
                                }
                            </ul>
                            </div>
                            <h2>{category?.name}</h2>
                          </div>
                      </SwiperSlide>
                  )
              }
          )}
          {/* <SwiperSlide key={index}>
              <div className="media-card"><ExportedImage src="/images/media/event/event1.webp" width={800} height={560} loading="lazy" alt="Events"/></div>
              <div className="media-dtl">
                  <div className="media-date">18-20 June 2023</div>
                  <h2>Africa’s Big 7</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="media-card"><ExportedImage src="/images/media/event/event2.webp" width={800} height={560} loading="lazy" alt="Events"/></div>
              <div className="media-dtl">
                  <div className="media-date">1-3 December 2023</div>
                  <h2>Delhi Sial Exhibition</h2>
              </div>
          </SwiperSlide> */}
      </Swiper>
      <div className="mediaEvent-pagination"></div>
  </div>
  }
}